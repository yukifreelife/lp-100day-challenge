# day100 TODO

## Status Legend

- `[ ]` Not started
- `[~]` In progress
- `[x]` Completed
- `[!]` Needs revision

## TODO List

1. `[x]` Preserve generated reference mockups inside `day100/mockups/`.
2. `[x]` Generate separate image assets with `/image-gen` based on the day100 mockup style.
3. `[x]` Convert chroma-key icon/cutout assets into transparent PNGs.
4. `[x]` Worker A: create React + Tailwind scaffold, design tokens, global CSS, and app routing shell.
5. `[x]` Worker B: create shared Japanese data and reusable layout/UI/map components.
6. `[x]` Worker C: implement the top page, service menu page, and before/after case sample page.
7. `[x]` Worker D: implement flow, pricing, contact, and FAQ pages.
8. `[x]` Orchestrator review: verify worker outputs against assigned scope and mockup constraints.
9. `[x]` Run dependency install/build checks.
10. `[x]` Use Browser Use visual QA and supplemental desktop interaction QA.
11. `[x]` Run focused improvement loops for fidelity, layout, asset, or interaction issues.
12. `[x]` Write `day100/docs/EVALUATION_REPORT.md`.

## Acceptance Checklist

- `[x]` No reference mockup is used as a full-page background.
- `[x]` Generated visual assets are separate files under `public/assets/generated/`.
- `[x]` Icons/cutouts used as images have transparent backgrounds.
- `[x]` Japanese UI copy is used throughout.
- `[x]` All specified hash routes exist and are reachable.
- `[x]` Contact form and FAQ interactions work.
- `[x]` `npm run build` passes.
- `[x]` Browser Use screenshots/checks are completed.
