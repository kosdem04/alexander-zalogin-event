import CTASection from "../components/CTASection";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./CeremonyPage.module.css";

export default function CeremonyPage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.card}>
            <span className={styles.badge}>Выездная церемония</span>
            <h1>Легкость, воздух, интонация и текст, написанный лично для вас</h1>
            <p>
              Здесь важны смысл, эмоции и персональные слова: церемония собирается вокруг вашей истории, а не вокруг шаблонов.
            </p>
            <div className={styles.lines}>
              <div>Персональный текст</div>
              <div>Подготовка пары</div>
              <div>Трогательная драматургия момента</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.blocks}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Смысл церемонии"
            title="Здесь продается не микрофон, а чувство момента"
            text="Работаем с текстом, интонацией, паузами и атмосферой, чтобы церемония стала личной историей пары."
          />
          <div className={styles.blockGrid}>
            <div className={styles.block}>Создание персонального текста и структуры</div>
            <div className={styles.block}>Подготовка пары к выходу и важным репликам</div>
            <div className={styles.block}>Сценарная работа с музыкой, паузами и акцентами</div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Для церемонии"
        title="Если вам важна церемония, которую гости запомнят как настоящий момент"
        text="Оставьте заявку, и я подготовлю церемонию под вашу пару, формат и настроение дня."
        primaryTo="/contacts"
        primaryLabel="Обсудить церемонию"
        secondaryTo="/weddings"
        secondaryLabel="Вернуться к свадьбам"
        tone="rose"
      />
    </PageShell>
  );
}
