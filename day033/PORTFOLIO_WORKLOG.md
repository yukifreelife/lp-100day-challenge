# Day033 - 納品形態確定と公開準備（ポートフォリオ作業ログ）

## ラベル（検索用）
**Labels:** `lp` `wordpress` `migration` `conoha` `client-communication` `screenshots` `handoff` `day033` `portfolio-worklog`

lp:audience=非エンジニアのクライアント
lp:goal=納品形態確定 + 公開準備着手
lp:industry=パーソナルトレーニング
lp:objective=WordPress移行前提の申込導線と案内資料を整備
lp:status=wp-decision-confirmed
lp:env=operations-docs-and-capture

---

## 記録について
- 当日の分単位の実測ログは見つからなかったため、このファイルは `README.md`、周辺の引き継ぎ資料、Codex チャットのタイムスタンプをもとに再構成している。

---

## 今日の成果
- Day033の目的:
  - Day032で完成した静的LPの次フェーズとして、納品形態を確定し、公開準備を前へ進める
- 実施内容:
  - 納品形態の確定
    - クライアントより `B: WordPress納品` の選択返信を受領
    - 更新頻度と運用前提を踏まえ、管理画面更新しやすい構成へ方針を固定
  - 要件回収
    - 希望ドメイン優先順、サーバー希望、公開希望日を回収
    - ConoHa WING 前提での案内へ切り替え
  - クライアント向け案内テンプレ整備
    - 意思決定返信後の文面、SMS完了後の次アクション文面を整理
    - 「ここだけ入力/クリック」で進められる導線に寄せた文面を追加
  - ConoHa操作ガイドの作成
    - ドメイン取得、EasySetup登録、SMS完了後の次手順を資料化
    - 実サイトキャプチャと注釈付きスクリーンショットを整理
  - Day032正本の引き継ぎ
    - WordPress移行時に必要な静的正本ファイルを `day032_required_files/` に集約
    - 必須コピー対象を `DAY032_REQUIRED_COPY_LOG.md` に明記

---

## 作業時間（再構成メモ）
- 当日の実測時間は未記録。ただし、Codex チャットの開始/完了時刻と成果物更新順をもとに、以下を参考時間として再構成した。
- 納品形態の意思決定整理と推奨案提示: 約30分
- クライアント返信テンプレ作成と文面調整: 約35分
- ConoHa申込導線のキャプチャ取得と注釈追加: 約150分
- 送信用ZIP整理とクライアント送信用の最終確認: 約30分
- Day032正本の移行用整理、停止スレッド再開、コミット: 約70分
- 参考合計: 約315分（5時間15分）

---

## 主要成果物
- クライアント連絡テンプレ
  - `/Users/yuuki/Works/lp-100/day033/CLIENT_DECISION_MESSAGE_TEMPLATE.md`
  - `/Users/yuuki/Works/lp-100/day033/CLIENT_REPLY_AFTER_B_SELECTION.md`
  - `/Users/yuuki/Works/lp-100/day033/CLIENT_REPLY_AFTER_REQUIREMENTS_RECEIVED.md`
  - `/Users/yuuki/Works/lp-100/day033/CLIENT_CLICK_GUIDE_CONOHA.md`
  - `/Users/yuuki/Works/lp-100/day033/CLIENT_REPLY_AFTER_SMS_COMPLETED_TEMPLATE.md`
- ConoHa案内資料
  - `/Users/yuuki/Works/lp-100/day033/CONOHA_WP_DOMAIN_CAPTURE_GUIDE.md`
  - `/Users/yuuki/Works/lp-100/day033/CONOHA_EASYSETUP_REGISTRATION_PAGES.md`
  - `/Users/yuuki/Works/lp-100/day033/CONOHA_OPTION_RECOMMENDATION_FOR_CLIENT.md`
  - `/Users/yuuki/Works/lp-100/day033/CONOHA_AFTER_SMS_NEXT_GUIDE.md`
- 送信用素材
  - `/Users/yuuki/Works/lp-100/day033/client_send/20260227_conoha_flow_screenshots.zip`
  - `/Users/yuuki/Works/lp-100/day033/client_send/20260227_after_sms_next_step.zip`
- キャプチャ・検証素材
  - `/Users/yuuki/Works/lp-100/day033/screenshots/`
  - `/Users/yuuki/Works/lp-100/day033/scripts/`
- Day032移行用正本
  - `/Users/yuuki/Works/lp-100/day033/day032_required_files/index.html`
  - `/Users/yuuki/Works/lp-100/day033/day032_required_files/styles.css`
  - `/Users/yuuki/Works/lp-100/day033/day032_required_files/script.js`
  - `/Users/yuuki/Works/lp-100/day033/day032_required_files/privacy.html`
  - `/Users/yuuki/Works/lp-100/day033/day032_required_files/tokushoho.html`
  - `/Users/yuuki/Works/lp-100/day033/DAY032_REQUIRED_COPY_LOG.md`

---

## 現在の設定値
`day032_required_files/index.html` 内 `window.LP_CONFIG`:
- `reservationUrl`: `https://timerex.net/s/bodymake_tokyo_yuta`
- `leadEndpoint`: `https://formsubmit.co/ajax/contact@bodymake-yuta.com`
- `gaMeasurementId`: `G-CQB0QSMF7F`
- `metaPixelId`: `871190680965123`
- `pdfDownloadUrl`: `./downloads/food-checklist.pdf`

---

## 次回やること（Day034）
1. WordPressの実URL・管理画面情報を受領し、反映作業へ着手する
2. Day032正本をベースに、本文・法務・画像・PDFを WordPress へ移植する
3. JS有効化（FAQ / PDF完了表示 / UTM / GA4 / Meta）の実装方法を確定する
