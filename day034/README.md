# Day034 - WordPress移行着手と公開前準備（2026-02-27）

## 現在地
- Day032の静的LP正本は完成済み、rev3修正も承認済み。
- Day033で納品形態は `B: WordPress納品` に確定済み。
- Day033時点で、クライアントへ ConoHa WING 申込手順とSMS認証後ガイドまでは送れる状態になっている。
- まだこのリポジトリ内に WordPress 向けの実装成果物はなく、移行本体はこれから着手する段階。

## Day034の主目的
- クライアントから WordPress 作業に必要なアクセス情報が届いているか確認する。
- 情報が揃っていれば、静的LPを WordPress へ移行する実作業を開始する。
- 情報が未着なら、実装を止めて「回収待ち」と「事前準備」に切り分ける。

## 最優先の確認事項
- クライアントから次の3点が届いているか
  - サイトURL（または仮URL）
  - WordPressログインURL（`/wp-admin`）
  - 作業用の管理者アカウント（IDまたはメールアドレス）

## 進捗更新（2026-02-28）
- 次の3点は受領済み
  - サイトURL: `https://yuki-freelife.com/lp-review`
  - WordPressログインURL: `https://yuki-freelife.com/lp-review/wp-admin/`
  - 作業用管理者アカウント: `lpadmin`
- 公開URLは到達確認済み
- 現在のトップページは WordPress の初期プレースホルダー表示
- 公開REST APIから、既存固定ページ `WP固定ページ納品用` と `LP初稿（確認用）` の存在を確認
- ユーザー本人は管理画面へログイン済み
- 実作業は、day034内の素材を使って手動反映する進め方に切り替え

## Day034で行う業務（優先順）
1. アクセス情報の受領状況を確認
   - 3点が未着なら、移行本体は開始しない。
   - 未着時は Day033 の案内テンプレを使って再連絡する。

2. 移行元ファイルの正本確認
   - 作業元は `day034/source/` を基準に固定する。
   - 参照用として `day034/source/day032_client_submission_rev3_1_20260226.zip` と `day034/source/docs/` を保持する。

3. WordPress実装方式の固定
   - 方針は「クライアントが管理画面で文言修正・画像差し替えできる構成」を優先する。
   - 追加テーマや複雑なビルダー導入は後回しにし、まずは固定ページ中心で成立させる。

4. WordPress移行の実作業
   - トップLPページを移行
   - `privacy.html` と `tokushoho.html` を固定ページ化
   - 画像とPDFを WordPress 側へ配置
   - TimeRex予約導線、PDF導線、GA4、Meta Pixel、UTM保持を維持

5. 公開前テスト
   - 予約CTA遷移
   - PDFフォーム送信
   - PDFダウンロード
   - 法務ページ表示
   - GA4 / Meta イベント発火
   - UTM引き継ぎ

6. 納品・運用資料の更新
   - クライアントが更新する場所
   - こちらが追加した設定箇所
   - 公開後の確認項目

7. Day034ログ更新
   - 受領済み情報
   - 実施内容
   - 保留事項
   - 次回着手点

## 着手条件
### すぐ着手できる
- 静的LPの構成確認
- WordPress移行の手順整理
- 移行先で再設定が必要な項目の棚卸し

### 情報がないと止まる
- 実サイトへのログイン
- 固定ページ作成
- メディア登録
- 実URLでの計測テスト

## 完了条件
- アクセス情報の受領有無が明確になっている。
- WordPress移行の実装手順がチェックリスト化されている。
- 情報受領済みなら、移行の初回実装と動作確認に着手している。
- 情報未受領なら、何待ちで止まっているかを次回着手者が即判断できる。

## 正本ファイル（移行元）
- `/Users/yuuki/Works/lp-100/day034/source/index.html`
- `/Users/yuuki/Works/lp-100/day034/source/styles.css`
- `/Users/yuuki/Works/lp-100/day034/source/script.js`
- `/Users/yuuki/Works/lp-100/day034/source/privacy.html`
- `/Users/yuuki/Works/lp-100/day034/source/tokushoho.html`
- `/Users/yuuki/Works/lp-100/day034/source/downloads/food-checklist.pdf`
- `/Users/yuuki/Works/lp-100/day034/source/images/`

## 参照資料
- `/Users/yuuki/Works/lp-100/day033/CLIENT_REPLY_AFTER_REQUIREMENTS_RECEIVED.md`
- `/Users/yuuki/Works/lp-100/day033/CLIENT_CLICK_GUIDE_CONOHA.md`
- `/Users/yuuki/Works/lp-100/day033/CLIENT_REPLY_AFTER_SMS_COMPLETED_TEMPLATE.md`
- `/Users/yuuki/Works/lp-100/day033/CONOHA_AFTER_SMS_NEXT_GUIDE.md`
- `/Users/yuuki/Works/lp-100/day034/WORDPRESS_MIGRATION_CHECKLIST.md`
- `/Users/yuuki/Works/lp-100/day034/REMOTE_SITE_STATUS.md`
- `/Users/yuuki/Works/lp-100/day034/WORDPRESS_IMPLEMENTATION_MAP.md`
- `/Users/yuuki/Works/lp-100/day034/POST_LOGIN_WORK_ROADMAP.md`
- `/Users/yuuki/Works/lp-100/day034/WORDPRESS_REPLACEMENT_MATRIX.md`
- `/Users/yuuki/Works/lp-100/day034/WORDPRESS_ADMIN_CLICK_STEPS.md`
- `/Users/yuuki/Works/lp-100/day034/TOP_PAGE_CUSTOM_HTML_TEMPLATE.html`
- `/Users/yuuki/Works/lp-100/day034/LP_CONFIG_SNIPPET.html`
