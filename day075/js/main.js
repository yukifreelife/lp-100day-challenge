/**
 * PAW PARADISE - Dog Grooming Salon LP
 * Main JavaScript
 */

// ========================================
// Data & Configuration
// ========================================

const PRICES = {
    toy: { full: 6500, shampoo: 4000, cut: 4500 },
    small: { full: 8000, shampoo: 5000, cut: 5500 },
    medium: { full: 10000, shampoo: 6500, cut: 7000 },
    large: { full: 12000, shampoo: 8000, cut: 8500 }
};

// ========================================
// DOM Elements
// ========================================

const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const sizeTabs = document.querySelectorAll('.size-tab');
const priceAmounts = document.querySelectorAll('.toy-price');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const faqItems = document.querySelectorAll('.faq-item');
const contactForm = document.getElementById('contactForm');

// ========================================
// Navigation
// ========================================

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Update ARIA attribute
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navToggle.setAttribute('aria-label', !isExpanded ? 'メニューを閉じる' : 'メニューを開く');
});

// Close mobile menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'メニューを開く');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 16px rgba(107, 78, 74, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ========================================
// Smooth Scroll
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Menu Price Tabs
// ========================================

let priceUpdateTimeout = null;

sizeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Clear any pending animation
        if (priceUpdateTimeout) {
            clearTimeout(priceUpdateTimeout);
        }

        // Update active tab
        sizeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Get selected size
        const size = tab.dataset.size;
        const prices = PRICES[size];

        // Update prices with animation (debounced)
        priceAmounts.forEach((el, index) => {
            // Animate price change
            el.style.transform = 'scale(0.8)';
            el.style.opacity = '0';

            priceUpdateTimeout = setTimeout(() => {
                const priceKeys = ['full', 'shampoo', 'cut'];
                el.textContent = prices[priceKeys[index]].toLocaleString();
                el.style.transform = 'scale(1)';
                el.style.opacity = '1';
            }, 150);
        });
    });
});

// ========================================
// Gallery Filter
// ========================================

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active filter
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Filter gallery items
        galleryItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========================================
// FAQ Accordion
// ========================================

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other FAQs and reset their ARIA
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                const otherQuestion = otherItem.querySelector('.faq-question');
                otherQuestion.setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current FAQ
        item.classList.toggle('active', !isActive);

        // Update ARIA
        question.setAttribute('aria-expanded', !isActive);
    });
});

// ========================================
// Contact Form
// ========================================

// Card "Reserve" buttons - scroll to contact and pre-select menu
const cardBtns = document.querySelectorAll('.card-btn');
cardBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = btn.closest('.menu-card');
        const cardTitle = card.querySelector('.card-title').textContent.trim();

        // Map card title to menu value
        const menuMap = {
            'Full Course': 'full',
            'Shampoo Only': 'shampoo',
            'Cut Only': 'cut'
        };

        const menuValue = menuMap[cardTitle] || '';

        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        const navHeight = nav.offsetHeight;
        const targetPosition = contactSection.offsetTop - navHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Pre-select menu dropdown
        setTimeout(() => {
            const menuSelect = document.getElementById('menu');
            if (menuSelect && menuValue) {
                menuSelect.value = menuValue;
            }
        }, 500);
    });
});

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>送信中...</span>';

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Log data (in production, send to server)
        console.log('Form submitted:', data);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success message
        showNotification('ご予約リクエストを受け付けました。後日担当者よりご連絡いたします。', 'success');

        // Reset form and button
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
    });
}

// ========================================
// Intersection Observer - Fade In Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in
const fadeElements = document.querySelectorAll(
    '.about-container, .menu-card, .gallery-item, .flow-step, .faq-item'
);

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========================================
// Notification System
// ========================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" aria-label="閉じる">&times;</button>
    `;

    // Add close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    document.body.appendChild(notification);
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ========================================
// Date Input - Set min date to today
// ========================================

const dateInput = document.getElementById('preferredDate');
if (dateInput) {
    // Use local date instead of UTC to avoid timezone issues
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const localDate = `${year}-${month}-${day}`;
    dateInput.setAttribute('min', localDate);
}

// ========================================
// Set current year in footer
// ========================================

const currentYearEl = document.getElementById('currentYear');
if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Paw Paradise - Dog Grooming Salon LP loaded');
});
