# day032 引き継ぎメモ（提出直前版）

## 0. 現在地
- Day032はクライアント向け初稿提出フェーズ。
- 主要CVは `無料カウンセリング予約`、副次CVは `無料PDFリード獲得`。
- 価格は固定: `¥297,000` / `月々 ¥99,000 × 3回`。
- クライアント連絡文では Lighthouse に触れない方針。

---

## 1. Day032で反映済み
- 無料PDF差し替え
  - `downloads/food-checklist.pdf` を正本として配置
  - Lighthouse由来PDFは廃止
- 価格セクション再構成
  - 「価値/安心材料 → 料金提示 → 無料相談CTA」に変更
  - `強引な勧誘なし / 合わなければ断ってOK / 開始前キャンセル全額返金 / 分割可` を価格近傍へ配置
- 導線/計測/法務
  - TimeRex導線、PDFフォーム、GA4/Meta/UTM 実装済み
  - `privacy.html` / `tokushoho.html` 配置済み

---

## 2. 現在の正本ファイル
- LP本体
  - `/Users/yuuki/Works/lp-100/day032/index.html`
  - `/Users/yuuki/Works/lp-100/day032/styles.css`
  - `/Users/yuuki/Works/lp-100/day032/script.js`
- 法務
  - `/Users/yuuki/Works/lp-100/day032/privacy.html`
  - `/Users/yuuki/Works/lp-100/day032/tokushoho.html`
- PDF
  - `/Users/yuuki/Works/lp-100/day032/downloads/food-checklist.pdf`
- 仕様メモ
  - `/Users/yuuki/Works/lp-100/day032/CLIENT_REQUESTS_AND_COMMITMENTS.md`
  - `/Users/yuuki/Works/lp-100/day032/REQUIREMENTS_CONFIRMED.md`
  - `/Users/yuuki/Works/lp-100/day032/TIMEREX_REMINDER_SETUP.md`

---

## 3. 注意点
- `day032/download.pdf` は見た目不良の旧PDFのため削除済み（提出対象外）。
- PDF導線の参照先は `./downloads/food-checklist.pdf` に統一済み。
- 次工程はクライアント初稿提出とFB待ち。
