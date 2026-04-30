# StockOps Atelier Generated Asset Manifest

## Purpose

Generated visual references and reusable raster assets for rebuilding the fictional Japanese landing page "StockOps Atelier" in code.

## Main Images

- `day095/assets/generated/stockops-full-lp-ui.png`
  - Full landing page design reference.
  - Use as the primary layout and art-direction reference.
- `day095/assets/generated/stockops-full-lp-ui.webp`
  - Optimized preview version of the full LP reference.
- `day095/assets/generated/stockops-hero-dashboard.png`
  - Reusable dashboard visual for the hero area.
  - Best source for rebuilding the dashboard as HTML/CSS components.
- `day095/assets/generated/stockops-hero-dashboard.webp`
  - Optimized dashboard preview.
- `day095/assets/generated/stockops-asset-sheet.png`
  - Source sheet for reusable icons, badges, labels, cards, and logistics stickers.
- `day095/assets/generated/stockops-asset-sheet.webp`
  - Optimized asset sheet preview.
- `day095/assets/generated/stockops-crop-contact-sheet.png`
  - Quick visual index of the cropped assets.
- `day095/assets/generated/stockops-crop-contact-sheet.webp`
  - Optimized contact sheet preview.

## Cropped Assets

All cropped assets are saved under:

`day095/assets/generated/crops/`

Asset groups:

- `icon-*.png`: inventory, barcode, price tag, sync, alert, SKU ledger, chart, mail, check, settings.
- `badge-*.png`: normal, low stock, shortage forecast, price up, price down.
- `label-*.png`, `tag-*.png`, `stamp-*.png`: compact UI labels and logistics-style stamps.
- `kpi-card-*.png`, `feature-card-*.png`: reusable card references.
- `shipping-label-*.png`, `tape-*.png`, `round-stamp-*.png`: decorative logistics assets.
- `dashboard-*.png`: dashboard sections cropped from the hero dashboard.
- `section-*.png`: full LP section references cropped from the generated landing page.

## Lower Page Mockups

Lower page references are saved under:

`day095/assets/generated/pages/`

Each page has a PNG source and a WebP preview.

- `page-free-diagnosis.png`
  - Free inventory diagnostic page.
- `page-free-diagnosis-alt.png`
  - Alternate free diagnostic layout.
- `page-demo.png`
  - Product demo screen page.
- `page-pricing.png`
  - Pricing page.
- `page-contact.png`
  - Contact and consultation form page.
- `page-features.png`
  - Feature details page.
- `page-channels.png`
  - Supported sales channels page.
- `page-case-studies.png`
  - Fictional case studies page.
- `page-security.png`
  - Security and data management page.
- `page-help-center.png`
  - Help center page.
- `page-faq.png`
  - FAQ page.
- `page-news.png`
  - News and release updates page.
- `page-column.png`
  - EC operations note / column page.
- `page-legal-policy.png`
  - Legal and policy page template for terms, privacy policy, and transaction-law disclosure.
- `stockops-pages-contact-sheet.png`
  - Visual index of all lower page mockups.

## Supplemental Component Assets

Additional missing partial assets were generated after reviewing the full page and lower page mockups.

Supplemental source sheets are saved under:

`day095/assets/generated/supplemental/`

Each source sheet has a PNG source and a WebP preview.

- `stockops-supplemental-ui-components.png`
  - Diagnostic form widgets, pricing cards, contact/support flow, FAQ rows, news rows, article card, legal side navigation, CTA bar.
- `stockops-channel-integration-assets.png`
  - Generic channel cards, integration methods, StockOps hub card, connector arrows, compatibility table, request CTA, memo card.
- `stockops-case-study-photo-thumbnails.png`
  - Reusable photo-style thumbnails for case studies: apparel, food D2C, lifestyle goods, cosmetics, stationery, shipping desk.
- `stockops-security-help-assets.png`
  - Security/data flow diagram, permission matrix, audit/security cards, help center cards, FAQ/status/news/release components.
- `stockops-supplemental-crop-contact-sheet.png`
  - Visual index of all supplemental cropped assets.

Supplemental crops are saved under:

`day095/assets/generated/supplemental/crops/`

Asset groups:

- `supplemental-*.png`: form, pricing, support flow, FAQ, news, article, legal, helper parts, bottom CTA.
- `channel-*.png`, `integration-*.png`: sales channel and integration components.
- `photo-case-*.png`: reusable case study photo thumbnails.
- `security-*.png`: security and data-management components.
- `help-*.png`, `faq-*.png`, `status-*.png`, `documentation-*.png`: support, FAQ, news/status, and documentation components.

## Transparent Icon Assets

The original generated icon crops had paper backgrounds. For implementation, a new icon sheet was generated from the existing asset sheet as a style reference on a chroma-key background, then locally processed into transparency.

- `day095/assets/generated/transparent-icon-sheet-source.png`
  - Chroma-key source generated from the visual style of `stockops-asset-sheet.png`.
- `day095/assets/generated/transparent-icon-sheet.png`
  - Transparent icon sheet after chroma-key removal.
- `day095/assets/generated/icons-transparent/`
  - Individually cropped transparent PNG icons for implementation.
- `day095/assets/generated/icons-transparent/contact-sheet.png`
  - Visual index of the transparent icon crops.

## Palette

- Ledger White: `#F7F5EF`
- Ink Black: `#171A1C`
- Warehouse Teal: `#0D5C63`
- Steel Blue: `#3F6473`
- Copper Alert: `#C96F32`
- Inventory Mint: `#69B99D`
- Label Amber: `#E2B84B`
- Grid Gray: `#D8D2C4`
- Slip Gray: `#747C7D`

## Implementation Notes

- Treat generated Japanese text as visual reference, not final production copy.
- Rebuild primary headings, buttons, nav, FAQ, and dashboard table text as live HTML for accessibility and editability.
- Prefer SVG or icon font replacements for small icons when implementing, using the cropped icons as visual direction.
- Use the generated dashboard image as a fallback hero asset if a component rebuild takes longer.
- Keep the paper grain, ruled grid, logistics label, and teal/copper status language as the core art direction.
