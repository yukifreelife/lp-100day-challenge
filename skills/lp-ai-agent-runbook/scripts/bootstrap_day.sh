#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "Usage: $0 <previous_day_dir> <new_day_dir>" >&2
  exit 1
fi

PREV_DAY_DIR="$1"
NEW_DAY_DIR="$2"

if [[ ! -d "$PREV_DAY_DIR" ]]; then
  echo "Error: source directory not found: $PREV_DAY_DIR" >&2
  exit 1
fi

if [[ -e "$NEW_DAY_DIR" ]]; then
  echo "Error: destination already exists: $NEW_DAY_DIR" >&2
  exit 1
fi

cp -R "$PREV_DAY_DIR" "$NEW_DAY_DIR"

for DOC in "$NEW_DAY_DIR/README.md" "$NEW_DAY_DIR/chats/chat_resume.md"; do
  if [[ -f "$DOC" ]]; then
    sed -i '' "s/${PREV_DAY_DIR}/${NEW_DAY_DIR}/g" "$DOC"
  fi
done

echo "Created: $NEW_DAY_DIR (from $PREV_DAY_DIR)"
