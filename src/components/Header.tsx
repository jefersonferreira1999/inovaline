import styles from "./Header.module.css";
import WhatsAppCTA from "./WhatsAppCTA";

const NAV_LINKS = [
  { href: "#processo", label: "Como funciona" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#portfolio", label: "Trabalhos" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.row}`}>
        <a className={styles.brand} href="#inicio" aria-label="Inovaline — página inicial">
          <span className={styles.bulb} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 21h6M10 24h4M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.2 1 2.1V18h6v-1.2c0-.9.3-1.5 1-2.1A7 7 0 0 0 12 2Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.wordmark}>
            INOVALINE
            <small className={styles.subline}>SOLUÇÕES VISUAIS</small>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Seções">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppCTA origin="header" variant="compact" className={styles.cta} />
      </div>
    </header>
  );
}
