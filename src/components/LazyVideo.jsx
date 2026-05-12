import { useEffect, useRef, useState } from "react";

import styles from "./LazyVideo.module.css";

const MOBILE_QUERY = "(max-width: 759px), (pointer: coarse)";

export default function LazyVideo({ src, className = "", label = "Видео", autoPlay = true, loop = true }) {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const pendingPlayRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
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
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: isMobile ? "120px 0px" : "420px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, [isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (pendingPlayRef.current) {
      pendingPlayRef.current = false;
      video.play().catch(() => {});
      return;
    }

    if (isMobile || !autoPlay) return;

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
        preload={isMobile ? "none" : "metadata"}
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
