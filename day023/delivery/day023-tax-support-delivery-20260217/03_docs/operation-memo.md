# 簡易運用メモ

## どこにHTML/CSSがあるか
- WordPress貼り付け用HTML（本番反映用）:
  - `02_wordpress/wp-custom-html-gutenberg-code-editor.html`
- ローカル編集元:
  - `01_source/index.html`
  - `01_source/styles.css`
- CSS管理方式:
  - `<style>` 同梱（WordPress「追加CSS」は未使用）

## 1行だけ文言修正したい場合
1. `01_source/index.html` の対象文言を修正
2. 元プロジェクト側で `build-wp-custom-html.sh` を実行し、貼り付け用HTMLを再生成
3. 固定ページ本文を再貼り付けして更新

## 復旧手順（編集崩れ時）
1. 固定ページをコードエディターで開く
2. 本文を全削除
3. `02_wordpress/backup-html-full.txt` を全文貼り付け
4. 更新して表示確認
