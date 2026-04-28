# NemuNote Day093 Rebuild Plan

## Objective
Build the NemuNote Japanese sleep app LP in `day093/` with React + Tailwind. The generated mockup images are the visual source of truth, but the final website must be implemented as real DOM/Tailwind sections rather than rendering each section as one large image. The LP stacks all sections vertically and uses a top menu to scroll to each section.

## Required Pages
1. Home / LP first view
2. Features
3. Sleep Report
4. Pricing
5. User Voices
6. Sleep Guide
7. FAQ
8. Download
9. Privacy / Security

## Reference Assets
Reference mockups are copied into `public/reference-mockups/`:
- `home.png`
- `features.png`
- `report.png`
- `pricing.png`
- `voices.png`
- `guide.png`
- `faq.png`
- `download.png`
- `privacy.png`

These are the source images for exact section extraction.

## Visual Target
- Base: white and off-white `#fcfcf8`
- Primary: moon mint `#8fd8c4`
- Deep primary: calm teal `#2f8f83`
- Accent: blush peach `#f7b8a6`
- Support: dream lilac `#d8cdf6`
- Ink: `#263238`
- Muted: `#7a8588`
- Line: `#e8eeec`

The UI should reproduce the mockup tone: soft white space, mint CTAs, peach/lilac accents, rounded 8px-16px cards, large Japanese headings, sleep score rings, phone app dashboards, gentle moon/star/cloud motifs.

## Asset Strategy
- Keep `public/extracted/sections/*.png` only as reference artifacts; do not render them in the LP.
- Use transparent atomic assets generated into `public/extracted/atomic/`.
- Recreate layout, text, cards, buttons, navigation, score rings, charts, pricing cards, FAQ panels, and decorative layout with React + Tailwind DOM.
- Use image assets only for clear standalone parts that are not practical to reproduce exactly in code: app screenshots/phones, article thumbnails, QR/store buttons, logo crescent, and isolated decorative moon/star/shield motifs.

## Implementation Architecture
- Vite + React app in `day093/`.
- Tailwind installed locally with `tailwind.config.js`, `postcss.config.js`, and `src/index.css`.
- `src/App.jsx` renders a single vertical LP with componentized DOM sections.
- The top header is code-built and uses visible buttons for page-section navigation.
- Navigation scrolls to the corresponding section with `scrollIntoView`.
- Sections are stacked in this order: home, features, report, pricing, voices, guide, faq, download, privacy.

## Animation Requirements
- Smooth scrolling between LP sections.
- Use rich but gentle motion: floating phone/device elements, card entrance animation, twinkling decorative marks, CTA pulse, score ring draw, and FAQ accordion.
- Respect `prefers-reduced-motion`.

## QA Gates
- `npm run build` must pass.
- Browser Use desktop check at approximately 1680x945.
- Browser Use mobile/narrow check.
- Navigate LP sections from visible navigation.
- Confirm `/extracted/sections/` images are not used by rendered LP source.
- Confirm DOM sections keep the mockup tone while avoiding full-section image rendering.
- Confirm menu clicks scroll to the right section.

## PDCA Rule
Each worker owns a narrow file set. The orchestrator reviews the output and sends correction requests when the result does not satisfy the prompt.
