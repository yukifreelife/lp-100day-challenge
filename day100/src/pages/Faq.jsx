import { useState } from "react";
import { assetsV2 } from "../data/siteData";
import { Accordion, Badge, ButtonLink, Card, FileTab, SectionHeader, SmartImage } from "../components/UI";

const categories = ["相談前", "料金", "初回LINE", "予約導線", "継続案内"];

const faqItems = [
  {
    category: "相談前",
    question: "LINEやメニュー表がつぎはぎのままでもいいですか？",
    answer: "大丈夫です。LINE公式の文面、Instagramのメニュー投稿、STORES予約ページ、Googleカレンダーのメモ、スクリーンショットなど、今ある材料をそのまま出すところから始めます。",
  },
  {
    category: "初回LINE",
    question: "初回LINEだけでも相談できますか？",
    answer: "相談できます。体験予約の初回返信だけ、予約前案内だけ、よくある質問への返し方だけなど、いま一番詰まっている文面に絞れます。",
  },
  {
    category: "相談前",
    question: "強い売り込みになりませんか？",
    answer: "強い煽りや売上訴求を前提にしません。体験後や単発後に、必要な人へ自然な選択肢を渡すための案内として整えます。",
  },
  {
    category: "継続案内",
    question: "3ヶ月コースを自然に案内できますか？",
    answer: "できます。体験後、単発後、3ヶ月コース前などの分岐を分け、押し売りに見えにくいタイミングと言葉を一緒に確認します。",
  },
  {
    category: "料金",
    question: "料金やキャンセル条件はどう扱いますか？",
    answer: "未確定のまま公開はしません。決まっていること、確認が必要なこと、正式なお申し込み前に確定することを分け、初回LINEや当日案内へ混ぜないようにします。",
  },
  {
    category: "予約導線",
    question: "STORES予約や当日案内も見てもらえますか？",
    answer: "見られます。STORES予約などの予約ページ、Googleカレンダー、持ち物、場所、キャンセル条件を一連の案内として並べ、抜け漏れを確認します。",
  },
];

const checklist = ["詰まりの場所", "最初に直す文面", "整える順番"];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const visibleItems = faqItems.filter((item) => item.category === activeCategory);

  return (
    <main id="main-content" className="paper-bg">
      <section className="site-container grid gap-10 py-12 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-16">
        <div>
          <Badge tone="lime">よくある質問</Badge>
          <h1 className="mt-5 text-balance font-serif text-[clamp(40px,6vw,72px)] font-bold leading-[1.08] text-[#203D36]">
            ひとりサロンの相談前の不安を、
            <br />
            受付導線ごと整理します。
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#17231F]">
            LINE公式の返信だけ、体験/単発/継続メニューだけ、STORES予約の案内だけでも相談前に確認できます。
          </p>
        </div>
        <div className="reception-stage p-6 shadow-[0_16px_48px_rgba(32,61,54,0.12)]">
          <div className="relative">
            <FileTab tone="plum">受付導線のカルテ棚</FileTab>
            <SmartImage asset={assetsV2.receptionFileBox} alt="" className="asset-cutout-soft mx-auto mt-4 max-h-[330px] w-full object-contain" loading="eager" />
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {categories.map((category) => (
                <div key={category} className="rounded-[8px] border border-[#D3D9CC] bg-white px-3 py-3 text-center text-sm font-bold text-[#203D36]">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D3D9CC] bg-white/78 py-8">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-2 rounded-[8px] border border-[#D3D9CC] bg-white p-2 shadow-[0_8px_24px_rgba(32,61,54,0.08)] sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`min-h-[52px] rounded-[6px] border border-[#D3D9CC] px-4 text-sm font-bold transition ${
                  activeCategory === category ? "bg-[#203D36] text-white" : "text-[#203D36] hover:bg-[#EDF2E6]"
                } ${index === categories.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container grid gap-7 section-y lg:grid-cols-[1fr_0.52fr]">
        <div>
          <Badge tone="blue">{activeCategory}</Badge>
          <p className="mt-4 text-sm leading-7 text-[#5C6861]">
            {activeCategory}に関する不安を、体験予約から継続案内までのどこに置くか分けて確認します。
          </p>
          <Accordion items={visibleItems} className="mt-6 shadow-[0_8px_24px_rgba(32,61,54,0.08)]" />
        </div>
        <aside className="grid gap-6 content-start">
          <Card className="p-6">
            <SectionHeader eyebrow="まず見るところ" title="不安を分けて確認します" />
            <ul className="mt-6 grid gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center justify-between gap-3 rounded-[8px] border border-[#D3D9CC] bg-[#F8FAF4] px-4 py-3 text-sm font-bold text-[#203D36]">
                  <span>{item}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#B7C957]">✓</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <FileTab tone="lime">部分相談OK</FileTab>
            <h3 className="mt-5 text-xl font-bold text-[#203D36]">初回LINEだけ、体験メニューだけでも相談できます。</h3>
            <p className="mt-4 text-sm leading-7 text-[#5C6861]">全部を整えてから申し込む必要はありません。今ある不安を一つずつ受付棚に分けます。</p>
          </Card>
        </aside>
      </section>

      <section className="site-container pb-section-sm md:pb-section">
        <div className="grid gap-6 rounded-[8px] border border-[#D3D9CC] bg-white p-6 shadow-[0_8px_24px_rgba(32,61,54,0.08)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] font-bold leading-tight text-[#203D36]">メニュー表が未完成でも、話して大丈夫です。</h2>
            <p className="mt-3 text-sm leading-7 text-[#5C6861]">受付導線を整えると、体験予約までのやり取りと確認すべき条件が見えやすくなります。</p>
          </div>
          <ButtonLink href="#contact" className="w-full md:w-auto">無料30分 受付導線診断を予約する</ButtonLink>
        </div>
      </section>
    </main>
  );
}
