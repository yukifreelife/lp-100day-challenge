# Day095 StockOps Atelier

## Overview

StockOps Atelier is a fictional Japanese multi-page landing site for small EC operators who need daily visibility into inventory, pricing, SKU ledgers, and sales-channel synchronization.

## Tech

- React
- Tailwind CSS
- Vite

## Main Routes

- `#home` - Landing page
- `#diagnosis` - Free inventory diagnosis
- `#demo` - Product demo
- `#pricing` - Pricing
- `#contact` - Contact
- `#features` - Feature details
- `#channels` - Sales-channel cards
- `#cases` - Case studies
- `#security` - Security and data management
- `#help` - Help center
- `#faq` - FAQ accordion
- `#news` - News
- `#column` - Operations columns
- `#legal` - Legal and policy

## Assets

Generated references and reusable assets are preserved under `assets/generated/`.
App-consumed optimized assets are placed under `public-optimized/assets/`.

Key references:

- `assets/generated/stockops-full-lp-ui.png`
- `assets/generated/stockops-hero-dashboard.png`
- `assets/generated/pages/page-*.png`
- `assets/generated/icons-transparent/`
- `design/asset-manifest.md`

## Commands

```bash
npm install
npm run dev -- --port 8095
npm run build
```

Local URL:

```text
http://127.0.0.1:8095/
```
