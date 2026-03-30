# LP CTA Block - インストールガイド

## 概要

LP向けのCTAセクションブロックプラグイン。見出し、説明文、ボタンを編集可能。

## ブロック機能

- 見出しの編集
- 説明文の編集
- ボタンテキスト・リンク先の編集
- 背景色・文字色の設定
- 配置（左/中央/右）の設定

## WordPressへのインストール手順

### 1. プラグインファイルの配置

```bash
# WordPressのpluginsディレクトリにコピー
cp -r /Users/yuuki/Works/lp-100/day063/current/lp-cta-block /path/to/wordpress/wp-content/plugins/
```

または、ZIPファイルでインストール：

```bash
cd /Users/yuuki/Works/lp-100/day063/current/lp-cta-block
zip -r lp-cta-block.zip . -x "node_modules/*" ".git/*" "src/*" "package*.json"
```

### 2. 管理画面から有効化

1. WordPress管理画面にログイン
2. プラグイン > 新規追加
3. プラグインのアップロード
4. `lp-cta-block.zip` を選択してインストール
5. 「今すぐ有効化」をクリック

### 3. ブロックの使用

1. 投稿または固定ページを編集
2. ブロック追加（+）ボタンをクリック
3. 「LP CTA Section」を検索して追加
4. サイドバーの設定パネルで内容を編集

## 開発環境のセットアップ

```bash
cd /Users/yuuki/Works/lp-100/day063/current/lp-cta-block
npm install
npm run build
```

開発モードで実行：

```bash
npm run start
```

## ファイル構成

```
lp-cta-block/
├── build/              # ビルド出力（WordPressで使用）
├── src/
│   └── lp-cta-block/
│       ├── block.json  # ブロック定義
│       ├── edit.js     # エディタ表示
│       ├── save.js     # フロント表示
│       ├── index.js    # ブロック登録
│       ├── view.js     # フロント用スクリプト
│       ├── style.scss  # フロント&エディタ用スタイル
│       └── editor.scss # エディタ専用スタイル
├── lp-cta-block.php    # プラグインメインファイル
└── package.json
```

## カスタマイズ

### 色のデフォルト値変更

`src/lp-cta-block/block.json` の `attributes` を編集：

```json
"backgroundColor": {
	"type": "string",
	"default": "#f8f9fa"  // 任意の色コード
}
```

### スタイルの変更

`src/lp-cta-block/style.scss` を編集後、ビルド：

```bash
npm run build
```

## 動作確認環境

- WordPress 6.1以上
- PHP 7.4以上

## トラブルシューティング

### ブロックが表示されない

1. プラグインが有効化されているか確認
2. ブラウザキャッシュをクリア
3. WordPressデバッグモードを有効にしてエラー確認

### スタイルが反映されない

1. `npm run build` を再実行
2. ブラウザのハードリロード（Cmd+Shift+R）

### ビルドエラー

```bash
node_modules を削除して再インストール
rm -rf node_modules package-lock.json
npm install
```
