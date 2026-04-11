# Visual Issues Report - Day076 LP
**Date:** 2026-04-12
**Screenshots:** `/evaluations/screenshots/`

---

## Summary

ユーザー指摘の「FV画像サイズ」「Problemセクションの乱れ」について、Playwrightでスクリーンショットを撮影し分析した結果、以下の問題が確認されました。

---

## 1. FV（Hero）セクションの問題

### 1.1 画像サイズ問題
**Status:** ✅ 解決済み（画像サイズは統一）
- `hero-before.jpg`: 1920x1080, 267KB
- `hero-after.jpg`: 1920x1080, 260KB
- 全て同じ1920x1080サイズで統一されています

### 1.2 表示の問題
**Issue:** スプリットレイアウトの左右で画像の見え方が異なる
- **Before側**: グレースケールフィルター (`filter: saturate(0.7)`) + オーバーレイ
- **After側**: 通常カラー + オーバーレイ

**評価:** 意図的なデザインですが、Beforeの画像が暗すぎて詳細が見えない可能性があります。

### 1.3 レスポンシブ時の問題
**CSS Location:** `style.css:1730-1752`

モバイル表示時のHeroセクションで問題があります：
- PC: 左右スプリットレイアウト
- モバイル: `order` プロパティで順序を変更（画像が上、テキストが下）

```css
@media (max-width: 768px) {
  .hero-side.hero-before {
    order: 2;
  }
  .hero-side.hero-after {
    order: 1;
  }
}
```

**問題:** モバイルでAfter画像が上に表示されますが、Beforeが見えなくなるためBefore/Afterの比較ができません。

---

## 2. Problemセクションの問題

### 2.1 アイコンの視覚的 inconsistency
**Screenshot:** `problem-section.png`

**観察された問題:**
1. **Clockアイコン**: CSSのみで描画（`::before`, `::after`）
2. **Questionアイコン**: テキスト "?" を使用
3. **Cycleアイコン**: CSSのみで描画（`::before`, `::after`）

**評価:** 3つのカードのデザイン手法が混在しています：
- Clock: 純粋なCSS（擬似要素）
- Question: テキストベース
- Cycle: 純粋なCSS（擬似要素）

これにより視覚的な「統一感のなさ」が生じている可能性があります。

### 2.2 CSSアイコンのコード
**Location:** `style.css:654-716`

```css
/* Clock icon - CSS only */
.problem-icon.clock::before { /* 時針 */ }
.problem-icon.clock::after { /* 分針 */ }

/* Question icon - Text content */
.problem-icon.question::before {
  content: '?';
  font-size: 2rem;
}

/* Cycle icon - CSS only */
.problem-icon.cycle::before { /* 円の一部 */ }
.problem-icon.cycle::after { /* 矢印 */ }
```

**Recommendation:** 3つのアイコンを同じ手法で統一するか、すべてSVGアイコンに変更することを推奨します。

### 2.3 カードの高さの不揃い
**Screenshot:** `problem-section.png`

スクリーンショットを確認すると、3つのカードの高さが微妙に異なる可能性があります：
- 1番目のカード: タイトルが短い
- 2番目のカード: タイトルが改行されている（2行）
- 3番目のカード: タイトルが1行

**CSS Location:** `style.css:594-607`

```css
.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}
```

**Recommendation:** `align-items: stretch;` を追加してカードの高さを統一、またはフレックスボックスを使用して均等な高さを確保します。

---

## 3. 画像サイズ問題（ファイルサイズ）

### 3.1 現状のファイルサイズ
```
hero-before.jpg:  267KB
hero-after.jpg:   260KB
before1.jpg:      267KB
after1.jpg:       260KB
before2.jpg:      267KB
after2.jpg:       260KB
before3.jpg:      267KB
after3.jpg:       260KB
---
Total: ~2.1MB (8枚)
```

**問題:** 1枚あたり260KB+は大きすぎます。Lighthouseのパフォーマンススコアに影響します。

### 3.2 推奨される最適化
1. **WebP形式に変換**: 約60-80%のファイルサイズ削減
2. **Responsive Images**: `srcset`属性でデバイスに応じた画像を配信
3. **Lazy Loading**: FV以下の画像に `loading="lazy"` を追加

---

## 4. 優先度別修正リスト

### High Priority（視覚的問題）

1. **Problemカードのアイコン統一**
   - 現状: CSS(1), Text(1), CSS(1) の混在
   - 修正: すべて同じ手法（SVG推奨）で統一

2. **モバイルHeroのBefore/After比較**
   - 現状: モバイルでAfterしか見えない
   - 修正: モバイルでもBefore/Afterの比較ができるUIを追加

3. **Problemカードの高さ統一**
   - 現状: タイトルの文字数で高さが変わる
   - 修正: `min-height` または `align-items: stretch`

### Medium Priority（パフォーマンス）

4. **画像ファイルサイズの削減**
   - WebP変換
   - サイズ適正化（1920x1080は大きすぎる）

5. **Lazy Loadingの実装**
   - Before/Afterスライダー画像に遅延読み込み

### Low Priority

6. **Hero Before画像のコントラスト調整**
   - 現状: `saturate(0.7)` で暗すぎる可能性

---

## 5. 推奨される対応

### 緊急対応（ユーザー体験への影響大）
1. ProblemカードのアイコンをSVGに統一
2. Problemカードの高さを均一に

### 次回対応（パフォーマンス改善）
1. 画像のWebP変換とサイズ最適化
2. Lazy Loading実装

---

## Screenshots Reference

- `hero-section.png`: FVセクションのスプリットレイアウト
- `problem-section.png`: Problemカードのアイコンとレイアウト
- `full-page.png`: 全体レイアウト確認用
