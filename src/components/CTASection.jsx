import { Link } from "react-router-dom";

import styles from "./CTASection.module.css";

export default function CTASection({ eyebrow, title, text, primaryTo, primaryLabel, secondaryTo, secondaryLabel, tone = "gold" }) {
  return (
    <section className={`${styles.section} ${styles[tone]}`}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <Link to={primaryTo} className={styles.primary}>
            {primaryLabel}
          </Link>
          {secondaryTo ? (
            <Link to={secondaryTo} className={styles.secondary}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
