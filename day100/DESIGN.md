---
version: "0.2.0"
name: "Michishirube Seirishi"
description: "A landing page for reservation-based solo service owners who need to organize LINE replies, menus, booking flow, day-of guidance, and continuation offers into a practical reception flow."
colors:
  primary: "#203D36"
  header: "#18322D"
  secondary: "#6E4F68"
  accent: "#B7C957"
  background: "#EDF3E5"
  surface: "#FFFFFF"
  surface-variant: "#DFE8D4"
  outline: "#C6D0BF"
  text-primary: "#17231F"
  text-secondary: "#5C6861"
  cta-primary: "#D86642"
  success: "#2F7D5B"
  warning: "#B7C957"
  error: "#B6423A"
typography:
  headline-xl:
    fontFamily: "'Shippori Mincho', 'Noto Serif JP', serif"
    fontSize: "clamp(40px, 6vw, 76px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "0"
  headline-lg:
    fontFamily: "'Shippori Mincho', 'Noto Serif JP', serif"
    fontSize: "clamp(30px, 4vw, 48px)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "0"
  headline-md:
    fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0"
  body-md:
    fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0"
  label-md:
    fontFamily: "'Noto Sans JP', 'Hiragino Sans', sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "88px"
  container: "1120px"
rounded:
  none: "0"
  sm: "4px"
  md: "8px"
  lg: "8px"
  full: "999px"
elevation:
  none: "none"
  sm: "0 8px 24px rgba(32, 61, 54, 0.08)"
  md: "0 16px 48px rgba(32, 61, 54, 0.12)"
  lg: "0 24px 72px rgba(32, 61, 54, 0.16)"
components:
  button-primary:
    background: "{colors.cta-primary}"
    text: "{colors.surface}"
    minHeight: "52px"
    radius: "{rounded.md}"
    shadow: "{elevation.sm}"
  button-secondary:
    background: "transparent"
    border: "{colors.primary}"
    text: "{colors.primary}"
    minHeight: "52px"
    radius: "{rounded.md}"
  card:
    background: "{colors.surface}"
    border: "{colors.outline}"
    radius: "{rounded.lg}"
    shadow: "{elevation.sm}"
  input:
    background: "{colors.surface}"
    border: "{colors.outline}"
    text: "{colors.text-primary}"
    radius: "{rounded.md}"
---

# Design System

## Overview

Michishirube Seirishi is now centered on reservation-based solo service owners: personal salons, small classes, consultation businesses, and one-person studios that already receive inquiries but struggle with what happens before and after a booking.

The primary persona is defined in `design/persona-v2.md`: a 39-year-old solo salon/class owner who handles Instagram, LINE, booking tools, menus, day-of guidance, and continuation offers alone. The page should not speak to every freelancer. It should make this person feel: "this understands the exact mess around my reservation flow."

The visual identity is **受付導線のカルテ棚**: a calm but sharp reception-flow workspace where LINE replies, menu cards, booking calendar, day-of guidance, and continuation notes are filed into a route the owner can run alone. The primary conversion goal is `無料30分 受付導線診断`. This file is the design source of truth for AI agents and future UI edits.

Use this DESIGN.md before implementing or revising:

1. Read the YAML tokens for exact values.
2. Read `design/persona-v2.md` and `design/tone-and-manner.md`.
3. Map each screen element to a token or component rule before coding.
4. Add a new token only when an existing token cannot express the design safely.

## Colors

- **Primary** (`#203D36`): reception ink green for headings, frames, filing tabs, and route anchors.
- **Header** (`#18322D`): deeper reception ink for the sticky global header; use white navigation text and lime active markers on top.
- **Secondary** (`#6E4F68`): reservation plum for LINE/rebooking/continuation context and emotional hesitation.
- **Accent** (`#B7C957`): sticky-note lime for check marks, micro labels, and small attention markers.
- **Background** (`#EDF3E5`): deeper sage chart-paper base; use as the main page background.
- **Surface** (`#FFFFFF`): forms, cards, reception-file panels, and strong content blocks.
- **Surface variant** (`#DFE8D4`): diagnostic blocks, reception shelves, and quiet section bands.
- **Outline** (`#C6D0BF`): chart lines, dividers, input borders, and low-emphasis frames.
- **Text primary** (`#17231F`): main headings and body text.
- **Text secondary** (`#5C6861`): supporting copy, captions, metadata, and helper text.
- **CTA primary** (`#D86642`): primary conversion actions only.

Use color by role, not by visual preference. CTA coral must not be used as general decoration. The distinctive palette comes from reception green, reservation plum, sticky-note lime, and rare CTA coral. Avoid returning to a generic green consulting palette.

## Typography

- **Headline font**: `'Shippori Mincho', 'Noto Serif JP', serif` for hero and major section titles.
- **Body font**: `'Noto Sans JP', 'Hiragino Sans', sans-serif` for descriptions, forms, FAQ, and legal text.
- **Label font**: `'Noto Sans JP', 'Hiragino Sans', sans-serif` for navigation, reception labels, filing tabs, and metadata.

Rules:

- Keep Japanese text readable at mobile width.
- Use `letterSpacing: 0`.
- Do not scale font size with viewport width except the fixed headline clamps above.
- Headlines should name the concrete operational problem: LINE replies, menus, booking, day-of guidance, or continuation offers.

## Layout

- Container: `1120px`.
- Section spacing: `88px` on desktop, `64px` on tablet, `48px` on mobile.
- Primary layout rhythm: alternating full-width chart-white bands and reception-file sections with thin route lines.
- Hero layout: left-aligned copy with a right-side "reception flow board" containing LINE reply slips, menu cards, booking calendar, day-of guide, and continuation note.
- Service cards: use file tabs, reception numbers, and output cards. Cards should feel like practical booking-flow checkpoints, not generic SaaS feature cards.
- Forms: place the consultation form in a clear surface panel with a preparation-free reassurance panel beside or above it.
- Mobile: stack the reception-flow board below the hero copy, keep the primary CTA within the first viewport, and keep all touch targets at least 44px high.
- Page and media backgrounds must not use square ruled grids or graph-paper patterns. Express the reception-workspace tone with chart-white surfaces, layered paper lift, filing tabs, quiet tape accents, and subtle color washes instead.

Keep fixed-format UI elements stable with aspect ratio, grid tracks, min/max widths, and reserved content height where data changes.

## Elevation & Depth

Depth should be expressed through soft paper lift, thin borders, and layered reception files.

- Use `{elevation.sm}` for cards, sticky notes, and small interactive lift.
- Use `{elevation.md}` for sticky header, consultation form, and diagnostic result panels.
- Use `{elevation.lg}` only for modal-like overlays or a major final conversion panel.

Avoid heavy glassmorphism, neon glow, or corporate dashboard shadows.

## Shapes

- Default radius: `{rounded.md}`.
- Card radius: `{rounded.lg}`.
- Full pill radius: `{rounded.full}` only for small tags, status labels, or compact filters.

Shape language: restrained rectangles, file tabs, chart labels, reception stamps, and small cut-corner details. Do not use overly rounded, playful blob shapes; this service should feel organized, specific, and dependable.

## Components

### Header

Use a quiet sticky header with text navigation, one primary CTA, and a small filing-tab or route-line mark. Header background should use the deeper reception ink token `header` so it anchors the pale sage page. Keep white navigation text, a lime active marker, and a subtle bottom border. Do not use a large logo lockup that competes with the hero.

### Buttons

- Primary: use `{components.button-primary}` for `無料30分 受付導線診断を予約する` and the final conversion action.
- Secondary: use `{components.button-secondary}` for `予約前後の詰まりを見る` or `相談で整えるものを見る`.
- Minimum tap target: 44px.
- Primary contact buttons should be at least 52px high.
- Button icons may use arrow, check, route, or reception-file metaphors, but keep them functional.
- Primary and secondary CTAs should read visually as diagnostic tickets: small side cutouts, a dashed divider before the arrow, and stronger paper lift than ordinary cards. Preserve the CTA wording for CVR; differentiate through the object shape.

### Cards

Cards should resemble reception files: a compact label, one real operational problem, and one output the user can imagine using. Use thin route lines, filing tabs, or corner labels to create distinction. Do not nest cards inside other cards.

Generic white rounded cards are not the default. Use the `reception-card` language: top filing strip, small ledger marks, quiet chart-white surface, and one operational label such as `未整理 01`, `受付 02`, or `成果物 03`.

### Forms

Forms should ask only for practical consultation fields: name, email, current service, what is scattered around booking, and preferred consultation method. Use helper text sparingly. Confirmation states should feel calm and concrete.

The contact form should feel like a `診断受付票`, not a generic web form. Keep the fields conventional for completion rate, but frame the form with a受付番号, dashed separators, and chart-white paper styling.

### Media

Prefer generated or illustrated assets showing a reception-flow board, LINE reply slips, menu cards, booking calendar, day-of guide, continuation note, and small sticky markers. Photography can be used for warm solo-service context, but it must not look like generic office stock.

Cutout media should sit on a custom `reception-stage` style surface, not on a generic grid background. If an asset includes internal note lines, keep them subordinate to the object; do not add additional ruled or square-line backgrounds behind the asset.

### FAQ

FAQ should answer anxiety around `まだ整理できていなくてもいいか`, `LINE返信だけでも相談できるか`, `強い売り込みにならないか`, `継続案内をどう出すか`, and `料金やキャンセル条件はどう扱うか`. Use accordion UI with enough spacing for mobile taps.

### Conversion Area

The final CTA should summarize the before/after: scattered reservation replies, menus, guidance, and continuation notes become a practical reception flow. Repeat the free diagnostic CTA, expected duration, and what the user receives after the session.

## Do's and Don'ts

Do:

- Use this file as the first design reference for UI changes.
- Keep tokens synchronized with implementation tokens in Tailwind/CSS.
- Preserve route and practical-note design language, but shift the motif from generic map to reception-flow filing.
- Keep the page white-based, calm, and friendly without becoming a generic consulting template.
- Use concrete Japanese copy about LINE replies, menus, booking, day-of guidance, and continuation offers.
- Verify desktop and mobile after visual changes.

Don't:

- Do not make the page a standard blue-green SaaS dashboard.
- Do not use CTA colors for decorative noise.
- Do not overuse beige paper textures or vintage stationery styling.
- Do not speak to every freelancer at once.
- Do not use abstract consulting words when a concrete booking-flow word fits.
- Do not let implementation notes leak into customer-facing copy.
- Do not create card-in-card clutter.
- Do not use ruled grids, graph-paper backgrounds, or repeated line textures behind cutout images.
- Do not rely on one flattened mockup image for implementation.
