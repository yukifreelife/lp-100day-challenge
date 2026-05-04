# Day099 コード整合性評価レポート

## 使用スキル
- `/Users/yuuki/.agents/skills/lp-code-check/SKILL.md`
- 評価責任範囲: 重複ID、コンソールエラー/警告、リソース読み込み、未使用CSS/JS、HTML構造、CSS互換性。

## 評価条件
- 対象: `/Users/yuuki/Works/lp-100/day099`
- URL: `http://127.0.0.1:5173/#home`
- ルート: `#home`, `#products`, `#product-liquid-chalk`, `#starter-kit`, `#howto`, `#guide`, `#faq`, `#cart`, `#legal`
- 根拠: day099 ファイル、day099 生成モック/既存評価ファイル、静的確認、`npm run build` 結果。
- アプリ修正: 実施していない。

## 実行した確認

### 静的確認
- `npm run build`
  - 結果: 成功
  - 出力要約:
    - `vite v6.4.2 building for production...`
    - `42 modules transformed`
    - `dist/index.html 0.71 kB`
    - `dist/assets/index-iCUccHlS.css 32.07 kB`
    - `dist/assets/index-C75beU4L.js 261.19 kB`
    - `built in 781ms`
- `rg` による `id=`, `img`, `input`, `document.querySelectorAll`, `var`, `:has`, `:where`, `aspect-ratio`, `backdrop-filter`, `mask-image` の確認。
- `src/pages/*`, `src/components/*`, `src/data/siteData.js`, `index.html`, `public/assets/*` の範囲で構造を確認。

### Browser Use
- 追加操作はユーザー指示により中断。
- そのため、本レポートでは新規 Browser Use 実測を未実施として扱う。
- 既存の day099 評価ファイルには、ルートスナップショットと以前の Browser Use 系証跡が残っているが、今回は追加取得していない。

## 証拠
- `src/components/UI.jsx`: `NeonPanel({ children, accent = "cyan", className = "" })` が `id` やその他 props を受け取らず、内部 `<div>` に伝播しない。
- `src/pages/Legal.jsx`: `<NeonPanel id="commerce" accent="cyan" className="p-0">` と `href="#commerce"` が存在する。
- `src/pages/Legal.jsx`: `section id="privacy"` は通常の `section` に設定されており、`#privacy` は成立する。
- `src/pages/Guide.jsx`: `values.map((value, index) => <td key={`${label}-${index}-${value}`}>...)` となっており、現行コードでは比較表セルの key は重複しにくい形。
- `docs/EVALUATION_REPORT.md`: React table key warning は修正前の Browser Use log history に残った古い重複 key 警告として記録され、現行コードと fresh build では置換済みと記録されている。
- `src/App.jsx`: `document.querySelectorAll('.reveal')` は `useEffect` 内で実行され、DOM 読み込み後の実行として扱える。
- `index.html`: `id="root"` は 1 件。
- `src/pages/Cart.jsx`: `input id="coupon"` は 1 件。
- `src/pages/Faq.jsx`: `section id="faq-list"` は 1 件。
- `src/pages/Legal.jsx`: `section id="privacy"` は 1 件。

## チェックリスト結果

## HTML
- [x] 重複IDがない
  - 静的確認上、明示的な `id` は `root`, `coupon`, `faq-list`, `privacy` がユニーク。
  - ただし `commerce` は `NeonPanel` 側で DOM に出力されないため、「重複ID」ではなく「期待ID欠落」として finding 化。
- [ ] コンソールエラーがない
  - 追加 Browser Use 操作を中断したため新規実測なし。
  - 既存 day099 証跡では React key warning の履歴残存が記録されている。
- [x] セルフクロージングタグが正しい
  - JSX 上の `img` と `input` は閉じタグ不要の形で記述されている。
- [x] タグの入れ子が正しい
  - `npm run build` が成功し、React/Vite の構文エラーは出ていない。
- [ ] 全てのリソースが読み込めている
  - `public/assets/products/*` と `public/assets/icons/icon-sprite.png` の存在は確認。
  - 新規ブラウザ上のネットワーク/404 実測は未実施。

## CSS
- [ ] 未使用クラスがない
  - Tailwind 生成クラス中心のため、単純な未使用 CSS 差分検出は未実施。
- [x] 重要的なプロパティにベンダープレフィックス
  - `backdrop-filter` は Tailwind/autoprefixer 経由で build 成功。
  - `mask-image` は `src/index.css` に直接存在する。現代ブラウザ前提なら許容だが、古い Safari 互換を重視するなら `-webkit-mask-image` の併記を検討。
- [ ] 色のコントラスト比が基準を満たす
  - lp-code-check の範囲には含まれるが、今回のコード整合性評価では実測未実施。

## JavaScript
- [x] 未使用関数がない
  - 明確な未使用のグローバル関数や HTML inline handler は見当たらない。
  - `src/components/Layout.jsx` は現行 `App.jsx` から直接使われていないが、ページ側で `CyberSection` を import しているためファイル全体を未使用とは判定しない。
- [ ] エラーハンドリングがある
  - ルーティングは fallback あり。ただし runtime error boundary はない。
- [x] `var` ではなく `const/let` を使用
  - `rg "var "` では day099 src 内に該当なし。
- [x] DOM読み込み後の実行が保証されている
  - `document.querySelectorAll('.reveal')` は React `useEffect` 内で実行。

## Findings

### P1: `#commerce` アンカー先が DOM に存在しない
- 重大度: 高
- 根拠:
  - `src/pages/Legal.jsx` で `href="#commerce"` が複数箇所にある。
  - 同ファイルで `<NeonPanel id="commerce" ...>` が指定されている。
  - `src/components/UI.jsx` の `NeonPanel` は `id` を引数で受け取らず、内部 `<div>` に spread もしない。
- 影響:
  - `#legal` ページ内の「特定商取引法に基づく表記」リンクが期待位置へスクロールしない。
  - DOM 上には `commerce` ID が出力されないため、アンカー整合性が崩れる。
- 改善提案:
  - `NeonPanel` に `...props` を受け取り `<div {...props}>` として伝播する。
  - もしくは `NeonPanel` を `section id="commerce"` で包み、ID はネイティブ要素側へ付与する。

### P2: React key warning の履歴が残っている
- 重大度: 中
- 根拠:
  - `docs/EVALUATION_REPORT.md` に、修正前の Browser Use log history として duplicate-key warning が残っている旨が記録されている。
  - 現行 `src/pages/Guide.jsx` の比較表セルは `key={`${label}-${index}-${value}`}` で、重複しにくい形へ置換済み。
  - `npm run build` は成功。
- 影響:
  - 現行コード起因の再発は低いが、ブラウザコンソール履歴だけを見る worker が古い警告を誤検知する可能性がある。
- 改善提案:
  - 修正後にクリーンな新規ブラウザセッションでコンソールを再取得し、古い warning と現行 warning を分離する。

### P3: 新規 Browser Use 実測が未完了
- 重大度: 中
- 根拠:
  - ユーザー指示により Browser Use 追加操作を中断。
  - コンソールエラー、DOM の実出力、重複ID、404 リソースの新規ブラウザ確認は完了していない。
- 影響:
  - 静的確認と build 成功では検出できない runtime warning、画像 404、ハッシュ遷移時の DOM 差異を完全には保証できない。
- 改善提案:
  - 後続 worker または再開時に、各ルートで console/network/DOM ID を新規セッションから取り直す。

### P3: runtime error boundary がない
- 重大度: 低
- 根拠:
  - `src/App.jsx` は fallback route を持つが、React component error boundary はない。
- 影響:
  - データ不整合や予期しない render error が起きた場合、ページ全体が白画面化する可能性がある。
- 改善提案:
  - LPデモとして必須ではないが、共有コンポーネントが増えるなら簡易 ErrorBoundary を追加する。

## 改善提案まとめ
1. 最優先で `NeonPanel` の props 伝播、または `#commerce` ID の付与先変更を行う。
2. React key warning は現行コードでは修正済みに見えるため、クリーンなブラウザセッションで再確認する。
3. 画像/CSS/JS の 404 は `public/assets` 存在確認では大きな欠落は見えないが、最終判定にはブラウザネットワーク確認を追加する。
4. 古い Safari 互換を要求する場合は `mask-image` の `-webkit-mask-image` 併記を検討する。

## スコア
- 84 / 100

### 減点理由
- `#commerce` アンカー欠落: -8
- 新規ブラウザ実測未完了: -5
- React key warning 履歴の残存と証跡分離不足: -2
- runtime error boundary なし: -1

## 未確認項目
- 新規 Browser Use セッションでの console error / warning。
- 新規 Browser Use セッションでの DOM 上の全 ID 抽出と重複ID確認。
- 新規 Browser Use セッションでの `img`, `script`, `link` リソース読み込み確認。
- 各ハッシュルートでの実ブラウザ遷移後 DOM 差異。
- コントラスト比の定量測定。
- Tailwind 生成 CSS の未使用量測定。
