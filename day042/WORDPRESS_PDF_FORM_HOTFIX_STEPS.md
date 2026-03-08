# Day040 - PDFフォーム no-JS ホットフィックス手順

## 目的
- `JSなし公開優先` の運用方針に合わせて、PDFフォームを `FormSubmit` の通常POST版へ戻す。
- 追加3点反映後の見た目は維持したまま、PDF導線の送信を成立させる。
- 最新の全文HTML正本をこれから貼り替える場合は、この手順は不要。

## 背景
- `day040` の全体HTML正本を確認したところ、PDFフォームが `action="#"` のJS依存構造に戻っていた。
- Day035-037 の運用判断では、`WPCode Lite` の `Forbidden access` 回避のため、PDFフォームは no-JS の `FormSubmit` 版を正本とする前提だった。
- そのため、待機時間を使って `day040` の正本を no-JS 運用へ整合させた。

## 貼り付け元ファイル
- PDFフォーム差し替え用:
  `/Users/yuuki/Works/lp-100/day042/PDF_FORM_RECAPTCHA_NOTE_OWNER_EMAIL.html`
- 全体HTML正本:
  `/Users/yuuki/Works/lp-100/day042/TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html`

## この手順を使う場面
- すでに古い `day040` HTML を WordPress に貼っていて、PDFフォーム部分だけ差し替えたいとき
- 全文貼り替えではなく、PDFセクションだけ最小差分で更新したいとき

## WordPressでの反映手順
1. LP本体の固定ページを開く
2. PDFセクションの現在の `<form class="pdf-form" ...>` から `</form>` までを選択する
3. その範囲を削除する
4. `/Users/yuuki/Works/lp-100/day042/PDF_FORM_RECAPTCHA_NOTE_OWNER_EMAIL.html` の内容を貼る
5. もし直下に `pdf-success` ブロックが残っていれば、その `<div class="pdf-success" ...>` から `</div>` まで削除する
6. `更新` を押す

## 更新後に見るポイント
1. フォーム送信後、確認画面（ロボットチェック）を経て PDF が開く
2. 案内メールが1通届く
3. PDFセクションの見た目が崩れていない
4. 予約CTAや他セクションの表示に影響がない

## 補足
- 受信先は現行運用どおり `yuki.freelife@gmail.com` のままにしている。
- 将来 JS 注入経路が復旧した場合は、UTM引き継ぎや LP 内完結の完了表示を Phase2 で再導入する。
