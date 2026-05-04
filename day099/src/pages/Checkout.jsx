import { useState } from "react";
import { Button, NeonPanel, OptimizedImage } from "../components/UI";
import { trackEvent } from "../utils/analytics";
import { couponCode, formatPrice, getCartSummary, priceValue } from "../utils/cartMath";

const paymentMethods = [
  ["card", "クレジットカード", "次の画面でカード情報を入力します。"],
  ["convenience", "コンビニ払い", "受付番号を発行して店頭で支払います。"],
  ["bank", "銀行振込", "注文確認後に振込先を案内します。"],
  ["deferred", "あと払い", "商品到着後に支払い案内を確認します。"],
];

const deliveryWindows = ["指定なし", "午前中", "14:00-16:00", "18:00-20:00"];
const inputClass = "mt-2 min-h-12 w-full border border-slate-700 bg-black/40 px-3 py-3 text-sm text-white";
const fieldLabelClass = "block text-sm font-bold text-slate-300";
const fieldErrorClass = "mt-2 block text-xs text-orange-200";

export default function Checkout({ cartItems = [], couponApplied = false }) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryWindow, setDeliveryWindow] = useState("指定なし");
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    postalCode: "",
    address: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  const summary = getCartSummary(cartItems, { couponApplied });

  const selectPayment = (method) => {
    setPaymentMethod(method);
    trackEvent("payment_method_select", { payment_method: method });
  };

  const updateCustomer = (field, value) => {
    setCustomer((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateCheckout = () => {
    const nextErrors = {};
    if (!customer.name.trim()) nextErrors.name = "お名前を入力してください。";
    if (!customer.email.trim()) {
      nextErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email.trim())) {
      nextErrors.email = "メールアドレスの形式を確認してください。";
    }
    if (!customer.postalCode.trim()) nextErrors.postalCode = "郵便番号を入力してください。";
    if (!customer.address.trim()) nextErrors.address = "配送先住所を入力してください。";
    if (!agreed) nextErrors.agreed = "確認事項への同意が必要です。";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const confirmOrder = () => {
    if (!validateCheckout()) {
      setNotice("未入力の項目を確認してください。");
      return;
    }
    trackEvent("checkout_confirm_view", {
      payment_method: paymentMethod,
      value: summary.total,
      item_count: summary.selectedItems.length,
      delivery_window: deliveryWindow,
    });
    setNotice("確認が完了しました。実際の注文確定は次の手続きで行います。");
  };

  if (summary.selectedItems.length === 0) {
    return (
      <div className="pb-24">
        <section className="section-container py-14">
          <NeonPanel accent="orange" className="text-center">
            <p className="eyebrow">購入手続き</p>
            <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">購入対象の商品がありません</h1>
            <p className="mt-4 leading-7 text-slate-300">カートで数量を1以上にしてから、購入手続きへ進んでください。</p>
            <Button href="#cart" className="mt-6" tracking="cta_click" trackingPosition="checkout_empty">
              カートへ戻る
            </Button>
          </NeonPanel>
        </section>
      </div>
    );
  }

  return (
    <div className="pb-28">
      <section className="section-container py-12">
        <p className="text-sm font-bold text-slate-400">ホーム ＞ カート ＞ 購入手続き</p>
        <h1 className="mt-6 text-4xl font-black text-white md:text-6xl">購入手続き</h1>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">
          選択した商品の画像、個数、金額を確認し、支払い方法を選択してください。
        </p>
      </section>

      <section className="section-container grid gap-6 pb-14 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <NeonPanel accent="cyan" className="p-4 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4">
              <h2 className="text-2xl font-black text-white">選択した商品</h2>
              <Button href="#cart" variant="secondary" className="px-4 py-2 text-xs" tracking="cta_click" trackingPosition="checkout_back_cart">
                カートで数量を変更
              </Button>
            </div>
            <div className="divide-y divide-slate-700/80">
              {summary.selectedItems.map(({ product, quantity }) => (
                <article
                  key={product.id}
                  className="grid gap-4 py-6 md:grid-cols-[120px_1fr_auto] md:items-center"
                  data-checkout-item={product.id}
                >
                  <OptimizedImage src={product.image} alt={product.name} className="aspect-square w-full border border-slate-700 object-cover md:w-28" />
                  <div>
                    <p className="inline-block border border-cyan-300/70 px-2 py-1 text-xs font-bold text-cyan-100">{product.category}</p>
                    <h3 className="mt-3 text-2xl font-black text-white">{product.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{product.summary}</p>
                    <p className="mt-3 text-sm font-bold text-slate-300">
                      単価 {product.price} × <span data-checkout-quantity={product.id}>{quantity}</span>点
                    </p>
                  </div>
                  <p className="text-right text-2xl font-black text-orange-300" data-checkout-line-total={product.id}>
                    {formatPrice(priceValue(product.price) * quantity)}
                  </p>
                </article>
              ))}
            </div>
          </NeonPanel>

          <NeonPanel accent="magenta">
            <fieldset>
              <legend className="text-2xl font-black text-white">支払い方法</legend>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {paymentMethods.map(([value, label, description]) => (
                  <label
                    key={value}
                    className={`block cursor-pointer border p-4 transition ${
                      paymentMethod === value
                        ? "border-lime-300 bg-lime-300/10 shadow-[0_0_20px_rgba(182,255,59,0.18)]"
                        : "border-slate-700 bg-black/30 hover:border-cyan-300"
                    }`}
                    data-payment-method={value}
                  >
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment-method"
                        value={value}
                        checked={paymentMethod === value}
                        onChange={() => selectPayment(value)}
                        className="h-5 w-5 accent-lime-300"
                      />
                      <span className="font-black text-white">{label}</span>
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-slate-400">{description}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </NeonPanel>

          <NeonPanel accent="cyan">
            <h2 className="text-2xl font-black text-white">配送先・連絡先</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <label className={fieldLabelClass} htmlFor="checkout-name">お名前</label>
                <input
                  id="checkout-name"
                  className={inputClass}
                  value={customer.name}
                  onChange={(event) => updateCustomer("name", event.target.value)}
                  autoComplete="name"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "checkout-name-error" : undefined}
                />
                {errors.name && <span id="checkout-name-error" className={fieldErrorClass}>{errors.name}</span>}
              </div>
              <div>
                <label className={fieldLabelClass} htmlFor="checkout-email">メールアドレス</label>
                <input
                  id="checkout-email"
                  className={inputClass}
                  type="email"
                  value={customer.email}
                  onChange={(event) => updateCustomer("email", event.target.value)}
                  autoComplete="email"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "checkout-email-error" : undefined}
                />
                {errors.email && <span id="checkout-email-error" className={fieldErrorClass}>{errors.email}</span>}
              </div>
              <div>
                <label className={fieldLabelClass} htmlFor="checkout-postal-code">郵便番号</label>
                <input
                  id="checkout-postal-code"
                  className={inputClass}
                  inputMode="numeric"
                  value={customer.postalCode}
                  onChange={(event) => updateCustomer("postalCode", event.target.value)}
                  autoComplete="postal-code"
                  placeholder="100-0001"
                  aria-invalid={errors.postalCode ? "true" : undefined}
                  aria-describedby={errors.postalCode ? "checkout-postal-code-error" : undefined}
                />
                {errors.postalCode && <span id="checkout-postal-code-error" className={fieldErrorClass}>{errors.postalCode}</span>}
              </div>
              <div>
                <label className={fieldLabelClass} htmlFor="checkout-delivery-window">お届け時間帯</label>
                <select
                  id="checkout-delivery-window"
                  className={inputClass}
                  value={deliveryWindow}
                  onChange={(event) => setDeliveryWindow(event.target.value)}
                >
                  {deliveryWindows.map((windowLabel) => (
                    <option key={windowLabel} value={windowLabel}>{windowLabel}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={fieldLabelClass} htmlFor="checkout-address">配送先住所</label>
                <input
                  id="checkout-address"
                  className={inputClass}
                  value={customer.address}
                  onChange={(event) => updateCustomer("address", event.target.value)}
                  autoComplete="street-address"
                  placeholder="東京都千代田区..."
                  aria-invalid={errors.address ? "true" : undefined}
                  aria-describedby={errors.address ? "checkout-address-error" : undefined}
                />
                {errors.address && <span id="checkout-address-error" className={fieldErrorClass}>{errors.address}</span>}
              </div>
            </div>
          </NeonPanel>
        </div>

        <NeonPanel accent="orange" className="h-fit">
          <h2 className="text-2xl font-black text-white">確認内容</h2>
          <div className="mt-6 space-y-4">
            {summary.rows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 text-lg">
                <span className="font-bold text-slate-300">{label}</span>
                <span
                  className={label === "合計" ? "text-4xl font-black text-orange-300" : "font-black text-white"}
                  data-checkout-total={label === "合計" ? "true" : undefined}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
          <div className="my-6 h-px bg-slate-700" />
          {couponApplied && (
            <div className="mb-5 border border-lime-300/60 bg-lime-300/10 px-3 py-2 text-sm font-bold text-lime-100">
              クーポン {couponCode} を適用中です。
            </div>
          )}
          <p className="text-sm font-bold text-slate-400">選択中の支払い方法</p>
          <p className="mt-2 text-xl font-black text-lime-200" data-selected-payment={paymentMethod}>
            {paymentMethods.find(([value]) => value === paymentMethod)?.[1]}
          </p>
          <p className="mt-4 text-sm font-bold text-slate-400">お届け時間帯</p>
          <p className="mt-1 text-base font-black text-white">{deliveryWindow}</p>
          <label className="mt-5 flex cursor-pointer items-start gap-3 border border-slate-700 bg-black/30 p-3 text-sm font-bold leading-6 text-slate-200">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) => {
                setAgreed(event.target.checked);
                setErrors((current) => ({ ...current, agreed: undefined }));
              }}
              className="mt-1 h-5 w-5 accent-lime-300"
            />
            <span>注文内容、配送先、支払い方法、返品条件を確認しました。</span>
          </label>
          {errors.agreed && <p className="mt-2 text-xs font-bold text-orange-200">{errors.agreed}</p>}
          <Button className="mt-6 w-full" type="button" onClick={confirmOrder} tracking="checkout_confirm" trackingPosition="checkout_summary">
            確認内容を確定する
          </Button>
          <p className="mt-4 min-h-6 text-sm font-bold leading-6 text-lime-200" role="status" aria-live="polite">{notice}</p>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            この画面では支払い情報を入力しません。実際の注文確定は次の手続きで行います。
          </p>
        </NeonPanel>
      </section>
    </div>
  );
}
