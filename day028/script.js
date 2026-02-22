(function () {
  const header = document.querySelector(".site-header");
  const form = document.querySelector("#appraisal-form");
  const statusNode = document.querySelector("#form-status");
  const submitButton = form ? form.querySelector('[type="submit"]') : null;
  const ctaNodes = document.querySelectorAll("[data-cta]");
  const prefectureNode = document.querySelector("#prefecture");
  const cityNode = document.querySelector("#city");
  let lastCtaName = "";
  let hasTrackedFormStart = false;
  const trackedFieldStarts = new Set();

  const FIELD_ERROR_MAP = {
    "property-type": "error-property-type",
    prefecture: "error-prefecture",
    city: "error-city",
    "area-size": "error-area-size",
    "building-age": "error-building-age",
    "sale-timing": "error-sale-timing",
    "full-name": "error-full-name",
    email: "error-email",
    phone: "error-phone",
    consent: "error-consent",
  };

  const CITIES_BY_PREFECTURE = {
    "東京都": [
      "渋谷区",
      "新宿区",
      "港区",
      "世田谷区",
      "品川区",
      "目黒区",
      "杉並区",
      "その他市区町村",
    ],
    "神奈川県": [
      "横浜市",
      "川崎市",
      "相模原市",
      "藤沢市",
      "鎌倉市",
      "その他市区町村",
    ],
    "埼玉県": [
      "さいたま市",
      "川口市",
      "川越市",
      "所沢市",
      "越谷市",
      "その他市区町村",
    ],
    "千葉県": [
      "千葉市",
      "船橋市",
      "市川市",
      "柏市",
      "松戸市",
      "その他市区町村",
    ],
    "その他": [
      "北海道・東北",
      "中部",
      "関西",
      "中国・四国",
      "九州・沖縄",
      "その他市区町村",
    ],
  };

  function getHeaderOffset() {
    if (!header) {
      return 0;
    }
    return header.getBoundingClientRect().height + 12;
  }

  function scrollToHashTarget(targetId) {
    const target = document.querySelector(targetId);
    if (!target) {
      return;
    }
    const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top, behavior: "smooth" });
  }

  function setupSmoothScroll() {
    const hashLinks = document.querySelectorAll('a[href^="#"]');
    hashLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") {
          return;
        }
        const target = document.querySelector(href);
        if (!target) {
          return;
        }
        event.preventDefault();
        scrollToHashTarget(href);
        history.replaceState(null, "", href);
      });
    });

    if (window.location.hash) {
      window.setTimeout(() => {
        scrollToHashTarget(window.location.hash);
      }, 120);
    }
  }

  function pushDataLayer(payload) {
    if (!payload || typeof payload !== "object") {
      return;
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }
  }

  function trackCta(eventName, data) {
    const payload = {
      event: eventName,
      page: window.location.pathname,
      ts: new Date().toISOString(),
      ...data,
    };

    pushDataLayer(payload);
    window.day028Telemetry = window.day028Telemetry || [];
    window.day028Telemetry.push(payload);
  }

  function setupCtaTracking() {
    ctaNodes.forEach((node) => {
      node.addEventListener("click", () => {
        const ctaName = node.getAttribute("data-cta");
        lastCtaName = ctaName || "";
        trackCta("cta_click", { cta_name: ctaName || "unknown" });
      });
    });
  }

  function getFieldTrackName(input) {
    return input.id || input.name || "unknown";
  }

  function trackFormStartOnce(firstField) {
    if (hasTrackedFormStart) {
      return;
    }
    hasTrackedFormStart = true;
    trackCta("form_start", {
      form_id: "appraisal-form",
      first_field: firstField,
      cta_source: lastCtaName || "unknown",
    });
  }

  function trackFieldStartOnce(fieldName, fieldType) {
    if (!fieldName || trackedFieldStarts.has(fieldName)) {
      return;
    }
    trackedFieldStarts.add(fieldName);
    trackCta("form_field_start", {
      form_id: "appraisal-form",
      field_name: fieldName,
      field_type: fieldType,
    });
  }

  function buildFormContext() {
    const propertyType = document.getElementById("property-type");
    const prefecture = document.getElementById("prefecture");
    const saleTiming = document.getElementById("sale-timing");
    const contactMethod = getFirstCheckedRadioNode();
    return {
      form_id: "appraisal-form",
      cta_source: lastCtaName || "unknown",
      property_type: propertyType && propertyType.value ? propertyType.value : "unselected",
      prefecture: prefecture && prefecture.value ? prefecture.value : "unselected",
      sale_timing: saleTiming && saleTiming.value ? saleTiming.value : "unselected",
      contact_method: contactMethod ? contactMethod.value : "unselected",
    };
  }

  function addError(errors, id, code, message) {
    errors.push({ id, code, message });
  }

  function summarizeValidationErrors(errors) {
    const fieldIds = [];
    const errorCodes = [];
    errors.forEach((error) => {
      if (error.id && !fieldIds.includes(error.id)) {
        fieldIds.push(error.id);
      }
      if (error.code && !errorCodes.includes(error.code)) {
        errorCodes.push(error.code);
      }
    });
    return {
      error_count: errors.length,
      first_error_field: fieldIds[0] || "unknown",
      error_fields: fieldIds.join(",") || "none",
      error_codes: errorCodes.join(",") || "none",
    };
  }

  function rebuildCityOptions(prefectureValue, selectedValue) {
    if (!cityNode) {
      return;
    }

    cityNode.innerHTML = "";

    if (!prefectureValue) {
      cityNode.disabled = true;
      const emptyOption = document.createElement("option");
      emptyOption.value = "";
      emptyOption.textContent = "都道府県を先に選択してください";
      cityNode.appendChild(emptyOption);
      return;
    }

    cityNode.disabled = false;

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "選択してください";
    cityNode.appendChild(defaultOption);

    const cities = CITIES_BY_PREFECTURE[prefectureValue] || ["その他市区町村"];
    cities.forEach((cityName) => {
      const option = document.createElement("option");
      option.value = cityName;
      option.textContent = cityName;
      cityNode.appendChild(option);
    });

    if (selectedValue && cities.includes(selectedValue)) {
      cityNode.value = selectedValue;
    }
  }

  function setStatus(message, type) {
    if (!statusNode) {
      return;
    }
    statusNode.textContent = message;
    statusNode.classList.remove("is-success", "is-error");
    if (type === "success") {
      statusNode.classList.add("is-success");
    }
    if (type === "error") {
      statusNode.classList.add("is-error");
    }
  }

  function setFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorId = FIELD_ERROR_MAP[fieldId];
    const errorNode = errorId ? document.getElementById(errorId) : null;

    if (field) {
      field.classList.toggle("is-invalid", Boolean(message));
      field.setAttribute("aria-invalid", message ? "true" : "false");
    }
    if (errorNode) {
      errorNode.textContent = message || "";
    }
  }

  function setRadioError(message) {
    const errorNode = document.getElementById("error-contact-method");
    const radios = document.querySelectorAll('input[name="contact_method"]');
    radios.forEach((radio) => {
      radio.classList.toggle("is-invalid", Boolean(message));
      radio.setAttribute("aria-invalid", message ? "true" : "false");
    });
    if (errorNode) {
      errorNode.textContent = message || "";
    }
  }

  function clearAllErrors() {
    Object.keys(FIELD_ERROR_MAP).forEach((fieldId) => {
      setFieldError(fieldId, "");
    });
    setRadioError("");
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isPhone(value) {
    return /^[0-9+\-()\s]{10,16}$/.test(value);
  }

  function getFirstCheckedRadioNode() {
    return document.querySelector('input[name="contact_method"]:checked');
  }

  function validateForm() {
    const errors = [];

    const propertyType = document.getElementById("property-type");
    const prefecture = document.getElementById("prefecture");
    const city = document.getElementById("city");
    const areaSize = document.getElementById("area-size");
    const buildingAge = document.getElementById("building-age");
    const saleTiming = document.getElementById("sale-timing");
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const consent = document.getElementById("consent");
    const selectedContactMethodNode = getFirstCheckedRadioNode();
    const selectedContactMethod = selectedContactMethodNode ? selectedContactMethodNode.value : "";
    const emailValue = email ? email.value.trim() : "";
    const phoneValue = phone ? phone.value.trim() : "";

    if (!propertyType || !propertyType.value) {
      addError(errors, "property-type", "property_type_required", "物件種別を選択してください。");
    }
    if (!prefecture || !prefecture.value) {
      addError(errors, "prefecture", "prefecture_required", "都道府県を選択してください。");
    }
    if (!city || city.disabled || !city.value) {
      addError(errors, "city", "city_required", "市区町村を選択してください。");
    }
    if (areaSize && areaSize.value !== "" && Number(areaSize.value) <= 0) {
      addError(errors, "area-size", "area_size_invalid", "面積を正しく入力してください。");
    }
    if (buildingAge && buildingAge.value !== "" && Number(buildingAge.value) < 0) {
      addError(errors, "building-age", "building_age_invalid", "築年数を正しく入力してください。");
    }
    if (!saleTiming || !saleTiming.value) {
      addError(errors, "sale-timing", "sale_timing_required", "売却希望時期を選択してください。");
    }
    if (!fullName || !fullName.value.trim()) {
      addError(errors, "full-name", "full_name_required", "氏名を入力してください。");
    }
    if (!selectedContactMethod) {
      addError(errors, "contact_method", "contact_method_required", "連絡希望方法を選択してください。");
    }

    if (selectedContactMethod === "メール") {
      if (!emailValue) {
        addError(errors, "email", "email_required_for_mail", "連絡方法がメールのため、メールアドレスは必須です。");
      } else if (!isEmail(emailValue)) {
        addError(errors, "email", "email_invalid", "メールアドレスの形式を確認してください。");
      }
      if (phoneValue && !isPhone(phoneValue)) {
        addError(errors, "phone", "phone_invalid", "電話番号の形式を確認してください。");
      }
    } else if (selectedContactMethod === "電話") {
      if (!phoneValue) {
        addError(errors, "phone", "phone_required_for_phone", "連絡方法が電話のため、電話番号は必須です。");
      } else if (!isPhone(phoneValue)) {
        addError(errors, "phone", "phone_invalid", "電話番号の形式を確認してください。");
      }
      if (emailValue && !isEmail(emailValue)) {
        addError(errors, "email", "email_invalid", "メールアドレスの形式を確認してください。");
      }
    } else if (selectedContactMethod === "どちらでも可") {
      if (!emailValue && !phoneValue) {
        addError(errors, "email", "email_or_phone_required", "メールアドレスか電話番号のいずれかを入力してください。");
      }
      if (emailValue && !isEmail(emailValue)) {
        addError(errors, "email", "email_invalid", "メールアドレスの形式を確認してください。");
      }
      if (phoneValue && !isPhone(phoneValue)) {
        addError(errors, "phone", "phone_invalid", "電話番号の形式を確認してください。");
      }
    }
    if (!consent || !consent.checked) {
      addError(errors, "consent", "consent_required", "同意チェックが必要です。");
    }

    clearAllErrors();

    errors.forEach((error) => {
      if (error.id === "contact_method") {
        setRadioError(error.message);
      } else {
        setFieldError(error.id, error.message);
      }
    });

    return errors;
  }

  function setupFieldWatchers() {
    if (!form) {
      return;
    }

    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      if (input.type === "hidden" || input.classList.contains("hp-field")) {
        return;
      }
      const eventName = input.tagName === "SELECT" || input.type === "checkbox" || input.type === "radio"
        ? "change"
        : "input";
      const fieldName = getFieldTrackName(input);
      const fieldType = input.tagName === "SELECT" ? "select" : input.type || "text";

      input.addEventListener(eventName, () => {
        trackFormStartOnce(fieldName);
        trackFieldStartOnce(fieldName, fieldType);
        setStatus("", "");

        if (input.name === "contact_method") {
          trackCta("contact_method_selected", {
            form_id: "appraisal-form",
            contact_method: input.value,
          });
          setRadioError("");
          setFieldError("email", "");
          setFieldError("phone", "");
          return;
        }
        if (input.id === "email" || input.id === "phone") {
          setFieldError("email", "");
          setFieldError("phone", "");
        }
        if (input.id === "prefecture") {
          rebuildCityOptions(input.value, "");
          trackCta("prefecture_selected", {
            form_id: "appraisal-form",
            prefecture: input.value || "unselected",
          });
          setFieldError("city", "");
        }
        if (input.id === "city") {
          trackCta("city_selected", {
            form_id: "appraisal-form",
            city: input.value || "unselected",
          });
        }
        if (input.id === "property-type") {
          trackCta("property_type_selected", {
            form_id: "appraisal-form",
            property_type: input.value || "unselected",
          });
        }
        if (input.id === "sale-timing") {
          trackCta("sale_timing_selected", {
            form_id: "appraisal-form",
            sale_timing: input.value || "unselected",
          });
        }
        if (input.id && FIELD_ERROR_MAP[input.id]) {
          setFieldError(input.id, "");
        }
      });

      if (eventName === "input") {
        input.addEventListener("blur", () => {
          trackCta("form_field_blur", {
            form_id: "appraisal-form",
            field_name: fieldName,
            has_value: String(input.value || "").trim() ? "yes" : "no",
          });
        });
      }
    });
  }

  function setupFormSubmit() {
    if (!form) {
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const errors = validateForm();

      if (errors.length > 0) {
        setStatus("入力内容を確認してください。", "error");
        const firstError = errors[0];
        if (firstError.id === "contact_method") {
          const firstRadio = document.querySelector('input[name="contact_method"]');
          if (firstRadio) {
            firstRadio.focus();
          }
        } else {
          const target = document.getElementById(firstError.id);
          if (target) {
            target.focus();
          }
        }

        trackCta("form_validation_error", {
          ...buildFormContext(),
          ...summarizeValidationErrors(errors),
        });
        errors.forEach((error) => {
          trackCta("form_field_error", {
            form_id: "appraisal-form",
            field_name: error.id,
            error_code: error.code || "unknown",
          });
        });
        return;
      }

      if (!form.action || form.action.endsWith("#") || form.action.includes("your_form_id")) {
        setStatus("フォームサービスの送信先IDが未設定です。設定を確認してください。", "error");
        trackCta("form_submit_failed", { ...buildFormContext(), reason: "missing_endpoint" });
        return;
      }

      const formData = new FormData(form);
      if (String(formData.get("_gotcha") || "").trim()) {
        setStatus("送信に失敗しました。入力内容を確認してください。", "error");
        trackCta("form_submit_failed", { ...buildFormContext(), reason: "honeypot_triggered" });
        return;
      }
      formData.set("page_path", window.location.pathname);
      formData.set("cta_source", lastCtaName || "unknown");
      formData.set("submitted_at", new Date().toISOString());

      setStatus("送信中です...", "");
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
      }

      const submitStartAt = window.performance && typeof window.performance.now === "function"
        ? window.performance.now()
        : Date.now();
      const submitContext = buildFormContext();
      trackCta("form_submit_attempt", submitContext);

      try {
        const response = await fetch(form.action, {
          method: (form.method || "POST").toUpperCase(),
          headers: {
            "Accept": "application/json",
          },
          body: formData,
        });

        let responseBody = null;
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          responseBody = await response.json();
        }

        if (!response.ok || (responseBody && responseBody.ok === false)) {
          throw new Error(`submit_failed_${response.status}`);
        }

        const submitEndAt = window.performance && typeof window.performance.now === "function"
          ? window.performance.now()
          : Date.now();
        setStatus("査定依頼を受け付けました。1営業日以内にご連絡します。", "success");
        trackCta("form_submit_success", {
          ...submitContext,
          duration_ms: Math.max(0, Math.round(submitEndAt - submitStartAt)),
        });
        form.reset();
        rebuildCityOptions("", "");
        hasTrackedFormStart = false;
        trackedFieldStarts.clear();
      } catch (error) {
        const submitEndAt = window.performance && typeof window.performance.now === "function"
          ? window.performance.now()
          : Date.now();
        setStatus("送信に失敗しました。時間をおいて再度お試しください。", "error");
        trackCta("form_submit_failed", {
          ...submitContext,
          duration_ms: Math.max(0, Math.round(submitEndAt - submitStartAt)),
          reason: error instanceof Error ? error.message : "unknown_error",
        });
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute("aria-busy");
        }
      }
    });
  }

  rebuildCityOptions(prefectureNode ? prefectureNode.value : "", cityNode ? cityNode.value : "");
  setupSmoothScroll();
  setupCtaTracking();
  setupFieldWatchers();
  setupFormSubmit();
})();
