function SectionHeader({ eyebrow, title, lead, align = "left" }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-header__title">{title}</h2>
      {lead ? <p className="section-header__lead">{lead}</p> : null}
    </div>
  );
}

export default SectionHeader;
