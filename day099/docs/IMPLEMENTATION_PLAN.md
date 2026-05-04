# day099 Implementation Plan

## Goal

Build a React + Tailwind CSS website for a fictional Japanese bouldering gear ecommerce LP, based only on the day099 tone brief and generated day099 UI mockups.

## Source of Truth

- `day099/design/TONE_AND_PALETTE.md`
- `day099/mockups/home-lp.png`
- `day099/mockups/pages/01-product-lineup.png`
- `day099/mockups/pages/02-product-detail.png`
- `day099/mockups/pages/03-starter-kit-detail.png`
- `day099/mockups/pages/04-howto-maintenance.png`
- `day099/mockups/pages/05-comparison-guide.png`
- `day099/mockups/pages/06-faq.png`
- `day099/mockups/pages/07-cart-checkout.png`
- `day099/mockups/pages/08-legal-privacy.png`

Do not use another day directory as a design, code, layout, asset, or component reference. The implementation must be independent for day099.

## Hard Constraints

- Stack: React + Tailwind CSS.
- All visible user-facing copy is Japanese.
- Recreate the UI structure, palette, typography feel, spacing density, CTA hierarchy, product cards, legal table, FAQ panels, and purchase surfaces from the mockups as closely as possible.
- Do not implement a mockup image as a single page background.
- Use generated or extracted component assets as separate images.
- Product images must be realistic photo style and logo-free.
- Do not include manufacturer logos, brand marks, real brand names, or readable maker labels in UI copy or image assets.
- Icons used as images must be transparent PNG/WebP after chroma-key removal. CSS-only icons may be used only for simple interface controls such as plus/minus and quantity steppers.
- Browser checks must use Browser Use.

## Fidelity Strategy

Pixel-level fidelity will be approached by reconstructing the mockups as DOM/CSS and using separate assets for product photography and iconography.

| Mockup Element | Implementation Method |
|---|---|
| Global dark frame, angular borders, neon rules | CSS/Tailwind layout, pseudo-elements, gradients |
| Header navigation and cart controls | React components with CSS icons or transparent PNG icons |
| Hero and product photography | Image-to-image generated product assets saved under `public/assets/products/` |
| Product cards and comparison tables | DOM/CSS with generated thumbnails |
| Neon metric panels and badges | DOM/CSS, no flattened mockup backgrounds |
| FAQ accordions and legal tables | DOM/CSS with accessible controls |
| Sticky purchase bars | React components with responsive fixed positioning |
| Decorative cyber lines and grid | CSS backgrounds and borders |

## Asset Generation Plan

Use `/image-gen` in image-to-image mode with the day099 mockups as references. Save final project-bound assets in the workspace and leave original generated outputs in place.

### Product Assets

- `public/assets/products/hero-starter-kit.png`
- `public/assets/products/starter-kit.png`
- `public/assets/products/liquid-chalk.png`
- `public/assets/products/chalk-bag.png`
- `public/assets/products/brush.png`
- `public/assets/products/finger-tape.png`
- `public/assets/products/grip-balm.png`
- `public/assets/products/mini-holds.png`
- `public/assets/products/hands-chalk.png`
- `public/assets/products/brush-hold.png`

### Transparent Icon Assets

Generate icon sheets or individual icons on a flat chroma-key background and remove the key locally:

- `public/assets/icons/icon-cart.png`
- `public/assets/icons/icon-hand.png`
- `public/assets/icons/icon-bag.png`
- `public/assets/icons/icon-shield.png`
- `public/assets/icons/icon-truck.png`
- `public/assets/icons/icon-lock.png`
- `public/assets/icons/icon-maintenance.png`
- `public/assets/icons/icon-spark.png`

## Application Scope

Implement one React app with hash-based page switching:

- `#home` / default: LP top page
- `#products`: 商品ラインナップ
- `#product-liquid-chalk`: 商品詳細
- `#starter-kit`: スターターセット詳細
- `#howto`: 使い方・メンテナンス
- `#guide`: 比較・選び方
- `#faq`: FAQ
- `#cart`: カート・購入
- `#legal`: 特商法・プライバシーポリシー

## Proposed File Structure

```text
day099/
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
    assets/
      products/
      icons/
      mockups/
  src/
    main.jsx
    App.jsx
    index.css
    data/siteData.js
    components/
      Layout.jsx
      UI.jsx
      Product.jsx
    pages/
      Home.jsx
      Products.jsx
      ProductDetail.jsx
      StarterKit.jsx
      HowTo.jsx
      Guide.jsx
      Faq.jsx
      Cart.jsx
      Legal.jsx
```

## Worker Ownership

Workers must use reasoning level `low`. Workers are not alone in the codebase, must not revert or overwrite edits made by others, and must keep to their assigned write scope.

1. Worker A: project scaffold, Tailwind tokens, global shell.
   - Owns: `package.json`, `index.html`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `src/main.jsx`, `src/index.css`, `src/App.jsx`.
2. Worker B: shared data and reusable components.
   - Owns: `src/data/siteData.js`, `src/components/Layout.jsx`, `src/components/UI.jsx`, `src/components/Product.jsx`.
3. Worker C: LP top and commerce pages.
   - Owns: `src/pages/Home.jsx`, `src/pages/Products.jsx`, `src/pages/ProductDetail.jsx`, `src/pages/StarterKit.jsx`.
4. Worker D: support pages and purchase flow.
   - Owns: `src/pages/HowTo.jsx`, `src/pages/Guide.jsx`, `src/pages/Faq.jsx`, `src/pages/Cart.jsx`, `src/pages/Legal.jsx`.
5. Orchestrator: asset generation, worker review, integration checks, Browser Use QA, and improvement loops.

## Verification Plan

1. Confirm all required files exist.
2. Run dependency installation if needed.
3. Run `npm run build` from `day099`.
4. Start Vite dev server.
5. Use Browser Use to check:
   - Desktop top page at 1440px wide.
   - Desktop each hash route.
   - Mobile top page and cart/CTA behavior.
   - Assets load from `public/assets/`.
   - No page uses a flattened mockup as the UI background.
   - Text is Japanese and legible.
6. Save screenshots under `day099/qa-screenshots/`.
7. Record findings in `day099/docs/EVALUATION_REPORT.md`.

## Quality Bar

- Build exits with code 0.
- Every page route renders without runtime errors.
- Main visual hierarchy matches the mockups: black cyberpunk frame, neon cyan/magenta rules, orange CTA, realistic product imagery.
- Header and CTA behavior work across routes.
- Mobile layout has no major overlap or off-screen CTA text.
- Remaining differences from mockups are documented if they cannot be resolved within the current pass.
