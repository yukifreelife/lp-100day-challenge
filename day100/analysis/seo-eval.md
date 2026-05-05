# Day100 SEO評価

評価日: 2026-05-05  
スコア: **84 / 100**

## 良い点

- `lang="ja"`, viewport, title, description, canonicalがある。
- OGP/Twitter Cardが設定済み。
- JSON-LDはWebSite/Service/FAQPageを含む。
- H1は各hash routeで1つずつ表示され、訴求キーワードも明確。

## 指摘

| 優先度 | 内容 | 影響 |
|---|---|---|
| P1 | canonical/OGP/JSON-LDが `example.com` の暫定値 | 公開前に必ず差し替えが必要 |
| P2 | OGP画像がSVG | SNS側によってはJPEG/PNG推奨のため確認が必要 |
| P2 | hash route構成 | 検索上は単一ページ扱いになりやすい |
| P3 | route別title/descriptionは出し分けなし | サブページの検索流入は弱い |

## 優先改善

1. 本番URL決定後にcanonical/OGP/JSON-LDを一括差し替え。
2. OGPを1200x630 PNG/JPEGでも用意する。
3. SEO流入を狙うならhash routeではなく静的route化を検討。
