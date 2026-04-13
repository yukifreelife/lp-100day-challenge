/**
 * Day078 - 訪問型管理栄養士LP
 * JavaScript: モバイルメニュー、タブ切り替え、FAQ、スムーズスクロール、フォームバリデーション、フェードイン
 */

'use strict';

// ===================================
// Constants
// ===================================
const SELECTORS = {
  mobileMenuToggle: '.mobile-menu-toggle',
  mobileMenu: '.mobile-menu',
  mobileNavLinks: '.mobile-nav-link, .mobile-nav-cta',
  serviceTab: '.service-tab',
  serviceContent: '.service-content',
  faqQuestion: '.faq-question',
  faqItem: '.faq-item',
  faqAnswer: '.faq-answer',
  contactForm: '#contactForm',
  header: '.header',
  fadeInElements: '.section-title, .problem-card, .feature-card, .voice-card',
  // 改善: フォーカストラップ用セレクタ追加
  focusFirst: '[data-js-focus-first]',
  focusLast: '[data-js-focus-last]',
  // 改善: プライバシーモーダル用セレクタ追加
  privacyModal: '#privacyModal',
  privacyLink: '.privacy-link',
  modalClose: '[data-js-modal-close]'
};

const CLASSES = {
  active: 'active',
  visible: 'visible',
  scrolled: 'scrolled'
};

// ===================================
// 改善: Mobile Menu（ARIA属性とフォーカストラップ対応）
// ===================================
function initMobileMenu() {
  const toggle = document.querySelector(SELECTORS.mobileMenuToggle);
  const menu = document.querySelector(SELECTORS.mobileMenu);
  const links = document.querySelectorAll(SELECTORS.mobileNavLinks);
  const focusFirstLink = menu.querySelector(SELECTORS.focusFirst);
  const focusLastLink = menu.querySelector(SELECTORS.focusLast);

  if (!toggle || !menu) return;

  // Toggle menu
  toggle.addEventListener('click', () => {
    const isOpening = !menu.classList.contains(CLASSES.active);
    toggle.classList.toggle(CLASSES.active);
    menu.classList.toggle(CLASSES.active);

    // 改善: ARIA属性更新
    toggle.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
    menu.setAttribute('aria-hidden', isOpening ? 'false' : 'true');

    // 改善: メニューを開いた時にフォーカストラップ設定
    if (isOpening) {
      document.body.style.overflow = 'hidden';
      // 最初のリンクにフォーカス
      setTimeout(() => focusFirstLink?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove(CLASSES.active);
      menu.classList.remove(CLASSES.active);
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains(CLASSES.active)) {
      toggle.classList.remove(CLASSES.active);
      menu.classList.remove(CLASSES.active);
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  // 改善: フォーカストラップ - 最後のリンクでTab押下時にトグルボタンへフォーカス
  focusLastLink?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      toggle.focus();
    }
  });

  // 改善: フォーカストラップ - トグルボタンでShift+Tab押下時に最後のリンクへフォーカス
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && e.shiftKey && menu.classList.contains(CLASSES.active)) {
      e.preventDefault();
      focusLastLink?.focus();
    }
  });
}

// ===================================
// 改善: Service Tabs（WAI-ARIA対応）
// ===================================
function initServiceTabs() {
  const tabs = document.querySelectorAll(SELECTORS.serviceTab);
  const contents = document.querySelectorAll(SELECTORS.serviceContent);

  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      // Remove active class from all
      tabs.forEach(t => {
        t.classList.remove(CLASSES.active);
        t.setAttribute('aria-selected', 'false');
      });
      contents.forEach(c => c.classList.remove(CLASSES.active));

      // Add active class to clicked
      tab.classList.add(CLASSES.active);
      // 改善: aria-selected属性を更新
      tab.setAttribute('aria-selected', 'true');

      // Show corresponding content
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add(CLASSES.active);
      }
    });
  });
}

// ===================================
// 改善: FAQ Accordion（ARIA属性と動的max-height対応）
// ===================================
function initFAQ() {
  const questions = document.querySelectorAll(SELECTORS.faqQuestion);

  if (questions.length === 0) return;

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest(SELECTORS.faqItem);
      const answer = item.querySelector(SELECTORS.faqAnswer);
      const isActive = item.classList.contains(CLASSES.active);

      // Close all items
      document.querySelectorAll(SELECTORS.faqItem).forEach(i => {
        i.classList.remove(CLASSES.active);
        const q = i.querySelector(SELECTORS.faqQuestion);
        const a = i.querySelector(SELECTORS.faqAnswer);
        // 改善: すべてのaria-expandedをfalseに設定
        q.setAttribute('aria-expanded', 'false');
        // 改善: max-heightを0にリセット
        a.style.maxHeight = '';
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add(CLASSES.active);
        // 改善: aria-expandedをtrueに設定
        question.setAttribute('aria-expanded', 'true');
        // 改善: scrollHeightを使用して動的にmax-heightを設定
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ===================================
// Smooth Scroll
// ===================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      // 改善: モーダルリンク(#privacy)も除外対象に追加
      if (href === '#' || href === '#privacy') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===================================
// Header Scroll Effect
// ===================================
function initHeaderScroll() {
  const header = document.querySelector(SELECTORS.header);
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add(CLASSES.scrolled);
    } else {
      header.classList.remove(CLASSES.scrolled);
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// ===================================
// 改善: Form Validation（クラス付け替え方式に変更）
// ===================================
function initFormValidation() {
  const form = document.querySelector(SELECTORS.contactForm);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    let isValid = true;
    const firstError = null;

    // Required fields validation
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      const formGroup = field.closest('.form-group');
      const errorElement = formGroup.querySelector('.error-message') ||
                          createErrorElement(formGroup);

      if (!field.value.trim()) {
        isValid = false;
        showError(field, errorElement, 'この項目は必須です');
        if (!firstError) firstError = field;
      } else {
        clearError(field, errorElement);
      }
    });

    // Email validation
    const emailField = form.querySelector('#email');
    if (emailField && emailField.value.trim()) {
      const formGroup = emailField.closest('.form-group');
      const errorElement = formGroup.querySelector('.error-message') ||
                          createErrorElement(formGroup);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailField.value.trim())) {
        isValid = false;
        showError(emailField, errorElement, '有効なメールアドレスを入力してください');
        if (!firstError) firstError = emailField;
      }
    }

    // Phone validation (Japanese format)
    const phoneField = form.querySelector('#phone');
    if (phoneField && phoneField.value.trim()) {
      const formGroup = phoneField.closest('.form-group');
      const errorElement = formGroup.querySelector('.error-message') ||
                          createErrorElement(formGroup);
      const phoneRegex = /^0\d{1,4}[-\s]?\d{1,4}[-\s]?\d{3,4}$/;

      if (!phoneRegex.test(phoneField.value.trim())) {
        isValid = false;
        showError(phoneField, errorElement, '有効な電話番号を入力してください（例: 080-0000-0000）');
        if (!firstError) firstError = phoneField;
      }
    }

    if (!isValid) {
      e.preventDefault();
      firstError?.focus();
    }
  });

  // Real-time validation
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => {
      const formGroup = field.closest('.form-group');
      const errorElement = formGroup?.querySelector('.error-message');
      if (errorElement) {
        clearError(field, errorElement);
      }
    });
  });
}

// 改善: formGroupを引数に受け取るように変更
function createErrorElement(formGroup) {
  const error = document.createElement('span');
  error.className = 'error-message';
  formGroup.appendChild(error);
  return error;
}

// 改善: クラス付け替え方式に変更
function showError(field, errorElement, message) {
  const formGroup = field.closest('.form-group');
  formGroup.classList.add('has-error');
  errorElement.classList.add('has-error');
  errorElement.textContent = message;
}

// 改善: クラス付け替え方式に変更
function clearError(field, errorElement) {
  const formGroup = field.closest('.form-group');
  formGroup.classList.remove('has-error');
  errorElement.classList.remove('has-error');
}

// ===================================
// Fade In Animation
// ===================================
function initFadeIn() {
  const elements = document.querySelectorAll(SELECTORS.fadeInElements);

  if (elements.length === 0) return;

  // Add fade-in-up class
  elements.forEach(el => {
    el.classList.add('fade-in-up');
  });

  // Intersection Observer for scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(CLASSES.visible);
        // Stop observing once visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ===================================
// 改善: Privacy Modal（アクセシビリティ対応）
// ===================================
function initPrivacyModal() {
  const modal = document.querySelector(SELECTORS.privacyModal);
  const privacyLinks = document.querySelectorAll(SELECTORS.privacyLink);
  const closeButtons = document.querySelectorAll(SELECTORS.modalClose);

  if (!modal) return;

  // Focusable elements inside modal for focus trap
  const getFocusableElements = () => {
    return modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  };

  const openModal = () => {
    modal.classList.add(CLASSES.active);
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      setTimeout(() => focusableElements[0].focus(), 100);
    }

    // Store element that opened modal
    modal.dataset.openedBy = document.activeElement?.tagName === 'A'
      ? document.activeElement.getAttribute('href')
      : '';
  };

  const closeModal = () => {
    modal.classList.remove(CLASSES.active);
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Return focus to triggering element
    const openedBy = modal.dataset.openedBy;
    if (openedBy && openedBy === '#privacy') {
      const trigger = document.querySelector(`[href="${openedBy}"]`);
      if (trigger) {
        trigger.focus();
      }
    }
  };

  // Open modal on privacy link click
  privacyLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Close modal on close button/overlay click
  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains(CLASSES.active)) {
      closeModal();
    }
  });

  // Focus trap within modal
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !modal.classList.contains(CLASSES.active)) return;

    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  });
}

// ===================================
// Initialize All
// ===================================
function init() {
  initMobileMenu();
  initServiceTabs();
  initFAQ();
  initSmoothScroll();
  initHeaderScroll();
  initFormValidation();
  initFadeIn();
  // 改善: プライバシーモーダル初期化を追加
  initPrivacyModal();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
