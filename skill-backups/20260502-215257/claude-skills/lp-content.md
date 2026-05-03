# LPコンテンツ品質評価スキル

LPのコンテンツ構造と品質を評価し、ユーザー体験とSEOの両面を向上させます。

## 評価項目

### 1. 見出し階層構造

#### 正しい階層
```html
<h1>メインタイトル（ページに1つのみ）</h1>
<section>
  <h2>セクションタイトル</h2>
  <p>セクションの説明</p>
  <section>
    <h3>サブセクション</h3>
    <p>詳細な説明</p>
  </section>
</section>
```

#### 階層スキップの検出
```javascript
// ブラウザコンソールで実行
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
let prevLevel = 0;
const issues = [];

headings.forEach((h, i) => {
  const level = parseInt(h.tagName[1]);
  const text = h.textContent.trim().substring(0, 30);
  
  // h1が複数ある場合
  if (level === 1 && i > 0) {
    issues.push({ type: '複数h1', text: text });
  }
  
  // 階層スキップ検出（h2→h4など）
  if (level > prevLevel + 1 && prevLevel !== 0) {
    issues.push({ type: '階層スキップ', from: prevLevel, to: level, text: text });
  }
  
  prevLevel = level;
});

console.table(issues);
```

### 2. 画像alt属性

#### 良いaltの例
```html
<!-- 良い: 具体的で状況が伝わる -->
<img src="bouquet.jpg" alt="クリーム色の包装紙に包まれたバラのブーケ">

<!-- 悪い: 一般的すぎる -->
<img src="bouquet.jpg" alt="花の画像">

<!-- 悪い: ファイル名をそのまま -->
<img src="bouquet.jpg" alt="bouquet.jpg">

<!-- 装飾画像: 空altでOK -->
<img src="deco-line.png" alt="" role="presentation">
```

#### altチェック
```javascript
// alt属性チェック
const images = document.querySelectorAll('img');
const issues = [];

images.forEach(img => {
  const alt = img.getAttribute('alt');
  
  // alt属性がない
  if (alt === null) {
    issues.push({ type: 'altなし', src: img.src });
  }
  // altがファイル名そのまま
  else if (alt === img.src.split('/').pop()) {
    issues.push({ type: 'altがファイル名', src: img.src });
  }
  // altが「画像」「写真」等のみ
  else if (/^画像|^写真|^サムネイル/.test(alt)) {
    issues.push({ type: 'altが一般的', alt: alt });
  }
});

console.table(issues);
```

### 3. コンテンツ階層

#### 情報の優先順位
```html
<!-- FV: 最も重要なメッセージ -->
<h1>メイン価値提案</h1>
<p>サブメッセージ（3秒で伝わる）</p>
<a href="#cta">一次CTA</a>

<!-- 特徴: 3つのポイント -->
<h2>特徴・こだわり</h2>
- ポイント1
- ポイント2
- ポイント3

<!-- 商品: 具体的な提案 -->
<h2>商品ラインナップ</h2>

<!-- お客様の声: 社会的証明 -->
<h2>お客様の声</h2>

<!-- CTA: 行動喚起 -->
<h2>ご相談はこちら</h2>
```

### 4. テキスト可読性

#### 確認項目
- 1行の文字数（日本語: 40文字前後が読みやすい）
- 段落の長さ（3〜5文程度）
- 専門用語の過度な使用
- 説明の具体性

#### 改善例
```html
<!-- Before: 説明不足 -->
<p>高品質な花をご提供します。</p>

<!-- After: 具体的な説明 -->
<p>その時期に最も美しい旬の花々を、確かな目利きで仕入れています。
毎朝市場から直送される新鮮な花材のみを使用し、仕入れから24時間以内にお届けします。</p>
```

### 5. CTA配置

#### 効果的なCTA配置
```html
<!-- FV: 一次CTA -->
<section class="hero">
  <h1>...</h1>
  <a href="#contact" class="cta-primary">LINEで相談する</a>
</section>

<!-- 中間: セクションごとのCTA -->
<section class="products">
  <h2>商品一覧</h2>
  <a href="#order" class="cta-secondary">詳しく見る</a>
</section>

<!-- 最終: 最終CTA -->
<section class="final-cta">
  <h2>ご相談はこちら</h2>
  <a href="#contact" class="cta-primary">今すぐ予約</a>
</section>
```

## チェックリスト

```markdown
## 見出し階層
- [ ] h1が1つだけ
- [ ] 見出し階層が正しい（スキップなし）
- [ ] 見出しにキーワードが含まれている
- [ ] 見出しがコンテンツを適切に表している

## 画像alt
- [ ] 全ての画像にaltがある
- [ ] altが具体的で説明になっている
- [ ] 装飾画像のaltが空またはrole="presentation"
- [ ] altがファイル名になっていない

## コンテンツ構造
- [ ] FVで価値提案が明確
- [ ] 特徴が3〜5個に整理されている
- [ ] お客様の声が含まれている
- [ ] CTAが複数箇所に配置されている

## テキスト可読性
- [ ] 1行が40文字前後
- [ ] 段落が適切な長さ
- [ ] 専門用語に説明がある
- [ ] 具体的な数値・事実が含まれている
```

## 評価レポート出力

`analysis/content-eval.md` を作成:

```markdown
# DayXXX コンテンツ品質評価レポート

## 1. 見出し階層
| 問題 | 箇所 | 改善案 |
|------|------|--------|
| h2がh4にスキップ | Galleryセクション | h2→h3に変更 |

## 2. 画像alt
| 画像 | 現状 | 改善案 |
|------|------|--------|
| img-07.jpg | "フラワー作品" | "クリーム紙に包まれた定番ブーケ" |

## 3. コンテンツ構造
| 項目 | 結果 | 評価 |
|------|------|------|
| 価値提案 | ✅ 明確 | 良好 |
| お客様の声 | ✅ 掲載あり | 良好 |
| CTA配置 | ✅ 3箇所 | 良好 |

## 4. 改善推奨
1. alt属性を具体的な説明に書き換え
2. 見出し階層のスキップを修正
```

## 実装手順

### ステップ1: 見出しチェック
上記スクリプトを実行し、階層問題を特定

### ステップ2: 画像altチェック
alt属性の品質を確認

### ステップ3: コンテンツ構造確認
情報の優先順位と流れを確認

### ステップ4: 改善実施
問題箇所を修正

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-26 | 初版作成 |
