#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path


TARGET = Path("/Users/yuuki/.claude/skills/lp-automation-v2/SKILL.md")
ARCHIVE = Path(
    "/Users/yuuki/.claude/skill-archives/20260502-215257/yaml-fix/"
    "lp-automation-v2/SKILL.before-yaml-fix.md"
)


def main() -> None:
    text = TARGET.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        raise SystemExit("target does not start with frontmatter")
    end = text.find("\n---\n", 4)
    if end == -1:
        raise SystemExit("target frontmatter end not found")

    body = text[end + 5 :]
    description = (
        "LP自動作成オーケストレーター。ブレインストーミングからデプロイまで"
        "11ステップを自動化します。「LPを作成」「新規LP」「/lp-create」で起動。"
    )
    new_frontmatter = (
        "---\n"
        'name: "lp-automation-v2"\n'
        f'description: "{description}"\n'
        "---\n"
    )

    ARCHIVE.parent.mkdir(parents=True, exist_ok=True)
    if not ARCHIVE.exists():
        ARCHIVE.write_text(text, encoding="utf-8")
    TARGET.write_text(new_frontmatter + body, encoding="utf-8")


if __name__ == "__main__":
    main()
