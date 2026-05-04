# Day099 SEO評価レポート

## 使用スキル

- `/Users/yuuki/.agents/skills/lp-seo/SKILL.md`
- 担当評価軸: 基本メタデータ、OGP、構造化データ、見出し構造、内部/外部リンク、画像SEO

## 評価範囲と証拠

- 対象ディレクトリ: `/Users/yuuki/Works/lp-100/day099`
- 指定URL: `http://127.0.0.1:5173/#home`
- 指定ルート: `#home`, `#products`, `#product-liquid-chalk`, `#starter-kit`, `#howto`, `#guide`, `#faq`, `#cart`, `#legal`
- 確認ファイル:
  - `/Users/yuuki/Works/lp-100/day099/index.html`
  - `/Users/yuuki/Works/lp-100/day099/src/App.jsx`
  - `/Users/yuuki/Works/lp-100/day099/src/data/siteData.js`
  - `/Users/yuuki/Works/lp-100/day099/src/components/Product.jsx`
  - `/Users/yuuki/Works/lp-100/day099/src/components/Layout.jsx`
  - `/Users/yuuki/Works/lp-100/day099/src/pages/*.jsx`
- 既存スクリーンショット証拠:
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-home*.png`
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-products.png`
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-product-detail*.png`
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-starter-kit.png`
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-howto.png`
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-guide*.png`
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-faq.png`
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-cart*.png`
  - `/Users/yuuki/Works/lp-100/day099/qa-screenshots/browser-use-legal.png`
- 実行コマンド:
  - `cat /Users/yuuki/.agents/skills/lp-seo/SKILL.md`
  - `find /Users/yuuki/Works/lp-100/day099 -maxdepth 3 -type f`
  - `sed -n '1,220p' /Users/yuuki/Works/lp-100/day099/index.html`
  - `sed -n '1,260p' /Users/yuuki/Works/lp-100/day099/src/App.jsx`
  - `sed -n '1,260p' /Users/yuuki/Works/lp-100/day099/src/data/siteData.js`
  - `rg -n "<h[1-6]|<img|href=|target=|tel:|ld\\+json|Helmet|document.title|meta|og:|twitter:|canonical" /Users/yuuki/Works/lp-100/day099/src /Users/yuuki/Works/lp-100/day099/index.html`

## Browser Use確認について

ユーザー指示により追加のBrowser Use操作は中断。今回の評価は、既存のday099ファイル、既存の生成モック/QAスクリーンショット一覧、上記コマンド出力のみを根拠にした。実ブラウザでの追加DOM確認、各ハッシュルート遷移確認、レンダリング後head差分確認は未実施。

## チェックリスト結果

### 基本メタデータ

- [x] `title`タグが存在する
- [x] `description`が存在する
- [x] `viewport`設定がある
- [x] `lang="ja"`が設定されている
- [ ] canonical URLが設定されている
- [ ] ルート別title/descriptionが設定されている

### OGP

- [ ] `og:type`が設定されている
- [ ] `og:url`が設定されている
- [ ] `og:title`が設定されている
- [ ] `og:description`が設定されている
- [ ] `og:image`が設定されている
- [ ] `og:site_name`が設定されている
- [ ] `og:locale`が設定されている
- [ ] Twitter Cardが設定されている

### 構造化データ

- [ ] JSON-LDが実装されている
- [ ] `@type`が適切に設定されている
- [ ] 商品/FAQ/Organizationなどの必須プロパティが含まれている

### 見出し

- [x] 各ルートにページ主題の`h1`がある
- [x] `h2`/`h3`が主要セクションに使われている
- [ ] SPA全体として同一HTML上に複数`h1`が出ないことを実ブラウザDOMで確認済み
- [ ] `h2`から`h3`への階層が全箇所で厳密に自然

### リンク

- [x] 主要内部リンクがハッシュルートで実装されている
- [x] 法務系情報への導線がある
- [x] 検出範囲では`target="_blank"`外部リンクは見当たらない
- [ ] 独立したプライバシーポリシー/特商法ページURLがある
- [ ] 電話番号に`tel:`リンクがある

### 画像

- [x] 検出範囲の`img`に`alt`属性がある
- [x] 一部画像に`loading="lazy"`がある
- [ ] 画像にHTMLの`width`/`height`属性がある
- [ ] OGP画像の1200x630px確認ができる
- [ ] 全画像ファイルの寸法・容量を確認済み

## Findings

### [High] OGP/Twitter Cardが未実装

`index.html`のheadには`description`と`theme-color`はあるが、`og:type`, `og:title`, `og:description`, `og:image`, `twitter:card`などが見当たらない。SNS共有時の表示品質が検索流入外のクリック率にも影響するため、LPとしては大きな欠落。

### [High] canonical URLが未設定

`index.html`に`<link rel="canonical">`がない。SPAのハッシュルーティング構成では、検索エンジンに代表URLを伝えにくく、重複・評価集約の面で弱い。

### [High] 構造化データが未実装

`application/ld+json`が検出されない。商品EC LPとしては`Organization`、`Product`、`Offer`、`FAQPage`、`BreadcrumbList`などの候補があり、現状は検索結果で商品/FAQ情報を補助的に伝える手段がない。

### [Medium] SPAの各ルートでheadメタデータが共通

`App.jsx`はハッシュルートで表示コンポーネントを切り替えているが、ルート別に`document.title`や`meta description`を変更する実装は検出されない。`#products`や`#product-liquid-chalk`など商品意図の強いルートでも、検索・共有上はトップと同じ情報になりやすい。

### [Medium] title/descriptionの訴求がやや汎用的

現在のtitleは「ボルダリングギア購入ページ | day099」。`day099`は制作管理上の語で、検索ユーザー向けの価値語ではない。descriptionも「サイバーパンク調ECランディングページ」と制作物説明に寄っており、購入意図や商品カテゴリの訴求が弱い。

### [Medium] 画像にwidth/height属性がない

各ページの`img`は`alt`を持つ一方、HTML属性としての`width`/`height`は検出されない。CSSの`aspect-*`で視覚比率は担保しているが、SEO評価軸上の画像SEO/CLS予防としては寸法属性が不足。

### [Low] 装飾画像の空alt判断が一部曖昧

`Home.jsx`や`StarterKit.jsx`に`alt=""`の画像がある。装飾画像としては許容されるが、商品訴求の文脈にある画像の場合は空altでは検索・アクセシビリティ上の情報を捨てる可能性がある。

### [Low] 電話番号リンクがない

`tel:`リンクは検出されない。架空通販デモとして致命的ではないが、スキルの評価軸では問い合わせ導線のモバイル対応項目が未達。

## 改善提案

1. `index.html`にcanonical、OGP、Twitter Cardを追加する。
2. titleから`day099`を外し、「ボルダリングギア通販」「初心者」「スターターセット」「液体チョーク」など検索意図に近い語へ寄せる。
3. descriptionを「制作課題」ではなく、購入者向けの価値説明に変更する。
4. `Product`、`Offer`、`FAQPage`、`Organization`のJSON-LDを追加する。架空サイトであることと矛盾しない範囲で、商品名・価格・説明・FAQを構造化する。
5. 主要ルートごとに`document.title`と`meta description`を切り替える。少なくとも`#products`, `#product-liquid-chalk`, `#starter-kit`, `#faq`, `#legal`は個別化する。
6. 商品画像に`width`/`height`属性、または画像メタ情報に基づく共通コンポーネントを追加する。
7. OGP画像を1200x630pxで用意し、容量5MB以下を確認する。
8. 商品価値を表す画像は空altを避け、装飾画像だけを`alt=""`に限定する。
9. 法務/プライバシーは可能なら`/legal`相当の直接到達URLまたは静的HTMLを用意し、ハッシュだけに依存しない。

## スコア

**52 / 100**

内訳:

- 基本メタデータ: 14 / 20
- OGP/Twitter: 0 / 15
- 構造化データ: 0 / 15
- 見出し構造: 14 / 20
- リンク: 10 / 15
- 画像SEO: 9 / 15
- SPA/ルート別SEO配慮: 5 / 15

## 未確認項目

- Browser Useによる追加実ブラウザ確認
- Playwright等によるレンダリング後DOMの`h1`個数確認
- 各ハッシュルート遷移後のhead内容確認
- 画像ファイルの実寸、容量、形式確認
- OGP画像の有無と1200x630px適合確認
- Lighthouse SEOスコア
- 外部OGPデバッガー/Twitter Card Validatorでの検証
- Googleリッチリザルトテストでの検証
