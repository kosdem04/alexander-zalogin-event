import CTASection from "../components/CTASection";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./GraduationPage.module.css";

export default function GraduationPage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.left}>
              <span className={styles.badge}>Выпускные</span>
              <h1>Молодой ритм, современная подача и контроль зала без хаоса</h1>
              <p>
                Выпускной в динамичном ритме: яркая подача, живые интерактивы и атмосфера, в которой комфортно выпускникам,
                родителям и педагогам.
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.scoreCard}>
                <strong>Show Mode</strong>
                <span>Выпускной должен держать темп до последнего блока.</span>
              </div>
              <div className={styles.wave} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.program}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Программа"
            title="Что особенно важно на выпускных"
            text="Удержать внимание выпускников, не потерять родителей и педагогов, сохраняя современный темп и живой вайб."
          />
          <div className={styles.programGrid}>
            <div className={styles.programCard}>Сильный старт и быстрый сбор внимания</div>
            <div className={styles.programCard}>Современные интерактивы без устаревшего юмора</div>
            <div className={styles.programCard}>Переходы между официальной частью и драйвом</div>
            <div className={styles.programCard}>Работа с большим количеством гостей и шумной площадкой</div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Молодежная аудитория"
        title="Если нужен выпускной, который ощущается свежо, а не как старая актовая программа"
        text="Оставьте заявку, и я предложу программу выпускного для школы, колледжа или вуза под ваш формат и бюджет."
        primaryTo="/contacts"
        primaryLabel="Обсудить выпускной"
        secondaryTo="/mass-events"
        secondaryLabel="Смотреть массовые события"
        tone="electric"
      />
    </PageShell>
  );
}
