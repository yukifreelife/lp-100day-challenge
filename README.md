# LP Portfolio 100

`/Users/yuuki/Works/lp-100` のトップページを、LP構成ではなく**案件獲得向けポートフォリオ構成**として再設計しています。

## コンセプト

- FVで「どんなLPを作ってきたか」を即提示
- 自動横スクロールのLPリールで制作幅を可視化
- 代表事例と全件検索で、相談前の比較検討をしやすくする

## ローカル確認方法

```bash
cd /Users/yuuki/Works/lp-100
python3 -m http.server 8080
```

ブラウザで `http://localhost:8080` を開いて確認します。

## ファイル構成

- `index.html`: ポートフォリオ用レイアウト（FVリール / Featured Cases / All Works / Contact）
- `styles.css`: デザイン、アニメーション、レスポンシブ
- `script.js`: 実績データ管理、リール生成、事例生成、フィルタ検索
- `README.md`: この説明
- `lp100-progress/`: LP-100チャレンジの進捗、作業時間、振り返り、スキル管理の集約フォルダ

## 実績データの追加手順

1. `script.js` の `worksData` に1件追加
2. `day`, `title`, `category`, `industry`, `focus`, `summary`, `metric`, `tech`, `url` を設定

```js
{
  day: "Day21",
  title: "新規LPタイトル",
  category: "SaaS",
  industry: "IT",
  focus: "資料請求",
  summary: "概要",
  metric: "設計メモ",
  tech: ["HTML", "CSS", "JavaScript"],
  url: "./day021/"
}
```

- 追加した `category` はフィルタへ自動反映されます。
- FVのリール、Featured Cases、All Works は同じデータから自動描画されます。

## 差し替えポイント

- メール連絡先: `index.html` の `mailto:hello@example.com`
- フォームURL: `index.html` の `https://example.com/contact`
- OGP: `index.html` の `og:url`, `og:image`

## 補足

- `style.css` はこのページでは利用していません。
- アニメーションが不要な環境では `prefers-reduced-motion` により自動停止します。
