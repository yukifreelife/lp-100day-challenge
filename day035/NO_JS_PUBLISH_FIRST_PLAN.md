# Day035 - JSなし公開優先プラン

## 目的
- クライアントに ConoHa 側の操作を依頼せず、WordPress管理画面だけで初回公開を成立させる。
- 予約導線を最優先で維持し、LP本文と法務ページをそのまま公開できる状態にする。
- カスタムJS前提だった機能は、停止または WordPress 標準操作で代替する。

## 使う既存素材
- FAQ常時表示用CSS: `/Users/yuuki/Works/lp-100/day034/FAQ_NOJS_FALLBACK_CSS.css`
- PDFフォーム差し替え用HTML: `/Users/yuuki/Works/lp-100/day034/PDF_FORM_NOJS_REPLACEMENT.html`
- 正本HTML: `/Users/yuuki/Works/lp-100/day034/source/index.html`
- 正本CSS: `/Users/yuuki/Works/lp-100/day034/source/styles.css`

## 機能ごとの着地
### 1. 予約CTA
- 既存の `href="https://timerex.net/s/bodymake_tokyo_yuta"` をそのまま使う。
- `.js-reservation-link` クラスは残っていても支障はない。
- UTM自動引き継ぎは初回公開では行わない。

### 2. FAQ
- JSアコーディオンをやめ、全回答を常時表示にする。
- 追加CSSへ `FAQ_NOJS_FALLBACK_CSS.css` の内容を追記する。
- これで `.faq-answer` が閉じず、クリック不要のFAQ一覧として成立する。

### 3. PDF導線
- 現在のJS依存フォームを、`PDF_FORM_NOJS_REPLACEMENT.html` のフォームに差し替える。
- 送信先は `formsubmit.co` の通常POST。
- 送信後は `_next` でPDFへ直接遷移する。
- ページ内の `.pdf-success` 完了表示は初回公開では使わない。
- hidden の `utm_*` 項目は外れるため、PDF経由の詳細流入計測は初回公開では行わない。

### 4. GA4 / Meta Pixel
- `page_view` 以外のカスタムイベントは初回公開では保留する。
- `WPCode` 保存が塞がれているため、生のスクリプト挿入前提の導入は見送る。
- どうしても必要な場合だけ、第2フェーズで専用プラグイン導入を再検討する。

## WordPress管理画面での実作業
### A. FAQを常時表示にする
1. 左メニューの `外観`
2. `カスタマイズ`
3. `追加CSS`
4. 既存CSSの一番下へ、`FAQ_NOJS_FALLBACK_CSS.css` の内容を追記
5. `公開`

追記する内容:
```css
.faq-answer {
  max-height: none !important;
  overflow: visible !important;
}

.faq-button {
  cursor: default;
}

.faq-button:hover,
.faq-button:focus-visible {
  background: transparent;
}

.faq-mark {
  display: none;
}
```

### B. PDFフォームをJSなし版に置き換える
1. 左メニューの `固定ページ`
2. LP本体の固定ページを `編集`
3. PDFセクションの既存フォーム部分を探す
4. 現在の `<form class="pdf-form" action="#" method="post" novalidate>` から、`</form>` までを削除
5. 代わりに `PDF_FORM_NOJS_REPLACEMENT.html` の `<form ...> ... </form>` を貼る
6. 既存の `<div class="pdf-success" ...> ... </div>` は削除する
7. `更新`

仮案件で受信テストする場合:
- `FormSubmit` の受信先は一時的に `yuki.freelife@gmail.com` を使う
- クライアント運用へ戻す場合は、公開前に受信先をクライアントメールへ差し戻す

差し替えるフォーム:
```html
<form class="pdf-form" action="https://formsubmit.co/yuki.freelife@gmail.com" method="POST">
  <label for="pdf-name">お名前</label>
  <input id="pdf-name" name="name" type="text" placeholder="山田太郎" required />

  <label for="pdf-email">メールアドレス</label>
  <input id="pdf-email" name="email" type="email" placeholder="example@email.com" required />
  <input type="hidden" name="_subject" value="【LP】無料PDFダウンロード申込" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_autoresponse" value="無料PDFのお受け取りありがとうございます。以下URLからダウンロードできます。https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/food-checklist.pdf" />
  <input type="hidden" name="_next" value="https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/food-checklist.pdf" />

  <button class="btn btn-teal" type="submit">無料PDFを受け取る</button>
  <p class="hint">送信後、そのままPDFが開きます。入力したメールアドレスには案内メールも1通届きます。</p>
</form>
```

### C. 予約CTAはそのまま使う
1. LP本文内の各CTAリンクを確認する
2. `https://timerex.net/s/bodymake_tokyo_yuta` になっていれば、そのままでよい
3. 余計なJS設定は追加しない

## 初回公開で削る機能
- FAQの開閉アニメーション
- PDF送信後のページ内完了表示
- UTMの localStorage 保存
- 予約URLへのUTM自動引き継ぎ
- GA4 / Meta のカスタムイベント

## 初回公開で残る価値
- LP本文は読める
- 予約はできる
- PDFは受け取れる
- クライアントは WordPress で文言修正できる
- ConoHa やWAFの設定変更を依頼しなくてよい

## 公開前の確認項目
1. PC / SPでレイアウト確認
2. FAQの回答が全件見えているか確認
3. 予約CTAが TimeRex に飛ぶか確認
4. PDFフォーム送信後にPDFが開くか確認
5. 法務ページリンクが開くか確認

## 第2フェーズで再検討するもの
- UTM引き継ぎ
- GA4 / Meta カスタムイベント
- FAQを再度アコーディオン化するか
- PDF送信後のページ内サンクス表示
