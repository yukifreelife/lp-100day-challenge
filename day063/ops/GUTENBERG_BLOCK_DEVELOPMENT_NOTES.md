# Gutenbergブロック開発 - 学びメモ

## ブロック開発の基本構造

### 1. block.json - ブロック定義

ブロックのメタデータを定義するファイル。

```json
{
	"name": "lp-blocks/cta-section",  // 一意の識別子（namespace/block-name）
	"title": "LP CTA Section",         // エディタに表示される名前
	"category": "layout",               // ブロックカテゴリ
	"icon": "megaphone",                // アイコン
	"attributes": { ... }               // 編集可能な属性
}
```

### 2. attributes - ブロックのデータ構造

ブロック内で編集可能なデータを定義。

```json
"attributes": {
	"heading": {
		"type": "string",
		"default": "お問い合わせはこちらから"
	},
	"backgroundColor": {
		"type": "string",
		"default": "#f8f9fa"
	}
}
```

属性の型：
- `string`: テキスト
- `number`: 数値
- `boolean`: 真偽値
- `array`: 配列
- `object`: オブジェクト

### 3. edit.js - エディタ表示

エディタ上でのブロックの見た目と挙動を定義。

```javascript
export default function Edit( { attributes, setAttributes } ) {
	return (
		<InspectorControls>
			{/* サイドバーの設定UI */}
		</InspectorControls>
		<div { ...useBlockProps() }>
			{/* エディタ表示 */}
		</div>
	);
}
```

主要なフック：
- `useBlockProps()`: ブロックラッパーのprops
- `setAttributes()`: 属性の更新

### 4. save.js - フロント表示

保存時のHTML出力を定義。

```javascript
export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			{/* フロント表示 */}
		</div>
	);
}
```

### 5. index.js - ブロック登録

ブロックをWordPressに登録。

```javascript
registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
```

## よく使うコンポーネント

### RichText

リッチテキスト編集可能なフィールド。

```javascript
<RichText
	tagName="h2"
	value={ heading }
	onChange={ ( value ) => setAttributes( { heading: value } ) }
	placeholder={ __( '見出しを入力...', 'lp-cta-block' ) }
/>
```

### InspectorControls

サイドバーの設定パネル。

```javascript
<InspectorControls>
	<PanelBody title={ __( '設定', 'lp-cta-block' ) }>
		<TextControl
			label={ __( '見出し', 'lp-cta-block' ) }
			value={ heading }
			onChange={ ( value ) => setAttributes( { heading: value } ) }
		/>
	</PanelBody>
</InspectorControls>
```

### ColorPalette

色選択パレット。

```javascript
<ColorPalette
	value={ backgroundColor }
	onChange={ ( value ) => setAttributes( { backgroundColor: value } ) }
/>
```

## スタイルの適用

### style.scss

フロントとエディタの両方に適用されるスタイル。

### editor.scss

エディタのみに適用されるスタイル。

```scss
// ブロック名は自動的に付与される
.wp-block-lp-blocks-cta-section {
	border: 1px dashed #ccc;
}
```

## 開発ワークフロー

```bash
# 1. プロジェクト作成
npx @wordpress/create-block my-block

# 2. 依存関係インストール
npm install

# 3. 開発（ファイル監視）
npm run start

# 4. ビルド
npm run build
```

## 実案件での活用シナリオ

### CTAセクション
- お問い合わせボタン
- 資料ダウンロードボタン
- 来店予約ボタン

### お客様の声セクション
- 名前・会社名
- アイコン画像
- 評価（星）

### 製品/サービス紹介セクション
- 画像
- タイトル
- 説明文
- 価格

## 参考リンク

- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [create-block](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/)
- [WordPress Components](https://developer.wordpress.org/block-editor/reference-guides/components/)
