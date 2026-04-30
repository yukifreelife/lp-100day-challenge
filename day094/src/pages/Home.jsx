import React from "react";

const trustBadges = [
  "家族・オフィスに選ばれています",
  "防災の専門家と共同監修",
  "管理がラクで続けやすい",
  "安心のサポート体制",
];

const featureCards = [
  {
    icon: "✓",
    title: "備蓄チェック",
    text: "家族構成と住まいに合わせて不足を可視化。",
  },
  {
    icon: "□",
    title: "期限リマインド",
    text: "賞味期限や交換時期をアプリでお知らせ。",
  },
  {
    icon: "→",
    title: "定期お届け",
    text: "必要な量だけ、無理なく補充できます。",
  },
];

const steps = [
  {
    number: "1",
    title: "備蓄をチェック",
    body: "家族構成やオフィスの状況に合わせて、必要な備蓄を診断。",
    image: "/assets/images/checklist-dashboard-panel.png",
  },
  {
    number: "2",
    title: "期限を自動でお知らせ",
    body: "賞味期限・使用期限を登録すると、アプリやメールでお知らせ。",
    image: "/assets/images/mobile-app-screens.png",
  },
  {
    number: "3",
    title: "定期でお届け・入れ替え",
    body: "必要なものを定期でお届け。ムリなく備蓄をキープ。",
    image: "/assets/images/product-box-cutout.png",
  },
];

const plans = [
  {
    title: "家族プラン",
    description: "ご家族の人数や年齢に合わせて、必要な備蓄をセットでお届け。",
    image: "/assets/images/family-checking-kit.png",
    price: "4,980",
    tags: ["2人用〜", "3ヶ月に1回お届け", "送料無料"],
    route: "plans",
  },
  {
    title: "オフィスプラン",
    description: "人数やオフィス環境に合わせて、必要な備蓄をまとめてサポート。",
    image: "/assets/images/office-shelf-kit.png",
    price: "9,800",
    tags: ["10名〜", "6ヶ月に1回お届け", "送料無料"],
    route: "business",
  },
];

const listBenefits = [
  "賞味期限の近いものがすぐわかる",
  "家族やメンバーと共有できる",
  "足りないものはワンタップで追加",
];

function OptimizedImage({ src, alt, ...props }) {
  const webpSrc = src.endsWith(".png") ? src.replace(/\.png$/, ".webp") : src;
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={webpSrc} alt={alt} {...props} />
    </picture>
  );
}

function NavigateButton({ onNavigate, route = "diagnosis", children, className = "" }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate?.(route)}
      className={`inline-flex items-center justify-center gap-3 rounded-[10px] bg-[#2F7F88] px-7 py-4 font-bold text-white shadow-[0_16px_34px_rgba(47,127,136,0.24)] transition hover:-translate-y-0.5 hover:bg-[#1F5F68] ${className}`}
    >
      <span className="text-xl">▧</span>
      {children}
      <span className="text-2xl leading-none">›</span>
    </button>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mx-auto mb-4 w-fit rounded-full border border-[#BBDCD8] bg-[#E7F6F1] px-5 py-1.5 text-sm font-bold text-[#2F7F88]">
      {children}
    </div>
  );
}

export default function Home({ onNavigate }) {
  return (
    <div className="overflow-hidden bg-white text-[#1F2A2E]">
      <section className="relative border-b border-[#DCE8E5] bg-[#F7FBF9] md:min-h-[680px] lg:min-h-[720px]">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden lg:block">
          <OptimizedImage
            src="/assets/images/hero-home-shelf.png"
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#F7FBF9] to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-10 pt-10 sm:px-8 md:grid-cols-[0.84fr_1.16fr] md:items-center md:pb-14 md:pt-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:pb-16 lg:pt-20">
          <div className="reveal z-10 flex flex-col justify-center">
            <p className="mb-5 w-fit rounded-full border border-[#BBDCD8] bg-white px-4 py-2 text-sm font-bold text-[#2F7F88]">
              家族に合わせた防災備蓄を、期限管理までおまかせ。
            </p>
            <h1 className="text-[42px] font-black leading-[1.18] tracking-normal text-[#222B2F] sm:text-[52px] md:text-[44px] lg:text-[68px]">
              <span className="inline-block whitespace-nowrap">備えを、</span>
              <br />
              <span className="inline-block whitespace-nowrap sm:inline">いつもの</span>
              <br className="sm:hidden" />
              <span className="inline-block whitespace-nowrap">暮らしに。</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg font-bold leading-[1.9] text-[#2F3A3E] sm:text-xl md:text-lg lg:text-xl">
              家族に合わせた防災備蓄を、
              <br className="hidden sm:block" />
              期限管理までおまかせ。
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3 md:gap-3 lg:gap-4">
              {featureCards.map((feature) => (
                <div
                  key={feature.title}
                  className="card-hover rounded-[12px] border border-[#CFE3DF] bg-white p-5 text-center shadow-[0_12px_28px_rgba(31,42,46,0.05)] md:p-4 lg:p-5"
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#BBDCD8] text-3xl font-bold text-[#2F7F88]">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-[#2F7F88]">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#66777A]">{feature.text}</p>
                </div>
              ))}
            </div>

            <NavigateButton onNavigate={onNavigate} className="mt-7 w-full max-w-[490px] text-lg sm:text-xl">
              無料で備蓄診断
            </NavigateButton>
            <p className="mt-4 flex items-center gap-2 text-sm font-bold text-[#66777A]">
              <span className="text-[#2F7F88]">♢</span>
              入力は約3分・登録不要で診断できます
            </p>
          </div>

          <div className="reveal relative min-h-[360px] md:min-h-[500px] lg:min-h-[620px]">
            <OptimizedImage
              src="/assets/images/hero-home-shelf.png"
              alt="SONAE BOX の備蓄セットが棚に置かれている様子"
              loading="eager"
              decoding="async"
              className="h-full min-h-[360px] w-full rounded-[18px] object-cover object-center shadow-[0_24px_58px_rgba(31,95,104,0.12)] md:min-h-[500px] md:rounded-l-[28px] md:rounded-r-none lg:hidden"
            />
            <div className="float-soft absolute bottom-6 right-4 rounded-[14px] border border-[#F1D6A2] bg-white/95 px-7 py-5 text-center shadow-[0_16px_38px_rgba(31,42,46,0.14)] sm:right-10 lg:bottom-14 lg:right-2">
              <p className="text-xs font-bold text-[#66777A]">累計お届け実績</p>
              <p className="text-3xl font-black text-[#2F7F88]">
                120,000<span className="text-base">箱</span>
              </p>
              <p className="text-[11px] font-bold text-[#66777A]">※2024年12月時点</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mb-[-28px] max-w-6xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[12px] border border-[#CFE3DF] bg-white shadow-[0_14px_38px_rgba(31,95,104,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-3 border-[#E5EFED] px-6 py-5 text-sm font-bold text-[#2F7F88] lg:border-r last:lg:border-r-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F6F1]">♡</span>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 pt-24 sm:px-8 lg:pb-20">
        <SectionLabel>使い方はかんたん3ステップ</SectionLabel>
        <h2 className="reveal text-center text-3xl font-black tracking-normal sm:text-4xl">SONAE BOX のしくみ</h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-7 lg:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="reveal text-center">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#2F7F88] text-lg font-black text-white">
                {step.number}
              </div>
              <h3 className="text-xl font-black">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-[310px] text-sm font-medium leading-[1.8] text-[#66777A]">{step.body}</p>
              <div className="mt-7 flex h-[250px] items-end justify-center rounded-[18px] bg-gradient-to-b from-white to-[#F6FAF8]">
                <OptimizedImage src={step.image} alt={`${step.title}の画面イメージ`} loading="lazy" decoding="async" className="max-h-[235px] max-w-full object-contain drop-shadow-xl" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F6FAF8] px-5 py-16 sm:px-8 lg:py-20">
        <SectionLabel>選べる2つのプラン</SectionLabel>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className="card-hover reveal grid gap-6 rounded-[14px] border border-[#BBDCD8] bg-white p-4 shadow-[0_16px_36px_rgba(31,95,104,0.08)] sm:grid-cols-[0.92fr_1.08fr]"
            >
              <OptimizedImage src={plan.image} alt={`${plan.title}の備蓄キット`} loading="lazy" decoding="async" className="h-full min-h-[260px] w-full rounded-[10px] object-cover" />
              <div className="flex flex-col justify-center p-3 sm:p-4">
                <h3 className="text-3xl font-black text-[#2F7F88]">{plan.title}</h3>
                <p className="mt-4 text-sm font-medium leading-[1.9] text-[#526568]">{plan.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {plan.tags.map((tag) => (
                    <span key={tag} className="rounded-[6px] bg-[#E7F6F1] px-3 py-1.5 text-xs font-bold text-[#2F7F88]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-bold">
                  月額 <span className="text-4xl font-black tracking-normal text-[#2F3A3E]">{plan.price}</span>円〜（税込）
                </p>
                <NavigateButton onNavigate={onNavigate} route={plan.route} className="mt-5 w-full py-3 text-base">
                  詳細を見る
                </NavigateButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="reveal">
            <SectionLabel>アプリでかんたん管理</SectionLabel>
            <h2 className="text-3xl font-black leading-[1.45] sm:text-4xl">備蓄リストをひと目で確認</h2>
            <p className="mt-5 text-base font-medium leading-[1.9] text-[#526568]">
              何がどれだけあるか、いつまでに使うかを一覧で確認できます。
            </p>
            <ul className="mt-7 space-y-4">
              {listBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 font-bold text-[#2F3A3E]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2F7F88] text-xs text-white">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal relative rounded-[18px] border border-[#DCE8E5] bg-[#F8FCFA] p-5 shadow-[0_18px_42px_rgba(31,95,104,0.08)]">
            <OptimizedImage
              src="/assets/images/checklist-dashboard-panel.png"
              alt="備蓄リストの管理画面"
              loading="lazy"
              decoding="async"
              className="w-full rounded-[12px] object-contain"
            />
            <OptimizedImage
              src="/assets/images/mobile-app-screens.png"
              alt=""
              loading="lazy"
              decoding="async"
              className="float-soft absolute -bottom-7 right-2 hidden w-[28%] max-w-[190px] drop-shadow-2xl sm:block"
            />
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-8 lg:pb-14">
        <div className="reveal mx-auto grid max-w-6xl overflow-hidden rounded-[14px] border border-[#BBDCD8] bg-[#F6FAF8] shadow-[0_18px_44px_rgba(31,95,104,0.08)] lg:grid-cols-[0.28fr_0.44fr_0.28fr]">
          <div className="flex items-center justify-center bg-white p-8">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#BBDCD8] bg-[#E7F6F1] text-5xl text-[#2F7F88]">
              ☎
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 text-center lg:text-left">
            <h2 className="text-2xl font-black sm:text-3xl">まずは、わが家・オフィスの備えをチェック！</h2>
            <p className="mt-3 text-sm font-medium leading-[1.8] text-[#526568]">
              登録不要・無料で、あなたに合った備蓄プランをご提案します。
            </p>
            <NavigateButton onNavigate={onNavigate} className="mx-auto mt-6 w-full max-w-[460px] lg:mx-0">
              無料で備蓄診断
            </NavigateButton>
          </div>
          <OptimizedImage
            src="/assets/images/family-checking-kit.png"
            alt="家族で防災備蓄キットを確認している様子"
            loading="lazy"
            decoding="async"
            className="h-full min-h-[220px] w-full object-cover"
          />
          <div className="col-span-full grid border-t border-[#BBDCD8] bg-white sm:grid-cols-4">
            {["3分で完了", "登録不要", "しつこい営業なし", "すぐに結果がわかる"].map((item) => (
              <div key={item} className="flex items-center justify-center gap-3 border-[#E5EFED] px-5 py-4 text-sm font-bold text-[#2F7F88] sm:border-r last:sm:border-r-0">
                <span>◷</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
