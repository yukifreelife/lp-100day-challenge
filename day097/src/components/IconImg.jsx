import { getImageDimensions } from "../utils/assetDimensions.js";

function IconImg({ src, alt = "", className = "icon-img", decorative = false }) {
  const dimensions = getImageDimensions(src);

  return (
    <img
      className={className}
      src={src}
      alt={decorative ? "" : alt}
      aria-hidden={decorative ? "true" : undefined}
      loading="lazy"
      decoding="async"
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}

export default IconImg;
