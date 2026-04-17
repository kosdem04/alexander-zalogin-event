import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          ZALOGIN<span>EVENT</span>
        </NavLink>

        <a href="/#lead" className={styles.cta}>
          Оставить заявку
        </a>
      </div>
    </header>
  );
}
