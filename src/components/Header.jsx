import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./Header.module.css";

const navItems = [
  { to: "/weddings", label: "Свадьбы", extraMatch: ["/ceremony"] },
  { to: "/corporate", label: "Корпоративы" },
  { to: "/anniversaries", label: "Дни рождения" },
  { to: "/graduations", label: "Выпускные" },
  { to: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          ALEX<span>HOST</span>
        </NavLink>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={isMenuOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}>
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.to ||
              (item.extraMatch ? item.extraMatch.includes(location.pathname) : false);

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={closeMenu}
                className={isActive ? `${styles.link} ${styles.active}` : styles.link}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <NavLink to="/contacts" className={styles.cta} onClick={closeMenu}>
          Оставить заявку
        </NavLink>
      </div>
    </header>
  );
}
