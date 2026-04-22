/**
 * TERRA - LP Interactive Scripts
 */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation active state based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Form submission handler
const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            dates: document.getElementById('dates').value,
            guests: document.getElementById('guests').value,
            tour: document.getElementById('tour').value,
            message: document.getElementById('message').value
        };

        // Validate required fields
        if (!formData.name || !formData.email) {
            alert('お名前とメールアドレスは必須項目です。');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('有効なメールアドレスを入力してください。');
            return;
        }

        // Log form data (in production, this would send to a server)
        console.log('Reservation Request:', formData);

        // Show success message
        showSuccessMessage();

        // Reset form
        reservationForm.reset();
    });
}

function showSuccessMessage() {
    // Create success notification using DOM methods (no innerHTML)
    const notification = document.createElement('div');
    notification.className = 'notification notification-success';

    // Icon
    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.textContent = 'check_circle';

    // Content container
    const content = document.createElement('div');

    // Title
    const title = document.createElement('strong');
    title.textContent = '送信完了';

    // Message
    const message = document.createElement('p');
    message.textContent = '48時間以内にご返信いたします。';

    // Assemble
    content.appendChild(title);
    content.appendChild(message);
    notification.appendChild(icon);
    notification.appendChild(content);

    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: var(--color-primary);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    /* Fade-in animation for sections */
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.feature-item, .tour-details, .story-card, .gallery-item');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));

// Parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Mobile menu toggle (for future enhancement)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.setAttribute('aria-label', 'Toggle menu');
    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.textContent = 'menu';
    menuButton.appendChild(icon);
    menuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
    `;

    nav.querySelector('.nav-container').insertBefore(
        menuButton,
        nav.querySelector('.nav-logo')
    );

    // Show on mobile only
    if (window.innerWidth <= 768) {
        menuButton.style.display = 'block';
    }
};

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (menuToggle) {
        menuToggle.style.display = window.innerWidth <= 768 ? 'block' : 'none';
    }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        const wasExpanded = question.getAttribute('aria-expanded') === 'true';

        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
            question.setAttribute('aria-expanded', 'false');
        } else {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// Console log for development
console.log('TERRA LP loaded successfully');
