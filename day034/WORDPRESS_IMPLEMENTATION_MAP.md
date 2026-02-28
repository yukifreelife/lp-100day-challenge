# Day034 WordPress実装マップ

作成日: 2026-02-28  
目的: WordPressへログインでき次第、静的LPを迷わず移植できるようにする

## 1. 移行元の正本
- HTML: `/Users/yuuki/Works/lp-100/day034/source/index.html`
- CSS: `/Users/yuuki/Works/lp-100/day034/source/styles.css`
- JS: `/Users/yuuki/Works/lp-100/day034/source/script.js`
- PDF: `/Users/yuuki/Works/lp-100/day034/source/downloads/food-checklist.pdf`
- 画像: `/Users/yuuki/Works/lp-100/day034/source/images/`

## 2. ページ構成（トップLP）
- `#top`: FV
- `#problem`: 悩み訴求
- `#reason`: 選ばれる理由
- `#support`: プログラム内容
- `#results`: 実績
- `#pricing`: 料金
- `#counseling`: 無料カウンセリング案内
- `#assurance`: 安心材料
- `#faq`: FAQ
- `#cta`: 最終CTA
- `#pdf`: PDF獲得フォーム
- footer: お問い合わせ / 法務導線 / 免責

## 3. 先に決めること
1. 移行先に使う固定ページ
   - 第一候補: 既存の `WP固定ページ納品用`
   - 使いにくければ、新規固定ページを作成
2. 法務ページの扱い
   - `privacy` 用固定ページ
   - `tokushoho` 用固定ページ
3. メディア配置先
   - 画像はメディアライブラリ
   - PDFもメディアライブラリ

## 4. WordPress側で差し替えるパス
### 画像
- 現状は `./images/...` 参照
- WordPressではメディアライブラリURLへ差し替える

### PDF
- 現状は `./downloads/food-checklist.pdf`
- WordPressではアップロード後のPDF URLへ差し替える

### 法務リンク
- 現状は `./privacy.html` / `./tokushoho.html`
- WordPressでは固定ページURLへ差し替える

### スクリプト参照
- 現状は末尾で `./script.js`
- WordPressでは以下のどちらかで対応
  - ヘッダー/フッター用コード挿入
  - 固定ページ本文下部のHTMLブロック

## 5. 設定値（維持必須）
`window.LP_CONFIG`:
- `reservationUrl`: `https://timerex.net/s/bodymake_tokyo_yuta`
- `pdfDownloadUrl`: `./downloads/food-checklist.pdf`
- `leadEndpoint`: `https://formsubmit.co/ajax/contact@bodymake-yuta.com`
- `gaMeasurementId`: `G-CQB0QSMF7F`
- `metaPixelId`: `871190680965123`

WordPress移行時は、`pdfDownloadUrl` のみメディアURLへ更新する想定。

## 6. 予約導線（維持必須）
- `.js-reservation-link` は複数箇所に存在
- 確認済みの主要CTA:
  - FV
  - カウンセリング案内
  - 最終CTA
  - PDFセクション上部
  - PDF送信完了後CTA

移行後も、すべて同じ TimeRex URL へ遷移すること。

## 7. PDFフォーム（維持必須）
- フォームクラス: `.pdf-form`
- 送信先: `formsubmit.co`
- hidden項目:
  - `_subject`
  - `_template`
  - `_captcha`
  - `_autoresponse`
  - `source_page`
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `utm_content`
  - `utm_term`

移行後も、以下が動くこと:
- フォーム送信
- 送信完了時の `.pdf-success` 表示
- PDFダウンロードリンク
- 送信後の無料カウンセリングCTA

## 8. 計測（維持必須）
### GA4
- 初期化: `gaMeasurementId`
- イベント:
  - `select_counseling_cta`
  - `generate_lead`

### Meta Pixel
- 初期化: `metaPixelId`
- イベント:
  - `PageView`
  - `SelectCounselingCTA`
  - `Lead`

### UTM
- localStorageキー: `lp_utm`
- 予約URLへ UTM 引き継ぎ
- PDFフォーム hidden 項目へ投入

## 9. ログイン後の実行順
1. 固定ページの編集対象を確定
2. 画像とPDFをメディアライブラリへアップロード
3. トップLP本文を移植
4. 法務ページ2枚を作成または更新
5. CSSを適用
6. JSと `window.LP_CONFIG` を適用
7. 画像URL・PDF URL・法務リンクを実URLへ差し替え
8. 予約導線とPDFフォームをテスト
9. GA4 / Meta / UTM を確認

## 10. 現時点のブロッカー
- day034内の素材は揃っている
- 実作業では、画像URL・PDF URL・法務ページURLの差し替え漏れに注意する
