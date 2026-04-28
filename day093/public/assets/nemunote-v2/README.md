# NemuNote v2 Assets

睡眠アプリ LP の実装で再利用するために、生成画像から素材を切り出したアセット一式です。

## Directory

- `sources/`
  - 生成された素材シートと LP 全体リファレンスをそのまま保存しています。
  - 再抽出が必要な場合の元画像として使います。
- `references/`
  - 生成された各セクションのモック画像です。
  - 実装時の見た目確認用で、LP 上にそのまま表示する素材ではありません。
- `extracted/`
  - 素材シートから自動抽出した透過 PNG です。
  - 必要に応じて追加選定できます。
- `curated/`
  - LP 実装で優先して使う採用済み素材です。
  - 装飾、アイコン、写真、スマホ画面、ストアバッジ、QR を含みます。
- `asset-manifest.json`
  - 自動抽出された全素材の一覧です。
- `curated-manifest.json`
  - 採用済み素材の一覧です。
- `curated-contact-sheet.jpg`
  - 採用済み素材の確認用一覧画像です。

## Current Inventory

- source sheets: 5 files
- section references: 9 files
- raw extracted transparent PNGs: 76 files
- curated reusable assets: 44 files

## Usage Notes

- 実装時はまず `curated/` の素材を使用してください。
- `decor-*`, `icon-*`, `phone-*`, `photo-*` は透過 PNG として抽出済みです。
- `lp-*` は LP 全体リファレンスから切り出した矩形素材です。ストアバッジ、QR、ダウンロード帯、ヒーロー端末画像など、素材シートに存在しないものを補完しています。
- `references/` はピクセル再現の比較用です。ページのセクション画像として貼り付ける用途では使わないでください。
