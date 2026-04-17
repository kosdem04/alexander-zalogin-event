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
              <div className={styles.posterTag}>Корпоративы</div>
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
                Уверенная подача для компаний: статусный тон, четкий ритм и контроль энергии зала на всех этапах программы.
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
              <div className={styles.floatingNote}>Для компаний, которым важны статус, темп и сильная работа с аудиторией.</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gets}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Что вы получаете"
            title="Программа, которая держит ритм и не теряет бренд"
            text="Вы получаете структуру вечера, где контроль, уверенность и сценическая сила работают на задачи компании."
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
              <h2>Работаю там, где нельзя терять статус мероприятия</h2>
            </div>
            <div className={styles.experienceText}>
              <p>
                Корпоративный формат требует точности: награждения, брендовые блоки, выходы руководителей, партнеры и гости
                должны собираться в одну логику.
              </p>
              <p>Ведущий встраивается в бизнес-контекст и усиливает впечатление о компании на площадке.</p>
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
              <p>Показываю примеры корпоративных шоу, награждений, клиентских вечеров и больших внутренних событий.</p>
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
        text="Оставьте заявку, и я предложу формат корпоративного вечера под ваши цели, аудиторию и площадку."
        primaryTo="/contacts"
        primaryLabel="Запросить дату"
        secondaryTo="/gala-dinners"
        secondaryLabel="Смотреть гала-ужины"
        tone="dark"
      />
    </PageShell>
  );
}
