const sections = [
  { id: "home", label: "ホーム", image: "/extracted/sections/home.png" },
  { id: "features", label: "機能", image: "/extracted/sections/features.png" },
  { id: "report", label: "睡眠レポート", image: "/extracted/sections/report.png" },
  { id: "pricing", label: "料金", image: "/extracted/sections/pricing.png" },
  { id: "voices", label: "利用者の声", image: "/extracted/sections/voices.png" },
  { id: "guide", label: "睡眠ガイド", image: "/extracted/sections/guide.png" },
  { id: "faq", label: "よくある質問", image: "/extracted/sections/faq.png" },
  { id: "download", label: "ダウンロード", image: "/extracted/sections/download.png" },
  { id: "privacy", label: "安全性", image: "/extracted/sections/privacy.png" },
];

const hotspots = [
  { id: "home", label: "ホームへ", x: 4.8, y: 0, w: 19.2, h: 100 },
  { id: "features", label: "機能へ", x: 38.2, y: 0, w: 6.8, h: 100 },
  { id: "report", label: "睡眠レポートへ", x: 45.6, y: 0, w: 11.2, h: 100 },
  { id: "pricing", label: "料金へ", x: 57.0, y: 0, w: 7.0, h: 100 },
  { id: "download", label: "はじめるへ", x: 86.6, y: 0, w: 9.0, h: 100 },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  return (
    <header className="pixel-header" aria-label="NemuNote navigation">
      <div className="pixel-header-inner">
        <img
          src="/extracted/ui/header-home.png"
          alt="NemuNote"
          className="pixel-header-image"
          draggable="false"
        />
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            type="button"
            aria-label={spot.label}
            className="pixel-hotspot"
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              width: `${spot.w}%`,
              height: `${spot.h}%`,
            }}
            onClick={() => scrollToSection(spot.id)}
          />
        ))}
      </div>
      <nav className="sr-nav" aria-label="全セクション">
        {sections.map((section) => (
          <button key={section.id} type="button" onClick={() => scrollToSection(section.id)}>
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="pixel-app">
      <Header />
      <main className="pixel-main">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="pixel-section"
            aria-label={section.label}
          >
            <img
              src={section.image}
              alt={`${section.label} mockup section`}
              className="pixel-section-image"
              draggable="false"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </section>
        ))}
      </main>
    </div>
  );
}
