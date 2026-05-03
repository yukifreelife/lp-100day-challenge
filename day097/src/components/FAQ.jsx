import SectionHeader from "./SectionHeader.jsx";

function FAQ({ items = [], title = "よくある質問", eyebrow = "FAQ" }) {
  return (
    <section className="faq-section">
      <SectionHeader eyebrow={eyebrow} title={title} align="center" />
      <div className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary className="faq-item__question">{item.q}</summary>
            <p className="faq-item__answer">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
