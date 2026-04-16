import LeadForm from "../components/LeadForm";
import PageShell from "../components/PageShell";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <PageShell className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <LeadForm title="Оставьте заявку" note="Выберите удобный мессенджер, чтобы быстро обсудить событие без заполнения полей." />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
