document.documentElement.classList.add("js");

const searchParams = new URLSearchParams(window.location.search);
const isCaptureMode = searchParams.get("capture") === "1";
if (isCaptureMode) {
  document.documentElement.classList.add("capture-mode");
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const analyticsConfig = {
  ga4MeasurementId: (document.body?.dataset.ga4Id || "").trim(),
  clarityProjectId: (document.body?.dataset.clarityId || "").trim()
};

const normalizeAnalyticsKey = (key) => {
  if (!key) {
    return null;
  }

  let normalized = String(key)
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");

  if (!normalized) {
    return null;
  }

  if (/^[0-9]/.test(normalized)) {
    normalized = `p_${normalized}`;
  }

  return normalized.slice(0, 40);
};

const normalizeAnalyticsEventName = (eventName) =>
  normalizeAnalyticsKey(eventName) || "custom_event";

const sanitizeAnalyticsParams = (detail = {}) => {
  if (!detail || typeof detail !== "object") {
    return {};
  }

  const sanitized = {};
  Object.entries(detail).forEach(([key, value]) => {
    const normalizedKey = normalizeAnalyticsKey(key);
    if (!normalizedKey) {
      return;
    }

    if (typeof value === "number" && Number.isFinite(value)) {
      sanitized[normalizedKey] = value;
      return;
    }

    if (typeof value === "boolean") {
      sanitized[normalizedKey] = value ? 1 : 0;
      return;
    }

    if (typeof value === "string") {
      sanitized[normalizedKey] = value.slice(0, 100);
    }
  });

  return sanitized;
};

const createAnalyticsBridge = ({ ga4MeasurementId, clarityProjectId }) => {
  const state = {
    ga4Enabled: false,
    clarityEnabled: false,
    ga4MeasurementId,
    clarityProjectId
  };

  const validGa4Id = /^G-[A-Z0-9]+$/i.test(ga4MeasurementId) && !/^G-X+$/i.test(ga4MeasurementId);
  if (validGa4Id) {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    window.gtag("js", new Date());
    window.gtag("config", ga4MeasurementId, {
      anonymize_ip: true,
      send_page_view: true
    });

    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4MeasurementId)}`;
    document.head.append(gaScript);
    state.ga4Enabled = true;
  }

  const validClarityId =
    /^[a-z0-9]+$/i.test(clarityProjectId) &&
    clarityProjectId.length >= 4 &&
    !/^x+$/i.test(clarityProjectId);
  if (validClarityId) {
    ((c, l, a, r, i, t, y) => {
      c[a] =
        c[a] ||
        function clarity() {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = `https://www.clarity.ms/tag/${i}`;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", clarityProjectId);
    state.clarityEnabled = true;
  }

  const track = (type, detail = {}) => {
    const eventName = normalizeAnalyticsEventName(type);
    const params = sanitizeAnalyticsParams(detail);
    params.ab_variant = document.body?.dataset.variant || "na";
    params.lp_page_path = window.location.pathname;

    const sent = {
      ga4: false,
      clarity: false
    };

    if (state.ga4Enabled && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
      sent.ga4 = true;
    }

    if (state.clarityEnabled && typeof window.clarity === "function") {
      window.clarity("event", eventName);
      sent.clarity = true;
    }

    return {
      eventName,
      sent
    };
  };

  return {
    track,
    status: () => ({ ...state })
  };
};

const analyticsBridge = createAnalyticsBridge(analyticsConfig);

const createTelemetry = (bridge) => {
  const events = [];
  const onceKeys = new Set();
  const subscribers = new Set();

  const notify = () => {
    subscribers.forEach((subscriber) => subscriber());
  };

  const mark = (type, detail = {}, options = {}) => {
    events.push({
      type,
      detail,
      ts: new Date().toISOString(),
      ms: Math.round(performance.now())
    });

    if (options.dispatch !== false && type !== "analytics_dispatch") {
      const dispatchResult = bridge.track(type, detail);
      if (dispatchResult.sent.ga4 || dispatchResult.sent.clarity) {
        events.push({
          type: "analytics_dispatch",
          detail: {
            event: dispatchResult.eventName,
            ga4: dispatchResult.sent.ga4,
            clarity: dispatchResult.sent.clarity
          },
          ts: new Date().toISOString(),
          ms: Math.round(performance.now())
        });
      }
    }

    if (events.length > 500) {
      events.splice(0, events.length - 500);
    }

    notify();
  };

  const markOnce = (key, type, detail = {}) => {
    if (onceKeys.has(key)) {
      return;
    }
    onceKeys.add(key);
    mark(type, detail);
  };

  const summary = () => {
    const byType = {};
    events.forEach((event) => {
      byType[event.type] = (byType[event.type] || 0) + 1;
    });

    return {
      totalEvents: events.length,
      byType,
      lastEvent: events[events.length - 1] || null
    };
  };

  const clear = () => {
    events.length = 0;
    onceKeys.clear();
    notify();
  };

  const snapshot = () => events.map((event) => ({ ...event }));

  const subscribe = (callback) => {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  };

  return {
    mark,
    markOnce,
    summary,
    clear,
    snapshot,
    subscribe
  };
};

const telemetry = createTelemetry(analyticsBridge);
window.day026Analytics = {
  summary: telemetry.summary,
  snapshot: telemetry.snapshot,
  clear: telemetry.clear,
  analyticsStatus: analyticsBridge.status
};

const assignVariant = () => {
  const validVariants = new Set(["A", "B"]);
  const queryVariant = (searchParams.get("ab") || "").toUpperCase();
  if (validVariants.has(queryVariant)) {
    try {
      localStorage.setItem("day026-ab-variant", queryVariant);
    } catch {
      // localStorage unavailable
    }

    return {
      variant: queryVariant,
      source: "query"
    };
  }

  let storedVariant = "";
  try {
    storedVariant = localStorage.getItem("day026-ab-variant") || "";
  } catch {
    storedVariant = "";
  }

  if (validVariants.has(storedVariant)) {
    return {
      variant: storedVariant,
      source: "localStorage"
    };
  }

  const randomVariant = Math.random() < 0.5 ? "A" : "B";
  try {
    localStorage.setItem("day026-ab-variant", randomVariant);
  } catch {
    // localStorage unavailable
  }

  return {
    variant: randomVariant,
    source: "random"
  };
};

const { variant, source: variantSource } = assignVariant();
const variantLabel = document.querySelector("#ab-variant-label");
if (variantLabel) {
  variantLabel.textContent = variant;
}

document.body.dataset.variant = variant;

document.querySelectorAll("[data-copy-a][data-copy-b]").forEach((node) => {
  node.textContent = variant === "A" ? node.dataset.copyA : node.dataset.copyB;
});

const caseGrid = document.querySelector(".case-grid");
if (caseGrid && variant === "B") {
  ["service", "saas", "ec"].forEach((segment) => {
    caseGrid.querySelectorAll(`[data-segment='${segment}']`).forEach((card) => {
      caseGrid.append(card);
    });
  });
}

telemetry.mark("page_init", {
  variant,
  variantSource,
  captureMode: isCaptureMode,
  reducedMotion: prefersReducedMotion
});

telemetry.mark("ab_variant_assigned", {
  variant,
  source: variantSource
});

const revealNodes = document.querySelectorAll("[data-reveal]");
if (revealNodes.length > 0) {
  if (isCaptureMode || prefersReducedMotion) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));
  }
}

const header = document.querySelector(".site-header");
const progressBar = document.querySelector(".scroll-progress span");

const updateScrollState = () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  }

  if (header) {
    header.classList.toggle("is-scrolled", scrollTop > 12);
  }

  [25, 50, 75, 90].forEach((milestone) => {
    if (ratio >= milestone) {
      telemetry.markOnce(`scroll_${milestone}`, "scroll_milestone", {
        milestone
      });
    }
  });
};

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);

const sectionNodes = document.querySelectorAll("[data-section]");
if (sectionNodes.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.4) {
          return;
        }

        const sectionName = entry.target.getAttribute("data-section") || entry.target.id || "unknown";
        telemetry.markOnce(`section_${sectionName}`, "section_view", {
          section: sectionName
        });
      });
    },
    {
      threshold: [0.4, 0.7]
    }
  );

  sectionNodes.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll(".js-cta").forEach((node) => {
  node.addEventListener("click", () => {
    const placement = node.getAttribute("data-telemetry") || "cta_unknown";
    telemetry.mark("cta_click", {
      placement,
      variant
    });
  });
});

const proofFilterButtons = document.querySelectorAll(".proof-filter-btn");
const proofCards = document.querySelectorAll(".case-card");

const applyProofFilter = (filterValue) => {
  let visibleCount = 0;

  proofCards.forEach((card) => {
    const segment = card.getAttribute("data-segment");
    const isVisible = filterValue === "all" || segment === filterValue;
    card.classList.toggle("is-hidden", !isVisible);

    if (isVisible) {
      visibleCount += 1;
    }
  });

  return visibleCount;
};

proofFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-proof-filter") || "all";

    proofFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    const visibleCount = applyProofFilter(filterValue);

    telemetry.mark("proof_filter_change", {
      filter: filterValue,
      visibleCount
    });
  });
});

applyProofFilter("all");

document.querySelectorAll(".guarantee-card").forEach((detailNode) => {
  detailNode.addEventListener("toggle", () => {
    if (!detailNode.open) {
      return;
    }

    telemetry.mark("risk_detail_open", {
      item: detailNode.getAttribute("data-risk-item") || "unknown"
    });
  });
});

const faqDetails = document.querySelectorAll(".faq-list details");
faqDetails.forEach((detailNode) => {
  detailNode.addEventListener("toggle", () => {
    if (!detailNode.open) {
      return;
    }

    faqDetails.forEach((otherNode) => {
      if (otherNode !== detailNode) {
        otherNode.open = false;
      }
    });

    telemetry.mark("faq_open", {
      question: detailNode.querySelector("summary")?.textContent?.trim() || "unknown"
    });
  });
});

const chipButtons = document.querySelectorAll(".chip-btn");
chipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-chip-target");
    const chipValue = button.getAttribute("data-chip-value");

    if (!targetId || !chipValue) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!(target instanceof HTMLTextAreaElement || target instanceof HTMLInputElement)) {
      return;
    }

    const existingValue = target.value.trim();
    if (existingValue.length === 0) {
      target.value = chipValue;
    } else if (!existingValue.includes(chipValue)) {
      target.value = `${existingValue}\n・${chipValue}`;
    }

    button.classList.add("is-active");
    target.dispatchEvent(new Event("input", { bubbles: true }));

    telemetry.mark("chip_select", {
      target: targetId,
      value: chipValue
    });
  });
});

const briefForm = document.querySelector("#brief-form");
const formStatus = briefForm ? briefForm.querySelector(".form-status") : null;
let hasStartedForm = false;

if (briefForm) {
  const markFormStart = () => {
    if (hasStartedForm) {
      return;
    }

    hasStartedForm = true;
    telemetry.mark("form_start");
  };

  briefForm.querySelectorAll("input, textarea").forEach((node) => {
    node.addEventListener("focus", markFormStart, { once: true });
    node.addEventListener("input", markFormStart, { once: true });
  });

  briefForm.addEventListener("submit", (event) => {
    event.preventDefault();

    telemetry.mark("form_submit_start");
    if (formStatus) {
      formStatus.classList.remove("is-error", "is-success");
    }

    if (!briefForm.checkValidity()) {
      briefForm.reportValidity();

      if (formStatus) {
        formStatus.textContent = "入力内容を確認してください。";
        formStatus.classList.add("is-error");
      }

      telemetry.mark("form_submit_error", {
        reason: "validation_failed"
      });
      return;
    }

    const submitButton = briefForm.querySelector("button[type='submit']");
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "送信中...";
    }

    window.setTimeout(() => {
      briefForm.reset();
      chipButtons.forEach((button) => button.classList.remove("is-active"));

      if (formStatus) {
        formStatus.textContent = "送信ありがとうございました。24時間以内にご連絡します。";
        formStatus.classList.add("is-success");
      }

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = "30秒で無料相談を予約する";
      }

      hasStartedForm = false;
      telemetry.mark("form_submit_success");
    }, 700);
  });
}

const metricVariant = document.querySelector("#metric-variant");
const metricEventTotal = document.querySelector("#metric-event-total");
const metricSectionViews = document.querySelector("#metric-section-views");
const metricCtaClicks = document.querySelector("#metric-cta-clicks");
const metricFormSuccess = document.querySelector("#metric-form-success");
const metricFaqOpens = document.querySelector("#metric-faq-opens");
const metricLastEvent = document.querySelector("#metric-last-event");

const updateDashboard = () => {
  const summary = telemetry.summary();
  const dispatchEvents = summary.byType.analytics_dispatch || 0;
  const localEventTotal = Math.max(0, summary.totalEvents - dispatchEvents);
  const lastMeaningfulEvent = telemetry
    .snapshot()
    .reverse()
    .find((event) => event.type !== "analytics_dispatch");

  if (metricVariant) {
    metricVariant.textContent = variant;
  }
  if (metricEventTotal) {
    metricEventTotal.textContent = String(localEventTotal);
  }
  if (metricSectionViews) {
    metricSectionViews.textContent = String(summary.byType.section_view || 0);
  }
  if (metricCtaClicks) {
    metricCtaClicks.textContent = String(summary.byType.cta_click || 0);
  }
  if (metricFormSuccess) {
    metricFormSuccess.textContent = String(summary.byType.form_submit_success || 0);
  }
  if (metricFaqOpens) {
    metricFaqOpens.textContent = String(summary.byType.faq_open || 0);
  }

  if (metricLastEvent) {
    if (!lastMeaningfulEvent) {
      metricLastEvent.textContent = "-";
    } else {
      const formattedTime = new Date(lastMeaningfulEvent.ts).toLocaleTimeString("ja-JP", {
        hour12: false
      });
      metricLastEvent.textContent = `${lastMeaningfulEvent.type} (${formattedTime})`;
    }
  }
};

telemetry.subscribe(updateDashboard);
updateDashboard();

const resetButton = document.querySelector("#reset-telemetry");
if (resetButton) {
  resetButton.addEventListener("click", () => {
    telemetry.clear();
    telemetry.mark("telemetry_reset");
  });
}
