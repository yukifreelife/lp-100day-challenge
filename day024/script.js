document.documentElement.classList.add("js");

const isCaptureMode = new URLSearchParams(window.location.search).get("capture") === "1";
if (isCaptureMode) {
  document.documentElement.classList.add("capture-mode");
}

const revealNodes = document.querySelectorAll("[data-reveal]");

if (revealNodes.length > 0) {
  if (isCaptureMode) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealNodes.forEach((node) => observer.observe(node));
  }
}

const header = document.querySelector(".site-header");
const progressBar = document.querySelector(".scroll-progress span");
const backToTopButton = document.querySelector(".back-to-top");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (header) {
  const updateHeaderState = () => {
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
      return;
    }
    header.classList.remove("is-scrolled");
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}

if (menuToggle && siteNav) {
  const setNavState = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    siteNav.classList.toggle("is-open", isOpen);
  };

  setNavState(false);

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setNavState(!isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavState(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setNavState(false);
    }
  });
}

if (progressBar) {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;

    if (backToTopButton) {
      backToTopButton.classList.toggle("is-visible", scrollTop > 520);
    }
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const faqItems = document.querySelectorAll(".faq-list details");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    faqItems.forEach((other) => {
      if (other !== item) {
        other.open = false;
      }
    });
  });
});

const chipButtons = document.querySelectorAll(".chip-button");

chipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-chip-target");
    const chipValue = button.getAttribute("data-chip-value");
    if (!targetId || !chipValue) {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target || !(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {
      return;
    }

    if (target.value.includes(chipValue)) {
      button.classList.remove("is-active");
      return;
    }

    if (target.value.trim().length === 0) {
      target.value = chipValue;
    } else if (target instanceof HTMLInputElement) {
      target.value = `${target.value} / ${chipValue}`;
    } else {
      target.value = `${target.value}\n・${chipValue}`;
    }

    target.dispatchEvent(new Event("input", { bubbles: true }));
    button.classList.add("is-active");
  });
});

const reservationForm = document.querySelector(".reservation-form");
const statusNode = reservationForm ? reservationForm.querySelector(".form-status") : null;

if (reservationForm && statusNode) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    statusNode.classList.remove("is-error", "is-success");
    if (!reservationForm.checkValidity()) {
      reservationForm.reportValidity();
      statusNode.textContent = "入力内容をご確認ください。";
      statusNode.classList.add("is-error");
      return;
    }

    const submitButton = reservationForm.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "送信中...";
    }

    window.setTimeout(() => {
      reservationForm.reset();
      statusNode.textContent = "送信ありがとうございました。24時間以内を目安にご連絡します。";
      statusNode.classList.add("is-success");

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "無料カウンセリングを予約する";
      }
    }, 650);
  });
}
