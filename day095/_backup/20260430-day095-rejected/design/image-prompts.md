# MiraSkill AI Image / Asset Direction

The imagegen workflow was restored for this improvement pass. The Image API call was attempted with the prompts below, but the API returned `billing_hard_limit_reached`, so the page was improved with richer local SVG assets while preserving the API-ready prompt direction.

## Assets

- `public-optimized/assets/hero-learning-lab-rich.svg`
  - Wide hero scene with a working adult, AI dashboard, roadmap cards, tactile study materials, and coworking lab atmosphere.
- `public-optimized/assets/diagnosis-dashboard-rich.svg`
  - Polished diagnosis dashboard with readiness score, skill map, mentor comment, and 12-week roadmap chips.
- `public-optimized/assets/course-path-cards-rich.svg`
  - Tactile course-path cards for Work Booster, Career Builder, and Side Project.
- `public-optimized/assets/learner-story-rich.svg`
  - Mentor and learner story scene for the results section.
- `mockups/miraskill-ai-ui-mockup.svg`
  - Full landing page mockup showing the first viewport and major section rhythm.

The original simpler SVGs remain as fallback/reference assets.

## Prompt Baseline

Use case: ui-mockup.
Asset type: Japanese landing page for working adults learning practical AI skills.
Palette: white, ink, practical green, warm amber, restrained cyan.
Mood: professional, calm, useful, work-focused.
Constraints: no stock-photo vibe, no watermark, no dominant purple/blue gradient, no fake corporate logos.

## API Prompt Set Attempted

1. Photorealistic-natural hero visual: Japanese working adult in a modern coworking study lab, laptop AI diagnosis dashboard, floating roadmap cards, white/green/amber/cyan palette, negative space for headline.
2. UI-mockup diagnosis asset: readiness score, recommended track, weekly plan, skill map, mentor comment panel, subtle depth, no neon sci-fi look.
3. Stylized-concept course path asset: tactile desk flat-lay with three practical AI learning path cards, paper-cut / soft-render style.
4. Photorealistic-natural learner story asset: mentor and learner reviewing AI-assisted work outputs in a warm office learning booth.

Result: Image API returned `billing_hard_limit_reached`; no API image files were produced.
