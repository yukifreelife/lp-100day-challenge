# Claude Missing Skill Review

Dry-run command:

```bash
python3 /Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/scripts/sync_user_skills.py --source codex-user --target claude
```

## Original Result

ClaudeCode is missing these skills from the Codex user skill set:

- `figma`
- `figma-implement-design`
- `lp-automation`
- `lp-design-first-flow`
- `pdf`

## Decision

Do not blindly copy these into `/Users/yuuki/.claude/skills`.

Reason:

- Some files contain Codex-specific MCP setup commands.
- `lp-automation` hardcodes `/Users/yuuki/.codex/skills/lp-automation-v2/SKILL.md`.
- `lp-design-first-flow` refers to Codex-oriented skill names and Browser Use conventions.
- Figma skills may need ClaudeCode-specific MCP/plugin wording before they are safe as ClaudeCode personal skills.

## Recommended Actions

1. Port `pdf` first if ClaudeCode needs a personal PDF workflow.
   - It is mostly generic.
   - Review dependency/install wording before copying.

2. Port `lp-design-first-flow` next.
   - Replace Codex-specific path references with ClaudeCode equivalents where needed.
   - Keep the lp-100 workflow wording.

3. Port `lp-automation` only as a ClaudeCode-specific compatibility alias.
   - It should point to `/Users/yuuki/.claude/skills/lp-automation-v2/SKILL.md`.
   - Do not copy the Codex alias unchanged.

4. Review `figma` and `figma-implement-design` separately.
   - Confirm whether ClaudeCode should use plugin-provided Figma skills, MCP configuration, or personal fallback skills.
   - Avoid duplicating plugin-managed Figma workflows unless there is a clear need.

## Applied Port

These ClaudeCode personal skills were added after conversion:

- `/Users/yuuki/.claude/skills/pdf/SKILL.md`
- `/Users/yuuki/.claude/skills/lp-design-first-flow/SKILL.md`
- `/Users/yuuki/.claude/skills/lp-automation/SKILL.md`

Apply report:

- `/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257/reports/claude-port-apply.md`

## Remaining Difference

After the port, only these Codex user skills remain absent from `/Users/yuuki/.claude/skills`:

- `figma`
- `figma-implement-design`

This is intentional. ClaudeCode already has the Figma plugin installed at:

- `/Users/yuuki/.claude/plugins/cache/claude-plugins-official/figma/2.0.7`

The plugin provides Figma skills including:

- `figma-use`
- `figma-implement-design`
- `figma-generate-design`
- `figma-create-new-file`
- `figma-generate-library`
- `figma-code-connect`
- `figma-create-design-system-rules`

Because these are plugin-managed, do not duplicate them into personal skills unless a personal fallback is explicitly required.

## Current Safe State

- Codex active user skills are present in `/Users/yuuki/.agents/skills`.
- Legacy Codex copy remains in `/Users/yuuki/.codex/skills`.
- ClaudeCode personal skills now include the converted `pdf`, `lp-design-first-flow`, and `lp-automation` skills.
- ClaudeCode Figma workflows remain plugin-managed.
