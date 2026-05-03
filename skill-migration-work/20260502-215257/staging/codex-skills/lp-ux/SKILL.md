---
name: "lp-ux"
description: "LP UX強化スキル。Toast通知、ローディング状態、画像エラーハンドリングを実装します。"
---

## Source Metadata

The source skill included additional metadata. It is preserved here for migration traceability.

```yaml
version: 1.0.0
triggers:
  - ユーザーが「UX」「ユーザー体験」「Toast」「ローディング」と言ったとき
  - ユーザーが「/ux」と入力したとき
parameters:
  enable_toast:
    type: boolean
    description: Toast通知を有効化（デフォルト: true）
    required: false
  enable_loading:
    type: boolean
    description: ローディング状態を有効化（デフォルト: true）
    required: false
```

# LP UX強化スキル

LPのユーザー体験（UX）を強化する機能を実装します。

## 実装機能

### 1. Toast通知システム（alert()置換）

#### 実装理由
- alert()はスレッドをブロックし、UXを損なう
- カスタムトーストでブランド整合性を維持
- モバイルフレンドリーな通知体験

#### JavaScript実装（toast.js）

```javascript
(function() {
  'use strict';

  var toastContainer = null;

  function init() {
    toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.className = 'toast-container';
      toastContainer.setAttribute('role', 'alert');
      toastContainer.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastContainer);
    }
  }

  function show(message, type, duration) {
    duration = duration || 5000;
    init();

    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.setAttribute('role', 'alert');

    // 安全にDOM構築（textContentでXSS防止）
    var messageSpan = document.createElement('span');
    messageSpan.className = 'toast-message';
    messageSpan.textContent = message;
    toast.appendChild(messageSpan);

    var closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.setAttribute('aria-label', '閉じる');
    closeBtn.textContent = '×';
    closeBtn.onclick = function() { toast.remove(); };
    toast.appendChild(closeBtn);

    toastContainer.appendChild(toast);

    setTimeout(function() {
      if (toast.parentElement) {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(function() { if (toast.parentElement) toast.remove(); }, 300);
      }
    }, duration);
  }

  window.Toast = {
    success: function(msg, dur) { return show(msg, 'success', dur); },
    error: function(msg, dur) { return show(msg, 'error', dur); },
    info: function(msg, dur) { return show(msg, 'info', dur); }
  };
})();
```

#### CSS実装

```css
.toast-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toast {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 400px;
  animation: toastIn 0.3s ease;
}

.toast-success {
  border-left: 4px solid #10B981;
}

.toast-error {
  border-left: 4px solid #EF4444;
}

.toast-info {
  border-left: 4px solid #2563EB;
}

.toast-close {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes toastIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes toastOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
```

#### HTML配置

```html
<!-- トーストコンテナ -->
<div class="toast-container" id="toastContainer" role="alert" aria-live="polite"></div>

<!-- スクリプト読み込み -->
<script src="js/toast.js"></script>

<!-- 使用例 -->
<script>
  // 成功
  Toast.success('送信完了しました');

  // エラー
  Toast.error('エラーが発生しました');

  // 情報
  Toast.info('処理中です...');
</script>
```

### 2. ローディング状態

#### CSS実装

```css
.btn:disabled,
.btn.btn-loading {
  opacity: 0.7;
  cursor: not-allowed;
  pointer-events: none;
}

.btn.btn-loading {
  position: relative;
  color: transparent;
}

.btn.btn-loading::after {
  content: '';
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  top: 50%;
  left: 50%;
  margin-left: -0.625rem;
  margin-top: -0.625rem;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

#### JavaScript実装

```javascript
// フォーム送信時
var form = document.querySelector('form');
var submitBtn = form.querySelector('[type="submit"]');

form.addEventListener('submit', function() {
  submitBtn.classList.add('btn-loading');
  submitBtn.disabled = true;
});

// API呼び出し後
setTimeout(function() {
  submitBtn.classList.remove('btn-loading');
  submitBtn.disabled = false;
}, 1000);
```

### 3. 画像エラーハンドリング

#### JavaScript実装

```javascript
// 画像エラーハンドリング
document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('img');

  images.forEach(function(img) {
    img.addEventListener('error', function() {
      // 代替画像を表示
      if (!img.dataset.errorHandled) {
        img.dataset.errorHandled = 'true';
        img.src = 'images/placeholder.png';
        img.alt = '画像を読み込めませんでした';

        // 親要素にエラークラス追加
        img.parentElement.classList.add('image-error');
      }
    });

    // 画像読み込み成功
    img.addEventListener('load', function() {
      img.parentElement.classList.add('image-loaded');
    });
  });
});
```

#### CSS実装

```css
.image-error img {
  opacity: 0.5;
  filter: grayscale(100%);
}

.image-error::after {
  content: '画像を読み込めませんでした';
  display: block;
  text-align: center;
  color: #6c757d;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
```

### 4. アクセシビリティ強化

#### :focus-visible実装

```css
/* キーボードナビゲーション用フォーカス */
:focus-visible {
  outline: 3px solid var(--color-primary, #007bff);
  outline-offset: 2px;
  border-radius: 2px;
}

/* マウス操作時はフォーカス枠非表示 */
:focus:not(:focus-visible) {
  outline: none;
}
```

#### 電話番号リンク

```html
<!-- 正しい実装 -->
<a href="tel:0120&#8209;123&#8209;456">0120&#8209;123&#8209;456</a>
```

## 実装手順

### ステップ1: Toast通知実装

1. toast.jsを作成
2. toast.cssを作成
3. HTMLにtoast-containerを追加
4. スクリプトを読み込み

### ステップ2: ローディング状態実装

1. ローディング用CSSを追加
2. フォーム送信時のJavaScriptを追加

### ステップ3: 画像エラーハンドリング実装

1. errorイベント監視を追加
2. 代替画像を準備

### ステップ4: アクセシビリティ強化

1. :focus-visibleを追加
2. 電話番号のハイフンを修正

## チェックリスト

```markdown
## UX強化チェックリスト

- [ ] Toast通知システムを実装
- [ ] alert()をToastに置換
- [ ] ボタン ローディング状態実装
- [ ] 画像エラーハンドリング実装
- [ ] :focus-visible 実装
- [ ] 電話番号 &#8209; 対応
- [ ] スキップリンク実装
- [ ] フォームバリデーション実装
```

## ファイル構成

```
project/
├── index.html              # toast-container追加
├── css/
│   └── toast.css          # Toast通知スタイル
└── js/
    ├── toast.js           # Toast通知
    └── error-handler.js   # エラーハンドリング
```

## 更新履歴

| バージョン | 日付 | 更新内容 |
|-----------|------|----------|
| v1.0.0 | 2026-04-23 | 初版作成 |
