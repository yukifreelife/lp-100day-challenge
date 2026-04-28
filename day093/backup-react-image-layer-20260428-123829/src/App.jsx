import { useEffect, useMemo, useState } from "react";
import { pageMap, pages } from "./pageData.js";

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

  const handleNavigationKeyDown = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    const keyHandlers = {
      ArrowRight: () => pages[clampIndex(activeIndex + 1)].id,
      ArrowDown: () => pages[clampIndex(activeIndex + 1)].id,
      ArrowLeft: () => pages[clampIndex(activeIndex - 1)].id,
      ArrowUp: () => pages[clampIndex(activeIndex - 1)].id,
      Home: () => pages[0].id,
      End: () => pages[pages.length - 1].id,
    };

    const numberKey = /^[1-9]$/.test(event.key) ? Number(event.key) - 1 : -1;
    const getNextId =
      numberKey >= 0 && numberKey < pages.length
        ? () => pages[numberKey].id
        : keyHandlers[event.key];

    if (!getNextId) return;

    event.preventDefault();
    goToPage(getNextId());
  };

  useEffect(() => {
    window.addEventListener("keydown", handleNavigationKeyDown);
    return () => window.removeEventListener("keydown", handleNavigationKeyDown);
  }, [activeIndex]);

  return (
    <main className="nemunote-app">
      <nav
        aria-label="ページ切り替え"
        className="sr-only-nav"
        onKeyDown={handleNavigationKeyDown}
      >
        <p id="keyboard-help">
          矢印キーで前後のページへ移動。数字キー1から9で対応するページへ移動。
        </p>
        {pages.map((page, index) => (
          <button
            key={page.id}
            type="button"
            aria-current={page.id === activePage.id ? "page" : undefined}
            aria-describedby="keyboard-help"
            onClick={() => goToPage(page.id)}
          >
            {index + 1}. {page.label}
          </button>
        ))}
      </nav>

      <section className="nemunote-shell" aria-label={`${activePage.label}のモックアップ`}>
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
      </section>
    </main>
  );
}
