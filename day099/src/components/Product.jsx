import { Button, NeonPanel, OptimizedImage, SpecRows } from "./UI";

const join = (...classes) => classes.filter(Boolean).join(" ");

export function ProductCard({ product, cta = "詳しく見る", className = "", onAddToCart }) {
  const isCartAction = cta.includes("カート") && typeof onAddToCart === "function";

  return (
    <article
      className={join("group border border-slate-700 bg-slate-950/80 p-4 transition hover:border-cyan-300/80", className)}
      data-product-id={product.id}
      data-category={product.category}
    >
      <a href={product.href} className="block overflow-hidden border border-slate-800 bg-black">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </a>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-cyan-300">{product.category}</p>
          <h3 className="mt-1 text-xl font-black text-white">{product.name}</h3>
        </div>
        {product.badge && (
          <span className="border border-lime-300/60 bg-lime-300/10 px-2 py-1 text-xs font-bold text-lime-200">
            {product.badge}
          </span>
        )}
      </div>
      <p className="mt-3 min-h-14 text-sm leading-7 text-slate-300">{product.summary}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-2xl font-black text-orange-300">{product.price}</p>
        <Button
          href={isCartAction ? undefined : product.href}
          variant="secondary"
          className="px-4 py-2 text-xs"
          tracking={cta.includes("カート") ? "add_to_cart" : "cta_click"}
          trackingPosition="product_card"
          type={isCartAction ? "button" : undefined}
          onClick={isCartAction ? () => onAddToCart(product.id, product.name) : undefined}
          data-add-product={isCartAction ? product.id : undefined}
        >
          {cta}
        </Button>
      </div>
    </article>
  );
}

export function ProductGrid({ products = [], className = "" }) {
  return (
    <div className={join("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)} data-testid="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export function ProductHero({ product, lead, children, className = "" }) {
  return (
    <section className={join("grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]", className)}>
      <div>
        <p className="text-xs font-bold uppercase text-cyan-300">{product.category}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-white md:text-6xl">{product.name}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{lead || product.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href="#cart" tracking="add_to_cart" trackingPosition="product_hero">カートに入れる</Button>
          <Button href="#guide" variant="secondary" tracking="cta_click" trackingPosition="product_hero">
            選び方を見る
          </Button>
        </div>
      </div>
      <NeonPanel className="p-3">
        <OptimizedImage src={product.image} alt={product.name} className="aspect-[5/4] w-full object-cover" loading="eager" fetchPriority="high" />
      </NeonPanel>
      {children}
    </section>
  );
}

export function ProductSpecBlock({ title = "仕様", rows = [], className = "" }) {
  return (
    <NeonPanel accent="magenta" className={className}>
      <h3 className="mb-4 text-xl font-black text-white">{title}</h3>
      <SpecRows rows={rows} />
    </NeonPanel>
  );
}

export function PurchasePanel({ title, price, cta = "購入へ進む", href = "#cart", bullets = [], className = "", onAction }) {
  return (
    <NeonPanel accent="orange" className={join("space-y-5", className)}>
      <div>
        <p className="text-sm font-bold text-cyan-300">購入パネル</p>
        <h3 className="mt-1 text-2xl font-black text-white">{title}</h3>
      </div>
      <p className="text-4xl font-black text-orange-300">{price}</p>
      {bullets.length > 0 && (
        <ul className="space-y-2 text-sm leading-7 text-slate-300">
          {bullets.map((bullet) => (
            <li key={bullet} className="border-l-2 border-cyan-300/70 pl-3">
              {bullet}
            </li>
          ))}
        </ul>
      )}
      <Button
        href={onAction ? undefined : href}
        className="w-full"
        tracking={cta.includes("カート") || cta.includes("購入") ? "add_to_cart" : "cta_click"}
        trackingPosition="purchase_panel"
        type={onAction ? "button" : undefined}
        onClick={onAction}
      >
        {cta}
      </Button>
    </NeonPanel>
  );
}
