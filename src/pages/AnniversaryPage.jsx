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
              <h1>Личный праздник, где сценарий собирается вокруг человека, а не вокруг заготовок</h1>
              <p>
                Юбилейная страница теплее, насыщеннее и душевнее. Она должна
                говорить о персональном подходе, работе с близкими и живой
                атмосфере, в которой гостям легко.
              </p>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.visualTop}>Family Mood</div>
              <div className={styles.visualBottom}>
                В центре вечера человек, его история и его круг близких.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.points}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Что чувствует клиент"
            title="Эта страница должна выглядеть более личной, теплой и эмоциональной"
            text="Здесь важны не только программа и интерактивы, но и ощущение, что вечер действительно собирается под конкретного человека."
          />
          <div className={styles.pointGrid}>
            <div className={styles.pointCard}>
              <h3>Персонализация</h3>
              <p>Истории, акценты, поздравления и сценарные решения под юбиляра.</p>
            </div>
            <div className={styles.pointCard}>
              <h3>Теплая подача</h3>
              <p>Без напора и без лишней громкости, но с плотным контактом с гостями.</p>
            </div>
            <div className={styles.pointCard}>
              <h3>Комфорт всех поколений</h3>
              <p>Программа собирается так, чтобы комфортно было и семье, и друзьям, и старшим гостям.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.memoryCard}>
              <h3>Что можно усиливать дальше</h3>
              <ul>
                <li>Фото юбиляра и семейные архивные кадры</li>
                <li>Видео-отзыв семьи после события</li>
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
        title="Когда нужен не просто ведущий, а человек, который соберет вечер с уважением к вашему кругу"
        text="Эту страницу можно развивать как отдельный теплый лендинг под частные праздники и юбилейные даты."
        primaryTo="/contacts"
        primaryLabel="Оставить заявку"
        secondaryTo="/graduations"
        secondaryLabel="Смотреть выпускные"
        tone="gold"
      />
    </PageShell>
  );
}
