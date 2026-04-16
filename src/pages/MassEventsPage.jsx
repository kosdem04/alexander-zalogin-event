import CTASection from "../components/CTASection";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./MassEventsPage.module.css";

export default function MassEventsPage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.topline}>Массовые мероприятия</div>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1>Сцена, масштаб и управление вниманием большой аудитории</h1>
              <p>
                Эта страница должна быть самой энергичной и масштабной в проекте:
                крупные формы, контраст, ощущение площади, сцены и большой
                публики.
              </p>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.counter}>
                <strong>500+</strong>
                <span>гостей, которых нужно не просто развлечь, а удержать в едином ритме</span>
              </div>
              <div className={styles.signal}>Stage Control</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mechanics}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Механика"
            title="На больших площадках работает не тот, кто громче всех, а тот, кто держит общий ритм"
            text="Здесь важны сценическая энергия, работа с паузами, управление вниманием и понимание, как держать тысячи взглядов в одной логике события."
          />
          <div className={styles.mechanicGrid}>
            <div className={styles.mechanicCard}>Сильное открытие и быстрый сбор внимания</div>
            <div className={styles.mechanicCard}>Работа с паузами, выходами и сценическими блоками</div>
            <div className={styles.mechanicCard}>Связка артистов, организаторов и общего тайминга</div>
            <div className={styles.mechanicCard}>Контроль энергии толпы без провалов и хаоса</div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Большой формат"
        title="Если вам нужен ведущий для сцены, городского праздника или масштабного события"
        text="Страница уже оформлена под энергичный трафик и может усиливаться кейсами, видео со сцены и брендингом партнеров."
        primaryTo="/contacts"
        primaryLabel="Отправить запрос"
        secondaryTo="/corporate"
        secondaryLabel="Смотреть корпоративы"
        tone="electric"
      />
    </PageShell>
  );
}
