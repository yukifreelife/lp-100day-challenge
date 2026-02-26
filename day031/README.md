# Day031 - 3か月ボディメイク伴走LP（静的再構築）

## ラベル（検索用）
**Labels:** `lp` `html` `css` `javascript` `figma-rebuild` `leadgen` `timerex` `ga4` `meta-pixel` `day031`

lp:audience=20代後半-40代前半（女性中心、男性も含む）
lp:goal=無料カウンセリング予約 + 無料PDFリード獲得
lp:industry=パーソナルトレーニング
lp:objective=Figmaスクショ準拠で初稿共有できるLP実装
lp:offer=3か月ボディメイク伴走プログラム
lp:template=original-day031
lp:status=first-draft-ready
lp:env=static-html-css-js

---

## 今日の成果
- Day031の目的:
  - クライアント確定要件を満たす初稿LPを、スクショ準拠で共有可能状態にする
- 実施内容:
  - LP本体の再構築
    - 主要セクション（FV / 悩み / 理由 / 内容 / 実績 / 料金 / カウンセリング / 安心材料 / FAQ / CTA / PDF / Footer）を実装
    - PC/SP双方でのレイアウト崩れを調整
  - 画像対応
    - 提供4枚（`01/02/03/04`）を指定箇所に反映
    - `images/optimized/*.webp` を生成し、`srcset/sizes` / `image-set` を導入
  - 導線実装
    - 予約CTAを `.js-reservation-link` へ統一
    - TimeRex遷移先を `window.LP_CONFIG` で一元管理
    - PDFフォームで名前+メール取得、送信後サンクス表示とDL導線を実装
  - 計測実装
    - UTM保持と予約リンクへの自動付与
    - GA4 / Meta Pixel の任意読込とイベント送信
  - 運用/法務整備
    - `privacy.html` / `tokushoho.html` を追加
    - TimeRex前日リマインド運用メモを追加
  - スクリーンショット命名統一
    - `day031PC.png` / `day031PCFV.png` / `day031SP.png` / `day031SPFV.png`

---

## 作業時間（記録）
- 要件整理・原稿反映: 58分
- LP実装・レスポンシブ調整: 154分
- 画像最適化・配置調整: 76分
- 導線/計測/フォーム実装: 101分
- 最終調整・ドキュメント整備: 39分
- 合計: 428分（約7時間8分）

---

## 主要成果物
- LP本体
  - `/Users/yuuki/Works/lp-100/day031/index.html`
  - `/Users/yuuki/Works/lp-100/day031/styles.css`
  - `/Users/yuuki/Works/lp-100/day031/script.js`
- 要件・運用メモ
  - `/Users/yuuki/Works/lp-100/day031/REQUIREMENTS_CONFIRMED.md`
  - `/Users/yuuki/Works/lp-100/day031/TIMEREX_REMINDER_SETUP.md`
- 法務ページ
  - `/Users/yuuki/Works/lp-100/day031/privacy.html`
  - `/Users/yuuki/Works/lp-100/day031/tokushoho.html`
- 画像素材
  - `/Users/yuuki/Works/lp-100/day031/images/`
  - `/Users/yuuki/Works/lp-100/day031/images/optimized/`
- 無料PDF
  - `/Users/yuuki/Works/lp-100/day031/downloads/food-checklist.pdf`
- スクリーンショット（命名統一済み）
  - `/Users/yuuki/Works/lp-100/day031/day031PC.png`
  - `/Users/yuuki/Works/lp-100/day031/day031PCFV.png`
  - `/Users/yuuki/Works/lp-100/day031/day031SP.png`
  - `/Users/yuuki/Works/lp-100/day031/day031SPFV.png`

---

## 現在の設定値
`index.html` 内 `window.LP_CONFIG`:
- `reservationUrl`: `https://timerex.net/s/bodymake_tokyo_yuta`
- `leadEndpoint`: `https://formsubmit.co/ajax/contact@bodymake-yuta.com`
- `gaMeasurementId`: `G-CQB0QSMF7F`
- `metaPixelId`: `871190680965123`
- `pdfDownloadUrl`: `./downloads/food-checklist.pdf`

---

## 動作コマンド
```bash
cd /Users/yuuki/Works/lp-100/day031
python3 -m http.server 8031
```
`http://localhost:8031` を開いて確認。

---

## 次回やること（Day032）
1. クライアントFBを反映して文言・優先CTAの最終調整
2. Lighthouse Best Practicesの改善対応
3. 本番用のTimeRex/計測ID/送信先の最終確認と公開準備

---

## Day032 追加対応（2026-02-26）
- 無料PDF差し替え
  - `/Users/yuuki/Works/lp-100/day031/downloads/food-checklist.pdf` を新規作成PDFへ置換
  - タイトルを「初心者でも続く 食事管理チェックリスト（3か月ボディメイク用）」に変更
  - 参照元テキストとして `/Users/yuuki/Works/lp-100/day031/downloads/food-checklist-source.txt` を追加
- 価格セクション再構成（価格据え置き）
  - `index.html` の pricing を「価値/安心材料 → 料金提示 → 無料相談導線」に再設計
  - `強引な勧誘なし / 合わなければ断ってOK / 開始前キャンセル全額返金 / 分割可` を価格文脈の近くへ配置
  - 価格は `¥297,000`、分割は `月々 ¥99,000 × 3回` のまま維持
- スタイル調整
  - `styles.css` に pricing 用の新レイアウト（contextカード、安心訴求リスト、CTAエリア）を追加
  - PC/SP両対応のため `@media (max-width: 900px)` と `@media (max-width: 640px)` を補正
- 導線確認
  - `window.LP_CONFIG.pdfDownloadUrl`、PDFダウンロードリンク、`script.js` の参照先はいずれも `./downloads/food-checklist.pdf` を維持
