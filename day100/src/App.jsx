import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { trackEvent } from './lib/analytics';

const pageModules = import.meta.glob('./pages/*.jsx');

const routes = [
  { hash: '#home', label: 'ホーム', file: './pages/Home.jsx' },
  { hash: '#service', label: 'サービス内容', file: './pages/Service.jsx' },
  { hash: '#flow', label: '進め方', file: './pages/Flow.jsx' },
  { hash: '#pricing', label: '料金', file: './pages/Pricing.jsx' },
  { hash: '#faq', label: 'よくある質問', file: './pages/Faq.jsx' },
  { hash: '#contact', label: '無料相談', file: './pages/Contact.jsx' },
  { hash: '#cases', label: '整理サンプル', file: './pages/Cases.jsx', utility: true },
  { hash: '#legal', label: '特定商取引法に基づく表記', file: './pages/Legal.jsx', utility: true },
  { hash: '#privacy', label: 'プライバシーポリシー', file: './pages/Privacy.jsx', utility: true },
];

const primaryRoutes = routes.filter((route) => !route.utility);

function normalizeHash(hash) {
  return routes.some((route) => route.hash === hash) ? hash : '#home';
}

function normalizeLocationHash() {
  const normalizedHash = normalizeHash(window.location.hash || '#home');

  if (window.location.hash !== normalizedHash) {
    window.history.replaceState(null, '', normalizedHash);
  }

  return normalizedHash;
}

function getCurrentHash() {
  return normalizeLocationHash();
}

function useHashRoute() {
  const [activeHash, setActiveHash] = useState(getCurrentHash);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(getCurrentHash());
    window.addEventListener('hashchange', handleHashChange);

    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return activeHash;
}

function PageFallback({ route }) {
  return (
    <main id="main-content" className="placeholder-page paper-bg">
      <section className="site-container card-map map-grid p-6 sm:p-8 md:p-10">
        <span className="index-label">ページ準備中</span>
        <div className="mt-6 max-w-2xl">
          <h1 className="text-balance text-[clamp(34px,7vw,64px)]">{route.label}</h1>
          <p className="mt-5 text-kasumi">
            このページは担当 worker が実装する予定です。ルーティング、余白、背景、CTA
            系ユーティリティは先に読み込まれています。
          </p>
        </div>
      </section>
    </main>
  );
}

function LoadingPage() {
  return (
    <main id="main-content" className="placeholder-page paper-bg">
      <div className="site-container card-map p-8">
        <span className="index-label">読み込み中</span>
        <p className="mt-4 text-kasumi">受付導線を読み込んでいます。</p>
      </div>
    </main>
  );
}

function Header({ activeHash }) {
  return (
    <header className="site-header sticky top-0 z-40 text-white backdrop-blur-md">
      <div className="site-container flex min-h-[72px] items-center justify-between gap-5">
        <a className="route-knot flex shrink-0 flex-col pl-4 text-white" href="#home" aria-label="ホームへ戻る">
          <span className="font-serif text-xl font-bold leading-tight">みちしるべ整理室</span>
          <span className="text-xs font-bold leading-tight text-white/70">ひとりサロンの受付整理室</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主要ページ">
          {primaryRoutes.map((route) => (
            <a
              key={route.hash}
              className={`rounded-full px-3 py-2 text-sm font-bold transition-colors ${
                activeHash === route.hash
                  ? 'bg-[#B7C957] text-[#203D36] shadow-[inset_0_-1px_0_rgba(32,61,54,0.16)]'
                  : 'text-white/74 hover:bg-white/10 hover:text-white'
              }`}
              href={route.hash}
              aria-current={activeHash === route.hash ? 'page' : undefined}
            >
              {route.label}
            </a>
          ))}
        </nav>

        <a
          className="button-primary hidden shrink-0 lg:inline-flex"
          href="#contact"
          onClick={() => trackEvent('cta_click', {
            event_category: 'engagement',
            cta_href: '#contact',
            cta_position: 'header',
            cta_variant: 'primary',
          })}
        >
          無料30分 受付導線診断を予約する
        </a>
      </div>
    </header>
  );
}

function MobileRouteBar({ activeHash }) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-outline bg-surface/95 px-3 py-2 shadow-map backdrop-blur-md lg:hidden"
      aria-label="モバイルページ移動"
    >
      <div className="flex gap-2 overflow-x-auto pb-[env(safe-area-inset-bottom)]">
        {primaryRoutes.map((route) => (
          <a
            key={route.hash}
            className={`inline-flex min-h-[44px] shrink-0 items-center rounded-full border px-4 py-2 text-sm font-bold ${
              activeHash === route.hash
                ? 'border-ink bg-ink text-surface'
                : 'border-outline bg-surface text-kasumi'
            }`}
            href={route.hash}
            aria-current={activeHash === route.hash ? 'page' : undefined}
          >
            {route.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  const footerLinks = [
    { href: '#legal', label: '特定商取引法に基づく表記' },
    { href: '#privacy', label: 'プライバシーポリシー' },
    { href: '#contact', label: '相談予約' },
  ];

  return (
    <footer className="border-t border-outline bg-surface pb-28 pt-10 lg:pb-10">
      <div className="site-container grid gap-7 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <a className="route-knot inline-flex flex-col pl-4 text-ink" href="#home" aria-label="ホームへ戻る">
            <span className="font-serif text-xl font-bold leading-tight">みちしるべ整理室</span>
            <span className="text-xs font-bold leading-tight text-kasumi">ひとりサロンの受付整理室</span>
          </a>
          <p className="mt-4 max-w-xl text-xs leading-6 text-kasumi">
            完全予約制の小さなサロン・教室向けに、初回LINE、体験メニュー、予約ページ、当日案内、継続案内を整理する相談室です。法務・プライバシー関連の内容は公開前確認用です。
          </p>
        </div>
        <nav className="flex flex-wrap gap-3 md:justify-end" aria-label="法務・相談リンク">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center rounded-[8px] border border-outline bg-paper px-4 py-2 text-sm font-bold text-ink transition hover:border-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  const activeHash = useHashRoute();
  const activeRoute = routes.find((route) => route.hash === activeHash) ?? routes[0];

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const visibleMain = document.querySelector('main');
      if (visibleMain && !visibleMain.id) {
        visibleMain.id = 'main-content';
      }
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeHash]);

  const ActivePage = useMemo(() => {
    const loader = pageModules[activeRoute.file];
    return loader ? lazy(loader) : null;
  }, [activeRoute.file]);

  return (
    <div className="app-shell pb-20 lg:pb-0">
      <a className="skip-link" href="#main-content">本文へスキップ</a>
      <Header activeHash={activeHash} />
      <Suspense fallback={<LoadingPage />}>
        {ActivePage ? <ActivePage /> : <PageFallback route={activeRoute} />}
      </Suspense>
      <Footer />
      <MobileRouteBar activeHash={activeHash} />
    </div>
  );
}
