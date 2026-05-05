import { assets, navItems } from "../data/siteData";
import { ButtonLink, SmartImage } from "./UI";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#D6DED8] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="flex items-center gap-3 text-[#203D36]" aria-label="みちしるべ整理室 トップへ">
          <SmartImage asset={assets.receptionFileBox || assets.compass} alt="" className="h-9 w-9 object-contain" loading="eager" />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-bold">みちしるべ整理室</span>
            <span className="block text-[11px] font-bold text-[#5C6861]">ひとりサロンの受付整理室</span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-[#5C6861] transition hover:text-[#203D36]">
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink href="#contact" className="hidden lg:inline-flex">無料30分 受付導線診断を予約する</ButtonLink>
        <a href="#contact" className="inline-flex min-h-11 items-center rounded-[8px] bg-[#D86642] px-3 text-xs font-bold text-white lg:hidden">
          無料相談
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#D3D9CC] bg-[#203D36] text-white">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-4 py-10 md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <SmartImage asset={assets.receptionFileBox || assets.compass} alt="" className="h-10 w-10 object-contain" />
            <div>
              <p className="font-serif text-xl font-bold">みちしるべ整理室</p>
              <p className="mt-1 text-sm text-white/70">初回LINEと体験予約まわりを、ひとりでも回る受付導線へ。</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
            完全予約制の小さなサロン・教室の、初回LINE、体験メニュー、予約ページ、当日案内、継続案内を一緒に整理する相談室です。
          </p>
        </div>
        <div className="grid gap-2 text-sm font-bold text-white/80 sm:grid-cols-2 md:grid-cols-1">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-4 text-center text-xs text-white/60">
        © 2026 みちしるべ整理室
      </div>
    </footer>
  );
}

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8FAF4] text-[#17231F]">
      <a className="skip-link" href="#main-content">本文へスキップ</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
