# Day033 - 納品形態確定と公開準備（2026-02-27）

## Day032からの引き継ぎ要点
1. rev3修正は承認済みで、最新提出ZIPは `day032/day032_client_submission_rev3_1_20260226.zip`。
2. 未確定事項は納品形態の最終決定（A: ZIP納品継続 / B: WordPress移行）。
3. クライアントは非エンジニア前提で、公開後の更新は月1回程度（文言・画像差し替え中心）。
4. LP本体・計測・法務・PDF導線は実装済み。次フェーズは運用しやすい公開体制の確定。

## 進捗更新（2026-02-27）
- クライアントより `B: WordPress納品` の選択返信を受領。
- 要望: 「文章の軽微修正・画像差し替え」を管理画面で完結できる運用を希望。
- 受領情報:
  - 希望ドメイン優先順: `bodymake-yuta.com` -> `tokyo-bodymake-yuta.com` -> `bodymake-yuta.jp`
  - サーバー希望: おまかせ（ConoHa WING基準）
  - 公開希望日: 第1希望 `2026-03-06`（前倒し可 `2026-03-05`）
- 次アクション: 「ここだけ入力/クリック」で進められる最小操作手順を案内し、契約着手へ進行。

## 今日の業務目標
- 今日中に納品形態を確定し、確定した方式で公開準備に着手できる状態を作る。

## 今日行う業務（優先順）
1. クライアントへA/B案の最終確認を送付
   - 連絡内容: A（ZIP）とB（WordPress）の違い、推奨案、意思決定期限。
   - 完了条件: クライアントからAまたはBの明示返信を受領。

2. 分岐準備A: ZIP継続時の納品運用を固める
   - 最終ZIP正本と提出対象ファイル一覧を再確認。
   - 公開手順（ホスティング反映、差し替え手順、確認URL）を1枚に整理。
   - 完了条件: クライアントが第三者に渡しても公開作業できる手順書がある。

3. 分岐準備B: WordPress移行時の着手情報を回収する
   - 必要情報: ドメイン取得方針（`.com` / `.jp`）、契約予定ホスティング、WP管理者アカウント発行可否。
   - 移行範囲: LP1ページ、法務2ページ、PDF配布導線、計測設定（GA4/Meta/UTM）維持。
   - 完了条件: 移行スコープと初回セットアップに必要な情報が揃っている。

4. 公開前チェックフローを共通化
   - 確認対象: 予約CTA遷移、PDFフォーム送信、PDFダウンロード、法務ページ表示、GA4/Metaイベント発火、UTM引き継ぎ。
   - 完了条件: 公開URLベースでのチェックリストが確定している。

5. Day033の作業ログ開始
   - `day033` に「意思決定結果」「実施内容」「残タスク」を追記して当日記録を開始。
   - 完了条件: 次回着手者が迷わない引き継ぎメモが残っている。

## 本日の成果物定義
- 納品形態の確定結果（A/B）
- 確定方式の実行手順メモ（ZIP手順書 または WP移行要件メモ）
- 公開前チェックリスト（URL確認ベース）
- Day033作業ログの初版
- クライアント送信用テンプレ
  - `day033/CLIENT_DECISION_MESSAGE_TEMPLATE.md`
  - `day033/CLIENT_REPLY_AFTER_B_SELECTION.md`
  - `day033/CLIENT_REPLY_AFTER_REQUIREMENTS_RECEIVED.md`
  - `day033/CLIENT_CLICK_GUIDE_CONOHA.md`
  - `day033/CLIENT_REPLY_AFTER_SMS_COMPLETED_TEMPLATE.md`
  - 送信用スクショ一式: `day033/client_send/20260227_conoha_flow_screenshots/`
  - 送信用ZIP: `day033/client_send/20260227_conoha_flow_screenshots.zip`
  - SMS完了後送信用: `day033/client_send/20260227_after_sms_next_step/`
  - SMS完了後送信用ZIP: `day033/client_send/20260227_after_sms_next_step.zip`
- ConoHaスクショ資料
  - `day033/CONOHA_WP_DOMAIN_CAPTURE_GUIDE.md`
  - `day033/CONOHA_EASYSETUP_REGISTRATION_PAGES.md`
  - `day033/CONOHA_OPTION_RECOMMENDATION_FOR_CLIENT.md`
  - `day033/CONOHA_AFTER_SMS_NEXT_GUIDE.md`
  - `day033/screenshots/`
  - 実サイト同一フロー正本: `51-realflow-01-wing-home-apply.png` -> `52-realflow-02-wizard-create-top.png` -> `53-realflow-03-create-select-and-next.png` -> `54-realflow-04-accountinfo.png` -> `55-realflow-05-accountinfo-filled-next.png` -> `56-realflow-06-auth-sms.png`
  - SMS画面推奨クリック: `57-realflow-06-auth-sms-recommended.png`
  - 連続再取得スクリプト: `day033/scripts/capture_real_flow_only_sequence.js`
  - 参考（旧キャプチャ）: `22-30` と `registration-flow/` はアーカイブ扱い
- Day032必須ファイル引き継ぎ
  - `day033/day032_required_files/`
  - `day033/DAY032_REQUIRED_COPY_LOG.md`

## リスクと対処
- 返信遅延で納品形態が確定しない場合:
  - 当日中はA/B両方の準備を進め、翌営業日の午前を回答期限として再確認する。
- WordPress情報不足で移行着手できない場合:
  - 先に必要情報一覧を送付し、受領後に移行作業へ切り替える。
