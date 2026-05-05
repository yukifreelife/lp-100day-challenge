# Day100 コードレビュー評価

評価日: 2026-05-05  
スコア: **88 / 100**

## 良い点

- `siteData.js` に主要文言とデータが集約され、ページ側の構造が読みやすい。
- `ButtonLink`, `SmartImage`, `Accordion`, `ContactFormShell` が再利用され、重複が少ない。
- フォームは外部送信せず、完了表示と計測イベントを分けている。
- AVIF導入後もfallbackを保持しており、互換性に配慮できている。

## 指摘

| 優先度 | 箇所 | 内容 |
|---|---|---|
| P2 | `src/data/siteData.js` | v1互換の `assetsLegacy` が残っており、今後の誤参照リスクがある |
| P2 | SEO/route構成 | hash route依存のため、ページ単位のメタ情報を出し分けられない |
| P3 | `SmartImage` | AVIF/WebPのsourceは追加済みだが、preload対象の指定までは未実装 |

## 優先改善

1. v2だけで完結するなら `assetsLegacy` と古い互換名を整理する。
2. 公開時にLP単体でよいか、ページ別URLが必要か決める。
3. LCP画像だけ `<link rel="preload" as="image">` を検討する。
