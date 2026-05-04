import { useMemo, useState } from 'react';
import { CyberSection } from '../components/Layout.jsx';
import { Button, NeonPanel, OptimizedImage, SectionHeader } from '../components/UI.jsx';
import { ProductGrid } from '../components/Product.jsx';
import { productCategories, products, starterKitDetail } from '../data/siteData.js';

const compareRows = ['グリップ力', '携帯性', 'メンテナンス性', '初心者おすすめ度'];
const categoryOptions = ['すべて', 'セット', ...productCategories];
const priceValue = (price) => Number(price.replace(/[^\d]/g, ''));

export default function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [sortOrder, setSortOrder] = useState('recommended');
  const [notice, setNotice] = useState('');

  const visibleProducts = useMemo(() => {
    const filtered =
      selectedCategory === 'すべて'
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      if (sortOrder === 'price-asc') {
        return priceValue(a.price) - priceValue(b.price);
      }
      if (sortOrder === 'starter') {
        const score = (product) => (product.id === 'starter-kit' ? 0 : product.badge === '初回推奨' ? 1 : 2);
        return score(a) - score(b);
      }
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id);
    });
  }, [selectedCategory, sortOrder]);

  const addProductToCart = (productId, productName) => {
    const message = addToCart?.(productId, productName);
    setNotice(message || `${productName}をカートに追加しました。`);
  };

  return (
    <>
      <section className="section-container grid items-center gap-8 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">商品ラインナップ</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-tight text-white md:text-7xl">
            必要なギアをまとめて選ぶ
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            登る前の準備を整える基本ギアを厳選。単品購入からスターターセットまで、目的に合わせて選べます。
          </p>
        </div>
        <NeonPanel className="p-3">
          <OptimizedImage src="/assets/products/hero-starter-kit.webp" alt="商品ラインナップ" className="aspect-[16/9] w-full object-cover" loading="eager" fetchPriority="high" />
        </NeonPanel>
      </section>

      <CyberSection className="section-container">
        <div className="mb-6 flex flex-col gap-4 border-y border-slate-800 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-3 overflow-x-auto">
            {categoryOptions.map((category) => (
              <button
                key={category}
                className={`shrink-0 border px-5 py-3 text-sm font-bold transition ${
                  selectedCategory === category
                    ? 'border-cyan-300 bg-cyan-300/12 text-white shadow-[0_0_18px_rgba(0,229,255,0.22)]'
                    : 'border-cyan-300/50 bg-black/40 text-cyan-100 hover:border-fuchsia-400'
                }`}
                type="button"
                aria-pressed={selectedCategory === category}
                data-category-filter={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            className="min-h-11 border border-slate-700 bg-black px-4 py-3 text-sm font-bold text-white"
            aria-label="並び替え"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="recommended">おすすめ順</option>
            <option value="price-asc">価格が低い順</option>
            <option value="starter">初めて向け順</option>
          </select>
        </div>
        <p className="mb-4 min-h-6 text-sm font-bold text-lime-200" role="status" aria-live="polite">
          {notice}
        </p>
        <ProductGrid products={visibleProducts} cta="カートに追加" onAddToCart={addProductToCart} />
      </CyberSection>

      <CyberSection className="section-container">
        <SectionHeader eyebrow="比較表" title="ギア比較表" lead="用途に合わせて、今必要なギアを選びやすく整理しました。" />
        <div className="overflow-x-auto border border-slate-700 bg-black/50">
          <table className="w-full min-w-[840px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-slate-300">
                <th className="px-4 py-4 text-left">評価項目</th>
                {products.slice(0, 6).map((product) => (
                  <th key={product.id} className="px-4 py-4 text-left">{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, rowIndex) => (
                <tr key={row} className="border-b border-slate-800">
                  <th className="px-4 py-4 text-left font-bold text-cyan-200">{row}</th>
                  {products.slice(0, 6).map((product, index) => (
                    <td key={`${product.id}-${row}`} className="px-4 py-4 text-lime-200">
                      {'★'.repeat(Math.max(2, 5 - ((index + rowIndex) % 3)))}
                      <span className="text-slate-600">{'★'.repeat(Math.min(3, (index + rowIndex) % 3))}</span>
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th className="px-4 py-4 text-left font-bold text-orange-200">価格</th>
                {products.slice(0, 6).map((product) => (
                  <td key={`${product.id}-price`} className="px-4 py-4 font-black text-white">{product.price}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </CyberSection>

      <section className="section-container pb-20">
        <NeonPanel accent="magenta" className="grid items-center gap-6 md:grid-cols-[0.22fr_1fr_auto]">
          <OptimizedImage src={starterKitDetail.image} alt="スターターギアセット" className="aspect-[4/3] w-full object-cover" />
          <div>
            <p className="eyebrow">おすすめセット</p>
            <h2 className="mt-2 text-3xl font-black text-white">スターターセット</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              まずはこれがあれば安心。必要なギアをまとめてそろえ、単品で迷う時間を減らせる構成です。
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm font-bold text-slate-400">セット価格</p>
            <p className="text-5xl font-black text-fuchsia-300">{starterKitDetail.purchase.price}</p>
            <Button href="#starter-kit" className="mt-4 w-full md:w-auto" tracking="cta_click" trackingPosition="products_set_panel">まとめて購入する</Button>
          </div>
        </NeonPanel>
      </section>
    </>
  );
}
