import CTASection from "../components/CTASection";
import LeadForm from "../components/LeadForm";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./AnniversaryPage.module.css";

export default function AnniversaryPage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.ribbon}>Дни рождения и юбилеи</div>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1>Личный праздник, где сценарий собирается вокруг человека</h1>
              <p>
                Персональный подход, внимание к близким и живая атмосфера, в которой комфортно гостям всех поколений.
              </p>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.visualTop}>Family Mood</div>
              <div className={styles.visualBottom}>В центре вечера человек, его история и его круг близких.</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.points}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Что получает клиент"
            title="Теплый, душевный и по-настоящему личный вечер"
            text="Программа собирается под конкретного человека: с его историей, характером и кругом близких."
          />
          <div className={styles.pointGrid}>
            <div className={styles.pointCard}>
              <h3>Персонализация</h3>
              <p>Истории, акценты, поздравления и сценарные решения под юбиляра.</p>
            </div>
            <div className={styles.pointCard}>
              <h3>Теплая подача</h3>
              <p>Без напора и лишней громкости, но с плотным контактом с гостями.</p>
            </div>
            <div className={styles.pointCard}>
              <h3>Комфорт всех поколений</h3>
              <p>Программа учитывает интересы семьи, друзей и старших гостей.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.memoryCard}>
              <h3>Что можно добавить в программу</h3>
              <ul>
                <li>Фото юбиляра и семейные архивные кадры</li>
                <li>Видео-поздравления от близких</li>
                <li>Сценарные блоки с личными смыслами и сюрпризами</li>
              </ul>
            </div>
            <LeadForm
              compact
              title="Обсудить день рождения или юбилей"
              note="Укажите возраст, формат вечера, состав гостей и желаемую атмосферу."
            />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Личный формат"
        title="Когда нужен ведущий, который соберет вечер с уважением к вашему кругу"
        text="Оставьте заявку, и я предложу структуру праздника под ваш формат, гостей и настроение."
        primaryTo="/contacts"
        primaryLabel="Оставить заявку"
        secondaryTo="/graduations"
        secondaryLabel="Смотреть выпускные"
        tone="gold"
      />
    </PageShell>
  );
}
