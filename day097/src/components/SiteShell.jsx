import Header from "./Header.jsx";
import FinalCTA from "./FinalCTA.jsx";

function SiteShell({ siteData, pageKey, children, showFinalCTA = true }) {
  return (
    <div className={`site-shell page-${pageKey}`}>
      <Header
        brand={siteData.brand}
        navigation={siteData.navigation}
        cta={siteData.cta.primary}
        pageKey={pageKey}
      />
      <main className="site-main">{children}</main>
      {showFinalCTA ? (
        <FinalCTA
          brand={siteData.brand}
          ctaMap={siteData.cta}
          lead="相談だけでも大丈夫。作業の切り出し方から一緒に整理します。"
        />
      ) : null}
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p className="site-footer__brand">{siteData.brand.name}</p>
          <p className="site-footer__text">{siteData.brand.description}</p>
        </div>
      </footer>
    </div>
  );
}

export default SiteShell;
