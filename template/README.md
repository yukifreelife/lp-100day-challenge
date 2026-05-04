# Template Index

## 目的
- `template/` を用途別に整理し、営業資産が他用途の資料と混ざらないようにする。

## 構成
- `clientwork-checklists/`
  - 実案件向けの場面別チェックリストの正本データ
- `clientwork-docs/`
  - 補助ドキュメントの部品テンプレ
- `project-starter/`
  - 新規案件開始時にそのままコピーして使う独立スターター
- `wordpress-guides/`
  - WordPress 反映や運用に関する手順テンプレ
- `design-md/`
  - AIエージェント向け `DESIGN.md` の再利用テンプレート
- `lp-snapshots/`
  - 過去スナップショットや検証用複製

## 運用ルール
- 実案件開始時は `project-starter/` を起点にする
- チェックリストの正本データは `clientwork-checklists/` にまとめて保持する
- `clientwork-docs/` は補助ドキュメントの部品テンプレとして保持し、スターター改善時の参照元にする
- 新しいテンプレ資産を追加するときは、用途に合うサブディレクトリへ置く
- LPごとのデザイン正本を作る場合は、`design-md/DESIGN.md.template` をdayディレクトリ直下の `DESIGN.md` として複製する
