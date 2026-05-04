# Day099 モバイル評価レポート

## 使用スキル
- `/Users/yuuki/.agents/skills/lp-mobile/SKILL.md`
- 評価責任範囲: タッチターゲット、レスポンシブレイアウト、モバイルナビゲーション、モバイル可読性

## 評価条件
- 対象ディレクトリ: `/Users/yuuki/Works/lp-100/day099`
- 対象URL: `http://127.0.0.1:5173/#home`
- 対象ルート: `#home`, `#products`, `#product-liquid-chalk`, `#starter-kit`, `#howto`, `#guide`, `#faq`, `#cart`, `#legal`
- 制約: アプリ修正なし。他day前例なし。day099ファイル、生成モック、既存スクリーンショットのみを根拠に評価。
- Browser Use追加操作: ユーザー指示により中断。追加の実ブラウザ操作は未実施。

## 証拠
- `src/App.jsx:64-98`: ルート全体に `overflow-x-hidden`、固定ヘッダー、横スクロール型ナビ、グローバル下部CTAを配置。
- `src/App.jsx:24-31`: ヘッダーナビは6項目のみで、`#product-liquid-chalk`, `#cart`, `#legal` は主要ナビに含まれない。
- `src/index.css:33-35`: `body` は `min-width: 320px`。
- `src/index.css:92-95`: 画像は `max-width: 100%`。
- `src/index.css:140-145`: ロゴリンクとカートリンクは `min-height: 44px`。
- `src/index.css:165-170`: ナビリンクは通常時 `min-height: 36px`。
- `src/index.css:322-339`: モバイル下部CTAは固定表示、`min-height: 54px`。
- `src/index.css:371-393`: 860px以下でヘッダーは2列化、ナビは横スクロール、下部CTA表示。
- `src/components/UI.jsx:28-44`: 共通Buttonは `px-5 py-3 text-sm` で概ね44px以上を期待できる。
- `src/components/UI.jsx:91-101`: FAQの開閉行は `details p-5` だが、表示上のプラスアイコン自体は `h-7 w-7`。
- 既存スクリーンショット: `qa-screenshots/evaluation-browseruse-home.png`, `evaluation-browseruse-products.png`, `evaluation-browseruse-product-liquid-chalk.png`, `evaluation-browseruse-starter-kit.png`, `evaluation-browseruse-howto.png`, `evaluation-browseruse-guide.png`, `evaluation-browseruse-faq.png`, `evaluation-browseruse-cart.png`, `evaluation-browseruse-legal.png`, `evaluation-browseruse-legal-privacy-click.png`。

## チェックリスト結果

### タッチターゲット
- [x] 主要CTAが44x44px以上: 共通Buttonと下部CTAは十分なpadding/min-heightあり。
- [x] カートリンクが44x44px以上: `.header-cart` が `min-height: 44px`。
- [!] モバイルナビリンクが44x44px以上: `.site-nav__link` は `min-height: 34px` まで下がるため基準未達の可能性が高い。
- [!] アイコンボタンにpaddingがある: FAQのプラス表示は28x28pxだが、summary全体がタップ面になる設計。アイコン単体基準では不足。
- [x] タッチターゲット間に適切な間隔: ナビは `gap: 8px`、CTA群はgapあり。

### レスポンシブ
- [!] 横スクロールが発生しない: アプリ全体は `overflow-x-hidden` で抑制。ただしモバイルナビは意図的な横スクロールUI。
- [x] 画像がレスポンシブ対応: `img { max-width: 100%; }`。
- [!] テキストがはみ出さない: `site-mark` は `white-space: nowrap`。320px近辺でカートと同列に並ぶため、長文ブランド名が狭い端末で圧迫されるリスクあり。
- [x] ブレークポイントが適切: 860px以下でヘッダー/ナビ/下部CTAがモバイル用に切り替わる。

### ナビゲーション
- [x] モバイルメニューが動作する: ハンバーガーではなく横スクロールナビ方式。リンクはhash遷移で動作する構造。
- [x] メニューを閉じられる: 該当なし。常時表示の横スクロールナビのため閉じる操作は不要。
- [x] 現在ページのリンクに視覚的フィードバック: `is-active` による色・枠の変化あり。
- [!] 主要ルートへの到達性: `#product-liquid-chalk`, `#cart`, `#legal` はモバイルナビ項目にない。カートはヘッダーCTAで到達可、legalはフッター等からの導線依存。

### 可読性
- [x] 本文フォントサイズが16px以上: 主要本文は `text-base` / `leading-8` が多い。
- [x] 行間が1.5以上: 本文に `leading-7`, `leading-8` が多く確保されている。
- [x] 段落間に余白がある: `mt-*`, `gap-*`, section paddingで確保。
- [x] 単カラムレイアウト: 主要gridは `md:` / `lg:` 以上で複数カラム化され、モバイルは単カラム中心。

## Findings

### [P1] モバイルナビのタッチ高さが44px未満
- 根拠: `src/index.css:165-170` で `.site-nav__link` は `min-height: 36px`、`src/index.css:386-389` でモバイル時は `min-height: 34px`。
- 影響: 横スクロールナビはモバイルの主要導線だが、WCAG 2.5.5 AAAの44px基準に届かず、誤タップや押しにくさが出る。
- 改善提案: モバイル時の `.site-nav__link` を `min-height: 44px` 以上にし、縦paddingを増やす。

### [P2] ヘッダーと下部固定CTAで表示領域が圧迫される
- 根拠: `src/App.jsx:66-87` の固定ヘッダー、`src/App.jsx:93-97` の下部固定CTA、`src/index.css:322-339` の `z-index: 60` 固定CTA、`src/index.css:371-374` の `body padding-bottom: 76px`。
- 影響: `#home`, `#products`, `#howto`, `#guide`, `#faq`, `#legal` では上下に固定UIが残る。コンテンツ閲覧時の実効高さが狭くなり、CTAが本文末尾やフッター導線の視認を妨げる可能性がある。
- 改善提案: スクロール後に下部CTAを縮小する、または購入意図の強い区間だけ表示する。フッターやフォーム付近では非表示にする。

### [P2] ブランド名のnowrapが狭幅端末でヘッダー競合を起こす可能性
- 根拠: `src/index.css:147-152` の `.site-mark` は `white-space: nowrap`、`src/index.css:371-378` でモバイルヘッダーは `1fr auto` の2列。
- 影響: 320px幅では「ボルダリングギア通販」とカートCTAが同一行で競合し、テキスト圧縮または視覚的な詰まりが起こりやすい。
- 改善提案: モバイル時のみロゴテキストを短縮、または `min-width: 0` と省略表示を入れる。カートをアイコン中心にする案も有効。

### [P3] 横スクロールナビは意図的だが、全ルート検証では注意が必要
- 根拠: `src/index.css:380-385` で `.site-nav` は `overflow-x: auto`、`src/App.jsx:24-31` で表示ナビは6項目。
- 影響: 横スクロール自体は設計上の動作だが、「横スクロールがない」評価軸では減点対象になる。さらに対象ルート9個のうち、商品詳細・カート・法務は主要ナビから直接見えない。
- 改善提案: 横スクロール式を維持する場合は端にフェードやスクロールヒントを置く。全ルート到達性を重視するなら、カート/法務導線の明示を追加する。

## スコア
- 78 / 100

内訳:
- タッチターゲット: 22 / 30
- レスポンシブ: 21 / 25
- ナビゲーション: 17 / 25
- 可読性: 18 / 20

## 改善提案
1. モバイルナビリンクを `min-height: 44px` 以上にする。
2. 固定下部CTAの表示条件を見直し、本文・フッター導線と競合しにくくする。
3. 320px幅向けにヘッダーのブランド名とカートCTAの幅競合を解消する。
4. 横スクロールナビにはスクロール可能であることが分かる視覚ヒントを追加する。
5. 法務・商品詳細・カートへのモバイル導線を、フッター依存だけでなくページ内にも明示する。

## 未確認項目
- Browser Use追加操作はユーザー指示により中断したため、今回のターンでは実ブラウザ上の新規DOM計測、横スクロール検出スクリプト、タッチターゲット実測は未実施。
- 既存スクリーンショットは存在を確認したが、追加のスクリーンショット取得・画像解析は実施していない。
- 390px/375px/320pxなど複数幅での表示差分は未確認。
- 実機タップ操作、スクリーンリーダー、ブラウザズーム時の挙動は未確認。
