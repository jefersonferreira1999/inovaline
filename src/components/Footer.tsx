import styles from "./Footer.module.css";
import {
  BUSINESS_ADDRESS_FULL,
  BUSINESS_NAME,
  CTA_LABEL,
  WHATSAPP_DISPLAY,
  WHATSAPP_MESSAGE,
  buildWhatsAppLink,
} from "@/lib/config";

const SOLUTIONS = [
  "Fachadas em ACM",
  "Fachadas em lona",
  "Letra caixa e luminosos",
  "Totens e cavaletes",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <p className={styles.brand}>{BUSINESS_NAME}</p>
          <p className={styles.tagline}>
            Fachadas, letreiros e luminosos do projeto à instalação, em
            Araquari e região.
          </p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Soluções</h3>
          {SOLUTIONS.map((item) => (
            <a key={item} href="#solucoes">
              {item}
            </a>
          ))}
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contato</h3>
          <a className={styles.phone} href={buildWhatsAppLink(WHATSAPP_MESSAGE)}>
            {WHATSAPP_DISPLAY}
          </a>
          <address className={styles.address}>{BUSINESS_ADDRESS_FULL}</address>
          <a className={styles.ctaLink} href={buildWhatsAppLink(WHATSAPP_MESSAGE)}>
            {CTA_LABEL}
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {new Date().getFullYear()} {BUSINESS_NAME}. Todos os direitos
          reservados.
        </span>
        <span>Araquari / SC · Comunicação visual</span>
      </div>
    </footer>
  );
}
