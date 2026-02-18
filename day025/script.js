document.documentElement.classList.add("js");

const searchParams = new URLSearchParams(window.location.search);
const isCaptureMode = searchParams.get("capture") === "1";
if (isCaptureMode) {
  document.documentElement.classList.add("capture-mode");
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealNodes = document.querySelectorAll("[data-reveal]");
if (revealNodes.length > 0) {
  if (isCaptureMode || prefersReducedMotion) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealNodes.forEach((node) => observer.observe(node));
  }
}

const header = document.querySelector(".site-header");
const progressBar = document.querySelector(".progress-line span");
const backTopButton = document.querySelector(".back-top");

const updateGlobalScrollState = () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  }

  if (header) {
    header.classList.toggle("is-scrolled", scrollTop > 24);
  }

  if (backTopButton) {
    backTopButton.classList.toggle("is-visible", scrollTop > 560);
  }
};

updateGlobalScrollState();
window.addEventListener("scroll", updateGlobalScrollState, { passive: true });
window.addEventListener("resize", updateGlobalScrollState);

if (backTopButton) {
  backTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
if (menuToggle && siteNav) {
  const setNavState = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    siteNav.classList.toggle("is-open", isOpen);
  };

  setNavState(false);

  menuToggle.addEventListener("click", () => {
    const currentState = menuToggle.getAttribute("aria-expanded") === "true";
    setNavState(!currentState);
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

const smoothButtons = document.querySelectorAll("[data-scroll-target]");
smoothButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selector = button.getAttribute("data-scroll-target");
    if (!selector) {
      return;
    }

    const target = document.querySelector(selector);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const parallaxNodes = Array.from(document.querySelectorAll("[data-parallax]"));
if (parallaxNodes.length > 0 && !prefersReducedMotion && !isCaptureMode) {
  let ticking = false;

  const applyParallax = () => {
    const scrollY = window.scrollY;
    parallaxNodes.forEach((node) => {
      const speed = Number(node.getAttribute("data-parallax")) || 0;
      node.style.transform = `translate3d(0, ${Math.round(scrollY * speed)}px, 0)`;
    });
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(applyParallax);
  };

  applyParallax();
  window.addEventListener("scroll", onScroll, { passive: true });
}

const cursorGlow = document.querySelector(".cursor-glow");
const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
if (cursorGlow && canUseFinePointer && !prefersReducedMotion && !isCaptureMode) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
} else if (cursorGlow) {
  cursorGlow.style.display = "none";
}

const sceneCopyByIndex = [
  "Opening: 緊張を生む静けさから、CTAに向けて熱量を上げる。",
  "Story: 課題の流れを時系列で見せ、読み飛ばしを防ぐ。",
  "Proof: 反応するUIで提案価値を実感させる。",
  "Action: 入力障壁を分割し、最後のクリックを軽くする。"
];

const sceneChips = Array.from(document.querySelectorAll(".scene-chip"));
const stageScreen = document.querySelector("#stage-screen");
const stageCopy = document.querySelector("#stage-copy");

const setScene = (index) => {
  if (!stageScreen || !stageCopy) {
    return;
  }

  const safeIndex = Math.max(0, Math.min(sceneCopyByIndex.length - 1, index));
  stageCopy.textContent = sceneCopyByIndex[safeIndex];
  stageScreen.className = `stage-screen scene-${safeIndex}`;

  sceneChips.forEach((chip) => {
    const chipIndex = Number(chip.getAttribute("data-scene"));
    chip.classList.toggle("is-active", chipIndex === safeIndex);
  });
};

sceneChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const index = Number(chip.getAttribute("data-scene"));
    setScene(index);
  });
});

const storySection = document.querySelector(".story");
const storySteps = Array.from(document.querySelectorAll(".story-step"));
const storyPanels = Array.from(document.querySelectorAll(".story-panel"));
const storyProgressBar = document.querySelector(".story-progress span");
let activeStoryStep = 0;

const setStoryStep = (index) => {
  if (storySteps.length === 0 || storyPanels.length === 0) {
    return;
  }

  const safeIndex = Math.max(0, Math.min(storyPanels.length - 1, index));
  if (safeIndex === activeStoryStep) {
    return;
  }

  activeStoryStep = safeIndex;

  storySteps.forEach((stepButton) => {
    const step = Number(stepButton.getAttribute("data-step"));
    stepButton.classList.toggle("is-active", step === safeIndex);
  });

  storyPanels.forEach((panel) => {
    const panelIndex = Number(panel.getAttribute("data-panel"));
    panel.classList.toggle("is-active", panelIndex === safeIndex);
  });

  if (storyProgressBar) {
    const progress = ((safeIndex + 1) / storyPanels.length) * 100;
    storyProgressBar.style.width = `${progress}%`;
  }

  setScene(safeIndex);
};

storySteps.forEach((stepButton) => {
  stepButton.addEventListener("click", () => {
    const step = Number(stepButton.getAttribute("data-step"));
    setStoryStep(step);
  });
});

const updateStoryByScroll = () => {
  if (!storySection || storyPanels.length === 0 || prefersReducedMotion || isCaptureMode) {
    return;
  }

  const rect = storySection.getBoundingClientRect();
  const sectionStart = window.innerHeight * 0.16;
  const sectionRange = rect.height + window.innerHeight * 0.34;
  const progress = (sectionStart - rect.top) / sectionRange;
  const normalized = Math.min(0.999, Math.max(0, progress));
  const nextIndex = Math.floor(normalized * storyPanels.length);
  setStoryStep(nextIndex);
};

updateStoryByScroll();
window.addEventListener("scroll", updateStoryByScroll, { passive: true });
window.addEventListener("resize", updateStoryByScroll);

const tiltCards = document.querySelectorAll("[data-tilt]");
if (tiltCards.length > 0 && canUseFinePointer && !prefersReducedMotion && !isCaptureMode) {
  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width;
      const offsetY = (event.clientY - rect.top) / rect.height;
      const rotateY = (offsetX - 0.5) * 10;
      const rotateX = (0.5 - offsetY) * 10;
      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

const wizardForm = document.querySelector("#wizard-form");
const wizardPanes = Array.from(document.querySelectorAll(".wizard-pane"));
const wizardCount = document.querySelector("#wizard-count");
const wizardProgressBar = document.querySelector("#wizard-progress-bar");
const wizardStatus = document.querySelector("#wizard-status");

const summaryGoal = document.querySelector("#summary-goal");
const summaryMotion = document.querySelector("#summary-motion");

let wizardStep = 0;
const wizardState = {
  goal: "",
  motion: ""
};

const updateSummary = () => {
  if (summaryGoal) {
    summaryGoal.textContent = `優先成果: ${wizardState.goal || "未選択"}`;
  }

  if (summaryMotion) {
    summaryMotion.textContent = `演出強度: ${wizardState.motion || "未選択"}`;
  }
};

const clearStatus = () => {
  if (!wizardStatus) {
    return;
  }

  wizardStatus.textContent = "";
  wizardStatus.classList.remove("is-error", "is-success");
};

const setStatus = (message, type) => {
  if (!wizardStatus) {
    return;
  }

  wizardStatus.textContent = message;
  wizardStatus.classList.remove("is-error", "is-success");
  if (type === "error") {
    wizardStatus.classList.add("is-error");
  }
  if (type === "success") {
    wizardStatus.classList.add("is-success");
  }
};

const updateWizardView = () => {
  wizardPanes.forEach((pane, index) => {
    pane.classList.toggle("is-active", index === wizardStep);
  });

  if (wizardCount) {
    wizardCount.textContent = `STEP ${wizardStep + 1} / ${wizardPanes.length}`;
  }

  if (wizardProgressBar) {
    const progress = ((wizardStep + 1) / wizardPanes.length) * 100;
    wizardProgressBar.style.width = `${progress}%`;
  }
};

const validateWizardStep = () => {
  if (wizardStep === 0 && !wizardState.goal) {
    setStatus("優先成果を1つ選択してください。", "error");
    return false;
  }

  if (wizardStep === 1 && !wizardState.motion) {
    setStatus("演出強度を1つ選択してください。", "error");
    return false;
  }

  clearStatus();
  return true;
};

const choiceButtons = Array.from(document.querySelectorAll(".choice"));
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const field = button.getAttribute("data-field");
    const value = button.getAttribute("data-value");
    if (!field || !value) {
      return;
    }

    wizardState[field] = value;

    choiceButtons.forEach((target) => {
      const targetField = target.getAttribute("data-field");
      if (targetField === field) {
        target.classList.toggle("is-selected", target === button);
      }
    });

    updateSummary();
    clearStatus();
  });
});

document.querySelectorAll(".pane-next").forEach((button) => {
  button.addEventListener("click", () => {
    if (!validateWizardStep()) {
      return;
    }

    wizardStep = Math.min(wizardPanes.length - 1, wizardStep + 1);
    updateWizardView();
  });
});

document.querySelectorAll(".pane-prev").forEach((button) => {
  button.addEventListener("click", () => {
    wizardStep = Math.max(0, wizardStep - 1);
    clearStatus();
    updateWizardView();
  });
});

if (wizardForm) {
  wizardForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!wizardState.goal || !wizardState.motion) {
      setStatus("未回答のステップがあります。回答を確認してください。", "error");
      wizardStep = !wizardState.goal ? 0 : 1;
      updateWizardView();
      return;
    }

    if (!wizardForm.checkValidity()) {
      wizardForm.reportValidity();
      setStatus("入力内容を確認してください。", "error");
      return;
    }

    const submitButton = wizardForm.querySelector(".submit-btn");
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "送信中...";
    }

    window.setTimeout(() => {
      setStatus("送信完了しました。24時間以内にご連絡します。", "success");
      wizardForm.reset();
      wizardState.goal = "";
      wizardState.motion = "";
      choiceButtons.forEach((button) => button.classList.remove("is-selected"));
      updateSummary();
      wizardStep = 0;
      updateWizardView();

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = "無料提案を受け取る";
      }
    }, 650);
  });
}

updateSummary();
updateWizardView();
setScene(0);
setStoryStep(0);
