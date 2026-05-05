# Day100 セキュリティ評価

評価日: 2026-05-05  
スコア: **86 / 100**

## 確認結果

| 項目 | 結果 |
|---|---|
| `npm audit --audit-level=moderate` | 0 vulnerabilities |
| secretらしき値 | 検出なし |
| `innerHTML` / `dangerouslySetInnerHTML` / `eval` | 検出なし |
| 外部送信 | GA4測定ID設定時のみgtag読み込み |
| フォーム | 現状は外部送信なし |

## 良い点

- フォーム入力値は外部送信されず、完了表示のみ。
- analyticsのparamsはPII系keyを除外して送る設計。
- DOMへ危険なHTML挿入をしていない。
- 依存関係監査で既知脆弱性なし。

## 指摘

| 優先度 | 内容 | 影響 |
|---|---|---|
| P2 | CSPなどのsecurity headersはViteアプリ側では未設定 | 本番配信側で設定が必要 |
| P2 | GA4有効化時のプライバシー記載更新が必要 | 計測開始時の説明不足リスク |
| P3 | `example.com` の暫定URLが残る | 本番前の差し替え漏れリスク |

## 優先改善

1. 本番配信で `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy` を設定。
2. GA4測定IDを入れる場合はプライバシーポリシーのCookie/解析記載を確定。
3. 公開前にplaceholder/暫定URLの最終grepを実施。
