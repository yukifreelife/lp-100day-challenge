# Assets

- 対象: `day100`
- 更新日: 2026-05-05
- 目的: LPで使う画像、アイコン、生成素材の出所、用途、形式、派生関係を再利用しやすい形で整理する。

## アセット方針

- `mockups/` 配下の参照画像は、実装時の見た目確認用であり、LPの背景画像としてそのまま貼らない。
- runtimeで参照する画像は、`public/assets/generated/` 配下の個別アセットに分けて管理する。
- レイアウト、カード、テキスト、フォーム、導線、装飾線はDOM/CSSで実装し、画像は地図ボード、方位磁針、人物、ピン、付箋などの部分素材として使う。
- `*.png` は元画像または透過背景を含むfallbackとして保持し、v2素材は `*.avif` を第一候補、`*.webp` を第二候補、`*.png` を最終fallbackとして扱う。
- 生成素材として管理しているが、生成プロンプト、生成時の参照有無、利用条件の完全な証跡は現ファイル群だけでは断定しない。公開前に出所・利用条件を再確認する。

## 公開用ファイル一覧

現時点で `public/assets/*.png` 直下のPNGは存在せず、公開用画像は `public/assets/generated/` に集約されている。

| Path | 形式 | サイズ | 寸法 | 用途 |
|---|---:|---:|---:|---|
| `public/assets/generated/business-map-board.png` | PNG / RGB | 1.9M | 1586x992 | 地図ボードの元画像、fallback。透過なし。 |
| `public/assets/generated/business-map-board.webp` | WebP | 123K | 1586x992 | 地図ボードの通常表示用。 |
| `public/assets/generated/business-map-board-sm.webp` | WebP | 18K | 640x400 | 地図ボードの小さい表示幅向け派生。 |
| `public/assets/generated/compass.png` | PNG / RGBA | 1.3M | 1254x1254 | 方位磁針の元画像、fallback。透過背景あり。 |
| `public/assets/generated/compass.webp` | WebP | 141K | 1254x1254 | 方位磁針の通常表示用。 |
| `public/assets/generated/compass-sm.webp` | WebP | 45K | 640w相当 | 方位磁針の小さい表示幅向け派生。 |
| `public/assets/generated/consultant.png` | PNG / RGBA | 708K | 1536x1024 | 相談者/案内役人物の元画像、fallback。透過背景あり。 |
| `public/assets/generated/consultant.webp` | WebP | 66K | 1536x1024 | 相談者/案内役人物の通常表示用。 |
| `public/assets/generated/consultant-sm.webp` | WebP | 21K | 640w相当 | 相談者/案内役人物の小さい表示幅向け派生。 |
| `public/assets/generated/route-pins.png` | PNG / RGBA | 542K | 1774x887 | ルートピンの元画像、fallback。透過背景あり。 |
| `public/assets/generated/route-pins.webp` | WebP | 64K | 1774x887 | ルートピンの通常表示用。 |
| `public/assets/generated/route-pins-sm.webp` | WebP | 16K | 640w相当 | ルートピンの小さい表示幅向け派生。 |
| `public/assets/generated/sticky-notes.png` | PNG / RGBA | 1.6M | 1254x1254 | 付箋の元画像、fallback。透過背景あり。 |
| `public/assets/generated/sticky-notes.webp` | WebP | 128K | 1254x1254 | 付箋の通常表示用。 |
| `public/assets/generated/sticky-notes-sm.webp` | WebP | 49K | 640w相当 | 付箋の小さい表示幅向け派生。 |

## `public/assets/*.png` の用途

`public/assets/` 直下には、現在 `*.png` は配置されていない。LP実装で使うPNG fallbackはすべて `public/assets/generated/*.png` に置かれている。

| 対象 | 現状 | 運用 |
|---|---|---|
| `public/assets/*.png` | 該当なし | 直下には追加せず、生成素材は `public/assets/generated/` に集約する。 |
| `public/assets/generated/*.png` | 5点あり | WebP非対応時のfallback、または透過背景を保持する元画像として扱う。 |

## WebP派生関係

| 元PNG | 通常WebP | 小サイズWebP | 実装参照 |
|---|---|---|---|
| `business-map-board.png` | `business-map-board.webp` | `business-map-board-sm.webp` | `businessMapBoard.srcSet` で 640w / 1586w を指定。 |
| `compass.png` | `compass.webp` | `compass-sm.webp` | `compass.srcSet` で 640w / 1254w を指定。 |
| `consultant.png` | `consultant.webp` | `consultant-sm.webp` | `consultant.srcSet` で 640w / 1536w を指定。 |
| `route-pins.png` | `route-pins.webp` | `route-pins-sm.webp` | `routePins.srcSet` で 640w / 1774w を指定。 |
| `sticky-notes.png` | `sticky-notes.webp` | `sticky-notes-sm.webp` | `stickyNotes.srcSet` で 640w / 1254w を指定。 |

`*.webp` と `*-sm.webp` は、同名のPNGを表示用に軽量化した派生ファイルとして扱う。再生成する場合は、PNG元画像、通常WebP、小サイズWebPの3点を同じ命名で更新し、`src/data/siteData.js` の `width`、`height`、`srcSet` と矛盾しないか確認する。

## v2 AVIF派生関係

`public/assets/v2/` の新規ペルソナ再設計素材は、`SmartImage` の `<picture>` 出力で次の順に配信する。

```text
AVIF -> WebP -> PNG
```

| 元PNG | AVIF | WebP | 実装参照 |
|---|---|---|---|
| `reception-flow-board.png` | `reception-flow-board.avif` | `reception-flow-board.webp` | `assetsV2.receptionFlowBoard` |
| `reception-file-box.png` | `reception-file-box.avif` | `reception-file-box.webp` | `assetsV2.receptionFileBox` |
| `contact-desk-files.png` | `contact-desk-files.avif` | `contact-desk-files.webp` | `assetsV2.contactDeskFiles` |

AVIFは `avifenc`、WebPは `cwebp` で生成する。PNGは透過状態を保持する最終fallbackとして残す。

## OGP

| Path | 形式 | 用途 | 注意 |
|---|---|---|---|
| `public/ogp.svg` | SVG | OGP / Twitterカード用画像。`index.html` の `og:image` と `twitter:image` で参照される。 | 現在のURLは `https://example.com/day100/ogp.svg`。公開時は本番URLへ差し替え確認が必要。 |

## 透明背景・アイコン扱い

- `compass.png`、`consultant.png`、`route-pins.png`、`sticky-notes.png` はRGBAの透過PNGとして確認済み。
- `business-map-board.png` はRGBで透過なし。背景になじませる場合はCSS側で余白、影、角丸、配置を調整する。
- 透過PNGはアイコン的な部分素材として使えるが、UIアイコンやボタン記号は原則としてDOM/CSSまたはアイコンライブラリで実装する。
- `route-pins.png` は複数ピンを含む画像素材のため、小さなインラインマーカー用途ではCSSピンや既存コンポーネントの方が適する場合がある。
- 透過加工済みPNGではC2PA等のメタデータが失われる可能性があるため、出所確認は `assets/generated/raw/` のraw生成素材や `design/asset-manifest.md` と合わせて行う。

## 出所・ライセンス確認メモ

- `design/asset-manifest.md` では、公開用runtime素材は `/image-gen` 生成物、または `/image-gen` 生成物からのchroma-key removal派生として整理されている。
- `analysis/image-license-eval.md` では、外部ストック画像URLやmockup画像のruntime直貼りは確認されていない。
- ただし、生成プロンプト、生成時の参照画像有無、生成アカウントの利用条件、商用利用判断はこのファイルだけでは断定しない。
- 公開前には、生成素材としての利用条件、外部参照画像の有無、必要な帰属表示、OGP URL、素材を営業資料やポートフォリオへ二次利用する範囲を確認する。
- 今後外部写真、第三者アイコン、CC素材、ロゴ等を追加する場合は、追加前にURL、作者、ライセンス、商用可否、改変可否、帰属表示文、取得日をこのファイルへ追記する。

## 関連ファイル

- `design/asset-manifest.md`: mockup、runtime asset、raw生成素材の基本整理。
- `analysis/image-license-eval.md`: 画像出所とライセンス観点の評価メモ。
- `src/data/siteData.js`: 実装で参照している画像パス、寸法、`srcSet`。
