# Day034 - WordPress移行実装途中とJS保存ブロック整理（ポートフォリオ作業ログ）

## ラベル（検索用）
**Labels:** `lp` `wordpress` `migration` `wp-admin` `wpcode` `waf` `client-ops` `day034` `portfolio-worklog`

lp:audience=非エンジニアのクライアント
lp:goal=WordPress反映 + 公開前テスト着手
lp:industry=パーソナルトレーニング
lp:objective=静的LPのWordPress移行とJS保存ブロックの切り分け
lp:status=js-save-blocked
lp:env=wordpress-manual-migration

---

## 記録について
- 当日の分単位の実測ログは見つからなかったため、このファイルは `README.md`、移行メモ、Codex チャットのタイムスタンプをもとに再構成している。

---

## 今日の成果
- Day034の目的:
  - Day032正本を WordPress 上へ反映し、公開前テストまで進める
- 実施内容:
  - WordPress移行の前提整理
    - 実サイトURL、ログインURL、作業用管理者アカウントを受領
    - 手動反映ベースでの進行に切り替え
  - コンテンツ移行の進行
    - LP本文、画像/PDF差し替え、法務ページURLの反映を進行
    - `.legal` 用の追加CSSを移行元CSSへ統合
  - WordPress実装用素材の整備
    - `TOP_PAGE_CUSTOM_HTML_TEMPLATE.html` を、法務ページURL込みの状態まで更新
    - `LP_CONFIG_*`、`LP_BEHAVIOR_*`、`GA4_*`、`META_PIXEL_*` など、コードスニペット用の分割素材を用意
  - JS保存ブロックの切り分け
    - 本文末尾に直接 `<script>` を置く方式は不採用と判断
    - `NO_INDENT` 系スニペットで構文警告は回避
    - それでも保存時に `Forbidden access` が発生し、ConoHa 側 WAF / mod_security が主因と判断
  - 次回着手点の固定
    - 次回は `LP_BEHAVIOR_CORE_NO_INDENT.js` 単体保存の再試行から再開する方針を明文化

---

## 作業時間（再構成メモ）
- 当日の実測時間は未記録。ただし、Codex チャットの開始/完了時刻と成果物更新順をもとに、以下を参考時間として再構成した。
- WordPress管理画面の前提確認と移行順序の整理: 約25分
- 本文・法務・URL反映の貼り込み準備: 約55分
- コードスニペット用素材の分割と整形: 約45分
- WAF / `Forbidden access` の切り分け: 約55分
- 次回再開手順の整理と移行メモ更新: 約20分
- 参考合計: 約200分（3時間20分）

---

## 主要成果物
- WordPress反映用テンプレート
  - `/Users/yuuki/Works/lp-100/day034/TOP_PAGE_CUSTOM_HTML_TEMPLATE.html`
  - `/Users/yuuki/Works/lp-100/day034/PAGE_BOTTOM_SCRIPT_SNIPPET.html`
  - `/Users/yuuki/Works/lp-100/day034/PDF_FORM_NOJS_REPLACEMENT.html`
- コードスニペット用素材
  - `/Users/yuuki/Works/lp-100/day034/LP_CONFIG_INLINE.js`
  - `/Users/yuuki/Works/lp-100/day034/LP_CONFIG_INLINE_NO_INDENT.js`
  - `/Users/yuuki/Works/lp-100/day034/LP_BEHAVIOR_SNIPPET.js`
  - `/Users/yuuki/Works/lp-100/day034/LP_BEHAVIOR_SNIPPET_NO_INDENT.js`
  - `/Users/yuuki/Works/lp-100/day034/LP_BEHAVIOR_CORE_NO_INDENT.js`
  - `/Users/yuuki/Works/lp-100/day034/GA4_LOADER_NO_INDENT.js`
  - `/Users/yuuki/Works/lp-100/day034/META_PIXEL_LOADER_NO_INDENT.js`
- 移行手順・判断資料
  - `/Users/yuuki/Works/lp-100/day034/POST_LOGIN_WORK_ROADMAP.md`
  - `/Users/yuuki/Works/lp-100/day034/WORDPRESS_IMPLEMENTATION_MAP.md`
  - `/Users/yuuki/Works/lp-100/day034/WORDPRESS_MIGRATION_CHECKLIST.md`
  - `/Users/yuuki/Works/lp-100/day034/WORDPRESS_REPLACEMENT_MATRIX.md`
  - `/Users/yuuki/Works/lp-100/day034/WORDPRESS_ADMIN_CLICK_STEPS.md`
  - `/Users/yuuki/Works/lp-100/day034/REMOTE_SITE_STATUS.md`
- WordPress移行元正本
  - `/Users/yuuki/Works/lp-100/day034/source/index.html`
  - `/Users/yuuki/Works/lp-100/day034/source/styles.css`
  - `/Users/yuuki/Works/lp-100/day034/source/script.js`
  - `/Users/yuuki/Works/lp-100/day034/source/privacy.html`
  - `/Users/yuuki/Works/lp-100/day034/source/tokushoho.html`
- 確認スクリーンショット
  - `/Users/yuuki/Works/lp-100/day034/day034PC.png`
  - `/Users/yuuki/Works/lp-100/day034/day034PCFV.png`
  - `/Users/yuuki/Works/lp-100/day034/day034SP.png`
  - `/Users/yuuki/Works/lp-100/day034/day034SPFV.png`

---

## 現在の設定値
`source/index.html` 内 `window.LP_CONFIG`:
- `reservationUrl`: `https://timerex.net/s/bodymake_tokyo_yuta`
- `leadEndpoint`: `https://formsubmit.co/ajax/contact@bodymake-yuta.com`
- `gaMeasurementId`: `G-CQB0QSMF7F`
- `metaPixelId`: `871190680965123`
- `pdfDownloadUrl`: `./downloads/food-checklist.pdf`

WordPress作業前提:
- サイトURL: `https://yuki-freelife.com/lp-review`
- ログインURL: `https://yuki-freelife.com/lp-review/wp-admin/`
- 作業用管理者アカウント: `lpadmin`

---

## 次回やること（Day035）
1. `LP_BEHAVIOR_CORE_NO_INDENT.js` の単体保存を再試行する
2. 保存不可なら WAF 影響前提で、`JSなし公開優先` の代替案へ切り替える
3. FAQ、PDF導線、予約CTAを「JSなしでも成立する構成」に落とし込む
