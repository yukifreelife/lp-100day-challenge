import { assetsV2, ctaLabel } from "../data/siteData";
import { Badge, ButtonLink, Card, FileTab, SmartImage } from "../components/UI";

const samples = [
  {
    label: "Case 01",
    theme: "初回LINE",
    beforeTitle: "体験予約の説明が一通に集中",
    beforeLead: "体験内容、空き日程、料金、持ち物、場所を毎回打ち直し、予約URLが長文の最後に埋もれやすい状態。",
    before: ["体験レッスンの内容は...", "空き日は〇日と〇日で...", "持ち物と場所、注意点は..."],
    afterTitle: "初回LINEを3通に分割",
    afterLead: "ごあいさつ、体験枠の選び方、予約前案内へ分け、短く、やさしく、予約に進める文面へ。",
    after: ["体験枠のご案内", "予約URL・支払い", "当日・持ち物リスト"],
  },
  {
    label: "Case 02",
    theme: "メニュー",
    beforeTitle: "体験・単発・継続が混在",
    beforeLead: "Instagramの投稿、LINEのメニュー画像、予約ページで表現が違い、初めての人が選びにくい状態。",
    before: ["体験レッスン 60分 3,000円", "単発レッスン 75分 6,000円", "継続コース 月2回 11,000円〜"],
    afterTitle: "入口から継続までのメニュー表",
    afterLead: "体験、単発、3ヶ月コースの役割を分け、料金や支払い条件も同じ場所へまとめます。",
    after: ["体験: はじめての方向け", "単発: 1回ごとの調整", "3ヶ月: 習慣化したい方向け"],
  },
  {
    label: "Case 03",
    theme: "当日案内",
    beforeTitle: "持ち物・場所・注意点が散在",
    beforeLead: "直前に聞かれやすい項目がLINE、STORES予約、Googleカレンダーのメモに分かれている状態。",
    before: ["場所は〇〇のビル3階です", "タオルと飲み物をお持ちください", "遅れそうな時はLINEへ"],
    afterTitle: "当日案内チェック",
    afterLead: "来店前に渡せるチェック形式へ。お客様の不安と運営側の抜け漏れを減らします。",
    after: ["持ち物", "場所・アクセス", "キャンセル/遅刻時"],
  },
];

function MemoGroup({ items, tone = "before" }) {
  return (
    <div className="mt-4 grid gap-2 sm:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item}
          className={`min-h-[84px] rounded-[4px] border border-[#D3D9CC] p-3 text-sm font-bold leading-6 shadow-[0_8px_24px_rgba(32,61,54,0.08)] ${tone === "before" ? "bg-white text-[#5C6861]" : "bg-[#F8FAF4] text-[#203D36]"}`}
        >
          <span className="mb-1 block text-xs text-[#6E4F68]">{tone === "before" ? `メモ ${index + 1}` : `${index + 1}`}</span>
          {item}
        </div>
      ))}
    </div>
  );
}

export default function Cases() {
  return (
    <main className="paper-bg">
      <section className="site-container grid gap-10 py-12 md:grid-cols-[0.92fr_1.08fr] md:items-center lg:py-16">
        <div>
          <p className="mb-5 inline-flex border-b border-[#203D36] pb-2 text-sm font-bold text-[#203D36]">サロン・教室の受付導線サンプル</p>
          <h1 className="text-balance font-serif text-[clamp(40px,6vw,68px)] font-bold leading-[1.12] text-[#203D36]">
            LINE、メニュー、当日案内を、体験予約しやすい順番へ。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#17231F]">
            公開された評価ではなく、相談で整える前後のサンプルです。ひとりサロンのLINE・体験メニュー・当日案内を、そのまま使える形に近づけます。
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["体験予約までの流れに", "接客の温度感を残す", "単発から継続案内まで"].map((item) => (
              <Card key={item} className="p-4 text-sm font-bold leading-6 text-[#203D36]">{item}</Card>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[8px] border border-[#D3D9CC] bg-white p-5 shadow-[0_16px_48px_rgba(32,61,54,0.12)]">
          <FileTab tone="green">受付導線のカルテ棚</FileTab>
          <SmartImage asset={assetsV2.receptionFileBox} alt="" className="mx-auto mt-4 max-h-[330px] w-full object-contain" loading="eager" />
        </div>
      </section>

      <section className="site-container pb-10">
        <div className="overflow-hidden rounded-[8px] border border-[#D3D9CC] bg-white shadow-[0_8px_24px_rgba(32,61,54,0.08)]">
          <div className="grid bg-[#203D36] text-white md:grid-cols-[160px_1fr_1fr]">
            <div className="hidden p-4 md:block" />
            <div className="p-4 text-center font-serif text-2xl font-bold">Before <span className="ml-2 text-sm font-sans">散らばっている状態</span></div>
            <div className="bg-[#B7C957] p-4 text-center font-serif text-2xl font-bold text-[#203D36]">After <span className="ml-2 text-sm font-sans">整っている状態</span></div>
          </div>
          {samples.map((sample) => (
            <div key={sample.theme} className="grid border-t border-[#D3D9CC] md:grid-cols-[160px_1fr_1fr]">
              <div className="border-b border-[#D3D9CC] bg-[#F8FAF4] p-4 md:border-b-0 md:border-r">
                <div className="mx-auto max-w-[96px] rounded-[8px] border border-[#D3D9CC] bg-white text-center shadow-[0_8px_24px_rgba(32,61,54,0.08)]">
                  <div className="rounded-t-[8px] bg-[#203D36] px-3 py-3 font-serif text-xl font-bold text-white">{sample.label}</div>
                  <div className="px-3 py-3 font-bold text-[#203D36]">{sample.theme}</div>
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-[#203D36]">{sample.beforeTitle}</h2>
                <p className="mt-2 text-sm leading-7 text-[#5C6861]">{sample.beforeLead}</p>
                <MemoGroup items={sample.before} />
              </div>
              <div className="border-t border-[#D3D9CC] bg-[#F8FAF4] p-5 md:border-l md:border-t-0">
                <h2 className="text-xl font-bold text-[#203D36]">{sample.afterTitle}</h2>
                <p className="mt-2 text-sm leading-7 text-[#5C6861]">{sample.afterLead}</p>
                <MemoGroup items={sample.after} tone="after" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="site-container pb-16">
        <div className="grid gap-6 rounded-[8px] border border-[#D3D9CC] bg-[#EDF2E6] p-5 md:grid-cols-[0.7fr_1.4fr_0.9fr] md:items-center md:p-8">
          <SmartImage asset={assetsV2.contactDeskFiles} alt="" className="mx-auto h-36 object-contain" />
          <div>
            <Badge tone="lime">相談で整えるサンプルです</Badge>
            <h2 className="mt-4 font-serif text-[clamp(28px,4vw,40px)] font-bold leading-tight text-[#203D36]">あなたのLINEとメニュー表も、予約しやすい順番に整えませんか？</h2>
            <p className="mt-3 text-sm leading-7 text-[#5C6861]">現在の体験予約までの流れを聞き、最初に直す文面とメニューの見せ方を一緒に確認します。</p>
          </div>
          <ButtonLink href="#contact">{ctaLabel}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
