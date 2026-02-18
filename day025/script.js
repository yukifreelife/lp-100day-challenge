document.documentElement.classList.add("js");

const searchParams = new URLSearchParams(window.location.search);
const isCaptureMode = searchParams.get("capture") === "1";
if (isCaptureMode) {
  document.documentElement.classList.add("capture-mode");
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

if (isCaptureMode || prefersReducedMotion) {
  document.documentElement.classList.add("axis-fallback");
}

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
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealNodes.forEach((node) => revealObserver.observe(node));
  }
}

const topbar = document.querySelector(".topbar");
const progressLine = document.querySelector(".progress-line span");
const backTop = document.querySelector(".back-top");
const footer = document.querySelector(".footer");

const updateGlobalState = () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  const isFooterVisible = footer ? footer.getBoundingClientRect().top <= window.innerHeight * 1.08 : false;
  const isEndgame = ratio >= 86 || isFooterVisible;

  document.body.classList.toggle("mode-endgame", isEndgame);

  if (progressLine) {
    progressLine.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  }

  if (topbar) {
    topbar.classList.toggle("is-scrolled", scrollTop > 20);
  }

  if (backTop) {
    backTop.classList.toggle("is-visible", scrollTop > 600);
  }
};

updateGlobalState();
window.addEventListener("scroll", updateGlobalState, { passive: true });
window.addEventListener("resize", updateGlobalState);

if (backTop) {
  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const smoothScrollButtons = document.querySelectorAll("[data-scroll-target]");
smoothScrollButtons.forEach((button) => {
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
    const y = window.scrollY;
    parallaxNodes.forEach((node) => {
      const speed = Number(node.getAttribute("data-parallax")) || 0;
      node.style.transform = `translate3d(0, ${Math.round(y * speed)}px, 0)`;
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

const axisSection = document.querySelector("[data-axis-section]");
const axisViewport = axisSection ? axisSection.querySelector(".axis-viewport") : null;
const axisRail = document.querySelector("#axis-rail");
const axisPanels = Array.from(document.querySelectorAll(".axis-panel"));
const axisProgressBar = document.querySelector("#axis-progress-bar");
const axisState = document.querySelector("#axis-state");

let axisMaxShift = 0;
let axisScrollDistance = 1;
let axisStartOffset = 0;
let axisEnabled = false;

const setActiveAxisPanel = (index) => {
  if (axisPanels.length === 0) {
    return;
  }

  const safeIndex = Math.max(0, Math.min(axisPanels.length - 1, index));
  axisPanels.forEach((panel, panelIndex) => {
    panel.classList.toggle("is-active", panelIndex === safeIndex);
  });
};

const updateAxisStateLabel = (progress) => {
  if (!axisState) {
    return;
  }

  if (progress <= 0) {
    axisState.textContent = "MODE: 縦スクロール待機 / Horizontal Ready";
    return;
  }

  if (progress >= 1) {
    axisState.textContent = "MODE: 横展開完了 / Return to Vertical";
    return;
  }

  axisState.textContent = "MODE: 縦スクロール / Horizontal Active";
};

const updateAxisScroll = () => {
  if (!axisSection || !axisRail || axisPanels.length === 0) {
    return;
  }

  if (!axisEnabled) {
    axisRail.style.transform = "translate3d(0, 0, 0)";
    if (axisProgressBar) {
      axisProgressBar.style.width = "0%";
    }
    updateAxisStateLabel(0);
    setActiveAxisPanel(0);
    document.body.classList.remove("is-axis-active");
    return;
  }

  const progressRaw = (window.scrollY - axisStartOffset) / axisScrollDistance;
  const progress = Math.min(1, Math.max(0, progressRaw));
  const shift = axisMaxShift * progress;
  axisRail.style.transform = `translate3d(${-shift}px, 0, 0)`;

  if (axisProgressBar) {
    axisProgressBar.style.width = `${progress * 100}%`;
  }

  const activeIndex = Math.min(axisPanels.length - 1, Math.round(progress * (axisPanels.length - 1)));
  setActiveAxisPanel(activeIndex);
  updateAxisStateLabel(progress);
  document.body.classList.toggle("is-axis-active", progress > 0 && progress < 1);
};

const updateAxisMetrics = () => {
  if (!axisSection || !axisViewport || !axisRail || axisPanels.length === 0) {
    return;
  }

  const isFallback = document.documentElement.classList.contains("axis-fallback");
  if (isFallback) {
    axisEnabled = false;
    axisSection.style.height = "";
    updateAxisScroll();
    return;
  }

  const viewportWidth = axisViewport.clientWidth;
  axisMaxShift = Math.max(0, axisRail.scrollWidth - viewportWidth);
  axisScrollDistance = Math.max(1, axisMaxShift + window.innerHeight * 0.55);
  axisSection.style.height = `${axisScrollDistance + window.innerHeight}px`;
  axisStartOffset = window.scrollY + axisSection.getBoundingClientRect().top;
  axisEnabled = axisMaxShift > 0;
  updateAxisScroll();
};

if (axisSection && axisRail && axisPanels.length > 0) {
  updateAxisMetrics();
  window.addEventListener("scroll", updateAxisScroll, { passive: true });
  window.addEventListener("resize", updateAxisMetrics);
  window.addEventListener("load", updateAxisMetrics);
}

const modeToggle = document.querySelector("#mode-toggle");
const body = document.body;
const modeStorageKey = "day025-mode";

const applyMode = (modeName) => {
  const isOverdrive = modeName === "overdrive";
  body.classList.toggle("mode-overdrive", isOverdrive);
  body.classList.toggle("mode-calm", !isOverdrive);

  if (modeToggle) {
    modeToggle.setAttribute("aria-pressed", String(isOverdrive));
    modeToggle.textContent = isOverdrive ? "OVERDRIVE: ON" : "OVERDRIVE: OFF";
  }
};

const initialMode = window.localStorage.getItem(modeStorageKey);
if (initialMode === "overdrive") {
  applyMode("overdrive");
} else {
  applyMode("calm");
}

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    const nextMode = body.classList.contains("mode-overdrive") ? "calm" : "overdrive";
    applyMode(nextMode);
    window.localStorage.setItem(modeStorageKey, nextMode);
  });
}

const distortTitles = Array.from(document.querySelectorAll("[data-distort]"));
const resetDistortion = () => {
  distortTitles.forEach((title) => {
    title.style.setProperty("--dt-x", "0px");
    title.style.setProperty("--dt-y", "0px");
    title.style.setProperty("--dt-skew", "0deg");
    title.style.setProperty("--dt-rot", "0deg");
    title.style.setProperty("--dt-line", "0px");
    title.style.setProperty("--dt-glow", "0");
    title.classList.remove("is-distort-active");
  });
};

if (distortTitles.length > 0) {
  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.36,
    active: false
  };

  let distortRafId = 0;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const isDistortionEnabled = () => body.classList.contains("mode-overdrive") && !prefersReducedMotion && !isCaptureMode;

  const applyTitleDistortion = () => {
    distortRafId = 0;

    if (!isDistortionEnabled()) {
      resetDistortion();
      return;
    }

    const scrollY = window.scrollY;

    distortTitles.forEach((title, index) => {
      const rect = title.getBoundingClientRect();

      if (rect.bottom < -120 || rect.top > window.innerHeight + 120) {
        title.style.setProperty("--dt-x", "0px");
        title.style.setProperty("--dt-y", "0px");
        title.style.setProperty("--dt-skew", "0deg");
        title.style.setProperty("--dt-rot", "0deg");
        title.style.setProperty("--dt-line", "0px");
        title.style.setProperty("--dt-glow", "0");
        title.classList.remove("is-distort-active");
        return;
      }

      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * 0.5;
      const px = pointer.active ? pointer.x : window.innerWidth * 0.5;
      const py = pointer.active ? pointer.y : window.innerHeight * 0.38;
      const dx = px - centerX;
      const dy = py - centerY;
      const distance = Math.hypot(dx, dy);
      const influenceRadius = Math.max(280, rect.width * 1.32);
      const pointerInfluence = clamp(1 - distance / influenceRadius, 0, 1);
      const wave = Math.sin(scrollY * 0.01 + index * 1.43 + rect.top * 0.012);
      const waveBoost = Math.abs(wave) * 0.42;
      const intensity = clamp(pointerInfluence * 0.78 + waveBoost * 0.42, 0, 1);

      const tx = clamp(dx * 0.045 * intensity, -16, 16);
      const ty = clamp(dy * 0.03 * intensity, -10, 10);
      const skew = clamp(dx * 0.016 * intensity, -5.2, 5.2);
      const rot = clamp(dx * 0.011 * intensity, -3.2, 3.2);
      const lineShift = clamp(tx * 0.92 + wave * 5.4, -14, 14);

      title.style.setProperty("--dt-x", `${tx.toFixed(2)}px`);
      title.style.setProperty("--dt-y", `${ty.toFixed(2)}px`);
      title.style.setProperty("--dt-skew", `${skew.toFixed(2)}deg`);
      title.style.setProperty("--dt-rot", `${rot.toFixed(2)}deg`);
      title.style.setProperty("--dt-line", `${lineShift.toFixed(2)}px`);
      title.style.setProperty("--dt-glow", intensity.toFixed(3));
      title.classList.toggle("is-distort-active", intensity > 0.12);
    });
  };

  const requestDistortFrame = () => {
    if (distortRafId) {
      return;
    }
    distortRafId = window.requestAnimationFrame(applyTitleDistortion);
  };

  requestDistortFrame();
  window.addEventListener("scroll", requestDistortFrame, { passive: true });
  window.addEventListener("resize", requestDistortFrame);

  if (modeToggle) {
    modeToggle.addEventListener("click", requestDistortFrame);
  }

  if (hasFinePointer) {
    window.addEventListener("pointermove", (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      requestDistortFrame();
    });

    window.addEventListener("pointerleave", () => {
      pointer.active = false;
      requestDistortFrame();
    });
  }
} else {
  resetDistortion();
}

const worldCanvas = document.querySelector("#world-canvas");
if (worldCanvas instanceof HTMLCanvasElement) {
  const ctx = worldCanvas.getContext("2d");
  if (ctx) {
    const pointer = {
      x: 0,
      y: 0,
      active: false
    };

    let particles = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let running = false;
    let lastTime = performance.now();

    const resetParticle = (particle, randomY = false) => {
      particle.x = Math.random() * width;
      particle.y = randomY ? Math.random() * height : height + Math.random() * 40;
      particle.speed = 0.8 + Math.random() * 1.8;
      particle.size = 0.45 + Math.random() * 1.35;
      particle.seed = Math.random() * Math.PI * 2;
    };

    const setupParticles = () => {
      const density = hasFinePointer ? 9000 : 13000;
      const count = Math.min(170, Math.max(50, Math.round((width * height) / density)));
      particles = new Array(count).fill(null).map(() => {
        const particle = {
          x: 0,
          y: 0,
          speed: 1,
          size: 1,
          seed: 0
        };
        resetParticle(particle, true);
        return particle;
      });
    };

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      width = worldCanvas.clientWidth;
      height = worldCanvas.clientHeight;
      worldCanvas.width = Math.max(1, Math.round(width * dpr));
      worldCanvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      setupParticles();
    };

    const drawStatic = () => {
      const overdrive = body.classList.contains("mode-overdrive");
      const endgame = body.classList.contains("mode-endgame");
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      if (endgame && overdrive) {
        gradient.addColorStop(0, "rgba(88, 255, 236, 0.56)");
        gradient.addColorStop(1, "rgba(102, 194, 255, 0.42)");
      } else if (endgame) {
        gradient.addColorStop(0, "rgba(62, 255, 228, 0.5)");
        gradient.addColorStop(1, "rgba(94, 170, 255, 0.4)");
      } else if (overdrive) {
        gradient.addColorStop(0, "rgba(255, 98, 154, 0.22)");
        gradient.addColorStop(1, "rgba(141, 159, 255, 0.18)");
      } else {
        gradient.addColorStop(0, "rgba(81, 240, 255, 0.2)");
        gradient.addColorStop(1, "rgba(101, 168, 255, 0.16)");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const lineColor = endgame
        ? "rgba(148, 248, 255, 0.62)"
        : overdrive
          ? "rgba(255, 174, 236, 0.35)"
          : "rgba(160, 220, 255, 0.3)";
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      const step = Math.max(64, Math.round(width / 8));
      for (let x = 0; x <= width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.bezierCurveTo(x + 20, height * 0.35, x - 20, height * 0.65, x, height);
        ctx.stroke();
      }
    };

    const renderFrame = (time) => {
      const overdrive = body.classList.contains("mode-overdrive");
      const endgame = body.classList.contains("mode-endgame");
      const delta = Math.min(32, Math.max(0, time - lastTime));
      lastTime = time;

      ctx.fillStyle = endgame
        ? "rgba(5, 22, 34, 0.16)"
        : overdrive
          ? "rgba(12, 6, 22, 0.15)"
          : "rgba(4, 8, 18, 0.13)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        const prevX = particle.x;
        const prevY = particle.y;

        const fieldX = particle.x * 0.004 + time * 0.00019 + particle.seed;
        const fieldY = particle.y * 0.0036 - time * 0.00014 - particle.seed * 1.2;

        let angle = Math.sin(fieldX) * 2.2 + Math.cos(fieldY) * 1.7;

        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const dist = Math.hypot(dx, dy);
          const influenceRadius = Math.min(width, height) * 0.34;
          if (dist > 0 && dist < influenceRadius) {
            const pull = (1 - dist / influenceRadius) * 0.8;
            angle += Math.atan2(dy, dx) * pull;
          }
        }

        const speed = particle.speed * (overdrive ? 1.32 : endgame ? 1.18 : 1);
        particle.x += Math.cos(angle) * speed * delta * 0.06;
        particle.y += Math.sin(angle) * speed * delta * 0.06;

        if (particle.x < -30 || particle.x > width + 30 || particle.y < -30 || particle.y > height + 30) {
          resetParticle(particle, true);
        }

        const hueBase = overdrive ? 286 : endgame ? 186 : 188;
        const hueRange = overdrive ? 92 : endgame ? 74 : 58;
        const hue = hueBase + ((Math.sin(particle.seed * 4 + time * 0.0009) + 1) / 2) * hueRange;
        const alpha = overdrive ? 0.34 : endgame ? 0.5 : 0.27;

        ctx.strokeStyle = `hsla(${hue.toFixed(0)}, 96%, 72%, ${alpha})`;
        ctx.lineWidth = particle.size;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
      }
    };

    const tick = (time) => {
      if (!running) {
        return;
      }
      renderFrame(time);
      rafId = window.requestAnimationFrame(tick);
    };

    const startCanvas = () => {
      if (running || prefersReducedMotion || isCaptureMode) {
        return;
      }
      running = true;
      lastTime = performance.now();
      rafId = window.requestAnimationFrame(tick);
    };

    const stopCanvas = () => {
      running = false;
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    resizeCanvas();

    if (prefersReducedMotion || isCaptureMode) {
      drawStatic();
    } else {
      ctx.fillStyle = "rgba(4, 8, 18, 0.32)";
      ctx.fillRect(0, 0, width, height);
      startCanvas();
    }

    if (modeToggle) {
      modeToggle.addEventListener("click", () => {
        if (prefersReducedMotion || isCaptureMode) {
          drawStatic();
        }
      });
    }

    window.addEventListener("resize", () => {
      resizeCanvas();
      if (prefersReducedMotion || isCaptureMode) {
        drawStatic();
      }
    });

    if (hasFinePointer && !prefersReducedMotion && !isCaptureMode) {
      window.addEventListener("pointermove", (event) => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        pointer.active = true;
      });

      window.addEventListener("pointerleave", () => {
        pointer.active = false;
      });
    }

    document.addEventListener("visibilitychange", () => {
      if (prefersReducedMotion || isCaptureMode) {
        return;
      }
      if (document.hidden) {
        stopCanvas();
      } else {
        startCanvas();
      }
    });
  }
}

const phaseData = [
  {
    heading: "PHASE 01 // FIRST IMPRESSION",
    copy: "最初の3秒で「読む理由」を作る。選択肢を絞り、視線と期待を固定する。",
    machine: "INIT // 余白で視線を固定し、意図を立ち上げる",
    phaseLabel: "PHASE 01"
  },
  {
    heading: "PHASE 02 // PROBLEM MOMENTUM",
    copy: "課題を時間軸で見せ、読者の記憶とページ体験を同期させる。",
    machine: "FLOW // 課題の連鎖を見せ、読み進める必然をつくる",
    phaseLabel: "PHASE 02"
  },
  {
    heading: "PHASE 03 // INTERACTIVE PROOF",
    copy: "提案は説明より反応で伝える。触れた瞬間に価値を返す。",
    machine: "REACT // 操作への即時フィードバックで納得を加速",
    phaseLabel: "PHASE 03"
  },
  {
    heading: "PHASE 04 // CONVERSION BRIDGE",
    copy: "押し切らず、ステップ分割で心理負荷を下げて送信へ導く。",
    machine: "EXEC // 小さな完了感を積み重ね、送信完了へ",
    phaseLabel: "PHASE 04"
  }
];

const phaseHeading = document.querySelector("#phase-heading");
const phaseCopy = document.querySelector("#phase-copy");
const phaseMeterBar = document.querySelector("#phase-meter-bar");
const phaseBlocks = Array.from(document.querySelectorAll(".phase-block"));
const phaseDots = Array.from(document.querySelectorAll(".phase-dot"));
const machineMode = document.querySelector("#machine-mode");
const machineText = document.querySelector("#machine-text");
const machineSubtext = document.querySelector("#machine-subtext");
const machineScope = document.querySelector("#machine-scope");
const machineTargets = Array.from(document.querySelectorAll("[data-machine-target]"));
const machineNodes = Array.from(document.querySelectorAll(".machine-node"));
const machineEventButtons = Array.from(document.querySelectorAll("[data-machine-event]"));
const machineEventStates = [
  document.querySelector("#machine-event-state-0"),
  document.querySelector("#machine-event-state-1"),
  document.querySelector("#machine-event-state-2")
];
const machineMetricNodeA = document.querySelector("#machine-metric-node-a");
const machineMetricNodeB = document.querySelector("#machine-metric-node-b");
const machineMetricNodeC = document.querySelector("#machine-metric-node-c");
const machineMetricTotalDist = document.querySelector("#machine-metric-total-dist");
let activePhase = -1;
let activeMachineNode = 0;
let activeMachineEvent = 0;

const machineNodeData = [
  { label: "NODE A" },
  { label: "NODE B" },
  { label: "NODE C" }
];

const machineGameEvents = [
  {
    name: "FOCUS TRIANGLE",
    hint: "A/Cを上段左右、Bを下段中央へ / Place A/C high, B center-low",
    targets: [
      { x: 0.2, y: 0.24 },
      { x: 0.5, y: 0.74 },
      { x: 0.8, y: 0.24 }
    ]
  },
  {
    name: "INTENT COLUMN",
    hint: "3ノードを中央縦ラインへ / Align all nodes vertically",
    targets: [
      { x: 0.5, y: 0.2 },
      { x: 0.5, y: 0.5 },
      { x: 0.5, y: 0.8 }
    ]
  },
  {
    name: "DECISION ORBIT",
    hint: "A/Bを左右下、Cを上中央へ / A/B low sides, C top center",
    targets: [
      { x: 0.26, y: 0.58 },
      { x: 0.74, y: 0.58 },
      { x: 0.5, y: 0.2 }
    ]
  }
];

const machineClearThreshold = 7;
const machineEventDistances = new Array(machineGameEvents.length).fill(Number.POSITIVE_INFINITY);
const clearedMachineEvents = new Set();

const clampMachineValue = (value, min, max) => Math.min(max, Math.max(min, value));

const readMachineNodePosition = (node, fallbackX, fallbackY) => {
  const rawX = Number(node.getAttribute("data-pos-x"));
  const rawY = Number(node.getAttribute("data-pos-y"));
  const x = Number.isFinite(rawX) ? rawX : fallbackX;
  const y = Number.isFinite(rawY) ? rawY : fallbackY;
  return {
    x: clampMachineValue(x, 0.02, 0.98),
    y: clampMachineValue(y, 0.02, 0.98)
  };
};

const machineNodePositions = machineNodes.map((node, index) => {
  const fallbackX = [0.2, 0.56, 0.78][index] ?? 0.5;
  const fallbackY = [0.32, 0.62, 0.26][index] ?? 0.5;
  return readMachineNodePosition(node, fallbackX, fallbackY);
});

const getMachineDistance = (from, to) => {
  const dx = (from.x - to.x) * 100;
  const dy = (from.y - to.y) * 100;
  return Math.hypot(dx, dy);
};

const applyMachineNodePositions = () => {
  machineNodes.forEach((node, index) => {
    const position = machineNodePositions[index];
    if (!position) {
      return;
    }
    node.style.left = `${position.x * 100}%`;
    node.style.top = `${position.y * 100}%`;
  });
};

const applyMachineTargetPositions = () => {
  const currentEvent = machineGameEvents[activeMachineEvent];
  if (!currentEvent) {
    return;
  }

  machineTargets.forEach((target, index) => {
    const targetPosition = currentEvent.targets[index];
    if (!targetPosition) {
      return;
    }
    target.style.left = `${targetPosition.x * 100}%`;
    target.style.top = `${targetPosition.y * 100}%`;
  });
};

const getMachineEventTotalDistance = (eventIndex) => {
  const event = machineGameEvents[eventIndex];
  if (!event) {
    return Number.POSITIVE_INFINITY;
  }
  return machineNodePositions.reduce((total, position, index) => {
    const target = event.targets[index];
    if (!target) {
      return total;
    }
    return total + getMachineDistance(position, target);
  }, 0);
};

const isMachineEventCleared = (eventIndex) => {
  const event = machineGameEvents[eventIndex];
  if (!event) {
    return false;
  }
  return machineNodePositions.every((position, index) => {
    const target = event.targets[index];
    if (!target) {
      return false;
    }
    return getMachineDistance(position, target) <= machineClearThreshold;
  });
};

const renderMachineEventStates = () => {
  machineEventButtons.forEach((button, index) => {
    button.classList.toggle("is-active", index === activeMachineEvent);
    button.classList.toggle("is-cleared", clearedMachineEvents.has(index));
  });

  machineEventStates.forEach((stateNode, index) => {
    if (!stateNode) {
      return;
    }
    if (clearedMachineEvents.has(index)) {
      stateNode.textContent = "LOCKED";
      return;
    }
    const distance = machineEventDistances[index];
    stateNode.textContent = Number.isFinite(distance) ? `d${distance.toFixed(1)}` : "d--";
  });
};

const evaluateMachineEvents = () => {
  const newlyCleared = [];

  machineGameEvents.forEach((_, index) => {
    const totalDistance = getMachineEventTotalDistance(index);
    machineEventDistances[index] = totalDistance;

    if (!clearedMachineEvents.has(index) && isMachineEventCleared(index)) {
      clearedMachineEvents.add(index);
      newlyCleared.push(index);
    }
  });

  renderMachineEventStates();
  return newlyCleared;
};

const renderMachineMetrics = () => {
  const activeEvent = machineGameEvents[activeMachineEvent];
  if (!activeEvent) {
    return;
  }

  const nodeDistances = machineNodePositions.map((position, index) => {
    const target = activeEvent.targets[index];
    if (!target) {
      return 0;
    }
    return getMachineDistance(position, target);
  });

  const nodeMetricNodes = [machineMetricNodeA, machineMetricNodeB, machineMetricNodeC];
  nodeMetricNodes.forEach((metricNode, index) => {
    if (!metricNode) {
      return;
    }
    const position = machineNodePositions[index];
    const dist = nodeDistances[index];
    metricNode.textContent = `x${Math.round(position.x * 100)} y${Math.round(position.y * 100)} / d${dist.toFixed(1)}`;
  });

  const totalDistance = nodeDistances.reduce((sum, value) => sum + value, 0);
  if (machineMetricTotalDist) {
    machineMetricTotalDist.textContent = `d${totalDistance.toFixed(1)}`;
  }
};

const pulseMachineScope = () => {
  if (!machineScope) {
    return;
  }
  machineScope.classList.add("is-pulse");
  window.setTimeout(() => {
    machineScope.classList.remove("is-pulse");
  }, 220);
};

const applyMachineNodeState = (messageOverride = "") => {
  const node = machineNodeData[activeMachineNode] || machineNodeData[0];
  const currentEvent = machineGameEvents[activeMachineEvent];
  const phaseLabel = phaseData[Math.max(0, activePhase)]?.phaseLabel || "PHASE 01";

  if (machineMode) {
    machineMode.textContent = `${phaseLabel} / EVENT ${String(activeMachineEvent + 1).padStart(2, "0")} / ${node.label}`;
  }
  if (machineSubtext) {
    if (messageOverride) {
      machineSubtext.textContent = messageOverride;
    } else if (currentEvent) {
      machineSubtext.textContent = `EVENT ${String(activeMachineEvent + 1).padStart(2, "0")} // ${currentEvent.hint}`;
    }
  }

  machineNodes.forEach((target, idx) => {
    target.classList.toggle("is-active", idx === activeMachineNode);
  });
};

const setMachineNode = (index, messageOverride = "") => {
  const safeIndex = Math.max(0, Math.min(machineNodeData.length - 1, index));
  activeMachineNode = safeIndex;
  applyMachineNodeState(messageOverride);
  renderMachineMetrics();
  pulseMachineScope();
};

const setMachineEvent = (eventIndex, messageOverride = "") => {
  const safeIndex = Math.max(0, Math.min(machineGameEvents.length - 1, eventIndex));
  activeMachineEvent = safeIndex;
  applyMachineTargetPositions();
  applyMachineNodeState(messageOverride);
  const newlyCleared = evaluateMachineEvents();
  renderMachineMetrics();
  announceMachineClear(newlyCleared);
  pulseMachineScope();
};

const announceMachineClear = (newlyCleared) => {
  if (newlyCleared.length === 0) {
    return;
  }

  if (clearedMachineEvents.size >= machineGameEvents.length) {
    applyMachineNodeState("ALL EVENTS LOCKED // 3配置を達成");
    return;
  }

  const currentCleared = newlyCleared.find((index) => index === activeMachineEvent);
  if (typeof currentCleared === "number") {
    const nextPending = machineGameEvents.findIndex((_, index) => !clearedMachineEvents.has(index));
    if (nextPending >= 0 && nextPending !== activeMachineEvent) {
      setMachineEvent(
        nextPending,
        `EVENT ${String(currentCleared + 1).padStart(2, "0")} LOCKED // 次のイベントへ`
      );
      return;
    }
    applyMachineNodeState(`EVENT ${String(currentCleared + 1).padStart(2, "0")} LOCKED // 他イベントも挑戦`);
  }
};

const getPhaseReferenceY = () => {
  const headerOffset = topbar ? topbar.getBoundingClientRect().height : 0;
  return window.innerHeight * 0.42 + headerOffset * 0.2;
};

const scrollToPhaseIndex = (index) => {
  const safeIndex = Math.max(0, Math.min(phaseBlocks.length - 1, index));
  const targetBlock = phaseBlocks[safeIndex];
  if (!targetBlock) {
    return;
  }

  const rect = targetBlock.getBoundingClientRect();
  const centerY = rect.top + rect.height * 0.5;
  const referenceY = getPhaseReferenceY();
  const delta = centerY - referenceY;
  const targetTop = window.scrollY + delta;

  window.scrollTo({ top: targetTop, behavior: "smooth" });
};

const setActivePhase = (index) => {
  if (phaseData.length === 0) {
    return;
  }

  const safeIndex = Math.max(0, Math.min(phaseData.length - 1, index));
  if (safeIndex === activePhase) {
    return;
  }

  activePhase = safeIndex;
  const selected = phaseData[safeIndex];

  if (phaseHeading) {
    phaseHeading.textContent = selected.heading;
  }
  if (phaseCopy) {
    phaseCopy.textContent = selected.copy;
  }
  if (phaseMeterBar) {
    const progress = ((safeIndex + 1) / phaseData.length) * 100;
    phaseMeterBar.style.width = `${progress}%`;
  }
  if (machineText) {
    machineText.textContent = selected.machine;
  }
  applyMachineNodeState();

  phaseBlocks.forEach((block) => {
    const blockIndex = Number(block.getAttribute("data-phase"));
    block.classList.toggle("is-active", blockIndex === safeIndex);
  });

  phaseDots.forEach((dot) => {
    const dotIndex = Number(dot.getAttribute("data-phase-jump"));
    dot.classList.toggle("is-active", dotIndex === safeIndex);
  });

};

if (phaseBlocks.length > 0) {
  setActivePhase(0);
  let phaseRafId = 0;

  const updatePhaseByViewport = () => {
    phaseRafId = 0;
    if (phaseBlocks.length === 0) {
      return;
    }

    const referenceY = getPhaseReferenceY();

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    phaseBlocks.forEach((block, index) => {
      const rect = block.getBoundingClientRect();
      const centerY = rect.top + rect.height * 0.5;
      const distance = Math.abs(centerY - referenceY);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActivePhase(nearestIndex);
  };

  const requestPhaseUpdate = () => {
    if (phaseRafId) {
      return;
    }
    phaseRafId = window.requestAnimationFrame(updatePhaseByViewport);
  };

  requestPhaseUpdate();
  window.addEventListener("scroll", requestPhaseUpdate, { passive: true });
  window.addEventListener("resize", requestPhaseUpdate);
}

if (phaseBlocks.length > 0) {
  const setPhaseDetailOpenState = (targetBlock) => {
    phaseBlocks.forEach((block) => {
      const detail = block.querySelector(".phase-detail");
      const toggle = block.querySelector(".phase-toggle");
      const shouldOpen = block === targetBlock && !block.classList.contains("is-expanded");

      block.classList.toggle("is-expanded", shouldOpen);
      if (detail instanceof HTMLElement) {
        detail.hidden = !shouldOpen;
      }
      if (toggle instanceof HTMLButtonElement) {
        toggle.setAttribute("aria-expanded", String(shouldOpen));
        toggle.textContent = shouldOpen ? "詳細を閉じる / Close" : "要点を開く / Expand";
      }
    });
  };

  phaseBlocks.forEach((block) => {
    const detail = block.querySelector(".phase-detail");
    const toggle = block.querySelector(".phase-toggle");
    if (detail instanceof HTMLElement) {
      detail.hidden = true;
    }
    if (toggle instanceof HTMLButtonElement) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.addEventListener("click", () => setPhaseDetailOpenState(block));
    }
  });
}

phaseDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const targetIndex = Number(dot.getAttribute("data-phase-jump"));
    if (Number.isNaN(targetIndex)) {
      return;
    }

    scrollToPhaseIndex(targetIndex);
    setActivePhase(targetIndex);
  });
});

if (machineNodes.length > 0 && machineScope instanceof HTMLElement) {
  applyMachineNodePositions();
  applyMachineTargetPositions();
  evaluateMachineEvents();
  applyMachineNodeState();
  renderMachineMetrics();

  machineEventButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const eventIndex = Number(button.getAttribute("data-machine-event"));
      if (Number.isNaN(eventIndex)) {
        return;
      }
      setMachineEvent(eventIndex, `EVENT ${String(eventIndex + 1).padStart(2, "0")} TRACKING / 配置中`);
    });
  });

  let suppressNodeClickUntil = 0;
  machineNodes.forEach((node) => {
    node.addEventListener("click", () => {
      if (Date.now() < suppressNodeClickUntil) {
        return;
      }
      const nodeIndex = Number(node.getAttribute("data-machine-node"));
      if (Number.isNaN(nodeIndex)) {
        return;
      }
      const nodeLabel = machineNodeData[nodeIndex]?.label || "NODE";
      setMachineNode(nodeIndex, `${nodeLabel} // ACTIVE / 操作中`);
    });
  });

  let dragging = null;

  machineNodes.forEach((node) => {
    node.addEventListener("pointerdown", (event) => {
      const nodeIndex = Number(node.getAttribute("data-machine-node"));
      if (Number.isNaN(nodeIndex)) {
        return;
      }

      dragging = {
        pointerId: event.pointerId,
        node,
        nodeIndex,
        moved: false
      };

      node.classList.add("is-dragging");
      node.setPointerCapture(event.pointerId);
      setMachineNode(nodeIndex, `${machineNodeData[nodeIndex]?.label || "NODE"} // DRAG START / ドラッグ開始`);
    });

    node.addEventListener("pointermove", (event) => {
      if (!dragging || dragging.node !== node || dragging.pointerId !== event.pointerId) {
        return;
      }

      const scopeRect = machineScope.getBoundingClientRect();
      const nextX = clampMachineValue((event.clientX - scopeRect.left) / scopeRect.width, 0.03, 0.97);
      const nextY = clampMachineValue((event.clientY - scopeRect.top) / scopeRect.height, 0.03, 0.97);

      machineNodePositions[dragging.nodeIndex] = { x: nextX, y: nextY };
      applyMachineNodePositions();

      const newlyCleared = evaluateMachineEvents();
      renderMachineMetrics();
      announceMachineClear(newlyCleared);
      dragging.moved = true;
    });

    const finishDrag = (event) => {
      if (!dragging || dragging.node !== node || dragging.pointerId !== event.pointerId) {
        return;
      }

      if (node.hasPointerCapture(event.pointerId)) {
        node.releasePointerCapture(event.pointerId);
      }

      node.classList.remove("is-dragging");
      if (dragging.moved) {
        suppressNodeClickUntil = Date.now() + 180;
        const nodeLabel = machineNodeData[dragging.nodeIndex]?.label || "NODE";
        applyMachineNodeState(`${nodeLabel} // DRAG UPDATE / 位置を更新`);
        pulseMachineScope();
      }

      dragging = null;
    };

    node.addEventListener("pointerup", finishDrag);
    node.addEventListener("pointercancel", finishDrag);
  });
}

const orbitData = [
  {
    label: "CV PRIORITY",
    copy: "入力障壁を減らし、送信完了率の最大化に集中。"
  },
  {
    label: "STAY PRIORITY",
    copy: "リズム設計と視線誘導で、滞在時間と読了率を引き上げる。"
  },
  {
    label: "TRUST PRIORITY",
    copy: "理解の順序を設計し、押し売り感なく信頼を形成。"
  },
  {
    label: "SHARE PRIORITY",
    copy: "記憶に残る体験を設計し、共有したくなる理由を作る。"
  }
];

const orbitLabel = document.querySelector("#orbit-core-label");
const orbitCopy = document.querySelector("#orbit-core-copy");
const orbitNodes = Array.from(document.querySelectorAll(".orbit-node"));

const setOrbitState = (index) => {
  const safeIndex = Math.max(0, Math.min(orbitData.length - 1, index));
  const selected = orbitData[safeIndex];

  if (orbitLabel) {
    orbitLabel.textContent = selected.label;
  }
  if (orbitCopy) {
    orbitCopy.textContent = selected.copy;
  }

  orbitNodes.forEach((node) => {
    const nodeIndex = Number(node.getAttribute("data-orbit"));
    node.classList.toggle("is-active", nodeIndex === safeIndex);
  });
};

orbitNodes.forEach((node) => {
  node.addEventListener("click", () => {
    const index = Number(node.getAttribute("data-orbit"));
    if (Number.isNaN(index)) {
      return;
    }

    setOrbitState(index);
  });
});

setOrbitState(0);

const tiltCards = document.querySelectorAll("[data-tilt]");
if (tiltCards.length > 0 && hasFinePointer && !prefersReducedMotion && !isCaptureMode) {
  const resetTilt = () => {
    tiltCards.forEach((card) => {
      card.style.transform = "perspective(920px) rotateX(0deg) rotateY(0deg)";
    });
  };

  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (!body.classList.contains("mode-overdrive")) {
        card.style.transform = "perspective(920px) rotateX(0deg) rotateY(0deg)";
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 11;
      const rotateX = (0.5 - y) * 11;
      card.style.transform = `perspective(920px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "perspective(920px) rotateX(0deg) rotateY(0deg)";
    });
  });

  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      if (!body.classList.contains("mode-overdrive")) {
        resetTilt();
      }
    });
  }
}

const magneticTargets = Array.from(document.querySelectorAll("[data-magnetic]"));
if (magneticTargets.length > 0 && hasFinePointer && !prefersReducedMotion && !isCaptureMode) {
  magneticTargets.forEach((target) => {
    target.addEventListener("pointermove", (event) => {
      if (!body.classList.contains("mode-overdrive")) {
        target.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const rect = target.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);
      const moveX = offsetX * 0.18;
      const moveY = offsetY * 0.18;
      target.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;
    });

    target.addEventListener("pointerleave", () => {
      target.style.transform = "translate3d(0, 0, 0)";
    });
  });

  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      if (!body.classList.contains("mode-overdrive")) {
        magneticTargets.forEach((target) => {
          target.style.transform = "translate3d(0, 0, 0)";
        });
      }
    });
  }
}

const cardNodes = Array.from(document.querySelectorAll(".react-card"));
if (cardNodes.length > 0) {
  const setCardOpenState = (targetCard) => {
    cardNodes.forEach((card) => {
      const detail = card.querySelector(".card-detail");
      const toggle = card.querySelector(".card-toggle");
      const isOpen = card === targetCard && !card.classList.contains("is-open");

      card.classList.toggle("is-open", isOpen);
      if (detail instanceof HTMLElement) {
        detail.hidden = !isOpen;
      }
      if (toggle instanceof HTMLButtonElement) {
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.textContent = isOpen ? "詳細を閉じる / Close" : "詳細を見る / Details";
      }
    });
  };

  cardNodes.forEach((card) => {
    const detail = card.querySelector(".card-detail");
    const toggle = card.querySelector(".card-toggle");
    if (detail instanceof HTMLElement) {
      detail.hidden = true;
    }
    if (toggle instanceof HTMLButtonElement) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.addEventListener("click", () => setCardOpenState(card));
    }
  });
}

const compareStage = document.querySelector("#compare-stage");
const compareRange = document.querySelector("#compare-range");
const compareAltLayer = document.querySelector("#compare-alt-layer");
const compareDivider = document.querySelector("#compare-divider");

if (
  compareStage instanceof HTMLElement &&
  compareRange instanceof HTMLInputElement &&
  compareAltLayer instanceof HTMLElement &&
  compareDivider instanceof HTMLElement
) {
  let isCompareDragging = false;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const setCompareSplit = (value) => {
    const numericValue = clamp(Number(value) || 0, 0, 100);
    const split = `${numericValue}%`;
    compareStage.style.setProperty("--compare-split", split);
    compareAltLayer.style.clipPath = `inset(0 0 0 ${split})`;
    compareDivider.style.left = split;
    compareRange.value = String(Math.round(numericValue));
  };

  const setCompareByPointer = (clientX) => {
    const rect = compareStage.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setCompareSplit(raw);
  };

  setCompareSplit(compareRange.value);

  compareRange.addEventListener("input", () => {
    setCompareSplit(compareRange.value);
  });

  if (!prefersReducedMotion && !isCaptureMode) {
    compareStage.addEventListener("pointerdown", (event) => {
      isCompareDragging = true;
      compareStage.setPointerCapture(event.pointerId);
      setCompareByPointer(event.clientX);
    });

    compareStage.addEventListener("pointermove", (event) => {
      if (!isCompareDragging) {
        return;
      }
      setCompareByPointer(event.clientX);
    });

    compareStage.addEventListener("pointerup", (event) => {
      isCompareDragging = false;
      compareStage.releasePointerCapture(event.pointerId);
    });

    compareStage.addEventListener("pointercancel", () => {
      isCompareDragging = false;
    });
  }
}

const chapterSections = Array.from(document.querySelectorAll("[data-chapter]"));
const chapterTitleNode = document.querySelector("#reading-hud-title");
const chapterProgressNode = document.querySelector("#reading-hud-progress-bar");
const jumpLinks = Array.from(document.querySelectorAll(".jump-nav a"));

const updateReadingHud = () => {
  if (chapterSections.length === 0 || !chapterTitleNode || !chapterProgressNode) {
    return;
  }

  const viewportCenter = window.innerHeight * 0.48;
  let bestSection = chapterSections[0];
  let bestScore = Number.POSITIVE_INFINITY;

  chapterSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const center = rect.top + rect.height * 0.5;
    const score = Math.abs(center - viewportCenter);
    if (score < bestScore) {
      bestScore = score;
      bestSection = section;
    }
  });

  const chapterName = bestSection.getAttribute("data-chapter") || "";
  chapterTitleNode.textContent = chapterName;

  const bestRect = bestSection.getBoundingClientRect();
  const sectionRange = Math.max(1, bestRect.height - window.innerHeight * 0.42);
  const sectionProgressRaw = (window.innerHeight * 0.42 - bestRect.top) / sectionRange;
  const sectionProgress = Math.min(1, Math.max(0, sectionProgressRaw));
  chapterProgressNode.style.width = `${sectionProgress * 100}%`;

  jumpLinks.forEach((link) => {
    const targetId = link.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) {
      return;
    }
    link.classList.toggle("is-active", `#${bestSection.id}` === targetId);
  });
};

if (chapterSections.length > 0) {
  updateReadingHud();
  window.addEventListener("scroll", updateReadingHud, { passive: true });
  window.addEventListener("resize", updateReadingHud);
}

const consoleForm = document.querySelector("#console-form");
const consolePanes = Array.from(document.querySelectorAll(".console-pane"));
const consoleStep = document.querySelector("#console-step");
const consoleProgress = document.querySelector("#console-progress-bar");
const consoleStatus = document.querySelector("#console-status");
const summaryKpi = document.querySelector("#summary-kpi");
const summaryMotion = document.querySelector("#summary-motion");
const chips = Array.from(document.querySelectorAll(".chip"));

const state = {
  kpi: "",
  motion: ""
};

let paneIndex = 0;

const clearStatus = () => {
  if (!consoleStatus) {
    return;
  }

  consoleStatus.textContent = "";
  consoleStatus.classList.remove("is-error", "is-success");
};

const setStatus = (message, type) => {
  if (!consoleStatus) {
    return;
  }

  consoleStatus.textContent = message;
  consoleStatus.classList.remove("is-error", "is-success");
  if (type === "error") {
    consoleStatus.classList.add("is-error");
  }
  if (type === "success") {
    consoleStatus.classList.add("is-success");
  }
};

const updateSummary = () => {
  if (summaryKpi) {
    summaryKpi.textContent = `KPI: ${state.kpi || "未選択 / Not selected"}`;
  }

  if (summaryMotion) {
    summaryMotion.textContent = `演出強度: ${state.motion || "未選択 / Not selected"}`;
  }
};

const updatePane = () => {
  consolePanes.forEach((pane, index) => {
    pane.classList.toggle("is-active", index === paneIndex);
  });

  if (consoleStep) {
    consoleStep.textContent = `STEP ${paneIndex + 1} / ${consolePanes.length}`;
  }

  if (consoleProgress) {
    const progress = ((paneIndex + 1) / consolePanes.length) * 100;
    consoleProgress.style.width = `${progress}%`;
  }
};

const validatePane = () => {
  if (paneIndex === 0 && !state.kpi) {
    setStatus("最優先KPIを選択してください。 / Please select a KPI.", "error");
    return false;
  }

  if (paneIndex === 1 && !state.motion) {
    setStatus("演出強度を選択してください。 / Please select a motion level.", "error");
    return false;
  }

  clearStatus();
  return true;
};

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const field = chip.getAttribute("data-field");
    const value = chip.getAttribute("data-value");

    if (!field || !value) {
      return;
    }

    state[field] = value;

    chips.forEach((target) => {
      const targetField = target.getAttribute("data-field");
      if (targetField === field) {
        target.classList.toggle("is-selected", target === chip);
      }
    });

    updateSummary();
    clearStatus();
  });
});

document.querySelectorAll(".pane-next").forEach((button) => {
  button.addEventListener("click", () => {
    if (!validatePane()) {
      return;
    }

    paneIndex = Math.min(consolePanes.length - 1, paneIndex + 1);
    updatePane();
  });
});

document.querySelectorAll(".pane-prev").forEach((button) => {
  button.addEventListener("click", () => {
    paneIndex = Math.max(0, paneIndex - 1);
    clearStatus();
    updatePane();
  });
});

if (consoleForm) {
  consoleForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!state.kpi || !state.motion) {
      setStatus("未回答の項目があります。 / Some required selections are missing.", "error");
      paneIndex = !state.kpi ? 0 : 1;
      updatePane();
      return;
    }

    if (!consoleForm.checkValidity()) {
      consoleForm.reportValidity();
      setStatus("入力内容を確認してください。 / Please check your input.", "error");
      return;
    }

    const submitButton = consoleForm.querySelector(".submit-btn");
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "送信中... / Sending...";
    }

    window.setTimeout(() => {
      setStatus("送信完了。24時間以内にご連絡します。 / Sent successfully. We will reply within 24 hours.", "success");
      consoleForm.reset();
      state.kpi = "";
      state.motion = "";
      chips.forEach((chip) => chip.classList.remove("is-selected"));
      updateSummary();
      paneIndex = 0;
      updatePane();

      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = "無料ブリーフを受け取る / Get Free Brief";
      }
    }, 680);
  });
}

updateSummary();
updatePane();

if (hasFinePointer && !prefersReducedMotion && !isCaptureMode) {
  let trailCooldown = 0;

  window.addEventListener("pointermove", (event) => {
    if (!body.classList.contains("mode-overdrive")) {
      return;
    }

    trailCooldown += 1;
    if (trailCooldown % 6 !== 0) {
      return;
    }

    const spark = document.createElement("span");
    spark.className = "pointer-spark";
    spark.style.left = `${event.clientX}px`;
    spark.style.top = `${event.clientY}px`;
    document.body.appendChild(spark);

    window.setTimeout(() => {
      spark.remove();
    }, 520);
  });
}
