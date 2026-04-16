import CTASection from "../components/CTASection";
import { mediaLinks } from "../data/mediaLinks";
import LeadForm from "../components/LeadForm";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./WeddingPage.module.css";

const moments = [
  "Легкий вход гостей в вечер без суеты и навязанной активности",
  "Связка церемонии, банкетной части и танцевального блока в один ритм",
  "Мягкое вовлечение гостей без кринжа и устаревших конкурсов",
  "Деликатное управление эмоциями пары, близких и зала",
];

export default function WeddingPage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroPanel}>
            <div className={styles.copy}>
              <span className={styles.badge}>Свадьбы</span>
              <h1>Свадьбы без неловкости и шаблонов</h1>
            </div>
            <div className={styles.frame}>
              <div className={styles.framePhoto} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.moments}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Как проходит"
            title="Ритм свадебного вечера строится не от шаблона, а от пары"
            text="Сначала считывается настроение молодоженов и гостей, затем под него собирается программа: вступление, знакомства, поздравления, интерактивы, ужин, танцы и финал."
          />
          <div className={styles.momentGrid}>
            {moments.map((item) => (
              <div key={item} className={styles.momentCard}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.split}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>
            <div className={styles.noteCard}>
              <h3>Что особенно важно на свадьбе</h3>
              <p>
                Ведущий не должен спорить с эстетикой мероприятия. Его задача поддержать стиль пары, собрать гостей в единое
                настроение и оставить пространство для искренних эмоций.
              </p>
            </div>
            <div className={styles.galleryCard}>
              <div className={styles.galleryTop}>
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
              <div className={styles.galleryBottom}>Фотоблок пары и гостей</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formWrap}>
        <div className={styles.container}>
          <div className={styles.formGrid}>
            <LeadForm
              title="Обсудить свадьбу"
              note="Расскажите о дате, площадке и желаемом настроении вечера. По этой странице уже понятно, какой визуальный и эмоциональный тон вы хотите получить."
            />
            <div className={styles.sideFacts}>
              <h3>Почему эта страница отдельно</h3>
              <ul>
                <li>У свадеб свой темп, визуальный язык и логика аргументов.</li>
                <li>Светлая палитра и композиция сразу задают нужное настроение.</li>
                <li>Эту страницу удобно запускать в рекламу именно на пары.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Для пары"
        title="Если вам важна свадьба без неловкости и без дешевой развлекательности"
        text="Оставьте заявку и получите структуру вечера, в которой эмоции, атмосфера и тайминг работают на вас."
        primaryTo="/contacts"
        primaryLabel="Оставить заявку"
        secondaryTo="/ceremony"
        secondaryLabel="Смотреть церемонию"
        tone="rose"
      />
    </PageShell>
  );
}
