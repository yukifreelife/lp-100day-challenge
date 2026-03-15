# Day050 Restart Brief

## 目的
- day050 で、day049 の停止時点から迷わず再開できるようにする。

## 最重要の固定前提
- `CLIENT_ROLE_PROMPT.md` の詳細設定ファイルは、本案件終了まで参照しない。
- この案件はまだ正式受注前で、現在は `正式見積り前の前提確認` 段階じゃ。
- day049 の最優先は、新しい整理を増やすことではなく `client/CLIENT_REPLY_012_PRE_ESTIMATE_REVIEW_RESULT.md` を送ることじゃ。

## 現在地
- クライアントから、SWELL / ブロックエディタ / Contact Form 7 / 固定ページ追加可 / 軽微な CSS 調整可 という WordPress 前提が共有済みじゃ。
- 既存サイト URL、フォーム URL、流用したい表現、事例 2 件、プロフィール元情報も受領済みじゃ。
- それに対する返信案として、`概算 100,000円（税込）の前提で進めやすい可能性が高い` と返しつつ、追加確認点と追加対応の可能性を整理した `client/CLIENT_REPLY_012_PRE_ESTIMATE_REVIEW_RESULT.md` が完成済みじゃ。
- 最新受信は `client_messages/CLIENT_MESSAGE_012_MATERIALS_SHARE_AND_REVIEW_REQUEST.md` じゃ。

## day050 の最初のアクション
1. `client/CLIENT_REPLY_012_PRE_ESTIMATE_REVIEW_RESULT.md` を開き、そのまま送る。
2. 送信後は、クライアントから共有される予定の WordPress 画面 4 点のスクリーンショット受領を待つ。
3. スクリーンショット受領後、SWELL の表示制御、Contact Form 7 の現行項目、追加画面の要否を最終確認する。
4. 問題なければ正式見積り確定フェーズへ進む。

## 先に開くファイル
- 最新返信案:
  - `/Users/yuuki/Works/lp-100/day049/client/CLIENT_REPLY_012_PRE_ESTIMATE_REVIEW_RESULT.md`
- 最新受信:
  - `/Users/yuuki/Works/lp-100/day049/client_messages/CLIENT_MESSAGE_012_MATERIALS_SHARE_AND_REVIEW_REQUEST.md`
- 要件整理:
  - `/Users/yuuki/Works/lp-100/day049/ops/REQUIREMENTS_CONFIRMED.md`
- WordPress 前提:
  - `/Users/yuuki/Works/lp-100/day049/ops/DELIVERY_ARCHITECTURE_DECISION.md`
- 時系列ログ:
  - `/Users/yuuki/Works/lp-100/day049/logs/HANDOFF_LOG.md`

## 判断済みの見立て
- 現時点では、概算 100,000円（税込）の前提で進めやすい可能性が高い。
- 追加確認が必要なのは主に以下じゃ。
  - SWELL 側で、サイドバーなし / 幅広め / ページタイトル表示調整がどこまで素直にできるか
  - 固定ページ編集画面上で、LP レイアウトがどこまで既存機能で収まりそうか
  - Contact Form 7 の現行項目で十分か
  - 事例 / プロフィールで掲載時に避けたい表現が他にないか
- 追加対応の可能性があるのは主に以下じゃ。
  - SWELL 側制約が想定より強い場合
  - Contact Form 7 の項目自体を見直す場合
  - 掲載可否確認で整理往復が増える場合

## 注意点
- クライアント向け文面は、毎回 `一括コピペできる形式` で出す。
- 冒頭で毎回 `ここまでかなり整理されていて` のような定型を繰り返すと不自然になりやすいので避ける。
- 現段階では、追加で必須とまでは言えない WordPress 画面はない。まずはクライアントが挙げた 4 画面を受け取ればよい。
- LP-100チャレンジの日次進捗ログ正本は `/Users/yuuki/Works/lp-100/lp100-progress/daily/day049.md` じゃ。
