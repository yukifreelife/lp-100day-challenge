# Day034 リモートサイト確認メモ（2026-02-28）

## 受領済み情報
- サイトURL: `https://yuki-freelife.com/lp-review`
- WordPressログインURL: `https://yuki-freelife.com/lp-review/wp-admin/`
- 作業用管理者アカウント: `lpadmin`

## こちらで確認できたこと
- 公開URLは到達可能
  - `https://yuki-freelife.com/lp-review/` は `301 -> 200` で応答
- 現在のトップページは WordPress の初期プレースホルダーに近い表示
  - タイトル: `LP Review（検証用）`
  - 投稿一覧は空
- 公開REST APIは応答あり
  - `wp-json` が有効
  - 公開状態の固定ページが少なくとも2件存在
    - ID `36`: `WP固定ページ納品用`
    - ID `8`: `LP初稿（確認用）`
  - いずれも `post-password-required` で、公開APIから本文は取得不可

## まだできていないこと
- 固定ページの編集
- メディアアップロード
- 実URLベースでの導線・計測テスト

## 現時点の進め方
- ユーザー本人が `/wp-admin` へログインできる前提で進行
- こちらは day034 内の素材と手順書を使って、手動反映の案内を行う

## 実作業の次手順
1. 固定ページ `WP固定ページ納品用` の編集可否を確認
2. 既存ページを移行先として使うか、新規固定ページを切るかを決定
3. 画像・PDFをメディアへアップロード
4. 静的LP（day034/source 正本）を WordPress へ移植
5. 予約導線・PDF導線・GA4・Meta・UTM を実URLで確認
