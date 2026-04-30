# SONAE BOX React + Tailwind Implementation Plan

## Goal

Build a React + Tailwind CSS website for the fictional Japanese disaster preparedness subscription service "SONAE BOX", using the generated mockups and assets in `day094/` as visual references.

The primary target is a high-fidelity recreation of:

- `mockups/sonae-box-ui-mockup.png` for the landing page
- `mockups/pages/*.png` for the lower-page visual system
- `assets/images/*`, `assets/illustrations/*`, and `assets/icons/*` for reusable imagery

## Non-Negotiable Requirements

- React + Tailwind CSS via Vite.
- Japanese UI copy.
- White-based, trustworthy, friendly tone.
- Use generated assets as the source of truth for images and page mood.
- Icons used in UI must be SVG or transparent PNG. Avoid opaque icon backgrounds unless the card/tile design intentionally provides the background.
- Preserve the existing `day094/mockups`, `assets`, and `design` files.
- No deletion or replacement of protected project paths.

## Visual Direction

- Layout: desktop-first precision with responsive mobile behavior.
- Base: `#FFFFFF` and `#F6FAF8`.
- Primary CTA: `#2F7F88`, hover `#1F5F68`.
- Accent: mint panels and small yellow status accents.
- Corners: 8px to 12px for UI cards, slightly larger for photo masks and hero surfaces.
- Motion: restrained but rich, including page-load stagger, floating product cutout, progress ring animation, sticky nav hover states, card lift, tab transitions, and scroll reveal.

## Architecture

- `src/main.jsx`: React entry.
- `src/App.jsx`: top-level page state and routing.
- `src/data/siteData.js`: navigation, plans, kit items, articles, testimonials, FAQ, legal sections.
- `src/components/Layout.jsx`: shell, header, footer, page frame.
- `src/components/Shared.jsx`: reusable cards, buttons, section headings, badges, meters.
- `src/components/Icons.jsx`: inline SVG icons matching generated style.
- `src/pages/Home.jsx`: LP landing page.
- `src/pages/DetailPages.jsx`: diagnosis, plans, kit, how-to, business, quality, cases, magazine, dashboard, checkout, support, legal pages.
- `src/index.css`: Tailwind layers, custom properties, animations, responsive polish.

## Asset Strategy

- Keep canonical generated assets under `day094/assets`.
- Mirror project-used assets under `day094/public/assets` so Vite can serve them with stable URLs.
- Use `product-box-cutout.png` for transparent hero/CTA product overlays.
- Use SVG icons from `assets/icons` or inline equivalents for crisp, transparent UI icons.
- Use page mockups only as references, not as full-page pasted screenshots.

## TODO Ownership

1. Project scaffold and asset serving
   - Owner: worker-scaffold
   - Files: `package.json`, `package-lock.json` if needed, `index.html`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `src/main.jsx`, `public/assets/**`

2. Shared data and design system components
   - Owner: worker-system
   - Files: `src/data/siteData.js`, `src/components/Icons.jsx`, `src/components/Shared.jsx`, `src/components/Layout.jsx`

3. Landing page implementation
   - Owner: worker-home
   - Files: `src/pages/Home.jsx`

4. Lower pages implementation
   - Owner: worker-pages
   - Files: `src/pages/DetailPages.jsx`

5. Orchestrator integration and QA
   - Owner: orchestrator
   - Files: `src/App.jsx`, `src/index.css`, `docs/TODO.md`, final fixes as needed

## Verification Plan

- `npm install` if dependencies are missing.
- `npm run build`.
- Start `npm run dev -- --port <free-port>`.
- Browser Use visual checks:
  - desktop 1440px
  - mobile around 390px
  - landing page first viewport, plan area, final CTA
  - several lower pages via navigation
- Check console errors through Browser Use.
- Fix layout overflow, broken images, missing routes, unreadable text, or visible asset mismatches.
