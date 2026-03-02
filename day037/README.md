# Day037 - 初回公開判断とクライアント確認の確定（2026-03-03）

## 現在地
- Day032の静的LP正本は完成済み、rev3修正も承認済み。
- Day033で納品形態は `B: WordPress納品` に確定済み。
- Day034で、WordPress上への本文移植、画像/PDF差し替え、法務ページURL反映、追加CSS反映まで進行済み。
- Day035で、`JSなし公開優先` に方針転換した。
- Day036で、PDFフォームを通常POST版へ差し替え、`FormSubmit` のアクティベーション確認まで完了した。

## Day036からの引き継ぎ
### 確認済み
- FAQは `追加CSS` により常時表示で成立している。
- 予約CTAは既存の TimeRex 直リンクで成立している。
- PDFフォームは `FormSubmit` の通常POSTで送信できる。
- `yuki.freelife@gmail.com` 宛の `FormSubmit` フォームはアクティベーション済み。
- アクティベーション後の再送信では、`reCAPTCHA` 画面を1枚挟んだあとにPDFが表示される。

### 現在の仕様差分
- FAQは当初想定の開閉式ではなく、常時表示。
- PDF導線はLP内完結のサンクス表示ではなく、`FormSubmit` の確認画面を経由する。
- PDF表示前に `reCAPTCHA` が挟まる。
- UTM引き継ぎ、GA4 / Meta の詳細イベントは初回公開では止めている。
- `FormSubmit` の受信先は仮案件検証のため、一時的に `yuki.freelife@gmail.com` になっている。

## Day037の最優先業務
1. 現在の仕様差分をクライアントへ共有し、このまま初回公開してよいか確認する。
2. クライアントの回答に応じて、PDF導線を次のどちらで確定する。
   - A: `FormSubmit` 維持（名前+メール取得を優先）
   - B: PDF直リンク化（1クリック導線を優先）
3. 本番公開へ進む場合は、`FormSubmit` の受信先をクライアントメールへ戻す必要があるか判断する。
4. 受信先を戻す場合は、クライアントメール側で再アクティベーションが必要になる前提で最終テスト計画を立てる。
5. 第2フェーズで戻す機能（GA4 / Meta / UTM / FAQ開閉）の優先順位を整理する。

## 分岐A: FormSubmitを維持する場合
- 目的: 名前+メール取得を残したまま初回公開する。
- 必須確認:
  - `reCAPTCHA` が1回挟まる仕様をクライアントが許容できるか
  - 仮受信先のままではなく、公開前にクライアント受信先へ差し戻すか
- 実作業:
  - WordPress内のフォーム `action` をクライアント受信先へ戻す
  - 初回送信を1回行い、クライアント側で `Activate Form` を実行してもらう
  - 再送信して、`reCAPTCHA` 通過後にPDFへ到達することを確認する
- リスク:
  - メール側のアクティベーション対応が必要
  - `reCAPTCHA` により離脱が増える可能性がある

## 分岐B: PDF直リンクへ切り替える場合
- 目的: 導線の摩擦を最小化して即時表示を優先する。
- 実作業:
  - WordPress上のPDFフォーム一式を削除する
  - 代わりにPDF直リンクボタンを設置する
- メリット:
  - `reCAPTCHA` が消える
  - アクティベーション待ちが不要になる
- デメリット:
  - 名前+メールの取得はできなくなる
  - PDF経由の見込み客化は弱くなる

## 第2フェーズの見込み
- GA4 / Meta の基本タグ追加は、JS挿入経路が確保できれば後から追加できる見込みがある。
- ただし、CTAクリックやPDF送信などの詳細イベントは、`LP_BEHAVIOR_CORE_NO_INDENT.js` を安全に入れられるか次第。
- 現在の主ブロッカーは、`WPCode Lite` 保存時の `Forbidden access` であり、コード自体が未作成なのではない。
- 必要なら、専用プラグイン変更やWAF調整を含めて、第2フェーズで再検討する。

## Day037の完了条件
- クライアントへ仕様差分を説明し、初回公開方針の合意が取れている。
- PDF導線が `FormSubmit` 維持か PDF直リンク化かで確定している。
- `FormSubmit` を維持する場合は、受信先の本番運用方針が決まっている。
- 第2フェーズで戻す機能の優先順位が整理されている。
- 本日の判断結果と次の具体作業が `day037` に残っている。

## 参照ファイル
- `/Users/yuuki/Works/lp-100/day036/README.md`
- `/Users/yuuki/Works/lp-100/day036/PDF_FORM_NOJS_REPLACEMENT_OWNER_EMAIL.html`
- `/Users/yuuki/Works/lp-100/day034/PDF_FORM_NOJS_REPLACEMENT.html`
- `/Users/yuuki/Works/lp-100/day034/FAQ_NOJS_FALLBACK_CSS.css`
- `/Users/yuuki/Works/lp-100/day034/GA4_LOADER_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/META_PIXEL_LOADER_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/LP_BEHAVIOR_CORE_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day035/NO_JS_PUBLISH_FIRST_PLAN.md`
