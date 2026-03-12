# Project Starter

## 目的
- 新しいクライアント案件を始めるときに、最初から `正本の置き場` と `運用ファイル` が揃った状態を作る。
- このディレクトリだけで案件開始できる独立スターターにする。
- チェックリスト本体は `clientwork-checklists/` に集約しつつ、スターター側は案件運用ファイルを初期状態で持つ。

## 使い方
1. このディレクトリを新しい案件ディレクトリ名へコピーする。
2. `CLIENT_ROLE_PROMPT.md` を今回案件の設定で埋める。
3. `README.md` の案件名、主CV など初回セットアップ欄を更新する。
4. `ops/PROJECT_INTAKE_CHECKLIST.md` から着手する。

## 初回セットアップ
- 案件名:
- 開始日:
- クライアント名:
- 主CV:
- 副CV:
- 希望納期:
- 予算感:

## 正本ルール
- クライアント設定の正本は `CLIENT_ROLE_PROMPT.md`
- 実装正本は `current/`
- handoff と日次ログは `logs/`
- 送付文面は `client/`
- 進行管理は `ops/`
- 計測、レビュー、改善整理は `analysis/`
- タイミング別のチェックリスト正本は `template/clientwork-checklists/` を参照する
- テンプレ改善は `template/` 側で行い、案件ごとディレクトリを正本にしない

## 構成
- `CLIENT_ROLE_PROMPT.md`
- `PORTFOLIO_WORKLOG.md`
- `current/`
- `logs/`
- `ops/`
- `analysis/`
- `client/`

## 最初の30分で触る順
1. `ops/PROJECT_INTAKE_CHECKLIST.md`
2. `ops/FUNNEL_BOTTLENECK_MAP.md`
3. `ops/DELIVERY_ARCHITECTURE_DECISION.md`
4. `ops/ESTIMATE_SCOPE_MATRIX.md`
5. `analysis/VALUE_PROPOSITION_REVIEW.md`
