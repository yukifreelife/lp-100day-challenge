# Handoff: Skill Directory and File Organization

Date: 2026-05-03

This handoff covers the latter part of the session: directory/file organization for user-created skills across Codex and ClaudeCode.

## Scope

Covered:

- Codex user skill location recovery and verification.
- ClaudeCode personal skill normalization and porting.
- Plugin-cache separation policy.
- Canonical skill source snapshot creation.
- Safe dry-run deployment scripts and reports.

Not covered:

- The earlier `day097` LP implementation work.
- Any cleanup or deletion of legacy skill directories.
- Any modification of plugin-managed skill caches.

## Current Active Skill Locations

- Codex active user skills: `/Users/yuuki/.agents/skills`
- ClaudeCode active personal skills: `/Users/yuuki/.claude/skills`
- Legacy Codex rollback copy: `/Users/yuuki/.codex/skills`
- Canonical reviewable source snapshot: `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/canonical-skill-source`

Plugin-managed directories must remain app-managed and should not be edited by hand:

- `/Users/yuuki/.codex/plugins/cache`
- `/Users/yuuki/.claude/plugins/cache`

## Important Decisions Already Made

1. Do not use plugin cache directories as a source of truth.
2. Do not use `/Users/yuuki/.agents` as a cross-agent shared source.
3. Do use `/Users/yuuki/.agents/skills` as the Codex active user skill target.
4. Do use `/Users/yuuki/.claude/skills` as the ClaudeCode active personal skill target.
5. Keep `/Users/yuuki/.codex/skills` for now as a legacy rollback copy.
6. Keep `/Users/yuuki/.agents.disabled-20260502-215257` for rollback until the setup is stable across several sessions.
7. Treat the canonical source snapshot as the reviewable source for future edits, then deploy to runtime roots with scripts and dry-run reports.

## Work Completed

### Codex

- Created/restored `/Users/yuuki/.agents/skills`.
- Synced 23 user skills from `/Users/yuuki/.codex/skills` into `/Users/yuuki/.agents/skills`.
- Excluded hidden/system/runtime-only directories such as `.system` and `codex-primary-runtime`.
- Excluded backup-like skill directories such as `lp-automation-v2.backup`.
- Confirmed after Codex restart that `/Users/yuuki/.agents/skills` is a skill root in the current session.

Reference:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/codex-restart-recognition-check.md`
- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/agents-sync-report.md`

### ClaudeCode

- Converted and added these ClaudeCode personal skills:
  - `/Users/yuuki/.claude/skills/lp-automation/SKILL.md`
  - `/Users/yuuki/.claude/skills/lp-design-first-flow/SKILL.md`
  - `/Users/yuuki/.claude/skills/pdf/SKILL.md`
- Did not copy `figma` or `figma-implement-design` into `/Users/yuuki/.claude/skills`.
  - Reason: ClaudeCode already has plugin-managed Figma skills under `/Users/yuuki/.claude/plugins/cache/claude-plugins-official/figma/2.0.7`.
- Fixed ClaudeCode YAML parsing for `/Users/yuuki/.claude/skills/lp-automation-v2/SKILL.md`.
  - Previous file archived at `/Users/yuuki/.claude/skill-archives/20260502-215257/yaml-fix/lp-automation-v2/SKILL.before-yaml-fix.md`.

Reference:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/claude-port-final-status.md`
- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/claude-recognition-check.md`
- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/claude-missing-skill-review.md`

## Canonical Source Snapshot

Created:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/canonical-skill-source`

Layout:

- `skills/common/<skill>/`
- `skills/variants/<skill>/codex/`
- `skills/variants/<skill>/claude/`
- `skills/codex-only/<skill>/`
- `skills/claude-only/<skill>/`

Classification counts:

- `common`: 8
- `variant`: 13
- `codex-only`: 2

Intentional Codex-only skills:

- `figma`
- `figma-implement-design`

Reason: ClaudeCode has plugin-managed Figma equivalents.

Reference:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/canonical-skill-source/README.md`
- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/canonical-skill-source/manifest.json`
- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/canonical-skill-source-build.md`
- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/skill-root-comparison.md`

## Verification Status

Latest live validation:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/live-validation.md`
- Result: `No live validation issues found.`

Canonical deployment dry-runs:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/deploy-canonical-to-codex-dry-run.md`
- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/deploy-canonical-to-claude-dry-run.md`
- Result: all active skills are `up to date`.

ClaudeCode recognition:

- Claude binary: `/Users/yuuki/.local/bin/claude`
- ClaudeCode version observed: `2.1.92 (Claude Code)`
- Debug log showed ClaudeCode loading `/Users/yuuki/.claude/skills`.
- Debug log showed `21` user skills and `99` plugin skills.
- API response verification did not complete due to connection errors, but local skill discovery was verified.

## Scripts Added

All scripts are under:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts`

Important scripts:

- `sync_codex_skills_to_agents.py`
  - One-time sync from legacy Codex copy into `/Users/yuuki/.agents/skills`.
- `sync_user_skills.py`
  - Dry-run-first sync checker between active roots.
- `apply_claude_port.py`
  - Applied converted ClaudeCode personal skills.
- `fix_claude_lp_automation_v2_yaml.py`
  - Fixed ClaudeCode YAML parsing for `lp-automation-v2`.
- `compare_skill_roots.py`
  - Compares `SKILL.md` hashes across Codex user, Codex legacy, and ClaudeCode roots.
- `build_canonical_skill_source.py`
  - Builds the canonical source snapshot from current active roots.
- `deploy_canonical_skill_source.py`
  - Dry-run/apply deployment from canonical source to Codex or ClaudeCode active root.

## Safe Commands To Re-run

Run validation:

```bash
python3 /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts/skill_migration_tools.py validate-live
cat /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/live-validation.md
```

Compare roots:

```bash
python3 /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts/compare_skill_roots.py
cat /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/skill-root-comparison.md
```

Dry-run canonical deployment:

```bash
python3 /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts/deploy_canonical_skill_source.py --target codex
python3 /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts/deploy_canonical_skill_source.py --target claude
```

Do not run `--apply` or `--overwrite` until the generated dry-run reports are reviewed.

## Do Not Do Without Explicit Approval

- Do not delete `/Users/yuuki/.codex/skills`.
- Do not delete `/Users/yuuki/.agents.disabled-20260502-215257`.
- Do not edit anything under:
  - `/Users/yuuki/.codex/plugins/cache`
  - `/Users/yuuki/.claude/plugins/cache`
- Do not blindly copy Codex `figma` personal skills into ClaudeCode personal skills.
- Do not overwrite existing skill directories unless the dry-run report has been reviewed.
- Do not use destructive commands such as `rm`, `git reset --hard`, or `git checkout --` for this migration unless explicitly requested.

## Known Caveats

- The canonical source currently lives inside the migration workbench, not in a permanent shared repository.
- `/Users/yuuki/.codex/skills` is still present as a legacy rollback copy.
- ClaudeCode API response verification failed due to connection errors in this environment, but local discovery logs confirmed skill loading.
- `skill-migration-work/` and `skill-backups/` are untracked in the repository.
- There are workbench test-copy directories visible under `skill-migration-work/20260502-215257/`; do not delete them unless reviewed in the next session.

## Suggested Next Steps

1. Decide whether the canonical source should remain in the migration workbench or move to a permanent path.
2. If moving it, use copy/archive semantics first; do not delete the workbench copy immediately.
3. Run the canonical deploy dry-runs again after any move or edit.
4. Run one normal Codex workflow using a skill from `/Users/yuuki/.agents/skills`.
5. Only after stable normal use, consider archiving `/Users/yuuki/.codex/skills` instead of deleting it.
6. Leave plugin caches untouched.

## Suggested Prompt For Next Session

```text
/Users/yuuki/Works/lp-100 を開いてください。
このセッションでは、前回の後半で行ったスキルディレクトリ/ファイル整理を引き継ぎます。
まず /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/HANDOFF_DIRECTORY_FILE_ORGANIZATION.md を読んでください。
そのうえで、正本スキルソースを恒久的な場所に移すかどうか、また /Users/yuuki/.codex/skills のレガシー退避に進めるかを、安全なドライラン優先で評価してください。
プラグインキャッシュ配下は編集しないでください。
```
