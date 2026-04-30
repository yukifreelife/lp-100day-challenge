import { useEffect, useMemo, useState } from "react";

const assetBase = `${import.meta.env.BASE_URL}assets/`;

const navItems = [
  { href: "#diagnosis", label: "診断" },
  { href: "#roadmap", label: "学習設計" },
  { href: "#courses", label: "コース" },
  { href: "#results", label: "成果" },
  { href: "#faq", label: "FAQ" },
];

const stats = [
  { value: "3分", label: "無料診断" },
  { value: "12週", label: "実務課題" },
  { value: "92%", label: "継続率" },
];

const problems = [
  {
    icon: "route",
    title: "AIを学びたいが、何から始めるべきか決められない",
    text: "職種・経験・目標によって必要な学習順は変わります。最初に迷う時間を減らします。",
  },
  {
    icon: "craft",
    title: "動画を見ても、仕事で使える形まで落とし込めない",
    text: "MiraSkill AIは、営業資料、分析、企画、業務自動化など実務提出物に接続します。",
  },
  {
    icon: "portfolio",
    title: "転職や副業に向けた証明材料が残らない",
    text: "毎週の成果物をポートフォリオとして整理し、面談や提案で話せる状態へ整えます。",
  },
];

const roadmap = [
  {
    week: "Week 1-2",
    title: "AIリテラシーと業務棚卸し",
    text: "使えるAI、使わないAI、任せてよい業務を整理し、日々の仕事から改善テーマを選びます。",
  },
  {
    week: "Week 3-6",
    title: "プロンプト設計と資料生成",
    text: "調査、構成、要約、提案書、FAQ、議事録を題材に、再現できる型を身につけます。",
  },
  {
    week: "Week 7-10",
    title: "業務自動化とデータ活用",
    text: "スプレッドシート、フォーム、社内ナレッジを組み合わせ、定型業務の短縮案を作ります。",
  },
  {
    week: "Week 11-12",
    title: "成果物レビューとキャリア接続",
    text: "実務ポートフォリオ、職務経歴への落とし込み、副業提案文までレビューします。",
  },
];

const courses = [
  {
    name: "Starter",
    price: "0円",
    caption: "まず診断だけ試す",
    features: ["AI適性診断", "学習タイプ判定", "おすすめ講座提案"],
    cta: "無料診断へ",
  },
  {
    name: "Reskill",
    price: "24,800円/月",
    caption: "仕事で使うAIを身につける",
    features: ["週1メンタリング", "12週ロードマップ", "実務課題レビュー", "質問チャット"],
    cta: "学習計画を見る",
    featured: true,
  },
  {
    name: "Career",
    price: "44,800円/月",
    caption: "転職・副業まで接続する",
    features: ["個別キャリア面談", "ポートフォリオ添削", "職務経歴書のAI活用", "提案文レビュー"],
    cta: "相談する",
  },
];

const voices = [
  {
    name: "営業企画 / 34歳",
    result: "提案資料の初稿作成が週4時間短縮",
    text: "AIの使い方だけでなく、上司に出せる成果物まで見てもらえるのが大きかったです。",
  },
  {
    name: "バックオフィス / 41歳",
    result: "月次集計の確認フローを自動化",
    text: "専門用語が少なく、現場の業務から逆算してくれるので続けやすかったです。",
  },
  {
    name: "Web担当 / 29歳",
    result: "副業提案用の制作プロセスを整理",
    text: "学んだことをポートフォリオに残せたので、面談で説明しやすくなりました。",
  },
];

const faqs = [
  {
    q: "プログラミング経験がなくても受けられますか？",
    a: "受講できます。診断結果に応じて、まずは検索、要約、資料作成など非エンジニア向けのAI活用から始めます。",
  },
  {
    q: "忙しくても続けられますか？",
    a: "週3時間から進めるロードマップを用意します。毎週の提出物は、実際の仕事に使える小さな成果物に絞ります。",
  },
  {
    q: "会社で使ってよいか不安です。",
    a: "機密情報を入れない運用、社内承認の取り方、利用ルールの整理まで扱います。安全に使う前提を最初に確認します。",
  },
  {
    q: "無料診断後に営業連絡はありますか？",
    a: "診断結果と希望に応じた案内のみ行います。不要な場合は診断後の画面から案内停止を選べます。",
  },
];

const diagnosisProfiles = {
  efficiency: {
    label: "業務効率化",
    score: 82,
    track: "AI Work Booster",
    advice: "資料作成、要約、議事録、問い合わせ対応など、日々の定型業務から短縮効果を出しやすいタイプです。",
  },
  career: {
    label: "転職準備",
    score: 76,
    track: "AI Career Builder",
    advice: "職務経歴の整理、成果物の可視化、面談で話せるAI活用事例づくりから始めると効果的です。",
  },
  sidework: {
    label: "副業準備",
    score: 79,
    track: "AI Side Project",
    advice: "リサーチ、構成、提案文、納品資料の型化に向いています。小さな受託案件を想定して学習します。",
  },
};

function BrandGlyph({ name, className = "h-16 w-16" }) {
  const accent = {
    route: "#168466",
    craft: "#F4B740",
    portfolio: "#54B9C6",
    mentor: "#168466",
  }[name] ?? "#168466";

  return (
    <svg className={className} viewBox="0 0 96 96" aria-hidden="true" fill="none">
      <rect x="6" y="6" width="84" height="84" rx="18" fill="#FFFFFF" />
      <rect x="6" y="6" width="84" height="84" rx="18" stroke="#DCE9E5" strokeWidth="2" />
      {name === "route" && (
        <>
          <path d="M24 66C40 32 58 28 74 44" stroke={accent} strokeWidth="8" strokeLinecap="round" />
          <circle cx="24" cy="66" r="8" fill="#DFF4EC" stroke={accent} strokeWidth="4" />
          <circle cx="74" cy="44" r="8" fill="#FFF3D1" stroke="#F4B740" strokeWidth="4" />
          <path d="M48 54L56 46L64 54" stroke="#172126" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {name === "craft" && (
        <>
          <rect x="24" y="28" width="48" height="38" rx="10" fill="#FFF3D1" stroke={accent} strokeWidth="5" />
          <path d="M34 42H62M34 54H52" stroke="#172126" strokeWidth="5" strokeLinecap="round" />
          <path d="M68 24L76 18M72 36H84M64 18L62 10" stroke="#168466" strokeWidth="5" strokeLinecap="round" />
        </>
      )}
      {name === "portfolio" && (
        <>
          <rect x="24" y="30" width="48" height="38" rx="8" fill="#E3F8FB" stroke={accent} strokeWidth="5" />
          <path d="M36 30V24H60V30" stroke="#172126" strokeWidth="5" strokeLinecap="round" />
          <path d="M34 48H62M34 58H54" stroke="#172126" strokeWidth="5" strokeLinecap="round" />
          <circle cx="68" cy="28" r="8" fill="#F4B740" />
        </>
      )}
      {name === "mentor" && (
        <>
          <circle cx="38" cy="36" r="12" fill="#D6A078" />
          <path d="M22 72C26 56 34 50 48 50C62 50 70 56 74 72" fill="#DFF4EC" stroke={accent} strokeWidth="5" strokeLinecap="round" />
          <path d="M58 30H76M58 42H70" stroke="#172126" strokeWidth="5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function Icon({ name, className = "h-5 w-5" }) {
  const paths = {
    spark: "M12 2l1.9 5.6L20 10l-6.1 2.4L12 18l-1.9-5.6L4 10l6.1-2.4L12 2z",
    check: "M5 12.5l4.2 4.2L19 6.8",
    arrow: "M5 12h14m-5-5 5 5-5 5",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "M6 6l12 12M18 6L6 18",
  };

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold text-mira-green">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-mira-ink md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-mira-slate md:text-lg">{lead}</p>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mira-line bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="MiraSkill AI トップへ">
          <span className="grid h-11 w-11 place-items-center rounded-mira bg-mira-ink text-white">
            <Icon name="spark" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-lg font-black text-mira-ink">MiraSkill AI</span>
            <span className="block text-xs font-bold text-mira-green">Reskilling for work</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-mira-slate md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-mira-green">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#diagnosis"
            className="inline-flex items-center gap-2 rounded-mira bg-mira-green px-5 py-3 text-sm font-black text-white shadow-mira-cta"
          >
            無料診断 <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-mira border border-mira-line text-mira-ink md:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-mira-line bg-white px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-mira px-3 py-3 text-sm font-bold text-mira-slate hover:bg-mira-cloud"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#diagnosis"
              className="mt-2 rounded-mira bg-mira-green px-4 py-3 text-center text-sm font-black text-white"
              onClick={() => setOpen(false)}
            >
              無料AI適性診断へ
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-band section-grid pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:pb-24">
        <div className="reveal">
          <p className="inline-flex rounded-mira border border-mira-line bg-white px-4 py-2 text-sm font-black text-mira-green shadow-mira-soft">
            社会人のAIリスキリングを、診断から始める
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight text-mira-ink md:text-6xl">
            仕事で使えるAI力を、あなた専用の学習順で。
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-mira-slate">
            MiraSkill AIは、職種・目標・使える時間をもとに無料AI適性診断を行い、業務効率化、副業、転職に向けた12週間の学習ロードマップを提案します。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#diagnosis"
              className="inline-flex items-center justify-center gap-2 rounded-mira bg-mira-green px-6 py-4 text-base font-black text-white shadow-mira-cta"
            >
              無料AI適性診断を受ける <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center justify-center rounded-mira border border-mira-line bg-white px-6 py-4 text-base font-black text-mira-ink"
            >
              学習ロードマップを見る
            </a>
          </div>
          <div className="mt-8 grid max-w-lg grid-cols-3 divide-x divide-mira-line overflow-hidden rounded-mira border border-mira-line bg-white shadow-mira-soft">
            {stats.map((item) => (
              <div key={item.label} className="px-4 py-4 text-center">
                <p className="text-2xl font-black text-mira-ink">{item.value}</p>
                <p className="mt-1 text-xs font-bold text-mira-slate">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal md:pl-4">
          <div className="relative">
            <img
              src={`${assetBase}hero-learning-lab-rich.svg`}
              alt="社会人がAI診断ダッシュボードを見ながら学習ロードマップを整理するMiraSkill AIのヒーロービジュアル"
              width="1536"
              height="1120"
              className="w-full rounded-mira border border-mira-line bg-white shadow-mira-soft"
              loading="eager"
              decoding="async"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-mira border border-mira-line bg-white/94 p-4 shadow-mira-lift backdrop-blur sm:left-auto sm:right-6 sm:w-72">
              <p className="text-xs font-black text-mira-green">TODAY'S NEXT ACTION</p>
              <p className="mt-2 text-sm font-black text-mira-ink">
                明日の会議資料をAIでたたき台化
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-mira-mint">
                <div className="h-full w-4/5 rounded-full bg-mira-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="bg-white py-18 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="PROBLEM"
          title="AI学習が続かない理由を、最初にほどく。"
          lead="社会人の学習は、目的が曖昧なまま講座を選ぶほど挫折しやすくなります。MiraSkill AIは、学習前の診断で現在地と最短ルートを可視化します。"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((item, index) => (
            <article
              key={item.title}
              className="reveal card-lift overflow-hidden rounded-mira border border-mira-line bg-mira-cloud p-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <BrandGlyph name={item.icon} />
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-mira-green">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-black leading-8 text-mira-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-mira-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diagnosis() {
  const [profile, setProfile] = useState("efficiency");
  const [hours, setHours] = useState("3-5");
  const [submitted, setSubmitted] = useState(false);
  const result = diagnosisProfiles[profile];
  const adjustedScore = useMemo(() => {
    const bonus = hours === "6+" ? 8 : hours === "3-5" ? 4 : 0;
    return Math.min(result.score + bonus, 96);
  }, [hours, result.score]);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="diagnosis" className="section-grid bg-mira-cloud py-18 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[0.92fr_1.08fr] md:px-8">
        <div className="reveal">
          <p className="text-sm font-black text-mira-green">FREE DIAGNOSIS</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-mira-ink md:text-5xl">
            3分で、あなたのAI学習タイプを判定。
          </h2>
          <p className="mt-5 text-base leading-8 text-mira-slate md:text-lg">
            目的と学習時間を選ぶだけで、最初に学ぶべき領域、12週間の推奨トラック、今週やるべき小さな課題を表示します。
          </p>
          <img
            src={`${assetBase}diagnosis-dashboard-rich.svg`}
            alt="AI適性診断結果、スキルマップ、12週間ロードマップ、メンターコメントを表示する診断ダッシュボード"
            width="1120"
            height="820"
            className="mt-8 rounded-mira border border-mira-line bg-white shadow-mira-soft"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="reveal rounded-mira border border-mira-line bg-white p-5 shadow-mira-soft md:p-7">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label htmlFor="goal" className="text-sm font-black text-mira-ink">
                AIを学ぶ目的
              </label>
              <select
                id="goal"
                value={profile}
                onChange={(event) => setProfile(event.target.value)}
                className="mt-2 w-full rounded-mira border border-mira-line bg-white px-4 py-3 text-mira-ink"
              >
                <option value="efficiency">今の仕事を効率化したい</option>
                <option value="career">転職に使えるスキルにしたい</option>
                <option value="sidework">副業や受託に活かしたい</option>
              </select>
            </div>

            <div>
              <label htmlFor="hours" className="text-sm font-black text-mira-ink">
                週に使える学習時間
              </label>
              <select
                id="hours"
                value={hours}
                onChange={(event) => setHours(event.target.value)}
                className="mt-2 w-full rounded-mira border border-mira-line bg-white px-4 py-3 text-mira-ink"
              >
                <option value="1-2">1〜2時間</option>
                <option value="3-5">3〜5時間</option>
                <option value="6+">6時間以上</option>
              </select>
            </div>

            <div>
              <label htmlFor="role" className="text-sm font-black text-mira-ink">
                現在の職種
              </label>
              <input
                id="role"
                name="role"
                type="text"
                placeholder="例: 営業企画、総務、Web担当"
                className="mt-2 w-full rounded-mira border border-mira-line bg-white px-4 py-3 text-mira-ink placeholder:text-mira-slate"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-mira bg-mira-green px-6 py-4 font-black text-white shadow-mira-cta"
            >
              診断結果を表示 <Icon name="arrow" className="h-5 w-5" />
            </button>
          </form>

          <div
            className="mt-6 rounded-mira border border-mira-line bg-mira-cloud p-5"
            aria-live="polite"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black text-mira-green">AI READY SCORE</p>
                <p className="mt-2 text-4xl font-black text-mira-ink">{adjustedScore}</p>
              </div>
              <span className="rounded-mira bg-white px-3 py-2 text-xs font-black text-mira-green">
                {result.label}
              </span>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
              <div
                className="meter-fill h-full rounded-full bg-mira-green"
                style={{ "--meter-width": `${adjustedScore}%`, width: `${adjustedScore}%` }}
              />
            </div>
            <h3 className="mt-5 text-xl font-black text-mira-ink">{result.track}</h3>
            <p className="mt-3 text-sm leading-7 text-mira-slate">{result.advice}</p>
            {submitted && (
              <p className="mt-4 rounded-mira bg-white px-4 py-3 text-sm font-bold text-mira-ink">
                診断デモを生成しました。実案件ではここにメール送信、CRM連携、GA4 CVイベントを接続します。
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="bg-white py-18 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="ROADMAP"
          title="12週間で、AIを仕事の手順に組み込む。"
          lead="知識のインプットだけで終わらせず、毎週の成果物を残す設計です。"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {roadmap.map((item) => (
            <article key={item.week} className="reveal rounded-mira border border-mira-line bg-white p-6 shadow-mira-soft">
              <p className="text-sm font-black text-mira-green">{item.week}</p>
              <h3 className="mt-3 text-lg font-black leading-7 text-mira-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-mira-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="bg-mira-cloud py-18 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="COURSE"
          title="診断だけでも、伴走つきでも選べる。"
          lead="最初の一歩は無料。必要に応じて、仕事・キャリアに接続する伴走プランへ進めます。"
        />
        <img
          src={`${assetBase}course-path-cards-rich.svg`}
          alt="仕事効率化、キャリア形成、副業準備の3つのAI学習パスを表す質感のある講座カード"
          width="1120"
          height="760"
          className="reveal mx-auto mt-10 max-h-[420px] w-full max-w-5xl rounded-mira border border-mira-line bg-white object-contain shadow-mira-soft"
          loading="lazy"
          decoding="async"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.name}
              className={`reveal card-lift rounded-mira border p-6 ${
                course.featured
                  ? "border-mira-green bg-mira-ink text-white shadow-mira-lift"
                  : "border-mira-line bg-white text-mira-ink shadow-mira-soft"
              }`}
            >
              {course.featured && (
                <p className="mb-4 inline-flex rounded-mira bg-mira-amber px-3 py-1 text-xs font-black text-mira-ink">
                  人気
                </p>
              )}
              <h3 className="text-2xl font-black">{course.name}</h3>
              <p className={`mt-2 text-sm font-bold ${course.featured ? "text-white/75" : "text-mira-slate"}`}>
                {course.caption}
              </p>
              <p className="mt-6 text-3xl font-black">{course.price}</p>
              <ul className="mt-6 grid gap-3">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-bold">
                    <span
                      className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${
                        course.featured ? "bg-mira-green text-white" : "bg-mira-mint text-mira-green"
                      }`}
                    >
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#diagnosis"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-mira px-5 py-4 text-sm font-black ${
                  course.featured ? "bg-white text-mira-ink" : "bg-mira-green text-white"
                }`}
              >
                {course.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="bg-white py-18 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="reveal">
            <p className="text-sm font-black text-mira-green">RESULTS</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-mira-ink md:text-4xl">
              学びを「説明できる成果」に変える。
            </h2>
            <p className="mt-5 text-base leading-8 text-mira-slate">
              講座で作る成果物は、業務改善レポート、AI活用手順書、提案書、ポートフォリオとして整理します。学習後に何ができるようになったかを伝えやすくします。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-mira border border-mira-line bg-mira-cloud p-5">
                <p className="text-3xl font-black text-mira-ink">4.6h</p>
                <p className="mt-1 text-sm font-bold text-mira-slate">週平均の業務短縮例</p>
              </div>
              <div className="rounded-mira border border-mira-line bg-mira-cloud p-5">
                <p className="text-3xl font-black text-mira-ink">8本</p>
                <p className="mt-1 text-sm font-bold text-mira-slate">提出できる成果物</p>
              </div>
            </div>
            <img
              src={`${assetBase}learner-story-rich.svg`}
              alt="メンターと受講者がAIで作成した業務成果物を確認する学習シーン"
              width="1120"
              height="760"
              className="mt-8 rounded-mira border border-mira-line bg-white shadow-mira-soft"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid gap-5">
            {voices.map((voice) => (
              <article key={voice.name} className="reveal rounded-mira border border-mira-line bg-mira-cloud p-6">
                <p className="text-sm font-black text-mira-green">{voice.name}</p>
                <h3 className="mt-2 text-xl font-black text-mira-ink">{voice.result}</h3>
                <p className="mt-3 text-sm leading-7 text-mira-slate">{voice.text}</p>
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
    <section id="faq" className="bg-mira-cloud py-18 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="不安を残さず、診断へ進める。"
          lead="受講前によくある疑問をまとめました。"
        />
        <div className="mt-10 grid gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.q} className="rounded-mira border border-mira-line bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-black text-mira-ink">{item.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-mira bg-mira-mint text-mira-green">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p id={`faq-${index}`} className="px-5 pb-5 text-sm leading-7 text-mira-slate">
                    {item.a}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-mira-ink py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-8">
        <div>
          <p className="text-sm font-black text-mira-amber">START NOW</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
            まずは、あなたに必要なAI学習だけを知る。
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
            無料診断はデモフォームで完結します。実案件ではメール通知、CRM登録、GA4 CV計測に接続できます。
          </p>
        </div>
        <a
          href="#diagnosis"
          className="inline-flex items-center justify-center gap-2 rounded-mira bg-white px-7 py-4 text-base font-black text-mira-ink"
        >
          無料診断を始める <Icon name="arrow" className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="legal" className="border-t border-mira-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] md:px-8">
        <div>
          <p className="text-lg font-black text-mira-ink">MiraSkill AI</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-mira-slate">
            社会人向けAIリスキリング講座の架空LPです。フォーム送信、料金、実績数値はポートフォリオ用のデモとして設計しています。
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm font-bold text-mira-slate" aria-label="法務リンク">
          <a href="#legal" className="hover:text-mira-green">
            プライバシーポリシー
          </a>
          <a href="#legal" className="hover:text-mira-green">
            利用規約
          </a>
          <a href="#legal" className="hover:text-mira-green">
            特定商取引法表記
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Diagnosis />
        <Roadmap />
        <Courses />
        <Results />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
