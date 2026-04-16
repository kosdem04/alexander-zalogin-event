import { contactLinks } from "../data/contactLinks";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <strong>Александр - ведущий мероприятий</strong>
          <p>Свадьбы, корпоративы, юбилеи, выпускные, статусные вечера и масштабные события.</p>
        </div>
        <div className={styles.contacts}>
          <a href={contactLinks.phoneHref}>{contactLinks.phoneDisplay}</a>
          <a href={contactLinks.telegramHref} target="_blank" rel="noreferrer">
            Telegram: {contactLinks.telegramHandle}
          </a>
          <a href={contactLinks.instagramHref} target="_blank" rel="noreferrer">
            Instagram: {contactLinks.instagramHandle}
          </a>
        </div>
      </div>
    </footer>
  );
}
