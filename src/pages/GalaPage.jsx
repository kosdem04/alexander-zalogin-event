import CTASection from "../components/CTASection";
import { mediaLinks } from "../data/mediaLinks";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./GalaPage.module.css";

export default function GalaPage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <div className={styles.heroCard}>
              <span className={styles.badge}>Гала-ужины и клиентские вечера</span>
              <h1>Статусная подача, в которой ведущий работает на уровень события и бренда</h1>
              <p>
                Здесь нужен другой тон: сдержанный, точный, дорогой по
                ощущению. Страница сделана темнее, аккуратнее и ближе к
                премиальному сегменту.
              </p>
            </div>
            <div className={styles.stageCard}>
              <video
                className={styles.sampleVideo}
                src={mediaLinks.sampleVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className={styles.stageGlow} />
              <div className={styles.stageText}>
                <strong>Premium Event</strong>
                <span>Деликатная работа с брендом, партнерами и статусной аудиторией.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Подход"
            title="Гала-страница не должна быть похожа ни на свадьбу, ни на корпоративную вечеринку"
            text="Это отдельный жанр: приглушенная палитра, чистая композиция, умный текст и акцент на тонкости ведения."
          />
          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <h3>Сдержанный тон</h3>
              <p>Юмор и интерактивы не выпадают из статуса события и бренда.</p>
            </article>
            <article className={styles.featureCard}>
              <h3>Работа с партнерами</h3>
              <p>Важны точные формулировки, уважение к гостям и сценическая собранность.</p>
            </article>
            <article className={styles.featureCard}>
              <h3>Премиальный визуал</h3>
              <p>Темные благородные оттенки и лаконичные акценты работают на восприятие услуги.</p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Статусный формат"
        title="Если нужен ведущий под премиальный ужин, клиентский вечер или церемонию награждения"
        text="Эта страница уже собрана как отдельный лендинг под деликатные и статусные мероприятия."
        primaryTo="/contacts"
        primaryLabel="Отправить запрос"
        secondaryTo="/corporate"
        secondaryLabel="Вернуться к корпоративам"
        tone="dark"
      />
    </PageShell>
  );
}


