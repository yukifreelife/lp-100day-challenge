# NemuNote Day093 TODO

- [x] Review `public/assets/nemunote-v2/README.md` and confirm the current curated asset inventory.
- [x] Use `public/assets/nemunote-v2/sources/lp-reference.png` as the full-page visual reference.
- [x] Use `public/assets/nemunote-v2/references/` as the per-section visual reference set.
- [x] Prioritize implementation assets from `public/assets/nemunote-v2/curated/`.
- [x] Define/verify React + Tailwind CSS component structure for the NemuNote v2 LP.
- [x] Rebuild the hero section with DOM/Tailwind layout and curated phone/decorative assets.
- [x] Rebuild feature cards with DOM/Tailwind text, cards, icons, and spacing.
- [x] Rebuild report and sleep-score areas with DOM/Tailwind panels, charts, and curated phone screenshots where needed.
- [x] Rebuild pricing, guide, privacy, support, download, and FAQ sections as DOM/Tailwind sections.
- [x] Limit image usage to smartphone screens, photos, store badges, QR codes, and decorative PNGs that cannot be fully reproduced in code.
- [x] Confirm full section images from `references/` and `sources/lp-reference.png` are not rendered in the LP source.
- [x] Run the React build/check command available in `day093/`.
- [x] Use Browser Use to check the desktop layout against the NemuNote v2 references.
- [x] Use Browser Use to check the narrow in-app layout against the NemuNote v2 references.
- [x] Use Browser Use to verify header navigation, scrolling, and FAQ interaction.
- [x] Iterate visual fixes until the page closely matches the NemuNote v2 references without relying on pasted section screenshots.

## Current Improvement TODO

- [x] Adjust the pricing section so medium and desktop widths keep the mockup-like 3-column plan layout instead of collapsing to 1 column too early.
- [x] Realign the sleep report smartphone image and metric/card cluster so their desktop and mobile composition matches the mockup more closely.
- [x] Audit and update feature card copy to match the mockup wording.
- [x] Audit and update pricing section copy, CTA labels, and plan descriptions to match the mockup wording.
- [x] Audit and update download section copy, App Store / Google Play CTA labels, and QR-adjacent text to match the mockup wording.
- [x] Audit and update privacy section copy and trust/security phrasing to match the mockup wording.
- [x] Tune App Store / Google Play badge display sizes, aspect ratios, and source handling so they render crisply rather than appearing rough or oversized.
- [x] Tune QR code display size and asset handling so it remains sharp and balanced with the download CTA area.
- [x] Improve the hero device image treatment so it blends naturally with the hero background instead of reading as a hard rectangle.
- [x] Confirm the fix continues to avoid full-section reference images; use DOM/Tailwind layout plus curated reusable assets only.
- [x] Run the available `day093/` build/check command after implementation changes.
- [x] Use Browser Use to inspect the updated desktop layout, focusing on pricing, report composition, hero device blending, badges/QR, and copy matching.
- [x] Use Browser Use to inspect the updated mobile/narrow layout for the same focus areas.

Acceptance note: `npm run build` passed; `src` and `index.html` do not render `references/`, `sources/lp-reference.png`, or `extracted/sections`; Browser checks confirmed Report horizontal composition and Pricing 3-column layout at 947x860, plus header navigation and Hero headline/body/CTA/device fitting within the 390x844 viewport.
