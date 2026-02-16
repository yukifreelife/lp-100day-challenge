#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
INDEX_FILE="$ROOT_DIR/index.html"
STYLES_FILE="$ROOT_DIR/styles.css"
OUTPUT_FILE="$ROOT_DIR/wp-custom-html-block.html"
WP_BASE_URL_DEFAULT="https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02"
WP_BASE_URL_INPUT="${1:-${WP_BASE_URL:-$WP_BASE_URL_DEFAULT}}"
WP_BASE_URL="${WP_BASE_URL_INPUT%/}"

if [[ ! -f "$INDEX_FILE" || ! -f "$STYLES_FILE" ]]; then
  echo "Error: index.html or styles.css was not found." >&2
  exit 1
fi

if [[ "$WP_BASE_URL" != https://* && "$WP_BASE_URL" != http://* ]]; then
  echo "Error: WP_BASE_URL must start with http:// or https://" >&2
  echo "Usage: ./scripts/build-wp-custom-html.sh https://example.com/wp-content/uploads/2026/02" >&2
  exit 1
fi

extract_body() {
  awk '
    /<body[ >]/ {in_body = 1; next}
    /<\/body>/ {in_body = 0}
    in_body {print}
  ' "$INDEX_FILE"
}

replace_asset_urls() {
  sed \
    -e "s|images/hero-office-minimal\.webp|$WP_BASE_URL/hero-office-minimal.webp|g" \
    -e "s|images/section-office-consulting\.webp|$WP_BASE_URL/section-office-consulting.webp|g" \
    -e "s|images/section-divider-wave\.webp|$WP_BASE_URL/section-divider-wave.webp|g" \
    -e "s|images/icon-compass\.webp|$WP_BASE_URL/icon-compass.webp|g" \
    -e "s|images/icon-checklist\.webp|$WP_BASE_URL/icon-checklist.webp|g" \
    -e "s|images/icon-chat\.webp|$WP_BASE_URL/icon-chat.webp|g" \
    -e "s|images/icon-shield\.webp|$WP_BASE_URL/icon-shield.webp|g" \
    -e "s|images/bg-abstract-sage\.webp|$WP_BASE_URL/bg-abstract-sage.webp|g"
}

wp_css="$(replace_asset_urls < "$STYLES_FILE")"
wp_body="$(extract_body | replace_asset_urls)"

cat > "$OUTPUT_FILE" <<'HEADER'
<!--
  ============================================================
  WordPress カスタムHTMLブロック用ファイル（自動生成）
  ============================================================
  source: index.html + styles.css
  regenerate: ./scripts/build-wp-custom-html.sh <WP_BASE_URL>
             or WP_BASE_URL=<WP_BASE_URL> ./scripts/build-wp-custom-html.sh

  画像URLは WordPress メディアURL に置換済みです。
  例: https://example.com/wp-content/uploads/2026/02
  ============================================================
-->
<style>
HEADER

printf '%s\n' "$wp_css" >> "$OUTPUT_FILE"

cat >> "$OUTPUT_FILE" <<'MIDDLE'
</style>

MIDDLE

printf '%s\n' "$wp_body" >> "$OUTPUT_FILE"

echo "Generated: $OUTPUT_FILE"
echo "WP_BASE_URL: $WP_BASE_URL"
