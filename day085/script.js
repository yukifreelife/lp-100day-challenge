// ============================================
// Salon Lumière - Script.js
// The Midnight Atelier
// ============================================

// === Navigation Scroll Effect ===
const navbar = document.getElementById('navbar');

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(19, 19, 19, 0.95)';
    } else {
        navbar.style.background = 'transparent';
    }
}

window.addEventListener('scroll', updateNavbar);
updateNavbar();

// === Smooth Scroll for Anchor Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// === Fade-in Animation on Scroll ===
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

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// === Reserve Button Click Handler ===
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#contact' || href === 'tel:□□□-□□□□-□□□□') {
            // For demo: show alert (in production, would open reservation form)
            if (href.startsWith('tel:')) {
                // Allow default behavior for tel links
                return;
            }
        }
    });
});
