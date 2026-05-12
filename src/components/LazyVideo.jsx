import { useEffect, useRef, useState } from "react";

import styles from "./LazyVideo.module.css";

const MOBILE_QUERY = "(max-width: 759px), (pointer: coarse)";
const MOBILE_ROOT_MARGIN = "180px 0px";
const DESKTOP_ROOT_MARGIN = "420px 0px";
const MAX_MOBILE_LOADING_VIDEOS = 1;

let activeMobileLoads = 0;
const mobileLoadQueue = [];

const requestMobileLoad = (grantLoad) => {
  if (activeMobileLoads < MAX_MOBILE_LOADING_VIDEOS) {
    activeMobileLoads += 1;
    grantLoad();
    return () => {
      activeMobileLoads = Math.max(0, activeMobileLoads - 1);
      const nextGrantLoad = mobileLoadQueue.shift();
      if (nextGrantLoad) {
        activeMobileLoads += 1;
        nextGrantLoad();
      }
    };
  }

  mobileLoadQueue.push(grantLoad);

  return () => {
    const queueIndex = mobileLoadQueue.indexOf(grantLoad);
    if (queueIndex >= 0) {
      mobileLoadQueue.splice(queueIndex, 1);
      return;
    }

    activeMobileLoads = Math.max(0, activeMobileLoads - 1);
    const nextGrantLoad = mobileLoadQueue.shift();
    if (nextGrantLoad) {
      activeMobileLoads += 1;
      nextGrantLoad();
    }
  };
};

export default function LazyVideo({ src, className = "", label = "Видео", autoPlay = true, loop = true }) {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const pendingPlayRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting);
      },
      {
        rootMargin: isMobile ? MOBILE_ROOT_MARGIN : DESKTOP_ROOT_MARGIN,
        threshold: 0.01,
      },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (!isNearViewport) return undefined;

    if (!isMobile) {
      setShouldLoad(true);
      return undefined;
    }

    let hasReleasedSlot = false;
    const releaseMobileLoad = requestMobileLoad(() => setShouldLoad(true));

    const releaseOnce = () => {
      if (hasReleasedSlot) return;
      hasReleasedSlot = true;
      releaseMobileLoad();
    };

    const video = videoRef.current;
    const releaseTimerId = window.setTimeout(releaseOnce, 3500);
    video?.addEventListener("loadeddata", releaseOnce, { once: true });
    video?.addEventListener("playing", releaseOnce, { once: true });

    return () => {
      window.clearTimeout(releaseTimerId);
      video?.removeEventListener("loadeddata", releaseOnce);
      video?.removeEventListener("playing", releaseOnce);
      releaseOnce();
    };
  }, [isMobile, isNearViewport]);

  useEffect(() => {
    if (!isMobile || isNearViewport || !shouldLoad) return;

    const video = videoRef.current;
    pendingPlayRef.current = false;

    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }

    setShouldLoad(false);
    setHasStarted(false);
  }, [isMobile, isNearViewport, shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.load();

    if (pendingPlayRef.current) {
      pendingPlayRef.current = false;
      video.play().catch(() => {});
      return;
    }

    if (!autoPlay) return;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  }, [autoPlay, isMobile, shouldLoad]);

  const handlePlayClick = () => {
    if (shouldLoad) {
      videoRef.current?.play().catch(() => {});
      setHasStarted(true);
      return;
    }

    pendingPlayRef.current = true;
    setShouldLoad(true);
    setHasStarted(true);
  };

  return (
    <div ref={rootRef} className={`${styles.lazyVideo} ${className}`.trim()}>
      <video
        ref={videoRef}
        className={styles.media}
        src={shouldLoad ? src : undefined}
        muted
        loop={loop}
        playsInline
        controls={shouldLoad}
        preload="metadata"
        aria-label={label}
        onPlay={() => setHasStarted(true)}
      />
      {!hasStarted ? (
        <button type="button" className={styles.playButton} onClick={handlePlayClick} aria-label={`Воспроизвести: ${label}`}>
          <i className={styles.playIcon} aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
