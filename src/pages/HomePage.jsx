import { useEffect, useRef, useState } from "react";

import { contactLinks } from "../data/contactLinks";
import { mediaLinks } from "../data/mediaLinks";
import PageShell from "../components/PageShell";
import styles from "./HomePage.module.css";

const aboutPoints = [
  {
    title: "Ведущий и актёр",
    text: "В фильмографии 7 проектов, включая работы федерального проката.",
  },
  {
    title: "Импровизация",
    text: "Умею держать ситуацию: однажды провёл мероприятие во время пожарной тревоги на площадке.",
  },
  {
    title: "Подход",
    text: "Юмор в моём исполнении - это интеллигентный дебош.",
  },
  {
    title: "Формат работы",
    text: "Фестиваль на сотни гостей или камерный корпоратив топ-менеджеров - разный подход, одинаковый уровень ответственности.",
  },
];

const verticalVideos = [
  { title: "Свадьба", src: mediaLinks.reelsVideoUrl },
  { title: "Корпоратив", src: "https://s3.twcstorage.ru/707f08c3-950c-4237-807b-4b7b9b3a486e/%D0%9F%D1%80%D0%BE%D0%BC%D0%BE%20%D1%81%D1%82%D0%B8%D0%BB%D1%8F%D0%B3%D0%B8.mp4" },
  { title: "Юбилей", src: "https://s3.twcstorage.ru/707f08c3-950c-4237-807b-4b7b9b3a486e/%D1%80%D0%B8%D0%BB%D1%81%20%D1%8E%D0%B1%D0%B8%D0%BB%D0%B5%D0%B9.mp4" },
];

const showreels = [
  { title: "Шоурил 2026", src: "https://s3.twcstorage.ru/707f08c3-950c-4237-807b-4b7b9b3a486e/%D1%81%D0%B2%D0%B0%D0%B4%D0%B5%D0%B1%D0%BD%D0%BE%D0%B5%20%D0%BF%D1%80%D0%BE%D0%BC%D0%BE.mp4" },
  { title: "Подборка мероприятий", src: mediaLinks.sampleVideoUrl },
];

const photos = [
  { src: "/wedding-main.jpg", alt: "Свадебный вечер", className: "center" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE1.jpg", alt: "Фото с мероприятия 1", className: "left" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE2.jpg", alt: "Фото с мероприятия 2", className: "right" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE3.jpg", alt: "Фото с мероприятия 3", className: "top" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE4.jpg", alt: "Фото с мероприятия 4", className: "center" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE5.jpg", alt: "Фото с мероприятия 5", className: "left" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE%206.jpg", alt: "Фото с мероприятия 6", className: "right" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE7.jpg", alt: "Фото с мероприятия 7", className: "top" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE8.jpg", alt: "Фото с мероприятия 8", className: "center" },
  { src: "/%D1%84%D0%BE%D1%82%D0%BE9.jpg", alt: "Фото с мероприятия 9", className: "right" },
];

const results = [
  "Проведение мероприятия",
  "Професионального DJ+ аппаратуру",
  "Составление индивидуального сценария",
  "Помощь в организации",
  "Спокойствие за ваше мероприятие",
];

const clients = ["Лента", "Магнит", "РТС-Тендер", "2ГИС"];

const reviewPhotos = [
  { src: "/feedbacks/%D0%B4%D0%B2%D0%B0%20%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D0%B0.png", alt: "Отзыв с мероприятия: два дивана" },
  { src: "/feedbacks/%D0%BC%D0%B0%D1%84%D0%B8%D1%8F1.jpg", alt: "Отзыв с мероприятия: мафия 1" },
  { src: "/feedbacks/%D0%BC%D0%B0%D1%84%D0%B8%D1%8F2.jpg", alt: "Отзыв с мероприятия: мафия 2" },
  { src: "/feedbacks/%D0%BE%D1%82%D0%B7%D1%8B%D0%B21.jpg", alt: "Отзыв с мероприятия 1" },
  { src: "/feedbacks/%D0%BE%D1%82%D0%B7%D1%8B%D0%B22.jpg", alt: "Отзыв с мероприятия 2" },
  { src: "/feedbacks/%D1%81%D0%B2%D0%B0%D0%B4%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%BE%D1%82%D0%B7%D0%B21.jpg", alt: "Свадебный отзыв" },
];

export default function HomePage() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const visiblePhotos = showAllPhotos ? photos : photos.slice(0, 5);
  const photoCardRefs = useRef([]);
  const [photoSpans, setPhotoSpans] = useState({});

  const updatePhotoSpan = (index) => {
    const card = photoCardRefs.current[index];
    if (!card) return;

    const image = card.querySelector("img");
    if (!image) return;

    const rowHeight = 8;
    const rowGap = 14;
    const imageHeight = image.getBoundingClientRect().height;
    const span = Math.max(1, Math.ceil((imageHeight + rowGap) / (rowHeight + rowGap)));

    setPhotoSpans((prev) => {
      if (prev[index] === span) return prev;
      return { ...prev, [index]: span };
    });
  };

  useEffect(() => {
    const onResize = () => {
      visiblePhotos.forEach((_, index) => updatePhotoSpan(index));
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, [visiblePhotos.length]);

  useEffect(() => {
    const recalc = () => {
      visiblePhotos.forEach((_, index) => updatePhotoSpan(index));
    };

    const rafId = window.requestAnimationFrame(recalc);
    const timerId = window.setTimeout(recalc, 350);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timerId);
    };
  }, [showAllPhotos, visiblePhotos.length]);

  const showPrevReview = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? reviewPhotos.length - 1 : prev - 1));
  };

  const showNextReview = () => {
    setActiveReviewIndex((prev) => (prev === reviewPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroName}>
              <p className={styles.eyebrow}>Ведущий мероприятий</p>
              <h1>Александр Залогин</h1>
            </div>

            <div className={styles.heroPhotoWrap}>
              <img src="/main.jpg" alt="Александр Залогин" className={styles.heroPhoto} />
            </div>

            <div className={styles.heroDetails}>
              <h2>Ведущий мероприятий, где важны люди</h2>
              <p className={styles.heroText}>Собираю вечер так, чтобы гостям было комфортно, а вам спокойно за результат.</p>
              <a className={styles.primaryButton} href="#lead">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h3>Обо мне</h3>
            <p className={styles.aboutIntro}>Меня зовут Александр - я ведущий мероприятий «про людей».</p>
          </div>
          <div className={styles.pointsGrid}>
            {aboutPoints.map((item) => (
              <article key={item.title} className={styles.card}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p>Reels / Shorts</p>
          </div>
          <div className={styles.verticalVideos}>
            {verticalVideos.map((item) => (
              <article key={item.title} className={styles.videoCard}>
                <video className={styles.verticalVideo} src={item.src} autoPlay muted loop playsInline controls preload="metadata" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p>Шоурилы</p>
          </div>
          <div className={styles.showreelGrid}>
            {showreels.map((item) => (
              <article key={item.title} className={styles.videoWideCard}>
                <video className={styles.wideVideo} src={item.src} autoPlay muted loop playsInline controls preload="metadata" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p>Фото с мероприятий</p>
            <h3>Живые эмоции гостей и атмосфера вечера</h3>
          </div>
          <div className={styles.photoGrid}>
            {visiblePhotos.map((photo, index) => (
              <figure
                key={`${photo.alt}-${index}`}
                className={styles.photoCard}
                ref={(node) => {
                  photoCardRefs.current[index] = node;
                }}
                style={photoSpans[index] ? { gridRowEnd: `span ${photoSpans[index]}` } : undefined}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`${styles.galleryPhoto} ${styles[photo.className]}`}
                  loading={showAllPhotos ? "eager" : "lazy"}
                  onLoad={() => updatePhotoSpan(index)}
                />
              </figure>
            ))}
          </div>
          {!showAllPhotos && photos.length > 5 ? (
            <button type="button" className={styles.showMoreButton} onClick={() => setShowAllPhotos(true)}>
              Показать еще
            </button>
          ) : null}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p>Что вы получите</p>
            <h3>Результат по факту</h3>
          </div>
          <div className={styles.resultsList}>
            {results.map((item, index) => (
              <article key={item} className={styles.resultItem}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p>Мне доверяют</p>
            <h3>Клиенты и бренды</h3>
          </div>
          <div className={styles.logosGrid}>
            {clients.map((client) => (
              <div key={client} className={styles.logoItem}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p>Отзывы</p>
            <h3>Что говорят после мероприятий</h3>
          </div>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewsStage}>
              <button type="button" className={styles.reviewArrow} onClick={showPrevReview} aria-label="Предыдущий отзыв">
                <span aria-hidden="true">‹</span>
              </button>
              <div className={styles.reviewsViewport}>
                <div className={styles.reviewsTrack} style={{ transform: `translateX(-${activeReviewIndex * 100}%)` }}>
                  {reviewPhotos.map((reviewPhoto, index) => (
                    <figure key={reviewPhoto.src} className={styles.reviewSlide} aria-hidden={index !== activeReviewIndex}>
                      <img className={styles.reviewImage} src={reviewPhoto.src} alt={reviewPhoto.alt} loading={index === activeReviewIndex ? "eager" : "lazy"} decoding="async" />
                    </figure>
                  ))}
                </div>
              </div>
              <button type="button" className={styles.reviewArrow} onClick={showNextReview} aria-label="Следующий отзыв">
                <span aria-hidden="true">›</span>
              </button>
            </div>
            <div className={styles.reviewsControls}>
              <div className={styles.reviewsDots}>
                {reviewPhotos.map((reviewPhoto, index) => (
                  <button
                    key={`${reviewPhoto.src}-dot`}
                    type="button"
                    className={`${styles.reviewDot} ${index === activeReviewIndex ? styles.reviewDotActive : ""}`}
                    onClick={() => setActiveReviewIndex(index)}
                    aria-label={`Показать отзыв ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lead" className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalGrid}>
            <div className={styles.finalStack}>
              <h3 className={styles.finalTitle}>ПОЗНАКОМИМСЯ?</h3>
              <a className={styles.phoneLink} href={contactLinks.phoneHref}>
                {contactLinks.phoneDisplay}
              </a>
              <div className={styles.messengerIcons}>
                <a className={`${styles.messengerIcon} ${styles.telegramIcon}`} href={contactLinks.telegramHref} target="_blank" rel="noreferrer" aria-label="Telegram" title="Telegram">
                  TG
                </a>
                <a className={`${styles.messengerIcon} ${styles.instagramIcon}`} href={contactLinks.instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
                  IG
                </a>
                <a className={`${styles.messengerIcon} ${styles.maxIcon}`} href={contactLinks.maxHref} target="_blank" rel="noreferrer" aria-label="MAX" title="MAX">
                  MAX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
