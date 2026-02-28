# Day034 リモートサイト確認メモ（2026-02-28）

## 受領済み情報
- サイトURL: `https://yuki-freelife.com/lp-review`
- WordPressログインURL: `https://yuki-freelife.com/lp-review/wp-admin/`
- 作業用管理者アカウント: `lpadmin`

## こちらで確認できたこと
- 公開URLは到達可能
  - `https://yuki-freelife.com/lp-review/` は `301 -> 200` で応答
- 現在は、WordPress の初期プレースホルダー状態から手動反映が進んでいる
  - LPの見た目確認用スクリーンショットは `day034/day034PC.png` から `day034/day034SPFV.png` に整理済み
- 公開REST APIは応答あり
  - `wp-json` が有効
  - 公開状態の固定ページが少なくとも2件存在
    - ID `36`: `WP固定ページ納品用`
    - ID `8`: `LP初稿（確認用）`
  - いずれも `post-password-required` で、公開APIから本文は取得不可
- ユーザー本人は `/wp-admin` にログイン済み
- 画像10点と PDF のアップロード先URLは確定済み
- 法務ページURLは確定済み
- LP本文と `追加CSS` は、day034内の素材に合わせて更新済み

## まだできていないこと
- コードスニペット経由でのJS有効化
- FAQ開閉の実機確認
- PDFフォーム送信後の完了表示確認
- UTM引き継ぎ確認
- GA4 / Meta イベント確認

## 現時点の進め方
- ユーザー本人が `/wp-admin` へログインできる前提で進行
- こちらは day034 内の素材と手順書を使って、手動反映の案内を行う
- `PAGE_BOTTOM_SCRIPT_SNIPPET.html` を本文へ貼る案は不採用
  - WordPress本文では `<script>` が実行されなかった
- コードスニペット用に no-indent 版と分割版を作成済み
- `LP_BEHAVIOR_SNIPPET_NO_INDENT.js` は保存時に `Forbidden access` が発生
  - WAF / mod_security の保存POSTブロックが疑わしい

## 実作業の次手順
1. `LP_BEHAVIOR_CORE_NO_INDENT.js` をフッターJSとして単体保存
2. 保存できたら `GA4_LOADER_NO_INDENT.js` を別スニペットで保存
3. 続けて `META_PIXEL_LOADER_NO_INDENT.js` を別スニペットで保存
4. 保存できなければ ConoHa 側WAFを一時OFFにして再試行
5. 保存後、FAQ / PDF / 予約CTA / UTM / GA4 / Meta を実URLで確認
