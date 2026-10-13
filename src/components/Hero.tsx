import Image from "next/image";
import styles from "./Hero.module.css";
import WhatsAppCTA from "./WhatsAppCTA";

const TRUST_CHIPS = [
  "Projeto, produção e instalação",
  "Atende comércios e indústrias",
  "Orçamento rápido pelo WhatsApp",
];

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-label="Apresentação">
      <div className={styles.media}>
        <Image
          src="/photos/hero-letreiro-sanfer.jpg"
          alt="Letra caixa iluminada da Sanfer Logistics Park, acesa à noite, fabricada e instalada pela Inovaline"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className="container">
          <span className={styles.eyebrow}>Comunicação visual · Araquari e região</span>
          <h1 className={styles.headline}>
            Fachadas e letreiros que colocam a sua marca
            <span className={styles.highlight}> em evidência.</span>
          </h1>
          <p className={styles.subhead}>
            Sua empresa vista de longe, de dia e de noite. A Inovaline
            projeta, produz e instala — você aprova e recebe pronto, em até
            25 dias.
          </p>
          <div className={styles.actions} data-hero-cta>
            <WhatsAppCTA origin="hero" />
            <a className={styles.secondaryLink} href="#portfolio">
              Ver trabalhos entregues
            </a>
          </div>
          <ul className={styles.trust}>
            {TRUST_CHIPS.map((chip) => (
              <li key={chip} className={styles.chip}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
