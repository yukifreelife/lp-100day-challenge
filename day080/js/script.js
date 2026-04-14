/**
 * まなびPLUS - Main JavaScript
 * Day 080 - 家庭教師LP
 */

// ===================================
// Mobile Menu Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===================================
// Header Scroll Effect
// ===================================
const nav = document.getElementById('nav');

if (nav) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === '#' || href === '#!') return;

        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {
            const headerHeight = document.getElementById('nav')?.offsetHeight || 70;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    }
});

// ===================================
// Voice Tab Switching
// ===================================
const voiceTabs = document.querySelectorAll('.voice-tab');
const voicePanels = document.querySelectorAll('.voice-panel');

voiceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');

        // Remove active class from all tabs and panels
        voiceTabs.forEach(t => t.classList.remove('active'));
        voicePanels.forEach(p => p.classList.remove('active'));

        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        const targetPanel = document.getElementById(targetTab);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// ===================================
// Fade In Animation (Intersection Observer)
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    fadeInObserver.observe(el);
});

// ===================================
// Form Validation
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Reset previous errors
        clearErrors();

        // Validate form
        let isValid = true;

        // Name validation
        const name = contactForm.querySelector('#name');
        if (!name || !name.value.trim()) {
            showError(name, 'お名前を入力してください');
            isValid = false;
        }

        // Email validation
        const email = contactForm.querySelector('#email');
        if (!email || !email.value.trim()) {
            showError(email, 'メールアドレスを入力してください');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, '有効なメールアドレスを入力してください');
            isValid = false;
        }

        // Phone validation
        const phone = contactForm.querySelector('#phone');
        if (!phone || !phone.value.trim()) {
            showError(phone, '電話番号を入力してください');
            isValid = false;
        } else if (!isValidPhone(phone.value.trim())) {
            showError(phone, '有効な電話番号を入力してください');
            isValid = false;
        }

        // Grade validation
        const grade = contactForm.querySelector('#grade');
        if (!grade || !grade.value) {
            showError(grade, '学年を選択してください');
            isValid = false;
        }

        // Privacy checkbox validation
        const privacy = contactForm.querySelector('input[name="privacy"]');
        if (!privacy || !privacy.checked) {
            const privacyLabel = privacy?.closest('.checkbox-label');
            if (privacyLabel) {
                showError(privacyLabel, 'プライバシーポリシーに同意してください');
            }
            isValid = false;
        }

        if (isValid) {
            // Show success message (in production, send to server)
            showSuccessMessage();
        }
    });
}

function showError(element, message) {
    const parent = element.closest('.form-group') || element.closest('.checkbox-label')?.parentElement;
    if (parent) {
        let errorDiv = parent.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            parent.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
        parent.classList.add('has-error');

        // Add error styles dynamically if not present
        if (!document.querySelector('#error-styles')) {
            const style = document.createElement('style');
            style.id = 'error-styles';
            style.textContent = `
                .has-error .form-input,
                .has-error .form-select,
                .has-error .form-textarea {
                    border-color: var(--color-error, #EF4444);
                }
                .error-message {
                    color: var(--color-error, #EF4444);
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

function clearErrors() {
    document.querySelectorAll('.has-error').forEach(el => {
        el.classList.remove('has-error');
    });
    document.querySelectorAll('.error-message').forEach(el => {
        el.remove();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Japanese phone number format (10-11 digits)
    const phoneRegex = /^0\d{1,4}[-\s]?\d{1,4}[-\s]?\d{3,4}$/;
    return phoneRegex.test(phone.replace(/[０-９]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    }));
}

// Safe DOM manipulation for success message (no innerHTML)
function showSuccessMessage() {
    const formWrapper = document.querySelector('.contact-form-wrapper');

    if (formWrapper) {
        // Clear form content using safe DOM methods
        while (formWrapper.firstChild) {
            formWrapper.removeChild(formWrapper.firstChild);
        }

        // Create success message elements
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';

        const successIcon = document.createElement('div');
        successIcon.className = 'success-icon';
        successIcon.textContent = '✓';

        const successTitle = document.createElement('h3');
        successTitle.className = 'success-title';
        successTitle.textContent = '送信完了しました！';

        const successText = document.createElement('p');
        successText.className = 'success-text';
        successText.innerHTML = '無料体験予約のリクエストを受け付けました。<br>2営業日以内にご連絡いたします。<br>ご連絡をお待きください。';

        successMessage.appendChild(successIcon);
        successMessage.appendChild(successTitle);
        successMessage.appendChild(successText);
        formWrapper.appendChild(successMessage);

        // Add success styles
        if (!document.querySelector('#success-styles')) {
            const style = document.createElement('style');
            style.id = 'success-styles';
            style.textContent = `
                .success-message {
                    text-align: center;
                    padding: var(--spacing-lg);
                }
                .success-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto var(--spacing-md);
                    background: var(--color-accent, #10B981);
                    color: white;
                    font-size: 3rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .success-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: var(--spacing-sm);
                }
                .success-text {
                    color: var(--color-text-light, #6B7280);
                    line-height: 1.8;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// ===================================
// Prevent form resubmission on page reload
// ===================================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
