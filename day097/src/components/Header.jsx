import CTAButton from "./CTAButton.jsx";
import IconImg from "./IconImg.jsx";

function Header({ brand, navigation, cta, pageKey }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/" aria-label={`${brand.name} ホーム`}>
          <span className="site-header__logo">
            <IconImg src={brand.logoMark} alt="" className="site-header__logo-img" decorative />
          </span>
          <span className="site-header__brand-text">
            <span className="site-header__brand-name">{brand.name}</span>
            <span className="site-header__tagline">{brand.tagline}</span>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="グローバルナビゲーション">
          {navigation.map((item) => {
            const itemKey = item.href === "/" ? "home" : item.href.replace("/", "");
            const isCurrent = itemKey === pageKey;

            return (
              <a
                className={`site-header__nav-link${isCurrent ? " is-current" : ""}`}
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                key={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <CTAButton cta={cta} variant="header" className="site-header__cta" />
      </div>
    </header>
  );
}

export default Header;
