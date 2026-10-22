# Golden Hour Portfolio Revamp — Design

Date: 2026-10-22

## Goal

Restyle the portfolio from its dark teal/emerald theme to a calm, warm "Golden Hour" look drawn from the reference image (peach sky, lavender clouds, sage grass, brass/terracotta accents), suited to a product manager's portfolio. Content, section order and data are unchanged.

## Scope

Reskin plus a soft CSS sky. No illustrated hero asset. Files touched: `src/app/globals.css`, `src/app/layout.tsx` (font), the class names in each `src/components/*.tsx`, and the per-project `gradient` values in `src/data/portfolio.json`. `page.tsx` and all text content stay as is.

## Colour tokens

Defined once in `globals.css` under `@theme`, replacing hardcoded `emerald-*`, `white/xx` and `#04120f` usage.

| Token | Value | Use |
|---|---|---|
| `cream` | `#FFE3B8` | sky top, light surfaces |
| `peach` | `#FFC9A0` | sky middle |
| `blush` | `#F2B8C6` | sky bottom, tag chips |
| `lavender` | `#B9A6D6` | cloud shadows, borders |
| `sage` | `#8FA98B` | secondary accents |
| `terracotta` | `#C8643C` | buttons, eyebrows |
| `terracotta-deep` | `#A9502B` | small text links (contrast) |
| `ink` | `#2A2F36` | headings and body |

## Background

- One fixed peach → pink → lavender gradient behind the whole page.
- A few blurred cloud blobs (CSS radial gradients) drift slowly; animation is disabled under `prefers-reduced-motion`.
- Small dandelion-seed dots in the hero.
- Hero heading uses a large, tight-tracked style like the reference.

## Components

- **Navbar:** frosted cream glass, thin peach border.
- **Cards** (projects, skills, experience): translucent white panels, rounded corners, soft warm shadow, gentle lift on hover. Replaces the dark panel with gradient border.
- **Buttons:** primary terracotta pill; secondary outlined ink pill.
- **Section headings:** terracotta eyebrow, peach→blush underline.
- **Timeline dots, tags, bullets:** terracotta and lavender.
- **Footer/Contact:** same tokens; Contact keeps its tinted band using the sky.

## Typography

Replace Geist with Plus Jakarta Sans (via `next/font/google`), keeping the existing CSS variable wiring. Body text is ink on light.

## Accessibility

- Ink on peach/cream exceeds 4.5:1.
- Terracotta `#C8643C` on cream is about 3.8:1: use only for large/bold text and buttons with white label checked; small text links use `terracotta-deep`.
- Respect `prefers-reduced-motion`.

## Verification

- `npm run lint` and `npm run build` pass.
- Visual check of every section at mobile and desktop widths in the browser.
- No remaining references to `emerald`, `teal` or `#04120f` in `src/`.

## Out of scope

Illustrated hero artwork, content changes, new sections, dark-mode toggle.
