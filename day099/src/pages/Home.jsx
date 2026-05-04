import { CyberSection } from '../components/Layout.jsx';
import { Button, FaqRow, MetricBadge, NeonPanel, OptimizedImage, SectionHeader } from '../components/UI.jsx';
import { ProductCard } from '../components/Product.jsx';
import { faqs, hero, products, starterKitDetail } from '../data/siteData.js';

const problemCards = [
  {
    title: '手汗で一手目が不安定',
    text: '登る直前に指先が滑ると、ムーブに集中しにくくなります。',
    image: '/assets/products/hands-chalk.webp',
  },
  {
    title: '道具がバッグ内で散らばる',
    text: 'チョーク、テープ、ブラシが分かれていると、取り出しに手間がかかります。',
    image: '/assets/products/chalk-bag.webp',
  },
  {
    title: 'ホールドの粉残りが気になる',
    text: 'ブラシで整えないまま登ると、狙った保持感が戻りにくくなります。',
    image: '/assets/products/brush-hold.webp',
  },
];

const proofMetrics = [
  { label: '密着感', value: '+34%', note: '指先の接地感を整える' },
  { label: '準備の手間', value: '-45%', note: '必要品をひとまとめ' },
  { label: '清掃維持', value: '+28%', note: 'ブラシ習慣を作りやすい' },
];

export default function Home() {
  const lineup = products.filter((product) => product.id !== 'starter-kit').slice(0, 6);

  return (
    <>
      <section className="section-container grid min-h-[calc(100vh-96px)] items-center gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal">
          <p className="eyebrow inline-flex border border-cyan-300/70 bg-cyan-300/10 px-4 py-2">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-tight text-white md:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">{hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <MetricBadge key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <NeonPanel className="relative overflow-hidden p-3" accent="cyan">
          <OptimizedImage src={hero.image} alt="スターターギアセット" className="aspect-[5/4] w-full object-cover" loading="eager" fetchPriority="high" sizes="(max-width: 640px) 40vw, (max-width: 1024px) 52vw, 560px" />
          <div className="absolute bottom-5 left-5 right-5 border border-fuchsia-400/50 bg-black/70 p-4 backdrop-blur">
            <p className="text-sm font-bold text-cyan-200">これひとつで、登りに集中できる。</p>
          </div>
        </NeonPanel>
      </section>

      <CyberSection className="section-container">
        <SectionHeader eyebrow="準備を整える" title="登る前の小さな手間を減らす" />
        <div className="grid gap-5 md:grid-cols-3">
          {problemCards.map((card) => (
            <article key={card.title} className="carbon-panel p-4">
              <div className="relative z-10">
                <OptimizedImage src={card.image} alt={card.title} className="aspect-[16/9] w-full border border-slate-700 object-cover" sizes="(max-width: 640px) 40vw, (max-width: 768px) 60vw, 360px" />
                <h3 className="mt-5 text-xl font-black text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </CyberSection>

      <CyberSection className="section-container">
        <SectionHeader eyebrow="商品ラインナップ" title="必要なギアをまとめて選ぶ" lead="単品でも、セットでも。初級者が最初に使いやすい基本用品を中心にそろえました。" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {lineup.map((product) => (
            <ProductCard key={product.id} product={product} className="xl:[&>div:nth-of-type(2)>a]:hidden" />
          ))}
        </div>
      </CyberSection>

      <CyberSection className="section-container">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeader eyebrow="使用イメージ" title="準備が整うと、登りに集中しやすくなる" lead="通常の持ち物準備と比べた目安です。使用感には個人差があります。" />
            <div className="grid gap-4 md:grid-cols-3">
              {proofMetrics.map((metric) => (
                <MetricBadge key={metric.label} {...metric} className="min-h-32" />
              ))}
            </div>
          </div>
          <OptimizedImage src="/assets/products/mini-holds.webp" alt="ミニホールド" className="aspect-[4/3] w-full border border-cyan-300/40 object-cover" sizes="(max-width: 640px) 40vw, (max-width: 1024px) 52vw, 460px" />
        </div>
      </CyberSection>

      <CyberSection className="section-container">
        <NeonPanel accent="magenta" className="grid items-center gap-6 p-4 md:grid-cols-[0.42fr_0.58fr]">
          <OptimizedImage src={starterKitDetail.image} alt="スターターギアセット" className="aspect-[4/3] w-full object-cover" sizes="(max-width: 640px) 40vw, (max-width: 768px) 60vw, 430px" />
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">スターターセット</p>
              <h2 className="mt-2 text-3xl font-black text-white md:text-5xl">登る前の準備を、ひとまとめに。</h2>
              <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-300">
                {starterKitDetail.benefits.map((benefit) => (
                  <li key={benefit.title}>✓ {benefit.title}：{benefit.text}</li>
                ))}
              </ul>
            </div>
            <div className="border border-cyan-300/50 bg-black/50 p-5 text-center">
              <p className="text-sm font-bold text-slate-300">セット価格</p>
              <p className="mt-1 text-5xl font-black text-fuchsia-300">{starterKitDetail.purchase.price}</p>
              <Button href="#starter-kit" className="mt-5 w-full">詳細を見る</Button>
            </div>
          </div>
        </NeonPanel>
      </CyberSection>

      <CyberSection className="section-container">
        <SectionHeader eyebrow="よくあるご質問" title="よくあるご質問" />
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.slice(0, 4).map((faq, index) => (
            <FaqRow key={faq.question} {...faq} defaultOpen={index === 0} />
          ))}
        </div>
      </CyberSection>

      <section className="section-container pb-20">
        <NeonPanel accent="orange" className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <h2 className="text-4xl font-black text-white md:text-5xl">さあ、次の一手へ。</h2>
          <Button href="#products" className="min-w-64">今すぐギアを選ぶ</Button>
        </NeonPanel>
      </section>
    </>
  );
}
