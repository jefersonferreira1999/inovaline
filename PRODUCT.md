# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js + React (App Router), deployed on Vercel. Both explicitly requested/confirmed by the user during this session — not delegated. Vercel was chosen specifically for automatic `next/image` optimization and edge caching, which matters for a paid-traffic landing page where load speed affects conversion.

## Users

Donos de comércios e indústrias de Araquari (SC) e região — foco exclusivo confirmado pelo cliente. Chegam à página como leads de campanhas pagas (Meta Ads e Google Ads) buscando melhorar a visibilidade visual do próprio negócio (fachada, letreiro, comunicação visual do ponto físico).

## Product Purpose

Landing page de tráfego pago para a Inovaline Soluções Visuais, empresa que produz Fachadas em ACM, Fachadas em lona, Letreiros em PVC, Letra caixa, Luminosos, Totens e Cavaletes de divulgação. Sucesso = o lead clica no CTA e abre uma conversa de WhatsApp pedindo orçamento. A página não existe para navegação livre; existe para converter o clique do anúncio em contato.

## Positioning

Diferencial explícito a destacar: qualidade de entrega e prazo — até 25 dias após aprovação do projeto. Nenhum outro diferencial (preço, certificação, prêmios) foi confirmado; não inventar além disso.

## Operating Context

- Destino único de campanhas Meta Ads e Google Ads (não é um site institucional de navegação livre).
- Toda conversão acontece por um único caminho: clique em CTA → WhatsApp (wa.me) com mensagem pré-preenchida. Não há formulário de captura em backend — decisão explícita do cliente ("Whatsapp, se possível, caso contrário desconsiderar o form").
- Número de WhatsApp confirmado: 47996060059 (formato internacional para link: 5547996060059).
- Endereço confirmado (usado no rodapé e no schema LocalBusiness para SEO local): Rua Francisco Gregório Shimit, 130, Bairro Corveta, Araquari - SC. Vale confirmar a grafia exata do nome da rua com o cliente/Google Business Profile antes de veicular tráfego pago — NAP precisa bater 100% em todo lugar.

## Capabilities and Constraints

- CTA único, mesma palavra do início ao fim (ex.: "Pedir orçamento"), repetido em pontos estratégicos da rolagem, todos apontando para o mesmo link de WhatsApp com mensagem pré-preenchida.
- Sem formulário/backend de lead — removido do escopo por decisão do cliente.
- Sem bloco de prova social/números (anos de mercado, nº de clientes, nº de projetos) — cliente não tem esses números confirmados e pediu para não incluir por enquanto. Não inventar.
- GA4 e Meta Pixel serão inseridos depois pelo próprio cliente; o código deve deixar pontos claros e comentados para isso, sem hardcode de IDs.
- Responsivo do desktop ao mobile (tráfego de anúncio é majoritariamente mobile), foco de teclado visível, `prefers-reduced-motion` respeitado, contraste WCAG AA, sem overflow horizontal.
- Imagens otimizadas via `next/image`, viável em produção porque o deploy é Vercel.

## Brand Commitments

Nome da empresa: **Inovaline Soluções Visuais**. Nenhum logo, paleta ou tipografia oficial foi fornecido ainda — identidade visual da página é uma decisão de new-work, ancorada nas fotos reais de serviço.

## Evidence on Hand

16 fotos reais de serviços entregues pela Inovaline (fachadas ACM, letreiros em PVC/letra caixa, luminosos, totens), salvas em `/Users/mdc/Documents/claude_code/Inovaline/` (arquivos `WhatsApp Image *.jpeg` e `inovaline_solucoesvisuais_*.jpg`) e organizadas em `public/photos/`. Essas fotos são o ativo central da página — a prova de trabalho real que a página é construída ao redor, não decoração. Nenhum depoimento, case escrito, nota de imprensa ou métrica de cliente está disponível; não fabricar nenhum desses.

## Product Principles

1. A prova visual entra primeiro — hero e portfólio são construídos ao redor das fotos reais, nunca decorados com elas depois.
2. Um único caminho de conversão: todo CTA leva ao mesmo lugar (WhatsApp), com a mesma palavra do início ao fim.
3. Copy factual em PT-BR: nenhuma afirmação sem lastro (sem anos de mercado ou nº de clientes inventados).
4. Performance é parte da promessa: uma página rápida é coerente com o diferencial de "qualidade e prazo".

## Accessibility & Inclusion

WCAG AA de contraste, foco de teclado visível, `prefers-reduced-motion` respeitado. Nenhum requisito adicional específico do produto foi levantado além do padrão.
