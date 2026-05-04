import { getProductById } from "../data/siteData";

export const shippingThreshold = 10000;
export const standardShipping = 500;
export const couponCode = "GRIP500";
export const couponDiscount = 500;

export const priceValue = (price) => Number(price.replace(/[^\d]/g, ""));
export const formatPrice = (value) => `¥${value.toLocaleString("ja-JP")}`;

export function enrichCartItems(items = []) {
  return items
    .map((item) => ({ ...item, product: getProductById(item.productId) }))
    .filter((item) => item.product);
}

export function getSelectedCartItems(items = []) {
  return enrichCartItems(items).filter((item) => item.quantity > 0);
}

export function getCartSummary(items = [], { couponApplied = false } = {}) {
  const enrichedItems = enrichCartItems(items);
  const selectedItems = enrichedItems.filter((item) => item.quantity > 0);
  const subtotal = selectedItems.reduce((sum, { product, quantity }) => sum + priceValue(product.price) * quantity, 0);
  const shipping = subtotal === 0 || subtotal >= shippingThreshold ? 0 : standardShipping;
  const discount = couponApplied && subtotal > 0 ? couponDiscount : 0;
  const total = Math.max(0, subtotal + shipping - discount);
  const freeShippingRemaining = Math.max(0, shippingThreshold - subtotal);
  const shippingProgress = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));

  return {
    enrichedItems,
    selectedItems,
    subtotal,
    shipping,
    discount,
    total,
    freeShippingRemaining,
    shippingProgress,
    rows: [
      ["小計", formatPrice(subtotal)],
      ["送料", shipping === 0 ? "¥0" : formatPrice(shipping)],
      ...(discount > 0 ? [["クーポン", `-${formatPrice(discount)}`]] : []),
      ["合計", formatPrice(total)],
    ],
  };
}
