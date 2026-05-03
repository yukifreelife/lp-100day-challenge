import Card from "../components/Card.jsx";
import FAQ from "../components/FAQ.jsx";
import IconImg from "../components/IconImg.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

function PricingPage({ page, siteData }) {
  return (
    <>
      <PageHero page={page} ctaMap={siteData.cta} chips={siteData.shared.trustChips} visualVariant="pricing" label="Pricing" />

      <section className="pricing-section">
        <SectionHeader
          eyebrow="Plans"
          title="作業量に合わせて選べる料金"
          lead="単発の小さな依頼から、毎週の定常事務まで。必要な分だけ始められます。"
          align="center"
        />
        <div className="pricing-grid">
          {page.plans.map((plan) => (
            <Card className={`pricing-card${plan.recommended ? " pricing-card--recommended" : ""}`} key={plan.name}>
              {plan.recommended ? <p className="pricing-card__badge">おすすめ</p> : null}
              <IconImg src={plan.icon} alt="" className="pricing-card__icon" decorative />
              <h3 className="pricing-card__name">{plan.name}</h3>
              <p className="pricing-card__description">{plan.description}</p>
              <p className="pricing-card__price">
                <span>{plan.price}</span>
                <small>{plan.unit}</small>
              </p>
              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li className="pricing-card__feature" key={feature}>
                    {feature}
                  </li>
                ))}
              </ul>
              <a className="pricing-card__link" href="/contact">
                この内容で相談する
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section className="included-section">
        <SectionHeader eyebrow="Included" title="どのプランにも含まれること" />
        <div className="included-grid">
          {page.included.map((item) => (
            <Card className="included-card" key={item}>
              <IconImg src={siteData.assets.icons.checklist} alt="" className="included-card__icon" decorative />
              <p className="included-card__text">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <FAQ items={page.faqs} title="料金についての質問" />
    </>
  );
}

export default PricingPage;
