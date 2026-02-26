# day031 → day032 引き継ぎ（chat_resume.md）

## 0. 引き継ぎの前提（最重要）
- Day031は、Figmaスクショ準拠のパーソナルトレーニングLP初稿を静的実装で完了
- クライアント確定要件（訴求・導線・安心文言・運用条件）を反映済み
- 主要CVは `無料カウンセリング予約`、副次CVは `無料PDFリード獲得`
- Lighthouseは Best Practices に改善余地ありだが、初稿提出可の判断をユーザー確認済み
- クライアント全要望とこちらの約束事項は `/Users/yuuki/Works/lp-100/day031/CLIENT_REQUESTS_AND_COMMITMENTS.md` に全量整理済み

---

## 1. Day031で完了したこと
- LP再構築
  - `index.html` / `styles.css` / `script.js` で1ページLPを実装
  - 主要セクションをスクショに合わせて再現
- 素材反映
  - 4枚写真（`01_profile` / `02_session` / `03_stretch` / `04_online`）を全使用
  - 画像表示比率・トリミングを調整
- 画像最適化
  - `images/optimized/*.webp` を生成
  - `srcset/sizes` + `image-set` を導入
- 導線/計測
  - 予約CTAを `.js-reservation-link` へ統一
  - TimeRex URLとUTM付与を一元管理
  - PDFフォーム送信後サンクスUI + DL導線を実装
  - GA4 / Meta Pixel / UTM 計測を実装
- 運用/法務
  - `privacy.html` / `tokushoho.html` を追加
  - `REQUIREMENTS_CONFIRMED.md` / `TIMEREX_REMINDER_SETUP.md` を整備
- スクショ命名統一
  - `day031PC.png` / `day031PCFV.png` / `day031SP.png` / `day031SPFV.png`

---

## 2. 現在の正本ファイル（必ずここを使う）
- LP本体
  - `/Users/yuuki/Works/lp-100/day031/index.html`
  - `/Users/yuuki/Works/lp-100/day031/styles.css`
  - `/Users/yuuki/Works/lp-100/day031/script.js`
- 要件/運用メモ
  - `/Users/yuuki/Works/lp-100/day031/REQUIREMENTS_CONFIRMED.md`
  - `/Users/yuuki/Works/lp-100/day031/TIMEREX_REMINDER_SETUP.md`
- 法務
  - `/Users/yuuki/Works/lp-100/day031/privacy.html`
  - `/Users/yuuki/Works/lp-100/day031/tokushoho.html`
- PDF
  - `/Users/yuuki/Works/lp-100/day031/downloads/food-checklist.pdf`
- 確認用スクショ
  - `/Users/yuuki/Works/lp-100/day031/day031PC.png`
  - `/Users/yuuki/Works/lp-100/day031/day031PCFV.png`
  - `/Users/yuuki/Works/lp-100/day031/day031SP.png`
  - `/Users/yuuki/Works/lp-100/day031/day031SPFV.png`

---

## 3. 既定設定（初稿時点）
- `window.LP_CONFIG.reservationUrl`
  - `https://timerex.net/s/bodymake_tokyo_yuta`
- `window.LP_CONFIG.leadEndpoint`
  - `https://formsubmit.co/ajax/contact@bodymake-yuta.com`
- `window.LP_CONFIG.gaMeasurementId`
  - `G-CQB0QSMF7F`
- `window.LP_CONFIG.metaPixelId`
  - `871190680965123`

---

## 4. Day032でやること（優先順）
1. クライアント提出文面はLighthouse言及なしで送付
2. クライアントFB反映後、余白/導線/文言の最終調整
3. 公開前チェック（本番URL差し替え、フォーム送信テスト、最終計測テスト）

---

## 5. Day032で対応済み（2026-02-26）
- 無料PDF差し替え完了
  - `downloads/food-checklist.pdf` を新規日本語チェックリストPDFへ置換
  - 参照元として `downloads/food-checklist-source.txt` を追加（再生成しやすいよう保存）
- 価格セクション再構成完了（価格据え置き）
  - 対象: `index.html` の pricing セクション
  - 変更方針: 「価値/安心材料 → 料金提示 → 無料相談CTA」
  - `強引な勧誘なし / 合わなければ断ってOK / 開始前キャンセル全額返金 / 分割可` を価格近傍に再配置
  - 価格は `¥297,000`、分割は `月々 ¥99,000 × 3回` を維持
- スタイル調整完了
  - 対象: `styles.css`
  - pricing専用の新規クラスとレスポンシブ補正を追加（PC/SP崩れ回避）
- 導線確認
  - `index.html` と `script.js` のPDF参照先は従来どおり `./downloads/food-checklist.pdf`
