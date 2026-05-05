# Day100 パフォーマンス評価

評価日: 2026-05-05  
スコア: **88 / 100**

## 確認結果

| 項目 | 結果 |
|---|---|
| build | 成功 |
| main JS gzip | 約64KB |
| CSS gzip | 約7KB |
| AVIF選択 | 確認済み |
| 画像width/height | 指定あり |
| 横スクロール/CLSリスク | 低い |

## 良い点

- v2画像は `AVIF -> WebP -> PNG` で配信される。
- AVIFは73K〜84KでWebPより軽量。
- hero画像は `loading="eager"` / `fetchPriority="high"` を使っている。
- SPAとしてはbundleサイズが小さめ。

## 指摘

| 優先度 | 内容 | 影響 |
|---|---|---|
| P2 | LCP候補画像のpreloadは未設定 | 初回表示の安定性をさらに上げられる |
| P2 | `public/assets/v2` のPNG fallbackが大きい | 誤配信時の転送量リスク |
| P3 | Lighthouse実測は未実施 | Core Web Vitalsの数値評価は未確定 |

## 優先改善

1. `reception-flow-board.avif` のpreloadを検討。
2. 本番でAVIF/WebPのcache-controlを長期設定。
3. 公開前にLighthouseでLCP/CLS/INPを実測する。
