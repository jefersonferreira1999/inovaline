import Image from "next/image";
import styles from "./Finish.module.css";

const POINTS = [
  {
    title: "Recorte e alinhamento precisos",
    body: "Letras retas, espaçamento certo, sem torto e sem gambiarra que denuncia pressa.",
  },
  {
    title: "Cor fiel à sua identidade",
    body: "A cor da sua marca sai a cor da sua marca — não \"quase\".",
  },
  {
    title: "Aplicação sem bolha e sem descolar",
    body: "Fachada que aguenta o tempo, instalação que não volta.",
  },
  {
    title: "Material certo para cada uso",
    body: "Interno, externo, industrial ou vitrine — cada aplicação pede um material.",
  },
];

export default function Finish() {
  return (
    <section className={styles.section} aria-label="Acabamento">
      <div className={`container ${styles.grid}`}>
        <div className={styles.art}>
          <Image
            src="/photos/gs-advocacia-fachada.jpeg"
            alt="Fachada em ACM vermelha da GS Advocacia, detalhe do acabamento da letra caixa"
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
            className={styles.image}
          />
          <span className={styles.tag}>Letra caixa · acabamento</span>
        </div>

        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            O que ninguém vê de longe, todo mundo sente de perto
          </span>
          <h2 className={styles.heading}>
            O acabamento é o que separa uma marca amadora de uma marca
            respeitada.
          </h2>
          <ul className={styles.list}>
            {POINTS.map((point) => (
              <li key={point.title} className={styles.item}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <strong>{point.title}</strong>
                  <span>{point.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
