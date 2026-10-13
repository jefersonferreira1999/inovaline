import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders } from "next/font/google";
import StickyCTA from "@/components/StickyCTA";
import { BUSINESS_ADDRESS, BUSINESS_NAME, SITE_URL } from "@/lib/config";
import "./globals.css";

const displayFont = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inovaline Soluções Visuais | Fachadas e Letreiros em Araquari - SC",
  description:
    "Fachadas em ACM, letra caixa, luminosos e totens para comércios e indústrias de Araquari e região. Entrega em até 25 dias após aprovação. Peça seu orçamento pelo WhatsApp.",
  keywords: [
    "fachadas Araquari",
    "letreiros Araquari",
    "letra caixa Araquari SC",
    "luminosos Araquari",
    "comunicação visual Araquari",
    "fachada ACM Araquari",
    "totem Araquari",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Inovaline Soluções Visuais | Fachadas e Letreiros em Araquari - SC",
    description:
      "Fachadas, letreiros e luminosos que fazem seu comércio ser visto. Atendimento em Araquari e região. Entrega em até 25 dias após aprovação.",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/photos/prime-telhas-luminoso-noite.jpeg",
        width: 1200,
        height: 900,
        alt: "Fachada com letreiro luminoso fabricado e instalado pela Inovaline, acesa ao anoitecer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inovaline Soluções Visuais | Fachadas e Letreiros em Araquari - SC",
    description:
      "Fachadas, letreiros e luminosos que fazem seu comércio ser visto. Atendimento em Araquari e região.",
    images: ["/photos/prime-telhas-luminoso-noite.jpeg"],
  },
  other: {
    "geo.placename": BUSINESS_ADDRESS.city,
    "geo.region": `BR-${BUSINESS_ADDRESS.state}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

// Contrato de direção do build — auditável via grep do output de produção
// pela chave de seed. Ver .agents/skills/impeccable/reference/new-work.md.
const DIRECTION_CONTRACT = `
THESIS: A fachada não é vendida pronta — é vendida no instante em que acende. A prova entra antes da promessa.
OWN-WORLD: Céu quase-preto ao anoitecer, brilho âmbar dos letreiros reais como cor saturada, Big Shoulders Display (letras fabricadas) sobre Archivo técnico; selos de categoria fixados às fotos por linha-guia fina.
STORY: O lead reconhece o próprio comércio na fileira de fachadas reais, entende que a Inovaline fabrica e instala em até 25 dias, e pede orçamento pelo WhatsApp.
FIRST VIEWPORT: Foto cheia da fachada da Prime Telhas acesa à noite ocupando 100% da largura; headline em branco/âmbar sobreposta; CTA único abaixo da dobra.
FORM: Acender do Letreiro, candidata 3 da lista própria, seed 041179be.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
`;

// LocalBusiness — dá ao Google um negócio local associado a Araquari/SC para
// exibir em buscas com intenção local ("fachadas em Araquari" etc).
const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/photos/prime-telhas-luminoso-noite.jpeg`,
  telephone: "+55 47 99606-0059",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_ADDRESS.street,
    addressLocality: BUSINESS_ADDRESS.city,
    addressRegion: BUSINESS_ADDRESS.state,
    addressCountry: BUSINESS_ADDRESS.country,
  },
  areaServed: [
    { "@type": "City", name: "Araquari" },
    { "@type": "AdministrativeArea", name: "Região de Araquari, SC" },
  ],
  makesOffer: [
    "Fachadas em ACM",
    "Fachadas em lona",
    "Letreiros em PVC",
    "Letra caixa",
    "Luminosos",
    "Totens",
    "Cavaletes",
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        {/* React cannot emit a bare comment node; this hidden element carries
            the direction contract as real markup so it survives the production
            build and stays greppable, as the first child of body. */}
        <div
          hidden
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }}
        />

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />

        {/*
          GA4 — descomentar após configurar NEXT_PUBLIC_GA4_ID em .env.local
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');`}
          </Script>

          Meta Pixel — descomentar após configurar NEXT_PUBLIC_META_PIXEL_ID em .env.local
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){...}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
              fbq('track', 'PageView');`}
          </Script>
        */}

        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
