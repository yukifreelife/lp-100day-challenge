# Canonical Skill Source

This directory is a neutral source snapshot for user-created skills.

It is intentionally separate from active runtime locations:

- Codex active user skills: `/Users/yuuki/.agents/skills`
- ClaudeCode active personal skills: `/Users/yuuki/.claude/skills`
- Codex legacy rollback copy: `/Users/yuuki/.codex/skills`

Do not edit plugin cache directories by hand.

## Layout

- `skills/common/<skill>/` contains skills whose `SKILL.md` is identical for Codex and ClaudeCode.
- `skills/variants/<skill>/codex/` and `skills/variants/<skill>/claude/` contain agent-specific versions.
- `skills/codex-only/<skill>/` contains skills intentionally deployed only to Codex.
- `skills/claude-only/<skill>/` contains skills intentionally deployed only to ClaudeCode.

## Deployment Rule

Treat this directory as a reviewable source snapshot, not an automatic runtime location.
Deploy to active roots only through reviewed sync scripts and dry-run reports.

Current intentional difference:

- Figma personal skills are Codex-only because ClaudeCode has plugin-managed Figma skills.
