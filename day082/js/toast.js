/**
 * Toast Notification Module
 * Replaces alert() with user-friendly toast notifications
 */

(function() {
  'use strict';

  var toastContainer = null;
  var toastCounter = 0;

  /**
   * トーストコンテナを初期化
   */
  function init() {
    toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.setAttribute('role', 'alert');
      toastContainer.setAttribute('aria-live', 'polite');
      toastContainer.setAttribute('aria-atomic', 'true');
      document.body.appendChild(toastContainer);
    }
  }

  /**
   * SVGアイコンを取得
   */
  function getIcon(type) {
    var icons = {
      success: '<svg class="toast-icon" viewBox="0 0 20 20" fill="#10B981"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>',
      error: '<svg class="toast-icon" viewBox="0 0 20 20" fill="#EF4444"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>',
      info: '<svg class="toast-icon" viewBox="0 0 20 20" fill="#2563EB"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>'
    };
    return icons[type] || icons.info;
  }

  /**
   * トーストを表示
   * @param {string} message - 表示するメッセージ
   * @param {string} type - トーストタイプ (success, error, info)
   * @param {number} duration - 表示時間（ミリ秒）
   */
  function show(message, type, duration) {
    if (typeof duration !== 'number') {
      duration = 5000;
    }

    init();

    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.id = 'toast-' + (++toastCounter);
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-atomic', 'true');

    // 安全にDOMを構築
    toast.innerHTML = getIcon(type);

    var messageSpan = document.createElement('span');
    messageSpan.className = 'toast-message';
    messageSpan.textContent = message; // textContentでXSS防止
    toast.appendChild(messageSpan);

    var closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.setAttribute('aria-label', '閉じる');
    closeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
    closeBtn.onclick = function() { toast.remove(); };
    toast.appendChild(closeBtn);

    toastContainer.appendChild(toast);

    // 自動的に閉じる
    setTimeout(function() {
      if (toast.parentElement) {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(function() {
          if (toast.parentElement) {
            toast.remove();
          }
        }, 300);
      }
    }, duration);

    return toast;
  }

  // グローバルAPI
  window.Toast = {
    success: function(message, duration) {
      return show(message, 'success', duration);
    },
    error: function(message, duration) {
      return show(message, 'error', duration);
    },
    info: function(message, duration) {
      return show(message, 'info', duration);
    },
    show: show
  };

  // DOM準備完了時に初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
