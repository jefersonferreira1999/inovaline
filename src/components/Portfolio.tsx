import Image from "next/image";
import styles from "./Portfolio.module.css";

type Size = "sm" | "md" | "lg" | "wide";

type PortfolioItem = {
  src: string;
  alt: string;
  category: string;
  business: string;
  size: Size;
  /** object-position: keeps the sign itself in frame across each tile's aspect ratio. */
  focus: string;
};

const ITEMS: PortfolioItem[] = [
  {
    src: "/photos/prime-telhas-fachada-dia.jpeg",
    alt: "Fachada em ACM da Prime Telhas, fábrica de telhas metálicas, com letra caixa e testeira",
    category: "Fachada em ACM",
    business: "Prime Telhas",
    size: "wide",
    focus: "center 25%",
  },
  {
    src: "/photos/sanfer-logistics-letra-caixa-noite.jpeg",
    alt: "Letra caixa iluminada da Sanfer Logistics Park acesa à noite",
    category: "Letra caixa",
    business: "Sanfer Logistics Park",
    size: "lg",
    focus: "center 45%",
  },
  {
    src: "/photos/si-modas-fachada.jpeg",
    alt: "Luminoso da Si Modas em fachada de loja de roupas",
    category: "Luminoso",
    business: "Si Modas",
    size: "lg",
    focus: "center 62%",
  },
  {
    src: "/photos/teef-boutique-fachada.jpeg",
    alt: "Luminoso da Teef Boutique sobre vitrine de loja",
    category: "Luminoso",
    business: "Teef Boutique",
    size: "md",
    focus: "center 10%",
  },
  {
    src: "/photos/gtk-conveniencia-totem.jpg",
    alt: "Totem da GTK Conveniência e GTK Kids em via de acesso",
    category: "Totem",
    business: "GTK Conveniência",
    size: "md",
    focus: "center 35%",
  },
  {
    src: "/photos/gs-advocacia-fachada.jpeg",
    alt: "Fachada em ACM vermelha da GS Advocacia",
    category: "Fachada em ACM",
    business: "GS Advocacia",
    size: "md",
    focus: "center 8%",
  },
  {
    src: "/photos/conveniencia-geronimo-fachada.jpeg",
    alt: "Letra caixa branca da Conveniência Mercearia Geronimo",
    category: "Letra caixa",
    business: "Mercearia Geronimo",
    size: "md",
    focus: "center 12%",
  },
  {
    src: "/photos/bem-me-quero-fachada.jpeg",
    alt: "Fachada em ACM rosa da Bem Me Quero, presentes e acessórios",
    category: "Fachada em ACM",
    business: "Bem Me Quero",
    size: "md",
    focus: "center 4%",
  },
  {
    src: "/photos/may-cosmeticos-fachada.jpeg",
    alt: "Fachada da May Cosméticos com letreiro rosa",
    category: "Fachada em ACM",
    business: "May Cosméticos",
    size: "md",
    focus: "center 8%",
  },
  {
    src: "/photos/sr-advocacia-mado-fachada.jpeg",
    alt: "Fachadas em ACM da SR Advocacia e da Madô Boutique lado a lado",
    category: "Fachada em ACM",
    business: "SR Advocacia · Madô",
    size: "wide",
    focus: "center 22%",
  },
  {
    src: "/photos/kixiki-hair-fachada.jpeg",
    alt: "Luminoso redondo do Kixiki Hair Estúdio Reji Ramos",
    category: "Luminoso",
    business: "Kixiki Hair",
    size: "sm",
    focus: "18% 14%",
  },
  {
    src: "/photos/saborito-letreiro.jpeg",
    alt: "Luminoso da Saborito, assados e sucos",
    category: "Luminoso",
    business: "Saborito",
    size: "sm",
    focus: "center 22%",
  },
  {
    src: "/photos/solmar-fachada.jpeg",
    alt: "Luminoso verde da Solmar Máquinas de Costura",
    category: "Luminoso",
    business: "Solmar",
    size: "sm",
    focus: "center 22%",
  },
  {
    src: "/photos/geronimocell-fachada.jpeg",
    alt: "Luminoso verde da Geronimocell, assistência técnica de celular",
    category: "Luminoso",
    business: "Geronimocell",
    size: "sm",
    focus: "center 14%",
  },
  {
    src: "/photos/ws-imobiliaria-fachada.jpeg",
    alt: "Luminoso da W.S Negócios Imobiliários",
    category: "Luminoso",
    business: "W.S Imobiliária",
    size: "sm",
    focus: "center 18%",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section} aria-label="Trabalhos entregues">
      <div className="container">
        <h2 className={styles.heading}>
          Cada fachada aqui já está na rua, aberta e recebendo cliente.
        </h2>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <figure key={item.src} className={`${styles.tile} ${styles[item.size]}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.image}
                style={{ objectPosition: item.focus }}
              />
              <figcaption className={styles.badge}>
                <span className={styles.badgeStub} aria-hidden="true" />
                {item.category} · {item.business}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
