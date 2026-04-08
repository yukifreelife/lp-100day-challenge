// ============================================
// Navigation
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when link clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Menu Tabs
// ============================================
const menuTabs = document.querySelectorAll('.menu-tab');
const menuPanes = document.querySelectorAll('.menu-pane');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        // Update active tab
        menuTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Show corresponding pane
        menuPanes.forEach(pane => {
            pane.classList.remove('active');
            if (pane.id === `pane-${targetTab}`) {
                pane.classList.add('active');
            }
        });
    });
});

// ============================================
// FAQ Accordion
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ============================================
// Contact Form
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate required fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const privacy = document.getElementById('privacy').checked;

        if (!name || !email || !message) {
            showNotification('必須項目を入力してください。', 'error');
            return;
        }

        if (!privacy) {
            showNotification('プライバシーポリシーに同意してください。', 'error');
            return;
        }

        // Create mailto link
        const subject = encodeURIComponent(`【ケータリング見積もり】${name}様`);
        const body = encodeURIComponent(
            `お名前: ${name}\n` +
            `メールアドレス: ${email}\n` +
            `電話番号: ${data.phone || '未入力'}\n` +
            `ご希望日: ${data.date || '未入力'}\n` +
            `人数: ${data.people || '未入力'}\n` +
            `イベント種別: ${data.type || '未入力'}\n` +
            `ご予算: ${data.budget || '未入力'}\n\n` +
            `ご要望・メッセージ:\n${message}`
        );

        // Open email client
        window.location.href = `mailto:info@tableharmony.example.com?subject=${subject}&body=${body}`;

        // Show success message
        showNotification('メールアプリが起動します。そのまま送信してください。', 'success');
    });
}

// ============================================
// Notification System
// ============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// Current Year in Footer
// ============================================
const currentYearElements = document.querySelectorAll('.current-year');
currentYearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
});

// ============================================
// Fade-in Animation on Scroll
// ============================================
const fadeElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// ============================================
// Prefers Reduced Motion
// ============================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    observer.disconnect();
    fadeElements.forEach(el => el.classList.add('visible'));
}
