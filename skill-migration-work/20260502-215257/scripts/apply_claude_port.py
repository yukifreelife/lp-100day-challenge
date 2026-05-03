#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path


WORK = Path("/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257")
STAGED = WORK / "staging" / "claude-port" / "skills"
TARGET = Path("/Users/yuuki/.claude/skills")
REPORTS = WORK / "reports"


def parse_frontmatter(text: str) -> dict[str, str]:
    if not text.startswith("---\n"):
        return {}
    end = text.find("\n---\n", 4)
    if end == -1:
        return {}
    raw = text[4:end]
    fields: dict[str, str] = {}
    for key in ("name", "description"):
        match = re.search(rf"^{key}:\s*(.*)$", raw, flags=re.MULTILINE)
        if match:
            fields[key] = match.group(1).strip().strip("\"'")
    return fields


def validate_skill(skill_dir: Path) -> list[str]:
    issues: list[str] = []
    skill_file = skill_dir / "SKILL.md"
    if not skill_file.exists():
        return [f"{skill_dir.name}: missing SKILL.md"]
    fields = parse_frontmatter(skill_file.read_text(encoding="utf-8"))
    if fields.get("name") != skill_dir.name:
        issues.append(f"{skill_dir.name}: name mismatch {fields.get('name')!r}")
    if not fields.get("description"):
        issues.append(f"{skill_dir.name}: missing description")
    return issues


def main() -> int:
    REPORTS.mkdir(parents=True, exist_ok=True)
    TARGET.mkdir(parents=True, exist_ok=True)
    actions: list[dict[str, str]] = []
    issues: list[str] = []

    for src in sorted(path for path in STAGED.iterdir() if path.is_dir()):
        src_issues = validate_skill(src)
        if src_issues:
            issues.extend([f"staged {issue}" for issue in src_issues])
            actions.append({"skill": src.name, "action": "skipped invalid staged skill"})
            continue
        dst = TARGET / src.name
        if dst.exists():
            actions.append({"skill": src.name, "action": "skipped existing target"})
            issues.extend([f"target {issue}" for issue in validate_skill(dst)])
            continue
        shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".DS_Store"))
        actions.append({"skill": src.name, "action": "copied to ClaudeCode personal skills"})
        issues.extend([f"target {issue}" for issue in validate_skill(dst)])

    report = {
        "staged": str(STAGED),
        "target": str(TARGET),
        "actions": actions,
        "issues": issues,
    }
    (REPORTS / "claude-port-apply.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    lines = [
        "# Claude Port Apply Report",
        "",
        f"- Staged: `{STAGED}`",
        f"- Target: `{TARGET}`",
        "",
        "## Actions",
        "",
    ]
    lines.extend(f"- `{row['skill']}`: {row['action']}" for row in actions)
    lines.extend(["", "## Validation", ""])
    if issues:
        lines.extend(f"- {issue}" for issue in issues)
    else:
        lines.append("- No validation issues found.")
    (REPORTS / "claude-port-apply.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    return 1 if issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
