#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
from pathlib import Path


ROOT = Path("/Users/yuuki")
WORK = Path("/Users/yuuki/Works/lp-100/skill-migration-work/20260502-215257")
REPORTS = WORK / "reports"
STAGING = WORK / "staging"

CODEX = ROOT / ".codex" / "skills"
CLAUDE = ROOT / ".claude" / "skills"
AGENTS = ROOT / ".agents" / "skills"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def exact_child(parent: Path, filename: str) -> Path | None:
    for child in parent.iterdir():
        if child.name == filename:
            return child
    return None


def has_exact_child(parent: Path, filename: str) -> bool:
    return exact_child(parent, filename) is not None


def convert_lower_to_upper(skill_dir: Path, skill_name: str, *, keep_legacy: bool) -> bool:
    lower = exact_child(skill_dir, "skill.md")
    if lower is None:
        return False
    normalized = normalize_skill_text(lower, skill_name)
    if keep_legacy:
        legacy = skill_dir / "skill.legacy.md"
        if not legacy.exists():
            lower.rename(legacy)
        else:
            lower.unlink()
    else:
        lower.unlink()
    write_text(skill_dir / "SKILL.md", normalized)
    return True


def split_frontmatter(text: str) -> tuple[dict[str, str], str, str]:
    if not text.startswith("---\n"):
        return {}, "", text
    end = text.find("\n---\n", 4)
    if end == -1:
        return {}, "", text
    raw = text[4:end]
    body = text[end + 5 :]
    fields: dict[str, str] = {}
    for key in ("name", "description"):
        match = re.search(rf"^{key}:\s*(.*)$", raw, flags=re.MULTILINE)
        if match:
            fields[key] = match.group(1).strip().strip("\"'")
    return fields, raw, body


def yaml_quote(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def derive_description(skill_name: str, text: str, fields: dict[str, str]) -> str:
    if fields.get("description"):
        return fields["description"]
    lines = [line.strip() for line in text.splitlines()]
    for line in lines:
        if not line or line.startswith("#") or line == "---":
            continue
        if len(line) > 8:
            return line[:220]
    return f"{skill_name} skill migrated to standard SKILL.md format."


def normalize_skill_text(source: Path, skill_name: str) -> str:
    text = read_text(source)
    fields, raw_frontmatter, body = split_frontmatter(text)
    description = derive_description(skill_name, body if raw_frontmatter else text, fields)
    frontmatter = (
        "---\n"
        f"name: {yaml_quote(skill_name)}\n"
        f"description: {yaml_quote(description)}\n"
        "---\n\n"
    )

    extra = ""
    if raw_frontmatter:
        stripped = []
        for line in raw_frontmatter.splitlines():
            if re.match(r"^(name|description):", line):
                continue
            stripped.append(line)
        if any(line.strip() for line in stripped):
            extra = (
                "## Source Metadata\n\n"
                "The source skill included additional metadata. It is preserved here for migration traceability.\n\n"
                "```yaml\n"
                + "\n".join(stripped).strip()
                + "\n```\n\n"
            )
    return frontmatter + extra + body.lstrip()


def normalize_existing_skill_name(skill_path: Path, skill_name: str) -> bool:
    text = read_text(skill_path)
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


def skill_entries(root: Path) -> dict[str, dict[str, object]]:
    entries: dict[str, dict[str, object]] = {}
    if not root.exists():
        return entries
    for child in sorted(root.iterdir()):
        if child.name.startswith("."):
            continue
        if child.is_dir():
            files = []
            for candidate in child.rglob("*"):
                if candidate.is_file():
                    rel = str(candidate.relative_to(child))
                    if rel == "SKILL.md" or rel == "skill.md" or rel.endswith(".md"):
                        files.append(rel)
            entries[child.name] = {
                "kind": "directory",
                "files": sorted(files),
                "has_SKILL": has_exact_child(child, "SKILL.md"),
                "has_skill_lower": has_exact_child(child, "skill.md"),
            }
        elif child.is_file() and child.suffix == ".md":
            entries[child.stem] = {
                "kind": "single_md",
                "files": [child.name],
                "has_SKILL": False,
                "has_skill_lower": False,
            }
    return entries


def command_inventory() -> None:
    REPORTS.mkdir(parents=True, exist_ok=True)
    data = {
        "codex": skill_entries(CODEX),
        "claude": skill_entries(CLAUDE),
        "agents": skill_entries(AGENTS),
    }
    all_names = sorted(set(data["codex"]) | set(data["claude"]) | set(data["agents"]))
    rows = []
    for name in all_names:
        rows.append(
            {
                "skill": name,
                "codex": data["codex"].get(name),
                "claude": data["claude"].get(name),
                "agents": data["agents"].get(name),
            }
        )
    write_text(REPORTS / "inventory.json", json.dumps(rows, ensure_ascii=False, indent=2))

    lines = ["# Skill Inventory", ""]
    lines.append("| Skill | Codex | ClaudeCode | Agents | Notes |")
    lines.append("|---|---|---|---|---|")
    for row in rows:
        notes = []
        for label in ("codex", "claude", "agents"):
            entry = row[label]
            if not entry:
                continue
            if entry["kind"] == "single_md":
                notes.append(f"{label}: single md")
            elif not entry["has_SKILL"]:
                notes.append(f"{label}: no SKILL.md")
        lines.append(
            "| {skill} | {codex} | {claude} | {agents} | {notes} |".format(
                skill=row["skill"],
                codex="yes" if row["codex"] else "-",
                claude="yes" if row["claude"] else "-",
                agents="yes" if row["agents"] else "-",
                notes="<br>".join(notes) if notes else "",
            )
        )
    write_text(REPORTS / "inventory.md", "\n".join(lines) + "\n")


def copytree_clean(src: Path, dst: Path) -> None:
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst, ignore=shutil.ignore_patterns(".DS_Store"))


def remove_lower_skill_if_duplicate(skill_dir: Path) -> None:
    lower = exact_child(skill_dir, "skill.md")
    upper = exact_child(skill_dir, "SKILL.md")
    if lower is not None and upper is not None:
        lower.unlink()


def command_stage() -> None:
    REPORTS.mkdir(parents=True, exist_ok=True)
    if STAGING.exists():
        shutil.rmtree(STAGING)
    copytree_clean(CODEX, STAGING / "codex-skills")
    copytree_clean(CLAUDE, STAGING / "claude-skills")

    actions: list[dict[str, str]] = []
    skipped: list[dict[str, str]] = []

    claude_backup = STAGING / "claude-skills" / "lp-automation-v2.backup"
    if claude_backup.exists():
        archive_dst = STAGING / "claude-skill-archives" / "20260502-215257" / "lp-automation-v2.backup"
        archive_dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(claude_backup), str(archive_dst))
        actions.append({"target": "claude", "skill": "lp-automation-v2.backup", "action": "moved out of skills staging into archive"})

    for agent_skill in sorted(p for p in AGENTS.iterdir() if p.is_dir()):
        name = agent_skill.name
        if not re.fullmatch(r"[a-z0-9-]+", name):
            skipped.append({"target": "codex", "skill": name, "reason": "invalid Codex skill name"})
            continue

        codex_dst = STAGING / "codex-skills" / name
        if codex_dst.exists():
            skipped.append({"target": "codex", "skill": name, "reason": "already exists; requires manual conflict review"})
        else:
            shutil.copytree(agent_skill, codex_dst, ignore=shutil.ignore_patterns(".DS_Store"))
            source_skill = exact_child(codex_dst, "SKILL.md")
            lower_skill = exact_child(codex_dst, "skill.md")
            if lower_skill is not None:
                convert_lower_to_upper(codex_dst, name, keep_legacy=False)
            elif source_skill is not None:
                write_text(source_skill, normalize_skill_text(source_skill, name))
            else:
                skipped.append({"target": "codex", "skill": name, "reason": "no source skill markdown"})
                shutil.rmtree(codex_dst)
                continue
            actions.append({"target": "codex", "skill": name, "action": "added from .agents"})

        claude_dst = STAGING / "claude-skills" / name
        if claude_dst.exists():
            lower_skill = exact_child(claude_dst, "skill.md")
            source_skill = exact_child(claude_dst, "SKILL.md")
            if lower_skill is not None and source_skill is None:
                convert_lower_to_upper(claude_dst, name, keep_legacy=True)
                actions.append({"target": "claude", "skill": name, "action": "created SKILL.md from existing skill.md"})
            else:
                skipped.append({"target": "claude", "skill": name, "reason": "already exists; no overwrite"})
        else:
            shutil.copytree(agent_skill, claude_dst, ignore=shutil.ignore_patterns(".DS_Store"))
            source_skill = exact_child(claude_dst, "SKILL.md")
            lower_skill = exact_child(claude_dst, "skill.md")
            if lower_skill is not None:
                convert_lower_to_upper(claude_dst, name, keep_legacy=True)
            elif source_skill is not None:
                write_text(source_skill, normalize_skill_text(source_skill, name))
            else:
                skipped.append({"target": "claude", "skill": name, "reason": "no source skill markdown"})
                shutil.rmtree(claude_dst)
                continue
            actions.append({"target": "claude", "skill": name, "action": "added from .agents"})

    claude_root = STAGING / "claude-skills"
    for single in sorted(p for p in claude_root.iterdir() if p.is_file() and p.suffix == ".md"):
        name = single.stem
        if not re.fullmatch(r"[a-z0-9-]+", name):
            skipped.append({"target": "claude", "skill": name, "reason": "invalid skill name for normalization"})
            continue
        archive_single = STAGING / "claude-skill-archives" / "20260502-215257" / "root-md" / single.name
        archive_single.parent.mkdir(parents=True, exist_ok=True)
        dst_dir = claude_root / name
        dst_skill = dst_dir / "SKILL.md"
        if has_exact_child(dst_dir, "SKILL.md") if dst_dir.exists() else False:
            skipped.append({"target": "claude", "skill": name, "reason": "normalized SKILL.md already exists"})
            shutil.move(str(single), str(archive_single))
            actions.append({"target": "claude", "skill": name, "action": f"moved root {single.name} into archive staging"})
            continue
        write_text(dst_skill, normalize_skill_text(single, name))
        actions.append({"target": "claude", "skill": name, "action": f"created {name}/SKILL.md from root {single.name}"})
        codex_eval_dst = STAGING / "codex-skills" / name
        if not codex_eval_dst.exists():
            shutil.copytree(dst_dir, codex_eval_dst, ignore=shutil.ignore_patterns(".DS_Store"))
            actions.append({"target": "codex", "skill": name, "action": f"added from ClaudeCode root {single.name}"})
        shutil.move(str(single), str(archive_single))
        actions.append({"target": "claude", "skill": name, "action": f"moved root {single.name} into archive staging"})

    for skill_dir in sorted(p for p in claude_root.iterdir() if p.is_dir()):
        name = skill_dir.name
        lower_skill = exact_child(skill_dir, "skill.md")
        source_skill = exact_child(skill_dir, "SKILL.md")
        if lower_skill is not None and source_skill is None:
            convert_lower_to_upper(skill_dir, name, keep_legacy=True)
            actions.append({"target": "claude", "skill": name, "action": "created SKILL.md from skill.md"})
        legacy_skill = exact_child(skill_dir, "skill.legacy.md")
        if legacy_skill is not None:
            archive_legacy = STAGING / "claude-skill-archives" / "20260502-215257" / "lowercase-skill-md" / name / "skill.legacy.md"
            archive_legacy.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(legacy_skill), str(archive_legacy))
            actions.append({"target": "claude", "skill": name, "action": "moved skill.legacy.md into archive staging"})

    claude_lp_automation = claude_root / "lp-automation-v2" / "SKILL.md"
    if claude_lp_automation.exists() and normalize_existing_skill_name(claude_lp_automation, "lp-automation-v2"):
        actions.append({"target": "claude", "skill": "lp-automation-v2", "action": "normalized frontmatter name"})

    write_text(REPORTS / "staging-actions.json", json.dumps(actions, ensure_ascii=False, indent=2))
    write_text(REPORTS / "staging-skipped.json", json.dumps(skipped, ensure_ascii=False, indent=2))


def validate_skill(path: Path) -> list[str]:
    errors = []
    text = read_text(path)
    fields, _, _ = split_frontmatter(text)
    if not fields.get("name"):
        errors.append("missing name")
    if not fields.get("description"):
        errors.append("missing description")
    if fields.get("name") and not re.fullmatch(r"[a-z0-9-]+", fields["name"]):
        errors.append(f"invalid name {fields['name']!r}")
    return errors


def validate_roots(roots: dict[str, Path]) -> list[dict[str, str]]:
    issues = []
    for label, root in roots.items():
        for skill_dir in sorted(p for p in root.iterdir() if p.is_dir() and not p.name.startswith(".")):
            if not any(p.is_file() and p.suffix == ".md" for p in skill_dir.rglob("*")):
                continue
            skill = exact_child(skill_dir, "SKILL.md")
            if skill is None:
                issues.append({"target": label, "skill": skill_dir.name, "issue": "missing SKILL.md"})
                continue
            for issue in validate_skill(skill):
                issues.append({"target": label, "skill": skill_dir.name, "issue": issue})
            fields, _, _ = split_frontmatter(read_text(skill))
            if fields.get("name") and fields["name"] != skill_dir.name:
                issues.append({"target": label, "skill": skill_dir.name, "issue": f"name does not match directory: {fields['name']}"})
    return issues


def command_validate(*, live: bool = False) -> None:
    REPORTS.mkdir(parents=True, exist_ok=True)
    roots = {"codex": CODEX, "claude": CLAUDE} if live else {"codex": STAGING / "codex-skills", "claude": STAGING / "claude-skills"}
    issues = validate_roots(roots)
    prefix = "live-validation" if live else "validation"
    write_text(REPORTS / f"{prefix}.json", json.dumps(issues, ensure_ascii=False, indent=2))
    lines = ["# Validation", ""]
    if not issues:
        lines.append("No live validation issues found." if live else "No staging validation issues found.")
    else:
        for issue in issues:
            lines.append(f"- {issue['target']}/{issue['skill']}: {issue['issue']}")
    write_text(REPORTS / f"{prefix}.md", "\n".join(lines) + "\n")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=["inventory", "stage", "validate", "validate-live"])
    args = parser.parse_args()
    if args.command == "inventory":
        command_inventory()
    elif args.command == "stage":
        command_stage()
    elif args.command == "validate":
        command_validate()
    elif args.command == "validate-live":
        command_validate(live=True)


if __name__ == "__main__":
    main()
