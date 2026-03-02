# Day036 - JSなし公開優先の継続とPDF導線の最終確定（2026-03-02）

## 現在地
- Day032の静的LP正本は完成済み、rev3修正も承認済み。
- Day033で納品形態は `B: WordPress納品` に確定済み。
- Day034で、WordPress上への本文移植、画像/PDF差し替え、法務ページURL反映、追加CSS反映まで進行済み。
- `WPCode Lite` 経由のカスタムスクリプト保存は `SiteGuard Lite` により `Forbidden access` で遮断されるため、初回公開は `JSなし公開優先` 方針に切り替え済み。

## Day035からの引き継ぎ
### 実施済み
- FAQは `追加CSS` に no-JS 用CSSを追記し、常時表示化した。
- PDFフォームは JS 依存版を外し、`formsubmit.co` の通常POSTフォームへ差し替えた。
- 予約CTAは既存の TimeRex 直リンクを維持した。
- `day035` のスクリーンショット4枚を命名規則に合わせて整理した。
- 仮案件として、`FormSubmit` の受信先はクライアントではなく作業者メールに切り替えて進める方針に変更した。

### 新しい主ブロッカー
- PDFフォーム送信後、PDFには遷移せず `FormSubmit` の `Check Your Email` 画面が表示される。
- これは不具合ではなく、`yuki.freelife@gmail.com` 宛の `FormSubmit` フォームも未アクティベートである限り、初回送信時は同様の画面になるため。
- そのため、現時点では「受信先を差し替えた上でアクティベーションを完了させること」が最優先になる。

## Day036の業務
1. WordPress 側のPDFフォームを、`/Users/yuuki/Works/lp-100/day036/PDF_FORM_NOJS_REPLACEMENT_OWNER_EMAIL.html` の内容に差し替える。
2. 初回送信を1回行い、`yuki.freelife@gmail.com` に `FormSubmit` のアクティベーションメールが届くか確認する。
3. メール確認できる場合は、`Activate Form` リンクを1回実行し、PDFフォームを再テストする。
4. メール確認できない場合は、PDFフォームを撤去し、PDF直リンクボタンへ切り替える。
5. どちらの分岐でも、公開ページで以下を確認する。
   - FAQが全件表示される
   - 予約CTAが TimeRex に遷移する
   - PDF導線が成立する
   - 法務ページリンクが開く
6. 本日の結果を `day036` に追記し、初回公開可否を判断する。

## 推奨方針
- 初回公開優先なら、`FormSubmit` のメール確認が難しい場合は「PDF直リンクボタン」へ切り替えるのが最も軽い。
- `WPCode Lite` や ConoHa 側の設定変更は引き続き触らない。
- UTM引き継ぎ、GA4 / Meta の詳細イベント、FAQアコーディオン復活は第2フェーズ扱いにする。

## 分岐A: FormSubmitを使い続ける
- 条件: `yuki.freelife@gmail.com` の受信確認ができる
- 作業:
  - `FormSubmit` のアクティベーションメールを開く
  - `Activate Form` リンクを押す
  - WordPress 側の現行フォームで再送信テストする
- 完了条件:
  - 送信後に `_next` のPDF URLへ遷移する

## WordPressで差し替える内容
1. `固定ページ` からLP本体を開く
2. PDFセクションの既存 `<form class="pdf-form" ...> ... </form>` を削除する
3. `/Users/yuuki/Works/lp-100/day036/PDF_FORM_NOJS_REPLACEMENT_OWNER_EMAIL.html` の内容を貼る
4. 保存後、1回だけテスト送信してアクティベーションメールを発火させる

## 分岐B: PDF直リンクへ切り替える
- 条件: メール確認をクライアント負担にしたくない、またはすぐ確認できない
- 作業:
  - PDFフォーム一式を削除する
  - 代わりにPDF直リンクのCTAボタンへ差し替える
- 置き換え候補:
```html
<a class="btn btn-teal" href="https://yuki-freelife.com/lp-review/wp-content/uploads/2026/02/food-checklist.pdf" target="_blank" rel="noopener noreferrer">無料PDFをダウンロードする</a>
<p class="hint">クリック後、そのままPDFが開きます。</p>
```
- 完了条件:
  - ボタン押下でPDFが直接開く

## 完了条件
- FAQが常時表示で読める
- 予約CTAが TimeRex に遷移する
- PDF導線が `FormSubmit` アクティベート済みフォームまたは直リンクで成立している
- ConoHa 側やサーバー側設定変更なしで初回公開判断ができる

## 確認用スクリーンショット
- `/Users/yuuki/Works/lp-100/day035/day035PC.png`
- `/Users/yuuki/Works/lp-100/day035/day035PCFV.png`
- `/Users/yuuki/Works/lp-100/day035/day035SP.png`
- `/Users/yuuki/Works/lp-100/day035/day035SPFV.png`

## 参照ファイル
- `/Users/yuuki/Works/lp-100/day035/README.md`
- `/Users/yuuki/Works/lp-100/day035/NO_JS_PUBLISH_FIRST_PLAN.md`
- `/Users/yuuki/Works/lp-100/day034/PDF_FORM_NOJS_REPLACEMENT.html`
- `/Users/yuuki/Works/lp-100/day034/FAQ_NOJS_FALLBACK_CSS.css`
- `/Users/yuuki/Works/lp-100/day036/PDF_FORM_NOJS_REPLACEMENT_OWNER_EMAIL.html`
