import { useState } from "react";

const asset = (path) => path;
const atomic = (name) => `/extracted/atomic/${name}.png`;

const navItems = [
  { id: "features", label: "機能" },
  { id: "report", label: "睡眠レポート" },
  { id: "pricing", label: "料金" },
  { id: "voices", label: "利用者の声" },
  { id: "guide", label: "睡眠ガイド" },
  { id: "faq", label: "FAQ" },
  { id: "download", label: "はじめる" },
];

const featureCards = [
  {
    title: "睡眠スコア",
    body: "睡眠の質をスコアで可視化。毎日の変化がひと目でわかります。",
    icon: "☆",
    color: "mint",
  },
  {
    title: "おやすみ音",
    body: "心をほぐす高音質のサウンドで、自然な眠りへ導きます。",
    icon: "♪",
    color: "peach",
  },
  {
    title: "朝のふり返り",
    body: "気分や体調を記録して、よりよい一日をスタート。",
    icon: "☼",
    color: "lilac",
  },
  {
    title: "就寝リズム",
    body: "寝る時間と起きる時間のズレを見える化。無理なく整えるヒントを届けます。",
    icon: "☾",
    color: "mint",
  },
  {
    title: "週間レポート",
    body: "1週間の眠りをカードで整理。よかった日と改善しやすい日がすぐわかります。",
    icon: "▥",
    color: "peach",
  },
  {
    title: "やさしい通知",
    body: "そろそろ休む時間を、強すぎない言葉と音でそっと知らせます。",
    icon: "♩",
    color: "lilac",
  },
];

const reportMetrics = [
  ["深い睡眠", "2時間18分", "78%", "bg-nemu-teal"],
  ["入眠まで", "14分", "92%", "bg-[#9f8de8]"],
  ["中途覚醒", "1回", "64%", "bg-[#f2a997]"],
];

const plans = [
  {
    name: "フリー",
    price: "0円",
    caption: "すべての基本機能を無料で体験",
    icon: "☆",
    tone: "mint",
    items: ["睡眠スコア", "週間レポート", "おやすみ音（一部）", "詳細分析", "広告なし"],
  },
  {
    name: "プレミアム",
    price: "480円",
    caption: "より深く、より自分らしい眠りへ",
    icon: "♕",
    tone: "mint",
    featured: true,
    items: ["睡眠スコア", "週間レポート", "おやすみ音（全曲）", "詳細分析（深い睡眠・心拍など）", "広告なし"],
  },
  {
    name: "ファミリー",
    price: "780円",
    caption: "家族で眠りをサポート",
    icon: "♧",
    tone: "lilac",
    items: ["睡眠スコア", "週間レポート", "おやすみ音（全曲）", "詳細分析（深い睡眠・心拍など）", "広告なし", "家族アカウント5人まで"],
  },
];

const voices = [
  ["寝つきが早くなりました", "ベッドに入ってからなかなか眠れなかったけど、リラックス音と呼吸ガイドのおかげで自然と眠れるように。", "20代・女性"],
  ["朝のだるさが軽くなった", "睡眠スコアとアドバイスを参考にしたら、朝の目覚めがスッキリしました。", "30代・男性"],
  ["週末の夜更かしに気づけた", "グラフで見ると生活のクセがわかり、見直すきっかけになりました。", "20代・女性"],
  ["リラックス音が心地いい", "自然音ややさしい音楽に癒されています。眠る時間が待ち遠しくなりました。", "40代・男性"],
];

const guideArticles = [
  {
    label: "注目記事",
    title: "寝る90分前に整えたいこと",
    body: "入眠の質は、眠る前の小さな準備で変わります。",
    image: atomic("guide-featured-photo"),
  },
  {
    label: "ランキング",
    title: "みんなが試した快眠ルーティン",
    body: "人気の習慣を、続けやすさ順に紹介します。",
    image: atomic("guide-thumb-drink"),
  },
  {
    label: "寝る前の習慣",
    title: "スマホを置くタイミング",
    body: "光と通知から離れる、やさしい区切り方。",
    image: atomic("guide-thumb-phone"),
  },
];

const sectionSprites = {
  home: [
    ["moon-peach-home", "left-[39%] top-[20%] w-24 opacity-80"],
    ["star-lilac-home", "right-[8%] top-[22%] w-14 opacity-70"],
    ["star-peach-home", "right-[10%] bottom-[18%] w-11 opacity-75"],
    ["star-mint-home", "left-[51%] top-[45%] w-7 opacity-70"],
  ],
  features: [
    ["moon-peach-features", "right-[35%] top-[11%] w-14 opacity-75"],
    ["star-mint-features", "right-[8%] top-[48%] w-7 opacity-75"],
  ],
  report: [
    ["moon-peach-report", "left-[6%] top-[10%] w-16 opacity-70"],
    ["star-mint-report", "right-[8%] top-[19%] w-9 opacity-65"],
  ],
  pricing: [
    ["moon-mint-pricing", "left-[18%] top-[14%] w-20 opacity-75"],
    ["star-peach-pricing", "right-[22%] top-[12%] w-9 opacity-80"],
    ["star-lilac-pricing", "right-[24%] top-[20%] w-7 opacity-70"],
  ],
  voices: [
    ["moon-peach-voices", "left-[6%] top-[12%] w-12 opacity-55"],
    ["moon-peach-voices-bottom", "right-[8%] bottom-[8%] w-16 opacity-70"],
  ],
  guide: [["moon-peach-guide", "right-[6%] top-[14%] w-14 opacity-75"]],
  faq: [["moon-peach-faq", "left-[13%] top-[12%] w-8 opacity-65"]],
  download: [
    ["moon-mint-download", "left-[6%] top-[16%] w-24 opacity-80"],
    ["moon-peach-download", "right-[7%] top-[14%] w-14 opacity-75"],
  ],
  privacy: [
    ["privacy-shield", "left-[44%] top-[12%] w-32 opacity-25"],
    ["star-mint-home", "left-[62%] top-[20%] w-8 opacity-65"],
    ["moon-peach-voices-bottom", "left-[10%] bottom-[12%] w-16 opacity-65"],
  ],
};

const faqs = [
  ["無料でも使えますか？", "はい。無料プランでも睡眠記録、睡眠スコア、基本レポートを利用できます。"],
  ["睡眠データは自動で記録できますか？", "スマートフォンのセンサーやヘルスケア連携を使って、手間を抑えて記録できます。"],
  ["途中でプラン変更できますか？", "いつでも変更できます。生活リズムに合わせて無理なく使えます。"],
  ["データは安全に管理されますか？", "睡眠データは暗号化して保存し、広告目的の外部販売は行いません。"],
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <button className="group flex items-center gap-3" type="button" onClick={() => scrollTo("home")} aria-label="NemuNote ホームへ">
      <img src={asset(atomic("logo-crescent"))} alt="" className="size-12 shrink-0 object-contain" />
      <span className="text-[28px] font-black leading-none tracking-normal text-nemu-ink sm:text-[32px]">NemuNote</span>
    </button>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-nemu-line/90 bg-[#fcfcf8]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1480px] items-center gap-6 px-5 py-4 sm:px-8 lg:py-5">
        <Logo />
        <nav className="ml-auto hidden items-center gap-9 text-[17px] font-black text-nemu-ink xl:flex" aria-label="ページ内メニュー">
          {navItems.slice(0, -1).map((item) => (
            <button key={item.id} className="rounded-full px-1 py-2 transition hover:text-nemu-teal focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-nemu-mint" type="button" onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="ml-auto whitespace-nowrap rounded-full bg-nemu-teal px-4 py-3 text-sm font-black text-white shadow-nemu-soft transition hover:-translate-y-0.5 hover:bg-[#287d73] sm:px-6 sm:text-base xl:ml-4 xl:px-8 xl:text-lg" type="button" onClick={() => scrollTo("download")}>
          無料ではじめる
        </button>
      </div>
      <nav className="flex flex-wrap justify-center gap-2 overflow-visible px-5 pb-3 xl:hidden" aria-label="スマートフォンメニュー">
        {navItems.map((item) => (
          <button key={item.id} className="shrink-0 rounded-full border border-nemu-line bg-white px-4 py-2 text-sm font-black text-nemu-ink shadow-[0_4px_12px_rgba(38,50,56,0.04)]" type="button" onClick={() => scrollTo(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Decoration({ variant = "home" }) {
  const sprites = sectionSprites[variant] ?? sectionSprites.home;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span className="absolute left-[7%] top-[14%] hidden size-3 rounded-full bg-nemu-peach/70 lg:block" />
      {sprites.map(([name, className]) => (
        <img key={name} src={asset(atomic(name))} alt="" className={`absolute hidden lg:block ${className}`} />
      ))}
      <span className="absolute -bottom-24 left-1/2 h-72 w-[120vw] -translate-x-1/2 rounded-[50%] bg-nemu-mint/10 blur-sm" />
    </div>
  );
}

function SectionTitle({ eyebrow, title, body, align = "center" }) {
  return (
    <div className={align === "left" ? "max-w-[760px]" : "mx-auto max-w-[940px] text-center"}>
      <p className="text-lg font-black tracking-[0.16em] text-nemu-teal">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(2.8rem,5vw,5.6rem)] font-black leading-[1.15] tracking-normal text-nemu-ink">{title}</h2>
      <p className="mt-7 text-xl font-bold leading-9 text-nemu-ink/70 sm:text-2xl">{body}</p>
    </div>
  );
}

function PhoneFrame({ src, alt, className = "" }) {
  return (
    <div className={`relative mx-auto w-full max-w-[430px] ${className}`}>
      <div className="absolute -inset-8 rounded-[48px] bg-nemu-mint/25 blur-3xl" />
      <img src={asset(src)} alt={alt} className="relative w-full drop-shadow-[0_32px_70px_rgba(38,50,56,0.18)]" />
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-wrap gap-5 sm:gap-7">
      <button className="animate-nemu-cta-pulse rounded-full bg-nemu-teal px-9 py-4 text-xl font-black text-white shadow-nemu-soft transition hover:-translate-y-1 hover:bg-[#287d73] sm:px-14 sm:py-5 sm:text-2xl" type="button" onClick={() => scrollTo("download")}>
        無料ではじめる
      </button>
      <button className="rounded-full border-2 border-nemu-lilac bg-white/80 px-8 py-4 text-xl font-black text-[#8c78d8] shadow-[0_8px_22px_rgba(159,141,232,0.12)] transition hover:-translate-y-1 sm:px-12 sm:py-5 sm:text-2xl" type="button" onClick={() => scrollTo("report")}>
        睡眠スコアを見る
      </button>
    </div>
  );
}

function HeroCard({ icon, tone, title, body, delay }) {
  return (
    <article className="grid min-h-[132px] grid-cols-[72px_1fr] items-center gap-5 rounded-[8px] border border-nemu-line bg-white p-5 shadow-nemu-soft animate-nemu-card-in sm:grid-cols-[94px_1fr] sm:gap-7 sm:p-7" style={{ animationDelay: `${delay}ms` }}>
      <FeatureIcon icon={icon} color={tone} />
      <div>
        <h3 className="text-2xl font-black text-nemu-ink">{title}</h3>
        <p className="mt-2 text-base font-bold leading-7 text-nemu-ink/70 sm:text-lg">{body}</p>
      </div>
    </article>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fffefa] px-5 pb-16 pt-16 sm:px-8 lg:pt-20">
      <Decoration variant="home" />
      <div className="relative mx-auto grid max-w-[1480px] items-center gap-12 lg:grid-cols-[1fr_520px] xl:grid-cols-[1fr_590px]">
        <div>
          <h1 className="text-[clamp(3rem,8.5vw,9rem)] font-black leading-[1.1] tracking-normal text-nemu-ink">
            <span className="whitespace-nowrap">眠りを</span>
            <br />
            <span className="whitespace-nowrap">やさしく整える</span>
          </h1>
          <p className="mt-9 max-w-[720px] text-2xl font-bold leading-[1.7] text-nemu-ink sm:text-3xl">
            毎日の睡眠を記録して、
            <br className="hidden sm:block" />
            あなたに合う夜のリズムを見つけよう。
          </p>
          <div className="mt-11">
            <CtaButtons />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 top-12 hidden w-[230px] rounded-[8px] bg-white p-5 shadow-nemu ring-1 ring-nemu-line lg:block">
            <p className="text-base font-black text-nemu-muted">今日の睡眠スコア</p>
            <div className="mt-3 flex items-end gap-3">
              <span className="text-6xl font-black text-nemu-teal">86</span>
              <span className="pb-2 text-xl font-black text-nemu-ink">/ 100</span>
            </div>
          </div>
          <PhoneFrame src={atomic("phone-home")} alt="NemuNote ホーム画面" />
        </div>
      </div>
      <div className="relative mx-auto mt-14 grid max-w-[1480px] gap-6 lg:grid-cols-3">
        <HeroCard icon="☆" tone="mint" title="睡眠スコア" body="眠りの質をスコアで可視化。" delay={0} />
        <HeroCard icon="♪" tone="lilac" title="おやすみ音" body="心をほぐす音で入眠をサポート。" delay={120} />
        <HeroCard icon="☼" tone="peach" title="朝のふり返り" body="目覚めの気分をやさしく記録。" delay={240} />
      </div>
    </section>
  );
}

function FeatureIcon({ icon, color }) {
  const classes = {
    mint: "bg-nemu-mint/25 text-nemu-teal",
    peach: "bg-nemu-peach/30 text-[#d97e6c]",
    lilac: "bg-nemu-lilac/40 text-[#8c78d8]",
  };
  return <span className={`grid size-16 place-items-center rounded-full text-4xl ${classes[color]}`}>{icon}</span>;
}

function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
      <Decoration variant="features" />
      <div className="relative mx-auto grid max-w-[1480px] items-center gap-12 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_470px]">
        <div>
          <SectionTitle eyebrow="FEATURES" title="眠りを整える、やさしい機能" body="記録するだけで、夜の過ごし方が見えてくる。" align="left" />
          <div className="mt-11 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature, index) => (
              <article key={feature.title} className="min-h-[235px] rounded-[8px] border border-nemu-line bg-white p-7 shadow-nemu-soft transition hover:-translate-y-1 hover:shadow-nemu animate-nemu-card-in" style={{ animationDelay: `${index * 80}ms` }}>
                <FeatureIcon icon={feature.icon} color={feature.color} />
                <h3 className="mt-5 text-2xl font-black text-nemu-ink">{feature.title}</h3>
                <p className="mt-4 text-lg font-bold leading-8 text-nemu-ink/70">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
        <PhoneFrame src={atomic("phone-features")} alt="NemuNote 機能画面" />
      </div>
    </section>
  );
}

function ScoreRing() {
  return (
    <div className="relative mx-auto size-[220px]">
      <svg className="size-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#e8eeec" strokeWidth="12" />
        <circle className="animate-nemu-ring-draw" cx="60" cy="60" r="50" fill="none" stroke="#8fd8c4" strokeLinecap="round" strokeWidth="12" strokeDasharray="314" strokeDashoffset="48" style={{ "--nemu-ring-length": 314, "--nemu-ring-offset": 48 }} />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <span>
          <strong className="block text-6xl font-black text-nemu-teal">86</strong>
          <span className="text-lg font-black text-nemu-ink/60">快眠スコア</span>
        </span>
      </div>
    </div>
  );
}

function ReportDashboard() {
  const bars = [
    [42, 26],
    [74, 58],
    [62, 48],
    [68, 55],
    [57, 42],
    [86, 64],
    [70, 52],
  ];
  return (
    <div className="rounded-[8px] border border-nemu-line bg-white p-6 shadow-[0_8px_22px_rgba(38,50,56,0.05)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-base font-black text-nemu-muted">週間レポート</p>
          <h3 className="mt-2 text-2xl font-black text-nemu-ink">睡眠時間・深い睡眠の推移</h3>
        </div>
        <span className="rounded-full bg-nemu-mint/20 px-4 py-2 text-sm font-black text-nemu-teal">5/14 - 5/20</span>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[170px_1fr]">
        <div className="rounded-[8px] bg-[#fbfefa] p-5 text-center">
          <div className="relative mx-auto size-32">
            <svg className="size-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
              <circle cx="60" cy="60" r="48" fill="none" stroke="#e8eeec" strokeWidth="10" />
              <circle cx="60" cy="60" r="48" fill="none" stroke="#8fd8c4" strokeLinecap="round" strokeWidth="10" strokeDasharray="302" strokeDashoffset="64" />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <span>
                <strong className="block text-5xl font-black text-nemu-ink">82</strong>
                <span className="text-sm font-black text-nemu-teal">とても良い</span>
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm font-black leading-6 text-nemu-ink/60">平均スコア</p>
        </div>
        <svg className="h-[220px] w-full overflow-visible" viewBox="0 0 620 220" role="img" aria-label="睡眠スコア推移グラフ">
          <defs>
            <linearGradient id="scoreLine" x1="0" x2="1" y1="0" y2="0">
              <stop stopColor="#8fd8c4" />
              <stop offset="1" stopColor="#d8cdf6" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3].map((line) => (
            <line key={line} x1="16" x2="600" y1={36 + line * 36} y2={36 + line * 36} stroke="#e8eeec" strokeDasharray="5 9" />
          ))}
          <polyline fill="none" points="20,118 110,92 200,104 290,74 380,88 470,54 560,66 604,44" stroke="url(#scoreLine)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
          {[20, 110, 200, 290, 380, 470, 560, 604].map((x, i) => (
            <circle key={x} cx={x} cy={[118, 92, 104, 74, 88, 54, 66, 44][i]} r="7" fill="#fff" stroke={i > 4 ? "#a9a6f4" : "#8fd8c4"} strokeWidth="5" />
          ))}
          {["火", "水", "木", "金", "土", "日", "月"].map((day, index) => (
            <text key={day} x={68 + index * 78} y="178" textAnchor="middle" fill="#7a8588" fontSize="17" fontWeight="700">{day}</text>
          ))}
          <text x="398" y="208" fill="#7a8588" fontSize="15" fontWeight="700">深い睡眠</text>
          <rect x="374" y="197" width="14" height="14" rx="3" fill="#a9a6f4" />
          <text x="512" y="208" fill="#7a8588" fontSize="15" fontWeight="700">浅い睡眠</text>
          <rect x="488" y="197" width="14" height="14" rx="3" fill="#8fd8c4" />
        </svg>
      </div>
      <div className="mt-6 rounded-[8px] bg-[#fbfefa] p-5">
        <p className="text-base font-black text-nemu-ink">睡眠ステージ</p>
        <div className="mt-5 grid h-40 grid-cols-7 items-end gap-4">
          {bars.map(([deep, light], index) => (
            <div key={index} className="flex h-full items-end justify-center gap-2">
              <span className="block w-5 rounded-t-full bg-nemu-mint" style={{ height: `${deep}%` }} />
              <span className="block w-5 rounded-t-full bg-nemu-lilac" style={{ height: `${light}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Report() {
  return (
    <section id="report" className="relative overflow-hidden bg-[#fbfefa] px-5 py-20 sm:px-8">
      <Decoration variant="report" />
      <div className="relative mx-auto max-w-[1480px]">
        <SectionTitle eyebrow="REPORT" title="眠りの変化が、ひと目でわかる" body="週間・月間のレポートで、あなたに合うリズムを見つけよう。" />
        <div className="mt-12 grid items-center gap-9 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_430px]">
          <div className="grid gap-7 rounded-[10px] border border-nemu-line bg-white p-6 shadow-nemu sm:p-9 lg:grid-cols-[290px_1fr]">
            <div className="rounded-[8px] bg-[#fbfefa] p-7">
              <ScoreRing />
              <p className="mt-6 text-center text-lg font-black leading-8 text-nemu-ink/70">昨夜は深い睡眠が長く、起床リズムも安定しています。</p>
            </div>
            <div>
              <ReportDashboard />
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {reportMetrics.map(([label, value, percent, bar]) => (
                  <div key={label} className="rounded-[8px] bg-[#fbfefa] p-5">
                    <p className="text-base font-black text-nemu-ink/60">{label}</p>
                    <p className="mt-3 text-2xl font-black text-nemu-ink">{value}</p>
                    <div className="mt-4 h-2 rounded-full bg-nemu-line">
                      <span className={`block h-full rounded-full ${bar}`} style={{ width: percent }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PhoneFrame src={atomic("phone-report")} alt="NemuNote 睡眠レポート画面" />
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
      <Decoration variant="pricing" />
      <div className="relative mx-auto max-w-[1360px]">
        <SectionTitle eyebrow="PRICE" title="あなたの眠りに合わせて選べるプラン" body="まずは無料で、必要になったらプレミアムへ。" />
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative rounded-[8px] border bg-white p-8 shadow-nemu-soft transition hover:-translate-y-1 ${plan.featured ? "border-nemu-teal ring-4 ring-nemu-mint/20" : "border-nemu-line"}`}>
              {plan.featured && <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-nemu-teal px-8 py-2 text-base font-black text-white shadow-nemu-soft">人気</span>}
              <FeatureIcon icon={plan.icon} color={plan.tone} />
              <h3 className="mt-7 text-3xl font-black text-nemu-ink">{plan.name}</h3>
              <p className="mt-3 text-lg font-bold text-nemu-ink/65">{plan.caption}</p>
              <div className="mt-8 flex items-end gap-2">
                <span className={plan.featured ? "text-6xl font-black text-nemu-teal" : "text-6xl font-black text-[#8c78d8]"}>{plan.price}</span>
                <span className="pb-2 text-xl font-black text-nemu-ink/65">/月</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-black text-nemu-ink">
                    <span className="grid size-6 place-items-center rounded-full bg-nemu-mint/30 text-sm text-nemu-teal">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className={`mt-9 w-full rounded-full px-8 py-4 text-lg font-black transition ${plan.featured ? "bg-nemu-teal text-white shadow-nemu-soft hover:bg-[#287d73]" : "border-2 border-nemu-lilac bg-white text-[#8c78d8] hover:bg-nemu-lilac/20"}`} type="button" onClick={() => scrollTo("download")}>
                このプランで始める
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section id="voices" className="relative overflow-hidden bg-[#fbfefa] px-5 py-20 sm:px-8">
      <Decoration variant="voices" />
      <div className="relative mx-auto max-w-[1360px]">
        <SectionTitle eyebrow="VOICE" title="眠りが変わると、朝が変わる" body="NemuNoteを使う人の、やさしい変化の声。" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {voices.map(([title, body, person], index) => (
            <article key={title} className="rounded-[8px] border border-nemu-line bg-white p-7 shadow-nemu-soft animate-nemu-card-in" style={{ animationDelay: `${index * 90}ms` }}>
              <div className="flex gap-1 text-2xl text-nemu-peach" aria-hidden="true">★★★★★</div>
              <h3 className="mt-6 text-2xl font-black leading-9 text-nemu-ink">{title}</h3>
              <p className="mt-4 text-lg font-bold leading-8 text-nemu-ink/70">{body}</p>
              <p className="mt-6 rounded-full bg-nemu-mint/10 px-4 py-2 text-sm font-black text-nemu-teal">{person}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section id="guide" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
      <Decoration variant="guide" />
      <div className="relative mx-auto max-w-[1360px]">
        <SectionTitle eyebrow="SLEEP GUIDE" title="眠りを育てる、やさしいガイド" body="今夜からできる小さな習慣を、専門家監修の記事で。" />
        <div className="mt-12 grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="overflow-hidden rounded-[8px] border border-nemu-line bg-white shadow-nemu">
            <img src={asset(guideArticles[0].image)} alt="" className="h-[340px] w-full object-cover" />
            <div className="p-8">
              <p className="text-base font-black tracking-[0.16em] text-nemu-teal">{guideArticles[0].label}</p>
              <h3 className="mt-3 text-4xl font-black leading-tight text-nemu-ink">{guideArticles[0].title}</h3>
              <p className="mt-4 text-xl font-bold leading-9 text-nemu-ink/70">{guideArticles[0].body}</p>
            </div>
          </article>
          <div className="grid gap-7">
            {guideArticles.slice(1).map((article) => (
              <article key={article.title} className="grid grid-cols-[135px_1fr] overflow-hidden rounded-[8px] border border-nemu-line bg-white shadow-nemu-soft sm:grid-cols-[210px_1fr]">
                <img src={asset(article.image)} alt="" className="h-full min-h-[200px] w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-black tracking-[0.14em] text-[#8c78d8]">{article.label}</p>
                  <h3 className="mt-3 text-2xl font-black leading-9 text-nemu-ink">{article.title}</h3>
                  <p className="mt-3 text-lg font-bold leading-8 text-nemu-ink/70">{article.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#fbfefa] px-5 py-20 sm:px-8">
      <Decoration variant="faq" />
      <div className="relative mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle eyebrow="FAQ" title="よくあるご質問" body="はじめて使う前に、気になることをまとめました。" align="left" />
          <div className="mt-10 max-w-[460px] rounded-[8px] border border-nemu-line bg-white p-7 shadow-nemu-soft">
            <p className="text-xl font-black text-nemu-ink">解決しない場合はこちら</p>
            <p className="mt-3 text-base font-bold leading-7 text-nemu-ink/65">お問い合わせから、睡眠記録やプランについて相談できます。</p>
            <button className="mt-6 rounded-full bg-nemu-teal px-7 py-3 font-black text-white" type="button">お問い合わせ</button>
          </div>
        </div>
        <div className="space-y-5">
          {faqs.map(([question, answer], index) => {
            const opened = openIndex === index;
            return (
              <article key={question} className="rounded-[8px] border border-nemu-line bg-white shadow-nemu-soft">
                <button className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left text-xl font-black text-nemu-ink sm:px-8 sm:text-2xl" type="button" onClick={() => setOpenIndex(opened ? -1 : index)}>
                  <span>{question}</span>
                  <span className={`grid size-10 shrink-0 place-items-center rounded-full bg-nemu-mint/20 text-3xl text-nemu-teal transition ${opened ? "rotate-45" : ""}`}>＋</span>
                </button>
                {opened && <p className="animate-nemu-accordion px-6 pb-7 text-lg font-bold leading-9 text-nemu-ink/70 sm:px-8">{answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
      <Decoration variant="download" />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 rounded-[12px] border border-nemu-line bg-[#fbfefa] p-7 shadow-nemu sm:p-10 lg:grid-cols-[1fr_520px]">
        <div>
          <p className="text-lg font-black tracking-[0.16em] text-nemu-teal">DOWNLOAD</p>
          <h2 className="mt-4 text-[clamp(3rem,5vw,5.8rem)] font-black leading-[1.15] text-nemu-ink">
            今夜の眠りを、
            <br />
            今日から記録
          </h2>
          <p className="mt-7 max-w-[680px] text-2xl font-bold leading-10 text-nemu-ink/70">NemuNoteをスマホに入れて、あなたに合う夜のリズムを見つけよう。</p>
          <div className="mt-10 grid max-w-[520px] gap-5 sm:grid-cols-[240px_150px]">
            <img src={asset(atomic("store-buttons"))} alt="App Store と Google Play のダウンロードボタン" className="w-full rounded-[8px]" />
            <img src={asset(atomic("qr-code"))} alt="ダウンロード用QRコード" className="w-full rounded-[8px] border border-nemu-line bg-white p-2 shadow-nemu-soft" />
          </div>
        </div>
        <img src={asset(atomic("phones-download"))} alt="NemuNote アプリ画面" className="mx-auto w-full max-w-[560px] drop-shadow-[0_28px_60px_rgba(38,50,56,0.18)]" />
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden bg-[#fbfefa] px-5 py-20 sm:px-8">
      <Decoration variant="pricing" />
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-[420px_1fr]">
        <div className="relative">
          <img src={asset(atomic("phone-privacy"))} alt="プライバシー設定画面" className="mx-auto w-full max-w-[360px] drop-shadow-[0_30px_70px_rgba(38,50,56,0.16)]" />
          <img src={asset(atomic("privacy-shield"))} alt="" className="absolute -right-2 top-10 w-32 sm:right-8 sm:w-40" />
        </div>
        <div>
          <SectionTitle eyebrow="PRIVACY" title="大切な睡眠データを、やさしく守る" body="あなたの記録は、あなたのためだけに安全に管理されます。" align="left" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {["暗号化保存", "広告販売なし", "連携を選べる"].map((item) => (
              <div key={item} className="rounded-[8px] border border-nemu-line bg-white p-6 text-center shadow-nemu-soft">
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-nemu-mint/25 text-2xl text-nemu-teal">✓</span>
                <p className="mt-4 text-lg font-black text-nemu-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-nemu-paper font-sans text-nemu-ink">
      <Header />
      <main>
        <Hero />
        <Features />
        <Report />
        <Pricing />
        <Voices />
        <Guide />
        <Faq />
        <Download />
        <Privacy />
      </main>
    </div>
  );
}
