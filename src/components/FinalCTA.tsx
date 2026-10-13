import Image from "next/image";
import styles from "./FinalCTA.module.css";
import WhatsAppCTA from "./WhatsAppCTA";
import { WHATSAPP_DISPLAY, WHATSAPP_MESSAGE, buildWhatsAppLink } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section id="orcamento" className={styles.section} aria-label="Peça seu orçamento">
      <div className={styles.media}>
        <Image
          src="/photos/prime-telhas-luminoso-noite.jpeg"
          alt="Fachada da Prime Telhas com letreiro luminoso aceso à noite, fabricado e instalado pela Inovaline"
          fill
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={`container ${styles.content}`}>
        <h2 className={styles.heading}>
          Sua fachada também pode acender em até 25 dias.
        </h2>
        <p className={styles.body}>
          Fale agora com a Inovaline e receba seu orçamento pelo WhatsApp.
        </p>
        <div className={styles.actions}>
          <WhatsAppCTA origin="final" />
          <a className={styles.phone} href={buildWhatsAppLink(WHATSAPP_MESSAGE)}>
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
