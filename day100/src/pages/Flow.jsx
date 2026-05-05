import { assetsV2, ctaLabel } from "../data/siteData";
import { Badge, ButtonLink, FileTab, SmartImage } from "../components/UI";

const steps = [
  {
    number: "01",
    title: "実際の案内を出す",
    sub: "LINE公式・体験メニュー表・予約ページ",
    body: "きれいな資料は不要です。いま送っている初回LINE、体験メニュー表、STORES予約ページ、手書きメモから一緒に見ます。",
    image: "phone",
  },
  {
    number: "02",
    title: "予約までの順番に並べる",
    sub: "Instagramから体験予約まで",
    body: "Instagramで気になった人がLINEへ来て、体験枠を選び、予約確定するまでの順番に並べます。",
    image: "folders",
  },
  {
    number: "03",
    title: "使う文面に整える",
    sub: "初回返信・予約前案内・当日チェック",
    body: "長い説明を短く分け、体験内容、料金、予約URL、持ち物案内としてそのまま使える形へ整えます。",
    image: "clipboard",
  },
  {
    number: "04",
    title: "継続案内の分岐を決める",
    sub: "体験後・単発後・3ヶ月コース前",
    body: "全部を一度に変えず、体験後と単発後の次の選択肢を分けます。継続案内も無理な売り込みにしません。",
    image: "folder",
  },
];

function StepVisual({ type }) {
  const base = "min-h-[178px] rounded-[8px] border border-[#D3D9CC] bg-[#F8FAF4] p-4";

  if (type === "phone") {
    return (
      <div className={`${base} grid grid-cols-[0.8fr_1fr] gap-3`}>
        <div className="rounded-[18px] border-4 border-[#203D36] bg-[#EDF2E6] p-3">
          {["体験枠は...", "料金と所要時間は", "当日は5分前に"].map((text) => (
            <p key={text} className="mb-2 rounded-[8px] bg-white px-3 py-2 text-[11px] font-bold text-[#5C6861]">{text}</p>
          ))}
        </div>
        <div className="space-y-3">
          {["体験/単発", "継続コース"].map((label, index) => (
            <p key={label} className={`rounded-[4px] border border-[#D3D9CC] bg-white px-3 py-4 text-center text-xs font-bold text-[#203D36] shadow-[0_8px_24px_rgba(32,61,54,0.08)] ${index === 0 ? "-rotate-2" : "rotate-2 bg-[#F4EEF3]"}`}>
              {label}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (type === "folders") {
    return (
      <div className={`${base} flex flex-col justify-center gap-5`}>
        <div className="grid grid-cols-4 gap-2">
          {["Instagram", "初回LINE", "体験予約", "当日案内"].map((label, index) => (
            <div key={label} className={`min-h-[58px] rounded-t-[8px] border border-[#D3D9CC] px-2 py-3 text-center text-xs font-bold text-[#203D36] ${index % 2 ? "bg-[#F4EEF3]" : "bg-[#EDF2E6]"}`}>
              {label}
            </div>
          ))}
        </div>
        <div className="relative mx-3 h-px bg-[#203D36]">
          {["LINE", "体験", "当日", "継続"].map((label, index) => (
            <span
              key={label}
              className="absolute top-1/2 grid h-4 w-4 -translate-y-1/2 place-items-center rounded-full bg-[#203D36]"
              style={{ left: `${index * 32}%` }}
              aria-hidden="true"
            />
          ))}
          <span className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[10px] border-y-transparent border-l-[#203D36]" aria-hidden="true" />
        </div>
      </div>
    );
  }

  if (type === "clipboard") {
    return (
      <div className={`${base} grid place-items-center`}>
        <div className="rounded-[8px] border border-[#D3D9CC] bg-white p-5 shadow-[0_8px_24px_rgba(32,61,54,0.08)]">
          {["初回LINE", "予約前案内", "当日チェック"].map((label) => (
            <p key={label} className="mb-3 flex gap-2 text-sm font-bold text-[#203D36]">
              <span className="text-[#B7C957]" aria-hidden="true">✓</span>
              <span>{label}</span>
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${base} grid place-items-center`}>
      <div className="grid gap-3">
        <div className="rounded-[8px] bg-[#6E4F68] px-8 py-6 text-center font-bold text-white">3ヶ月コース</div>
        <div className="rounded-[8px] border border-[#D3D9CC] bg-white px-5 py-3 text-center text-sm font-bold text-[#203D36]">案内するタイミング</div>
      </div>
    </div>
  );
}

export default function Flow() {
  return (
    <main className="paper-bg">
      <section className="site-container grid gap-10 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-16">
        <div>
          <Badge tone="lime">受付導線のカルテ棚</Badge>
          <h1 className="mt-5 text-balance font-serif text-[clamp(42px,7vw,76px)] font-bold leading-[1.08] text-[#203D36]">
            LINEの長文から、<br />体験予約の道筋が見えるまで。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#17231F]">
            いま使っている初回LINE、体験メニュー表、STORES予約、Googleカレンダーの状態から、予約前後の渡し方を一緒に整理します。
          </p>
          <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-3">
            {["初回LINE", "体験/単発料金", "予約ページ"].map((label) => (
              <span key={label} className="rounded-[8px] border border-[#D3D9CC] bg-white px-4 py-3 text-sm font-bold text-[#203D36] shadow-[0_8px_24px_rgba(32,61,54,0.08)]">
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-[0.8fr_1fr] md:items-center">
          <div className="rounded-[8px] border border-[#D3D9CC] bg-white p-5 shadow-[0_8px_24px_rgba(32,61,54,0.08)]">
            <FileTab tone="green">受付導線のカルテ棚</FileTab>
            <div className="mt-5 space-y-3">
              {["初回LINE", "体験/単発料金", "予約ページ"].map((label, index) => (
                <div
                  key={label}
                  className={`rounded-[4px] border border-[#D3D9CC] bg-white px-4 py-3 text-sm font-bold text-[#203D36] shadow-[0_8px_24px_rgba(32,61,54,0.08)] ${index === 0 ? "-rotate-1" : index === 2 ? "rotate-1" : ""}`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <SmartImage asset={assetsV2.receptionFileBox} alt="" className="mx-auto max-h-[300px] w-full object-contain" loading="eager" />
        </div>
      </section>

      <section className="border-y border-[#D3D9CC] bg-white/78 py-14">
        <div className="site-container">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold text-[#6E4F68]">ご利用の流れ</p>
              <h2 className="mt-2 font-serif text-[clamp(30px,4vw,48px)] font-bold leading-tight text-[#203D36]">
                お客さまが予約まで迷う順番を、実際の画面に沿って見える化します。
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#5C6861]">
              メモを整えるだけで終わらせず、初回LINEから当日案内、継続コースの案内までの渡し方に落とし込みます。
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="relative">
                <div className="mb-4 flex items-center gap-4">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-xl font-bold ${index % 3 === 1 ? "bg-[#B7C957] text-[#203D36]" : "bg-[#6E4F68] text-white"}`}>
                    {step.number}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-[#203D36]">{step.title}</h2>
                    <p className="text-sm font-bold text-[#5C6861]">{step.sub}</p>
                  </div>
                </div>
                {index < steps.length - 1 ? (
                  <span className="absolute left-[70px] top-7 hidden h-px w-[calc(100%-40px)] border-t border-dashed border-[#5C6861] lg:block" aria-hidden="true" />
                ) : null}
                <StepVisual type={step.image} />
                <p className="mt-4 text-sm leading-7 text-[#5C6861]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container pb-16 pt-12">
        <div className="grid gap-6 rounded-[8px] border border-[#D3D9CC] bg-white p-6 shadow-[0_8px_24px_rgba(32,61,54,0.08)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-bold text-[#203D36]">まずは30分、今のLINEと予約ページを一緒にほどきましょう。</h2>
            <p className="mt-3 text-sm leading-7 text-[#5C6861]">オンラインで画面を見ながら確認できます。継続コースの強い売り込みは前提にしません。</p>
          </div>
          <ButtonLink href="#contact">{ctaLabel}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
