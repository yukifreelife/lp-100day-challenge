#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
import shutil
from pathlib import Path


WORK = Path("/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257")
SOURCE_ROOT = WORK / "canonical-skill-source"
REPORTS = WORK / "reports"

CODEX = Path("/Users/yuuki/.agents/skills")
CLAUDE = Path("/Users/yuuki/.claude/skills")


def hash_file(path: Path) -> str:
    digest = hashlib.sha256()
    digest.update(path.read_bytes())
    return digest.hexdigest()


def skill_dirs(root: Path) -> dict[str, Path]:
    return {
        child.name: child
        for child in root.iterdir()
        if child.is_dir() and not child.name.startswith(".") and (child / "SKILL.md").exists()
    }


def copy_skill(src: Path, dst: Path) -> None:
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".DS_Store"))


def main() -> None:
    if SOURCE_ROOT.exists():
        shutil.rmtree(SOURCE_ROOT)
    (SOURCE_ROOT / "skills").mkdir(parents=True)
    REPORTS.mkdir(parents=True, exist_ok=True)

    codex = skill_dirs(CODEX)
    claude = skill_dirs(CLAUDE)
    names = sorted(set(codex) | set(claude))
    manifest: list[dict[str, str]] = []

    for name in names:
        codex_dir = codex.get(name)
        claude_dir = claude.get(name)
        if codex_dir and claude_dir:
            codex_hash = hash_file(codex_dir / "SKILL.md")
            claude_hash = hash_file(claude_dir / "SKILL.md")
            if codex_hash == claude_hash:
                copy_skill(codex_dir, SOURCE_ROOT / "skills" / "common" / name)
                manifest.append({"skill": name, "classification": "common", "source": "codex-user"})
            else:
                copy_skill(codex_dir, SOURCE_ROOT / "skills" / "variants" / name / "codex")
                copy_skill(claude_dir, SOURCE_ROOT / "skills" / "variants" / name / "claude")
                manifest.append({"skill": name, "classification": "variant", "source": "codex-user+claude"})
        elif codex_dir:
            copy_skill(codex_dir, SOURCE_ROOT / "skills" / "codex-only" / name)
            manifest.append({"skill": name, "classification": "codex-only", "source": "codex-user"})
        elif claude_dir:
            copy_skill(claude_dir, SOURCE_ROOT / "skills" / "claude-only" / name)
            manifest.append({"skill": name, "classification": "claude-only", "source": "claude"})

    (SOURCE_ROOT / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    readme = [
        "# Canonical Skill Source",
        "",
        "This directory is a neutral source snapshot for user-created skills.",
        "",
        "It is intentionally separate from active runtime locations:",
        "",
        "- Codex active user skills: `/Users/yuuki/.agents/skills`",
        "- ClaudeCode active personal skills: `/Users/yuuki/.claude/skills`",
        "- Codex legacy rollback copy: `/Users/yuuki/.codex/skills`",
        "",
        "Do not edit plugin cache directories by hand.",
        "",
        "## Layout",
        "",
        "- `skills/common/<skill>/` contains skills whose `SKILL.md` is identical for Codex and ClaudeCode.",
        "- `skills/variants/<skill>/codex/` and `skills/variants/<skill>/claude/` contain agent-specific versions.",
        "- `skills/codex-only/<skill>/` contains skills intentionally deployed only to Codex.",
        "- `skills/claude-only/<skill>/` contains skills intentionally deployed only to ClaudeCode.",
        "",
        "## Deployment Rule",
        "",
        "Treat this directory as a reviewable source snapshot, not an automatic runtime location.",
        "Deploy to active roots only through reviewed sync scripts and dry-run reports.",
        "",
        "Current intentional difference:",
        "",
        "- Figma personal skills are Codex-only because ClaudeCode has plugin-managed Figma skills.",
        "",
    ]
    (SOURCE_ROOT / "README.md").write_text("\n".join(readme), encoding="utf-8")

    counts: dict[str, int] = {}
    for row in manifest:
        counts[row["classification"]] = counts.get(row["classification"], 0) + 1

    report_lines = [
        "# Canonical Skill Source Build",
        "",
        f"- Source root: `{SOURCE_ROOT}`",
        f"- Manifest: `{SOURCE_ROOT / 'manifest.json'}`",
        "",
        "## Counts",
        "",
    ]
    for key in sorted(counts):
        report_lines.append(f"- `{key}`: {counts[key]}")
    report_lines.extend(["", "## Skills", ""])
    for row in manifest:
        report_lines.append(f"- `{row['skill']}`: {row['classification']} ({row['source']})")
    (REPORTS / "canonical-skill-source-build.md").write_text(
        "\n".join(report_lines) + "\n",
        encoding="utf-8",
    )
    (REPORTS / "canonical-skill-source-build.json").write_text(
        json.dumps({"source_root": str(SOURCE_ROOT), "counts": counts, "manifest": manifest}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(SOURCE_ROOT)


if __name__ == "__main__":
    main()
