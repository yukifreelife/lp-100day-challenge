# Day046 - 次回案件の標準運用立ち上げ

## 目的
- day045 で出た反省を踏まえ、次回案件を `最初から崩れにくい状態` で始める。
- `CLIENT_ROLE_PROMPT.md` をクライアント役の正本とし、それ以外の進行・見積・公開・計測・レビュー資料を分離して管理する。

## 参照元
- `../day045/NEXT_PROJECT_STANDARD_PROCESS.md`
- `../day045/NEXT_PROJECT_STANDARD_PROCESS_PLAYBOOK.md`
- `../day045/POSTMORTEM_AUDIT_REPORT.md`
- `../day045/day031~045_clientwork_review.md`

## 正本ルール
- クライアント設定の正本は `CLIENT_ROLE_PROMPT.md`
- 制作物の正本は `current/`
- handoff / restart brief は `logs/`
- LP-100チャレンジの日次進捗ログ正本は `/Users/yuuki/Works/lp-100/lp100-progress/daily/`
- クライアント送付文面は `client/`
- チェックリストと進行管理は `ops/`
- 計測・レビュー・訴求整理は `analysis/`
- 日別ディレクトリへ正本を複製しない

## 構成
- `CLIENT_ROLE_PROMPT.md`
  - クライアント役の固定設定
- `current/`
  - 実装正本
- `logs/`
  - handoff と restart brief
- `client/`
  - 送付文面テンプレ
- `ops/`
  - Intake、見積、公開、クローズ用の正本
- `analysis/`
  - 訴求、計測、レビュー、改善案の正本
- `client/CLIENT_HANDOVER_GUIDE.md`
  - 納品時の引き継ぎ資料テンプレ
- `analysis/RETAINER_SCOPE_MATRIX.md`
  - 継続提案の範囲整理
- `ops/CHECKLIST_INDEX.md`
  - 汎用チェックリスト資産への入口

## 最初の30分で触る順
1. `ops/PROJECT_INTAKE_CHECKLIST.md`
2. `ops/FUNNEL_BOTTLENECK_MAP.md`
3. `ops/DELIVERY_ARCHITECTURE_DECISION.md`
4. `ops/ESTIMATE_SCOPE_MATRIX.md`
5. `analysis/VALUE_PROPOSITION_REVIEW.md`

## 現在の状態
- クライアント役は `秋山美穂 / ミチル採用企画` で固定済み
- 主要CVは `無料相談予約`、副次CV候補は `LINE / 問い合わせ / 資料DL`
- WordPress 運用希望はあるが、公開方式と編集可能範囲は未確定
- 計測アカウント所有権、受信先メール、実績利用許可は未確認
- 初回制作、公開支援、軽微修正、計測整備、レビューは分離して扱う前提

## day045 から反映した改善点
- 見積 line item を先に分ける
- `管理画面で簡単に直せる` と先に約束しない
- 本番受信先メールとアカウント所有権を公開前ゲートに入れる
- レビュー証跡の保存先を先に用意する
- 日次ログと正本ファイルを分離する
- 場面ごとの確認項目を `template/clientwork-checklists/` に切り出し、再利用資産化する
