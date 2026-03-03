# Day037 WordPress PDFフォーム差し替え手順

## 目的
- 初回公開前に、PDFフォームへ `reCAPTCHA` 注記を反映する。
- すぐ貼り付けできるように、差し替え元ファイルを固定する。

## 貼り付け元ファイル
- 基本:
  - `/Users/yuuki/Works/lp-100/day037/PDF_FORM_RECAPTCHA_NOTE_OWNER_EMAIL.html`
- 仮受信先ではなく公開用メールへ戻す場合:
  - `action="https://formsubmit.co/yuki.freelife@gmail.com"` を
    `action="https://formsubmit.co/contact@bodymake-yuta.com"` に置き換えてから貼る

## WordPressでの反映手順
1. `https://yuki-freelife.com/lp-review/wp-admin/` を開く
2. `固定ページ` を開く
3. LP本体の固定ページを `編集` する
4. PDFセクションの現在の `<form class="pdf-form" ...>` から `</form>` までを選択する
5. その範囲を削除する
6. `/Users/yuuki/Works/lp-100/day037/PDF_FORM_RECAPTCHA_NOTE_OWNER_EMAIL.html` の内容を貼る
7. 受信先を公開用メールへ戻す場合だけ、貼り付け前または貼り付け後に `action` を差し替える
8. `更新` を押す

## 更新後に見るポイント
1. フォーム下に
   `送信後に確認画面（ロボットチェック）が表示されます。`
   の文言が表示されている
2. 送信ボタン文言が `無料PDFを受け取る` のまま
3. レイアウト崩れがない

## 次の確認
1. 予約CTAが TimeRex に遷移する
2. PDFフォーム送信後、確認画面を経てPDFへ到達する
3. FAQが常時表示のまま読める
4. 法務ページリンクが開く
