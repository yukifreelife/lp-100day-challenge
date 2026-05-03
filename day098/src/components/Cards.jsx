function joinClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}) {
  const Component = href ? "a" : "button";
  const ctaClassName = joinClassNames(
    "cta-button",
    `cta-button--${variant}`,
    icon ? "cta-button--with-icon" : "",
    className,
  );

  return (
    <Component className={ctaClassName} href={href} type={href ? undefined : "button"} {...props}>
      {icon && (
        <span className="cta-button__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="cta-button__label">{children}</span>
    </Component>
  );
}

export function ProfileCard({
  name,
  role,
  description,
  tags = [],
  illustration,
  accent = "blue",
  className = "",
}) {
  return (
    <article className={joinClassNames("profile-card", `profile-card--${accent}`, className)}>
      {illustration && (
        <div className="profile-card__visual" aria-hidden="true">
          {illustration}
        </div>
      )}

      <div className="profile-card__body">
        <div className="profile-card__header">
          {role && <p className="profile-card__role">{role}</p>}
          <h3 className="profile-card__name">{name}</h3>
        </div>

        {description && <p className="profile-card__description">{description}</p>}

        {tags.length > 0 && (
          <ul className="profile-card__tags" aria-label={`${name}の特徴`}>
            {tags.map((tag) => (
              <li className="profile-card__tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function VideoCard({
  title,
  description,
  meta,
  thumbnail,
  thumbnailHidden = true,
  badge,
  href,
  icon,
  showPlay = true,
  className = "",
  ...props
}) {
  const Component = href ? "a" : "article";
  const linkProps = href ? { href } : {};

  return (
    <Component className={joinClassNames("video-card", className)} {...linkProps} {...props}>
      <div className="video-card__thumbnail">
        {thumbnail && (
          <div className="video-card__thumbnail-scene" aria-hidden={thumbnailHidden ? "true" : undefined}>
            {thumbnail}
          </div>
        )}
        {showPlay && (
          <span className="video-card__play" aria-hidden="true">
            {icon || <span className="video-card__play-mark" />}
          </span>
        )}
        {badge && <span className="video-card__badge">{badge}</span>}
      </div>

      <div className="video-card__body">
        {meta && <p className="video-card__meta">{meta}</p>}
        <h3 className="video-card__title">{title}</h3>
        {description && <p className="video-card__description">{description}</p>}
      </div>
    </Component>
  );
}

export function GalleryCard({
  title,
  caption,
  visual,
  visualHidden = true,
  meta,
  href,
  className = "",
  ...props
}) {
  const Component = href ? "a" : "article";
  const linkProps = href ? { href } : {};

  return (
    <Component className={joinClassNames("gallery-card", className)} {...linkProps} {...props}>
      <div className="gallery-card__visual" aria-hidden={visual && visualHidden ? "true" : undefined}>
        {visual}
      </div>

      <div className="gallery-card__body">
        {meta && <p className="gallery-card__meta">{meta}</p>}
        <h3 className="gallery-card__title">{title}</h3>
        {caption && <p className="gallery-card__caption">{caption}</p>}
      </div>
    </Component>
  );
}

export function FeatureCard({
  title,
  description,
  icon,
  className = "",
}) {
  return (
    <article className={joinClassNames("feature-card", className)}>
      {icon && (
        <div className="feature-card__icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="feature-card__title">{title}</h3>
      {description && <p className="feature-card__description">{description}</p>}
    </article>
  );
}
