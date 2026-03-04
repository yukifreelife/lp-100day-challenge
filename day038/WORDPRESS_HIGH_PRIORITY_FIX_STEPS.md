# Day038 - 高優先修正の WordPress 反映手順

## 使うファイル
- LP本文差し替え用（PDFフォーム込みのHTML正本）:
  `/Users/yuuki/Works/lp-100/day038/TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html`
- 追加CSS全文差し替え用:
  `/Users/yuuki/Works/lp-100/day038/WP_LAYOUT_SHIFT_FIX_HIGH_PRIORITY.css`

## 今回の反映内容
1. 予約CTA付近に「別タブで予約画面が開く」注記を追加
2. プログラム内容の直後に中間予約CTAを追加
3. PDFフォームのロボットチェック注記を短くして目立たせる

## WordPress 側でやること
1. LP本体のHTMLブロックを開く
2. 本文全体を
   `/Users/yuuki/Works/lp-100/day038/TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html`
   の内容に差し替える
3. `外観 > カスタマイズ > 追加CSS` の対象CSSを
   `/Users/yuuki/Works/lp-100/day038/WP_LAYOUT_SHIFT_FIX_HIGH_PRIORITY.css`
   の内容に差し替える
4. PDFフォームだけ個別修正したい場合も、上記HTML正本の `pdf-form` セクションを編集元にする
5. 更新後、スマホで予約CTA、PDF導線、表示崩れを再確認する

## 補足
- 過去の `day032` `day034` `day036` `day037` の原本は変更しない。
- HTMLの正本は `TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html` の1本に統一する。
- 以後の差分管理は `day038` 側ファイルを正本として進める。
