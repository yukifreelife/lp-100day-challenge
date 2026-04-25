/* ============================================
   Toast Notification System
   ============================================ */

(function() {
  'use strict';

  const TOAST_DURATION = 4000;
  const TOAST_CONTAINER_ID = 'toast-container';

  /**
   * Toastコンテナの作成
   */
  function ensureContainer() {
    let container = document.getElementById(TOAST_CONTAINER_ID);
    if (!container) {
      container = document.createElement('div');
      container.id = TOAST_CONTAINER_ID;
      container.setAttribute('role', 'status');
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-atomic', 'true');
      document.body.appendChild(container);
    }
    return container;
  }

  /**
   * アイコンSVGの取得
   */
  function getIcon(type) {
    const icons = {
      success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
      error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
      info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
      warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
    };
    return icons[type] || icons.info;
  }

  /**
   * Toast要素の作成
   */
  function createToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');

    const iconSpan = document.createElement('span');
    iconSpan.className = 'toast__icon';
    iconSpan.innerHTML = getIcon(type);

    const messageSpan = document.createElement('span');
    messageSpan.className = 'toast__message';
    messageSpan.textContent = message;

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'toast__close';
    closeBtn.setAttribute('aria-label', '閉じる');
    closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    toast.appendChild(iconSpan);
    toast.appendChild(messageSpan);
    toast.appendChild(closeBtn);

    // 閉じるボタン
    closeBtn.addEventListener('click', () => removeToast(toast));

    return toast;
  }

  /**
   * Toastを追加してアニメーション
   */
  function showToast(message, type = 'info') {
    const container = ensureContainer();
    const toast = createToast(message, type);

    container.appendChild(toast);

    // アニメーション開始（次のフレームで）
    requestAnimationFrame(() => {
      toast.classList.add('toast--visible');
    });

    // 自動消去
    setTimeout(() => {
      removeToast(toast);
    }, TOAST_DURATION);

    return toast;
  }

  /**
   * Toastを削除
   */
  function removeToast(toast) {
    if (!toast || !toast.parentNode) return;

    toast.classList.remove('toast--visible');
    toast.classList.add('toast--removing');

    toast.addEventListener('transitionend', () => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, { once: true });
  }

  /**
   * パブリックAPI
   */
  window.Toast = {
    show: showToast,
    success: (msg) => showToast(msg, 'success'),
    error: (msg) => showToast(msg, 'error'),
    info: (msg) => showToast(msg, 'info'),
    warning: (msg) => showToast(msg, 'warning')
  };

})();
