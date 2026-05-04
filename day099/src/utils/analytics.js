const trackingId = window.GA_MEASUREMENT_ID || "G-PLACEHOLDER";

function getDataLayer() {
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

export function trackEvent(eventName, params = {}) {
  const payload = {
    event: eventName,
    lp_theme: "bouldering_gear",
    lp_category: "ec_landing_page",
    lp_version: "day099",
    ...params,
  };

  getDataLayer().push(payload);

  if (trackingId !== "G-PLACEHOLDER" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function trackPageView(route, meta) {
  trackEvent("page_view", {
    route_name: route,
    page_title: meta.title,
    page_location: window.location.href,
    page_path: `${window.location.pathname}#${route}`,
    non_interaction: true,
  });
}

export function bindTrackedClicks() {
  const handleClick = (event) => {
    const target = event.target.closest("[data-tracking]");
    if (!target) return;

    trackEvent(target.dataset.tracking, {
      event_category: target.dataset.category || "engagement",
      event_label: target.textContent.trim().replace(/\s+/g, " "),
      cta_position: target.dataset.position || "unknown",
      cta_type: target.dataset.type || target.tagName.toLowerCase(),
      href: target.getAttribute("href") || "",
    });
  };

  document.addEventListener("click", handleClick);
  return () => document.removeEventListener("click", handleClick);
}

export function bindScrollDepth() {
  const depths = [25, 50, 75, 90, 100];
  const tracked = new Set();
  let timer = 0;

  const handleScroll = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const percentage = Math.min(100, Math.round(((scrollTop + windowHeight) / docHeight) * 100));

      depths.forEach((depth) => {
        if (percentage >= depth && !tracked.has(depth)) {
          tracked.add(depth);
          trackEvent("scroll_depth", {
            event_category: "engagement",
            event_label: `${depth}%`,
            value: depth,
            non_interaction: true,
          });
        }
      });
    }, 120);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => {
    window.clearTimeout(timer);
    window.removeEventListener("scroll", handleScroll);
  };
}
