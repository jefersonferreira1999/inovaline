export const WHATSAPP_NUMBER = "5547996060059";

export const CTA_LABEL = "Pedir orçamento";
export const CTA_CONFIRM_LABEL = "Orçamento enviado";

export const SITE_URL = "https://inovaline.com.br";

export const BUSINESS_NAME = "Inovaline Soluções Visuais";

// NAP (Nome/Endereço/Telefone) — mantenha idêntico em todo lugar que usar
// (rodapé, JSON-LD, Google Business Profile) para consistência de SEO local.
export const BUSINESS_ADDRESS = {
  street: "Rua Francisco Gregório Shimit, 130",
  neighborhood: "Bairro Corveta",
  city: "Araquari",
  state: "SC",
  country: "BR",
};

export const BUSINESS_ADDRESS_FULL = `${BUSINESS_ADDRESS.street} – ${BUSINESS_ADDRESS.neighborhood}, ${BUSINESS_ADDRESS.city} – ${BUSINESS_ADDRESS.state}`;

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGE =
  "Olá! Vi o site da Inovaline e quero pedir um orçamento.";

export const WHATSAPP_DISPLAY = "(47) 99606-0059";
