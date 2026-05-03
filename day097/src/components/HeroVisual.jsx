import IconImg from "./IconImg.jsx";
import { getImageDimensions } from "../utils/assetDimensions.js";

function HeroVisual({ image, alt, chips = [], supportIcon, variant = "default" }) {
  const dimensions = getImageDimensions(image);

  return (
    <div className={`hero-visual hero-visual--${variant}`}>
      <div className="hero-visual__frame">
        <img
          className="hero-visual__image"
          src={image}
          alt={alt}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={dimensions.width}
          height={dimensions.height}
        />
      </div>
      {supportIcon ? (
        <div className="hero-visual__badge" aria-hidden="true">
          <IconImg src={supportIcon} className="hero-visual__badge-icon" decorative />
        </div>
      ) : null}
      {chips.length ? (
        <ul className="hero-visual__floating-list" aria-label="対応できる作業例">
          {chips.map((chip) => (
            <li className="hero-visual__floating-chip" key={chip}>
              {chip}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default HeroVisual;
