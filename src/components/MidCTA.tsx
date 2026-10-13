import styles from "./MidCTA.module.css";
import WhatsAppCTA from "./WhatsAppCTA";

export default function MidCTA() {
  return (
    <section className={styles.section} aria-label="Chamada para orçamento">
      <div className={`container ${styles.row}`}>
        <p className={styles.text}>
          Já deu pra imaginar sua fachada aqui? O orçamento é rápido, direto no
          WhatsApp.
        </p>
        <WhatsAppCTA origin="mid-scroll" />
      </div>
    </section>
  );
}
