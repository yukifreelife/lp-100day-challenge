// Trattoria Sole - Main JavaScript

/**
 * Page Navigation
 * Handles page switching for single-page application
 */
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById('page-' + pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update desktop nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });

    // Update mobile nav
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return false;
}

/**
 * Smooth Scroll
 * Handles smooth scrolling to anchor links
 */
function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Form Handling
 * Basic form validation and submission handling
 */
function handleReservationForm(event) {
    event.preventDefault();

    // Get form values
    const formData = {
        date: document.getElementById('reservation-date')?.value,
        time: document.getElementById('reservation-time')?.value,
        guests: document.getElementById('reservation-guests')?.value,
        name: document.getElementById('reservation-name')?.value,
        phone: document.getElementById('reservation-phone')?.value,
        email: document.getElementById('reservation-email')?.value,
        requests: document.getElementById('reservation-requests')?.value
    };

    // Basic validation
    if (!formData.date || !formData.time || !formData.name || !formData.phone) {
        alert('必須項目をご入力ください。');
        return false;
    }

    // In production, this would send data to a server
    alert('ご予約を承りました。\n店舗から確認のお電話をさせていただきます。');
    return false;
}

/**
 * Initialize
 * Run on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize home page as active
    showPage('home');

    // Add smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                smoothScroll(targetId);
            }
        });
    });

    // Add form handlers
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', handleReservationForm);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('お問い合わせを承りました。\n内容を確認の上、ご連絡させていただきます。');
            return false;
        });
    }
});
