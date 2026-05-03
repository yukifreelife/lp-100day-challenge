#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import shutil
from dataclasses import dataclass
from pathlib import Path


ROOT = Path("/Users/yuuki")
WORK = Path("/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257")
REPORTS = WORK / "reports"

ROOTS = {
    "codex-user": ROOT / ".agents" / "skills",
    "codex-legacy": ROOT / ".codex" / "skills",
    "claude": ROOT / ".claude" / "skills",
}


@dataclass(frozen=True)
class SkillCheck:
    name: str
    action: str
    issues: tuple[str, ...] = ()


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


def validate_skill_dir(path: Path) -> tuple[str, ...]:
    issues: list[str] = []
    skill_file = path / "SKILL.md"
    if not skill_file.exists():
        return ("missing SKILL.md",)
    text = skill_file.read_text(encoding="utf-8")
    fields = parse_frontmatter(text)
    if fields.get("name") != path.name:
        issues.append(f"name does not match directory: {fields.get('name')!r}")
    if not fields.get("description"):
        issues.append("missing description")
    if fields.get("name") and not re.fullmatch(r"[a-z0-9-]+", fields["name"]):
        issues.append(f"invalid name: {fields['name']!r}")
    return tuple(issues)


def iter_source_skills(source: Path) -> list[Path]:
    skills: list[Path] = []
    for child in sorted(source.iterdir()):
        if child.name.startswith("."):
            continue
        if child.name.endswith(".backup"):
            continue
        if not child.is_dir():
            continue
        if not (child / "SKILL.md").exists():
            continue
        skills.append(child)
    return skills


def sync(source: Path, target: Path, *, apply: bool) -> list[SkillCheck]:
    checks: list[SkillCheck] = []
    if not source.exists():
        return [SkillCheck(str(source), "source missing", ("source root does not exist",))]
    if apply:
        target.mkdir(parents=True, exist_ok=True)

    for src in iter_source_skills(source):
        source_issues = validate_skill_dir(src)
        if source_issues:
            checks.append(SkillCheck(src.name, "skipped invalid source", source_issues))
            continue

        dst = target / src.name
        if dst.exists():
            target_issues = validate_skill_dir(dst)
            checks.append(SkillCheck(src.name, "skipped existing", target_issues))
            continue

        if apply:
            shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".DS_Store"))
            target_issues = validate_skill_dir(dst)
        else:
            target_issues = ()
        checks.append(SkillCheck(src.name, "would copy" if not apply else "copied", target_issues))

    return checks


def write_report(source_key: str, target_key: str, checks: list[SkillCheck], *, apply: bool) -> Path:
    REPORTS.mkdir(parents=True, exist_ok=True)
    stem = f"sync-{source_key}-to-{target_key}-{'apply' if apply else 'dry-run'}"
    data = {
        "source": str(ROOTS[source_key]),
        "target": str(ROOTS[target_key]),
        "apply": apply,
        "checks": [
            {"skill": check.name, "action": check.action, "issues": list(check.issues)}
            for check in checks
        ],
    }
    json_path = REPORTS / f"{stem}.json"
    json_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    md_path = REPORTS / f"{stem}.md"
    lines = [
        f"# Sync {source_key} to {target_key}",
        "",
        f"- Source: `{ROOTS[source_key]}`",
        f"- Target: `{ROOTS[target_key]}`",
        f"- Apply: `{str(apply).lower()}`",
        "",
        "## Results",
        "",
    ]
    for check in checks:
        issue_text = "; ".join(check.issues) if check.issues else "ok"
        lines.append(f"- `{check.name}`: {check.action} ({issue_text})")
    md_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return md_path


def main() -> int:
    parser = argparse.ArgumentParser(description="Safely sync user-created SKILL.md directories.")
    parser.add_argument("--source", choices=sorted(ROOTS), required=True)
    parser.add_argument("--target", choices=sorted(ROOTS), required=True)
    parser.add_argument("--apply", action="store_true", help="copy missing skills; default is dry-run")
    args = parser.parse_args()

    if args.source == args.target:
        raise SystemExit("source and target must differ")

    checks = sync(ROOTS[args.source], ROOTS[args.target], apply=args.apply)
    report = write_report(args.source, args.target, checks, apply=args.apply)
    print(report)

    has_issues = any(check.issues for check in checks if check.action not in {"skipped existing"})
    return 1 if has_issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
