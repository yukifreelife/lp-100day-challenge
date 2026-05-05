import { assetsV2, processSteps } from "../data/siteData";
import { Accordion, Badge, ButtonLink, Card, ContactFormShell, FileTab, RouteLine, SectionHeader, SmartImage } from "../components/UI";

const consultationBenefits = [
  ["詰まりの場所", "初回LINE、体験メニュー、予約ページ、当日案内のどこで止まっているかを確認します。"],
  ["最初に直す文面", "体験予約の初回返信や予約前案内など、先に整えると楽になる文面を見つけます。"],
  ["整える順番", "今すぐ直すもの、正式確認後にLINEへ入れるもの、後で見直すものを分けます。"],
];

const reassurance = [
  "相談前の準備は不要",
  "売り込みなし",
  "初回LINEだけでもOK",
  "料金・キャンセル条件は正式確認後",
];

const contactFaq = [
  {
    question: "メモやスクリーンショットだけでも送れますか？",
    answer: "送れます。きれいにまとめる前のLINE文面、Instagramのメニュー投稿、予約URL、当日案内メモから一緒に見ていきます。",
  },
  {
    question: "相談後に申し込まなくても大丈夫ですか？",
    answer: "大丈夫です。無料診断では、現状と次に整える場所を確認することを優先します。",
  },
  {
    question: "料金条件がまだ決まっていません。",
    answer: "決まっていることと要確認のことを分けます。正式に確認してから初回LINEや当日案内へ反映します。",
  },
];

export default function Contact() {
  return (
    <main className="paper-bg">
      <section className="site-container grid gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center md:py-16">
        <div>
          <Badge tone="lime">無料30分 受付導線診断</Badge>
          <h1 className="mt-5 text-balance font-serif text-[clamp(40px,6vw,72px)] font-bold leading-[1.08] text-[#203D36]">
            LINEもメニュー表も、
            <br />
            まだつぎはぎで大丈夫です。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#17231F]">
            完全予約制の小さなサロン・教室で使っている初回LINE、体験メニュー、予約ページ、当日案内を、そのままの状態から一緒に見える化します。
          </p>
          <div className="mt-7 grid max-w-xl grid-cols-2 gap-3">
            {["初回LINE", "体験/単発/継続", "STORES予約", "当日案内"].map((label) => (
              <div key={label} className="diagnosis-chip rounded-[8px] border border-[#D3D9CC] bg-white px-4 py-3 text-sm font-bold text-[#203D36] shadow-[0_8px_24px_rgba(32,61,54,0.08)]">
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="reception-stage p-6 shadow-[0_16px_48px_rgba(32,61,54,0.12)]">
          <div className="relative">
            <FileTab tone="plum">受付導線のカルテ棚</FileTab>
            <SmartImage asset={assetsV2.contactDeskFiles} alt="" className="asset-cutout mx-auto mt-5 max-h-[430px] w-full object-contain" loading="eager" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section className="site-container grid gap-6 section-y lg:grid-cols-[1fr_0.64fr]">
        <div>
          <ContactFormShell />
          <p className="mt-3 text-xs leading-6 text-[#5C6861]">ご入力いただいた内容は、相談対応のみに利用します。第三者に提供することはありません。</p>
        </div>
        <aside className="grid gap-6 content-start">
          <Card className="overflow-hidden p-0">
            <div className="border-b border-[#D3D9CC] bg-[#EDF2E6] px-6 py-4">
              <h2 className="text-lg font-bold text-[#203D36]">安心してご相談いただくために</h2>
              <p className="mt-2 text-sm leading-6 text-[#5C6861]">サロン運営の温度感を壊さず、まとまっていない状態を前提に順番を分けて確認します。</p>
            </div>
            <ul className="grid gap-0 divide-y divide-[#D3D9CC]">
              {reassurance.map((item) => (
                <li key={item} className="flex items-center gap-3 px-6 py-4 text-sm font-bold leading-7 text-[#203D36]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#B7C957]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <SectionHeader eyebrow="診断でわかること" title="最初に見るところ" />
            <div className="mt-6 grid gap-3">
              {consultationBenefits.map(([title, body], index) => (
                <div key={title} className="grid grid-cols-[44px_1fr] gap-3 rounded-[8px] border border-[#D3D9CC] bg-[#F8FAF4] p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-[#EDF2E6] text-sm font-bold text-[#6E4F68]">0{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#203D36]">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#5C6861]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </section>

      <section className="border-y border-[#D3D9CC] bg-white/78 section-y">
        <div className="site-container">
          <SectionHeader eyebrow="30分の流れ" title="LINEと予約ページから受付導線へ並べます" align="center" />
          <RouteLine items={processSteps} className="mt-9" />
        </div>
      </section>

      <section className="site-container grid gap-6 section-y md:grid-cols-[1fr_0.7fr]">
        <div>
          <SectionHeader eyebrow="相談前の確認" title="よくあるご質問" />
          <Accordion items={contactFaq} className="mt-6" />
        </div>
        <Card className="p-6">
          <FileTab tone="lime">メモのまま受付</FileTab>
          <h3 className="mt-5 text-xl font-bold text-[#203D36]">3ヶ月コースの見せ方がまだ決まっていなくても大丈夫です。</h3>
          <p className="mt-4 text-sm leading-7 text-[#5C6861]">「初回LINEだけ気になる」「体験メニューだけ見てほしい」のような部分相談から始められます。</p>
        </Card>
      </section>

      <section className="site-container pb-section-sm md:pb-section">
        <div className="grid gap-6 rounded-[8px] border border-[#203D36] bg-white p-6 shadow-[0_8px_24px_rgba(32,61,54,0.08)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-bold text-[#203D36]">まずは30分、体験予約までの流れを一緒に見ます。</h2>
            <p className="mt-3 text-sm leading-7 text-[#5C6861]">準備がなくても、今あるLINE文面、メニュー表、予約ページから順番に整理できます。</p>
          </div>
          <ButtonLink href="#contact" className="w-full md:w-auto">無料30分 受付導線診断を申し込む</ButtonLink>
        </div>
      </section>
    </main>
  );
}
