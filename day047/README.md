# Day047 - 製造業向け採用支援 LP 初回相談整理

## 目的
- クライアント初回メッセージだけを材料に、`何から整理すべきか` と `どう返すか` を明確にする。
- `無料相談予約` を主CVとした、スマホ優先の LP 方針を仮置きする。
- 初回制作、WordPress反映、公開後レビューを分けて扱える状態にする。

## 今回の参照ルール
- 今回は `template/` とクライアントから届いた初回メッセージのみを参照して進める。
- `CLIENT_ROLE_PROMPT.md` にある詳細設定ファイルは、本案件終了まで参照しない。
- クライアント像の肉付けは、以後の会話ログベースで行う。

## 初回セットアップ
- 案件名: 製造業向け採用支援サービス LP 相談
- 開始日: 2026-03-13
- クライアント名: ミチル採用企画 秋山様
- 主CV: 無料相談予約
- 副CV: 問い合わせ
- 希望納期: 来月の広告開始前を想定
- 予算感: 大きくは取れない前提

## 現時点の方向性
- LPの役割は `事業説明ページ` ではなく `製造業向けの無料相談予約ページ` に寄せる。
- まず整理すべきなのは `誰向けか` `何を相談できるか` `相談後にどう進むか` `その根拠は何か` の4点。
- `スマホで見やすい` と `WordPressで運用したい` は要件だが、訴求設計より先には置かない。
- `公開後も少し見てもらいたい` は初回制作とは分け、レビュー or 軽微改善の別フェーズとして扱う。

## 正本ルール
- クライアント設定の正本は `CLIENT_ROLE_PROMPT.md`
- 実装正本は `current/`
- handoff と日次ログは `logs/`
- クライアント受信文面は `client_messages/`
- 送付文面は `client/`
- 進行管理は `ops/`
- 計測、レビュー、改善整理は `analysis/`
- タイミング別のチェックリスト正本は `template/clientwork-checklists/` を参照する

## 最初に埋めたファイル
1. `ops/PROJECT_INTAKE_CHECKLIST.md`
2. `ops/FUNNEL_BOTTLENECK_MAP.md`
3. `ops/DELIVERY_ARCHITECTURE_DECISION.md`
4. `ops/ESTIMATE_SCOPE_MATRIX.md`
5. `analysis/VALUE_PROPOSITION_REVIEW.md`
6. `client/CLIENT_REPLY_001_INITIAL_DIRECTION.md`
