import { useMemo, useState } from "react";
import { pageMap, pages } from "./pageData.js";

const ASSET_SHEET = "/assets/nemunote-asset-sheet.png";

function clampIndex(index) {
  if (index < 0) return pages.length - 1;
  if (index >= pages.length) return 0;
  return index;
}

export default function App() {
  const [activeId, setActiveId] = useState(pages[0]?.id ?? "home");
  const activePage = pageMap[activeId] ?? pages[0];
  const activeIndex = useMemo(
    () => Math.max(0, pages.findIndex((page) => page.id === activePage.id)),
    [activePage.id],
  );

  const goToPage = (targetId) => {
    if (pageMap[targetId]) {
      setActiveId(targetId);
    }
  };

  const handleSwitcherKeyDown = (event) => {
    const keyHandlers = {
      ArrowRight: () => pages[clampIndex(activeIndex + 1)].id,
      ArrowDown: () => pages[clampIndex(activeIndex + 1)].id,
      ArrowLeft: () => pages[clampIndex(activeIndex - 1)].id,
      ArrowUp: () => pages[clampIndex(activeIndex - 1)].id,
      Home: () => pages[0].id,
      End: () => pages[pages.length - 1].id,
    };

    const getNextId = keyHandlers[event.key];
    if (!getNextId) return;

    event.preventDefault();
    goToPage(getNextId());
  };

  return (
    <main className="nemunote-app overflow-hidden">
      <header className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-3 rounded-[18px] border border-white/70 bg-white/55 px-3 py-3 shadow-[0_16px_42px_rgba(47,143,131,0.12)] backdrop-blur md:flex-row md:items-center md:justify-between md:px-4">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-nemu-teal">
            NemuNote prototype
          </p>
          <h1 className="text-base font-bold leading-tight text-nemu-ink sm:text-lg">
            ページ遷移モックアップ
          </h1>
        </div>

        <nav
          aria-label="ページ切り替え"
          className="flex max-w-full gap-2 overflow-x-auto pb-1 md:justify-end md:pb-0"
          onKeyDown={handleSwitcherKeyDown}
        >
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className="page-tab shrink-0 border border-nemu-mint/35 px-3 py-2 text-sm font-bold hover:-translate-y-0.5 hover:border-nemu-teal/45 sm:px-4"
              aria-current={page.id === activePage.id ? "page" : undefined}
              onClick={() => goToPage(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </header>

      <section className="nemunote-shell" aria-label={`${activePage.label}のモックアップ`}>
        <img
          src={ASSET_SHEET}
          alt=""
          aria-hidden="true"
          className="asset-float left-[2vw] top-[4vh] hidden rounded-none object-cover opacity-20 mix-blend-multiply md:block"
        />
        <img
          src={ASSET_SHEET}
          alt=""
          aria-hidden="true"
          className="asset-float bottom-[3vh] right-[3vw] rounded-none object-cover opacity-16 mix-blend-multiply"
        />

        <div className="pointer-events-none absolute left-1/2 top-0 z-10 flex w-[var(--stage-width)] -translate-x-1/2 justify-between gap-2 px-2 pt-2">
          <div className="rounded-full border border-white/80 bg-white/82 px-3 py-1 text-[11px] font-bold text-nemu-teal shadow-[0_10px_24px_rgba(36,59,56,0.12)] backdrop-blur">
            Fidelity: mockup layer
          </div>
          <div className="hidden rounded-full border border-white/80 bg-white/82 px-3 py-1 text-[11px] font-bold text-nemu-slate shadow-[0_10px_24px_rgba(36,59,56,0.12)] backdrop-blur sm:block">
            {activeIndex + 1}/{pages.length} {activePage.label}
          </div>
        </div>

        <div
          key={activePage.id}
          className="page-stage page-view"
          aria-live="polite"
        >
          <img
            className="page-image"
            src={activePage.mockup}
            alt={`${activePage.label}ページの正確なモックアップ`}
            draggable="false"
          />

          {activePage.hotspots.map((hotspot) => (
            <button
              key={hotspot.id}
              type="button"
              className="hotspot"
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                width: `${hotspot.w}%`,
                height: `${hotspot.h}%`,
              }}
              aria-label={`${hotspot.label}: ${pageMap[hotspot.target]?.label ?? hotspot.target}へ移動`}
              title={hotspot.label}
              onClick={() => goToPage(hotspot.target)}
            >
              {hotspot.label}
            </button>
          ))}
        </div>

        <aside className="mt-3 w-[var(--stage-width)] rounded-[16px] border border-white/70 bg-white/60 px-4 py-3 text-sm text-nemu-slate shadow-[0_16px_36px_rgba(47,143,131,0.10)] backdrop-blur">
          <p className="line-clamp-2">
            <span className="font-bold text-nemu-ink">{activePage.label}</span>
            <span className="mx-2 text-nemu-teal">/</span>
            {activePage.description}
          </p>
        </aside>
      </section>
    </main>
  );
}
