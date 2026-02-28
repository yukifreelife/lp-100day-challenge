# Day034 WordPress移行 実装チェックリスト

## 0. 進行判定
- [ ] クライアントからサイトURL（または仮URL）を受領
- [ ] `/wp-admin` のログインURLを受領
- [ ] 作業用の管理者アカウントを受領
- [ ] パスワード共有が必要な場合の受け渡し経路を決定

未達がある場合:
- [ ] 実装を止める
- [ ] Day033の案内テンプレで不足情報のみ再依頼
- [ ] 「何待ちで止まっているか」をDay034ログへ残す

## 1. 移行元の固定
- [ ] 正本を `day034/source/` に固定
- [ ] 参照用ZIPが `day034/source/day032_client_submission_rev3_1_20260226.zip` であることを確認
- [ ] 対象ファイルを確認
  - `index.html`
  - `styles.css`
  - `script.js`
  - `privacy.html`
  - `tokushoho.html`
  - `downloads/food-checklist.pdf`
  - `images/`

## 2. WordPress側の初期確認
- [ ] WordPressへログインできる
- [ ] 管理画面のURLと本番/仮URLの対応を把握
- [ ] 既存トップページの有無を確認
- [ ] 既存の不要な初期投稿・固定ページの扱いを確認
- [ ] 追加テーマやページビルダーは入れず、まず固定ページ中心で進める方針を確認
- [ ] クライアントが後から触る想定の編集画面を確認

## 3. 実装方式の固定
- [ ] トップページは「固定ページ」として作る
- [ ] 法務ページは `privacy` / `tokushoho` 相当の固定ページとして作る
- [ ] 画像はメディアライブラリ管理に寄せる
- [ ] PDFはメディアライブラリへ登録し、配布URLを固定する
- [ ] CSS/JSの置き場所を決める
  - 推奨: 追加CSS + ヘッダー/フッターのコード挿入 + ページ本文
- [ ] クライアントが後で更新する箇所と、コード触りが必要な箇所を分離する

## 4. コンテンツ移行
### トップLP
- [ ] FVからフッターまで、静的LPの構成を欠けなく移す
- [ ] 見出し、料金、FAQ、CTA文言を最新rev3準拠で反映
- [ ] 「強引な勧誘なし」「合わない場合は断ってOK」などの必須文言を保持
- [ ] キャンセル規定の文言をLP本文とFAQで統一

### 法務ページ
- [ ] `privacy.html` を移行
- [ ] `tokushoho.html` を移行
- [ ] トップページからの導線が切れていない

### 画像・PDF
- [ ] 画像を必要分アップロード
- [ ] 参照URLを WordPress 側のURLへ差し替え
- [ ] `food-checklist.pdf` をアップロード
- [ ] PDFダウンロード導線を新URLへ差し替え

## 5. 動作ロジック移行
- [ ] 予約CTAがすべて TimeRex の最新URLへ遷移する
- [ ] 予約ボタンに UTM が引き継がれる
- [ ] PDFフォームの送信先が維持されている
- [ ] PDFフォーム送信後のサンクス表示または次導線が壊れていない
- [ ] hidden の `utm_*` 項目が維持されている
- [ ] `window.LP_CONFIG` 相当の設定値を WordPress 側に移す
  - `reservationUrl`
  - `leadEndpoint`
  - `gaMeasurementId`
  - `metaPixelId`
  - `pdfDownloadUrl`

## 6. 計測移行
- [ ] GA4タグを移す
- [ ] Meta Pixelを移す
- [ ] LP内イベント名を維持する
  - `select_counseling_cta`
  - `generate_lead`
- [ ] Metaイベント名を維持する
  - `SelectCounselingCTA`
  - `Lead`

## 7. 表示確認
- [ ] PCでレイアウト確認
- [ ] SPでレイアウト確認
- [ ] 主要画像の表示崩れなし
- [ ] CTAボタンが視認できる
- [ ] 法務ページが読める
- [ ] PDFが開ける

## 8. 実URLテスト
- [ ] 予約CTAクリックテストを1回実施
- [ ] PDFフォーム送信テストを1回実施
- [ ] UTM付きURLで流入テストを1回実施
- [ ] GA4リアルタイムで `page_view` / `select_counseling_cta` / `generate_lead` を確認
- [ ] Meta Pixelで `PageView` / `SelectCounselingCTA` / `Lead` を確認

## 9. クライアント運用の着地
- [ ] クライアントが更新する固定ページ名を明示
- [ ] 画像差し替え手順を1画面で説明できる状態にする
- [ ] 修正時に触ってはいけない箇所（計測コード、フォーム設定）を明示
- [ ] 公開後チェック項目を短く再整理する

## 10. Day034ログに残すこと
- [ ] 受領済みアクセス情報
- [ ] 実際に採用したWordPress実装方式
- [ ] 移行済みページ
- [ ] 未移行項目
- [ ] 実URLテスト結果
- [ ] 次回の残タスク

## 11. 参照元
- `/Users/yuuki/Works/lp-100/day034/source/`
- `/Users/yuuki/Works/lp-100/day033/DAY032_REQUIRED_COPY_LOG.md`
- `/Users/yuuki/Works/lp-100/day034/source/CLIENT_README.txt`
- `/Users/yuuki/Works/lp-100/day033/README.md`
