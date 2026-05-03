---
name: lp-category-settings
description: Use when an lp-100 LP request includes an industry or category such as 飲食店, 医療, B2B/SaaS, 不動産, 教育, 採用, or subcategories like カフェ, 歯科医院, SaaS, 採用ページ. Helps choose palette, typography, sections, proof elements, copy patterns, and image directions.
metadata:
  short-description: Industry-specific LP direction for lp-100
---

# LP Category Settings

Use this skill before coding when the LP category is known or can be inferred.

## Category map

- 飲食店: `/Users/yuuki/.claude/skills/lp-category-settings/settings/restaurant.yaml`
- 医療: `/Users/yuuki/.claude/skills/lp-category-settings/settings/medical.yaml`
- B2B/SaaS: `/Users/yuuki/.claude/skills/lp-category-settings/settings/b2b.yaml`
- 不動産: `/Users/yuuki/.claude/skills/lp-category-settings/settings/real-estate.yaml`
- 教育: `/Users/yuuki/.claude/skills/lp-category-settings/settings/education.yaml`
- 採用: `/Users/yuuki/.claude/skills/lp-category-settings/settings/recruitment.yaml`

## How to use it

1. Map the request to one main category and, if possible, one subcategory.
2. Read only the matching YAML file.
3. Pull out the palette, font pairings, section order, trust elements, CTA tone, and image keywords.
4. If you are writing copy, also read `/Users/yuuki/.claude/skills/lp-category-settings/templates/copy-patterns.md`.
5. If you need section markup ideas, read `/Users/yuuki/.claude/skills/lp-category-settings/templates/sections.html`.
6. Treat these settings as a baseline, not a rigid template. Adjust for the user's actual brand and constraints.

## Guardrails

- Keep contrast and readability high even if the reference palette is subtle.
- Preserve distinctive art direction; do not output an interchangeable template.
- When the category and brand conflict, prioritize the brand while preserving the category's trust signals.

## Reference

- Original ClaudeCode overview: `/Users/yuuki/.claude/skills/lp-category-settings/skill.md`
