# day098 TODO

## Phase 1: Planning

- [x] Read tone and palette.
- [x] Inspect reference mockups.
- [x] Decide DOM/CSS vs image asset strategy.
- [x] Create implementation plan.

## Phase 2: Scaffold and Assets

- [x] Create React + Tailwind + Vite project files.
- [x] Copy reference mockups into `public/assets/mockups/` for QA-only reference.
- [x] Extract reusable transparent PNG cat, thumbnail, gallery, featured, relationship, and wallpaper assets.
- [x] Extract page-hero and profile-detail PNG assets from secondary mockups.
- [x] Keep reusable SVG/CSS icon components for paws, eyes, play marks, and whiskers.

## Phase 3: LP Implementation

- [x] Implement header and hero.
- [x] Implement character profile section.
- [x] Add character page hero and detailed `好きなこと / 性格 / チャームポイント` blocks.
- [x] Add relationship cards from the character-profile mockup.
- [x] Implement video card section.
- [x] Add video page hero from the video-list mockup.
- [x] Add featured video, category chips, and six-card video library from the video-list mockup.
- [x] Implement gallery section.
- [x] Add gallery page hero from the gallery mockup.
- [x] Add best-shot panel, category chips, gallery-detail grid, and wallpaper cards from the gallery mockup.
- [x] Add section-specific CTA panels after character, video, and gallery content.
- [x] Implement final CTA and footer.
- [x] Add responsive behavior for 1440px and 390px.
- [x] Add restrained hover/entrance motion with reduced-motion support.

## Phase 4: Verification

- [x] Run production build.
- [x] Start local dev server.
- [x] Check desktop viewport.
- [x] Check mobile viewport.
- [x] Verify CTA targets, image/illustration rendering, responsive layout, and text overlap.
- [x] Save QA screenshots.
- [x] Verify all `/assets/` references exist.
- [x] Verify representative extracted assets are RGBA with transparent rounded corners.
- [x] Write evaluation report.
- [x] Run auto-improve evaluation and document improvement report.
- [x] Add SEO, accessibility, and interactive filter improvements.

## Phase 5: Priority Improvements

- [x] Add local-safe GA4 placeholder queue and page view event.
- [x] Track CTA clicks, video card clicks, filter selections, and scroll depth.
- [x] Add shared image component with lazy/eager loading, decoding, dimensions, and fallback handling.
- [x] Make the hero image eager with high fetch priority.
- [x] Remove duplicated page-intro `h2` structure while preserving the visual title.
- [x] Add skip link and mobile hamburger navigation with `aria-expanded`.
- [x] Add fictional LP note to the footer.
- [x] Run production build and static asset checks after priority improvements.

## Phase 6: Image Publishing Readiness

- [x] Generate WebP and AVIF derivatives for display PNG assets.
- [x] Add `picture` / `source srcSet` support to the shared optimized image component.
- [x] Preload the hero AVIF image.
- [x] Create a dedicated `1200x630` OGP image.
- [x] Update OGP / Twitter image metadata to use the dedicated OGP asset.
- [x] Keep the image generation script in `scripts/` for repeatable optimization.

## Phase 7: Final QA and App Icons

- [x] Add favicon, 192px app icon, 512px app icon, and apple-touch-icon.
- [x] Add `robots.txt` for valid crawler handling.
- [x] Fix Lighthouse contrast and visible-label/accessibility issues.
- [x] Run Browser Use QA on the in-app browser.
- [x] Capture final top and mobile menu screenshots.
- [x] Run Lighthouse against production preview.
