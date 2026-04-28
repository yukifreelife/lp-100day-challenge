# NemuNote React Implementation Plan

## Goal
Create a React + Tailwind CSS style implementation of the generated NemuNote Japanese sleep app LP and related pages. Pixel fidelity is prioritized by using the generated mockups as page-level visual references and rendering them as the primary page canvases, with React controls, routing, animation, and accessibility overlays layered on top.

## Source Mockups
- `public/mockups/home.png`
- `public/mockups/features.png`
- `public/mockups/report.png`
- `public/mockups/pricing.png`
- `public/mockups/voices.png`
- `public/mockups/guide.png`
- `public/mockups/faq.png`
- `public/mockups/download.png`
- `public/mockups/privacy.png`

## Generated Asset Policy
- `public/assets/nemunote-asset-sheet-green.png` is the `/image-gen` generated chroma-key source.
- `public/assets/nemunote-asset-sheet.png` is the transparent processed asset sheet.
- Page mockups are kept under `public/mockups/` and used as the fidelity reference.

## Architecture
- Vite + React single page app under `day093/`.
- Tailwind CDN is used through `index.html` to satisfy Tailwind-style utility usage without dependency installation.
- React state controls page selection instead of a router dependency.
- Page content is driven by a page manifest in `src/pageData.js`.
- Visual fidelity comes from full-bleed mockup images sized to 16:9, matching the generated reference proportions.

## Interaction
- Visible UI is the generated mockup itself, without external headers or badges.
- Transparent hotspot links mirror the mock navigation and CTA areas.
- Keyboard-accessible page switcher.
- Page transition animation on mockup swap.
- Page fade and focus-ring effects are kept subtle so they do not alter the mockup.

## Verification
- Static source check: inspect file creation and asset paths.
- Local server check through Vite or static fallback.
- Browser Use check on desktop and mobile viewport.
- Compare that the loaded page displays the exact reference page image without cropping or blank assets.

## Known Constraint
True pixel-level reconstruction of AI-generated Japanese text, fonts, icons, and app screenshots as independent DOM is not reliable. The implementation therefore treats the generated mockup images as the canonical visual layer and adds web interaction around them. This preserves pixel fidelity while still producing a usable React website.
