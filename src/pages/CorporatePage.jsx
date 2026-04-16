import CTASection from "../components/CTASection";
import { mediaLinks } from "../data/mediaLinks";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./CorporatePage.module.css";

const benefits = [
  "Собранный сценарий, который держит внимание команды и гостей",
  "Тон общения, который не спорит с брендом и целями компании",
  "Управление сценой, таймингом и общей энергией площадки",
];

const logos = ["ALFA", "NOVA", "GRD", "VECTOR", "SHIFT", "PRIME"];

export default function CorporatePage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.poster}>
              <div className={styles.posterTag}>Корпоративы / эталон стиля</div>
              <h1>
                ВЕДУЩИЙ
                <br />
                ДЛЯ СЦЕНЫ,
                <br />
                БРЕНДА И
                <br />
                КОМАНДЫ
              </h1>
              <p>
                Самая сильная страница в проекте. Темный фон, синий свет,
                крупная типографика, наложения, жесткий ритм блоков и ощущение
                контроля над залом.
              </p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualImage}>
                <video
                  className={styles.sampleVideo}
                  src={mediaLinks.reelsVideoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />
              </div>
              <div className={styles.floatingNote}>
                Для компаний, которым нужен не просто ведущий, а сильное лицо
                программы.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gets}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Что вы получаете"
            title="Программа, которая держит ритм и не теряет бренд"
            text="Корпоративная страница должна продавать через визуал контроль, уверенность и сценическую силу, а не только через перечисление услуг."
          />
          <div className={styles.getGrid}>
            {benefits.map((item, index) => (
              <article key={item} className={styles.getCard}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceStatement}>
              <span className={styles.kicker}>Опыт</span>
              <h2>Работаю там, где нельзя терять темп, статус и фокус аудитории.</h2>
            </div>
            <div className={styles.experienceText}>
              <p>
                Корпоративный формат требует точности: награждения, брендовые
                блоки, выходы руководителей, гости, партнеры, кейсы и динамика
                вечера должны собираться в одну логику.
              </p>
              <p>
                Здесь ведущий не живет отдельно от события. Он встраивается в
                бизнес-контекст и усиливает восприятие компании.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cases}>
        <div className={styles.container}>
          <div className={styles.caseLayout}>
            <div className={styles.caseVideo}>
              <video
                className={styles.sampleVideo}
                src={mediaLinks.reelsVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
            </div>
            <div className={styles.caseSidebar}>
              <h3>Кейсы и ролики</h3>
              <p>
                Здесь легко разместить корпоративные шоу-рилы, видео с награждений,
                клиентских вечеров и больших внутренних событий компаний.
              </p>
            </div>
          </div>
          <div className={styles.logoStrip}>
            {logos.map((logo) => (
              <div key={logo} className={styles.logoItem}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Для бизнеса"
        title="Если вам нужен ведущий, который выглядит сильно еще до первого слова"
        text="Эта страница может быть главной точкой входа для корпоративного трафика и служить визуальным эталоном для остальных направлений."
        primaryTo="/contacts"
        primaryLabel="Запросить дату"
        secondaryTo="/gala-dinners"
        secondaryLabel="Смотреть гала-ужины"
        tone="dark"
      />
    </PageShell>
  );
}
