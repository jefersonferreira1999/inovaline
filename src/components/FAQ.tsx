import styles from "./FAQ.module.css";

const FAQ_ITEMS = [
  {
    question: "A Inovaline atende Araquari e região?",
    answer:
      "Sim. Atendemos comércios e indústrias de Araquari e região. Peça seu orçamento pelo WhatsApp e confirmamos o atendimento na sua localidade.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer: "Até 25 dias, do projeto aprovado à instalação.",
  },
  {
    question: "Quais serviços a Inovaline oferece?",
    answer:
      "Fachadas em ACM, fachadas em lona, letreiros em PVC, letra caixa, luminosos, totens e cavaletes — sempre com fabricação e instalação inclusas.",
  },
  {
    question: "Como peço um orçamento?",
    answer:
      "Direto pelo WhatsApp. É só clicar em \"Pedir orçamento\" em qualquer ponto da página.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="duvidas" className={styles.section} aria-label="Perguntas frequentes">
      <div className="container">
        <span className={styles.eyebrow}>Antes de pedir orçamento</span>
        <h2 className={styles.heading}>Perguntas que todo cliente faz.</h2>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </section>
  );
}
