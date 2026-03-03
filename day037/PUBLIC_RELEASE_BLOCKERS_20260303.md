# Day037 公開前ブロッカー整理（2026-03-03）

## 事実確認
- 確認日時: 2026-03-03
- トップURL:
  - `https://yuki-freelife.com/lp-review/`
  - 応答は `200`
  - ただし表示内容は LP 本体ではなく、WordPress テーマ初期トップ
- 固定ページ:
  - ID `36`: `WP固定ページ納品用`
  - ID `8`: `LP初稿（確認用）`
- 上記2ページはどちらも公開状態だが、ページ本文はパスワード保護されている
  - REST API: `content.protected: true`
  - 実ページ表示: `保護中: ...` のパスワード入力画面

## 影響
- 現時点では「予約できる・PDFが受け取れる・内容が読める」の公開状態には未到達
- クライアントへ送る最終確認用URLも、今のままではトップURLをそのまま案内できない
- PDFフォーム注記の反映だけでは不十分で、公開導線そのものの切り替えが必要

## 公開前に必要な対応
1. LPとして使う固定ページを1つに決める
   - 第一候補: ID `36` `WP固定ページ納品用`
2. その固定ページの本文に、注記入りPDFフォームを反映する
3. その固定ページのパスワード保護を解除する
4. 必要に応じて、`/lp-review/` のトップページ表示先をその固定ページに切り替える
5. 切り替え後に、実URLで
   - FAQ
   - 予約CTA
   - PDF導線
   - 法務リンク
   を確認する

## この環境だけでは止まる点
- WordPress管理画面の編集には `lpadmin` のログインに加え、`SiteGuard` のログインCAPTCHA通過が必要
- 管理画面の認証情報が手元にないため、ここから先の本番反映は未実施

## 次に触るファイル
- 注記入りフォーム:
  - `/Users/yuuki/Works/lp-100/day037/PDF_FORM_RECAPTCHA_NOTE_OWNER_EMAIL.html`
- 差し替え手順:
  - `/Users/yuuki/Works/lp-100/day037/WORDPRESS_PDF_FORM_UPDATE_STEPS.md`
- 公開実行手順:
  - `/Users/yuuki/Works/lp-100/day037/WORDPRESS_RELEASE_EXECUTION_STEPS.md`
