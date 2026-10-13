import styles from "./Services.module.css";

const SERVICES = [
  {
    name: "Fachadas em ACM",
    description: "Painéis metálicos com corte de precisão para a fachada da sua loja ou empresa.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path d="M3 9h18M9 4v14M15 4v14" />
      </>
    ),
  },
  {
    name: "Fachadas em lona",
    description: "Impressão em alta resolução para fachadas de grande formato e comunicação temporária.",
    icon: <path d="M5 3v18M5 4h13l-3 4 3 4H5" />,
  },
  {
    name: "Letreiros em PVC",
    description: "Letreiros leves e duráveis, com acabamento de fábrica.",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="11" rx="1" />
        <path d="M7 10.5h10M7 13.5h6" />
      </>
    ),
  },
  {
    name: "Letra caixa",
    description: "Letras em relevo, com ou sem iluminação, para dar volume à sua marca.",
    icon: <path d="M6 20 11 4h2l5 16M8 14h8" />,
  },
  {
    name: "Luminosos",
    description: "Sinalização que acende e mantém sua marca visível à noite.",
    icon: (
      <path d="M9 21h6M10 23.5h4M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.2 1 2.1V18h6v-1.2c0-.9.3-1.5 1-2.1A7 7 0 0 0 12 2Z" />
    ),
  },
  {
    name: "Totens",
    description: "Sinalização vertical para vias de acesso e identificação à distância.",
    icon: (
      <>
        <path d="M9 2h6v4H9z" />
        <path d="M10 6h4v14h-4z" />
        <path d="M7 20h10" />
      </>
    ),
  },
  {
    name: "Cavaletes",
    description: "Sinalização móvel para promoções e comunicação de ponto de venda.",
    icon: (
      <>
        <rect x="6" y="4" width="12" height="9" rx="1" />
        <path d="M9 13 6 20M15 13l3 7M6 20h12" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="solucoes" className={styles.section} aria-label="Soluções">
      <div className="container">
        <span className={styles.eyebrow}>Soluções</span>
        <h2 className={styles.heading}>O que a Inovaline faz pelo seu negócio.</h2>

        <ul className={styles.grid}>
          {SERVICES.map((service) => (
            <li key={service.name} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {service.icon}
                </svg>
              </div>
              <h3 className={styles.name}>{service.name}</h3>
              <p className={styles.description}>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
