import styles from "./Differentiator.module.css";

export default function Differentiator() {
  return (
    <section className={styles.section} aria-label="Diferencial de prazo e qualidade">
      <div className={`container ${styles.grid}`}>
        <div className={styles.number}>
          <div className={styles.numberRow} aria-hidden="true">
            <span className={styles.numberDigits}>25</span>
            <span className={styles.numberLabel}>dias</span>
          </div>
          <p className={styles.numberTag}>
            <span className={styles.tagStub} aria-hidden="true" />
            do projeto aprovado à instalação
          </p>
        </div>

        <div className={styles.copy}>
          <h2 className={styles.heading}>
            Do projeto aprovado ao letreiro instalado, em até 25 dias.
          </h2>
          <p className={styles.body}>
            A Inovaline fabrica e instala fachadas em ACM, fachadas em lona,
            letreiros em PVC, letra caixa, luminosos, totens e cavaletes com
            acabamento de fábrica — sem prazo que se estica indefinidamente.
          </p>
        </div>
      </div>
    </section>
  );
}
