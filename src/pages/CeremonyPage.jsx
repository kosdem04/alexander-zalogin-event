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
            <h1>Легкость, воздух, интонация и текст, написанный не «по открытке»</h1>
            <p>
              Эта страница должна ощущаться отдельно даже от свадебного раздела:
              меньше банкетной динамики, больше смысла, воздуха, эмоции и
              персонализации речи.
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
            text="На этой странице лучше говорить о тексте, интонации, подготовке, выборе слов и о том, как церемония становится личной историей пары."
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
        title="Если вам важна церемония, которую гости будут вспоминать как настоящий момент, а не как формальность"
        text="Страница уже готова под отдельный трафик на выездные церемонии и может усиливаться текстами, видео и фото пар."
        primaryTo="/contacts"
        primaryLabel="Обсудить церемонию"
        secondaryTo="/weddings"
        secondaryLabel="Вернуться к свадьбам"
        tone="rose"
      />
    </PageShell>
  );
}
