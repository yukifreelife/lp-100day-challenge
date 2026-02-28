# Day034 - WordPress移行実装途中とJS保存ブロック整理（2026-02-28）

## 現在地
- Day032の静的LP正本は完成済み、rev3修正も承認済み。
- Day033で納品形態は `B: WordPress納品` に確定済み。
- Day033時点で、クライアントへ ConoHa WING 申込手順とSMS認証後ガイドまでは送れる状態になっている。
- Day034では、WordPress側の実URL・管理画面情報を受領済み。
- LP本文、画像/PDFのURL差し替え、法務ページURL、追加CSSまでは手動反映が進んでいる。
- 現在の主ブロッカーは、コードスニペット保存時に `Forbidden access` が出て JS をまだ有効化できていない点。

## Day034の主目的
- 静的LPを WordPress 上へ反映し、公開前テストまで進める。
- 反映後に必要な JS（FAQ、PDF送信、UTM保持、GA4、Meta）を有効化する。
- JS保存を妨げている `Forbidden access` の原因を切り分け、次回着手者が即再開できる状態にする。

## 最優先の確認事項
- 次回は「JSスニペット保存の再試行」から再開する。
- 保存対象は、まず `LP_BEHAVIOR_CORE_NO_INDENT.js` の単体保存。
- これでも `Forbidden access` になる場合は、ConoHa 側 WAF の一時OFFを検討する。

## 進捗更新（2026-02-28）
- 次の3点は受領済み
  - サイトURL: `https://yuki-freelife.com/lp-review`
  - WordPressログインURL: `https://yuki-freelife.com/lp-review/wp-admin/`
  - 作業用管理者アカウント: `lpadmin`
- 公開URLは到達確認済み
- ユーザー本人は管理画面へログイン済み
- 実作業は、`day034` 内の素材を使って手動反映する進め方に切り替え
- 画像10点と `food-checklist.pdf` の WordPress 側URLは受領済みで、反映用素材にも差し込み済み
- `TOP_PAGE_CUSTOM_HTML_TEMPLATE.html` は法務ページURL込みの状態まで更新済み
- 法務ページ（プライバシーポリシー / 特定商取引法）の固定ページURLは確定済み
- `.legal` 用CSSは `day034/source/styles.css` に統合済み
- ページ本文末尾へ `PAGE_BOTTOM_SCRIPT_SNIPPET.html` を貼る方法は不採用
  - WordPress本文側では `<script>` が実行されず、FAQ開閉 / PDF完了表示が動作しなかった
- コードスニペット用に、次のコピペ素材を追加済み
  - `LP_CONFIG_INLINE_NO_INDENT.js`
  - `LP_BEHAVIOR_SNIPPET_NO_INDENT.js`
  - `LP_BEHAVIOR_CORE_NO_INDENT.js`
  - `GA4_LOADER_NO_INDENT.js`
  - `META_PIXEL_LOADER_NO_INDENT.js`
- `LP_BEHAVIOR_SNIPPET_NO_INDENT.js` は構文警告を回避できたが、保存時に `Forbidden access` が発生
  - ConoHa 側の WAF / mod_security が保存POSTを弾いている可能性が高い

## Day034で行う業務（優先順）
1. JS保存ブロックの切り分け
   - `LP_BEHAVIOR_CORE_NO_INDENT.js` を単体で保存する。
   - 保存できれば、`GA4_LOADER_NO_INDENT.js` と `META_PIXEL_LOADER_NO_INDENT.js` を別スニペットで追加する。
   - 保存できなければ、WAFの一時OFFで再試行する。

2. 移行元ファイルの正本確認
   - 作業元は `day034/source/` を基準に固定する。
   - 参照用として `day034/source/day032_client_submission_rev3_1_20260226.zip` と `day034/source/docs/` を保持する。

3. WordPress実装方式の固定
   - 方針は「クライアントが管理画面で文言修正・画像差し替えできる構成」を優先する。
   - 追加テーマや複雑なビルダー導入は後回しにし、まずは固定ページ中心で成立させる。

4. WordPress移行の残作業
   - FAQ開閉を有効化
   - PDFフォーム送信後の完了表示を有効化
   - TimeRex予約導線のUTM引き継ぎを有効化
   - GA4、Meta Pixel を有効化

5. 公開前テスト
   - PC / SPで見た目確認
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
- `LP_BEHAVIOR_CORE_NO_INDENT.js` の保存再試行
- WAF設定の確認
- GA4 / Meta の分割投入

### 情報がないと止まる
- ConoHa管理画面でのWAF切替
- ブラウザの開発者ツールでのイベント確認
- 実URLでの計測テスト

## 完了条件
- LP本体、法務ページ、画像、PDF、CSSが WordPress 上に反映されている。
- JSスニペットが保存でき、FAQ / PDF完了表示 / UTM / GA4 / Meta が動作している。
- どこまで反映済みで、何がWAFブロックかを次回着手者が即判断できる。

## 確認用スクリーンショット
- `/Users/yuuki/Works/lp-100/day034/day034PC.png`
- `/Users/yuuki/Works/lp-100/day034/day034PCFV.png`
- `/Users/yuuki/Works/lp-100/day034/day034SP.png`
- `/Users/yuuki/Works/lp-100/day034/day034SPFV.png`

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
- `/Users/yuuki/Works/lp-100/day034/PAGE_BOTTOM_SCRIPT_SNIPPET.html`
- `/Users/yuuki/Works/lp-100/day034/PDF_FORM_NOJS_REPLACEMENT.html`
- `/Users/yuuki/Works/lp-100/day034/FAQ_NOJS_FALLBACK_CSS.css`
- `/Users/yuuki/Works/lp-100/day034/LP_CONFIG_INLINE.js`
- `/Users/yuuki/Works/lp-100/day034/LP_BEHAVIOR_SNIPPET.js`
- `/Users/yuuki/Works/lp-100/day034/LP_CONFIG_INLINE_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/LP_BEHAVIOR_SNIPPET_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/LP_BEHAVIOR_CORE_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/GA4_LOADER_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/META_PIXEL_LOADER_NO_INDENT.js`
