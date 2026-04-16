import { useEffect } from "react";
import { Link } from "react-router-dom";

import LeadForm from "../components/LeadForm";
import { mediaLinks } from "../data/mediaLinks";
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import styles from "./HomePage.module.css";

const benefits = [
  {
    index: "01",
    title: "Интеллигентный юмор",
    text: "Без пошлых конкурсов и давления на гостей.",
  },
  {
    index: "02",
    title: "Персональный сценарий",
    text: "Каждое событие собирается под конкретных людей.",
  },
  {
    index: "03",
    title: "Опыт от 6 до 500+ гостей",
    text: "От камерных ужинов до больших мероприятий.",
  },
  {
    index: "04",
    title: "Актёрская база",
    text: "Ритм, речь и точная работа с настроением зала.",
  },
  {
    index: "05",
    title: "Команда с DJ",
    text: "Музыка и динамика вечера работают как единое целое.",
  },
  {
    index: "06",
    title: "Ограниченный слот",
    text: "Не более 8 банкетов в месяц для высокого качества.",
  },
];

const cases = [
  {
    title: "Свадьбы",
    text: "Вкус, такт и красивая атмосфера вечера.",
  },
  {
    title: "Корпоративы",
    text: "Уважение к статусу и чёткий ритм программы.",
  },
  {
    title: "Выпускные",
    text: "Живая энергия и комфорт для всех поколений.",
  },
];

const formats = [
  ["Свадьбы", "/weddings", "Стильный вечер с персональной драматургией."],
  ["Корпоративы", "/corporate", "События для команды и бренда без перегруза."],
  ["Дни рождения", "/anniversaries", "Личный праздник с правильной атмосферой."],
  ["Выпускные", "/graduations", "Современный формат и живые эмоции зала."],
];

const reviews = [
  {
    author: "Свадьба, 84 гостя",
    text: "Спокойно, красиво и очень по-человечески.",
  },
  {
    author: "Корпоратив, 160 гостей",
    text: "Удалось сохранить и статус, и лёгкость.",
  },
  {
    author: "Юбилей, семейный формат",
    text: "Вечер получился живым и действительно личным.",
  },
];

const previews = [
  {
    label: "Свадьбы",
    title: "Тёплые вечера без шаблонной подачи",
    text: "Живая атмосфера и внимание к людям.",
  },
  {
    label: "Корпоративы",
    title: "Статус события без перегруза",
    text: "Современная подача и точная динамика.",
  },
  {
    label: "Портфолио",
    title: "Видео и реальные кейсы по запросу",
    text: "Напишите мне и получите актуальные материалы.",
  },
];

const steps = [
  {
    title: "Заявка",
    text: "Вы отправляете дату, локацию и формат.",
  },
  {
    title: "Созвон",
    text: "Собираем концепцию, тайминг и драматургию.",
  },
  {
    title: "Подготовка",
    text: "Делаю персональную программу под ваш вечер.",
  },
  {
    title: "Проведение",
    text: "Держу ритм, атмосферу и внимание гостей.",
  },
];

const checklist = ["Дата", "Локация", "Количество гостей", "Продолжительность"];

export default function HomePage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.revealed);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -12% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <PageShell className={styles.page}>
      <section className={`${styles.hero} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroIntro}>
              <span className={styles.badge}>Ведущий мероприятий премиального сегмента</span>
              <h1>
                Выбирая меня, вы выбираете <span>спокойствие за атмосферу вечера.</span>
              </h1>
            </div>

            <div className={styles.heroArt}>
              <div className={styles.photoCard}>
                <div className={styles.orbit} />
                <div className={styles.portrait}>
                  <div className={styles.portraitLabel}>
                    <strong>Александр Залогин</strong>
                    <span>Харизматичный, уверенный и профессиональный ведущий без шаблонного ведения.</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroIdentity}>
                <strong>Александр Залогин</strong>
                <span>Харизматичный, уверенный и профессиональный ведущий без шаблонного ведения.</span>
              </div>
              <div className={styles.heroNote}>
                Договор, наличный и безналичный расчёт, команда с DJ, помощь в организации и персональная программа под ваш формат.
              </div>
            </div>

            <div className={styles.heroCopy}>
              <p>Ведущий, для которого важны люди, ритм события и впечатление, которое остаётся после праздника.</p>
              <div className={styles.actions}>
                <Link to="/contacts" className={styles.primary}>
                  Оставить заявку
                </Link>
                <a href="#about" className={styles.secondary}>
                  Обо мне
                </a>
              </div>
              <div className={styles.metrics}>
                <div className={styles.metricCard}>
                  <strong>6 лет</strong>
                  <span>в event-сфере и актёрской среде</span>
                </div>
                <div className={styles.metricCard}>
                  <strong>500+</strong>
                  <span>гостей на крупных мероприятиях</span>
                </div>
                <div className={`${styles.metricCard} ${styles.desktopMetric}`}>
                  <strong>8</strong>
                  <span>банкетов в месяц максимум</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.previewRailSection} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <div className={styles.previewRail}>
            {previews.map((item, index) => (
              <article key={item.title} className={styles.previewCard}>
                <div className={styles.previewVisual}>
                  <video
                    className={styles.sampleVideo}
                    src={mediaLinks.sampleVideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <span className={styles.videoLabel}>Preview 0{index + 1}</span>
                </div>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className={`${styles.about} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <SectionTitle eyebrow="Обо мне" title="Собираю событие так, чтобы людям было хорошо вместе." text="6 лет в event-сфере и актёрской среде." />
          <div className={styles.aboutGrid}>
            <article className={styles.aboutCard}>
              <h3>Подача</h3>
              <p>Без неловких конкурсов, с тактом и лёгкостью.</p>
            </article>
            <article className={styles.aboutCard}>
              <h3>Опыт</h3>
              <p>События от камерных ужинов до 500+ гостей.</p>
            </article>
            <article className={styles.aboutCard}>
              <h3>Клиенты</h3>
              <p>Лента, Магнит, РТС-Тендер. Договор и прозрачные условия.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.benefits} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <SectionTitle eyebrow="Почему выбирают меня" title="Современное ведение без кринжа" text="Коротко о главных преимуществах." />
          <div className={styles.benefitGrid}>
            {benefits.map((item) => (
              <article key={item.title} className={styles.benefitCard}>
                <span>{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.cases} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Видео / кейсы"
            title="Эмоции гостей, красивый ритм и чувство меры"
            text="Напишите слово «ПОРТФОЛИО», и я отправлю видео-примеры."
          />
          <div className={styles.caseGrid}>
            {cases.map((item, index) => (
              <article key={item.title} className={styles.caseCard}>
                <div className={styles.caseVisual}>
                  <video
                    className={styles.sampleVideo}
                    src={mediaLinks.sampleVideoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <span className={styles.videoLabel}>Case 0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className={`${styles.formats} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <SectionTitle eyebrow="Форматы мероприятий" title="Ключевые направления" text="Выберите нужный формат и откройте подробную страницу." />
          <div className={styles.formatGrid}>
            {formats.map(([title, to, text], index) => (
              <Link key={title} to={to} className={styles.formatCard}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.reviews} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <SectionTitle eyebrow="Отзывы" title="Когда всё собрано правильно, гости это чувствуют" text="Реальные эмоции и спокойствие заказчика." />
          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <article key={review.author} className={styles.reviewCard}>
                <p>{review.text}</p>
                <strong>{review.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.process} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <SectionTitle eyebrow="Как проходит работа" title="От первого сообщения до уверенного вечера" text="Просто, прозрачно и без лишней суеты." />
          <div className={styles.stepGrid}>
            {steps.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <span>Шаг {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.finalCta} ${styles.reveal}`} data-reveal>
        <div className={styles.container}>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaCopy}>
              <SectionTitle
                eyebrow="Финальный CTA"
                title="Напишите, если нужен ведущий, который чувствует зал"
                text="Для расчёта стоимости отправьте базовую информацию о событии."
              />
              <div className={styles.checklist}>
                {checklist.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
            <LeadForm compact title="Оставьте заявку" note="Напишите в Telegram или WhatsApp, и я предложу формат и тайминг под ваше событие." />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
