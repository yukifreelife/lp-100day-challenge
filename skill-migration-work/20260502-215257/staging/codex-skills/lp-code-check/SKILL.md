---
name: "lp-code-check"
description: "LPのHTML/CSS/JSコードの整合性をチェックし、潜在的な問題を特定します。"
---

# LPコード整合性評価スキル

LPのHTML/CSS/JSコードの整合性をチェックし、潜在的な問題を特定します。

## 評価項目

### 1. 重複IDチェック

#### 問題の影響
- JavaScriptのgetElementByIdが最初の要素のみ取得
- スクリーンリーダーが正しく機能しない
- アンカーリンクが正しく動作しない

#### チェックスクリプト
```javascript
// 重複ID検出
const ids = new Map();

document.querySelectorAll('[id]').forEach(el => {
  const id = el.id;
  if (ids.has(id)) {
    console.warn('重複ID:', id, {
      要素1: ids.get(id),
      要素2: el.tagName + '.' + el.className
    });
  } else {
    ids.set(id, el.tagName + '.' + el.className);
  }
});

if (ids.size === 0) {
  console.log('✅ 重複IDはありません');
}
```

#### 改善例
```html
<!-- Before: 重複ID -->
<div id="content">コンテンツ1</div>
<div id="content">コンテンツ2</div>

<!-- After: ユニークID -->
<div id="content-main">コンテンツ1</div>
<div id="content-secondary">コンテンツ2</div>

<!-- またはclassを使用 -->
<div class="content">コンテンツ1</div>
<div class="content">コンテンツ2</div>
```

### 2. コンソールエラー/警告

#### 主なエラー種類
- 未定義変数の参照
- 未定義関数の呼び出し
- セレクターが要素を見つけられない
- 404エラー（リソース読み込み失敗）

#### チェック方法
```javascript
// エラーハンドラーを追加
window.addEventListener('error', (e) => {
  console.error('実行時エラー:', e.message, e.filename, e.lineno);
});

// 未処理のPromise rejection
window.addEventListener('unhandledrejection', (e) => {
  console.error('未処理のPromise:', e.reason);
});

// 既存のエラーを確認
console.log('コンソールを確認してください');
```

#### 404リソースチェック
```javascript
// 画像・スクリプトの読み込みチェック
document.querySelectorAll('img, script, link').forEach(el => {
  const src = el.src || el.href;
  if (src) {
    fetch(src, { method: 'HEAD' })
      .then(res => {
        if (!res.ok) {
          console.warn('404リソース:', src);
        }
      })
      .catch(() => {
        console.warn('リソースエラー:', src);
      });
  }
});
```

### 3. 未使用CSS/JS

#### 未使用クラス検出
```bash
# 使用されているクラスを抽出
grep -o 'class="[^"]*"' index.html | sed 's/class="//g' | sed 's/"//g' | tr ' ' '\n' | sort -u > used_classes.txt

# 定義されているクラスを抽出
grep -o '\.[a-z][a-z0-9_-]*' style.css | sort -u > defined_classes.txt

# 差分を確認（未使用クラス）
diff defined_classes.txt used_classes.txt | grep '^<' | sed 's/^< //'
```

#### 未使用JavaScript関数
```javascript
// 定義されている関数
const definedFunctions = new Set();
Object.values(window).forEach(fn => {
  if (typeof fn === 'function' && fn.name) {
    definedFunctions.add(fn.name);
  }
});

// HTMLで呼び出されている関数
const calledFunctions = new Set();
document.querySelectorAll('[onclick], [onload], script').forEach(el => {
  const content = el.getAttribute('onclick') || el.getAttribute('onload') || el.textContent;
  // 関数名を抽出（簡易版）
  const matches = content.match(/(\w+)\(/g);
  if (matches) {
    matches.forEach(m => calledFunctions.add(m.replace('(', '')));
  }
});

// 未使用関数
definedFunctions.forEach(fn => {
  if (!calledFunctions.has(fn)) {
    console.log('未使用関数:', fn);
  }
});
```

### 4. HTML構造の妥当性

#### セルフクロージングタグ
```html
<!-- 正しい -->
<img src="image.jpg" alt="説明" />
<br />
<input type="text" />

<!-- 間違った（閉じタグ不要） -->
<img src="image.jpg" alt="説明"></img>
<br></br>
```

#### 入れ子構造のチェック
```javascript
// タグの閉じ忘れチェック
const stack = [];
const issues = [];

document.querySelectorAll('*').forEach(el => {
  // 開始タグ
  stack.push(el.tagName);
  
  // 終了タグ処理はHTMLパーサーが行うため、
  // ブラウザの開発者ツールで確認を推奨
});

// ブラウザ開発者ツール → Inspector → 赤い波線を確認
```

### 5. CSSプロパティの互換性

#### ベンダープレフィックスの要否
```css
/* 旧的要プレフィックス */
.box {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
}

/* 現代: ほとんど不要 */
.box {
  border-radius: 8px;
}
```

#### 非対応プロパティのチェック
```css
/* 使用に注意が必要なプロパティ */
:where() /* Safari 14+ */
:has() /* Safari 15.4+ */
aspect-ratio /* Safari 15+ */
```

## チェックリスト

```markdown
## HTML
- [ ] 重複IDがない
- [ ] コンソールエラーがない
- [ ] セルフクロージングタグが正しい
- [ ] タグの入れ子が正しい
- [ ] 全てのリソースが読み込めている

## CSS
- [ ] 未使用クラスがない
- [ ] 重要的なプロパティにベンダープレフィックス
- [ ] 色のコントラスト比が基準を満たす

## JavaScript
- [ ] 未使用関数がない
- [ ] エラーハンドリングがある
- [ ] varではなくconst/letを使用
- [ ] DOM読み込み後の実行が保証されている
```

## 評価レポート出力

`analysis/code-check-eval.md` を作成:

```markdown
# DayXXX コード整合性評価レポート

## 1. 重複IDチェック
| ID | 個数 | 結果 |
|----|------|------|
| nav | 1 | ✅ |
| content | 2 | ❌ 要改善 |

## 2. コンソールエラー
| 種類 | メッセージ | 重大度 |
|------|----------|--------|
| ReferenceError | "undefinedVariable" is not defined | 高 |

## 3. 未使用コード
| 種類 | 個数 | 削減可能サイズ |
|------|------|----------------|
| 未使用CSS | 12 | 約2KB |
| 未使用JS | 3 | 約1KB |

## 4. 改善推奨
1. 重複ID "content" をユニークなIDに変更
2. 未定義変数 "undefinedVariable" を削除または定義
3. 未使用クラスをCSSから削除
```

## 実装手順

### ステップ1: 自動チェック実行
上記スクリプトをブラウザコンソールで実行

### ステップ2: HTMLバリデーター
W3C Markup Validation Serviceでチェック:
https://validator.w3.org/

### ステップ3: CSSチェック
W3C CSS Validation Serviceでチェック:
https://jigsaw.w3.org/css-validator/

### ステップ4: 改善実施
問題箇所を修正

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-26 | 初版作成 |
