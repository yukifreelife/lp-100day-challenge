import { useState } from "react";
import { Button, FaqRow, NeonPanel, OptimizedImage, SectionHeader } from "../components/UI";
import { faqs, products, starterKitDetail } from "../data/siteData";

const extraFaqs = [
  { category: "ジム利用", question: "ジムで使用できますか？", answer: "多くの室内ジムで使いやすい基本ギア構成です。施設ごとのルールがある場合は、事前に確認してください。" },
  { category: "使い方", question: "チョークはどのくらい持ちますか？", answer: "使用頻度にもよりますが、液体チョークは約2〜3か月、粉タイプは約1〜2か月が目安です。" },
  { category: "配送・返品", question: "返品・交換はできますか？", answer: "未使用品に限り、到着後7日以内のご連絡で受付します。詳しい条件は法務ページで確認できます。" },
  { category: "配送・返品", question: "配送には何日かかりますか？", answer: "注文から2〜4営業日を目安としています。地域や注文状況により前後します。" },
  { category: "配送・返品", question: "どの支払い方法が使えますか？", answer: "カード決済、コンビニ払い、銀行振込、あと払いに対応しています。" },
  { category: "商品について", question: "ギフト包装はできますか？", answer: "現在はギフト包装に対応していません。自分用の練習セットとして選びやすい構成にしています。" },
];

const allCategory = "すべての質問";
const categories = [allCategory, "商品について", "使い方", "配送・返品", "ジム利用"];

const siteFaqCategories = {
  "初めてなら何から買うべきですか？": "商品について",
  "商品に目立つブランド表記はありますか？": "商品について",
  "液体チョークは毎回使いますか？": "使い方",
  "セット内容を変更できますか？": "商品について",
  "返品や配送の条件はどこで確認できますか？": "配送・返品",
};

const supportCards = [
  { title: "チャットで相談", text: "受付時間 10:00〜18:00", href: "#support-chat", cta: "チャットフォームへ" },
  { title: "メールで相談", text: "24時間受付", href: "#support-email", cta: "メールフォームへ" },
  { title: "お問い合わせフォーム", text: "3営業日以内に返信", href: "#support-contact", cta: "問い合わせフォームへ" },
];

export default function Faq() {
  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const popularItems = [products[2], products[1], products[3], products[4]].filter(Boolean);
  const categorizedFaqs = faqs.map((faq) => ({
    ...faq,
    category: siteFaqCategories[faq.question] || "商品について",
  }));
  const allFaqs = [...categorizedFaqs, ...extraFaqs];
  const visibleFaqs =
    selectedCategory === allCategory
      ? allFaqs
      : allFaqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="pb-28">
      <section className="relative overflow-hidden bg-black">
        <div className="section-container grid min-h-[480px] items-center gap-8 py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal">
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">よくあるご質問</h1>
            <p className="mt-5 text-lg font-bold leading-8 text-slate-300">購入前に気になることを、ここで確認できます。</p>
          </div>
          <NeonPanel className="p-3" accent="cyan">
            <OptimizedImage src={starterKitDetail.image} alt="よくある質問のスターターギア" className="aspect-[16/9] w-full object-cover" loading="eager" fetchPriority="high" />
          </NeonPanel>
        </div>
      </section>

      <section className="section-container py-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                className={`min-h-14 border px-6 py-4 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-cyan-300 ${isSelected ? "border-cyan-300 bg-cyan-300/10 text-cyan-100" : "border-slate-700 bg-slate-950/70 text-slate-200 hover:border-fuchsia-400 hover:text-white"}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section id="faq-list" className="section-container pb-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold text-slate-300" aria-live="polite">
            {selectedCategory === allCategory
              ? `すべての質問を${visibleFaqs.length}件表示中`
              : `${selectedCategory}の質問を${visibleFaqs.length}件表示中`}
          </p>
          <div className="space-y-3">
            {visibleFaqs.map((faq, index) => (
              <FaqRow key={`${selectedCategory}-${faq.question}`} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
            ))}
          </div>

          <aside className="mt-6 space-y-5">
            <NeonPanel accent="cyan">
              <p className="text-sm font-bold text-slate-300">はじめての方におすすめ</p>
              <h2 className="mt-1 text-2xl font-black text-white">スターターセット</h2>
              <OptimizedImage src={starterKitDetail.image} alt="スターターセット" className="mt-5 aspect-[4/3] w-full border border-slate-700 object-cover" />
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {starterKitDetail.benefits.map((benefit) => (
                  <li key={benefit.title} className="border-l-2 border-lime-300 pl-3">
                    <span className="block font-bold text-white">{benefit.title}</span>
                    {benefit.text}
                  </li>
                ))}
              </ul>
              <Button href="#starter-kit" className="mt-5 w-full">スターターセットを見る</Button>
            </NeonPanel>

            <NeonPanel accent="magenta">
              <h2 className="text-lg font-black text-white">人気のアイテム</h2>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {popularItems.map((item) => (
                  <a href={item.href} key={item.id} className="border border-slate-700 bg-black/40 p-1">
                    <OptimizedImage src={item.image} alt={item.name} className="aspect-square w-full object-cover" />
                  </a>
                ))}
              </div>
              <a href="#products" className="mt-4 inline-block text-sm font-bold text-fuchsia-200">
                商品ラインナップを見る →
              </a>
            </NeonPanel>
          </aside>
        </div>
      </section>

      <section className="section-container pb-14">
        <NeonPanel accent="cyan" className="grid items-center gap-5 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-black text-white">解決しない場合はお問い合わせください</h2>
            <p className="mt-2 leading-7 text-slate-300">専門スタッフが丁寧にサポートします。</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {supportCards.map(({ title, text, href, cta }) => (
              <a
                key={title}
                href={href}
                className="block border border-slate-700 bg-black/30 p-4 transition hover:border-cyan-300 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                data-tracking="cta_click"
                data-position="faq_support_card"
                data-type="navigation"
              >
                <p className="font-black text-cyan-200">{title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{text}</p>
                <span className="mt-4 inline-flex text-xs font-black text-orange-200">{cta}</span>
              </a>
            ))}
          </div>
        </NeonPanel>
      </section>

      <section className="section-container pb-16">
        <NeonPanel accent="magenta" className="grid items-center gap-6 md:grid-cols-[0.78fr_1fr]">
          <OptimizedImage src="/assets/products/brush-hold.webp" alt="クライミングホールド" className="aspect-[16/8] w-full object-cover" />
          <div>
            <SectionHeader eyebrow="最終案内" title="準備が整うと、最初の一手に集中できる。" lead="必要なギアをそろえて、次の一手へ。" className="mb-0" />
            <Button href="#products" className="mt-5">今すぐギアを選ぶ</Button>
          </div>
        </NeonPanel>
      </section>
    </div>
  );
}
