import { nav, routeLabels } from "../data/siteData.js";
import { BoxIcon, SearchIcon, UsersIcon } from "./Icons.jsx";
import { Button } from "./Shared.jsx";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Header({ currentPage = "home", onNavigate }) {
  const handleNavigate = (item) => {
    if (onNavigate) {
      onNavigate(item.page);
      return;
    }
    if (item.href) window.location.hash = item.href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE8E5]/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2F7F88]/25"
          onClick={() => onNavigate?.("home")}
          aria-label="SONAE BOX ホームへ"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#2F7F88] text-[#2F7F88]">
            <BoxIcon className="h-7 w-7" />
          </span>
          <span className="text-2xl font-black tracking-[0.18em] text-[#1F5F68]">SONAE BOX</span>
        </button>

        <nav className="hidden items-center gap-7 text-sm font-bold text-[#1F2A2E] lg:flex" aria-label="メインナビゲーション">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cx(
                "rounded-md transition hover:text-[#2F7F88] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2F7F88]/25",
                currentPage === item.page && "text-[#2F7F88]",
              )}
              onClick={() => handleNavigate(item)}
              aria-current={currentPage === item.page ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="secondary" size="sm" icon={UsersIcon} onClick={() => onNavigate?.("dashboard")}>
            ログイン
          </Button>
          <Button size="sm" icon={SearchIcon} onClick={() => onNavigate?.("diagnosis")}>
            無料で備蓄診断
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DCE8E5] text-[#1F5F68] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2F7F88]/25 md:hidden"
          onClick={() => onNavigate?.("diagnosis")}
          aria-label="無料で備蓄診断へ"
        >
          <SearchIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export function Footer({ onNavigate }) {
  const footerLinks = [
    ...nav,
    { id: "business", label: "法人・オフィス向け", page: "business" },
    { id: "quality", label: "監修・品質管理", page: "quality" },
    { id: "legal", label: "利用規約・ポリシー", page: "legal" },
  ];

  return (
    <footer className="border-t border-[#DCE8E5] bg-[#F6FAF8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_2fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#2F7F88] text-[#2F7F88]">
              <BoxIcon className="h-7 w-7" />
            </span>
            <span className="text-2xl font-black tracking-[0.18em] text-[#1F5F68]">SONAE BOX</span>
          </div>
          <p className="mt-5 max-w-sm leading-8 text-[#66777A]">
            家族と職場の備えを、診断・期限管理・定期配送で続けやすくする防災備蓄サービスです。
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="フッターナビゲーション">
          {footerLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              className="rounded-lg px-2 py-2 text-left text-sm font-bold text-[#1F2A2E] transition hover:bg-white hover:text-[#2F7F88] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2F7F88]/25"
              onClick={() => onNavigate?.(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="border-t border-[#DCE8E5] px-5 py-5 text-center text-xs font-bold text-[#66777A]">
        © 2026 SONAE BOX. All rights reserved.
      </div>
    </footer>
  );
}

export function PageShell({ children, currentPage = "home", onNavigate, className = "" }) {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1F2A2E]">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className={cx("overflow-hidden", className)} aria-label={routeLabels[currentPage] ?? "SONAE BOX"}>
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
