---
name: Inovaline Soluções Visuais
description: Landing page de tráfego pago — a prova (fotos reais de fachadas e letreiros) entra antes da promessa.
colors:
  bg-night: "#0b1220"
  bg-panel: "#10192c"
  bg-panel-2: "#16223a"
  dusk-blue: "#1b2942"
  accent-glow: "#ffb74a"
  accent-glow-strong: "#ffcb7a"
  accent-cta: "#e8542e"
  accent-cta-strong: "#ff6d43"
  paper: "#f5f1e6"
  ink: "#0b1220"
typography:
  display:
    fontFamily: "Big Shoulders, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.6rem + 4vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "3px"
  md: "4px"
  lg: "6px"
spacing:
  sm: "0.6rem"
  md: "1.4rem"
  lg: "2.2rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-cta}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "1.05rem 2.1rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-cta-strong}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
---

# Design System: Inovaline Soluções Visuais

## Overview

**Creative North Star: "Acender do Letreiro"**

The page is built around one moment: the instant a fabricated sign switches on at dusk and a plain storefront becomes impossible to miss. That moment set the whole system — a near-black night ground, one warm amber glow borrowed directly from the real signage in the client's own photos, and a scarce red-orange reserved only for the single conversion action. The world is documentary, not decorative: photography is the primary material, and every other surface (dark panels, paper section, type) exists to frame it, never to compete with it.

Confirmed rejection: no cream-paper-plus-serif editorial look, no black-plus-neon "AI dashboard" look, no thin-rule zero-radius newspaper look — all three were explicitly ruled out before the direction was chosen.

**Key Characteristics:**
- Photography-led: real job photos are the hero and the portfolio, never stock or abstract shapes.
- One warm accent (amber) for atmosphere and glow; one separate, scarcer accent (red-orange) exclusively for the conversion action.
- Industrial/fabricated type register (condensed, heavy-weight display face) echoing cut channel-letter signage.
- A single recurring "technical annotation" motif (thin guide-line + dot) that pins a short label to real content, echoing a fabricator's own spec sheet.

## Colors

Two grounds (near-black night, warm paper) carry two accents with strictly separated jobs — glow is atmosphere, red is the one thing to click.

### Primary
- **Sinal Âmbar** (`#ffb74a`, hover `#ffcb7a`): the sign-glow color. Used for the hero headline's emphasis span, and nowhere else as a large fill — it stays inside content, never becomes a background.

### Secondary
- **Vermelho de Pedido** (`#e8542e`, hover `#ff6d43`): reserved exclusively for the "Pedir orçamento" CTA button. **The One Job Rule: this red never appears on anything but the CTA** — not on headings, not on the "25" numeral, not as a decorative accent. Its scarcity is what makes the button findable at a glance.

### Neutral
- **Noite** (`#0b1220`): primary dark ground (body background, hero/final-CTA scrim base).
- **Painel** (`#10192c`) / **Painel 2** (`#16223a`): slightly-lifted dark surfaces for the services strip, portfolio tile background, and footer — one step off the body ground, no border needed to read as a layer.
- **Papel** (`#f5f1e6`): the one light surface in the system (the "25 dias" section), used for pacing contrast against an otherwise dark page.
- **Tinta** (`#0b1220`, same value as Noite): text/ink color when set on Papel.
- Text on dark: `--text` (`#f5f1e6`) primary, `--text-muted` (`rgba(245,241,230,.68)`) secondary — both tinted from the paper hue, never plain gray.

### Named Rules
**The One Job Rule.** `--accent-cta` (the red-orange) is the CTA's color and only the CTA's. Every other red-adjacent surface — the "25" numeral, the Differentiator eyebrow-that-was, any future accent — uses `--ink` or `--accent-glow` instead.

## Typography

**Display Font:** Big Shoulders (Google Fonts, self-hosted via `next/font/google`), weights 700/800/900
**Body Font:** Archivo (Google Fonts, self-hosted via `next/font/google`), weights 400/500/600/700

**Character:** Big Shoulders is a condensed, engineered face associated with cut urban/architectural lettering — it reads as fabricated signage, not a generic "big bold headline" choice. Archivo is a grotesque workhorse that carries the "spec sheet" precision voice in body copy, labels, and badges.

### Hierarchy
- **Display** (800–900, `clamp(2.4rem, 1.6rem + 4vw, 5.2rem)`, uppercase, tracking `-0.01em`): hero headline, section headings. Always uppercase — this is the one place the type performs "signage."
- **Title** (800, `clamp(1.4rem, 1.1rem + 1vw, 2.2rem)`, uppercase): the "DIAS" label beside the big numeral.
- **Body** (400, `1rem`–`1.2rem`, sentence case): paragraph copy, 46–65ch measure.
- **Label** (600–700, `0.72rem`–`0.82rem`, uppercase, tracking `0.02em`–`0.06em`): portfolio category badges, footer, service-strip chips, CTA button label.

### Named Rules
**The Caps-Are-Signage Rule.** Uppercase + Big Shoulders is reserved for headings and the numeral — using it for body copy would flatten the one visual cue that separates "this is a sign" from "this is a sentence."

## Layout

Single-column content container (`max-width: 1200px`, `3rem` side gutters via `.container`). Sections stack full-bleed (hero, services strip, portfolio, mid-CTA, differentiator, final CTA, footer), each a distinct background tone so the scroll reads as a sequence of rooms rather than one continuous canvas. Portfolio breaks the single-column rule deliberately: a 6-column dense CSS grid with per-tile column/row spans (`sm`/`md`/`lg`/`wide`), collapsing to 2 columns at 900px and 1 column at 560px. Mobile gets a fixed bottom CTA bar (`StickyCTA`) that appears only once the hero's own CTA has scrolled out of view, via `IntersectionObserver` — never shown stacked on top of the hero's button.

## Elevation & Depth

Flat by default; the system does not use `box-shadow` for card elevation anywhere. Layering is conveyed by ground-color steps (Noite → Painel → Painel 2) and by a single 1px hairline border (`--border-hair`), never both on the same element ("declare elevation once"). The one shadow in the system is functional, not decorative: a 1px bottom-offset shadow on the CTA button (`0 1px 0 rgba(0,0,0,.25)`), reading as a button's physical edge rather than a floating card.

### Shadow Vocabulary
- **CTA edge** (`box-shadow: 0 1px 0 rgba(0,0,0,0.25)`): the WhatsApp CTA button only.

### Named Rules
**The Flat-Ground Rule.** Depth comes from ground-color steps and hairline borders, never from soft drop shadows. A shadow under a photo tile or a badge is a defect, not a stylistic option.

## Shapes

Small, crisp radii throughout (3–6px) — deliberately tighter than a typical soft-SaaS-card system, matching the fabricated-metal/cut-signage register rather than a consumer-app one. Buttons: 4px. Photo tiles and the confirmation "stamp" label: 3–6px. No pill shapes anywhere (pills are reserved for small controls the system doesn't currently have). Photo tiles carry a single 1px hairline border; nothing else in the system is bordered.

## Components

### Buttons (WhatsAppCTA)
- **Shape:** 4px radius, no pill variants.
- **Primary:** `--accent-cta` background, `--paper` text, uppercase Big Shoulders label, min font-size held ≥18.7px specifically so white-on-red clears WCAG AA's 3:1 large-text threshold at every breakpoint (see the comment in `WhatsAppCTA.module.css`).
- **Hover / Focus:** hover brightens to `--accent-cta-strong` with a 1px lift; focus-visible gets a 3px `--accent-glow` outline offset 3px — the one place amber outranks red, because focus rings are a system-wide convention, not a CTA-only color.
- **Confirmed state:** clicking swaps the label to a rotated, bordered "stamp" reading "Orçamento enviado" (background flips to `--paper`, text to `--accent-cta`) — a deliberate carimbo (rubber-stamp) metaphor for confirmation, not a generic toast.
- **Sticky variant:** full-width, 0 radius (it's a bar, not a button), only visible on ≤720px once the hero CTA scrolls out of view.

### Portfolio badge (signature component)
A small dark pill (3px radius, `rgba(11,18,32,.78)` background, hairline border) sitting at a photo's bottom-left corner, carrying a category label ("Luminoso", "Letra caixa", "Fachada em ACM", "Totem") preceded by a short amber guide-line + dot — a literal "pinned spec label" motif, echoing an engineering annotation. This same guide-line + dot device recurs in the Differentiator section's "do projeto aprovado à instalação" tag, tying the two together as one system rule rather than a one-off.

### Photo tiles (Portfolio grid)
- **Corner style:** 6px radius.
- **Background:** `--bg-panel` (visible only during image load).
- **Border:** 1px `--border-hair`.
- **Behavior:** each tile's `object-position` is hand-tuned per photo so the actual sign stays in frame under crop — never a blanket `center center`.

### Cards
Not used. The system deliberately has no icon+heading+text card pattern anywhere on the page (photos and full-bleed sections carry content instead).

### Navigation
None — single-page scroll, no persistent nav bar. The services strip (`Services.tsx`) is the closest analog: a horizontal row of plain-text service names on `--bg-panel`, separated by 1px hairline dividers, no pill/chip styling.

## Do's and Don'ts

### Do:
- **Do** keep `--accent-cta` (red-orange) exclusive to the CTA button (The One Job Rule).
- **Do** hand-tune `object-position` per photo in any new portfolio-style grid — never trust `center center` on a portrait phone photo inside a landscape tile.
- **Do** use the guide-line + dot annotation motif for any new "pinned label on real content" need, instead of inventing a second badge style.
- **Do** keep type uppercase only on Big Shoulders display/label roles; body copy stays sentence case.

### Don't:
- **Don't** add a kicker/eyebrow label above any heading — this was tried and explicitly removed as a hard-banned pattern; the heading always carries its own weight.
- **Don't** use `box-shadow` for card elevation; use a ground-color step or a hairline border, never both.
- **Don't** widen border-radius toward a soft 12–16px "SaaS card" range — the tight 3–6px scale is a deliberate part of the fabricated-signage register, not an oversight.
- **Don't** introduce a generic icon-plus-heading-plus-text card grid; this system has none, and the photo-led alternative is the point.
