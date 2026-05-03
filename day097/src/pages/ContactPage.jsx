import { useState } from "react";
import Card from "../components/Card.jsx";
import ChipList from "../components/ChipList.jsx";
import FAQ from "../components/FAQ.jsx";
import IconImg from "../components/IconImg.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

function FieldControl({ field }) {
  const baseId = `contact-${field.name}`;

  if (field.type === "textarea") {
    return (
      <textarea
        className="contact-form__textarea"
        id={baseId}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        rows={6}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select className="contact-form__select" id={baseId} name={field.name} required={field.required} defaultValue="">
        <option value="" disabled>
          選択してください
        </option>
        {field.options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      className="contact-form__input"
      id={baseId}
      name={field.name}
      type={field.type}
      placeholder={field.placeholder}
      required={field.required}
    />
  );
}

function ContactPage({ page, siteData }) {
  const form = page.form;
  const [submitMessage, setSubmitMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitMessage("送信内容を受け付けました。1営業日以内にご連絡します。");
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHero page={page} ctaMap={siteData.cta} chips={siteData.shared.trustChips} visualVariant="contact" label="Contact" />

      <section className="contact-section">
        <div className="contact-layout">
          <Card className="contact-form-card">
            <SectionHeader eyebrow="Form" title={form.title} lead={form.helper} />
            <form className="contact-form" action="#" method="post" onSubmit={handleSubmit}>
              {form.fields.map((field) => (
                <div className={`contact-form__field contact-form__field--${field.type}`} key={field.name}>
                  <label className="contact-form__label" htmlFor={`contact-${field.name}`}>
                    {field.label}
                    {field.required ? <span className="contact-form__required">必須</span> : null}
                  </label>
                  <FieldControl field={field} />
                </div>
              ))}
              <button className="contact-form__submit cta-button cta-button--primary" type="submit">
                <IconImg src={siteData.assets.icons.chat} alt="" className="cta-button__icon" decorative />
                <span>{form.submitLabel}</span>
              </button>
              {submitMessage ? (
                <p className="contact-form__status" role="status">
                  {submitMessage}
                </p>
              ) : null}
            </form>
          </Card>

          <aside className="contact-side-panel" aria-label={page.sidePanel.title}>
            <Card className="consult-flow-card">
              <div className="consult-flow-card__head">
                <IconImg src={page.sidePanel.icon} alt="" className="consult-flow-card__icon" decorative />
                <h2 className="consult-flow-card__title">{page.sidePanel.title}</h2>
              </div>
              <ol className="consult-flow-list">
                {page.sidePanel.steps.map((step, index) => (
                  <li className="consult-flow-list__item" key={step}>
                    <span className="consult-flow-list__number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="consult-flow-list__text">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="consult-flow-card__privacy">{page.sidePanel.privacyNote}</p>
            </Card>

            <Card className="contact-trust-card">
              <h2 className="contact-trust-card__title">気軽に相談できます</h2>
              <ChipList items={siteData.shared.trustChips} className="contact-trust-chip-list chip-list" itemClassName="contact-trust-chip chip" />
            </Card>
          </aside>
        </div>
      </section>

      <FAQ items={siteData.shared.faqs} title="相談前のよくある質問" />
    </>
  );
}

export default ContactPage;
