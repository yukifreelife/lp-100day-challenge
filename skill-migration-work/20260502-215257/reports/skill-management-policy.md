# Skill Management Policy

## Current Active Locations

- Codex user skills: `/Users/yuuki/.agents/skills`
- ClaudeCode personal skills: `/Users/yuuki/.claude/skills`
- Legacy Codex skill copy: `/Users/yuuki/.codex/skills`
- Canonical reviewable source snapshot: `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/canonical-skill-source`

## Managed Separately

Do not edit plugin cache directories by hand:

- `/Users/yuuki/.codex/plugins/cache`
- `/Users/yuuki/.claude/plugins/cache`

Plugin cache contents should be treated as app-managed and replaceable by plugin install/update flows.

## Operating Rules

1. Use `SKILL.md` as the normalized skill entrypoint for user-created skills.
2. Keep Codex and ClaudeCode active skill directories separate.
3. Do not use plugin cache directories as a source of truth for personal skills.
4. Do not delete `/Users/yuuki/.codex/skills` until Codex recognition from `/Users/yuuki/.agents/skills` has been confirmed across restarts and normal work.
5. Keep `/Users/yuuki/.agents.disabled-20260502-215257` as a rollback archive until the migration has been stable for several sessions.
6. Use the canonical source snapshot for reviewed edits before deployment:
   - `/Users/yuuki/.agents/skills`
   - `/Users/yuuki/.claude/skills`

## Current Decision

The immediate safe state is:

- `/Users/yuuki/.agents/skills` is restored as the Codex user skill target.
- Existing `/Users/yuuki/.codex/skills` remains as a legacy copy for rollback.
- ClaudeCode continues to use `/Users/yuuki/.claude/skills`.
- A neutral canonical source snapshot exists under the migration workbench.
- No plugin-derived skills are copied, edited, or promoted into the personal skill set unless explicitly reviewed.

## Canonical Source Deployment

Canonical source layout:

- `skills/common/<skill>/`
- `skills/variants/<skill>/codex/`
- `skills/variants/<skill>/claude/`
- `skills/codex-only/<skill>/`
- `skills/claude-only/<skill>/`

Deployment script:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts/deploy_canonical_skill_source.py`

Always run dry-run first:

```bash
python3 /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts/deploy_canonical_skill_source.py --target codex
python3 /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts/deploy_canonical_skill_source.py --target claude
```

Apply only after reviewing the generated reports.

## Next Cleanup Gate

Only after another restart and one normal Codex workflow confirms `/Users/yuuki/.agents/skills` works as expected:

1. Compare `/Users/yuuki/.agents/skills` and `/Users/yuuki/.codex/skills`.
2. Archive `/Users/yuuki/.codex/skills` instead of deleting it directly.
3. Keep app-managed plugin caches untouched.
