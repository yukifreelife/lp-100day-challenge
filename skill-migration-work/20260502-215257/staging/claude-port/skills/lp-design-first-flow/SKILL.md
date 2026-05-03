---
name: lp-design-first-flow
description: Use when the user wants an LP workflow that starts with collaborative direction setting, tone and palette design, UI mockup or image generation, asset extraction, React/Tailwind implementation, browser evaluation, improvement loops, and day-completion logging for lp-100 work.
---

# LP Design First Flow

## Overview

Use this skill to run LP production as a design-first loop: decide the concept, generate reusable mockups/assets, rebuild the UI in code, evaluate it in the browser, improve it, then record completion.

This complements `lp-automation-v2`; use that skill for repository rules and daily LP structure whenever the work is inside `/Users/yuuki/Works/lp-100`.

## Workflow

1. Establish direction before production.
   - If the user is still exploring, propose 3-5 distinct LP directions and ask for a choice.
   - Once a direction is chosen, confirm target audience, service category, trust level, warmth, Japanese copy tone, and what should feel new compared with prior LPs.
   - If the user says not to use skills yet, stay in discussion mode and do not trigger generation or implementation tools.

2. Define tone and visual rules.
   - Produce a compact design brief with brand premise, user image, palette roles with hex values, typography feel, spacing density, photography/icon style, CTA style, proof elements, and section rhythm.
   - Prefer a white base when requested; add trust colors and friendly accents without making the page stiff.
   - Save reusable decisions under `dayXXX/design/` when a day directory is known.

3. Generate mockups and reusable assets.
   - Use the available image-generation workflow when the user asks for UI images, photos, icons, or image-to-image asset extraction.
   - Generate a primary LP mockup first, then infer likely secondary pages and ask for confirmation unless the user already approved broad page generation.
   - Save generated full-page mockups separately from partial assets. Use stable names under `dayXXX/mockups/`, `dayXXX/mockups/pages/`, `dayXXX/assets/`, and `dayXXX/public/assets/`.
   - For icons, cutouts, and UI parts, generate or export transparent-background files when they will be used in code.

4. Plan implementation from the mockups.
   - Create `dayXXX/docs/IMPLEMENTATION_PLAN.md` and `dayXXX/docs/TODO.md` for substantial builds.
   - If the user explicitly asks for orchestration with workers, split TODOs by disjoint ownership and review each worker output before integrating. Otherwise keep implementation local.
   - Match the requested stack. For React + Tailwind, preserve the mockup hierarchy, copy, spacing, colors, imagery, and interaction states.

5. Rebuild in code.
   - Inspect all generated mockups and assets before coding.
   - Use saved assets instead of inventing replacements. Keep icons as SVG or transparent images where possible.
   - Add restrained, purpose-driven animation: entrance transitions, CTA feedback, scroll reveals, tab/accordion motion, counters, or sticky navigation. Avoid animation that obscures content or hurts readability.
   - Implement responsive states deliberately; check desktop and mobile layouts, not just the first viewport.

6. Evaluate in the browser.
   - Start the dev server when required and use the available browser automation tool for visual checks, screenshots, navigation, and viewport testing.
   - Evaluate UI/UX, visual design fidelity, copy and CTA clarity, CRO, brand consistency, accessibility basics, performance basics, and broken assets/routes.
   - Write findings and scores to `dayXXX/docs/EVALUATION_REPORT.md`.

7. Run improvement loops.
   - Use `auto-improve` when the user asks for improvement or evaluation shows material gaps.
   - Iterate as: inspect screenshot/result, make focused fixes, rebuild, recheck in the browser, update `dayXXX/docs/IMPROVEMENT_REPORT.md`.
   - Continue until the remaining issues are minor or blocked by explicit constraints.

8. Complete the day.
   - Create a work summary with tasks and estimated time under `dayXXX/docs/`, following prior day conventions.
   - Update `lp100-progress/daily/dayXXX.md` carefully and set `Status` to `Completed` only after verification.
   - Register the day in root portfolio files such as `script.js` when the project uses them, then run the relevant syntax/build checks.
   - Commit, push, or deploy only when the user asks.

## Output Conventions

Use these paths when the target day is known:

| Purpose | Path |
|---|---|
| Tone, palette, prompts | `dayXXX/design/` |
| Full-page mockups | `dayXXX/mockups/` and `dayXXX/mockups/pages/` |
| Source assets | `dayXXX/assets/` |
| Runtime assets | `dayXXX/public/assets/` |
| Optimized assets | `dayXXX/public-optimized/` |
| Plans and reports | `dayXXX/docs/` |
| Browser screenshots | `dayXXX/qa-screenshots/` |

## Guardrails

- Do not skip the direction and tone phase when the user is still deciding.
- Do not rely on one flattened mockup image for implementation; extract or generate reusable partial assets.
- Do not use English UI copy for Japanese-market LPs unless the user asks.
- Do not overwrite protected lp-100 logs or client-role files without reading them first.
- Do not spawn subagents unless the user explicitly asks for delegation.
- Do not leave a dev server running if it is no longer needed for the task.
