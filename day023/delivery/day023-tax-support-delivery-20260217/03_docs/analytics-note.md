# 計測まわり確認メモ（簡易）

## 現状
- LP内にGA4/Googleタグの追加スクリプトは埋め込んでいません。
- WordPressサイト側に既存タグ（GTM/gtag.js）が設定されている前提で運用可能です。

## CTA計測を追加したい場合（任意）
- 対象CTA:
  - `#cta-request .btn`
  - `#cta-consult .btn`
  - FV内 `.cta-row .btn`
- 推奨イベント名（例）:
  - `lp_cta_request_click`
  - `lp_cta_consult_click`

## 実装方針（どちらか）
1. GTM側でCSSセレクタクリックトリガーを設定（LPコード変更なし）
2. LP側に `data-cta` 属性を付与してイベント識別を明確化
