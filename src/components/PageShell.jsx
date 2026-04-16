import Footer from "./Footer";
import Header from "./Header";
import styles from "./PageShell.module.css";

export default function PageShell({ className = "", children }) {
  return (
    <div className={`${styles.page} ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
