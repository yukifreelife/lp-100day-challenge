/**
 * Sushi Sakada - Main JavaScript
 */

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        }
    });
});

// ===================================
// Navigation Scroll Effect
// ===================================
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Mobile Menu Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        if (navMenu) navMenu.classList.toggle('active');
    });
}

// ===================================
// Intersection Observer for Fade-in
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===================================
// Reservation Form
// ===================================
const reservationForm = document.getElementById('reservationForm');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        // Log form data (replace with actual submission logic)
        console.log('Reservation submitted:', data);

        // Show success message
        showReservationSuccess();

        // Reset form
        this.reset();
    });
}

function showReservationSuccess() {
    // Create success message using DOM methods
    const overlay = document.createElement('div');
    overlay.className = 'reservation-success-overlay';

    const content = document.createElement('div');
    content.className = 'reservation-success-content';

    const icon = document.createElement('span');
    icon.className = 'success-icon';
    icon.textContent = '✓';

    const title = document.createElement('h3');
    title.textContent = 'ご予約ありがとうございます';

    const message = document.createElement('p');
    message.textContent = '担当者より24時間以内にご連絡いたします。';

    const closeButton = document.createElement('button');
    closeButton.className = 'btn btn-primary';
    closeButton.textContent = '閉じる';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    content.appendChild(icon);
    content.appendChild(title);
    content.appendChild(message);
    content.appendChild(closeButton);
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Add styles if not exists
    if (!document.getElementById('success-styles')) {
        const style = document.createElement('style');
        style.id = 'success-styles';
        style.textContent = `
            .reservation-success-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            .reservation-success-content {
                background: white;
                padding: 3rem;
                border-radius: 8px;
                text-align: center;
                max-width: 400px;
                animation: slideUp 0.3s ease;
            }
            .success-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 60px;
                background: #48BB78;
                color: white;
                border-radius: 50%;
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            .reservation-success-content h3 {
                margin: 0 0 1rem;
                font-family: "Shippori Mincho", serif;
            }
            .reservation-success-content p {
                margin: 0 0 1.5rem;
                color: #666;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===================================
// Set Minimum Date for Reservation
// ===================================
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

// ===================================
// Subtle Parallax Effect for Hero
// ===================================
let parallaxRaf = null;
window.addEventListener('scroll', () => {
    if (parallaxRaf) return;

    parallaxRaf = requestAnimationFrame(() => {
        const hero = document.querySelector('.hero-background');
        if (hero) {
            const scrolled = window.pageYOffset;
            const parallaxOffset = Math.min(scrolled * 0.1, 50);
            hero.style.transform = `translateY(${parallaxOffset}px)`;
        }
        parallaxRaf = null;
    });
});

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');

    console.log('Sushi Sakada - Loaded');
});
