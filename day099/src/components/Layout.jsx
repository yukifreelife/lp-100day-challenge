import { footerLinks, routes, siteMeta } from "../data/siteData";
import { Button, IconSprite } from "./UI";

const join = (...classes) => classes.filter(Boolean).join(" ");

export function Header({ activeRoute = "home", navItems = routes }) {
  return (
    <header className="sticky top-0 z-30 border-b border-cyan-300/20 bg-black/88 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center border border-cyan-300 bg-cyan-300/10 text-cyan-100">
            <IconSprite index={7} size={24} />
          </span>
          <span>
            <span className="block text-lg font-black leading-none">{siteMeta.name}</span>
            <span className="block text-[11px] font-bold text-slate-400">{siteMeta.tagline}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="主要ナビゲーション">
          {navItems.slice(0, 7).map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={join(
                "border border-transparent px-3 py-2 text-sm font-bold text-slate-300 hover:border-cyan-300/50 hover:text-white",
                activeRoute === item.id && "border-cyan-300/60 bg-cyan-300/10 text-cyan-100",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href="#cart" variant="ghost" className="hidden px-4 py-2 md:inline-flex">
            <IconSprite index={0} size={18} />
            カート
          </Button>
          <Button href="#starter-kit" className="px-4 py-2 text-xs">
            セット購入
          </Button>
        </div>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t border-slate-800 px-4 py-2 lg:hidden" aria-label="モバイルナビゲーション">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={join(
              "shrink-0 border border-slate-700 px-3 py-2 text-xs font-bold text-slate-300",
              activeRoute === item.id && "border-cyan-300 bg-cyan-300/10 text-cyan-100",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function PageShell({ activeRoute = "home", children, className = "" }) {
  return (
    <div className="min-h-screen bg-[#05060A] text-slate-100">
      <Header activeRoute={activeRoute} />
      <main className={join("mx-auto max-w-7xl px-4 py-10 md:py-14", className)}>{children}</main>
      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xl font-black text-white">{siteMeta.name}</p>
          <p className="mt-2 max-w-xl leading-7 text-slate-400">
            {siteMeta.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold text-slate-300 hover:text-cyan-200">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function CyberSection({ children, className = "", id }) {
  return (
    <section id={id} className={join("relative py-10 md:py-14", className)}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      {children}
    </section>
  );
}

export function SplitLayout({ media, children, reverse = false, className = "" }) {
  return (
    <div className={join("grid items-center gap-8 lg:grid-cols-2", reverse && "lg:[&>*:first-child]:order-2", className)}>
      <div>{media}</div>
      <div>{children}</div>
    </div>
  );
}
