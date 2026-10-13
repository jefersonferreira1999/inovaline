# Inovaline Soluções Visuais — landing page

Landing page de tráfego pago (Meta Ads / Google Ads) para a Inovaline. Next.js 15 + React 19, App Router, sem dependências de UI externas.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde mexer

- **Número de WhatsApp e mensagem padrão do CTA**: `src/lib/config.ts`.
- **Fotos do portfólio**: `public/photos/` — para trocar ou adicionar, edite o array `ITEMS` em `src/components/Portfolio.tsx` (inclui `alt` e a categoria do selo).
- **Foto do hero**: `src/components/Hero.tsx`, mais a versão usada no fechamento em `src/components/FinalCTA.tsx`.
- **Copy**: cada seção é um componente em `src/components/`, com o texto direto no JSX.

## Analytics (GA4 / Meta Pixel)

Nenhum ID vem hardcoded. Para ativar:

1. Copie `.env.example` para `.env.local` e preencha `NEXT_PUBLIC_GA4_ID` e/ou `NEXT_PUBLIC_META_PIXEL_ID`.
2. Descomente os blocos `<Script>` correspondentes em `src/app/layout.tsx` (estão marcados com comentários "GA4" e "Meta Pixel").
3. O clique no CTA já dispara `trackQuoteRequest()` (`src/lib/analytics.ts`), que chama `gtag('event', 'generate_lead', ...)` e `fbq('track', 'Lead', ...)` automaticamente assim que os scripts estiverem carregados — não precisa mexer nos componentes.

## Deploy (Vercel)

1. Suba este diretório para um repositório Git.
2. Importe o repositório em [vercel.com/new](https://vercel.com/new) — o Next.js é detectado automaticamente, nenhuma configuração extra é necessária.
3. Se for usar GA4/Meta Pixel, adicione as variáveis de ambiente do passo anterior nas configurações do projeto na Vercel antes do deploy de produção.
4. Aponte o domínio da Inovaline para o projeto na Vercel (Settings → Domains).

## Estrutura

```
src/app/           layout, página e estilos globais
src/components/     Hero, Portfolio, CTAs, Footer etc. (cada um com seu .module.css)
src/lib/            config (WhatsApp) e analytics (stub GA4/Meta Pixel)
public/photos/      as 16 fotos reais de serviços entregues
```
