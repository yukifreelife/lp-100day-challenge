#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

DRAFT_TXT="${ROOT_DIR}/downloads/draft/food-checklist-draft.txt"
SNAPSHOT_TXT="${ROOT_DIR}/downloads/food-checklist-source.txt"
OUTPUT_PDF="${ROOT_DIR}/downloads/food-checklist.pdf"

if [[ "${1:-}" == "--dry-run" ]]; then
  echo "draft:    ${DRAFT_TXT}"
  echo "snapshot: ${SNAPSHOT_TXT}"
  echo "output:   ${OUTPUT_PDF}"
  exit 0
fi

if [[ ! -f "${DRAFT_TXT}" ]]; then
  echo "ERROR: Draft file not found: ${DRAFT_TXT}" >&2
  exit 1
fi

if ! command -v cupsfilter >/dev/null 2>&1; then
  echo "ERROR: cupsfilter not found. Install/enable CUPS utilities." >&2
  exit 1
fi

cp "${DRAFT_TXT}" "${SNAPSHOT_TXT}"
cupsfilter -i text/plain "${SNAPSHOT_TXT}" > "${OUTPUT_PDF}"

echo "OK: Exported ${OUTPUT_PDF}"
