---
version: "0.1.0"
name: "Day099 Bouldering Gear Cyberpunk"
description: "A dark cyberpunk ecommerce landing page for a fictional bouldering starter gear set."
colors:
  deep: "#05060A"
  graphite: "#0B0F17"
  carbon: "#111827"
  steel: "#263241"
  neon-cyan: "#00E5FF"
  electric-magenta: "#FF2BD6"
  safety-lime: "#B6FF3B"
  cta-orange: "#FF5A1F"
  text-white: "#F5F7FA"
  mist-gray: "#A6B0C3"
  muted-slate: "#667085"
typography:
  headline-xl:
    fontFamily: "Noto Sans JP"
    fontSize: "72px"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "0"
  headline-lg:
    fontFamily: "Noto Sans JP"
    fontSize: "48px"
    fontWeight: 900
    lineHeight: 1.12
    letterSpacing: "0"
  headline-md:
    fontFamily: "Noto Sans JP"
    fontSize: "32px"
    fontWeight: 900
    lineHeight: 1.18
    letterSpacing: "0"
  body-md:
    fontFamily: "Noto Sans JP"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0"
  label-tech:
    fontFamily: "Rajdhani"
    fontSize: "14px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
  container: "min(1180px, calc(100vw - 32px))"
rounded:
  none: "0"
  sm: "2px"
  md: "4px"
  lg: "8px"
  full: "999px"
elevation:
  panel: "0 22px 80px rgba(0, 0, 0, 0.45)"
  neon-cyan: "0 0 22px rgba(0, 229, 255, 0.38)"
  neon-magenta: "0 0 22px rgba(255, 43, 214, 0.30)"
  orange-glow: "0 0 28px rgba(255, 90, 31, 0.42)"
components:
  button-primary:
    background: "{colors.cta-orange}"
    text: "{colors.deep}"
    minHeight: "48px"
    shape: "angular-cut"
    hoverGlow: "{elevation.neon-cyan}"
  button-secondary:
    background: "rgba(5, 6, 10, 0.52)"
    border: "{colors.neon-cyan}"
    text: "{colors.text-white}"
    minHeight: "48px"
    shape: "angular-cut"
  panel:
    background: "{colors.carbon}"
    border: "{colors.steel}"
    shadow: "{elevation.panel}"
    shape: "angular-cut"
  product-card:
    background: "rgba(15, 23, 42, 0.80)"
    border: "{colors.steel}"
    imageRatio: "4 / 3"
    cta: "{components.button-secondary}"
  purchase-panel:
    background: "rgba(15, 23, 42, 0.76)"
    border: "{colors.cta-orange}"
    priceColor: "{colors.cta-orange}"
    cta: "{components.button-primary}"
---

# Design System

## Overview

Day099 is a fictional Japanese ecommerce LP for bouldering starter gear. The design must sell practical climbing preparation, not a fashion brand or sci-fi story. The visual identity is a black-based cyberpunk product interface with realistic gear photography, sharp panels, neon rim lighting, and purchase-focused CTAs.

The main conversion path is:

1. Hero CTA to the starter gear set.
2. Product lineup with add-to-cart actions.
3. Starter set detail with price comparison.
4. Cart and checkout with selected product image, quantity, amount, and payment method.

The design source of truth is this file. The older `design/TONE_AND_PALETTE.md` is supporting background context only.

## Colors

- **Deep** (`#05060A`): page base, hero background, overlays, sticky bars.
- **Graphite** (`#0B0F17`): full-width section backgrounds and dark depth.
- **Carbon** (`#111827`): product cards, spec blocks, purchase panels.
- **Steel** (`#263241`): borders, dividers, table lines, grid details.
- **Neon cyan** (`#00E5FF`): focus states, active nav, secondary CTA borders, data highlights.
- **Electric magenta** (`#FF2BD6`): secondary glow, category rhythm, alternate panel accents.
- **Safety lime** (`#B6FF3B`): metrics, badges, in-stock or positive status only.
- **CTA orange** (`#FF5A1F`): primary purchase CTA, price emphasis, checkout actions.
- **Text white** (`#F5F7FA`): main headings and high-priority copy.
- **Mist gray** (`#A6B0C3`): body text and supporting explanations.
- **Muted slate** (`#667085`): metadata, captions, non-critical legal copy.

Use orange only for commercial actions. Use cyan for navigation and clarity. Use magenta for visual rhythm, not for primary CTAs. Avoid large single-hue sections; every viewport should contain black, neutral graphite, and one or two neon accents.

## Typography

- **Japanese UI**: `Noto Sans JP`, then Japanese system sans fallbacks.
- **Technical labels and numbers**: `Rajdhani`, `Barlow Condensed`, then condensed/system fallback.
- **Headlines**: short, direct, heavy-weight Japanese phrases. Use 900 weight and tight but readable line-height.
- **Body copy**: concise, purchase-oriented, and practical. Avoid poetic brand manifesto copy.
- **Letter spacing**: keep at `0`. Do not use negative tracking or viewport-scaled text.

Hierarchy:

- Hero H1: 56-72px desktop, 40-48px mobile, 900 weight.
- Section H2: 32-48px desktop, 28-36px mobile, 900 weight.
- Card H3: 18-24px, 800-900 weight.
- Body: 16px, line-height 1.7-1.8.
- Captions and metadata: 12-14px, 700-800 weight when used as labels.

## Layout

- Use a centered `1180px` maximum content container with responsive side gutters.
- Use dense ecommerce sections, not a marketing-only hero followed by sparse cards.
- Keep product grids stable: 1 column on small mobile, 2 columns on small tablet, 3 columns on desktop, and 6 compact cards only where the first viewport requires broad lineup scanning.
- The hero should pair hard-selling copy with a large realistic product photo. It must not use a flattened full-page mockup as a background.
- Cart rows must preserve control positions. Quantity controls and price/amount should stack vertically where changing amounts would otherwise shift controls.
- FAQ lists should remain vertical on desktop and mobile; category buttons filter visible questions instead of only moving the viewport.
- Checkout must show selected product image, quantity, amount, and payment method selection.
- Mobile uses a sticky bottom CTA, but it must not cover essential cart or checkout controls.

## Elevation & Depth

Depth is built from black surfaces, cyan/magenta rim glow, thin steel borders, and carbon texture. Use shadows sparingly and purposefully:

- Primary panels: `0 22px 80px rgba(0, 0, 0, 0.45)`.
- Cyan glow: active states, secondary CTA hover, header rule.
- Magenta glow: alternate panel accent and visual rhythm.
- Orange glow: purchase CTA and checkout progression.

Backgrounds should include subtle cyber grid and radial neon light, but product imagery must stay inspectable. Do not place decorative orbs, bokeh blobs, or heavy gradients that obscure products.

Motion should be functional:

- Hover lift for buttons and product cards.
- Image scale on product cards only within fixed-ratio containers.
- Reduced-motion fallback must disable or minimize movement.

## Shapes

- Default UI shape is angular, using clipped corners for cyberpunk hardware-like panels.
- Cards and buttons can use 0-8px radius, but the dominant visual language should be sharp and technical.
- Product images keep stable aspect ratios: `4 / 3`, `5 / 4`, `16 / 9`, or square depending on context.
- Do not use pill-heavy soft SaaS shapes except for tiny status badges.
- Do not nest cards inside other cards. A panel may contain product cards, but avoid framed-card-in-card visual clutter.

## Components

### Header

- Sticky top header with dark translucent surface, cyan bottom rule, and active link indication.
- Navigation labels are short Japanese labels.
- Cart summary is always visible on desktop and simplified on mobile.

### Buttons

- Primary button: orange fill, high contrast text, angular cut, purchase-focused copy.
- Secondary button: transparent black panel with cyan border.
- Ghost button: slate border only for low-priority actions.
- Minimum tap target is 44px; primary purchase buttons should be at least 48px high.

### Product Card

- Dark carbon surface, steel border, fixed-ratio image, concise summary, visible price, and direct CTA.
- Add-to-cart buttons must mutate cart state when they say they add to cart.
- Product images must be realistic, logo-free, and label-free.

### Starter Set Panel

- Use the starter set as the commercial anchor.
- Always show it as a 5-item set: liquid chalk, chalk bag, hold brush, finger tape, grip balm.
- Set price must be lower than the total of the individual items.
- Emphasize the saved amount with lime or orange, depending on context.

### Cart

- Quantity can be changed down to 0.
- Quantity 0 items remain visible but clearly marked as excluded from purchase.
- Reserve vertical space for the excluded notice so row layout does not jump.
- Quantity controls and amount are vertical, not horizontal, to prevent button shift when price changes.

### Checkout

- Show selected product image, name, quantity, line amount, discount, shipping, and total.
- Payment method choices must be visible and selectable.
- Use CTA orange for the final order button.

### FAQ

- Category buttons filter questions in place.
- Include a dedicated button for all questions.
- Open rows show a minus mark; closed rows show a plus mark.
- Do not create a duplicate FAQ block under the starter set page.

### Support

- Chat, email, and contact links each route to an appropriate support form page.
- Form panels must use the same dark panel, cyan border, and orange submit CTA language.

### Imagery

- Use realistic product photography with black studio backgrounds, chalk dust, nylon texture, brush bristles, rubber or resin surfaces, and cyan/magenta rim lighting.
- Do not show manufacturer logos, readable maker names, brand marks, or identifiable real packaging.
- Use optimized WebP for runtime assets and preserve PNG source where needed.

## Do's and Don'ts

Do:

- Use `DESIGN.md` as the first design reference for future day099 UI edits.
- Keep CTAs direct: "購入する", "カートに入れる", "購入手続きへ進む".
- Preserve the cyberpunk black, cyan, magenta, lime, and orange balance.
- Keep text practical and product-specific.
- Keep product and cart layouts stable when data changes.
- Use real asset files from `public/assets/products/` and `public/assets/icons/`.

Don't:

- Do not paste generated full-page mockups as a single background.
- Do not write or display manufacturer logos or readable maker labels.
- Do not let the phrase "黒基調" leak into customer-facing copy.
- Do not use orange for non-commercial decoration.
- Do not make FAQ category buttons only scroll anchors.
- Do not make the starter set look more expensive than buying items separately.
- Do not create a second FAQ section under the starter set detail page.
