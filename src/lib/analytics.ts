// Ponte fina para GA4 / Meta Pixel. Nenhum ID fica hardcoded aqui —
// os scripts de carregamento ficam comentados em src/app/layout.tsx,
// prontos para ativar com as variáveis de ambiente NEXT_PUBLIC_GA4_ID
// e NEXT_PUBLIC_META_PIXEL_ID quando o cliente tiver as contas.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackQuoteRequest(origin: string) {
  if (typeof window === "undefined") return;

  // GA4: ativar depois de configurar NEXT_PUBLIC_GA4_ID e descomentar
  // o snippet correspondente em layout.tsx.
  window.gtag?.("event", "generate_lead", {
    event_category: "orcamento",
    event_label: origin,
  });

  // Meta Pixel: ativar depois de configurar NEXT_PUBLIC_META_PIXEL_ID e
  // descomentar o snippet correspondente em layout.tsx.
  window.fbq?.("track", "Lead", { content_name: origin });
}
