# Redesign Plan v2

## Why This Redesign Exists

The current site is visually coherent, but the target is too broad. `個人事業主・個人サービス展開者` alone makes the copy feel safe and generic. The redesign narrows the primary target to a concrete buyer:

> A reservation-based solo service owner who already gets inquiries, but whose LINE replies, menu explanation, booking confirmation, day-of guidance, cancellation rules, and continuation offer are scattered.

## New Persona

Source: `day100/design/persona-v2.md`

- Primary persona: 佐伯まどか, 39歳, 横浜近郊, one-person salon/class owner
- Already has bookings and repeat customers
- Does not need generic growth advice first
- Needs the reception flow before and after booking to become visible and usable
- Is anxious about being judged, pushed into aggressive sales, or losing the warmth of her service

## New Tone

Source: `day100/design/tone-and-manner.md`

Core message:

> 予約が入る前後のごちゃごちゃを、ひとりでも回る受付導線へ。

Visual concept:

> 受付導線のカルテ棚

The design should feel like a practical reception desk for a one-person service: file tabs, LINE reply slips, booking calendar, menu cards, day-of guidance, continuation note, and route lines.

## Mockups Generated

Source directory: `day100/mockups/v2/`

- `home-fullpage-reception-flow.png`
- `pages/service-menu-reception-flow.png`
- `pages/flow-reception-route.png`
- `pages/cases-before-after-reception-flow.png`
- `pages/pricing-diagnostic-depth.png`
- `pages/contact-diagnostic-form.png`
- `pages/faq-reception-files.png`

## Next Reconstruction Rules

1. Start implementation from `DESIGN.md`, `persona-v2.md`, `tone-and-manner.md`, and `mockups/v2/README.md`.
2. Keep the old React implementation as a structural reference only.
3. Replace abstract copy with concrete booking-flow copy.
4. Do not create fake testimonials, client names, review stars, or unsupported results.
5. Extract or regenerate reusable assets from the v2 mockups before coding.
6. Keep mockups as references only; never use a full mockup as a page background.
7. Re-run Browser Use checks on desktop and mobile after reconstruction.
