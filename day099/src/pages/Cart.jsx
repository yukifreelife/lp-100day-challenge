import { useState } from "react";
import { ProductCard } from "../components/Product";
import { Button, NeonPanel, OptimizedImage, SectionHeader } from "../components/UI";
import { cart, products } from "../data/siteData";
import {
  couponCode,
  formatPrice,
  getCartSummary,
  priceValue,
} from "../utils/cartMath";

const servicePanels = [
  ["お届けについて", "最短翌日発送", "平日14時までのご注文は当日発送の対象です。"],
  ["送料無料", "税込10,000円以上", "ご注文金額に応じて送料が自動で更新されます。"],
  ["お支払い方法", "複数の決済に対応", "カード決済、コンビニ払い、銀行振込、あと払いに対応しています。"],
  ["安全な決済", "情報を暗号化", "入力情報は暗号化され、安全に保護されます。"],
];

const trustItems = [
  ["安全な決済", "個人情報を暗号化して安全に保護しています。"],
  ["7日以内返品受付", "未使用・未開封に限り返品を承ります。"],
  ["カスタマーサポート", "不明点はお気軽にお問い合わせください。"],
  ["安心の品質", "快適なクライミングをサポートする構成です。"],
];

export default function Cart({
  cartItems: items = cart.items,
  updateCartQuantity,
  removeCartItem,
  addToCart,
  couponApplied = false,
  applyCouponCode,
  removeCoupon,
}) {
  const [couponInput, setCouponInput] = useState("");
  const [notice, setNotice] = useState("");
  const related = [products[2], products[3], products[4], products[5], products[6]].filter(Boolean);
  const summary = getCartSummary(items, { couponApplied });
  const cartItems = summary.enrichedItems;
  const selectedItems = summary.selectedItems;

  const showNotice = (message) => {
    setNotice(message);
  };

  const updateQuantity = (productId, productName, nextQuantity) => {
    const quantity = Math.max(0, nextQuantity);
    updateCartQuantity?.(productId, quantity);
    showNotice(quantity === 0 ? `${productName}の数量を0にしました。購入対象から外れます。` : "数量を更新しました。");
  };

  const removeItem = (productId, productName) => {
    removeCartItem?.(productId);
    showNotice(`${productName}をカートから削除しました。`);
  };

  const addRelatedItem = (productId, productName) => {
    const message = addToCart?.(productId, productName);
    showNotice(message || `${productName}をカートに追加しました。`);
  };

  const applyCoupon = () => {
    const result = applyCouponCode?.(couponInput) || { ok: false, message: "クーポンを適用できませんでした。" };
    showNotice(result.message);
    if (result.ok) {
      setCouponInput(couponCode);
    }
  };

  const clearCoupon = () => {
    removeCoupon?.();
    showNotice("クーポンを解除しました。");
  };

  return (
    <div className="pb-44 md:pb-28">
      <section className="section-container py-12">
        <p className="text-sm font-bold text-slate-400">ホーム ＞ カート</p>
        <h1 className="mt-6 inline-block border border-cyan-300/70 px-6 py-3 text-4xl font-black text-white md:text-6xl">カート</h1>
        <p className="mt-5 leading-7 text-slate-300">商品の内容をご確認ください。</p>
      </section>

      <section className="section-container grid gap-6 pb-10 lg:grid-cols-[1fr_360px]">
        <NeonPanel accent="cyan" className="p-4 md:p-6">
          <div className="grid grid-cols-[1fr_auto] border-b border-slate-700 pb-4 text-sm font-bold text-slate-400">
            <span>商品</span>
            <span className="text-right">数量・金額</span>
          </div>

          <div className="divide-y divide-slate-700/80">
            {cartItems.length > 0 ? (
              cartItems.map(({ product, quantity }) => (
                <article
                  key={product.id}
                  className={`grid gap-4 py-6 md:grid-cols-[180px_minmax(0,1fr)_minmax(148px,auto)] md:items-center ${quantity === 0 ? "opacity-70" : ""}`}
                  data-cart-item={product.id}
                  data-cart-quantity={quantity}
                >
                  <OptimizedImage src={product.image} alt={product.name} className="aspect-square w-full border border-slate-700 object-cover md:w-40" />
                  <div>
                    <p className="inline-block border border-fuchsia-400 px-2 py-1 text-xs font-bold text-fuchsia-200">{product.badge || product.category}</p>
                    <h2 className="mt-3 text-2xl font-black text-white">{product.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{product.summary}</p>
                    <p
                      className={`mt-2 min-h-5 text-sm font-bold leading-5 ${quantity === 0 ? "text-lime-200" : "text-transparent"}`}
                      aria-live="polite"
                      aria-hidden={quantity === 0 ? undefined : true}
                    >
                      {quantity === 0 ? "数量0のため購入対象外です。" : ""}
                    </p>
                    <button
                      className="mt-3 min-h-11 text-xs font-bold text-slate-400 transition hover:text-fuchsia-200"
                      type="button"
                      onClick={() => removeItem(product.id, product.name)}
                    >
                      削除
                    </button>
                  </div>
                  <div className="flex flex-col gap-3 md:items-end md:justify-self-end">
                    <div className="flex w-[148px] items-center border border-slate-600 bg-black/40" aria-label={`${product.name}の数量`}>
                      <button
                        className="h-11 w-11 shrink-0 border-r border-slate-600 text-xl text-slate-200 transition hover:bg-cyan-300/10"
                        type="button"
                        aria-label={`${product.name}を減らす`}
                        onClick={() => updateQuantity(product.id, product.name, quantity - 1)}
                      >
                        −
                      </button>
                      <span className="grid h-11 flex-1 place-items-center font-black text-white" aria-live="polite" data-cart-quantity-value={product.id}>{quantity}</span>
                      <button
                        className="h-11 w-11 shrink-0 border-l border-slate-600 text-xl text-slate-200 transition hover:bg-cyan-300/10"
                        type="button"
                        aria-label={`${product.name}を増やす`}
                        onClick={() => updateQuantity(product.id, product.name, quantity + 1)}
                      >
                        ＋
                      </button>
                    </div>
                    <p className="min-w-[148px] text-left text-2xl font-black text-white md:text-right" data-line-total={product.id}>
                      {formatPrice(priceValue(product.price) * quantity)}
                    </p>
                  </div>
                </article>
              ))
            ) : (
              <div className="py-10 text-center">
                <h2 className="text-2xl font-black text-white">カートは空です</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">商品ラインナップから必要なギアを追加できます。</p>
                <Button href="#products" className="mt-5" tracking="cta_click" trackingPosition="empty_cart">商品を見る</Button>
              </div>
            )}
          </div>

          <div className="mt-6 border border-lime-300/70 bg-lime-300/5 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-black text-white">{summary.freeShippingRemaining === 0 ? "送料無料が適用されています" : "送料無料まであと少しです"}</h2>
              <p className="font-bold text-slate-300">
                {summary.freeShippingRemaining === 0 ? "送料0円" : `あと${formatPrice(summary.freeShippingRemaining)}`}
              </p>
            </div>
            <div className="mt-4 h-5 overflow-hidden border border-lime-300 bg-black">
              <div
                className="h-full bg-[repeating-linear-gradient(135deg,#b6ff3b_0_10px,#8cd92c_10px_20px)]"
                style={{ width: `${summary.shippingProgress}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-slate-400">税込10,000円以上の購入で送料無料になります。</p>
          </div>
        </NeonPanel>

        <NeonPanel accent="orange" className="h-fit">
          <h2 className="text-2xl font-black text-white">ご注文内容</h2>
          <div className="mt-6 space-y-4">
            {summary.rows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 text-lg">
                <span className="font-bold text-slate-300">{label}</span>
                <span className={label === "合計" ? "text-4xl font-black text-orange-300" : "font-black text-white"} data-cart-total={label === "合計" ? "true" : undefined}>{value}</span>
              </div>
            ))}
          </div>
          <div className="my-6 h-px bg-slate-700" />
          <label className="text-sm font-bold text-slate-300" htmlFor="coupon">クーポンコード</label>
          <p className="mt-2 text-xs font-bold leading-5 text-slate-400">
            現在利用できるコード: <span className="text-lime-200">{couponCode}</span>
          </p>
          <div className="mt-2 flex gap-2">
            <input
              id="coupon"
              className="min-h-11 min-w-0 flex-1 border border-slate-700 bg-black/40 px-3 py-3 text-sm text-white"
              placeholder="コードを入力"
              value={couponInput}
              onChange={(event) => setCouponInput(event.target.value)}
              disabled={couponApplied}
            />
            <Button variant="secondary" className="px-4" onClick={applyCoupon} tracking="coupon_apply" trackingPosition="cart_summary">
              適用
            </Button>
          </div>
          {couponApplied && (
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border border-lime-300/60 bg-lime-300/10 px-3 py-2 text-sm font-bold text-lime-100">
              <span>{couponCode} 適用中</span>
              <button className="min-h-9 text-xs text-slate-200 underline-offset-4 hover:underline" type="button" onClick={clearCoupon}>
                解除
              </button>
            </div>
          )}
          <p className="mt-3 min-h-6 text-sm font-bold text-lime-200" role="status" aria-live="polite">{notice}</p>
          <Button
            href={selectedItems.length > 0 ? "#checkout" : undefined}
            className="mt-4 w-full"
            tracking="begin_checkout"
            trackingPosition="cart_summary"
            type={selectedItems.length > 0 ? undefined : "button"}
            disabled={selectedItems.length === 0}
          >
            {cart.checkoutCta}
          </Button>
          <div className="mt-5 border border-cyan-300/60 p-4 text-center">
            <p className="font-black text-cyan-200">最短翌日発送</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">平日14時までのご注文は当日発送の対象です。</p>
          </div>
        </NeonPanel>
      </section>

      <section className="section-container grid gap-4 pb-10 md:grid-cols-2 lg:grid-cols-4">
        {servicePanels.map(([group, title, text]) => (
          <NeonPanel key={title} accent={group === "安全な決済" ? "cyan" : "cyan"}>
            <p className="eyebrow">{group}</p>
            <h3 className="mt-2 text-xl font-black text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
          </NeonPanel>
        ))}
      </section>

      <section className="section-container pb-10">
        <SectionHeader eyebrow="関連アイテム" title="一緒に購入されているアイテム" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} cta="カートに追加" onAddToCart={addRelatedItem} />
          ))}
        </div>
      </section>

      <section className="section-container pb-12">
        <div className="grid gap-4 border border-fuchsia-400/70 bg-black/60 p-5 md:grid-cols-4">
          {trustItems.map(([title, text]) => (
            <div key={title} className="border-slate-700 md:border-r md:pr-4 md:last:border-r-0">
              <h3 className="font-black text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cyan-300/70 bg-black/92 px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:px-4 md:py-4" data-cart-sticky-summary>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-slate-400 md:text-sm">ご注文合計</p>
            <p className="text-2xl font-black text-orange-300 md:text-3xl">{formatPrice(summary.total)}<span className="ml-1 text-xs text-orange-200 md:text-sm">税込</span></p>
          </div>
          <div className="hidden text-sm font-bold text-lime-200 sm:block">
            {summary.freeShippingRemaining === 0 ? "送料無料適用中" : `送料無料まであと${formatPrice(summary.freeShippingRemaining)}`}
          </div>
          <Button href={selectedItems.length > 0 ? "#checkout" : undefined} className="shrink-0 px-4 py-3 text-xs md:min-w-[260px] md:text-sm" tracking="begin_checkout" trackingPosition="sticky_cart" disabled={selectedItems.length === 0}>
            {cart.checkoutCta}
          </Button>
        </div>
      </div>
    </div>
  );
}
