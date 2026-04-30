import { siteData } from "../data/siteData";
import { Button, BottomCta } from "./Shared";
import { Icon } from "./Icons";

const nav = [
  ["機能", "features"],
  ["導入の流れ", "demo"],
  ["料金", "pricing"],
  ["活用方法", "column"],
  ["連携カード", "channels"],
  ["よくある質問", "faq"],
  ["お知らせ", "news"]
];

const footerGroups = [
  ["機能", [["主な機能", "features"], ["連携カード", "channels"], ["安全な運用", "security"]]],
  ["参考情報", [["導入事例", "cases"], ["活用コラム", "column"], ["お知らせ", "news"]]],
  ["サポート", [["ヘルプ", "help"], ["よくある質問", "faq"], ["お問い合わせ", "contact"]]],
  ["導入相談", [["料金", "pricing"], ["規約・ポリシー", "legal"], ["デモ", "demo"]]]
];

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-ledger text-ink">
      <header className="sticky top-0 z-40 border-b border-grid/80 bg-[#f7f5ef]/[0.92] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
          <a href="#home" aria-label="StockOps Atelier ホームへ" className="flex min-w-0 items-center gap-3 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-teal/20 text-teal">
              <Icon name="inventory" size={27} />
            </span>
            <span className="truncate text-lg font-semibold">{siteData.metadata.brand}</span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map(([label, route]) => (
              <a key={route} href={`#${route}`} className="rounded-md text-sm font-semibold text-ink/[0.82] transition hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a href="#legal" className="hidden rounded-md px-3 py-2 text-sm font-semibold text-ink transition hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2 md:inline-flex">
              ログイン
            </a>
            <Button href="#diagnosis" className="cta-pulse px-4 py-2.5" icon="search">
              <span className="hidden sm:inline">無料で棚卸し診断を受ける</span>
              <span className="sm:hidden">無料診断</span>
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <BottomCta />

      <footer className="border-t border-grid bg-[#f1eee6] px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md border border-teal/20 text-teal">
                <Icon name="inventory" size={28} />
              </span>
              <p className="text-xl font-semibold">{siteData.metadata.brand}</p>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slip">{siteData.metadata.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map(([heading, links]) => (
              <div key={heading}>
                <p className="text-xs font-semibold text-steel">{heading}</p>
                <div className="mt-3 grid gap-2">
                  {links.map(([label, route]) => (
                    <a key={route} href={`#${route}`} className="rounded-md text-sm text-slip transition hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
