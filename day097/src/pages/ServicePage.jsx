import Card from "../components/Card.jsx";
import ChipList from "../components/ChipList.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

function ServicePage({ page, siteData }) {
  return (
    <>
      <PageHero page={page} ctaMap={siteData.cta} chips={page.categories} visualVariant="service" label="Service Menu" />

      <section className="category-section">
        <SectionHeader eyebrow="Category" title="依頼カテゴリ" align="center" />
        <ChipList items={page.categories} className="category-chip-list chip-list" itemClassName="category-chip chip" />
      </section>

      <section className="service-detail-section">
        <SectionHeader
          eyebrow="Tasks"
          title="頼める作業一覧"
          lead="よくある依頼を8つに整理しました。ここにない作業も、近い内容から相談できます。"
        />
        <div className="service-detail-grid">
          {page.serviceCards.map((service) => (
            <ServiceCard service={service} className="service-card--detail" key={service.title} />
          ))}
        </div>
      </section>

      <section className="example-section">
        <SectionHeader eyebrow="Examples" title="こんな頼み方ができます" align="center" />
        <div className="example-grid">
          {page.examples.map((example, index) => (
            <Card className="example-card" key={example}>
              <span className="example-card__number">{String(index + 1).padStart(2, "0")}</span>
              <p className="example-card__text">{example}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="request-policy-section">
        <SectionHeader eyebrow="Policy" title="依頼できること・できないこと" />
        <div className="request-policy-grid">
          <Card className="request-policy-card request-policy-card--can">
            <h3 className="request-policy-card__title">依頼できること</h3>
            <ul className="request-policy-list">
              {page.requestPolicy.can.map((item) => (
                <li className="request-policy-list__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="request-policy-card request-policy-card--cannot">
            <h3 className="request-policy-card__title">お受けできないこと</h3>
            <ul className="request-policy-list">
              {page.requestPolicy.cannot.map((item) => (
                <li className="request-policy-list__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
