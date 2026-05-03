---
name: lp-automation-v2
description: Use when the user asks to create or continue a landing page / LP, says "LPを作成", "次のLPを開始", "今日のLP", "/lp-create", or wants Codex to follow the established lp-100 LP workflow that was previously done in ClaudeCode.
metadata:
  short-description: Create lp-100 LPs with the established workflow
---

# LP Automation V2

Use this skill for LP work in `/Users/yuuki/Works/lp-100`.

## Required setup

1. Read `/Users/yuuki/Works/lp-100/AGENTS.md` before editing to respect protected paths.
2. Read `/Users/yuuki/Works/lp-100/CLAUDE.md` for repo-specific structure and phase rules.
3. Inspect the target `dayXXX` directory before editing. Do not overwrite existing clientwork structure blindly.

## Default workflow

1. Confirm or infer the LP's theme, category, brand, target, and special constraints.
2. If the category is known or inferable, also use `lp-category-settings` and read only the matching category reference.
3. Decide the visual direction first: palette, typography, section order, CTA strategy, proof elements, and image needs.
4. Implement the LP with mobile-first HTML/CSS/JS. Avoid generic template output.
5. Apply the low-risk v2 enhancements when relevant:
   - analytics: add a GA4 placeholder only when a real measurement ID is not provided
   - legal: add legal pages only for commercial/client LPs or when the user asks
   - performance: prefer image dimensions, loading attributes, preload/preconnect where justified, and deferred scripts
6. Run a self-review across these five lenses before finishing:
   - UI/UX
   - visual design
   - copy and CTA
   - CRO
   - branding
7. Verify responsive behavior and summarize any remaining gaps or placeholders.

## Codex-specific rules

- Do not spawn subagents unless the user explicitly asks for delegation.
- Do not auto-open the browser or run GUI commands without approval.
- Do not assume network downloads are available. If assets are missing, either continue with local assets/placeholders or ask before fetching.
- Do not auto-commit, push, or deploy unless the user asks.

## References

- Original ClaudeCode skill: `/Users/yuuki/.claude/skills/lp-automation-v2/SKILL.md`
- Implementation checklist: `/Users/yuuki/.claude/skills/lp-automation-v2/CHECKLIST.md`
- Code examples: `/Users/yuuki/.claude/skills/lp-automation-v2/CODE_EXAMPLES.md`

Use the original ClaudeCode files as deep references when you need the detailed analytics, legal, or performance examples; otherwise keep this workflow lightweight.
