# Day097 Evaluation Report

## Scope

- Target: `http://127.0.0.1:8097/`
- Pages checked:
  - `/`
  - `/service`
  - `/pricing`
  - `/contact`
- Stack: React + Tailwind CSS + Vite

## Build

- Command: `npm run build`
- Result: Pass
- Note: Tailwind emitted `No utility classes were detected` because the implementation uses BEM-style class names with custom CSS plus Tailwind directives. This is acceptable for the current implementation.

## Browser QA

### Browser Use / Playwright

- Browser Use with the in-app browser was used for live page checks.
- Confirmed:
  - Home page renders.
  - `/service`, `/pricing`, `/contact` route text loads.
  - Browser Use console error count was `0` across the checked routes after the favicon fix.
- Screenshot evidence was later saved with Playwright MCP after the session resumed.

### Playwright MCP

- Playwright MCP navigation and accessibility snapshots were used as fallback evidence.
- Confirmed:
  - Desktop-size navigation to `/`, `/service`, `/pricing`, `/contact` succeeds.
  - Mobile-size snapshot for `/` contains the expected header, hero, CTA, sections, and footer.
  - Contact page snapshot contains the expected hero, form area, consultation flow, FAQ, CTA, and footer.
- Final screenshots saved:
  - `day097/qa-screenshots/home-desktop-full-final.png`
  - `day097/qa-screenshots/contact-desktop-full-final.png`
  - `day097/qa-screenshots/home-mobile-full-final.png`
  - `day097/qa-screenshots/contact-mobile-full-final.png`
- Console check:
  - `day097/qa-screenshots/console-final.log`
  - Result: `Errors: 0`, `Warnings: 0`

### Re-evaluation on 2026-05-03

- Runtime target: `http://127.0.0.1:8097/`
- Viewports:
  - Desktop: `1440x1100`
  - Mobile: `390x844`
- Routes checked:
  - `/`
  - `/service`
  - `/pricing`
  - `/contact`
- Re-evaluation screenshots:
  - `day097/qa-screenshots/re-eval-desktop-home.png`
  - `day097/qa-screenshots/re-eval-desktop-service.png`
  - `day097/qa-screenshots/re-eval-desktop-pricing.png`
  - `day097/qa-screenshots/re-eval-desktop-contact.png`
  - `day097/qa-screenshots/re-eval-mobile-home.png`
  - `day097/qa-screenshots/re-eval-mobile-service.png`
  - `day097/qa-screenshots/re-eval-mobile-pricing.png`
  - `day097/qa-screenshots/re-eval-mobile-contact.png`
- Automated checks:
  - Console warnings/errors: none detected during route audit.
  - HTTP response errors: none detected during route audit.
  - Duplicate IDs: none detected.
  - Heading structure: one `h1` per route, no heading-level skips detected.
  - Horizontal overflow: none detected at desktop or mobile widths.
  - Touch target risk: mobile header brand and nav links measure below the 44px recommended height.
  - Image performance risk: rendered images are missing explicit `width` and `height` attributes.
  - SEO metadata risk: route-specific `metaTitle` values exist in data but are not applied to `document.title`; canonical, OGP, Twitter Card, and JSON-LD are not implemented.

## Visual / UX Review

### Passed

- Japanese copy is present and readable in the route snapshots.
- Header, navigation, CTA, hero, service cards, pricing cards, contact form, FAQ, and final CTA exist.
- Generated image assets are referenced through `/assets/...`.
- Transparent PNG icon assets are used as `<img>` files, not inline SVG icon components.
- Orange/cream palette, 8px card radius, soft borders, and hover/reveal animations are implemented.
- The contact page uses a low-pressure form structure with required labels and helper text.
- `prefers-reduced-motion` handling is present in CSS.

### Remaining Risk

- Pixel-level comparison against the original generated mockups was not automated.
- Final screenshots were saved and visually reviewed for major layout collapse, broken assets, and text wrapping.

## Fixes Applied During QA

- Favicon 404 was fixed by adding:
  - `<link rel="icon" type="image/png" href="/assets/icons/chat.png" />`
- Hero title wrapping was fixed by adding explicit `titleLines` and rendering controlled line breaks in `PageHero`.
- Desktop hero title sizing and grid balance were adjusted so Japanese copy no longer collapses into narrow vertical-looking columns.

## Current Status

Accepted:

- Build passes.
- Browser routes render.
- Console errors are clear after favicon fix.
- Final desktop/mobile screenshots are saved.

Re-evaluation status:

- Overall score: 78 / 100
- Visual/UI: 86 / 100
- Content and conversion flow: 88 / 100
- Mobile usability: 82 / 100
- Code integrity: 86 / 100
- Performance readiness: 72 / 100
- SEO readiness: 58 / 100

Priority improvements:

1. Apply route-specific metadata from `siteData.pages[*].metaTitle` and add canonical, OGP, Twitter Card, and JSON-LD.
2. Add explicit image dimensions or a reusable image component API for hero and icon assets to reduce CLS risk.
3. Increase mobile header brand/nav hit areas to at least 44px high.
4. Adjust the mobile home hero image crop because the current screenshot reads too empty compared with the other route heroes.
5. Add contact-form success/error feedback if the form is expected to behave as a real lead capture surface.

## Improvement Implementation

### Applied Changes

- Added route-specific `metaDescription` values and `siteUrl` in `siteData`.
- Added `SeoHead` to update `document.title`, description, canonical, OGP, Twitter Card, referrer policy, and JSON-LD per route.
- Added baseline SEO and social metadata to `index.html`.
- Added `assetDimensions` and applied `width` / `height` attributes to generated hero and icon images.
- Added `fetchPriority="high"` to hero images.
- Increased mobile header brand and nav link hit areas to meet the 44px target size.
- Added contact form success feedback with `role="status"`.
- Adjusted the mobile home hero visual so the assistant image remains visible on narrow screens.

### Post-improvement Verification

- `npm run build`: Pass.
- `node --check day097/src/data/siteData.js`: Pass.
- `node --check day097/src/utils/assetDimensions.js`: Pass.
- Playwright MCP route audit:
  - `/`
  - `/service`
  - `/pricing`
  - `/contact`
- Viewports:
  - Desktop: `1440x1100`
  - Mobile: `390x844`
- Result:
  - Route-specific titles: pass.
  - Canonical links: pass.
  - OGP / Twitter Card: pass.
  - JSON-LD: one block per route.
  - Image dimensions: no missing `width` / `height` attributes.
  - Mobile touch targets: no targets below 44px.
  - Horizontal overflow: none detected.
  - Duplicate IDs: none detected.
  - `h1`: one per route.
  - Console warnings/errors during route audit: none detected.
- Additional screenshot evidence:
  - `day097/qa-screenshots/post-improve-final-desktop-home.png`
  - `day097/qa-screenshots/post-improve-final-desktop-service.png`
  - `day097/qa-screenshots/post-improve-final-desktop-pricing.png`
  - `day097/qa-screenshots/post-improve-final-desktop-contact.png`
  - `day097/qa-screenshots/post-improve-final-mobile-home.png`
  - `day097/qa-screenshots/post-improve-final-mobile-service.png`
  - `day097/qa-screenshots/post-improve-final-mobile-pricing.png`
  - `day097/qa-screenshots/post-improve-final-mobile-contact.png`
  - `day097/qa-screenshots/post-improve-contact-form-status.png`

### Updated Score

- Overall score: 90 / 100
- Visual/UI: 90 / 100
- Content and conversion flow: 91 / 100
- Mobile usability: 92 / 100
- Code integrity: 90 / 100
- Performance readiness: 86 / 100
- SEO readiness: 88 / 100
