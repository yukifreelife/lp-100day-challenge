#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

DRAFT_HTML="${ROOT_DIR}/downloads/draft/food-checklist-draft.html"
OUTPUT_PDF="${ROOT_DIR}/downloads/food-checklist.pdf"
CHROME_BIN="${CHROME_BIN:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
INPUT_URL="file://${DRAFT_HTML}"

if [[ "${1:-}" == "--dry-run" ]]; then
  echo "draft:    ${DRAFT_HTML}"
  echo "output:   ${OUTPUT_PDF}"
  echo "chrome:   ${CHROME_BIN}"
  exit 0
fi

if [[ ! -f "${DRAFT_HTML}" ]]; then
  echo "ERROR: Draft HTML not found: ${DRAFT_HTML}" >&2
  exit 1
fi

if [[ ! -x "${CHROME_BIN}" ]]; then
  echo "ERROR: Chrome binary not found: ${CHROME_BIN}" >&2
  exit 1
fi

"${CHROME_BIN}" \
  --headless \
  --disable-gpu \
  --no-first-run \
  --no-default-browser-check \
  --print-to-pdf-no-header \
  --virtual-time-budget=3000 \
  --print-to-pdf="${OUTPUT_PDF}" \
  "${INPUT_URL}"

echo "OK: Exported ${OUTPUT_PDF}"
