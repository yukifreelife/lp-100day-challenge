# Day035 - JS保存再試行と公開前確認の再開（2026-03-01）

## 現在地
- Day032の静的LP正本は完成済み、rev3修正も承認済み。
- Day033で納品形態は `B: WordPress納品` に確定済み。
- Day034で、WordPress上への本文移植、画像/PDF差し替え、法務ページURL反映、追加CSS反映までは進行済み。
- 主ブロッカーは、コードスニペット保存時の `Forbidden access` により、JSがまだ有効化できていない点。

## Day034からの引き継ぎ
### 反映済み
- サイトURL: `https://yuki-freelife.com/lp-review`
- WordPressログインURL: `https://yuki-freelife.com/lp-review/wp-admin/`
- 作業用管理者アカウント: `lpadmin`
- LP本文の手動反映
- 画像10点と `food-checklist.pdf` のURL差し替え
- 法務ページURLの確定とリンク反映
- `.legal` 用CSSの統合
- コードスニペット用の分割素材作成

### 未完了
- `LP_BEHAVIOR_CORE_NO_INDENT.js` の保存成功確認
- FAQ開閉の有効化確認
- PDFフォーム送信後の完了表示確認
- TimeRex予約導線のUTM引き継ぎ確認
- GA4 / Meta Pixel の有効化確認
- 実URLでの公開前テスト

## 今日の業務
1. 最優先: `JSなし公開優先` に方針を切り替える。
2. FAQは `FAQ_NOJS_FALLBACK_CSS.css` を使い、常時展開表示で公開を成立させる。
3. PDF導線は `PDF_FORM_NOJS_REPLACEMENT.html` に差し替え、送信後にPDFへ直接遷移する方式へ切り替える。
4. 予約CTAは既存の TimeRex 直リンクを維持し、カスタムJSによる UTM 引き継ぎは初回公開では外す。
5. GA4 / Meta の詳細イベント計測は初回公開では保留し、必要なら第2フェーズで再導入する。
6. 本日の結果を `day035` に追記し、成功/失敗条件と次回着手点を残す。

## 方針転換
- `WPCode Lite` への保存は、WordPressプラグイン停止後も `SiteGuard Lite` により `Forbidden access` で遮断された。
- 根本原因は `WPCode` の不具合ではなく、サーバー側セキュリティによるカスタムスクリプト保存ブロックと判断する。
- クライアントへ ConoHa 側操作を依頼する負担を避けるため、初回公開は「カスタムJSなしで成立する構成」を優先する。
- 詳細実行手順は `day035/NO_JS_PUBLISH_FIRST_PLAN.md` を参照する。

## 本日の開始点
- まずは FAQ の常時表示化と PDF フォーム差し替えから着手する。
- `WPCode Lite` を使ったカスタムスクリプト投入は初回公開では行わない。
- 作業元の正本は `day034/source/` から変えない。

## 想定ブロッカー
- HTMLブロック編集画面で、フォーム差し替え箇所を見つけにくい可能性がある。
- `formsubmit.co` 側の挙動確認は実送信テストが必要になる。
- GA4 / Meta の詳細計測は初回公開では確認対象から外す。

## 完了条件
- FAQ が常時表示で読める。
- PDFフォーム送信後にPDFへ遷移できる。
- 予約CTAが TimeRex へ遷移できる。
- 本日の実施内容、ブロッカー、次回着手点が `day035` に残っている。

## 参照ファイル
- `/Users/yuuki/Works/lp-100/day034/README.md`
- `/Users/yuuki/Works/lp-100/day034/REMOTE_SITE_STATUS.md`
- `/Users/yuuki/Works/lp-100/day034/POST_LOGIN_WORK_ROADMAP.md`
- `/Users/yuuki/Works/lp-100/day034/WORDPRESS_MIGRATION_CHECKLIST.md`
- `/Users/yuuki/Works/lp-100/day034/LP_BEHAVIOR_CORE_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/GA4_LOADER_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/META_PIXEL_LOADER_NO_INDENT.js`
- `/Users/yuuki/Works/lp-100/day034/source/`
