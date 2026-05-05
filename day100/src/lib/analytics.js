const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const blockedParamKeys = new Set([
  "name",
  "full_name",
  "email",
  "mail",
  "phone",
  "tel",
  "message",
  "body",
  "issue",
  "business",
]);

let initialized = false;

function hasWindow() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function sanitizeParams(params = {}) {
  return Object.entries(params).reduce((safeParams, [key, value]) => {
    if (blockedParamKeys.has(String(key).toLowerCase())) {
      return safeParams;
    }

    if (["string", "number", "boolean"].includes(typeof value)) {
      safeParams[key] = value;
    }

    return safeParams;
  }, {});
}

function initAnalytics() {
  if (!measurementId || initialized || !hasWindow()) {
    return Boolean(measurementId);
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });

  initialized = true;
  return true;
}

export function trackEvent(name, params = {}) {
  if (!measurementId || !hasWindow()) {
    return;
  }

  initAnalytics();

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, sanitizeParams(params));
}
