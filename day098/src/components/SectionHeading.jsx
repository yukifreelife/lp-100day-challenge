export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  showWhiskers = true,
  className = "",
}) {
  const headingClassName = [
    "section-heading",
    `section-heading--${align}`,
    showWhiskers ? "section-heading--with-whiskers" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headingClassName}>
      {showWhiskers && (
        <div className="section-heading__whiskers" aria-hidden="true">
          <span className="section-heading__whisker section-heading__whisker--left" />
          <span className="section-heading__whisker-dot section-heading__whisker-dot--blue" />
          <span className="section-heading__whisker-dot section-heading__whisker-dot--yellow" />
          <span className="section-heading__whisker section-heading__whisker--right" />
        </div>
      )}

      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title">{title}</h2>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </header>
  );
}
