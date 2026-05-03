# LPモバイルフレンドリー評価スキル

LPのモバイル対応状況を評価し、改善提案を行います。

## 評価項目

### 1. タッチターゲットサイズ

#### 基準
- **最小サイズ**: 44x44px（WCAG 2.5.5 AAA基準）
- **推奨サイズ**: 48x48px（iOS Human Interface Guidelines）

#### チェック対象
- ボタン、CTAリンク
- ナビゲーション項目
- アイコンボタン
- 電話番号リンク

#### 改善実装

**小さいターゲットの拡大:**
```html
<!-- Before: 小さいクリックエリア -->
<a href="#contact">
  <img src="icon.png" class="w-8 h-8">
</a>

<!-- After: paddingでクリックエリア拡大 -->
<a href="#contact" class="inline-flex items-center justify-center p-3">
  <img src="icon.png" class="w-8 h-8">
</a>
```

**Tailwindクラスでの対応:**
```html
<!-- 最小44x44pxを確保 -->
<a class="min-w-[44px] min-h-[44px]">...</a>
<button class="px-4 py-3">  <!-- paddingでサイズ確保 -->
```

### 2. レスポンシブレイアウト

#### 確認項目
- 横スクロールの有無
- 画像のレスポンシブ対応
- テキストのはみ出し
- ブレークポイントの適切さ

#### チェック方法

**ブラウザコンソール:**
```javascript
// 横スクロール検出
function checkOverflow() {
  const overflowElements = [];
  document.querySelectorAll('*').forEach(el => {
    if (el.scrollWidth > el.clientWidth && el.scrollWidth > window.innerWidth) {
      overflowElements.push({
        tag: el.tagName,
        class: el.className,
        width: el.scrollWidth,
        clientWidth: el.clientWidth
      });
    }
  });
  console.table(overflowElements);
}
checkOverflow();
```

**改善実装:**
```css
/* 画像のレスポンシブ対応 */
img {
  max-width: 100%;
  height: auto;
}

/* テキストの折り返し */
.long-text {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* 横スクロール防止 */
.overflow-hidden-x {
  overflow-x: hidden;
}
```

### 3. モバイルナビゲーション

#### 確認項目
- ハンバーガーメニューの動作
- メニューの閉じる動作
- スクロール時のヘッダー固定

#### 実装例

```html
<!-- ハンバーガーメニュー -->
<button id="hamburger" aria-label="メニューを開く" aria-controls="navMenu" aria-expanded="false">
  <span class="material-symbols-outlined">menu</span>
</button>

<nav id="navMenu" class="hidden md:flex">
  <!-- デスクトップ: 横並び、モバイル: 縦並び -->
</nav>
```

```javascript
// メニュートグル実装
const menuBtn = document.getElementById('hamburger');
const nav = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !isExpanded);
  nav.classList.toggle('hidden');
});
```

### 4. モバイル閲覧の可読性

#### 確認項目
- フォントサイズ（16px以上推奨）
- 行間（1.5以上推奨）
- 段落間の余白
- カラム幅（モバイルは単カラム）

#### 改善実装

```css
/* モバイル用フォントサイズ */
@media (max-width: 768px) {
  html {
    font-size: 16px;
  }
  
  h1 { font-size: 1.75rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.25rem; }
}

/* 行間確保 */
p {
  line-height: 1.6;
  margin-bottom: 1rem;
}
```

## チェックリスト

```markdown
## タッチターゲット
- [ ] ボタンが44x44px以上
- [ ] リンクが44x44px以上
- [ ] アイコンボタンにpaddingがある
- [ ] タッチターゲット間に適切な間隔（8px以上）

## レスポンシブ
- [ ] 横スクロールが発生しない
- [ ] 画像がレスポンシブ対応
- [ ] テキストがはみ出さない
- [ ] ブレークポイントが適切

## ナビゲーション
- [ ] モバイルメニューが動作する
- [ ] メニューを閉じられる
- [ ] 現在ページのリンクに視覚的フィードバック

## 可読性
- [ ] フォントサイズが16px以上
- [ ] 行間が1.5以上
- [ ] 段落間に余白がある
- [ ] 単カラムレイアウト
```

## 評価レポート出力

`analysis/mobile-eval.md` を作成:

```markdown
# DayXXX モバイルフレンドリー評価

## 1. タッチターゲット評価
| 要素 | サイズ | 結果 |
|------|--------|------|
| CTAボタン | 56x56px | ✅ |
| ナビゲーション | 44x44px | ✅ |
| SNSリンク | 32x32px | ❌ 要改善 |

## 2. レスポンシブ評価
| 項目 | 結果 |
|------|------|
| 横スクロール | ✅ なし |
| 画像レスポンシブ | ✅ 対応済み |
| フォントサイズ | ⚠️ 要確認 |

## 3. 改善推奨
1. SNSリンクにpaddingを追加して44x44px確保
2. モバイル時のフォントサイズを16pxに固定
```

## 実装手順

### ステップ1: 現状分析
```javascript
// ブラウザ開発者ツールでモバイル表示に切り替え
// デバイスツールバーで各種端末サイズを確認
```

### ステップ2: 自動チェック実行
上記チェックスクリプトをコンソールで実行

### ステップ3: 問題箇所を特定
Issueリストを作成

### ステップ4: 改善実施
問題箇所を修正

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-26 | 初版作成 |
