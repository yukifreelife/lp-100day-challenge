const hasGtag = typeof window.gtag === "function";

function trackEvent(name, params) {
  if (hasGtag) {
    window.gtag("event", name, params);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-tracking="cta"]').forEach((button) => {
    button.addEventListener("click", () => {
      trackEvent("cta_click", {
        event_category: "engagement",
        event_label: button.textContent.trim(),
        cta_position: button.dataset.position || "unknown",
        cta_type: button.dataset.type || "button"
      });
    });
  });

  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("phone_click", {
        event_category: "engagement",
        event_label: link.textContent.trim(),
        value: 1
      });
    });
  });

  const form = document.querySelector('[data-tracking="contact"]');
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      trackEvent("contact_submit", {
        event_category: "conversion",
        event_label: "無料診断フォーム",
        value: 1
      });
      showToast("無料診断を受け付けました。診断結果のご案内をメールでお送りします。");
      form.reset();
    });
  }

  const scrollDepths = [25, 50, 75, 90, 100];
  const trackedDepths = new Set();
  let scrollTimer = 0;

  function trackScrollDepth() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollPercentage = Math.round(((scrollTop + windowHeight) / docHeight) * 100);

    scrollDepths.forEach((depth) => {
      if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth);
        trackEvent("scroll_depth", {
          event_category: "engagement",
          event_label: `${depth}%`,
          value: depth,
          non_interaction: true
        });
      }
    });
  }

  window.addEventListener("scroll", () => {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(trackScrollDepth, 120);
  }, { passive: true });
});

function showToast(message) {
  const previous = document.querySelector(".toast");
  if (previous) {
    previous.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 4200);
}
