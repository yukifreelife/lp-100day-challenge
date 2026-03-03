# Day037 表示ズレ修正手順

## 症状
- PCで左側に白い空きが出る
- 全体が右に寄って見える
- SPでも少しだけ右に動かせる

## 原因
- WordPress固定ページのラッパーが、LP本文の各セクションを `max-width: 645px` で拘束している
- その状態で `.container` が viewport 基準の幅を使うため、右側へはみ出している
- 外側の `main` と `wp-block-group` のラッパーも `has-global-padding` を持っており、内側だけ直してもズレが残る

## すぐ効く修正
1. `外観`
2. `カスタマイズ`
3. `追加CSS`
4. 追加CSSの内容を、`/Users/yuuki/Works/lp-100/day037/WP_LAYOUT_SHIFT_FIX copy.css` の全文で置き換える
5. `公開`

## 貼り戻すCSS
- `/Users/yuuki/Works/lp-100/day037/WP_LAYOUT_SHIFT_FIX copy.css`

## 確認ポイント
1. PCで左の白い余白が消える
2. LP全体が中央に収まる
3. SPで横スクロールできなくなる
4. もし `https://yuki-freelife.com/lp-review/` を見ていて変わらない場合は、まだトップページがLPに切り替わっていない可能性がある
5. その場合は、固定ページの直接URL（`WP固定ページ納品用` または `LP初稿（確認用）`）でも確認する
6. `61-2` を見ている場合は、`page-id-61` 向けの修正が入っている版を使う

## 恒久側の正本
- `/Users/yuuki/Works/lp-100/day034/source/styles.css`
- `/Users/yuuki/Works/lp-100/day034/source/index.html`
- `/Users/yuuki/Works/lp-100/day034/TOP_PAGE_CUSTOM_HTML_TEMPLATE.html`
