# day100 Implementation Plan

## Goal

Build a React + Tailwind CSS website for the fictional Japanese solo-business operations organizing service 「みちしるべ整理室」, using the generated day100 mockups as visual references.

## Source of Truth

- `day100/DESIGN.md`
- `day100/design/tone-and-manner.md`
- `day100/mockups/michishirube-fullpage-ui-mockup.png`
- `day100/mockups/pages/service-menu.png`
- `day100/mockups/pages/flow.png`
- `day100/mockups/pages/cases-before-after.png`
- `day100/mockups/pages/pricing.png`
- `day100/mockups/pages/contact.png`
- `day100/mockups/pages/faq.png`

## Hard Constraints

- Stack: React + Tailwind CSS + Vite.
- All visible user-facing copy is Japanese.
- Recreate the UI structure, palette, typography feel, spacing density, CTA hierarchy, route-map motifs, sticky notes, cards, forms, FAQ panels, and page rhythm from the mockups as closely as possible.
- Do not implement any reference mockup as a single page background.
- Use separate generated assets for the visual objects that recur in the mockups.
- Icons or cutout-style images used as image assets must be transparent PNGs after chroma-key removal.
- Browser checks must use Browser Use with the Codex in-app browser.
- Workers must use reasoning level `low`, keep to assigned file ownership, and must not revert edits made by other workers.

## Fidelity Strategy

Pixel-level fidelity will be approached by rebuilding the mockups as DOM/CSS and using separate generated assets only for visual objects that should remain image-like.

| Mockup Element | Implementation Method |
|---|---|
| White paper background, map grid, route lines | CSS backgrounds, borders, pseudo-elements |
| Header, navigation, CTA buttons | React layout + Tailwind |
| Large Japanese editorial hero type | CSS typography using Japanese font stack |
| Business map board | Separate generated image asset |
| Compass, route pins, sticky notes, consultant illustration | Generated assets with transparent PNG output |
| Checkpoint/service cards | DOM/CSS with small CSS/SVG icons |
| Before/after boards | DOM/CSS using generated pins and sticky-note visual language |
| Pricing cards and comparison table | DOM/CSS |
| Contact form and FAQ accordions | Accessible React components |

## Generated Asset Inventory

The following generated assets are available:

```text
day100/public/assets/generated/
  business-map-board.png
  compass.png
  consultant.png
  route-pins.png
  sticky-notes.png
```

Raw chroma-key source files are preserved in:

```text
day100/assets/generated/raw/
```

## Application Scope

Implement one React app with hash-based page switching:

- `#home` / default: LP top page
- `#service`: 整理メニュー
- `#flow`: 進め方
- `#cases`: 整理サンプル / Before After
- `#pricing`: 料金
- `#contact`: 相談予約 / お問い合わせ
- `#faq`: FAQ

## Proposed File Structure

```text
day100/
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  docs/
    IMPLEMENTATION_PLAN.md
    TODO.md
    EVALUATION_REPORT.md
  public/
    assets/generated/
  src/
    main.jsx
    App.jsx
    index.css
    data/siteData.js
    components/
      Layout.jsx
      UI.jsx
      MapVisuals.jsx
    pages/
      Home.jsx
      Service.jsx
      Flow.jsx
      Cases.jsx
      Pricing.jsx
      Contact.jsx
      Faq.jsx
```

## Worker Ownership

Workers must use reasoning level `low`. Workers are not alone in the codebase, must not revert or overwrite edits made by others, and must keep to their assigned write scope.

1. Worker A: project scaffold, Tailwind tokens, global CSS, app routing shell.
   - Owns: `package.json`, `index.html`, `vite.config.js`, `postcss.config.js`, `tailwind.config.js`, `src/main.jsx`, `src/index.css`, `src/App.jsx`.
2. Worker B: shared data and reusable components.
   - Owns: `src/data/siteData.js`, `src/components/Layout.jsx`, `src/components/UI.jsx`, `src/components/MapVisuals.jsx`.
3. Worker C: top page and service/case pages.
   - Owns: `src/pages/Home.jsx`, `src/pages/Service.jsx`, `src/pages/Cases.jsx`.
4. Worker D: flow, pricing, contact, and FAQ pages.
   - Owns: `src/pages/Flow.jsx`, `src/pages/Pricing.jsx`, `src/pages/Contact.jsx`, `src/pages/Faq.jsx`.
5. Orchestrator: asset generation, worker review, integration checks, Browser Use QA, improvement requests, and final documentation.

## Verification Plan

1. Confirm all required files exist.
2. Run `npm install` if dependencies are missing.
3. Run `npm run build` from `day100`.
4. Start Vite dev server.
5. Use Browser Use to check:
   - Desktop top page at 1440px wide.
   - Desktop lower pages for all hash routes.
   - Mobile top/contact/FAQ layouts.
   - Console errors.
   - All generated assets load from `public/assets/generated/`.
   - No page uses a full mockup as the UI background.
6. Save screenshots under `day100/qa-screenshots/`.
7. Record findings in `day100/docs/EVALUATION_REPORT.md`.

## Quality Bar

- `npm run build` exits with code 0.
- Every page route renders without runtime errors.
- The primary visual language matches the mockups: white paper base, ink green headings, route blue lines, compass gold markers, rare terracotta CTA, sticky notes, map board, thin outlines, and calm spacing.
- Japanese text is legible and not cramped on desktop or mobile.
- Contact form and FAQ accordion states work.
- Mobile layout has no major text overlap, horizontal overflow, or cut-off CTA text.
- Remaining differences from the mockups are documented if they cannot be resolved in the current pass.
