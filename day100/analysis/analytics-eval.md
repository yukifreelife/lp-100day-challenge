# Day100 アナリティクス評価

評価日: 2026-05-05  
スコア: **78 / 100**

## 良い点

- `VITE_GA_MEASUREMENT_ID` がある場合のみgtagを読み込む安全な構成。
- `contact_form_complete` と `cta_click` のイベントがある。
- paramsのPII系keyを除外する `sanitizeParams` がある。
- 測定ID未設定時は外部送信されない。

## 指摘

| 優先度 | 内容 | 影響 |
|---|---|---|
| P2 | 測定IDは未設定 | 実計測はまだ始まらない |
| P2 | page_viewやroute_change計測がない | hash routeごとの閲覧分析ができない |
| P2 | scroll depth計測がない | LP読了率を追いにくい |
| P3 | GA4 DebugView未確認 | 本番前の検証が必要 |

## 優先改善

1. 本番用 `VITE_GA_MEASUREMENT_ID` を設定。
2. hash route変更時のpage_viewを追加。
3. 25/50/75/90%のscroll depthを追加。
