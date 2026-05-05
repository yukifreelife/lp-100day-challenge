import { assetsV2, ctaLabel } from "../data/siteData";
import { Accordion, Badge, ButtonLink, Card, FileTab, SectionHeader, SmartImage } from "../components/UI";

const plans = [
  {
    number: "01",
    name: "無料診断",
    price: "無料",
    unit: "30分",
    lead: "初回LINE、体験メニュー、予約ページのどこで迷いが生まれているかを一緒に見つけます。",
    features: ["初回LINEの詰まり確認", "最初に直す文面", "整理順のメモ"],
    cta: ctaLabel,
  },
  {
    number: "02",
    name: "LINE・メニュー一点整理",
    price: "18,000円〜",
    unit: "1回",
    lead: "初回LINE、体験/単発/継続のメニュー整理など、今いちばん困っている場所に絞って整えます。",
    features: ["小さな受付導線図", "初回返信テンプレ", "メニュー導線表"],
    cta: "このプランを相談する",
    featured: true,
  },
  {
    number: "03",
    name: "体験から継続まで整理",
    price: "48,000円〜",
    unit: "3週間",
    lead: "InstagramからLINE、体験予約、当日案内、3ヶ月コース案内までを一連の受付導線として見直します。",
    features: ["当日案内チェック", "継続案内メモ", "3週間の見直し"],
    cta: "このプランを相談する",
  },
];

const comparisonRows = [
  ["初回LINE", "△（詰まり確認）", "○（返信テンプレ）", "◎（返信テンプレ＋運用アドバイス）"],
  ["体験/単発/継続整理", "△（現状確認）", "○（メニュー導線表）", "◎（見せ方＋導線に合わせて整理）"],
  ["予約ページ連携", "△（詰まり確認）", "○（小さな受付導線図）", "◎（LINEから予約確定まで一貫して整理）"],
  ["当日案内", "×", "△（必要に応じて提案）", "◎（当日案内の整備）"],
  ["継続コース案内", "×", "△（方向性の提案）", "◎（継続案内の整備）"],
];

const priceFaq = [
  {
    question: "料金はいつ確定しますか？",
    answer: "無料診断でLINE、メニュー、予約ページの整理範囲を確認したあと、必要な作業量と未確定条件を分けて正式にご案内します。",
  },
  {
    question: "ミニ整理だけでも依頼できますか？",
    answer: "できます。初回LINEだけ、体験/単発/継続メニューだけ、予約前案内だけなど、ひとつの詰まりに絞れます。",
  },
  {
    question: "キャンセル条件はどう扱いますか？",
    answer: "公開前に正式確認が必要な項目として分け、初回LINEや当日案内へ未確定のまま混ぜないように整理します。",
  },
];

export default function Pricing() {
  return (
    <main id="main-content" className="paper-bg">
      <section className="site-container grid gap-10 py-12 md:grid-cols-[0.78fr_1.22fr] md:items-center md:py-16">
        <div>
          <Badge tone="lime">料金プラン</Badge>
          <h1 className="mt-5 text-balance font-serif text-[clamp(40px,6vw,72px)] font-bold leading-[1.08] text-[#203D36]">
            初回LINEだけでも、
            <br />
            3ヶ月コース前でも。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#17231F]">
            無料診断から、初回LINE、体験/単発/継続メニュー、予約ページ連携まで。ひとりサロンの今の詰まりに合わせて選べます。
          </p>
        </div>
        <div className="reception-stage p-6 shadow-[0_16px_48px_rgba(32,61,54,0.12)]">
          <div className="relative grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <FileTab tone="plum">受付導線カルテ</FileTab>
              <p className="mt-5 text-2xl font-bold leading-9 text-[#203D36]">初回LINEだけでも、3ヶ月コース前の整理でも。</p>
              <p className="mt-3 text-sm leading-7 text-[#5C6861]">料金・キャンセル条件は、LINEや当日案内へ入れる前に正式確認します。</p>
            </div>
            <SmartImage asset={assetsV2.receptionFileBox} alt="" className="asset-cutout-soft mx-auto max-h-64 w-full object-contain md:w-72" loading="eager" />
          </div>
        </div>
      </section>

      <section className="site-container section-y">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col p-6 pt-8 ${plan.featured ? "border-[#6E4F68] shadow-[0_16px_48px_rgba(32,61,54,0.12)]" : ""}`}>
              <FileTab tone={plan.featured ? "plum" : "paper"} className="absolute left-5 top-[-1px]">{plan.number}</FileTab>
              {plan.featured ? <Badge tone="blue" className="ml-auto">おすすめ</Badge> : <span className="min-h-[28px]" />}
              <h2 className="mt-5 font-serif text-3xl font-bold text-[#203D36]">{plan.name}</h2>
              <div className="mt-5 border-y border-dashed border-[#D3D9CC] py-5">
                <p className={`font-serif text-5xl font-bold leading-none ${plan.featured ? "text-[#6E4F68]" : "text-[#203D36]"}`}>{plan.price}</p>
                <p className="mt-2 text-sm font-bold text-[#5C6861]">{plan.unit}</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-[#17231F]">{plan.lead}</p>
              <ul className="mt-5 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm font-bold leading-7 text-[#203D36]">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#B7C957] text-xs">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <ButtonLink href="#contact" variant={plan.featured ? "primary" : "secondary"} className="w-full">
                  {plan.cta}
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="site-container section-y">
        <SectionHeader eyebrow="比較表" title="体験予約から継続案内まで、どこまで整えるか" align="center" />
        <div className="mt-9 hidden overflow-x-auto rounded-[8px] border border-[#D3D9CC] bg-white shadow-[0_8px_24px_rgba(32,61,54,0.08)] md:block">
          <table className="min-w-[760px] w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#203D36] text-white">
                <th className="w-[28%] p-4 text-left">サロン運営で整理する場所</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="border-l border-white/20 p-4 text-center">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row[0]} className="border-t border-[#D3D9CC]">
                  <th className="p-4 text-left font-bold text-[#203D36]">{row[0]}</th>
                  {row.slice(1).map((value, index) => (
                    <td key={`${row[0]}-${index}`} className="border-l border-[#D3D9CC] p-4 text-center font-bold leading-7 text-[#203D36]">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-9 grid gap-4 md:hidden" aria-label="料金に含まれるものの比較">
          {plans.map((plan, planIndex) => (
            <Card key={plan.name} className="overflow-hidden">
              <div className="border-b border-[#D3D9CC] bg-[#203D36] p-4 text-white">
                <h3 className="font-serif text-2xl font-bold leading-tight">{plan.name}</h3>
                <p className="mt-2 text-base font-bold">{plan.price}<span className="ml-2 text-sm text-white/75">{plan.unit}</span></p>
              </div>
              <dl className="divide-y divide-[#D3D9CC]">
                {comparisonRows.map((row) => (
                  <div key={`${plan.name}-${row[0]}`} className="grid gap-2 px-4 py-3">
                    <dt className="text-sm font-bold text-[#5C6861]">{row[0]}</dt>
                    <dd className="rounded-[6px] bg-[#EDF2E6] px-3 py-2 text-sm font-bold leading-6 text-[#203D36]">{row[planIndex + 1]}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          ))}
        </div>
        <div className="mt-5 rounded-[8px] border border-[#D3D9CC] bg-[#F4F8D9] p-4 text-sm leading-7 text-[#17231F]">
          料金・キャンセル条件、支払い方法、予約変更ルールは正式なお申し込み前に確認します。未確定の条件は初回LINEや当日案内へ混ぜず、要確認項目として分けます。
        </div>
      </section>

      <section className="site-container grid gap-6 pb-section-sm md:grid-cols-[1fr_0.56fr] md:pb-section">
        <div>
          <SectionHeader eyebrow="料金の不安" title="コース化する前に確認できます" />
          <Accordion items={priceFaq} className="mt-6" />
        </div>
        <Card className="p-6">
          <FileTab tone="lime">まずは無料診断</FileTab>
          <h3 className="mt-5 text-xl font-bold text-[#203D36]">新しい3ヶ月コースを出す前の相談でも大丈夫です。</h3>
          <p className="mt-4 text-sm leading-7 text-[#5C6861]">必要以上の整理範囲を前提にせず、初回LINE・体験メニュー・予約ページのどこから直すかを一緒に確認します。</p>
          <ButtonLink href="#contact" className="mt-6 w-full">無料で相談してみる</ButtonLink>
        </Card>
      </section>
    </main>
  );
}
