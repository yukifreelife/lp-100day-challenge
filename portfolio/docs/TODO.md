# Portfolio Site TODO

## 現在の進捗

- 実装完了: `portfolio/` 配下の複数ページ、共通CSS、JS、実績画像、OGP画像、プライバシーポリシー、計画書、画像出典メモを作成済み。
- 検証完了: `node --check portfolio/script.js`、Browser Useでトップ/Works/Case/Process/Contact/Privacy表示、Contact必須チェック、メール作成ステータス表示、実績画像表示を確認済み。
- 追加対応済み: 実績画像はHTML/CSSの実態がある実装済みページのBrowser Use/QAスクリーンショット由来に差し替え済み。モックアップ単体画像はFVとして使用していない。
- 公開用連絡先: `yuki.freelife@gmail.com` に差し替え済み。
- 公開除外: root の `_config.yml` で `portfolio/docs` を除外済み。手動アップロード時はアップロード対象から外す。
- 公開URL: `https://yuki-lp-portfolio.pages.dev/`。canonical / `og:url` / JSON-LD URL を追加し、`og:image` を絶対URLへ差し替え済み。
- 注意: root の `script.js` には既存の未コミット変更がある。`portfolio/` 実装では巻き戻さず、最終確認時に変更範囲を分けて扱う。
- 注意: Browser Useの現在タブは表示幅779pxで確認済み。Browser Use単体で760px未満へviewportを切り替えるAPIが見当たらないため、390pxの厳密なモバイル確認はPlaywrightで補助検証済み。
- Cloudflare公開準備: `/Users/yuuki/Works/yuki-lp-portfolio` に公開専用repoを作成し、GitHub経由でCloudflare Pagesへ接続済み。`portfolio/docs/` と `../dayXXX` への相対リンクは含めない。

## 0. 作業前確認

- [x] `git status --short` で既存の未コミット変更を確認する
- [x] root の `script.js` に既存未コミット変更があることを確認する
- [x] 実装対象を `/portfolio/` 配下に限定する方針を確認する
- [x] `IMPLEMENTATION_PLAN.md` を読み、公開方針と検収基準を確認する

## 1. ファイル構成

- [x] `portfolio/index.html` を作成する
- [x] `portfolio/works.html` を作成する
- [x] `portfolio/case-day100.html` を作成する
- [x] `portfolio/process.html` を作成する
- [x] `portfolio/contact.html` を作成する
- [x] `portfolio/privacy.html` を作成する
- [x] `portfolio/styles.css` を作成する
- [x] `portfolio/script.js` を作成する
- [x] `portfolio/assets/ogp.png` を作成する
- [x] `portfolio/assets/works/` を作成する
- [x] `portfolio/assets/works/day093.png` を配置する
- [x] `portfolio/assets/works/day094.png` を配置する
- [x] `portfolio/assets/works/day095.png` を配置する
- [x] `portfolio/assets/works/day096.png` を配置する
- [x] `portfolio/assets/works/day097.png` を配置する
- [x] `portfolio/assets/works/day098.png` を配置する
- [x] `portfolio/assets/works/day099.png` を配置する
- [x] `portfolio/assets/works/day100.png` を配置する
- [x] 各画像が実装済みページのBrowser Use/QAスクリーンショット由来であり、モックアップ単体画像ではないことを確認する

## 2. 共通UI

- [x] 全ページに共通ヘッダーを実装する
- [x] 表示名を「ゆうき」にする
- [x] ナビゲーションに `Works`、`Process`、`Contact` を置く
- [x] 全ページで相対リンクが正しく動くようにする
- [x] フッターに必要最小限の情報を置く
- [x] プライバシーポリシーへの導線を置く
- [x] 顔写真、本名フルネーム、本業情報を入れない

## 3. トップページ

- [x] `index.html` のFVを実装する
- [x] FVで複数実績を同時に見せる
- [x] 黒白ミニマルな第一印象にする
- [x] 細い赤線をアクセントとして入れる
- [x] AI表現を「AIを制作工程に組み込み、設計・実装・検証を回す」に寄せる
- [x] Day100への詳細導線を置く
- [x] Works一覧への導線を置く
- [x] Contactへの導線を置く

## 4. Works一覧

- [x] `works.html` に Day093〜Day100 の8件を掲載する
- [x] 各実績に Day番号を表示する
- [x] 各実績に公開向けに一般化したタイトルを付ける
- [x] 各実績に1〜2文の説明を付ける
- [x] 各実績に画像を表示する
- [x] Day100 のみに詳細ページリンクを付ける
- [x] Day098 を猫YouTubeチャンネルLPとして一般化する
- [x] Day098 に私物感や個人生活感が出すぎていないか確認する

## 5. Day100ケーススタディ

- [x] `case-day100.html` に概要を入れる
- [x] 課題設定を入れる
- [x] 設計方針を入れる
- [x] 実装方針を入れる
- [x] 検証観点を入れる
- [x] 成果画面の見せ場を作る
- [x] AIを制作工程に組み込む説明を入れる
- [x] プロンプト、analysis、内部評価メモを入れていないか確認する
- [x] Works一覧へ戻る導線を置く

## 6. Processページ

- [x] `process.html` に制作工程を整理する
- [x] 企画整理の説明を入れる
- [x] 構成設計の説明を入れる
- [x] ビジュアル設計の説明を入れる
- [x] 実装の説明を入れる
- [x] ブラウザ検証の説明を入れる
- [x] 改善の説明を入れる
- [x] 「AIで作りました」ではなく制作体制として説明する

## 7. Contactページ

- [x] `contact.html` に問い合わせ導線を置く
- [x] `mailto:yuki.freelife@gmail.com` の直接メールリンクを置く
- [x] 名前入力を作る
- [x] メール入力を作る
- [x] 相談内容入力を作る
- [x] 必須項目のクライアント側チェックを実装する
- [x] 入力内容から `mailto:` を生成する
- [x] 仮メールを `yuki.freelife@gmail.com` へ差し替える

## 8. CSS実装

- [x] 外部フォント依存を入れない
- [x] 黒白ミニマルをベースにする
- [x] 細い赤線をアクセントにする
- [x] エディトリアルなグリッドを作る
- [x] 画像コンテナに安定したアスペクト比を指定する
- [x] モバイルで実績一覧が潰れないようにする
- [x] 長い日本語テキストが自然に折り返されるようにする
- [x] ボタンやリンクのフォーカス状態を実装する

## 9. JavaScript実装

- [x] `/portfolio/script.js` のみに処理を書く
- [x] Contactのメールアドレスを定数で管理する
- [x] フォーム必須チェックを実装する
- [x] `mailto:` URL生成を実装する
- [x] 空欄時のエラー表示を実装する
- [x] メール形式チェックを実装する
- [x] `node --check portfolio/script.js` が通るようにする

## 10. ローカル検証

- [x] `node --check portfolio/script.js` を実行する
- [x] ローカルHTTPサーバーで `/portfolio/` を表示する
- [x] `/portfolio/index.html` を表示する
- [x] `/portfolio/works.html` を表示する
- [x] `/portfolio/case-day100.html` を表示する
- [x] `/portfolio/process.html` を表示する
- [x] `/portfolio/contact.html` を表示する
- [x] `/portfolio/privacy.html` を表示する

## 11. Browser Use検証

- [x] Browser Useでデスクトップ幅のトップページを確認する
- [x] Browser Useでデスクトップ幅のWorks一覧を確認する
- [x] Browser Useでデスクトップ幅のDay100詳細を確認する
- [x] Browser Useでデスクトップ幅のProcessを確認する
- [x] Browser Useでデスクトップ幅のContactを確認する
- [x] Browser UseでPrivacyを確認する
- [x] Playwright補助で390px幅のトップページを最終確認する
- [x] Playwright補助で390px幅のWorks一覧を最終確認する
- [x] FVで複数実績が同時に見えることを確認する
- [x] 画像が404になっていないことを確認する
- [x] 実績画像にHTML/CSSの実態を伴わないモックアップ画像が混じっていないことを確認する
- [x] ナビゲーションが全ページで機能することを確認する
- [x] Contactの `mailto:` が生成されることを確認する
- [x] フォーム必須項目のチェックが機能することを確認する
- [x] テキスト折返しで重なりやはみ出しがないことを390px幅で最終確認する

## 12. 公開前プライバシーチェック

- [x] 本名フルネームが出ていない
- [x] 顔写真が出ていない
- [x] 本業情報が出ていない
- [x] privateログが出ていない
- [x] analysisが出ていない
- [x] プロンプトが出ていない
- [x] 内部評価メモが出ていない
- [x] Day098 が私物感の強い表現になっていない
- [x] Contactの仮メールを `yuki.freelife@gmail.com` に差し替えた

## 13. 残タスク

- [x] 公開URLが決まったら `portfolio/*.html` の canonical / `og:url` / JSON-LD URLを追加し、`og:image` を絶対URLへ差し替える
- [x] GitHub Pages / Jekyll 用に `_config.yml` で `portfolio/docs/` を公開対象から除外する
- [ ] 手動アップロードする場合は `portfolio/docs/` をアップロード対象から除外する
- [x] Cloudflare Pages用の公開専用repo雛形 `/Users/yuuki/Works/yuki-lp-portfolio` を作成する
- [x] 公開専用repo雛形から `portfolio/docs/` と `../dayXXX` リンクを除外する
- [x] 公開専用repo雛形をルート配信としてローカル確認する
- [x] 公開専用repo雛形をGit初期化し、初回コミットを作成する
- [x] GitHub CLIを再認証する
- [x] `yuki-lp-portfolio` のPrivate GitHub repoを作成して初回pushする
- [x] Cloudflare Pagesで `yuki-lp-portfolio` Projectを作成し、GitHub repoを接続する
- [x] Playwright補助で390px幅のトップページ、Works一覧、テキスト折返しを最終確認する
- [x] root の `script.js` 既存変更と `portfolio/` 新規サイト変更を分けて最終確認する

## 14. 完了条件

- [x] `portfolio/docs/IMPLEMENTATION_PLAN.md` の検収基準を概ね満たしている
- [x] `/portfolio/` 配下だけで新規サイトが完結している
- [x] 公開前プライバシーチェックを完了済み
- [x] 公開URL決定後のURL差し替えを完了済み
- [x] 390px幅のモバイル最終確認済み
- [x] root の `script.js` の既存変更を含む最終差分確認済み
