#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import shutil
from pathlib import Path


WORK = Path("/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257")
SOURCE = WORK / "canonical-skill-source"
REPORTS = WORK / "reports"
TARGETS = {
    "codex": Path("/Users/yuuki/.agents/skills"),
    "claude": Path("/Users/yuuki/.claude/skills"),
}


def hash_file(path: Path) -> str:
    digest = hashlib.sha256()
    digest.update(path.read_bytes())
    return digest.hexdigest()


def copy_dir(src: Path, dst: Path) -> None:
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".DS_Store"))


def desired_sources(target: str) -> dict[str, Path]:
    skills: dict[str, Path] = {}

    common = SOURCE / "skills" / "common"
    if common.exists():
        for child in common.iterdir():
            if child.is_dir() and (child / "SKILL.md").exists():
                skills[child.name] = child

    variants = SOURCE / "skills" / "variants"
    variant_key = "codex" if target == "codex" else "claude"
    if variants.exists():
        for child in variants.iterdir():
            variant = child / variant_key
            if variant.is_dir() and (variant / "SKILL.md").exists():
                skills[child.name] = variant

    only = SOURCE / "skills" / ("codex-only" if target == "codex" else "claude-only")
    if only.exists():
        for child in only.iterdir():
            if child.is_dir() and (child / "SKILL.md").exists():
                skills[child.name] = child

    return dict(sorted(skills.items()))


def main() -> int:
    parser = argparse.ArgumentParser(description="Deploy canonical user skill source to an active runtime root.")
    parser.add_argument("--target", choices=sorted(TARGETS), required=True)
    parser.add_argument("--apply", action="store_true", help="copy missing skills")
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="replace differing existing skills; only valid with --apply",
    )
    args = parser.parse_args()

    if args.overwrite and not args.apply:
        raise SystemExit("--overwrite requires --apply")

    REPORTS.mkdir(parents=True, exist_ok=True)
    target_root = TARGETS[args.target]
    desired = desired_sources(args.target)
    actions: list[dict[str, str]] = []
    issues: list[str] = []

    for name, src in desired.items():
        dst = target_root / name
        if not dst.exists():
            action = "would copy missing"
            if args.apply:
                copy_dir(src, dst)
                action = "copied missing"
            actions.append({"skill": name, "action": action})
            continue

        src_hash = hash_file(src / "SKILL.md")
        dst_hash = hash_file(dst / "SKILL.md") if (dst / "SKILL.md").exists() else ""
        if src_hash == dst_hash:
            actions.append({"skill": name, "action": "up to date"})
        elif args.apply and args.overwrite:
            copy_dir(src, dst)
            actions.append({"skill": name, "action": "overwritten from canonical source"})
        else:
            actions.append({"skill": name, "action": "different; no overwrite"})

    active_names = {
        child.name
        for child in target_root.iterdir()
        if child.is_dir() and not child.name.startswith(".") and (child / "SKILL.md").exists()
    }
    extra = sorted(active_names - set(desired))
    for name in extra:
        actions.append({"skill": name, "action": "extra in active target; left untouched"})

    if args.target == "claude" and {"figma", "figma-implement-design"} & set(extra):
        issues.append("ClaudeCode Figma personal-skill absence is intentional because Figma is plugin-managed.")

    stem = f"deploy-canonical-to-{args.target}-{'apply' if args.apply else 'dry-run'}"
    report = {
        "target": args.target,
        "target_root": str(target_root),
        "apply": args.apply,
        "overwrite": args.overwrite,
        "actions": actions,
        "issues": issues,
    }
    (REPORTS / f"{stem}.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines = [
        f"# Deploy Canonical Source To {args.target}",
        "",
        f"- Source: `{SOURCE}`",
        f"- Target: `{target_root}`",
        f"- Apply: `{str(args.apply).lower()}`",
        f"- Overwrite: `{str(args.overwrite).lower()}`",
        "",
        "## Actions",
        "",
    ]
    for row in actions:
        lines.append(f"- `{row['skill']}`: {row['action']}")
    lines.extend(["", "## Notes", ""])
    if issues:
        lines.extend(f"- {issue}" for issue in issues)
    else:
        lines.append("- No notes.")
    (REPORTS / f"{stem}.md").write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(REPORTS / f"{stem}.md")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
