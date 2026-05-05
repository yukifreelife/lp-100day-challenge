# day100 v2 TODO

## 1. Planning

- [x] Read v2 design source files and mockups.
- [x] Create `IMPLEMENTATION_PLAN_V2.md`.
- [x] Generate implementation assets from v2 mockups.

## 2. Assets

- [x] Generate `reception-flow-board` from the home/service mockup direction.
- [x] Generate `reception-file-box` from the service/contact mockup direction.
- [x] Generate `contact-desk-files` from the contact mockup direction.
- [x] Remove chroma-key backgrounds and validate alpha.
- [x] Save final assets under `public/assets/v2/`.
- [x] Add AVIF/WebP versions and structured asset data.

## 3. Worker A: Shell And Components

- [x] Replace global palette and base motifs with v2 tokens.
- [x] Update nav, header, footer, and route labels.
- [x] Update shared data in `siteData.js`.
- [x] Add v2 reusable components.
- [x] Run `npm run build`.

## 4. Worker B: Home, Service, Flow, Cases

- [x] Rebuild `Home.jsx` from `home-fullpage-reception-flow.png`.
- [x] Rebuild `Service.jsx` from `service-menu-reception-flow.png`.
- [x] Rebuild `Flow.jsx` from `flow-reception-route.png`.
- [x] Rebuild `Cases.jsx` from `cases-before-after-reception-flow.png`.
- [x] Run `npm run build`.

## 5. Worker C: Pricing, Contact, FAQ, SEO/Legal

- [x] Rebuild `Pricing.jsx` from `pricing-diagnostic-depth.png`.
- [x] Rebuild `Contact.jsx` from `contact-diagnostic-form.png`.
- [x] Rebuild `Faq.jsx` from `faq-reception-files.png`.
- [x] Keep legal/privacy routes publication-safe.
- [x] Update `index.html` and `public/ogp.svg` to v2 positioning.
- [x] Run `npm run build`.

## 6. Orchestrator QA

- [x] Review worker outputs and request fixes when needed.
- [x] Run final `npm run build`.
- [x] Use Browser Use to inspect all hash routes.
- [x] Use Browser Use to inspect the current narrow viewport home/contact/FAQ/form states.
- [x] Verify no mockup is used as a full-page background.
- [x] Verify generated assets load.
- [x] Verify contact form validation and completion.
- [x] Update redesign report and daily log.
