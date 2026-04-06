// ============================================
// Utility Functions - Smooth Scroll
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

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
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
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

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle clicked item
        if (!isActive) {
            faqItem.classList.add('active');
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

        if (isValid) {
            // Show success message (in production, send to server)
            alert('体験レッスンの予約を受け付けました！\n担当者より折り返しご連絡いたします。');
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
