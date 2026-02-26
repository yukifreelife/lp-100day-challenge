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

---

## 4. クライアントFB反映（次稿）
- FV
  - 「忙しい社会人・運動初心者向け」要素を1行追加
- 料金
  - 税込表記を明示
  - 分割方法（銀行振込月払い / クレジットカード分割）と詳細案内の追記
  - 「含まれる内容」の見出しを強調
- CTA
  - 無料カウンセリングを主導線に寄せる文脈へ調整
  - PDF送信完了後にも無料カウンセリングCTAを追加
- PDF
  - セクション2の行間を調整
  - 末尾連絡先を「LP内の無料カウンセリング導線」へ統一
- 運用資料
  - `CLIENT_README.txt` を追加し、更新箇所一覧とTimeRex完了計測の現状を明記

---

## 5. PDF編集運用の再構成（2026-02-26）
- 方針変更:
  - 内容確定まではPDFを都度作らず、ドラフト原本を編集する運用へ切り替え
- 追加ファイル:
  - `/Users/yuuki/Works/lp-100/day032/downloads/draft/food-checklist-draft.html`
  - `/Users/yuuki/Works/lp-100/day032/downloads/draft/food-checklist-draft.css`
  - `/Users/yuuki/Works/lp-100/day032/downloads/draft/README.txt`
  - `/Users/yuuki/Works/lp-100/day032/scripts/export_food_checklist_pdf.sh`
- クライアントPDF修正依頼の反映先:
  - セクション2の行間調整: `food-checklist-draft.html`
  - 末尾連絡先統一: `food-checklist-draft.html`

---

## 6. rev3反映（2026-02-26）
- 料金安心材料の文言調整
  - 旧: 「開始前キャンセル全額返金」
  - 新: 「返金対応は規約に基づきます（詳細は無料カウンセリングで案内）」
- サポート説明の現実運用寄せ
  - 旧: 「24時間以内返信」
  - 新: 「原則24時間以内返信」
- 会場費用の断定を回避
  - 旧: 「ジム利用料は別途かかりません」
  - 新: 「セッション場所により別途費用が発生する場合あり（事前案内）」
- キャンセル/日程変更ルール統一
  - 統一文: 「前日18:00まで変更可。当日キャンセルは原則不可（やむを得ない事情はご相談ください）」
  - 反映先: `index.html`（本文/FAQ）, `TIMEREX_REMINDER_SETUP.md`（推奨文面）

---

## 7. 公開準備追記（2026-02-26）
- クライアント要望に応じて `CLIENT_README.txt` を更新
  - 追加: 「公開後運用チェックリスト」
  - 範囲:
    - TimeRex側設定（予約枠/文言/予約完了計測の外部設定）
    - GA4 / Meta ID確認（イベント受信・発火確認）
    - UTM運用（付与項目・引き継ぎ確認・命名ルール固定）

---

## 8. 納品形態の方針整理（2026-02-26 終了時点）
- クライアント自己運用の難易度を踏まえ、最終納品形態は「提案ベースで選択」に変更
  - A: ZIP納品（現行維持）
  - B: WordPress納品（運用/引き継ぎ優先の推奨案）
- クライアントからの追加情報
  - 独自ドメイン未取得（`.com` / `.jp` 希望）
  - 公開先は推奨案に任せたい意向
  - 更新頻度は月1回程度（文言修正・画像差し替え中心）
- 技術判断メモ
  - LPでも公開にはホスティングが必須
  - ZIPのみ納品は確認/更新の自己運用ハードルが高い
  - 継続保守なし前提では、第三者へ引き継ぎやすいWordPress運用が有力
- 次回着手ポイント
  - クライアントにA/Bの最終選択を確認
  - WordPress確定時は移行スコープと公開手順を具体化
