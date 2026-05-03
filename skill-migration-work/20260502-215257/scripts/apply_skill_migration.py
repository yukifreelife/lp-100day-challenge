#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
from pathlib import Path


ROOT = Path("/Users/yuuki")
WORK = Path("/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257")
STAGING = WORK / "staging"
REPORTS = WORK / "reports"
CODEX = ROOT / ".codex" / "skills"
CLAUDE = ROOT / ".claude" / "skills"

CODEX_ADD = [
    "auto-improve",
    "code-review",
    "cognee",
    "debug-helper",
    "doc-generation",
    "image-license",
    "lp-analytics",
    "lp-code-check",
    "lp-content",
    "lp-legal",
    "lp-mobile",
    "lp-performance",
    "lp-seo",
    "lp-ux",
    "security-audit",
    "test-generation",
]

CLAUDE_ADD_DIRS = [
    "lp-code-check",
    "lp-content",
    "lp-mobile",
    "lp-seo",
]

CLAUDE_RENAME_LOWER = [
    "lp-analytics",
    "lp-category-settings",
    "lp-legal",
    "lp-performance",
    "lp-ux",
]

CLAUDE_ROOT_MD_ARCHIVE = [
    "lp-code-check.md",
    "lp-content.md",
    "lp-mobile.md",
    "lp-seo.md",
]


def exact_child(parent: Path, filename: str) -> Path | None:
    for child in parent.iterdir():
        if child.name == filename:
            return child
    return None


def copytree_new(src: Path, dst: Path) -> bool:
    if dst.exists():
        return False
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".DS_Store", "__pycache__"))
    return True


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def normalize_existing_skill_name(skill_path: Path, skill_name: str) -> bool:
    text = skill_path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        return False
    end = text.find("\n---\n", 4)
    if end == -1:
        return False
    raw = text[4:end]
    body = text[end + 5 :]
    if re.search(r"^name:\s*" + re.escape(skill_name) + r"\s*$", raw, flags=re.MULTILINE):
        return False
    new_raw = re.sub(r"^name:\s*.*$", f"name: {skill_name}", raw, count=1, flags=re.MULTILINE)
    write_text(skill_path, "---\n" + new_raw + "\n---\n" + body)
    return True


def archive_claude_backup() -> str:
    src = CLAUDE / "lp-automation-v2.backup"
    if not src.exists():
        return "backup directory not present"
    archive_root = ROOT / ".claude" / "skill-archives" / "20260502-215257"
    archive_root.mkdir(parents=True, exist_ok=True)
    dst = archive_root / "lp-automation-v2.backup"
    if dst.exists():
        return f"archive already exists at {dst}"
    shutil.move(str(src), str(dst))
    return f"moved to {dst}"


def archive_claude_root_md(filename: str) -> str:
    src = CLAUDE / filename
    if not src.exists():
        return "root markdown not present"
    archive_root = ROOT / ".claude" / "skill-archives" / "20260502-215257" / "root-md"
    archive_root.mkdir(parents=True, exist_ok=True)
    dst = archive_root / filename
    if dst.exists():
        return f"archive already exists at {dst}"
    shutil.move(str(src), str(dst))
    return f"moved to {dst}"


def archive_lowercase_legacy(skill_name: str) -> str:
    src = CLAUDE / skill_name / "skill.legacy.md"
    if not src.exists():
        return "legacy file not present"
    archive_root = ROOT / ".claude" / "skill-archives" / "20260502-215257" / "lowercase-skill-md" / skill_name
    archive_root.mkdir(parents=True, exist_ok=True)
    dst = archive_root / "skill.legacy.md"
    if dst.exists():
        return f"archive already exists at {dst}"
    shutil.move(str(src), str(dst))
    return f"moved to {dst}"


def apply() -> list[dict[str, str]]:
    actions: list[dict[str, str]] = []

    for name in CODEX_ADD:
        src = STAGING / "codex-skills" / name
        dst = CODEX / name
        if copytree_new(src, dst):
            actions.append({"target": "codex", "skill": name, "action": "added new skill directory"})
        else:
            actions.append({"target": "codex", "skill": name, "action": "skipped existing directory"})

    for name in CLAUDE_ADD_DIRS:
        src = STAGING / "claude-skills" / name
        dst = CLAUDE / name
        if copytree_new(src, dst):
            actions.append({"target": "claude", "skill": name, "action": "added normalized SKILL.md directory"})
        else:
            actions.append({"target": "claude", "skill": name, "action": "skipped existing directory"})

    for name in CLAUDE_RENAME_LOWER:
        src_skill = STAGING / "claude-skills" / name / "SKILL.md"
        dst_dir = CLAUDE / name
        dst_skill = exact_child(dst_dir, "SKILL.md")
        lower = exact_child(dst_dir, "skill.md")
        if dst_skill is not None:
            actions.append({"target": "claude", "skill": name, "action": "SKILL.md already exists; no change"})
            continue
        if lower is not None:
            legacy = dst_dir / "skill.legacy.md"
            if legacy.exists():
                legacy = dst_dir / "skill.legacy.20260502-215257.md"
            lower.rename(legacy)
            actions.append({"target": "claude", "skill": name, "action": f"renamed skill.md to {legacy.name}"})
        shutil.copy2(src_skill, dst_dir / "SKILL.md")
        actions.append({"target": "claude", "skill": name, "action": "created SKILL.md"})

    claude_lp_automation = CLAUDE / "lp-automation-v2" / "SKILL.md"
    if claude_lp_automation.exists() and normalize_existing_skill_name(claude_lp_automation, "lp-automation-v2"):
        actions.append({"target": "claude", "skill": "lp-automation-v2", "action": "normalized frontmatter name"})

    actions.append({"target": "claude", "skill": "lp-automation-v2.backup", "action": archive_claude_backup()})

    for filename in CLAUDE_ROOT_MD_ARCHIVE:
        actions.append({"target": "claude", "skill": filename.removesuffix(".md"), "action": archive_claude_root_md(filename)})

    for name in CLAUDE_RENAME_LOWER:
        actions.append({"target": "claude", "skill": name, "action": archive_lowercase_legacy(name)})

    codex_category = CODEX / "lp-category-settings" / "SKILL.md"
    if codex_category.exists():
        original = codex_category.read_text(encoding="utf-8")
        updated = original.replace(
            "/Users/yuuki/.claude/skills/lp-category-settings/skill.md",
            "/Users/yuuki/.claude/skills/lp-category-settings/SKILL.md",
        )
        if updated != original:
            write_text(codex_category, updated)
            actions.append({"target": "codex", "skill": "lp-category-settings", "action": "updated reference from skill.md to SKILL.md"})

    return actions


if __name__ == "__main__":
    REPORTS.mkdir(parents=True, exist_ok=True)
    result = apply()
    write_text(REPORTS / "live-actions.json", json.dumps(result, ensure_ascii=False, indent=2))
    print(json.dumps(result, ensure_ascii=False, indent=2))
