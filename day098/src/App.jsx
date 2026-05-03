import { useEffect, useMemo, useState } from "react";
import { siteData } from "./data/siteData.js";
import { EyeDot, PawIcon, PlayIcon, WhiskerDivider } from "./components/Icons.jsx";
import { GalleryCard, ProfileCard, VideoCard, CtaButton } from "./components/Cards.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import OptimizedImage from "./components/OptimizedImage.jsx";
import { trackCta, trackEvent, trackFilter, trackVideoCard } from "./lib/analytics.js";

const SCROLL_DEPTH_MARKS = [25, 50, 75, 90];

function useScrollDepthTracking() {
  useEffect(() => {
    const trackedMarks = new Set();

    function handleScrollDepth() {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = Math.max(documentHeight - viewportHeight, 1);
      const percentScrolled = Math.round((window.scrollY / maxScroll) * 100);

      SCROLL_DEPTH_MARKS.forEach((mark) => {
        if (percentScrolled >= mark && !trackedMarks.has(mark)) {
          trackedMarks.add(mark);
          trackEvent("scroll_depth", {
            event_label: `${mark}%`,
            percent_scrolled: mark,
          });
        }
      });
    }

    handleScrollDepth();
    window.addEventListener("scroll", handleScrollDepth, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollDepth);
    };
  }, []);
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="しろとはちのひなた時間 トップへ戻る" onClick={closeNav}>
          <span className="brand__faces" aria-hidden="true">
            <OptimizedImage src="/assets/logos/logo-cats.png" alt="" loading="eager" />
          </span>
          <span className="brand__text">{siteData.title}</span>
        </a>
        <button
          className={`menu-toggle ${isNavOpen ? "menu-toggle--open" : ""}`}
          type="button"
          aria-expanded={isNavOpen}
          aria-controls="site-nav"
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <span className="menu-toggle__bars" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="menu-toggle__label">{isNavOpen ? "閉じる" : "メニュー"}</span>
        </button>
        <nav
          id="site-nav"
          className={`site-nav ${isNavOpen ? "site-nav--open" : ""}`}
          aria-label="メインナビゲーション"
        >
          {siteData.nav.map((item) => (
            <a key={item.href} className="site-nav__link" href={item.href} onClick={closeNav}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="header-cta"
          href={siteData.cta.subscribeHref}
          aria-label="登録: YouTubeでチャンネル登録する"
          data-tracking="cta"
          data-cta-position="header"
          onClick={() => {
            closeNav();
            trackCta({
              label: "登録",
              position: "header",
              href: siteData.cta.subscribeHref,
              type: "subscribe",
            });
          }}
        >
          <PlayIcon />
          登録
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="fur-field" aria-hidden="true" />
      <div className="hero-section__content">
        <div className="eye-pair" aria-hidden="true">
          <EyeDot color="blue" className="eye-dot-svg" />
          <EyeDot color="yellow" className="eye-dot-svg" />
        </div>
        <h1 id="hero-title" className="hero-title">
          <span>しろとはちの</span>
          <span>ひなた時間</span>
        </h1>
        <WhiskerDivider />
        <p className="hero-lead">{siteData.hero.lead}</p>
        <div className="hero-actions">
          <CtaButton
            variant="primary"
            href={siteData.cta.subscribeHref}
            icon={<PlayIcon />}
            data-tracking="cta"
            data-cta-position="hero-primary"
            onClick={() =>
              trackCta({
                label: "チャンネル登録",
                position: "hero-primary",
                href: siteData.cta.subscribeHref,
                type: "subscribe",
              })
            }
          >
            チャンネル登録
          </CtaButton>
          <CtaButton
            variant="secondary"
            href="#videos"
            icon={<PawIcon />}
            data-tracking="cta"
            data-cta-position="hero-secondary"
            onClick={() =>
              trackCta({
                label: "最新動画を見る",
                position: "hero-secondary",
                href: "#videos",
                type: "internal",
              })
            }
          >
            最新動画を見る
          </CtaButton>
        </div>
      </div>
      <div className="hero-section__visual">
        <OptimizedImage
          className="hero-cat-image"
          src={siteData.hero.image}
          alt="並んで過ごす白猫しろとハチワレ猫はち"
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 720px) 326px, (max-width: 1080px) 70vw, 760px"
        />
      </div>
      <span className="floating-paw floating-paw--one" aria-hidden="true">
        <PawIcon />
      </span>
      <span className="floating-paw floating-paw--two" aria-hidden="true">
        <PawIcon />
      </span>
    </section>
  );
}

function PageIntro({ intro, align = "right" }) {
  return (
    <div className={`page-intro page-intro--${align}`}>
      <div className="page-intro__copy">
        <div className="page-intro__eyes" aria-hidden="true">
          <EyeDot color="blue" className="eye-dot-svg" />
          <EyeDot color="yellow" className="eye-dot-svg" />
        </div>
        <p className="page-intro__eyebrow">{intro.eyebrow}</p>
        <p className="page-intro__title">{intro.title}</p>
        <WhiskerDivider />
        <p>{intro.lead}</p>
      </div>
      <div className="page-intro__visual" aria-hidden="true">
        <OptimizedImage src={intro.image} alt="" />
      </div>
    </div>
  );
}

function Characters() {
  return (
    <section id="characters" className="characters-section section-block">
      <PageIntro intro={siteData.pageIntros.characters} />
      <SectionHeading title="2匹の紹介" />
      <div className="profile-grid">
        {siteData.catProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.subtitle}
            description={profile.description}
            tags={[profile.gender, profile.age, profile.personality]}
            illustration={
              <OptimizedImage className="profile-cat-image" src={profile.image} alt={`${profile.name}のイラスト`} />
            }
            accent={profile.id === "shiro" ? "shiro" : "hachi"}
          />
        ))}
      </div>
      <div className="profile-detail-grid">
        {siteData.catProfiles.map((profile) => (
          <article
            className={`profile-detail-panel profile-detail-panel--${profile.id === "shiro" ? "shiro" : "hachi"}`}
            key={`${profile.id}-details`}
          >
            <header className="profile-detail-panel__header">
              <p>{profile.subtitle}</p>
              <h3>{profile.name}のこと</h3>
            </header>
            <ul className="profile-detail-list">
              {profile.details.map((detail) => (
                <li className="profile-detail-item" key={detail.title}>
                  <div className="profile-detail-item__icon" aria-hidden="true">
                    <PawIcon />
                  </div>
                  <div className="profile-detail-item__body">
                    <h4>{detail.title}</h4>
                    <p>{detail.text}</p>
                  </div>
                  <OptimizedImage src={detail.image} alt="" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Relationship() {
  return (
    <section className="relationship-section section-block">
      <SectionHeading
        title="ふたりの距離感"
        lead="近づいたり、並んだり、少しだけ取り合ったり。性格の違うふたりの毎日です。"
      />
      <div className="relationship-grid">
        {siteData.relationshipItems.map((item) => (
          <article className="relationship-card" key={item.id}>
            <div className="relationship-card__image" aria-hidden="true">
              <OptimizedImage src={item.image} alt="" />
            </div>
            <div className="relationship-card__body">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MetaPills({ items }) {
  return (
    <ul className="meta-pill-list" aria-label="動画情報">
      {items.map((item) => (
        <li className="meta-pill" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function FilterChips({ items, activeItem, onSelect, tone = "blue" }) {
  return (
    <div className={`filter-chip-list filter-chip-list--${tone}`} aria-label="表示カテゴリ">
      {items.map((item) => (
        <button
          className={`filter-chip ${item === activeItem ? "filter-chip--active" : ""}`}
          type="button"
          aria-pressed={item === activeItem}
          onClick={() => onSelect(item)}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function filterVideos(videos, activeFilter) {
  if (activeFilter === "すべて") {
    return videos;
  }

  return videos.filter((video) => video.tag.replace("#", "") === activeFilter);
}

function filterGallery(items, activeFilter) {
  if (activeFilter === "すべて") {
    return items;
  }

  if (activeFilter === "なかよし") {
    return items.filter((item) => item.cats?.length > 1);
  }

  if (activeFilter === "お昼寝") {
    return items.filter((item) => item.id.includes("sleep") || item.title.includes("昼寝") || item.title.includes("ひなた"));
  }

  return items.filter((item) => item.cats?.includes(activeFilter));
}

function SectionCta({ cta, tone = "red" }) {
  return (
    <div className={`section-cta section-cta--${tone}`}>
      <OptimizedImage
        pictureClassName="section-cta__cat section-cta__cat--left"
        src="/assets/illustrations/profile-shiro.png"
        alt=""
        aria-hidden="true"
      />
      <div className="section-cta__body">
        <h3>{cta.title}</h3>
        <p>{cta.description}</p>
        <CtaButton
          variant="primary"
          href={cta.href}
          icon={tone === "blue" ? <PawIcon /> : <PlayIcon />}
          data-tracking="cta"
          data-cta-position={`section-${tone}-${cta.label}`}
          onClick={() =>
            trackCta({
              label: cta.label,
              position: `section-${tone}`,
              href: cta.href,
              type: cta.href.startsWith("#") ? "internal" : "subscribe",
            })
          }
        >
          {cta.label}
        </CtaButton>
      </div>
      <OptimizedImage
        pictureClassName="section-cta__cat section-cta__cat--right"
        src="/assets/illustrations/profile-hachi.png"
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}

function Videos() {
  const [activeVideoFilter, setActiveVideoFilter] = useState(siteData.videoFilters[0]);
  const filteredVideos = useMemo(
    () => filterVideos(siteData.videoLibrary, activeVideoFilter),
    [activeVideoFilter],
  );
  const handleVideoFilterSelect = (item) => {
    setActiveVideoFilter(item);
    trackFilter({ group: "video", value: item });
  };

  return (
    <section id="videos" className="video-section section-block">
      <PageIntro intro={siteData.pageIntros.videos} align="left" />
      <SectionHeading title="今日も、ちいさな事件が起きています" />
      <div className="video-grid">
        {siteData.videoCards.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            meta={video.label}
            thumbnail={<OptimizedImage src={video.image} alt={`${video.title}のサムネイル`} />}
            thumbnailHidden={false}
            showPlay={false}
            href={siteData.cta.subscribeHref}
            data-tracking="video-card"
            data-video-id={video.id}
            onClick={() =>
              trackVideoCard({
                videoId: video.id,
                title: video.title,
                list: "featured-cards",
              })
            }
          />
        ))}
      </div>

      <div className="video-feature">
        <div className="video-feature__image" aria-hidden="true">
          <OptimizedImage src={siteData.featuredVideo.image} alt="" />
        </div>
        <div className="video-feature__body">
          <p className="video-feature__eyebrow">♛ {siteData.featuredVideo.eyebrow}</p>
          <h3>{siteData.featuredVideo.title}</h3>
          <p>{siteData.featuredVideo.description}</p>
          <MetaPills
            items={[
              siteData.featuredVideo.duration,
              siteData.featuredVideo.date,
              siteData.featuredVideo.tag,
            ]}
          />
        </div>
      </div>

      <SectionHeading
        className="video-library-heading"
        eyebrow="Video"
        title="動画"
        lead="のんびり、ちょっとにぎやか。2匹の日常をまとめました。"
      />
      <FilterChips items={siteData.videoFilters} activeItem={activeVideoFilter} onSelect={handleVideoFilterSelect} />
      <div className="video-library-grid" aria-live="polite">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            meta={`${video.duration} / ${video.date} / ${video.tag}`}
            thumbnail={<OptimizedImage src={video.image} alt={`${video.title}のサムネイル`} />}
            thumbnailHidden={false}
            showPlay={false}
            href={siteData.cta.subscribeHref}
            data-tracking="video-card"
            data-video-id={video.id}
            onClick={() =>
              trackVideoCard({
                videoId: video.id,
                title: video.title,
                list: "video-library",
              })
            }
          />
        ))}
      </div>
      <SectionCta cta={siteData.sectionCtas.videos} />
    </section>
  );
}

function Gallery() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState(siteData.galleryFilters[0]);
  const filteredGalleryItems = useMemo(
    () => filterGallery(siteData.galleryPageItems, activeGalleryFilter),
    [activeGalleryFilter],
  );
  const handleGalleryFilterSelect = (item) => {
    setActiveGalleryFilter(item);
    trackFilter({ group: "gallery", value: item });
  };

  return (
    <section id="gallery" className="gallery-section section-block">
      <PageIntro intro={siteData.pageIntros.gallery} />
      <SectionHeading title="ふたりのひなた時間" />
      <div className="gallery-grid">
        {siteData.galleryItems.map((item, index) => (
          <GalleryCard
            key={item.id}
            title={item.title}
            caption={item.caption}
            visual={<OptimizedImage src={item.image} alt={`${item.title}の猫イラスト`} />}
            visualHidden={false}
            meta={index % 2 === 0 ? "しろとはち" : "ひなたメモ"}
          />
        ))}
      </div>

      <div className="best-shot">
        <div className="best-shot__text">
          <h3>
            <span>今月の</span>
            <span>ベストショット</span>
          </h3>
          <WhiskerDivider />
          <p>{siteData.bestShot.caption}</p>
        </div>
        <div className="best-shot__image" aria-hidden="true">
          <OptimizedImage src={siteData.bestShot.image} alt="" />
        </div>
      </div>

      <FilterChips
        items={siteData.galleryFilters}
        activeItem={activeGalleryFilter}
        onSelect={handleGalleryFilterSelect}
        tone="pink"
      />
      <div className="gallery-page-grid" aria-live="polite">
        {filteredGalleryItems.map((item) => (
          <article className="gallery-page-card" key={item.id}>
            <div className="gallery-page-card__image">
              <OptimizedImage src={item.image} alt={`${item.title}の猫イラスト`} />
            </div>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>

      <SectionHeading
        className="wallpaper-heading"
        title="壁紙にしたい一枚"
        lead="お気に入りの瞬間を、少し大きめのカードで並べました。"
      />
      <div className="wallpaper-grid">
        {siteData.wallpaperItems.map((item) => (
          <article className="wallpaper-card" key={item.id}>
            <OptimizedImage src={item.image} alt={`${item.title}の猫イラスト`} />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
      <SectionCta cta={siteData.sectionCtas.gallery} tone="blue" />
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__frame">
        <EyeDot color="blue" className="eye-dot-svg" />
        <div className="final-cta__content">
          <h2 id="final-cta-title">しろとはちの毎日を、これからも一緒に。</h2>
          <WhiskerDivider />
          <CtaButton
            variant="primary"
            href={siteData.cta.subscribeHref}
            icon={<PlayIcon />}
            data-tracking="cta"
            data-cta-position="final"
            onClick={() =>
              trackCta({
                label: "チャンネル登録",
                position: "final",
                href: siteData.cta.subscribeHref,
                type: "subscribe",
              })
            }
          >
            チャンネル登録
          </CtaButton>
        </div>
        <EyeDot color="yellow" className="eye-dot-svg" />
      </div>
    </section>
  );
}

function App() {
  useScrollDepthTracking();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <Header />
      <main id="main-content" role="main" tabIndex="-1">
        <Hero />
        <Characters />
        <Relationship />
        <section className="section-block section-block--compact" aria-label="2匹の日常を動画で見る">
          <SectionCta cta={siteData.sectionCtas.characters} tone="blue" />
        </section>
        <Videos />
        <Gallery />
        <FinalCta />
      </main>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer__inner">
          <span>{siteData.title}</span>
          <span>2匹の猫と過ごす、ふわっとやさしい日常チャンネル</span>
          <span>このページはLP制作サンプルとして作成した架空のYouTubeチャンネルです。</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
