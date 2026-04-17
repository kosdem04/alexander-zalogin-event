import { contactLinks } from "../data/contactLinks";
import { mediaLinks } from "../data/mediaLinks";
import PageShell from "../components/PageShell";
import styles from "./HomePage.module.css";

const choosePoints = [
  "Без шаблонных конкурсов и неловких пауз",
  "Живой юмор и уважение к гостям",
  "Персональный сценарий под вашу аудиторию",
  "Контроль ритма и тайминга вечера",
  "Опыт с форматами от 20 до 500+ гостей",
];

const verticalVideos = [
  { title: "Свадьба", src: mediaLinks.reelsVideoUrl },
  { title: "Корпоратив", src: "https://s3.twcstorage.ru/707f08c3-950c-4237-807b-4b7b9b3a486e/%D1%80%D0%B8%D0%BB%D1%81%20%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2.mp4" },
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
  { src: "/wedding-main.jpg", alt: "Эмоции гостей", className: "right" },
];

const results = [
  "Понятная структура вечера без хаоса",
  "Комфорт гостей разного возраста",
  "Динамика без перегруза и провисаний",
  "Уверенное проведение от старта до финала",
  "Спокойствие заказчика в день события",
];

const clients = ["Лента", "Магнит", "РТС-Тендер", "Сбер", "2ГИС", "Брусника"];

const reviews = [
  {
    text: "Гости остались в восторге. Без перегибов, всё очень современно и легко.",
    author: "Свадьба, 78 гостей",
  },
  {
    text: "Сохранили статус события и при этом сделали теплую атмосферу для команды.",
    author: "Корпоратив, 160 гостей",
  },
  {
    text: "Разный возраст гостей, но всем было комфортно. Отличная подача и темп.",
    author: "Юбилей, семейный формат",
  },
  {
    text: "Четкий сценарий, понятная коммуникация и уверенное ведение на площадке.",
    author: "Выпускной, 120 гостей",
  },
  {
    text: "С первой встречи стало понятно, что мы в надежных руках.",
    author: "Свадьба, 94 гостя",
  },
  {
    text: "Помог собрать программу так, что вечер прошел на одном дыхании.",
    author: "Частное мероприятие, 50 гостей",
  },
];

export default function HomePage() {
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
              <h2>Современное ведение без пошлости и суеты</h2>
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
            <h3>За что меня выбирают</h3>
          </div>
          <div className={styles.pointsGrid}>
            {choosePoints.map((item) => (
              <article key={item} className={styles.card}>
                {item}
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
                <video
                  className={styles.verticalVideo}
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />
                <span>{item.title}</span>
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
                <video
                  className={styles.wideVideo}
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />
                <span>{item.title}</span>
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
            {photos.map((photo, index) => (
              <figure key={`${photo.alt}-${index}`} className={styles.photoCard}>
                <img src={photo.src} alt={photo.alt} className={`${styles.galleryPhoto} ${styles[photo.className]}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p>Что вы получите</p>
            <h3>Результат по факту</h3>
          </div>
          <div className={styles.pointsGrid}>
            {results.map((item) => (
              <article key={item} className={styles.card}>
                {item}
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
            {reviews.map((review) => (
              <article key={review.author} className={styles.reviewCard}>
                <p>{review.text}</p>
                <strong>{review.author}</strong>
              </article>
            ))}
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
              <a className={styles.primaryButton} href={contactLinks.telegramHref} target="_blank" rel="noreferrer">
                Написать в Telegram
              </a>
              <a className={styles.secondaryButton} href={contactLinks.instagramHref} target="_blank" rel="noreferrer">
                Написать в Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
