const worksData = [
  {
    day: "Day01",
    title: "BtoB SaaS 資料請求LP",
    category: "SaaS",
    industry: "IT",
    focus: "資料請求",
    summary: "課題訴求から導入効果までを短い導線で提示。比較検討中ユーザーの離脱を抑える構成。",
    metric: "導入メリットの即時理解を重視",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day001/",
  },
  {
    day: "Day02",
    title: "採用向けコーポレートLP",
    category: "Corporate",
    industry: "人材",
    focus: "採用応募",
    summary: "カルチャー訴求と募集要項を分断せずに接続し、応募までの心理負荷を軽減。",
    metric: "応募導線の視認性を強化",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day002/",
  },
  {
    day: "Day03",
    title: "単品EC 商品販売LP",
    category: "EC",
    industry: "D2C",
    focus: "購入",
    summary: "不安要素をFAQ・レビュー・保証情報で先回りし、購入判断を後押しする設計。",
    metric: "CTA手前の離脱抑制を意識",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day003/",
  },
  {
    day: "Day04",
    title: "オンラインスクール説明LP",
    category: "Education",
    industry: "教育",
    focus: "体験申込",
    summary: "学習プロセスと卒業後の変化を可視化し、体験申込の納得感を高める構成。",
    metric: "初見ユーザーの理解速度を重視",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day004/",
  },
  {
    day: "Day05",
    title: "美容体験予約LP",
    category: "Beauty",
    industry: "美容",
    focus: "来店予約",
    summary: "施術前後イメージと価格情報を同じ画面で提示し、予約判断までの迷いを削減。",
    metric: "スマホ閲覧時の予約動線を最短化",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day005/",
  },
  {
    day: "Day06",
    title: "イベント集客キャンペーンLP",
    category: "Event",
    industry: "イベント",
    focus: "参加登録",
    summary: "開催価値と参加特典を先に提示し、残席情報で行動を促すキャンペーン型LP。",
    metric: "限定性の伝達を最適化",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day006/",
  },
  {
    day: "Day07",
    title: "法人向け無料相談LP",
    category: "Corporate",
    industry: "コンサル",
    focus: "無料相談",
    summary: "相談対象を明確にし、失敗事例と改善例を並置することで問い合わせの質を向上。",
    metric: "問い合わせフォーム前の離脱低減",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day007/",
  },
  {
    day: "Day08",
    title: "食品D2C定期購入LP",
    category: "EC",
    industry: "食品",
    focus: "定期申込",
    summary: "味・安全性・継続メリットを段階的に伝え、初回申込へのハードルを下げる構成。",
    metric: "価格比較セクションの可読性向上",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day008/",
  },
  {
    day: "Day09",
    title: "SaaS 無料トライアルLP",
    category: "SaaS",
    industry: "IT",
    focus: "無料登録",
    summary: "導入前後の業務差分をビジュアル中心で示し、登録時点の不安を低減。",
    metric: "機能訴求より課題解決訴求を優先",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day009/",
  },
  {
    day: "Day10",
    title: "士業サービス紹介LP",
    category: "Corporate",
    industry: "士業",
    focus: "お問い合わせ",
    summary: "信頼形成に必要な実績・対応範囲・料金目安を整理し、相談導線を明確化。",
    metric: "信頼情報の配置順を最適化",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day010/",
  },
  {
    day: "Day11",
    title: "サブスクEC申込LP",
    category: "EC",
    industry: "D2C",
    focus: "申込",
    summary: "継続メリットを比較表で示し、単発購入と定期購入の判断をしやすく設計。",
    metric: "ファーストビューで価値提案を完結",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day011/",
  },
  {
    day: "Day12",
    title: "BtoB 見積依頼LP",
    category: "SaaS",
    industry: "業務支援",
    focus: "見積依頼",
    summary: "導入条件の整理をサポートする情報設計で、見積依頼までの判断時間を短縮。",
    metric: "検討フェーズ別のCTA配置",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day012/",
  },
  {
    day: "Day13",
    title: "英会話サービス体験LP",
    category: "Education",
    industry: "教育",
    focus: "体験申込",
    summary: "受講ステップを可視化し、初心者の不安を取り除く導線を中心に設計。",
    metric: "体験前の疑問解消を先回り",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day013/",
  },
  {
    day: "Day14",
    title: "医療系サービス相談LP",
    category: "Healthcare",
    industry: "医療",
    focus: "無料相談",
    summary: "専門性と安心感を担保する情報の順序を調整し、相談行動につなげる構成。",
    metric: "信頼訴求の一貫性を重視",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day014/",
  },
  {
    day: "Day15",
    title: "不動産査定依頼LP",
    category: "RealEstate",
    industry: "不動産",
    focus: "査定依頼",
    summary: "査定手順と入力項目の意図を明確にし、フォーム完了率向上を狙った設計。",
    metric: "フォーム途中離脱の防止を重視",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day015/",
  },
  {
    day: "Day16",
    title: "美容クリニック予約LP",
    category: "Beauty",
    industry: "美容",
    focus: "カウンセリング予約",
    summary: "比較検討層に向けて症例と料金情報を整理し、予約への納得感を強化。",
    metric: "予約前の不安解消コンテンツを最適化",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day016/",
  },
  {
    day: "Day17",
    title: "BtoBセミナー申込LP",
    category: "Event",
    industry: "イベント",
    focus: "セミナー申込",
    summary: "登壇者・内容・得られる成果を短時間で把握できる情報密度に調整。",
    metric: "申込ボタン到達率を意識",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day017/",
  },
  {
    day: "Day18",
    title: "採用広報LP",
    category: "Corporate",
    industry: "人材",
    focus: "エントリー",
    summary: "仕事理解コンテンツを深め、応募前のミスマッチ低減を狙った採用LP。",
    metric: "候補者の不安要素を先回り",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day018/",
  },
  {
    day: "Day19",
    title: "DX支援サービスLP",
    category: "SaaS",
    industry: "業務支援",
    focus: "お問い合わせ",
    summary: "導入事例と支援範囲を明確化し、課題認識フェーズでも相談しやすい構成へ。",
    metric: "事例導線の閲覧完了率を重視",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day019/",
  },
  {
    day: "Day20",
    title: "新商品ローンチLP",
    category: "EC",
    industry: "D2C",
    focus: "先行予約",
    summary: "ローンチ背景と限定特典を軸に期待値を高め、予約行動を促進する構成。",
    metric: "発売前の期待醸成を重視",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day020/",
  },
  {
    day: "Day27",
    title: "相談しやすさ重視のLP制作ポートフォリオ",
    category: "Corporate",
    industry: "LP制作",
    focus: "無料相談",
    summary:
      "実績未掲載段階でも不安を減らせるよう、進行ルールの透明性とCTA2導線で依頼判断を支える構成。",
    metric: "安心訴求ファースト + 相談/見積の2導線",
    tech: ["HTML", "CSS"],
    url: "./day027/",
  },
  {
    day: "Day67",
    title: "ホテルウェディングLP",
    category: "Wedding",
    industry: "ブライダル",
    focus: "フェア予約",
    summary:
      "ラグジュアリーな空間・料理・おもてなしの3軸でブランド訴求。ブライダルフェア予約へ自然に導く構成。",
    metric: "高級感と信頼感の両立を重視",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "./day067/current/hotel-wedding-lp/",
  },
];

const colorByCategory = {
  SaaS: "#0f7392",
  Corporate: "#1f4f89",
  EC: "#ff7a1a",
  Education: "#2c9a68",
  Beauty: "#d65c73",
  Event: "#1a8ea0",
  Healthcare: "#4f78a9",
  RealEstate: "#7d6a4f",
  Wedding: "#8b6f4e",
};

const REEL_INTERVAL_MS = 3200;

const state = {
  category: "All",
  query: "",
};

const elements = {
  reelLaneA: document.querySelector('[data-reel-id="a"]'),
  reelLaneB: document.querySelector('[data-reel-id="b"]'),
  featured: document.querySelector("#featured-cases"),
  filterRoot: document.querySelector("#category-filters"),
  search: document.querySelector("#works-search"),
  worksGrid: document.querySelector("#works-grid"),
  worksCount: document.querySelector("#works-count"),
  worksEmpty: document.querySelector("#works-empty"),
  totalWorks: document.querySelector("#total-works"),
  categoryTotal: document.querySelector("#category-total"),
  goalTotal: document.querySelector("#goal-total"),
  currentYear: document.querySelector("#current-year"),
};

const categories = ["All", ...new Set(worksData.map((work) => work.category))];

function createNode(tag, className, textContent) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (textContent !== undefined) {
    node.textContent = textContent;
  }
  return node;
}

function getThumbnailCandidates(work) {
  const dayDir = work.url.replace(/^\.\//, "").replace(/\/$/, "");
  const base = `./${dayDir}/`;
  const names = [
    `${dayDir}FV.png`,
    `${dayDir}FVPC.png`,
    `${dayDir}FVSP.png`,
    `${dayDir}PCFV.png`,
    `${dayDir}SPFV.png`,
    `${dayDir}fvpc.png`,
    `${dayDir}fvsp.png`,
    `${dayDir}fv.png`,
    `${dayDir}.png`,
    `${dayDir}PC.png`,
    `${dayDir}SP.png`,
    `${dayDir}pc.png`,
    `${dayDir}sp.png`,
    `${dayDir}.html.png`,
    `${dayDir}html.png`,
    `${dayDir}.htmlPC.png`,
    `${dayDir}.htmlSP.png`,
    `${dayDir}_index.html.png`,
    `${dayDir}README.png`,
  ];

  return Array.from(new Set(names.map((name) => `${base}${name}`)));
}

function createReelCard(work) {
  const card = createNode("a", "reel-card");
  const tone = colorByCategory[work.category] || "#0f7392";
  card.style.setProperty("--tone", tone);
  card.href = work.url;
  card.setAttribute("aria-label", `${work.day} ${work.title} の成果物を開く`);

  const visual = createNode("div", "reel-visual");

  const image = document.createElement("img");
  image.className = "reel-image";
  image.alt = `${work.day} ${work.title} のサムネイル`;
  image.loading = "eager";
  image.decoding = "async";
  image.draggable = false;
  const thumbnailCandidates = getThumbnailCandidates(work);
  let candidateIndex = 0;

  function applyFallback() {
    image.remove();
    visual.classList.add("is-fallback");
  }

  function loadNextThumbnail() {
    const nextPath = thumbnailCandidates[candidateIndex];
    candidateIndex += 1;

    if (!nextPath) {
      applyFallback();
      return;
    }

    image.src = nextPath;
  }

  image.addEventListener("error", () => {
    loadNextThumbnail();
  });

  loadNextThumbnail();

  visual.appendChild(image);
  visual.appendChild(createNode("span", "reel-chip", `${work.day} / ${work.category}`));

  const content = createNode("div", "reel-content");
  content.appendChild(createNode("p", "reel-title", work.title));
  content.appendChild(createNode("p", "reel-meta", `${work.focus} | ${work.industry}`));

  card.append(visual, content);
  return card;
}

function renderReelTrack(track, items) {
  if (!track || items.length === 0) {
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((work) => {
    fragment.appendChild(createReelCard(work));
  });
  track.replaceChildren(fragment);
}

function setupStepReel(lane, items, direction) {
  if (!lane || items.length < 2) {
    return;
  }

  const viewport = lane.querySelector(".reel-viewport");
  const track = lane.querySelector(".reel-track");
  const prevButton = lane.querySelector('[data-reel-action="prev"]');
  const nextButton = lane.querySelector('[data-reel-action="next"]');

  if (!viewport || !track) {
    return;
  }

  renderReelTrack(track, items);

  let currentIndex = 0;
  let timer = null;
  let scrollSyncTimer = null;
  let isProgrammaticScroll = false;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const prefersAutoBehavior = prefersReducedMotion ? "auto" : "smooth";

  function getCardStep() {
    const card = track.querySelector(".reel-card");
    if (!card) {
      return 0;
    }

    const trackStyle = window.getComputedStyle(track);
    const gapValue = trackStyle.columnGap || trackStyle.gap || "0";
    const gap = Number.parseFloat(gapValue) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function normalizeIndex(index) {
    const length = items.length;
    return ((index % length) + length) % length;
  }

  function scrollToIndex(index, behavior = prefersAutoBehavior) {
    const cardStep = getCardStep();
    if (cardStep === 0) {
      return;
    }

    currentIndex = normalizeIndex(index);
    isProgrammaticScroll = true;
    viewport.scrollTo({
      left: currentIndex * cardStep,
      behavior,
    });

    window.clearTimeout(scrollSyncTimer);
    scrollSyncTimer = window.setTimeout(() => {
      isProgrammaticScroll = false;
    }, 480);
  }

  function syncIndexFromScroll() {
    const cardStep = getCardStep();
    if (cardStep === 0) {
      return;
    }

    const next = Math.round(viewport.scrollLeft / cardStep);
    currentIndex = normalizeIndex(next);
  }

  function stopAuto() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function startAuto() {
    if (prefersReducedMotion) {
      return;
    }

    stopAuto();
    timer = window.setInterval(() => {
      slide(direction, false);
    }, REEL_INTERVAL_MS);
  }

  function slide(delta, fromManual) {
    if (fromManual) {
      stopAuto();
    }

    scrollToIndex(currentIndex + delta, prefersAutoBehavior);

    if (fromManual) {
      startAuto();
    }
  }

  prevButton?.addEventListener("click", () => {
    slide(-1, true);
  });

  nextButton?.addEventListener("click", () => {
    slide(1, true);
  });

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      slide(-1, true);
      return;
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      slide(1, true);
      return;
    }
  });

  viewport.tabIndex = 0;
  viewport.addEventListener("pointerdown", stopAuto);
  viewport.addEventListener("touchstart", stopAuto, { passive: true });
  viewport.addEventListener("scroll", () => {
    if (isProgrammaticScroll) {
      return;
    }

    window.clearTimeout(scrollSyncTimer);
    scrollSyncTimer = window.setTimeout(() => {
      syncIndexFromScroll();
      startAuto();
    }, 120);
  });

  lane.addEventListener("mouseenter", stopAuto);
  lane.addEventListener("mouseleave", startAuto);
  lane.addEventListener("focusin", stopAuto);
  lane.addEventListener("focusout", () => {
    const active = document.activeElement;
    if (!active || !lane.contains(active)) {
      startAuto();
    }
  });

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(() => {
      scrollToIndex(currentIndex, "auto");
    });
  });

  scrollToIndex(currentIndex, "auto");
  startAuto();
}

function setupHeroReel() {
  const laneAItems = worksData.slice(0, 12);
  const laneBItems = worksData.slice(8).reverse();

  setupStepReel(elements.reelLaneA, laneAItems, 1);
  setupStepReel(elements.reelLaneB, laneBItems, -1);
}

function getFeaturedWorks(count = 3) {
  const picked = [];
  const usedCategories = new Set();

  for (const work of worksData) {
    if (usedCategories.has(work.category)) {
      continue;
    }
    picked.push(work);
    usedCategories.add(work.category);
    if (picked.length === count) {
      break;
    }
  }

  return picked;
}

function createCaseCard(work) {
  const card = createNode("article", "case-card");

  const head = createNode("div", "case-head");
  head.appendChild(createNode("span", "case-day", work.day));
  head.appendChild(createNode("span", "case-day", work.category));

  const title = createNode("h3", "case-title", work.title);
  const summary = createNode("p", "case-summary", work.summary);

  const meta = createNode("div", "case-meta");
  meta.appendChild(createNode("p", "", `目的: ${work.focus}`));
  meta.appendChild(createNode("p", "", `業種: ${work.industry}`));
  meta.appendChild(createNode("p", "", `設計メモ: ${work.metric}`));

  const link = createNode("a", "case-link", "成果物を開く");
  link.href = work.url;
  link.setAttribute("aria-label", `${work.day} ${work.title} を開く`);

  card.append(head, title, summary, meta, link);
  return card;
}

function renderFeaturedCases() {
  if (!elements.featured) {
    return;
  }

  const featuredWorks = getFeaturedWorks(3);
  elements.featured.replaceChildren(...featuredWorks.map(createCaseCard));
}

function createFilterButton(category) {
  const button = createNode("button", "filter-btn", category);
  button.type = "button";
  button.dataset.category = category;
  button.setAttribute("aria-pressed", String(category === state.category));
  return button;
}

function renderFilters() {
  if (!elements.filterRoot) {
    return;
  }

  elements.filterRoot.replaceChildren(...categories.map(createFilterButton));
}

function getFilteredWorks() {
  const keyword = state.query.trim().toLowerCase();

  return worksData.filter((work) => {
    const matchedCategory = state.category === "All" || work.category === state.category;
    const searchTarget = [work.day, work.title, work.summary, work.category, work.industry, work.focus, ...work.tech]
      .join(" ")
      .toLowerCase();
    const matchedKeyword = keyword === "" || searchTarget.includes(keyword);
    return matchedCategory && matchedKeyword;
  });
}

function buildTechList(techItems) {
  const list = createNode("ul", "tech-list");

  techItems.forEach((tech) => {
    list.appendChild(createNode("li", "", tech));
  });

  return list;
}

function createWorkCard(work) {
  const card = createNode("article", "work-card");

  const head = createNode("div", "work-card-head");
  head.appendChild(createNode("span", "work-day", work.day));
  head.appendChild(createNode("h3", "work-title", work.title));

  const summary = createNode("p", "work-summary", work.summary);
  const detailA = createNode("p", "work-detail", `カテゴリ: ${work.category} | 業種: ${work.industry}`);
  const detailB = createNode("p", "work-detail", `目的: ${work.focus}`);

  const link = createNode("a", "work-link", "詳細を見る");
  link.href = work.url;
  link.setAttribute("aria-label", `${work.day} ${work.title} の詳細を見る`);

  card.append(head, summary, detailA, detailB, buildTechList(work.tech), link);
  return card;
}

function renderWorks() {
  if (!elements.worksGrid || !elements.worksCount || !elements.worksEmpty) {
    return;
  }

  const filtered = getFilteredWorks();
  elements.worksGrid.replaceChildren(...filtered.map(createWorkCard));
  elements.worksCount.textContent = `${filtered.length}件表示 / 全${worksData.length}件`;
  elements.worksEmpty.hidden = filtered.length > 0;
}

function updateActiveFilterButton() {
  if (!elements.filterRoot) {
    return;
  }

  const buttons = elements.filterRoot.querySelectorAll("button[data-category]");
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.category === state.category));
  });
}

function setupEvents() {
  if (elements.filterRoot) {
    elements.filterRoot.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-category]");
      if (!button) {
        return;
      }

      state.category = button.dataset.category || "All";
      updateActiveFilterButton();
      renderWorks();
    });
  }

  if (elements.search) {
    elements.search.addEventListener("input", () => {
      state.query = elements.search.value;
      renderWorks();
    });
  }
}

function updateSummary() {
  const categoryCount = new Set(worksData.map((work) => work.category)).size;
  const goalCount = new Set(worksData.map((work) => work.focus)).size;

  if (elements.totalWorks) {
    elements.totalWorks.textContent = String(worksData.length);
  }

  if (elements.categoryTotal) {
    elements.categoryTotal.textContent = String(categoryCount);
  }

  if (elements.goalTotal) {
    elements.goalTotal.textContent = String(goalCount);
  }

  if (elements.currentYear) {
    elements.currentYear.textContent = String(new Date().getFullYear());
  }
}

function init() {
  setupHeroReel();
  renderFeaturedCases();
  renderFilters();
  setupEvents();
  updateSummary();
  renderWorks();
}

init();
