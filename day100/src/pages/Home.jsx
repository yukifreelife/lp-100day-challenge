import { assetsV2, ctaLabel } from "../data/siteData";
import { Badge, ButtonLink, Card, FileTab, ReceptionBoard, SmartImage } from "../components/UI";

const painCards = [
  {
    title: "初回LINEが毎回長文",
    label: "未整理 01",
    points: ["体験枠、空き日程、持ち物まで一通に詰めている", "説明が長くなり予約URLまで届きにくい", "営業時間外にも返信の続きを考えてしまう"],
  },
  {
    title: "体験・単発・継続が混ざる",
    label: "未整理 02",
    points: ["Instagram、LINE、予約ページで見せ方が違う", "初めての人に何を選んでもらうか説明しにくい", "新しい3ヶ月コースを出す前に止まっている"],
  },
  {
    title: "継続案内の出し方が怖い",
    label: "未整理 03",
    points: ["体験後に案内したいのに押し売りに見えそう", "単発後、次回予約、継続コースの分岐が曖昧", "自分のサロンの温度感を壊したくない"],
  },
];

const routeMap = [
  ["Instagram", "雰囲気を見てLINEへ来た人を受け止める"],
  ["初回LINE", "体験枠・料金・予約URLを短く渡す"],
  ["予約確定", "STORES予約やカレンダーの確認をそろえる"],
  ["当日案内", "場所・持ち物・キャンセル条件を抜けなく渡す"],
  ["継続案内", "必要な人へ自然に次の選択肢を出す"],
];

const outputCards = [
  ["受付導線図", "InstagramからLINE、予約確定、当日、継続案内までの流れを一枚にします。"],
  ["初回LINE返信テンプレ", "体験枠、料金、予約URL、持ち物案内を分けて送れる文面にします。"],
  ["体験・単発・継続の整理表", "新しい3ヶ月コースを出す前に、入口メニューと次の選択肢を並べます。"],
];

const fitNotes = [
  "完全予約制の小さなサロン・教室をひとりで運営している方",
  "予約とリピートはあるのに、案内の流れが毎回つぎはぎになる方",
  "体験・単発・継続コースの見せ方を、押し売りにならない形で整えたい方",
  "LINE公式、STORES予約、Googleカレンダーなど今ある道具で回したい方",
];

const notFitNotes = [
  "まだ提供メニューや予約対応がほとんど存在しない方",
  "SNS集客だけを増やす施策を探している方",
  "強い煽りや短期売上訴求で継続コースを売りたい方",
  "自分のサービスの温度感や接客方針を話す時間を取りたくない方",
];

function CheckList({ items, mark = "✓" }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-[#5C6861]">
          <span className="font-bold text-[#203D36]" aria-hidden="true">{mark}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="paper-bg">
      <section className="site-container grid gap-10 py-12 md:grid-cols-[0.86fr_1.14fr] md:items-center lg:py-16">
        <div>
          <p className="mb-5 inline-flex border-b border-[#203D36] pb-2 text-sm font-bold text-[#203D36]">
            完全予約制サロン・教室の受付導線整理
          </p>
          <h1 className="text-balance font-serif text-[clamp(42px,7vw,76px)] font-bold leading-[1.08] text-[#203D36]">
            予約は入るのに、案内が毎回つぎはぎになっていませんか。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#17231F]">
            InstagramからLINEへ来たお客さまに、体験・単発・継続の違い、予約URL、当日案内を迷わず渡せる形へ整えます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">{ctaLabel}</ButtonLink>
            <ButtonLink href="#service" variant="secondary">相談で整えるものを見る</ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["完全予約制に特化", "体験/単発/継続を整理", "LINE公式・予約ツール前提"].map((chip) => (
              <div key={chip} className="diagnosis-chip rounded-[8px] border border-[#D3D9CC] bg-white/82 px-4 py-3 text-sm font-bold text-[#203D36]">
                {chip}
              </div>
            ))}
          </div>
        </div>
        <ReceptionBoard
          asset={assetsV2.receptionFlowBoard}
          items={["Instagram導線", "初回LINE", "体験メニュー", "STORES予約", "当日案内", "継続コース"]}
        />
      </section>

      <section className="border-y border-[#D3D9CC] bg-white/76 py-12">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-[clamp(30px,4vw,44px)] font-bold text-[#203D36]">ひとりサロンの予約前後で、ここが詰まっていませんか？</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {painCards.map((card) => (
              <Card key={card.title} className="memo-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-[#6E4F68]">{card.label}</p>
                    <h3 className="mt-2 text-xl font-bold text-[#203D36]">{card.title}</h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] border border-[#D3D9CC] bg-[#F4F8D9] text-sm font-bold text-[#203D36]" aria-hidden="true">
                    未
                  </span>
                </div>
                <div className="mt-5">
                  <CheckList items={card.points} mark="・" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-y">
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="blue">受付導線ルートマップ</Badge>
          <h2 className="mt-4 font-serif text-[clamp(30px,4vw,44px)] font-bold text-[#203D36]">Instagramで気になった人が、迷わず予約できる順番へ。</h2>
        </div>
        <ol className="route-ledger mt-12 grid gap-5 md:grid-cols-5">
          {routeMap.map(([title, body], index) => (
            <li key={title} className="relative">
              <div className={`route-ledger-item mx-auto grid min-h-28 place-items-center rounded-[8px] border px-4 text-center shadow-[0_8px_24px_rgba(32,61,54,0.08)] ${index === routeMap.length - 1 ? "border-dashed border-[#B7C957] bg-white text-[#203D36]" : "border-[#6E4F68] bg-[#6E4F68] text-white"}`}>
                <span className="text-[11px] font-bold opacity-75">受付 0{index + 1}</span>
                <span className="px-3 text-lg font-bold leading-6">{title}</span>
              </div>
              {index < routeMap.length - 1 ? (
                <span className="absolute left-[calc(50%+56px)] top-14 hidden h-px w-[calc(100%-80px)] border-t border-dashed border-[#6E4F68] md:block" aria-hidden="true" />
              ) : null}
              <p className="mt-4 text-center text-sm font-bold leading-7 text-[#5C6861]">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-[#D3D9CC] bg-white/78 py-14">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <Badge tone="lime">お渡しするもの</Badge>
            <h2 className="mt-4 font-serif text-[clamp(30px,4vw,44px)] font-bold text-[#203D36]">サロン運営でそのまま見返せる3つの整理物</h2>
            <p className="mt-4 text-base leading-8 text-[#5C6861]">抽象的な戦略ではなく、初回LINE、体験メニュー表、予約前後の案内として使える形にします。</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {outputCards.map(([title, body], index) => (
              <Card key={title} className="overflow-hidden">
                <div className="border-b border-[#D3D9CC] bg-[#EDF2E6] px-5 py-3">
                  <FileTab tone={index === 1 ? "plum" : "green"}>成果物 0{index + 1}</FileTab>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#203D36]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5C6861]">{body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-y">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="font-serif text-[clamp(26px,4vw,36px)] font-bold text-[#203D36]">こんな方におすすめです</h2>
            <div className="mt-6">
              <CheckList items={fitNotes} />
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="font-serif text-[clamp(26px,4vw,36px)] font-bold text-[#203D36]">こんな方には向いていません</h2>
            <div className="mt-6">
              <CheckList items={notFitNotes} mark="×" />
            </div>
          </Card>
        </div>
      </section>

      <section className="site-container pb-16">
        <div className="grid gap-6 rounded-[8px] border border-[#D3D9CC] bg-[#EDF2E6] p-5 md:grid-cols-[0.8fr_1.4fr_0.8fr] md:items-center md:p-8">
          <SmartImage asset={assetsV2.receptionFileBox} alt="" className="mx-auto h-40 object-contain" />
          <div className="text-center md:text-left">
            <p className="font-bold text-[#6E4F68]">メニュー表やLINE文面が散らかったままで大丈夫です。</p>
            <h2 className="mt-3 font-serif text-[clamp(28px,4vw,42px)] font-bold leading-tight text-[#203D36]">
              体験予約から継続案内まで、いまの受付導線を一緒に見える化します。
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5C6861]">売り込みを強くする前に、予約前後の受け皿を整えます。</p>
          </div>
          <ButtonLink href="#contact" className="w-full md:w-auto">{ctaLabel}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
