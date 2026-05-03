import CTAButton from "./CTAButton.jsx";
import ChipList from "./ChipList.jsx";
import HeroVisual from "./HeroVisual.jsx";

function PageHero({ page, ctaMap, chips = [], visualVariant = "default", label }) {
  const hero = page.hero;
  const titleLines = hero.titleLines ?? [hero.title];

  return (
    <section className={`hero hero--${visualVariant}`}>
      <div className="hero__content">
        {label ? <p className="hero__label">{label}</p> : null}
        <h1 className="hero__title" aria-label={hero.title}>
          {titleLines.map((line) => (
            <span className="hero__title-line" key={line}>
              {line}
            </span>
          ))}
        </h1>
        <p className="hero__lead">{hero.lead}</p>
        {chips.length ? <ChipList items={chips} className="hero__chips chip-list" itemClassName="hero__chip chip" /> : null}
        {hero.ctas?.length ? (
          <div className="hero__actions">
            {hero.ctas.map((key, index) => (
              <CTAButton cta={ctaMap[key]} variant={index === 0 ? "primary" : "secondary"} key={key} />
            ))}
          </div>
        ) : null}
      </div>
      <HeroVisual
        image={hero.image}
        alt=""
        chips={hero.chips ?? chips.slice(0, 3)}
        supportIcon={ctaMap.primary?.icon}
        variant={visualVariant}
      />
    </section>
  );
}

export default PageHero;
