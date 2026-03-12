# クライアントワーク用チェックリスト一覧
## Clientwork Checklists

**使う場面**: 実案件で、どのフェーズでどのチェックリストを使うか確認したいとき

## 目的
- 実案件での確認漏れを減らし、`後から判明した条件` による手戻りや工数増加を防ぐ。
- ヒアリング、要件定義、見積、公開、計測、クローズまでを場面ごとに標準化し、再利用できる営業資産にする。

## 使い方
- このディレクトリは `場面ごとのチェックリスト正本データ` として使う。
- 新規案件は `template/project-starter/` をコピーして始める。
- 実務中は、必要なタイミングでこのディレクトリのチェックリストを参照し、案件側の記入版へ反映する。
- 汎用資産としての正本は `template/clientwork-checklists/` に置く。
- 補助ドキュメントの部品テンプレは `template/clientwork-docs/` に置く。
- 案件ごとの記入版は各 day ディレクトリの `ops/` や `analysis/` に置く。
- `未確認` のまま進めない。進める場合は `なぜ今は保留でよいか` を明記する。

## 一覧
1. `01_intake_and_hearing_checklist.md`
2. `02_kickoff_meeting_checklist.md`
3. `03_requirements_definition_checklist.md`
4. `04_scope_estimate_contract_checklist.md`
5. `05_delivery_architecture_checklist.md`
6. `06_account_access_and_ownership_checklist.md`
7. `07_copy_materials_legal_checklist.md`
8. `08_build_internal_qa_checklist.md`
9. `09_prelaunch_release_checklist.md`
10. `10_backup_and_rollback_checklist.md`
11. `11_post_release_stabilize_checklist.md`
12. `12_revision_request_intake_checklist.md`
13. `13_measurement_setup_checklist.md`
14. `14_review_reporting_checklist.md`
15. `15_close_retainer_checklist.md`
16. `16_handover_and_self_editing_checklist.md`

## day045 から反映した原則
- 公開方式を先に決める
- 価格と境界を先に切る
- 本番運用責任と所有権を先に固定する
- レビュー証跡を残す
- 正本ファイルを減らす
