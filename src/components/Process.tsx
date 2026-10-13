import styles from "./Process.module.css";

const STEPS = [
  {
    number: "Etapa 01",
    title: "Projeto",
    body: "Entendemos sua marca e o espaço, e desenhamos a solução. Você vê como vai ficar e aprova antes de qualquer produção.",
  },
  {
    number: "Etapa 02",
    title: "Produção",
    body: "Fabricamos com o material certo para cada aplicação, com acabamento controlado peça por peça.",
  },
  {
    number: "Etapa 03",
    title: "Instalação",
    body: "Nossa equipe instala. Você recebe pronto, no lugar e no prazo combinado — em até 25 dias após a aprovação.",
  },
];

export default function Process() {
  return (
    <section id="processo" className={styles.section} aria-label="Como funciona">
      <div className="container">
        <span className={styles.eyebrow}>Do desenho à parede</span>
        <h2 className={styles.heading}>Você aprova. A gente resolve o resto.</h2>
        <p className={styles.lead}>
          Projeto, produção e instalação em um único fornecedor. Você não
          precisa contratar mais ninguém nem coordenar terceiros.
        </p>

        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
