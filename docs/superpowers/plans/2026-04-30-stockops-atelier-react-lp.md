# StockOps Atelier React LP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a React + Tailwind CSS multi-page StockOps Atelier website that closely reproduces the generated Japanese mockups and reusable assets under `day095/assets/generated/`.

**Architecture:** The project is a Vite React app scoped to `day095/`. Static raster references stay in `day095/assets/generated/`; optimized assets used by the app live in `day095/public-optimized/assets/`. The React code is split into focused files: data, icons, layout, shared UI components, dashboard/UI widgets, page components, and app routing.

**Tech Stack:** React 19, Vite 6, Tailwind CSS 3, plain JavaScript/JSX, CSS variables, Browser Use via `browser-client` for visual checks.

---

## Reference Assets

- Main LP mockup: `day095/assets/generated/stockops-full-lp-ui.png`
- Hero dashboard mockup: `day095/assets/generated/stockops-hero-dashboard.png`
- Main component sheet: `day095/assets/generated/stockops-asset-sheet.png`
- Lower pages: `day095/assets/generated/pages/page-*.png`
- Supplemental components: `day095/assets/generated/supplemental/*.png`
- Transparent generated icons: `day095/assets/generated/icons-transparent/icon-*.png`
- Asset manifest: `day095/design/asset-manifest.md`

## Pixel Fidelity Target

The app must prioritize these visual properties from the mockups:

- Warm ledger-paper background (`#F7F5EF`) with faint ruled/grid texture.
- Compact, utilitarian Japanese SaaS layout with dense but readable information.
- Teal sidebar/header blocks (`#0D5C63`) and copper alert accents (`#C96F32`).
- Thin `#D8D2C4` rules, 8px-or-less card radii, subtle paper shadows.
- Live HTML text for headings, nav, CTA, forms, FAQ, tables, and legal copy.
- Raster assets only for photo thumbnails, decorative labels/stamps, and fallback references.
- Transparent PNG icons or inline SVG icons only; no background-box icon images.

## TODO List

### Task 1: Project Scaffold, Build Setup, And Asset Copy

**Owner:** worker  
**Files:**
- Create: `day095/package.json`
- Create: `day095/index.html`
- Create: `day095/vite.config.js`
- Create: `day095/tailwind.config.js`
- Create: `day095/postcss.config.js`
- Create: `day095/src/main.jsx`
- Create: `day095/src/App.jsx`
- Create: `day095/src/index.css`
- Create: `day095/src/data/siteData.js`
- Create: `day095/public-optimized/assets/`

- [ ] Create the Vite React + Tailwind app using the same dependency versions as `day094`.
- [ ] Configure `base: "./"` in `vite.config.js` so `dist/` works from `/day095/`.
- [ ] Add Tailwind tokens for `ledger`, `ink`, `teal`, `steel`, `copper`, `mint`, `amber`, `grid`, and `slip`.
- [ ] Copy only app-consumed raster assets into `day095/public-optimized/assets/`:
  - `stockops-hero-dashboard.webp`
  - `stockops-full-lp-ui.webp`
  - `stockops-case-study-photo-thumbnails.webp`
  - `stockops-supplemental-crop-contact-sheet.webp`
  - selected `photo-case-*.png`
  - selected transparent icons from `icons-transparent/`
- [ ] Add `siteData.js` with nav items, page metadata, KPIs, alerts, features, pricing plans, FAQ, posts, news, and case studies.
- [ ] Run `npm install`.
- [ ] Run `npm run build`.

### Task 2: Core Layout, Routing, Icon System, And Shared Components

**Owner:** worker  
**Files:**
- Create: `day095/src/components/Layout.jsx`
- Create: `day095/src/components/Icons.jsx`
- Create: `day095/src/components/Shared.jsx`
- Create: `day095/src/components/Dashboard.jsx`
- Modify: `day095/src/App.jsx`
- Modify: `day095/src/index.css`

- [ ] Implement hash-based routing for `/`, `/diagnosis`, `/demo`, `/pricing`, `/contact`, `/features`, `/channels`, `/cases`, `/security`, `/help`, `/faq`, `/news`, `/column`, and `/legal`.
- [ ] Build a sticky header matching the mockups: logo mark, compact nav, login text, teal CTA.
- [ ] Build reusable `Button`, `SectionShell`, `PaperCard`, `Badge`, `KpiCard`, `LabelSticker`, `BottomCta`, and `PageHero` components.
- [ ] Implement `Icons.jsx` as inline SVGs matching the generated transparent icons, with transparent backgrounds and `currentColor` support.
- [ ] Implement `Dashboard.jsx` as live HTML/CSS, not a static dashboard image, matching the hero dashboard mockup: sidebar, KPI row, alert table, channel cards.
- [ ] Add CSS animations: page reveal, dashboard line draw, card stagger, CTA pulse, subtle label float, reduced-motion fallback.
- [ ] Run `npm run build`.

### Task 3: Main LP Home Page Reconstruction

**Owner:** worker  
**Files:**
- Create: `day095/src/pages/Home.jsx`
- Modify: `day095/src/App.jsx`
- Modify: `day095/src/index.css`

- [ ] Recreate the full LP mockup structure:
  - hero with Japanese copy and live dashboard
  - problem cards
  - five-step solution flow
  - feature grid
  - before/after comparison
  - diagnosis/pricing CTA strip
  - FAQ preview
  - final teal CTA band
- [ ] Use the mockup Japanese copy as live text:
  - `小さなEC運営を、静かな管制室に変える。`
  - `在庫・価格・SKUを、毎朝見える状態へ。`
  - `無料で棚卸し診断を受ける`
  - `デモ画面を見る`
- [ ] Place decorative logistics labels/stamps from generated assets where the mockup uses them.
- [ ] Ensure desktop width resembles the 864x1821 LP reference while remaining responsive.
- [ ] Run `npm run build`.

### Task 4: Conversion Pages - Diagnosis, Demo, Pricing, Contact

**Owner:** worker  
**Files:**
- Create: `day095/src/pages/ConversionPages.jsx`
- Modify: `day095/src/App.jsx`
- Modify: `day095/src/index.css`

- [ ] Implement `/diagnosis` matching `page-free-diagnosis.png`: page hero, 3-step progress, sales channel checkboxes, SKU/monthly order inputs, issue radio chips, textarea, diagnosis preview.
- [ ] Implement `/demo` matching `page-demo.png`: dashboard hero, tabs, annotated screen modules, component descriptions.
- [ ] Implement `/pricing` matching `page-pricing.png`: three pricing cards, comparison table, FAQ strip, CTA.
- [ ] Implement `/contact` matching `page-contact.png`: support flow, contact form, contact methods, response-time note.
- [ ] Use live HTML form controls. No submission backend is required; use local interaction state only.
- [ ] Run `npm run build`.

### Task 5: Product And Trust Pages - Features, Channels, Cases, Security

**Owner:** worker  
**Files:**
- Create: `day095/src/pages/ProductPages.jsx`
- Modify: `day095/src/App.jsx`
- Modify: `day095/src/index.css`

- [ ] Implement `/features` matching `page-features.png`.
- [ ] Implement `/channels` matching `page-channels.png`, using generic channel marks and no exact official logos.
- [ ] Implement `/cases` matching `page-case-studies.png`, using the generated case study photo thumbnails.
- [ ] Implement `/security` matching `page-security.png`, including data flow, information cards, permission matrix, and security icon row.
- [ ] Run `npm run build`.

### Task 6: Support And Content Pages - Help, FAQ, News, Column, Legal

**Owner:** worker  
**Files:**
- Create: `day095/src/pages/SupportPages.jsx`
- Modify: `day095/src/App.jsx`
- Modify: `day095/src/index.css`

- [ ] Implement `/help` matching `page-help-center.png`.
- [ ] Implement `/faq` matching `page-faq.png`, with interactive accordion state.
- [ ] Implement `/news` matching `page-news.png`.
- [ ] Implement `/column` matching `page-column.png`.
- [ ] Implement `/legal` matching `page-legal-policy.png`, with left-side document navigation and text-heavy content.
- [ ] Run `npm run build`.

### Task 7: Responsive Fidelity, Animation Polish, And Accessibility Pass

**Owner:** worker  
**Files:**
- Modify: `day095/src/index.css`
- Modify: page/component files as needed within `day095/src/`

- [ ] Tune desktop layout at 1440px, tablet at 1024px, and mobile at 390px.
- [ ] Ensure no text overlaps in nav, buttons, cards, dashboard tables, pricing cards, and forms.
- [ ] Add hover/focus states, keyboard-visible focus, `aria-label`s where icon-only controls exist.
- [ ] Confirm images have useful `alt` or `aria-hidden` when decorative.
- [ ] Keep card radii at 8px or less unless the mockup uses a pill control.
- [ ] Run `npm run build`.

### Task 8: Portfolio Registration, Documentation, And Browser Verification

**Owner:** orchestrator with worker support if needed  
**Files:**
- Modify: `script.js`
- Create: `day095/README.md`
- Create: `day095/docs/IMPLEMENTATION_SUMMARY.md`
- Modify: `lp100-progress/daily/day095.md` only after reading current contents if it exists.

- [ ] Register Day095 in root `script.js` with title, category, industry, focus, summary, metric, tech, and URL.
- [ ] Run `node --check script.js`.
- [ ] Run `npm run build` in `day095/`.
- [ ] Start local dev server with `npm run dev -- --port 8095`.
- [ ] Use Browser Use (`browser-client` with `iab`) to inspect:
  - desktop `http://127.0.0.1:8095/day095/`
  - mobile 390px width
  - at least three lower pages
- [ ] Capture screenshots to `day095/docs/qa/`.
- [ ] Fix any layout, console, or accessibility issue found during browser review.
- [ ] Create implementation summary with commands run and known limitations.

## Worker Rules

- Workers must use reasoning level `low`.
- Workers are not alone in the codebase. Do not revert or overwrite unrelated changes by the user or other workers.
- Workers must only edit the files assigned to their task unless the orchestrator expands the write scope.
- Workers must run the verification command listed in their task and report exact results.
- Workers must list changed file paths in their final response.
- Browser checks are done with Browser Use (`browser-client` + `iab`) by the orchestrator unless a worker is explicitly assigned a browser QA task.

## Self-Review

- Spec coverage: all user requirements map to tasks: React + Tailwind setup, pixel-faithful reconstruction, image-derived assets, transparent icons, rich animation, worker-per-TODO execution, Browser Use verification.
- Placeholder scan: no `TBD`, no undefined build commands, no open-ended "add tests later" steps.
- Scope control: the implementation is limited to `day095/`, root `script.js`, and Day095 progress/docs.
