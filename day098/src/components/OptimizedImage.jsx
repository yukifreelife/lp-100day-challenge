const FALLBACK_SRC = "/assets/logos/logo-cats.png";
const RESPONSIVE_WIDTHS = [320, 480, 640, 960, 1200];

const ASSET_DIMENSIONS = {
  "/assets/featured/best-shot.png": [573, 296],
  "/assets/featured/weekly-playtime.png": [405, 272],
  "/assets/gallery/box-hideout.png": [184, 119],
  "/assets/gallery/face-to-face.png": [184, 119],
  "/assets/gallery/music-room.png": [185, 119],
  "/assets/gallery/nap-together.png": [184, 119],
  "/assets/gallery/page-box-shiro.png": [187, 225],
  "/assets/gallery/page-round-eyes.png": [187, 225],
  "/assets/gallery/page-sleep-together.png": [186, 225],
  "/assets/gallery/page-snack-sign.png": [187, 225],
  "/assets/gallery/page-sun-stretch.png": [186, 225],
  "/assets/gallery/page-tiny-paws.png": [187, 225],
  "/assets/gallery/page-window-back.png": [186, 225],
  "/assets/gallery/page-yarn-hachi.png": [186, 225],
  "/assets/gallery/round-sleep.png": [184, 119],
  "/assets/gallery/soft-bed.png": [184, 119],
  "/assets/gallery/sunny-room.png": [185, 119],
  "/assets/gallery/window-pair.png": [184, 119],
  "/assets/illustrations/gallery-hero-cats.png": [437, 300],
  "/assets/illustrations/hero-cats.png": [461, 507],
  "/assets/illustrations/intro-cats.png": [361, 310],
  "/assets/illustrations/profile-detail-hachi-charm.png": [143, 120],
  "/assets/illustrations/profile-detail-hachi-likes.png": [146, 126],
  "/assets/illustrations/profile-detail-hachi-personality.png": [142, 112],
  "/assets/illustrations/profile-detail-shiro-charm.png": [138, 120],
  "/assets/illustrations/profile-detail-shiro-likes.png": [141, 124],
  "/assets/illustrations/profile-detail-shiro-personality.png": [132, 112],
  "/assets/illustrations/profile-hachi.png": [144, 167],
  "/assets/illustrations/profile-shiro.png": [159, 167],
  "/assets/illustrations/video-hero-cats.png": [420, 280],
  "/assets/logos/logo-cats.png": [94, 45],
  "/assets/relationship/morning-greeting.png": [210, 146],
  "/assets/relationship/snack-meeting.png": [210, 146],
  "/assets/relationship/window-watch.png": [211, 146],
  "/assets/thumbnails/library-box-hideout.png": [261, 174],
  "/assets/thumbnails/library-fur-grooming.png": [261, 174],
  "/assets/thumbnails/library-morning-stretch.png": [261, 174],
  "/assets/thumbnails/library-night-rest.png": [261, 174],
  "/assets/thumbnails/library-snack-time.png": [261, 174],
  "/assets/thumbnails/library-window-watch.png": [261, 174],
  "/assets/thumbnails/morning-stretch.png": [185, 164],
  "/assets/thumbnails/snack-time.png": [186, 164],
  "/assets/thumbnails/weekend-games.png": [186, 164],
  "/assets/thumbnails/window-watch.png": [186, 164],
  "/assets/wallpapers/blue-sky-pair.png": [242, 147],
  "/assets/wallpapers/rolling-hachi.png": [242, 147],
  "/assets/wallpapers/sunny-shiro.png": [242, 147],
};

function getDimensions(src) {
  const dimensions = ASSET_DIMENSIONS[src];

  if (!dimensions) {
    return {};
  }

  return {
    width: dimensions[0],
    height: dimensions[1],
  };
}

function getSrcSet(src, format, dimensions) {
  if (!dimensions?.width) {
    return `${src.slice(0, -4)}.${format}`;
  }

  const base = src.slice(0, -4);
  const widths = RESPONSIVE_WIDTHS.filter((width) => width < dimensions.width);
  widths.push(dimensions.width);

  return widths
    .map((width) => {
      const suffix = width === dimensions.width ? "" : `-${width}`;
      return `${base}${suffix}.${format} ${width}w`;
    })
    .join(", ");
}

function getModernSources(src, dimensions) {
  if (!src?.endsWith(".png") || src.includes("/mockups/")) {
    return null;
  }

  return {
    avif: getSrcSet(src, "avif", dimensions),
    webp: getSrcSet(src, "webp", dimensions),
  };
}

function handleFallback(event, fallbackSrc, fallbackAlt) {
  const image = event.currentTarget;

  if (image.dataset.fallbackApplied === "true") {
    return;
  }

  image.dataset.fallbackApplied = "true";
  image.closest("picture")?.querySelectorAll("source").forEach((source) => source.remove());
  image.src = fallbackSrc;

  if (!image.alt && fallbackAlt) {
    image.alt = fallbackAlt;
  }
}

export default function OptimizedImage({
  src,
  alt,
  pictureClassName,
  sizes = "(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 760px",
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  width,
  height,
  fallbackSrc = FALLBACK_SRC,
  fallbackAlt = "しろとはちのロゴ",
  onError,
  ...props
}) {
  const dimensions = getDimensions(src);
  const modernSources = getModernSources(src, dimensions);
  const image = (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      width={width ?? dimensions.width}
      height={height ?? dimensions.height}
      onError={(event) => {
        onError?.(event);

        if (!event.defaultPrevented) {
          handleFallback(event, fallbackSrc, fallbackAlt);
        }
      }}
      {...props}
    />
  );

  if (!modernSources) {
    return image;
  }

  return (
    <picture className={pictureClassName}>
      <source srcSet={modernSources.avif} sizes={sizes} type="image/avif" />
      <source srcSet={modernSources.webp} sizes={sizes} type="image/webp" />
      {image}
    </picture>
  );
}
