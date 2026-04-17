/**
 * FocusFlow LP - Main JavaScript
 * FAQ Accordion, Navigation, and Interactions
 */

(function() {
  'use strict';

  /**
   * FAQアコーディオン機能
   */
  function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        const answer = this.nextElementSibling;

        // 全てのFAQを閉じる（オプション：同時に1つだけ開く場合）
        faqQuestions.forEach(function(q) {
          if (q !== question) {
            q.setAttribute('aria-expanded', 'false');
            const a = q.nextElementSibling;
            if (a) a.style.maxHeight = '';
          }
        });

        // クリックされたFAQを開閉
        if (!isExpanded) {
          this.setAttribute('aria-expanded', 'true');
          // 動的に高さを計算
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        } else {
          if (answer) {
            answer.style.maxHeight = '';
          }
        }
      });
    });
  }

  /**
   * スムーズスクロール
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // #のみの場合はスキップ
        if (href === '#' || href === '#!') {
          e.preventDefault();
          return;
        }

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          const targetPosition = target.offsetTop - 80; // ナビゲーション分のオフセット

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * ナビゲーションの固定時スタイルと背景制御
   */
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    const heroSection = document.querySelector('.hero');
    const scrollProgress = document.querySelector('.scroll-progress');
    const backToTop = document.querySelector('.back-to-top');

    let lastScroll = 0;
    const THROTTLE_MS = 100;
    let lastRun = 0;

    window.addEventListener('scroll', function() {
      const now = Date.now();
      if (now - lastRun < THROTTLE_MS) return;
      lastRun = now;

      const currentScroll = window.pageYOffset;
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;

      // スクロールプログレス更新
      if (scrollProgress) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (currentScroll / docHeight) * 100;
        scrollProgress.style.width = Math.min(progress, 100) + '%';
      }

      // ナビゲーション背景制御（ヒーローセクション内は透明）
      if (nav) {
        if (currentScroll < heroHeight - 100) {
          nav.classList.add('nav-transparent');
          nav.classList.remove('nav-scrolled');
        } else {
          nav.classList.remove('nav-transparent');
          nav.classList.add('nav-scrolled');
        }
      }

      // トップに戻るボタン表示制御
      if (backToTop) {
        if (currentScroll > 500) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /**
   * モバイルナビゲーション（ハンバーガーメニー）
   */
  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (!navToggle || !navMenu) return;

    // ハンバーガーボタンクリック
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);

      // メニューの開閉
      navMenu.classList.toggle('active');

      // aria-label更新
      this.setAttribute('aria-label', isExpanded ? 'メニューを開く' : 'メニューを閉じる');
    });

    // リンククリックでメニューを閉じる
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-label', 'メニューを開く');
      });
    });

    // ページ外クリックでメニューを閉じる
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav') && navMenu.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-label', 'メニューを開く');
      }
    });
  }

  /**
   * トップに戻るボタン
   */
  function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');

    if (!backToTop) return;

    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * コンタクトフォーム送信
   */
  function initContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // バリデーション
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
          if (window.Toast) {
            Toast.error('必須項目を入力してください');
          }
          return;
        }

        // メールアドレス簡易バリデーション
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
          if (window.Toast) {
            Toast.error('有効なメールアドレスを入力してください');
          }
          return;
        }

        // 送信成功メッセージ（デモ用）
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.textContent : '';

        // ローディング状態
        if (submitBtn) {
          submitBtn.classList.add('btn-loading');
          submitBtn.disabled = true;
        }

        // 送信シミュレーション（実際のAPI呼び出しはここ）
        setTimeout(function() {
          if (window.Toast) {
            Toast.success('お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。');
          }

          // ローディング解除
          if (submitBtn) {
            submitBtn.classList.remove('btn-loading');
            submitBtn.disabled = false;
          }

          // フォームリセット
          contactForm.reset();
        }, 1000);
      });
    }
  }

  /**
   * アニメーション（スクロール時のフェードイン）
   */
  function initScrollAnimations() {
    // reduced-motionが有効な場合はアニメーションをスキップ
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // アニメーション対象の要素
    const animatedElements = document.querySelectorAll(
      '.problem-card, .feature-card, .pricing-card, .testimonial-card'
    );

    animatedElements.forEach(function(el) {
      // CSSで既にopacity:0が設定されている場合はスキップ
      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.opacity === '1') {
        return;
      }
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  /**
   * 初期化
   */
  function init() {
    initFAQ();
    initSmoothScroll();
    initNavScroll();
    initMobileNav();
    initBackToTop();
    initContactForm();
    initScrollAnimations();
  }

  // DOM読み込み後に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/**
 * アニメーション用クラス
 * CSSに追加が必要：
 *
 * .animate-in {
 *   opacity: 1 !important;
 *   transform: translateY(0) !important;
 * }
 */
