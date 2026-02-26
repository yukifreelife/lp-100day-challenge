# Day032 - 3か月ボディメイク伴走LP（初稿提出用）

## ラベル（検索用）
**Labels:** `lp` `html` `css` `javascript` `leadgen` `timerex` `ga4` `meta-pixel` `day032`

lp:audience=20代後半-40代前半（女性中心、男性も含む）
lp:goal=無料カウンセリング予約 + 無料PDFリード獲得
lp:industry=パーソナルトレーニング
lp:objective=初稿提出可能な静的LP一式
lp:offer=3か月ボディメイク伴走プログラム
lp:status=submission-ready
lp:env=static-html-css-js

---

## 提出状態（2026-02-26）
- 初稿提出: 可能
- 価格: 固定（`¥297,000` / `月々 ¥99,000 × 3回`）
- 予約導線: TimeRex導線実装済み
- 計測: GA4 / Meta Pixel / UTM 実装済み
- 法務: `privacy.html` / `tokushoho.html` 配置済み
- 無料PDF: `downloads/food-checklist.pdf` を正本として配置

---

## 主要成果物（提出対象）
- LP本体
  - `/Users/yuuki/Works/lp-100/day032/index.html`
  - `/Users/yuuki/Works/lp-100/day032/styles.css`
  - `/Users/yuuki/Works/lp-100/day032/script.js`
- 法務ページ
  - `/Users/yuuki/Works/lp-100/day032/privacy.html`
  - `/Users/yuuki/Works/lp-100/day032/tokushoho.html`
- 無料PDF
  - `/Users/yuuki/Works/lp-100/day032/downloads/food-checklist.pdf`
- 仕様・引き継ぎメモ
  - `/Users/yuuki/Works/lp-100/day032/CLIENT_REQUESTS_AND_COMMITMENTS.md`
  - `/Users/yuuki/Works/lp-100/day032/REQUIREMENTS_CONFIRMED.md`
  - `/Users/yuuki/Works/lp-100/day032/chats/chat_resume.md`

---

## 現在の設定値
`index.html` 内 `window.LP_CONFIG`:
- `reservationUrl`: `https://timerex.net/s/bodymake_tokyo_yuta`
- `leadEndpoint`: `https://formsubmit.co/ajax/contact@bodymake-yuta.com`
- `gaMeasurementId`: `G-CQB0QSMF7F`
- `metaPixelId`: `871190680965123`
- `pdfDownloadUrl`: `./downloads/food-checklist.pdf`

---

## 運用メモ
- クライアント連絡文には Lighthouse の記載を含めない。
- 旧 `day032/download.pdf` は提出対象外（削除済み）。
- PDF導線の正本は `downloads/food-checklist.pdf` のみ。

---

## PDF運用（ドラフト先行）
- 内容確定までは、PDFを直接編集しない。
- 編集原本:
  - `/Users/yuuki/Works/lp-100/day032/downloads/draft/food-checklist-draft.html`
  - `/Users/yuuki/Works/lp-100/day032/downloads/draft/food-checklist-draft.css`
- 仮デザイン確認:
  - `/Users/yuuki/Works/lp-100/day032/downloads/draft/food-checklist-draft.html`
- 最終PDF変換（内容/デザイン確定後のみ実行）:
```bash
cd /Users/yuuki/Works/lp-100/day032
./scripts/export_food_checklist_pdf.sh
```
- 変換結果:
  - `downloads/food-checklist.pdf`
- 補足:
  - `downloads/food-checklist-source.txt` はテキスト版の参考スナップショット

---

## 次稿反映（2026-02-26）
- FVに「忙しい社会人・運動初心者向け」要素を追記
- 料金セクションに税込明記、分割方法、詳細案内文を追記
- CTAバランスを調整し、無料カウンセリングを主導線として強化
- PDF送信完了後の予約CTAを追加
- 無料PDFの行間と末尾連絡先文言を微修正
- `CLIENT_README.txt` を追加（更新箇所一覧と計測運用メモ）

---

## ローカル確認コマンド
```bash
cd /Users/yuuki/Works/lp-100/day032
python3 -m http.server 8032
```
`http://localhost:8032` を開いて確認。
