import styles from "./SectionTitle.module.css";

export default function SectionTitle({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`${styles.wrap} ${styles[align]}`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {text ? <p className={styles.text}>{text}</p> : null}
    </div>
  );
}
