#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path


ROOT = Path("/Users/yuuki")
WORK = Path("/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257")
REPORTS = WORK / "reports"
SOURCE = ROOT / ".codex" / "skills"
TARGET = ROOT / ".agents" / "skills"


def split_frontmatter(text: str) -> tuple[dict[str, str], str]:
    if not text.startswith("---\n"):
        return {}, text
    end = text.find("\n---\n", 4)
    if end == -1:
        return {}, text
    raw = text[4:end]
    body = text[end + 5 :]
    fields: dict[str, str] = {}
    for key in ("name", "description"):
        match = re.search(rf"^{key}:\s*(.*)$", raw, flags=re.MULTILINE)
        if match:
            fields[key] = match.group(1).strip().strip("\"'")
    return fields, body


def validate_skill_dir(path: Path) -> list[str]:
    issues: list[str] = []
    skill_file = path / "SKILL.md"
    if not skill_file.exists():
        return [f"{path.name}: missing SKILL.md"]
    try:
        text = skill_file.read_text(encoding="utf-8")
    except UnicodeDecodeError as exc:
        return [f"{path.name}: SKILL.md is not utf-8: {exc}"]
    fields, _body = split_frontmatter(text)
    if fields.get("name") != path.name:
        issues.append(f"{path.name}: frontmatter name is {fields.get('name')!r}")
    if not fields.get("description"):
        issues.append(f"{path.name}: missing description")
    return issues


def copy_skill(src: Path, dst: Path) -> str:
    if dst.exists():
        return "skipped existing directory"
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".DS_Store"))
    return "copied from ~/.codex/skills"


def main() -> int:
    REPORTS.mkdir(parents=True, exist_ok=True)
    TARGET.mkdir(parents=True, exist_ok=True)

    actions: list[dict[str, str]] = []
    issues: list[str] = []
    source_skills: list[Path] = []

    for child in sorted(SOURCE.iterdir()):
        if child.name.startswith("."):
            actions.append({"skill": child.name, "action": "skipped hidden/system directory"})
            continue
        if not child.is_dir():
            actions.append({"skill": child.name, "action": "skipped non-directory"})
            continue
        if not (child / "SKILL.md").exists():
            actions.append({"skill": child.name, "action": "skipped missing SKILL.md"})
            continue
        if child.name.endswith(".backup"):
            actions.append({"skill": child.name, "action": "skipped backup-like directory"})
            continue
        source_issues = validate_skill_dir(child)
        if source_issues:
            issues.extend([f"source {issue}" for issue in source_issues])
            actions.append({"skill": child.name, "action": "skipped invalid source"})
            continue
        source_skills.append(child)

    for src in source_skills:
        dst = TARGET / src.name
        action = copy_skill(src, dst)
        actions.append({"skill": src.name, "action": action})
        if dst.exists():
            issues.extend([f"target {issue}" for issue in validate_skill_dir(dst)])

    copied_count = sum(1 for row in actions if row["action"] == "copied from ~/.codex/skills")
    skipped_existing = sum(1 for row in actions if row["action"] == "skipped existing directory")

    report = {
        "source": str(SOURCE),
        "target": str(TARGET),
        "copied_count": copied_count,
        "skipped_existing_count": skipped_existing,
        "actions": actions,
        "issues": issues,
    }
    (REPORTS / "agents-sync-report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    lines = [
        "# Agents Skill Sync Report",
        "",
        f"- Source: `{SOURCE}`",
        f"- Target: `{TARGET}`",
        f"- Copied: {copied_count}",
        f"- Skipped existing: {skipped_existing}",
        "",
        "## Actions",
        "",
    ]
    for row in actions:
        lines.append(f"- `{row['skill']}`: {row['action']}")
    lines.extend(["", "## Validation", ""])
    if issues:
        lines.extend(f"- {issue}" for issue in issues)
    else:
        lines.append("- No validation issues found.")
    (REPORTS / "agents-sync-report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")

    return 1 if issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
