// ============================================
// Navigation Toggle
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) {
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// Fade-in Animation with Intersection Observer
// ============================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    fadeObserver.observe(el);
});

// ============================================
// Pricing Tabs
// ============================================

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        const tabId = button.getAttribute('data-tab');
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// ============================================
// FAQ Accordion
// ============================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question, index) => {
    // Set unique ID for accessibility
    const faqItem = question.parentElement;
    const answerId = `faq-answer-${index + 1}`;
    const answerElement = faqItem.querySelector('.faq-answer');

    if (answerElement && !answerElement.id) {
        answerElement.id = answerId;
    }

    question.setAttribute('aria-controls', answerId);

    question.addEventListener('click', () => {
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            const btn = item.querySelector('.faq-question');
            if (btn) {
                btn.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle clicked item
        if (!isActive) {
            faqItem.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// ============================================
// Grade Selection to Course Mapping
// ============================================

const gradeSelect = document.getElementById('childGrade');
const courseSelect = document.getElementById('preferredCourse');

if (gradeSelect && courseSelect) {
    const gradeToCourse = {
        'toddler-1': 'toddler',
        'toddler-2': 'toddler',
        'toddler-3': 'toddler',
        'elementary-1': 'elementary',
        'elementary-2': 'elementary',
        'elementary-3': 'elementary',
        'elementary-4': 'elementary',
        'elementary-5': 'elementary',
        'elementary-6': 'elementary',
        'adult': 'adult'
    };

    gradeSelect.addEventListener('change', () => {
        const selectedGrade = gradeSelect.value;
        const recommendedCourse = gradeToCourse[selectedGrade];

        if (recommendedCourse) {
            courseSelect.value = recommendedCourse;
        }
    });
}

// ============================================
// Contact Form Validation
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        const requiredFields = contactForm.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#e74c3c';
            } else {
                field.style.borderColor = '';
            }
        });

        // Email validation
        const emailField = document.getElementById('email');
        if (emailField) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = '#e74c3c';
            }
        }

        // Phone validation (Japanese phone numbers)
        const phoneField = document.getElementById('phone');
        if (phoneField && phoneField.value.trim()) {
            // 日本の電話番号パターン: 0XX-XXXX-XXXX, 0XXXXXXXXX, 0XX-XXX-XXXX
            const phonePattern = /^(0\d{1,4}[-\s]?\d{1,4}[-\s]?\d{4}|0\d{9,10})$/;
            if (!phonePattern.test(phoneField.value.trim())) {
                isValid = false;
                phoneField.style.borderColor = '#e74c3c';
            }
        }

        if (isValid) {
            // Show success modal
            showSuccessModal();
            contactForm.reset();
        }
    });

    // Clear error styles on input
    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', () => {
            field.style.borderColor = '';
        });
    });
}

// ============================================
// Success Modal (XSS-safe implementation)
// ============================================

function showSuccessModal() {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-title');

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'success-modal-overlay';
    overlay.addEventListener('click', closeSuccessModal);

    // Create content container
    const content = document.createElement('div');
    content.className = 'success-modal-content';

    // Create icon
    const icon = document.createElement('div');
    icon.className = 'success-modal-icon';
    icon.textContent = '✓';

    // Create title
    const title = document.createElement('h2');
    title.id = 'modal-title';
    title.className = 'success-modal-title';
    title.textContent = 'ご予約ありがとうございます！';

    // Create message
    const message = document.createElement('p');
    message.className = 'success-modal-message';
    message.textContent = '体験レッスンの予約を受け付けました。担当者より折り返しご連絡いたします。';

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'btn btn-primary btn-full';
    closeBtn.textContent = '閉じる';
    closeBtn.addEventListener('click', closeSuccessModal);

    // Assemble modal
    content.append(icon, title, message, closeBtn);
    modal.append(overlay, content);

    // Add to DOM
    document.body.appendChild(modal);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus trap
    closeBtn.focus();

    // ESC key to close
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeSuccessModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function closeSuccessModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}
