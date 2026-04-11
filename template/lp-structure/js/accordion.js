/**
 * Accordion Component
 * FAQ等のアコーディオン機能
 */

export function initAccordion(selector = '.accordion-item') {
  const items = document.querySelectorAll(selector);

  items.forEach(item => {
    const question = item.querySelector('.accordion-question, .faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      items.forEach(i => i.classList.remove('active'));

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Auto-init if not using modules
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initAccordion('.faq-item');
    initAccordion('.accordion-item');
  });
}
