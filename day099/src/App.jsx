import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import Home from './pages/Home.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { bindScrollDepth, bindTrackedClicks, trackEvent, trackPageView } from './utils/analytics.js';
import { couponCode, couponDiscount, formatPrice, getCartSummary } from './utils/cartMath.js';
import { applyRouteMeta } from './utils/seo.js';
import { cart } from './data/siteData.js';

const Products = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const StarterKit = lazy(() => import('./pages/StarterKit.jsx'));
const HowTo = lazy(() => import('./pages/HowTo.jsx'));
const Guide = lazy(() => import('./pages/Guide.jsx'));
const Faq = lazy(() => import('./pages/Faq.jsx'));
const Cart = lazy(() => import('./pages/Cart.jsx'));
const Checkout = lazy(() => import('./pages/Checkout.jsx'));
const Legal = lazy(() => import('./pages/Legal.jsx'));
const Support = lazy(() => import('./pages/Support.jsx'));

const routes = {
  home: Home,
  products: Products,
  'product-liquid-chalk': ProductDetail,
  'product-chalk-bag': ProductDetail,
  'product-brush': ProductDetail,
  'product-finger-tape': ProductDetail,
  'product-grip-balm': ProductDetail,
  'product-mini-holds': ProductDetail,
  'starter-kit': StarterKit,
  howto: HowTo,
  guide: Guide,
  faq: Faq,
  cart: Cart,
  checkout: Checkout,
  legal: Legal,
  'support-chat': Support,
  'support-email': Support,
  'support-contact': Support,
};

const navItems = [
  { hash: 'home', label: '特徴' },
  { hash: 'products', label: '商品ラインナップ' },
  { hash: 'starter-kit', label: 'スターターセット' },
  { hash: 'howto', label: '使い方' },
  { hash: 'guide', label: '比較・選び方' },
  { hash: 'faq', label: 'よくある質問' },
];

const cartStorageKey = 'day099-cart-items';
const couponStorageKey = 'day099-coupon-applied';

function getHashRoute() {
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  if (['legal-commerce', 'legal-privacy', 'commerce', 'privacy'].includes(rawHash)) {
    return 'legal';
  }
  if (rawHash === 'faq-list') {
    return 'faq';
  }
  return rawHash && routes[rawHash] ? rawHash : 'home';
}

function getAnchorId() {
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  const aliases = {
    commerce: 'legal-commerce',
    privacy: 'legal-privacy',
  };

  return aliases[rawHash] || rawHash;
}

function readStoredCartItems() {
  if (typeof window === 'undefined') return cart.items;
  try {
    const stored = window.localStorage.getItem(cartStorageKey);
    if (!stored) return cart.items;
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return cart.items;
    const normalized = parsed
      .filter((item) => typeof item?.productId === 'string')
      .map((item) => ({
        productId: item.productId,
        quantity: Math.max(0, Number.parseInt(item.quantity, 10) || 0),
      }));
    return normalized;
  } catch {
    return cart.items;
  }
}

function readStoredCouponApplied() {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(couponStorageKey) === 'true';
  } catch {
    return false;
  }
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getHashRoute);
  const [cartItems, setCartItems] = useState(readStoredCartItems);
  const [couponApplied, setCouponApplied] = useState(readStoredCouponApplied);
  const ActivePage = useMemo(() => routes[currentRoute] ?? Home, [currentRoute]);
  const showGlobalMobileCta =
    !currentRoute.startsWith('product-') &&
    !currentRoute.startsWith('support-') &&
    !['starter-kit', 'cart', 'checkout'].includes(currentRoute);
  const cartSummary = useMemo(() => getCartSummary(cartItems, { couponApplied }), [cartItems, couponApplied]);
  const cartCount = cartSummary.selectedItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (productId, productName) => {
    setCartItems((current) => {
      const exists = current.some((item) => item.productId === productId);
      if (exists) {
        return current.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...current, { productId, quantity: 1 }];
    });
    trackEvent("add_to_cart", { product_id: productId });
    return `${productName || "商品"}をカートに追加しました。`;
  };

  const updateCartQuantity = (productId, nextQuantity) => {
    const quantity = Math.max(0, nextQuantity);
    setCartItems((current) => {
      const exists = current.some((item) => item.productId === productId);
      if (exists) {
        return current.map((item) => (item.productId === productId ? { ...item, quantity } : item));
      }
      return quantity > 0 ? [...current, { productId, quantity }] : current;
    });
    trackEvent("cart_quantity_change", { product_id: productId, quantity });
  };

  const removeCartItem = (productId) => {
    setCartItems((current) => current.filter((item) => item.productId !== productId));
    trackEvent("remove_from_cart", { product_id: productId });
  };

  const applyCouponCode = (inputCode) => {
    const normalizedCode = String(inputCode || '').trim().toUpperCase();
    if (couponApplied) {
      return { ok: true, message: "クーポンはすでに適用されています。" };
    }
    if (normalizedCode === couponCode) {
      setCouponApplied(true);
      trackEvent("coupon_apply", { coupon: couponCode, discount: couponDiscount });
      return { ok: true, message: "クーポンを適用しました。" };
    }
    trackEvent("coupon_error", { coupon: normalizedCode || "empty" });
    return { ok: false, message: "有効なクーポンコードではありません。" };
  };

  const removeCoupon = () => {
    setCouponApplied(false);
    trackEvent("coupon_remove", { coupon: couponCode });
  };

  useEffect(() => {
    try {
      window.localStorage.setItem(cartStorageKey, JSON.stringify(cartItems));
    } catch {
      // Storage may be unavailable in private browsing; cart still works in memory.
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      window.localStorage.setItem(couponStorageKey, String(couponApplied));
    } catch {
      // Storage may be unavailable in private browsing; coupon still works in memory.
    }
  }, [couponApplied]);

  useEffect(() => {
    const syncRoute = () => setCurrentRoute(getHashRoute());
    window.addEventListener('hashchange', syncRoute);

    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    const cleanupClicks = bindTrackedClicks();
    const cleanupScroll = bindScrollDepth();

    return () => {
      cleanupClicks();
      cleanupScroll();
    };
  }, []);

  useEffect(() => {
    const meta = applyRouteMeta(currentRoute);
    trackPageView(currentRoute, meta);

    window.requestAnimationFrame(() => {
      const anchorId = getAnchorId();
      const target = anchorId && anchorId !== currentRoute ? document.getElementById(anchorId) : null;
      if (target) {
        target.scrollIntoView({ block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    });
  }, [currentRoute]);

  return (
    <div className="app-shell min-h-screen overflow-x-hidden bg-deep text-text-white">
      <a className="skip-link" href="#main-content">本文へ移動</a>
      <header className="site-header">
        <a className="site-mark" href="#home" aria-label="ボルダリングギア通販 トップへ戻る">
          <span className="site-mark__text">ボルダリングギア通販</span>
        </a>

        <nav className="site-nav" aria-label="主要ページ">
          {navItems.map((item) => (
            <a
              className={currentRoute === item.hash ? 'site-nav__link is-active' : 'site-nav__link'}
              href={`#${item.hash}`}
              data-tracking="cta_click"
              data-position="header_nav"
              data-type="navigation"
              key={item.hash}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cart"
          href="#cart"
          data-tracking="cta_click"
          data-position="header_cart"
          data-type="navigation"
        >
          <span className="header-cart__icon" aria-hidden="true" />
          <span>カート</span>
          <span className="header-cart__badge" data-header-cart-count>{cartCount}</span>
          <span className="header-cart__total" data-header-cart-total>{formatPrice(cartSummary.total)}</span>
          <span className="sr-only">へ進む</span>
        </a>
      </header>

      <main id="main-content" className="page-frame" tabIndex="-1">
        <ErrorBoundary resetKey={currentRoute}>
          <Suspense fallback={<div className="section-container py-20 text-slate-300">読み込み中...</div>}>
            <ActivePage
              cartItems={cartItems}
              addToCart={addToCart}
              updateCartQuantity={updateCartQuantity}
              removeCartItem={removeCartItem}
              couponApplied={couponApplied}
              applyCouponCode={applyCouponCode}
              removeCoupon={removeCoupon}
              activeRoute={currentRoute}
            />
          </Suspense>
        </ErrorBoundary>
      </main>

      {showGlobalMobileCta && (
        <a className="mobile-bottom-cta" href="#starter-kit" data-tracking="cta_click" data-position="mobile_bottom" data-type="sticky_cta">
          スターターセットを購入する
        </a>
      )}
    </div>
  );
}
