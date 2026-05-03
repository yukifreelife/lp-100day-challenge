export const GA_MEASUREMENT_ID = "G-PLACEHOLDER";

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const eventParams = {
    event_category: "engagement",
    ...params,
  };

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
    return;
  }

  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
}

export function trackCta({ label, position, href, type = "cta" }) {
  trackEvent("cta_click", {
    cta_label: label,
    cta_position: position,
    cta_type: type,
    link_url: href,
  });
}

export function trackFilter({ group, value }) {
  trackEvent("filter_select", {
    filter_group: group,
    filter_value: value,
    event_label: `${group}:${value}`,
  });
}

export function trackVideoCard({ videoId, title, list }) {
  trackEvent("video_card_click", {
    video_id: videoId,
    video_title: title,
    video_list: list,
    event_label: title,
  });
}
