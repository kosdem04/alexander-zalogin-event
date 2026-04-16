import { contactLinks } from "../data/contactLinks";
import styles from "./LeadForm.module.css";

export default function LeadForm({
  compact = false,
  title = "Оставьте заявку",
  note = "Я свяжусь с вами, уточню формат и предложу структуру события под ваш запрос.",
}) {
  return (
    <div className={compact ? `${styles.card} ${styles.compact}` : styles.card}>
      <div className={styles.label}>Контакты / заявка</div>
      <h3>{title}</h3>
      <p>{note}</p>
      <div className={styles.actions}>
        <a className={styles.primaryButton} href={contactLinks.telegramHref} target="_blank" rel="noreferrer">
          Написать в Telegram
        </a>
        <a className={styles.secondaryButton} href={contactLinks.instagramHref} target="_blank" rel="noreferrer">
          Написать в Instagram
        </a>
      </div>
      <div className={styles.contactList}>
        <a href={contactLinks.phoneHref}>{contactLinks.phoneDisplay}</a>
        <a href={contactLinks.telegramHref} target="_blank" rel="noreferrer">
          Telegram: {contactLinks.telegramHandle}
        </a>
        <a href={contactLinks.instagramHref} target="_blank" rel="noreferrer">
          Instagram: {contactLinks.instagramHandle}
        </a>
      </div>
      <span className={styles.caption}>
        Вместо формы посетитель сразу переходит в удобный мессенджер и может быстро обсудить дату, площадку и формат события.
      </span>
    </div>
  );
}
