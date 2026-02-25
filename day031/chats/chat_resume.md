# day031 → day032 引き継ぎ（chat_resume.md）

## 0. 引き継ぎの前提（最重要）
- Day031は、Figmaスクショ準拠のパーソナルトレーニングLP初稿を静的実装で完了
- クライアント確定要件（訴求・導線・安心文言・運用条件）を反映済み
- 主要CVは `無料カウンセリング予約`、副次CVは `無料PDFリード獲得`
- Lighthouseは Best Practices に改善余地ありだが、初稿提出可の判断をユーザー確認済み

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

## 4. Day032でやること
1. クライアントFBを反映して、文言・優先導線・余白を最終調整
2. Lighthouse Best Practicesの改善（外部スクリプト/セキュリティ関連の見直し）
3. 公開前チェック（本番URL差し替え、フォーム送信テスト、最終計測テスト）
