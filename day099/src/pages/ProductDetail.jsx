import { CyberSection } from '../components/Layout.jsx';
import { IconSprite, NeonPanel, OptimizedImage, SpecRows, StickyPurchaseBar } from '../components/UI.jsx';
import { ProductCard, PurchasePanel } from '../components/Product.jsx';
import { getProductById, liquidChalkDetail, products } from '../data/siteData.js';

const liquidUsageCards = [
  { step: '01', title: '適量を手に取る', text: '手のひらに少量を出し、量は少しずつ調整します。' },
  { step: '02', title: '手全体に広げる', text: '指の腹まで均一に伸ばし、白残りを抑えます。' },
  { step: '03', title: '乾いてから登る', text: '約10〜15秒待ち、さらっとしてからホールドへ。' },
];

const liquidFeatureCards = [
  ['高いグリップ性能', '手汗や皮脂を吸収し、ホールドへの接地感を整えます。'],
  ['速乾タイプ', '待ち時間を短くして、セッションの流れを止めにくくします。'],
  ['白残りを抑える', 'ジムや室内でもクリーンに使いやすい質感です。'],
  ['持ち運びやすい', '液漏れしにくいボトルで、バッグ内でも扱いやすい仕様です。'],
];

const routeToProductId = {
  'product-liquid-chalk': 'liquid-chalk',
  'product-chalk-bag': 'chalk-bag',
  'product-brush': 'brush',
  'product-finger-tape': 'finger-tape',
  'product-grip-balm': 'grip-balm',
  'product-mini-holds': 'mini-holds',
};

const detailCopy = {
  'chalk-bag': {
    badges: ['広口設計', '整理しやすい'],
    lead: 'チョーク、ブラシ、テープをまとめて持ち運びやすい軽量バッグ。ジム到着後の準備を短くし、必要な道具をすぐ取り出せます。',
    gallery: ['/assets/products/chalk-bag.webp', '/assets/products/hero-starter-kit.webp', '/assets/products/finger-tape.webp'],
    highlights: ['広口で手を入れやすい', 'ブラシやテープを外ポケットに収納', 'バッグ内で道具が散らばりにくい'],
    features: [
      ['出し入れしやすい', '広口設計でチョークアップの動作を妨げません。'],
      ['小物をまとめる', 'ブラシやテープを一緒に持てるため、準備が安定します。'],
      ['軽量で持ち運びやすい', 'ジムバッグに収まりやすく、移動時の負担を抑えます。'],
      ['手入れしやすい', '日常的に使いやすいシンプルな構造です。'],
    ],
    usageCards: [
      { step: '01', title: 'チョークを入れる', text: '開口部を広げ、粉やボールをこぼれにくい位置へ入れます。' },
      { step: '02', title: '小物を分ける', text: 'ブラシやテープは外側にまとめ、必要な時にすぐ取り出せるようにします。' },
      { step: '03', title: '使用後に閉じる', text: '移動前に口元を閉じ、バッグ内へのチョーク漏れを抑えます。' },
    ],
  },
  brush: {
    badges: ['細部清掃', '携帯しやすい'],
    lead: 'ホールド表面に残ったチョークを落とし、次の一手の接地感を整えるブラシ。ジムでも自宅練習でも扱いやすいサイズです。',
    gallery: ['/assets/products/brush.webp', '/assets/products/brush-hold.webp', '/assets/products/chalk-bag.webp'],
    highlights: ['細かい凹凸に届きやすい毛先', 'チョークバッグに付けやすいサイズ', 'セッション中のメンテナンスを習慣化しやすい'],
    features: [
      ['摩擦感を戻す', 'チョーク残りを払ってホールドの状態を整えます。'],
      ['細部まで届く', '凹凸のある面にも使いやすい毛先です。'],
      ['携帯しやすい', 'バッグに入れてもかさばりにくいサイズです。'],
      ['練習効率を上げる', '滑りの原因をその場で減らし、集中しやすくします。'],
    ],
    usageCards: [
      { step: '01', title: 'ホールド面を確認', text: 'チョークが溜まった箇所を見つけます。' },
      { step: '02', title: '目に沿って払う', text: '強く押し込みすぎず、表面をなでるように整えます。' },
      { step: '03', title: '毛先を整える', text: '使用後は付いた粉を軽く落として保管します。' },
    ],
  },
  'finger-tape': {
    badges: ['指皮保護', '低伸縮'],
    lead: '指先の消耗が気になる練習日に使いやすいフィンガーテープ。保持感を残しながら、皮膚の負担を抑えます。',
    gallery: ['/assets/products/finger-tape.webp', '/assets/products/hands-chalk.webp', '/assets/products/chalk-bag.webp'],
    highlights: ['指先を保護しながら登れる', '必要な長さで調整しやすい', 'ジムバッグに入れておきやすい'],
    features: [
      ['指先を守る', '練習量が増えた時の皮膚負担を抑えます。'],
      ['貼りやすい幅', '指に巻きやすく、必要な長さに調整できます。'],
      ['動きを邪魔しにくい', 'ホールド感を残しながら保護できます。'],
      ['予備として携帯', 'セッション中の急な違和感にも対応しやすくします。'],
    ],
    usageCards: [
      { step: '01', title: '貼る位置を決める', text: '痛みや摩耗が出やすい箇所を確認します。' },
      { step: '02', title: '軽く引きながら巻く', text: '締め付けすぎず、動きが残る強さで巻きます。' },
      { step: '03', title: '登る前に確認', text: '剥がれや違和感がないか確認してから登ります。' },
    ],
  },
  'grip-balm': {
    badges: ['練習後ケア', 'さらっと保湿'],
    lead: '登った後の乾燥した手肌を整えるケア用品。翌日の練習に向けて、指先のコンディションを保ちやすくします。',
    gallery: ['/assets/products/grip-balm.webp', '/assets/products/hands-chalk.webp', '/assets/products/finger-tape.webp'],
    highlights: ['練習後の手肌を整える', 'べたつきを抑えた質感', '小型ケースで持ち運びやすい'],
    features: [
      ['手肌を整える', '乾燥した指先のコンディション維持を助けます。'],
      ['さらっと使える', '練習後でも扱いやすい質感です。'],
      ['持ち運びやすい', 'バッグの小物入れに収まりやすいサイズです。'],
      ['継続しやすい', 'ジム後の片付けと一緒に使いやすいケアです。'],
    ],
    usageCards: [
      { step: '01', title: '手を清潔にする', text: 'チョークを落としてから少量を取ります。' },
      { step: '02', title: '指先になじませる', text: '乾燥が気になる箇所を中心に薄く伸ばします。' },
      { step: '03', title: '保管する', text: '使用後はフタを閉め、バッグ内で開かないようにします。' },
    ],
  },
  'mini-holds': {
    badges: ['自宅練習', 'フォーム確認'],
    lead: '指先の置き方や体の向きを確認しやすい小型ホールド。自宅でのフォーム練習やウォームアップに使えます。',
    gallery: ['/assets/products/mini-holds.webp', '/assets/products/brush-hold.webp', '/assets/products/hero-starter-kit.webp'],
    highlights: ['指先の置き方を確認しやすい', 'フォーム練習に使いやすい小型サイズ', '自宅の補助練習に取り入れやすい'],
    features: [
      ['フォーム確認', '指先と体の向きを落ち着いて確認できます。'],
      ['小型で扱いやすい', '限られたスペースでも練習に取り入れやすいサイズです。'],
      ['粗めの質感', 'ホールドへの接地感を意識しやすくします。'],
      ['継続練習向け', 'ジム以外でも基本動作を確認できます。'],
    ],
    usageCards: [
      { step: '01', title: '安全な場所に置く', text: '滑りにくい場所で、無理な負荷がかからない形にします。' },
      { step: '02', title: '指先を置く', text: '握り込まず、接地する感覚を確認します。' },
      { step: '03', title: '短時間で区切る', text: '疲労をためすぎず、フォーム確認を中心に使います。' },
    ],
  },
};

function buildDetail(product) {
  if (product.id === liquidChalkDetail.productId) {
    return {
      ...liquidChalkDetail,
      badges: ['速乾タイプ', '白残りを抑える'],
      features: liquidFeatureCards,
      usageCards: liquidUsageCards,
    };
  }
  const copy = detailCopy[product.id] || {};
  return {
    lead: copy.lead || product.summary,
    gallery: copy.gallery || [product.image],
    purchase: { label: `${product.name}をカートに入れる`, href: '#cart', price: product.price },
    highlights: copy.highlights || product.specs.map(([label, value]) => `${label}: ${value}`),
    specs: product.specs,
    badges: copy.badges || [product.category],
    features: copy.features || [
      ['扱いやすい設計', product.summary],
      ['持ち運びやすい', 'ジムバッグに入れておきやすいサイズ感です。'],
      ['基本ギアとして使える', '日々の練習前後で役立つ構成です。'],
      ['組み合わせやすい', 'スターターセットや他の単品と合わせて使えます。'],
    ],
    usageCards: copy.usageCards || [
      { step: '01', title: '準備する', text: '登る前に取り出しやすい場所へ置きます。' },
      { step: '02', title: '状態を確認する', text: '破損や汚れがないか確認します。' },
      { step: '03', title: '使用後にしまう', text: '次回も使いやすいようにバッグへ戻します。' },
    ],
  };
}

export default function ProductDetail({ addToCart, activeRoute = 'product-liquid-chalk' }) {
  const productId = routeToProductId[activeRoute] || liquidChalkDetail.productId;
  const product = getProductById(productId) || getProductById(liquidChalkDetail.productId);
  const detail = buildDetail(product);
  const related = products.filter((item) => item.id !== product.id).slice(1, 6);
  const addCurrentProduct = () => {
    addToCart?.(product.id, product.name);
    window.location.hash = "cart";
  };

  return (
    <>
      <section className="section-container grid gap-8 py-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <NeonPanel className="p-3">
            <OptimizedImage src={detail.gallery[0]} alt={product.name} className="aspect-[4/3] w-full object-cover" loading="eager" fetchPriority="high" />
          </NeonPanel>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {detail.gallery.map((image, index) => (
              <OptimizedImage
                key={`${image}-${index}`}
                src={image}
                alt={`${product.name}のギャラリー画像 ${index + 1}`}
                className="aspect-square w-full border border-slate-700 object-cover first:border-cyan-300"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {detail.badges.map((badge, index) => (
              <span
                key={badge}
                className={`border px-3 py-1 text-sm font-bold ${
                  index % 2 === 0
                    ? 'border-cyan-300 bg-cyan-300/10 text-cyan-100'
                    : 'border-fuchsia-400 bg-fuchsia-400/10 text-fuchsia-100'
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-5xl font-black leading-tight text-white md:text-6xl">{product.name}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">{detail.lead}</p>
          <p className="mt-5 text-5xl font-black text-white">{detail.purchase.price}<span className="ml-2 text-base text-slate-300">税込</span></p>
          <SpecRows rows={detail.specs} className="mt-6" />
          <PurchasePanel
            title={product.name}
            price={detail.purchase.price}
            cta={detail.purchase.label}
            href={detail.purchase.href}
            bullets={detail.highlights}
            className="mt-6"
            onAction={addCurrentProduct}
          />
        </div>
      </section>

      <CyberSection className="section-container">
        <div className="grid gap-4 md:grid-cols-4">
          {detail.features.map(([title, text], index) => (
            <NeonPanel key={title} className="text-center">
              <IconSprite index={index + 1} size={38} className="mx-auto" />
              <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </NeonPanel>
          ))}
        </div>
      </CyberSection>

      <CyberSection className="section-container grid gap-6 lg:grid-cols-2">
        <NeonPanel accent="magenta">
          <h2 className="text-2xl font-black text-white">使い方</h2>
          <div className="mt-5 space-y-4">
            {detail.usageCards.map((card) => (
              <div key={card.step} className="grid gap-4 border border-slate-800 bg-black/40 p-4 sm:grid-cols-[5rem_1fr]">
                <span className="text-3xl font-black text-fuchsia-300">{card.step}</span>
                <div>
                  <h3 className="font-black text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </NeonPanel>
        <NeonPanel>
          <h2 className="text-2xl font-black text-white">スペック</h2>
          <SpecRows rows={detail.specs} className="mt-5" />
          <p className="mt-4 text-sm leading-7 text-slate-400">使用前に状態を確認し、違和感がある場合は無理に使わないでください。</p>
        </NeonPanel>
      </CyberSection>

      <CyberSection className="section-container pb-28">
        <h2 className="mb-6 text-3xl font-black text-white">関連アイテム</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} cta="見る" />
          ))}
        </div>
      </CyberSection>

      <StickyPurchaseBar title={product.name} price={detail.purchase.price} cta="カートに入れる" onAction={addCurrentProduct} />
    </>
  );
}
