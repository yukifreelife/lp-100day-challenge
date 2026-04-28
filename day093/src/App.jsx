import { useState } from "react";

const A = "/assets/nemunote-v2/curated/";
const img = (name) => `${A}${name}`;

const navItems = [
  ["features", "機能"],
  ["report", "睡眠レポート"],
  ["pricing", "料金"],
  ["guide", "睡眠ガイド"],
  ["faq", "FAQ"],
  ["download", "無料ではじめる"],
];

const features = [
  ["icon-sleep-score-badge.png", "睡眠スコア", "眠りの質をスコアで可視化。毎日の変化がひと目でわかります。"],
  ["icon-sleep-sound-badge.png", "就寝リズム", "あなたに合う理想の就寝・起床時間をお知らせします。"],
  ["icon-music-note.png", "おやすみ音", "心をほぐす自然音で、リラックスした入眠をサポートします。"],
  ["icon-sun-face.png", "朝のふり返り", "気分や体調を記録して、よりよい一日のスタートをサポート。"],
  ["icon-privacy-shield.png", "データを守る", "暗号化保存や連携管理で、大切なデータを安全にお預かりいたします。"],
  ["decor-cloud-sleep.png", "連携サービス", "ヘルスケアアプリと連携して、より正確に睡眠を分析します。"],
];

const plans = [
  {
    icon: "icon-smile-sleep.png",
    name: "フリー",
    price: "0",
    note: "すべての基本機能を無料で体験",
    accent: "teal",
    items: [
      ["睡眠スコア", true],
      ["週間レポート", true],
      ["おやすみ音（一部）", true],
      ["詳細分析", false],
      ["広告なし", false],
    ],
  },
  {
    icon: "icon-sleep-score-badge.png",
    name: "プレミアム",
    price: "480",
    note: "より深く、より自分らしい眠りへ",
    popular: true,
    accent: "teal",
    items: [
      ["睡眠スコア", true],
      ["週間・月間レポート", true],
      ["おやすみ音（全曲）", true],
      ["詳細分析（深い睡眠・心拍など）", true],
      ["広告なし", true],
    ],
  },
  {
    icon: "icon-headset.png",
    name: "ファミリー",
    price: "780",
    note: "家族で眠りをサポート",
    accent: "lilac",
    items: [
      ["睡眠スコア", true],
      ["週間・月間レポート", true],
      ["おやすみ音（全曲）", true],
      ["詳細分析（深い睡眠・心拍など）", true],
      ["広告なし", true],
      ["家族アカウント5人まで", true],
    ],
  },
];

const guideCards = [
  ["photo-guide-bedside.png", "寝る前の習慣"],
  ["photo-warm-bath.png", "リラックス"],
  ["photo-guide-phone-bed.png", "スマホとの付き合い方"],
  ["photo-guide-morning-window.png", "朝の目覚め"],
];

const faqs = [
  ["無料プランでも十分に使えますか？", "はい。睡眠スコア、基本レポート、一部のおやすみ音を無料で利用できます。"],
  ["7日間のお試し期間の後はどうなりますか？", "期間後は自動更新前に通知され、いつでもアプリ内から変更できます。"],
  ["睡眠スコアはどのように計算されていますか？", "睡眠時間、入眠までの時間、夜間の覚醒、起床リズムなどを総合して算出します。"],
  ["通知で就寝リマインドを受け取れますか？", "受け取れます。曜日や時間帯、音の強さを細かく調整できます。"],
  ["データの引き継ぎはできますか？", "アカウント連携を行うことで、機種変更後も記録を引き継げます。"],
  ["複数のデバイスで使えますか？", "同じアカウントでログインすれば、複数端末で利用できます。"],
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7eeee] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 lg:flex-nowrap lg:px-8">
        <button className="flex items-center gap-3" type="button" onClick={() => scrollTo("home")} aria-label="NemuNote home">
          <span className="logo-mark" aria-hidden="true">
            <span className="logo-cut" />
            <span className="logo-star" />
          </span>
          <span className="text-2xl font-black tracking-normal text-nemu-ink sm:text-[27px]">NemuNote</span>
        </button>
        <nav className="site-nav order-3 flex w-full gap-2 overflow-x-auto pb-1 text-sm font-black text-nemu-ink sm:justify-center lg:order-none lg:ml-auto lg:w-auto lg:gap-6 lg:overflow-visible lg:text-[15px]" aria-label="ページ内メニュー">
          {navItems.map(([id, label]) => (
            <button key={id} className="shrink-0 rounded-full px-3 py-2 transition hover:text-nemu-teal" type="button" onClick={() => scrollTo(id)}>
              {label === "無料ではじめる" ? "はじめる" : label}
            </button>
          ))}
        </nav>
        <button className="header-cta ml-auto rounded-full bg-nemu-teal px-5 py-3 text-sm font-black text-white shadow-[0_10px_22px_rgba(47,143,131,.18)] transition hover:-translate-y-0.5 hover:bg-[#287d73] sm:px-7 lg:ml-0" type="button" onClick={() => scrollTo("download")}>
          無料ではじめる
        </button>
      </div>
    </header>
  );
}

function Decor({ className = "", name = "decor-star-mint.png" }) {
  return <img src={img(name)} alt="" className={`pointer-events-none absolute hidden select-none lg:block ${className}`} />;
}

function SectionTitle({ eyebrow, title, body, left = false }) {
  return (
    <div className={left ? "max-w-[650px]" : "mx-auto max-w-[760px] text-center"}>
      {eyebrow && <p className="text-sm font-black tracking-[0.18em] text-nemu-teal">{eyebrow}</p>}
      <h2 className="mt-3 text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.18] tracking-normal text-nemu-ink">{title}</h2>
      {body && <p className="mt-4 text-base font-bold leading-8 text-nemu-ink/62 sm:text-lg">{body}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section relative isolate overflow-hidden px-4 pb-20 pt-14 sm:px-8 lg:pt-16">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#eff9f6] to-transparent" />
      <Decor name="decor-sleeping-moon.png" className="left-[43%] top-24 w-24 opacity-80" />
      <Decor name="decor-star-lilac.png" className="left-[31%] top-56 w-9 opacity-70" />
      <Decor name="decor-star-peach.png" className="right-[13%] bottom-32 w-7 opacity-70" />
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-8 md:grid-cols-[1.06fr_.94fr] lg:grid-cols-[.96fr_1.04fr]">
        <div className="hero-copy relative z-10">
          <span className="inline-flex rounded-full bg-nemu-mint/22 px-5 py-3 text-sm font-black text-nemu-teal">睡眠の質向上アプリ</span>
          <h1 className="hero-title mt-7 font-black leading-[1.08] tracking-normal text-nemu-ink">
            <span className="whitespace-nowrap">眠りを</span>
            <br />
            <span className="whitespace-nowrap">やさしく整える</span>
          </h1>
          <p className="mt-7 max-w-[620px] text-lg font-bold leading-[1.85] text-nemu-ink/75 sm:text-xl lg:text-2xl">
            <span className="whitespace-nowrap">毎日の睡眠を記録して、</span>
            <br />
            <span className="whitespace-nowrap">あなたに合う夜のリズムを見つけよう。</span>
          </p>
          <div className="hero-ctas mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-nemu-teal px-9 py-4 text-base font-black text-white shadow-nemu-soft transition hover:-translate-y-1 hover:bg-[#287d73]" type="button" onClick={() => scrollTo("download")}>
              無料ではじめる
              <span className="ml-4">›</span>
            </button>
            <button className="rounded-full border border-[#bcb2f2] bg-white/85 px-9 py-4 text-base font-black text-[#8e7ade] shadow-[0_10px_26px_rgba(142,122,222,.12)] transition hover:-translate-y-1" type="button" onClick={() => scrollTo("report")}>
              睡眠スコアを見る
            </button>
          </div>
        </div>
        <div className="hero-visual relative z-0 min-h-[360px] md:min-h-[520px] lg:min-h-[590px]">
          <img src={img("lp-hero-phone-combo.png")} alt="NemuNoteの睡眠スコアと週間レポート画面" className="hero-phone absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_30px_80px_rgba(38,50,56,.12)]" />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white px-5 py-16 sm:px-8">
      <Decor name="decor-star-mint.png" className="right-[16%] top-10 w-8 opacity-65" />
      <SectionTitle title="眠りを整える、やさしい機能" />
      <div className="mx-auto mt-8 grid max-w-[1120px] gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {features.map(([icon, title, body], index) => (
          <article key={title} className="animate-nemu-card-in rounded-[8px] border border-nemu-line bg-white px-5 py-7 text-center shadow-[0_12px_30px_rgba(38,50,56,.045)] transition hover:-translate-y-1 hover:shadow-nemu-soft" style={{ animationDelay: `${index * 70}ms` }}>
            <img src={img(icon)} alt="" className="mx-auto size-[76px] object-contain" />
            <h3 className="mt-4 text-lg font-black text-nemu-ink">{title}</h3>
            <p className="mt-3 text-[13px] font-bold leading-6 text-nemu-ink/62">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MiniMetric({ label, value, sub }) {
  return (
    <div className="rounded-[8px] border border-nemu-line bg-white p-4 text-center shadow-[0_10px_24px_rgba(38,50,56,.04)]">
      <p className="text-sm font-black text-nemu-ink/55">{label}</p>
      <p className="mt-2 text-[clamp(1.65rem,3vw,2.45rem)] font-black leading-tight text-nemu-ink">{value}</p>
      <p className="mt-2 text-xs font-black text-nemu-teal">{sub}</p>
      <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-nemu-line">
        <span className="block h-full w-4/5 rounded-full bg-nemu-mint" />
      </div>
    </div>
  );
}

function ReportPanel() {
  return (
    <div className="report-board grid gap-4 rounded-[8px] border border-nemu-line bg-white/82 p-4 shadow-[0_18px_48px_rgba(38,50,56,.06)] sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MiniMetric label="平均睡眠スコア" value="82" sub="とても良い" />
        <MiniMetric label="深い睡眠（平均）" value="2時間18分" sub="目標の92%" />
        <MiniMetric label="睡眠時間（平均）" value="7時間12分" sub="目標の97%" />
        <MiniMetric label="入眠まで（平均）" value="14分" sub="安定しています" />
      </div>
      <div className="grid gap-4 rounded-[8px] border border-nemu-line bg-white p-4 shadow-[0_10px_24px_rgba(38,50,56,.04)] md:grid-cols-3">
        {[
          ["icon-phone-list.png", "傾向の分析", "眠りの傾向と変化をやさしくグラフで確認できます。"],
          ["icon-score-ring.png", "改善のヒント", "日々の記録から、よりよい睡眠のヒントを届けます。"],
          ["icon-privacy-shield.png", "カレンダー表示", "毎日のスコアやメモをカレンダーでまとめてチェック。"],
        ].map(([icon, title, body]) => (
          <div key={title} className="grid grid-cols-[54px_1fr] gap-3 border-nemu-line sm:border-r sm:last:border-r-0">
            <img src={img(icon)} alt="" className="size-12 object-contain" />
            <div>
              <h3 className="text-sm font-black text-nemu-ink">{title}</h3>
              <p className="mt-1 text-xs font-bold leading-5 text-nemu-ink/58">{body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_.88fr]">
        <div className="rounded-[8px] border border-nemu-line bg-white p-5 shadow-[0_10px_24px_rgba(38,50,56,.04)]">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-base font-black text-nemu-ink">就寝時刻・起床時刻の推移</h3>
            <span className="rounded-full bg-[#f3fbf8] px-3 py-1 text-xs font-black text-nemu-teal">今週</span>
          </div>
          <div className="mt-5 space-y-3">
            {[82, 70, 88, 76, 83, 72, 80].map((width, index) => (
              <div key={index} className="grid grid-cols-[3.2rem_1fr] items-center gap-3">
                <span className="text-xs font-black text-nemu-ink/45">{`${index + 14}日`}</span>
                <div className="h-2 rounded-full bg-nemu-line">
                  <span className="block h-full rounded-full bg-nemu-mint" style={{ width: `${width}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[8px] border border-nemu-line bg-white p-5 shadow-[0_10px_24px_rgba(38,50,56,.04)]">
          <h3 className="text-base font-black text-nemu-ink">今週のメモ</h3>
          <p className="mt-4 text-sm font-bold leading-7 text-nemu-ink/62">
            金曜は遅くなってしまったけど、週末にしっかりリカバリーできた◎
          </p>
          <div className="mt-5 rounded-[8px] bg-[#fbfefa] p-4 text-sm font-black leading-7 text-nemu-teal">
            来週も就寝時刻をそろえて、深い睡眠の時間をもう少し増やしましょう。
          </div>
        </div>
      </div>
    </div>
  );
}

function Report() {
  return (
    <section id="report" className="relative overflow-hidden bg-[linear-gradient(180deg,#fff,#fbfefa)] px-5 py-16 sm:px-8">
      <Decor name="decor-mint-crescent-large.png" className="right-[10%] top-16 w-20 opacity-75" />
      <div className="mx-auto max-w-[1240px]">
        <SectionTitle title="眠りの変化が、ひと目でわかる" body="週間・月間のレポートで、あなたに合うリズムを見つけよう。" />
        <div className="report-layout mt-9 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            <ReportPanel />
          </div>
          <div className="report-phone-wrap">
            <img src={img("phone-weekly-report.png")} alt="週間睡眠レポート画面" className="report-phone mx-auto w-[230px] drop-shadow-[0_26px_65px_rgba(38,50,56,.13)] sm:w-[270px] lg:w-[300px] xl:w-[335px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white px-5 py-16 sm:px-8">
      <Decor name="decor-star-peach.png" className="left-[22%] top-12 w-7 opacity-70" />
      <Decor name="decor-star-lilac.png" className="right-[25%] top-16 w-7 opacity-70" />
      <SectionTitle title="あなたの眠りに合わせて選べるプラン" body="まずは無料で、必要になったらプレミアムへ。" />
      <div className="pricing-grid mx-auto mt-9 grid max-w-[980px] gap-5">
        {plans.map((plan) => (
          <article key={plan.name} className={`pricing-card relative rounded-[8px] border bg-white shadow-[0_18px_44px_rgba(38,50,56,.05)] ${plan.popular ? "border-nemu-teal ring-1 ring-nemu-teal" : "border-nemu-line"}`}>
            {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-nemu-teal px-7 py-1.5 text-sm font-black text-white">人気</span>}
            <img src={img(plan.icon)} alt="" className="pricing-icon object-contain" />
            <h3 className="mt-4 text-xl font-black text-nemu-ink">{plan.name}</h3>
            <p className="mt-2 text-sm font-bold leading-6 text-nemu-ink/58">{plan.note}</p>
            <div className="mt-6 flex items-end gap-2 text-nemu-teal">
              <span className={`pricing-price font-black ${plan.accent === "lilac" ? "text-[#9a7ee8]" : ""}`}>{plan.price}</span>
              <span className="pb-2 text-sm font-black">円 / 月</span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.items.map(([item, available]) => (
                <li key={item} className={`flex items-center gap-3 text-sm font-bold ${available ? "text-nemu-ink/75" : "text-nemu-ink/36"}`}>
                  <span className={`grid size-5 shrink-0 place-items-center rounded-full text-[10px] ${available ? (plan.accent === "lilac" ? "bg-[#9a7ee8] text-white" : "bg-nemu-teal text-white") : "border border-nemu-ink/20 bg-white text-nemu-ink/30"}`}>
                    {available ? "✓" : "−"}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-7 w-full rounded-full border px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 ${plan.popular ? "border-nemu-teal bg-nemu-teal text-white shadow-nemu-soft" : "border-nemu-teal bg-white text-nemu-teal"}`} type="button" onClick={() => scrollTo("download")}>
              {plan.popular ? "7日間お試し" : "無料ではじめる"}
            </button>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-8 grid max-w-[980px] gap-4 rounded-[8px] border border-nemu-line bg-white/85 p-5 shadow-[0_12px_30px_rgba(38,50,56,.035)] sm:grid-cols-3">
        {["いつでも解約OK", "安全なお支払い", "安心のプライバシー"].map((item) => (
          <div key={item} className="text-center text-sm font-black text-nemu-ink/62">{item}</div>
        ))}
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section id="guide" className="relative overflow-hidden bg-[#fbfefa] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <div className="grid grid-cols-2 gap-4 rounded-[8px] border border-nemu-line bg-white p-5 shadow-[0_18px_44px_rgba(38,50,56,.05)] sm:grid-cols-4">
          {guideCards.map(([photo, title]) => (
            <article key={title} className="overflow-hidden rounded-[8px] border border-nemu-line bg-white">
              <img src={img(photo)} alt="" className="h-28 w-full object-cover sm:h-36" />
              <h3 className="px-3 py-3 text-center text-xs font-black text-nemu-ink">{title}</h3>
            </article>
          ))}
        </div>
        <div>
          <SectionTitle left title="眠りを育てる、やさしいガイド" body="今夜からできる小さな習慣を、専門家監修の記事で。" />
          <button className="mt-8 rounded-full border border-nemu-teal bg-white px-9 py-4 text-sm font-black text-nemu-teal shadow-[0_10px_24px_rgba(47,143,131,.08)] transition hover:-translate-y-0.5" type="button" onClick={() => scrollTo("faq")}>
            ガイドをもっと見る
            <span className="ml-5">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-white px-5 py-16 sm:px-8">
      <Decor name="decor-star-mint.png" className="left-[19%] top-10 w-7 opacity-65" />
      <SectionTitle title="よくあるご質問" />
      <div className="mx-auto mt-8 grid max-w-[1040px] gap-4 lg:grid-cols-2">
        {faqs.map(([q, a], index) => (
          <article key={q} className="rounded-[8px] border border-nemu-line bg-white shadow-[0_10px_24px_rgba(38,50,56,.04)]">
            <button className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-black text-nemu-ink" type="button" onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{q}</span>
              <span className={`text-lg text-nemu-teal transition ${open === index ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {open === index && <p className="animate-nemu-accordion px-6 pb-5 text-sm font-bold leading-7 text-nemu-ink/62">{a}</p>}
          </article>
        ))}
      </div>
      <div className="mx-auto mt-7 max-w-[620px] text-center">
        <p className="text-sm font-bold text-nemu-ink/62">ほかに質問がありますか？ サポートページで詳しくご案内しています。</p>
        <button className="mt-4 rounded-full border border-nemu-teal px-9 py-3 text-sm font-black text-nemu-teal" type="button" onClick={() => scrollTo("privacy")}>
          サポートを見る
        </button>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="relative overflow-hidden bg-[#fbfefa] px-5 py-8 sm:px-8">
      <div className="download-panel mx-auto grid max-w-[1160px] items-center gap-8 rounded-[8px] border border-nemu-line bg-white/78 p-5 shadow-[0_18px_44px_rgba(38,50,56,.045)] sm:p-7 lg:grid-cols-[.9fr_1.1fr_160px]">
        <div className="relative min-h-[180px] overflow-hidden rounded-[8px]">
          <img src={img("lp-download-photo-band.png")} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <img src={img("lp-app-icon.png")} alt="" className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-[22px] shadow-nemu" />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight text-nemu-ink">今夜の眠りを、今日から記録</h2>
          <p className="mt-4 text-sm font-bold leading-7 text-nemu-ink/62">NemuNoteをスマホに入れて、あなたに合う夜のリズムを見つけよう。</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <img src={img("lp-badge-app-store.png")} alt="App Storeからダウンロード" className="h-7 w-auto sm:h-8" />
            <img src={img("lp-badge-google-play.png")} alt="Google Playで手に入れよう" className="h-7 w-auto sm:h-8" />
          </div>
        </div>
        <img src={img("lp-qr-download-card.png")} alt="ダウンロード用QRコード" className="mx-auto w-[112px] rounded-[8px] border border-nemu-line bg-white p-1.5 shadow-nemu-soft sm:w-[128px]" />
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden bg-white px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-[1240px] items-center gap-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-2xl font-black text-nemu-ink">大切な睡眠データを、やさしく守る</h2>
          <p className="mt-3 text-sm font-bold leading-7 text-nemu-ink/62">あなたの記録は、あなたのために安全に管理されます。</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            ["icon-bell.png", "暗号化して保存"],
            ["icon-score-ring.png", "第三者提供なし"],
            ["decor-star-mint.png", "いつでも削除可能"],
            ["icon-privacy-shield.png", "連携管理"],
          ].map(([icon, text]) => (
            <div key={text} className="grid grid-cols-[40px_1fr] items-center gap-3 rounded-[8px] bg-[#fbfefa] p-3">
              <img src={img(icon)} alt="" className="size-9 object-contain" />
              <p className="text-xs font-black leading-5 text-nemu-ink/65">{text}</p>
            </div>
          ))}
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
        <Guide />
        <Faq />
        <Download />
        <Privacy />
      </main>
    </div>
  );
}
