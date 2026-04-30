# Day095 Implementation Plan

## Goal

Build a Vite + React + Tailwind CSS landing page for the fictional Japanese AI reskilling service `MiraSkill AI`.

## Requirements

- Target working adults who want practical AI skills for work, career change, or side work.
- Use a free AI aptitude diagnosis as the primary conversion.
- Keep the design white-based and business-focused, with ink, green, amber, and restrained cyan.
- Use local SVG visual assets instead of external image API generation.
- Include SEO, OGP, JSON-LD, CSP, responsive behavior, accessible form labels, FAQ `aria-expanded`, and image dimensions.

## Implementation

- Create `day095/` as a Vite React app using the same dependency pattern as recent React days.
- Build sections: Hero, Problem, Diagnosis, Roadmap, Courses, Results, FAQ, Final CTA, Footer.
- Implement the diagnosis result as a frontend-only interactive demo.
- Add local generated-style SVG assets under `public-optimized/assets/` and a full-page mockup under `mockups/`.
- Register Day095 in the root portfolio data after build verification.

## Completion

- Run `npm run build`.
- Run syntax check for root `script.js`.
- Start local dev server and inspect desktop/mobile.
- Record evaluation, improvement notes, work summary, and daily progress.
