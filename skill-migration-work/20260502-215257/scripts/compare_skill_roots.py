#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
from pathlib import Path


WORK = Path("/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257")
REPORTS = WORK / "reports"
ROOTS = {
    "codex-user": Path("/Users/yuuki/.agents/skills"),
    "codex-legacy": Path("/Users/yuuki/.codex/skills"),
    "claude": Path("/Users/yuuki/.claude/skills"),
}


def file_hash(path: Path) -> str:
    digest = hashlib.sha256()
    digest.update(path.read_bytes())
    return digest.hexdigest()


def skill_hash(skill_dir: Path) -> str | None:
    skill_file = skill_dir / "SKILL.md"
    if not skill_file.exists():
        return None
    return file_hash(skill_file)


def skill_names(root: Path) -> set[str]:
    if not root.exists():
        return set()
    return {
        child.name
        for child in root.iterdir()
        if child.is_dir() and not child.name.startswith(".") and (child / "SKILL.md").exists()
    }


def main() -> None:
    REPORTS.mkdir(parents=True, exist_ok=True)
    names = sorted(set().union(*(skill_names(root) for root in ROOTS.values())))
    rows = []
    for name in names:
        row: dict[str, object] = {"skill": name}
        hashes: dict[str, str | None] = {}
        for label, root in ROOTS.items():
            skill_dir = root / name
            if not skill_dir.exists():
                row[label] = "missing"
                hashes[label] = None
            else:
                digest = skill_hash(skill_dir)
                row[label] = "present" if digest else "invalid"
                hashes[label] = digest
        present_hashes = {value for value in hashes.values() if value}
        row["same_content"] = len(present_hashes) <= 1
        row["hashes"] = hashes
        rows.append(row)

    json_path = REPORTS / "skill-root-comparison.json"
    json_path.write_text(json.dumps(rows, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# Skill Root Comparison",
        "",
        "| Skill | Codex User | Codex Legacy | ClaudeCode | Same SKILL.md content |",
        "|---|---|---|---|---|",
    ]
    for row in rows:
        lines.append(
            "| {skill} | {codex_user} | {codex_legacy} | {claude} | {same} |".format(
                skill=row["skill"],
                codex_user=row["codex-user"],
                codex_legacy=row["codex-legacy"],
                claude=row["claude"],
                same="yes" if row["same_content"] else "no",
            )
        )
    md_path = REPORTS / "skill-root-comparison.md"
    md_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(md_path)


if __name__ == "__main__":
    main()
