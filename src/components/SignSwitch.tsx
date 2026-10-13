"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./SignSwitch.module.css";

export default function SignSwitch() {
  const [on, setOn] = useState(false);

  return (
    <section className={styles.section} aria-label="Demonstração interativa">
      <div className="container">
        <span className={styles.eyebrow}>Experimente</span>
        <h2 className={styles.heading}>
          A fachada não é vendida pronta. É vendida no instante em que
          acende.
        </h2>
        <p className={styles.lead}>
          Clique no interruptor e veja o letreiro da Prime Telhas acender —
          fabricado e instalado pela Inovaline.
        </p>

        <div className={styles.stage} data-on={on || undefined}>
          <div className={styles.frame}>
            <Image
              src="/photos/prime-telhas-fachada-dia.jpeg"
              alt="Fachada da Prime Telhas de dia, letreiro apagado"
              fill
              sizes="(max-width: 720px) 100vw, 900px"
              className={styles.image}
              style={{ objectPosition: "center 38%", opacity: on ? 0 : 1 }}
            />
            <Image
              src="/photos/prime-telhas-luminoso-noite.jpeg"
              alt="Fachada da Prime Telhas à noite, letreiro aceso"
              fill
              sizes="(max-width: 720px) 100vw, 900px"
              className={styles.image}
              style={{ objectPosition: "center 38%", opacity: on ? 1 : 0 }}
            />
            <div className={styles.glow} aria-hidden="true" />
            <span className={styles.caption}>
              Prime Telhas · fábrica de telhas metálicas
            </span>
          </div>

          <button
            type="button"
            className={styles.switch}
            aria-pressed={on}
            onClick={() => setOn((value) => !value)}
          >
            <span className={styles.switchTrack}>
              <span className={styles.switchKnob} aria-hidden="true">
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
            </span>
            <span className={styles.switchLabel}>
              {on ? "Letreiro aceso" : "Letreiro apagado"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
