# NemuNote Day093 Rebuild Plan

## Objective
Build the NemuNote Japanese sleep app LP in `day093/` with React + Tailwind. The generated mockup images are the pixel source of truth. The final website must stack the extracted mockup sections vertically and use a top menu to scroll to each section.

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
- Extract the mockup header into `public/extracted/ui/header-home.png`.
- Extract each mockup body into `public/extracted/sections/*.png`.
- Extract internal assets such as logo, phones, pricing cards, FAQ list, and dashboards into `public/extracted/internal/`.
- Use extracted images for the LP so the visual output is image/pixel-level faithful, not a "mockup-like" recreation.

## Implementation Architecture
- Vite + React app in `day093/`.
- Tailwind installed locally with `tailwind.config.js`, `postcss.config.js`, and `src/index.css`.
- `src/App.jsx` renders a single vertical LP.
- The top header uses the extracted header image plus transparent hotspot buttons.
- Navigation scrolls to the corresponding section with `scrollIntoView`.
- Sections are stacked in this order: home, features, report, pricing, voices, guide, faq, download, privacy.

## Animation Requirements
- Smooth scrolling between LP sections.
- Visual animation is intentionally minimal to preserve pixel fidelity.
- Respect `prefers-reduced-motion`.

## QA Gates
- `npm run build` must pass.
- Browser Use desktop check at approximately 1680x945.
- Browser Use mobile/narrow check.
- Navigate all nine pages from visible navigation.
- Confirm the visible section images match the extracted mockups.
- Confirm menu clicks scroll to the right section.

## PDCA Rule
Each worker owns a narrow file set. The orchestrator reviews the output and sends correction requests when the result does not satisfy the prompt.
