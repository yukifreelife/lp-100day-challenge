import { CyberSection } from '../components/Layout.jsx';
import { Button, FaqRow, IconSprite, NeonPanel, OptimizedImage, StickyPurchaseBar } from '../components/UI.jsx';
import { ProductCard, PurchasePanel } from '../components/Product.jsx';
import { faqs, getProductById, starterKitDetail } from '../data/siteData.js';

const reasonCards = [
  ['基本をしっかりカバー', 'ジム通いで使う基本ギアをまとめました。'],
  ['持ち運びがラク', 'チョークバッグでコンパクトに収納できます。'],
  ['使いやすい設計', '初心者でも扱いやすい用品を厳選しています。'],
  ['使う順番が分かりやすい', '登る前から片付けまで、流れを作りやすい構成です。'],
];

const reviews = [
  ['初めてのセットに最適', '何を買えばいいか分からなかったので、このセットで迷わず始められました。'],
  ['バッグ内がまとまる', '必要な道具をまとめて入れられるので、ジムに行く前の準備が楽になりました。'],
  ['選びやすい', '単品でそろえるより分かりやすく、必要なものがまとまっていて助かります。'],
];

export default function StarterKit({ addToCart }) {
  const included = starterKitDetail.includedIds.map(getProductById).filter(Boolean);
  const addStarterKit = () => {
    addToCart?.("starter-kit", starterKitDetail.title);
    window.location.hash = "cart";
  };

  return (
    <>
      <section className="section-container grid items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <NeonPanel className="p-3">
          <OptimizedImage src={starterKitDetail.image} alt={starterKitDetail.title} className="aspect-[5/4] w-full object-cover" loading="eager" fetchPriority="high" />
        </NeonPanel>
        <div>
          <p className="eyebrow inline-flex border border-cyan-300/70 bg-cyan-300/10 px-4 py-2">初心者におすすめ</p>
          <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">{starterKitDetail.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{starterKitDetail.lead}</p>
          <PurchasePanel
            title={starterKitDetail.title}
            price={starterKitDetail.purchase.price}
            cta={starterKitDetail.purchase.label}
            href={starterKitDetail.purchase.href}
            bullets={starterKitDetail.benefits.map((benefit) => benefit.title)}
            className="mt-7"
            onAction={addStarterKit}
          />
        </div>
      </section>

      <CyberSection className="section-container">
        <h2 className="mb-6 text-3xl font-black text-white">セット内容</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {included.map((product, index) => (
            <article key={product.id} className="border border-slate-700 bg-slate-950/80 p-4">
              <OptimizedImage src={product.image} alt={product.name} className="aspect-square w-full border border-slate-800 object-cover" />
              <p className="mt-4 text-2xl font-black text-cyan-300">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-1 text-lg font-black text-white">{product.name}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{product.summary}</p>
            </article>
          ))}
        </div>
      </CyberSection>

      <CyberSection className="section-container">
        <NeonPanel accent="magenta" className="grid gap-6 lg:grid-cols-[0.7fr_0.9fr_1fr]">
          <div>
            <h2 className="text-2xl font-black text-white">単品購入とセットの比較</h2>
            <dl className="mt-5 space-y-3 text-sm">
              {included.map((item) => (
                <div key={item.id} className="flex justify-between gap-4 border-b border-slate-800 pb-2">
                  <dt className="text-slate-300">{item.name}</dt>
                  <dd className="font-bold text-white">{item.price}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 pt-2 text-lg font-black">
                <dt>通常合計</dt>
                <dd>¥9,240</dd>
              </div>
            </dl>
          </div>
          <div className="border border-fuchsia-400/60 bg-fuchsia-400/10 p-6 text-center">
            <p className="text-sm font-bold text-fuchsia-200">スターターセットなら</p>
            <p className="mt-2 text-6xl font-black text-orange-300">{starterKitDetail.purchase.price}</p>
            <p className="mt-4 border border-lime-300/70 px-4 py-3 text-2xl font-black text-lime-200">1,260円お得</p>
          </div>
          <div className="grid content-center">
            <OptimizedImage src="/assets/products/hands-chalk.webp" alt="チョークをつけた手" className="aspect-[16/10] w-full border border-slate-700 object-cover" />
          </div>
        </NeonPanel>
      </CyberSection>

      <CyberSection className="section-container">
        <h2 className="mb-6 text-3xl font-black text-white">初心者におすすめの理由</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {reasonCards.map(([title, text], index) => (
            <NeonPanel key={title}>
              <IconSprite index={index + 3} size={36} />
              <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
            </NeonPanel>
          ))}
        </div>
      </CyberSection>

      <CyberSection className="section-container">
        <h2 className="mb-6 text-3xl font-black text-white">ご購入者の声</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map(([title, text]) => (
            <article key={title} className="border border-slate-700 bg-black/50 p-5">
              <p className="text-lime-200">★★★★★</p>
              <h3 className="mt-3 text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </CyberSection>

      <CyberSection className="section-container">
        <h2 className="mb-6 text-3xl font-black text-white">よくあるご質問</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.slice(0, 4).map((faq, index) => (
            <FaqRow key={faq.question} {...faq} defaultOpen={index === 0} />
          ))}
        </div>
      </CyberSection>

      <section className="section-container pb-28">
        <NeonPanel accent="orange" className="grid items-center gap-5 md:grid-cols-[0.2fr_1fr_auto]">
          <OptimizedImage src={starterKitDetail.image} alt="スターターセットの内容" className="aspect-[4/3] w-full object-cover" />
          <div>
            <h2 className="text-3xl font-black text-white">スターターセット</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">必要な道具をまとめて、次の一手に集中するための基本セット。</p>
          </div>
          <Button className="w-full md:w-auto" type="button" onClick={addStarterKit} tracking="add_to_cart" trackingPosition="starter_bottom_cta">スターターセットを購入する</Button>
        </NeonPanel>
      </section>

      <StickyPurchaseBar title={starterKitDetail.title} price={starterKitDetail.purchase.price} cta="セットを購入" onAction={addStarterKit} />
    </>
  );
}
