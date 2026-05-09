# Portfolio Site Implementation Plan

## 目的

Day093〜Day100 の8件を実績として見せる、ポートフォリオ専用の静的サイトを `/portfolio/` 配下に新規作成する。

このサイトは既存ルートサイトとは独立させる。既存ルートの `index.html`、`styles.css`、`script.js` は原則変更しない。特に root の `script.js` には未コミット変更があるため、この実装では触らない。

## 公開方針

- 表示名は「ゆうき」とする。
- 顔写真、本名フルネーム、本業情報は掲載しない。
- privateログ、analysis、プロンプト、内部評価メモ、作業中の判断メモは掲載しない。
- AI表現は「AIで作りました」ではなく、「AIを制作工程に組み込み、設計・実装・検証を回す」という制作体制として表現する。
- Day098 は猫YouTubeチャンネルLPとして一般化し、私物感や個人の飼育情報が強く出る表現は避ける。
- Contact には実用導線として `mailto:` を置く。公開用連絡先は `yuki.freelife@gmail.com` を使用する。
- 公開URLは `https://yuki-lp-portfolio.pages.dev/`。canonical、`og:url`、JSON-LD URLを追加し、`og:image` は絶対URLへ差し替え済み。
- `portfolio/docs/` は内部管理用ドキュメントのため、公開デプロイ対象から除外する。

## 対象ファイル構成

```text
portfolio/
  index.html
  works.html
  case-day100.html
  process.html
  contact.html
  privacy.html
  styles.css
  script.js
  assets/
    ogp.png
    works/
      day093.png
      day094.png
      day095.png
      day096.png
      day097.png
      day098.png
      day099.png
      day100.png
  docs/
    IMPLEMENTATION_PLAN.md
    TODO.md
    IMAGE_SOURCES.md
    README.md
```

## ページ設計

### `index.html`

役割: ファーストビューで制作実績の密度と方向性を伝えるトップページ。

構成:

- ヘッダー: ロゴ相当の「ゆうき」、主要ナビ `Works`、`Process`、`Contact`
- ファーストビュー:
  - 黒白ミニマルな画面構成
  - 複数実績のサムネイルを同時に見せる
  - 細い赤線をアクセントとして使用
  - キャッチコピーは制作体制を示す内容にする
- Featured Works: Day100 を主役に、Day093〜Day099 も横断的に見せる
- Process Preview: 設計、実装、検証を短く示す
- Contact CTA: `contact.html` への導線

### `works.html`

役割: Day093〜Day100 の8件を一覧する実績ページ。

構成:

- 8件のカードまたは editorial grid
- 各実績に以下を掲載:
  - Day番号
  - 一般化したLP名
  - 業種またはテーマ
  - 1〜2文の説明
  - 画像 `assets/works/dayXXX.png`
- 詳細リンクは Day100 のみ `case-day100.html` に設置
- Day098 は「猫YouTubeチャンネルLP」として扱い、個人所有感を出さない

### `case-day100.html`

役割: Day100 のみを詳細ケーススタディとして見せる。

構成:

- ケース概要
- 課題設定
- 設計方針
- 実装方針
- 検証観点
- 成果として見せる画面断片
- AI制作工程の説明:
  - AIを制作工程に組み込み、設計・実装・検証を回したことを説明
  - プロンプト、analysis、内部評価メモは載せない
- Works一覧への戻り導線

### `process.html`

役割: 制作プロセスと仕事の進め方を説明する。

構成:

- 企画整理
- 構成設計
- ビジュアル設計
- 実装
- ブラウザ検証
- 改善
- AI表現は「制作工程に組み込む」方向で統一

### `contact.html`

役割: 問い合わせ導線。

構成:

- 短い相談導線
- `mailto:yuki.freelife@gmail.com` のボタン
- 最小限のフォームUI
  - 名前
  - メール
  - 相談内容
  - 必須項目のクライアント側チェック
- 送信は外部サービス連携しない。入力内容から `mailto:` を生成する。
- 公開用メールアドレスは `yuki.freelife@gmail.com` に差し替え済み。

## デザイン方針

- 黒白ミニマル
- エディトリアル寄り
- 外部フォント依存なし
- 細い赤線をアクセントとして使う
- 余白、罫線、文字階層で密度を作る
- 角丸や装飾カードに頼りすぎない
- FVで複数実績を同時に見せる
- モバイルではサムネイルが潰れないよう、安定したアスペクト比を指定する
- 長い日本語テキストが折り返されてもUIを壊さないようにする

## 実装方針

- `/portfolio/` 配下だけで完結させる。
- 既存ルートの `index.html`、`styles.css`、`script.js` は変更しない。
- root の `script.js` は未コミット変更があるため絶対に変更しない。
- JavaScriptは `/portfolio/script.js` のみに書く。
- CSSは `/portfolio/styles.css` のみに書く。
- ナビゲーションは相対リンクで構成する。
- 画像は `portfolio/assets/works/day093.png`〜`day100.png` を参照する。
- 実績画像は、実装済みページを表示したBrowser Use/QAスクリーンショット、またはHTML/CSSの実態がある画面由来の画像だけを使う。実装画面ではなくモックアップ単体として作られた画像は、dayXXXのFVとして使わない。
- 画像が未準備の場合でもレイアウトが破綻しないよう、画像コンテナの寸法をCSSで固定する。
- Contactのメールアドレスは `script.js` の定数として管理する。

## コンテンツ設計

### 実績一覧

Day093〜Day100 の8件を扱う。タイトルや説明は公開向けに一般化する。

掲載しない情報:

- 本名フルネーム
- 顔写真
- 本業情報
- privateログ
- analysis
- プロンプト
- 内部評価メモ
- 個人の生活情報が強く出る記述

### Day098

Day098 は「猫YouTubeチャンネルLP」として扱う。

避ける表現:

- 個人の飼い猫を強く連想させる表現
- 私物感の強い説明
- 家庭内情報や個人生活に寄った文脈

使う表現:

- 猫動画チャンネル
- YouTubeチャンネルLP
- 視聴導線
- チャンネル登録導線
- 世界観設計

### AI表現

避ける表現:

- AIで作りました
- AIが自動生成しました
- プロンプトを公開します

使う表現:

- AIを制作工程に組み込み、設計・実装・検証を回す
- 制作判断、実装、検証を反復する
- ブラウザ検証を前提に品質を詰める

## 検収基準

実装完了時に以下を確認する。

### ファイル構成

- `portfolio/index.html` が存在する
- `portfolio/works.html` が存在する
- `portfolio/case-day100.html` が存在する
- `portfolio/process.html` が存在する
- `portfolio/contact.html` が存在する
- `portfolio/styles.css` が存在する
- `portfolio/script.js` が存在する
- `portfolio/assets/works/day093.png`〜`day100.png` が存在する

### コード検証

- `node --check portfolio/script.js` が成功する
- ローカルHTTPサーバーで `/portfolio/` を表示できる
- 既存ルートの `script.js` に変更が入っていない

### Browser Use画面チェック

Browser Useで以下を確認する。

- デスクトップ幅で `index.html`、`works.html`、`case-day100.html`、`process.html`、`contact.html` が表示できる
- モバイル幅で主要ページが破綻しない
- FVで複数実績が同時に見える
- 画像が404になっていない
- ナビゲーションが全ページで機能する
- Contactの `mailto:` が生成される
- フォーム必須項目のチェックが機能する
- 長い日本語テキストが折り返されても重なりやはみ出しが起きない

### 公開前プライバシーチェック

- 本名フルネームが出ていない
- 顔写真が出ていない
- 本業情報が出ていない
- privateログが出ていない
- analysisが出ていない
- プロンプトが出ていない
- 内部評価メモが出ていない
- Day098 が私物感の強い表現になっていない
- 仮メールが `yuki.freelife@gmail.com` に差し替えられている

## 実装順序

1. `portfolio/` 配下のファイル構成を作る
2. Day093〜Day100 の画像を `portfolio/assets/works/` に配置する
3. 各HTMLの共通ナビと基本構造を作る
4. `styles.css` で黒白ミニマル、細い赤線、editorial gridを実装する
5. `works.html` に8件の実績を掲載する
6. `case-day100.html` に詳細ケーススタディを実装する
7. `process.html` に制作工程を実装する
8. `contact.html` と `script.js` で `mailto:` 生成と必須チェックを実装する
9. `node --check portfolio/script.js` を実行する
10. ローカルHTTPサーバーを起動して表示確認する
11. Browser Useでデスクトップ/モバイルを確認する
12. 画像404、ナビ、mailto、フォーム必須、テキスト折返しを確認する
13. 公開前プライバシーチェックを行う

## リスクと注意点

- root の `script.js` に未コミット変更があるため、編集・整形・差し戻しをしない。
- 既存ルートサイトとCSS/JSの影響範囲を混ぜない。
- Contactの公開用メールが `yuki.freelife@gmail.com` になっていることを公開前に再確認する。
- 公開URL決定後の canonical、`og:url`、JSON-LD URL、`og:image` の絶対URL化は実施済み。
- `portfolio/docs/` が公開先へ混入しないよう、デプロイ設定またはアップロード対象で除外する。
- Day098 の説明が個人的になりすぎないよう、チャンネルLPとして一般化する。
- AI表現が軽く見えないよう、制作工程と検証体制として説明する。
