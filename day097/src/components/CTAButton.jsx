import IconImg from "./IconImg.jsx";

function CTAButton({ cta, variant = "primary", className = "" }) {
  if (!cta) return null;

  return (
    <a className={`cta-button cta-button--${variant} ${className}`.trim()} href={cta.href}>
      {cta.icon ? <IconImg src={cta.icon} alt="" className="cta-button__icon" decorative /> : null}
      <span>{cta.label}</span>
    </a>
  );
}

export default CTAButton;
