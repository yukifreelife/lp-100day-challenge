const CONTACT_EMAIL = "yuki.freelife@gmail.com";
const WORK_IMAGE_WIDTH = 850;
const WORK_IMAGE_HEIGHT = 920;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMIT_LOADING_MS = 600;

const works = [
  {
    day: "Day093",
    title: "NemuNote",
    category: "睡眠改善アプリLP",
    summary: "睡眠記録アプリの無料利用開始へつなげる、白基調のウェルネスLP。",
    image: "assets/works/day093.png"
  },
  {
    day: "Day094",
    title: "SONAE BOX",
    category: "防災備蓄サブスクLP",
    summary: "診断、定期配送、期限管理を整理し、防災備蓄を続けやすく見せるLP。",
    image: "assets/works/day094.png"
  },
  {
    day: "Day095",
    title: "StockOps Atelier",
    category: "小規模ECの在庫オペレーションLP",
    summary: "ひとり運営・小規模ECの在庫、価格、SKU、チャネル同期を見える状態に整えるLP。",
    image: "assets/works/day095.png"
  },
  {
    day: "Day096",
    title: "YADO Review Lab",
    category: "民泊予約ページ改善LP",
    summary: "写真、案内文、チェックイン導線、レビュー改善を一体で伝えるLP。",
    image: "assets/works/day096.png"
  },
  {
    day: "Day097",
    title: "たのめる秘書室",
    category: "オンライン秘書サービスLP",
    summary: "必要な分だけ頼める事務サポートの相談導線を整理したサービスLP。",
    image: "assets/works/day097.png"
  },
  {
    day: "Day098",
    title: "猫YouTubeチャンネルLP",
    category: "ペット動画チャンネルLP",
    summary: "チャンネル登録と最新動画視聴へつなげる、親しみやすい紹介LP。",
    image: "assets/works/day098.png"
  },
  {
    day: "Day099",
    title: "ボルダリングギア通販",
    category: "クライミング用品EC LP",
    summary: "初めてのジム通いに必要な基本ギアを迷わず選べるEC LP。",
    image: "assets/works/day099.png"
  },
  {
    day: "Day100",
    title: "受付導線整理LP",
    category: "個人サービス導線整理LP",
    summary: "サービス内容、価格、問い合わせ、顧客対応を整理する相談サービスLP。",
    image: "assets/works/day100.png",
    caseUrl: "case-day100.html"
  }
];

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path === "" ? "index.html" : path;
}

function initNavigation() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");
  if (!toggle || !nav) return;

  nav.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href") === currentPage()) {
      link.setAttribute("aria-current", "page");
    }
  });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function createWorkImage(work, alt, loading = "lazy", fetchPriority) {
  const image = document.createElement("img");
  image.src = work.image;
  image.alt = alt;
  image.width = WORK_IMAGE_WIDTH;
  image.height = WORK_IMAGE_HEIGHT;
  image.loading = loading;
  image.decoding = "async";
  if (fetchPriority) {
    image.setAttribute("fetchpriority", fetchPriority);
  }
  image.addEventListener("load", () => {
    image.parentElement?.classList.add("image-loaded");
    image.parentElement?.classList.remove("image-error");
  });
  image.addEventListener("error", () => {
    image.parentElement?.classList.add("image-error");
    image.parentElement?.classList.remove("image-loaded");
  });
  return image;
}

function createWorkCard(work) {
  const article = document.createElement("article");
  article.className = "work-card";

  const thumb = document.createElement(work.caseUrl ? "a" : "div");
  thumb.className = "work-thumb";
  if (work.caseUrl) {
    thumb.href = work.caseUrl;
    thumb.setAttribute("aria-label", `${work.day} ${work.title} の詳細を見る`);
  }
  thumb.appendChild(createWorkImage(work, `${work.day} ${work.title} のLPプレビュー`));

  const body = document.createElement("div");
  body.className = "work-body";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = `${work.day} / ${work.category}`;

  const title = document.createElement("h3");
  title.textContent = work.title;

  const summary = document.createElement("p");
  summary.textContent = work.summary;

  const links = document.createElement("div");
  links.className = "work-links";

  if (work.caseUrl) {
    const caseLink = document.createElement("a");
    caseLink.className = "button red";
    caseLink.href = work.caseUrl;
    caseLink.textContent = "詳細を見る";
    links.appendChild(caseLink);
  }

  body.append(eyebrow, title, summary, links);
  article.append(thumb, body);
  return article;
}

function renderWorks() {
  const grid = document.querySelector("[data-work-grid]");
  if (!grid) return;
  works.forEach((work) => grid.appendChild(createWorkCard(work)));
}

function renderPreviewWall() {
  const wall = document.querySelector("[data-preview-wall]");
  if (!wall) return;
  works.forEach((work, index) => {
    const link = document.createElement("a");
    link.className = "preview-tile";
    link.href = work.caseUrl || "works.html";

    const isPriorityPreview = index < 2;
    link.appendChild(
      createWorkImage(
        work,
        `${work.day} ${work.title} のファーストビュー`,
        isPriorityPreview ? "eager" : "lazy",
        isPriorityPreview ? "high" : undefined
      )
    );

    const label = document.createElement("span");
    label.className = "preview-label";
    const day = document.createElement("span");
    day.textContent = work.day;
    const title = document.createElement("span");
    title.textContent = work.title;
    label.append(day, title);
    link.appendChild(label);

    wall.appendChild(link);
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector('button[type="submit"]');
  const setStatus = (message) => {
    if (!status) return;
    status.hidden = false;
    status.setAttribute("aria-live", "polite");
    status.textContent = message;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("未入力の項目があります。お名前、メール、相談内容を入力してください。");
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("メールアドレスの形式を確認してください。");
      return;
    }

    const subject = encodeURIComponent(`ポートフォリオからの相談: ${name}`);
    const body = encodeURIComponent(`お名前: ${name}\nメール: ${email}\n\n相談内容:\n${message}`);
    setStatus("メール作成画面を開きます。");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-busy", "true");
      submitButton.dataset.label = submitButton.textContent || "";
      submitButton.textContent = "準備中...";
    }

    window.setTimeout(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.setAttribute("aria-busy", "false");
        submitButton.textContent = submitButton.dataset.label || "メールを作成する";
      }
    }, SUBMIT_LOADING_MS);
  });
}

initNavigation();
renderPreviewWall();
renderWorks();
initContactForm();
