import CTAButton from "./CTAButton.jsx";
import IconImg from "./IconImg.jsx";

function FinalCTA({ brand, ctaMap, title = "小さな事務から、今日のうちに手放しましょう。", lead }) {
  return (
    <section className="final-cta">
      <div className="final-cta__content">
        <div className="final-cta__mark">
          <IconImg src={brand.logoMark} alt="" className="final-cta__mark-img" decorative />
        </div>
        <p className="final-cta__eyebrow">{brand.tagline}</p>
        <h2 className="final-cta__title">{title}</h2>
        {lead ? <p className="final-cta__lead">{lead}</p> : null}
        <div className="final-cta__actions">
          <CTAButton cta={ctaMap.primary} variant="primary" />
          <CTAButton cta={ctaMap.secondary} variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
