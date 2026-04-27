/**
 * Earth Natural Green - Organic Farm LP Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initForm();
    initSmoothScroll();
    initHeaderScroll();
    initHamburgerMenu();
});

/**
 * FAQ アコーディオン
 */
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';

            // 他のFAQを閉じる
            faqQuestions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
            });

            // クリックしたFAQをトグル
            if (!isExpanded) {
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/**
 * フォーム送信
 */
function initForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // フォームデータを取得
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // バリデーション
            if (!data.name || !data.email || !data.plan) {
                alert('必須項目を入力してください');
                return;
            }

            // メールアドレス形式チェック
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('正しいメールアドレスを入力してください');
                return;
            }

            // プライバシーポリシー同意チェック
            if (!data.privacy) {
                alert('プライバシーポリシーに同意してください');
                return;
            }

            // 送信処理（デモ用）
            console.log('Form submitted:', data);
            alert('お申し込みありがとうございます。\n確認メールをお送りしました。');
            form.reset();
        });
    }
}

/**
 * スムーススクロール
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * ヘッダースクロール効果
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 16px rgba(74, 124, 89, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(74, 124, 89, 0.08)';
        }

        lastScroll = currentScroll;
    });
}

/**
 * ハンバーガーメニュー
 */
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('navMenu');
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('is-open');
        overlay.classList.toggle('is-open');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    }

    function closeMenu() {
        hamburger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    overlay.addEventListener('click', closeMenu);

    // ナビリンククリックでメニューを閉じる
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ウィンドウリサイズ時、768px以上でメニュー状態リセット
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
}
