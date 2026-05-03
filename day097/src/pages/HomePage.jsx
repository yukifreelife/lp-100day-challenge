import Card from "../components/Card.jsx";
import ChipList from "../components/ChipList.jsx";
import FAQ from "../components/FAQ.jsx";
import IconImg from "../components/IconImg.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

function HomePage({ page, siteData }) {
  const { shared, cta } = siteData;

  return (
    <>
      <PageHero page={page} ctaMap={cta} chips={shared.taskChips} visualVariant="home" label={siteData.brand.tagline} />

      <section className="pain-section">
        <SectionHeader
          eyebrow="Small Tasks"
          title="毎日の細かい事務を、頼みやすい単位に分けました"
          lead="採用するほどではないけれど、ひとりで抱えるには重い作業を切り出せます。"
          align="center"
        />
        <div className="pain-grid">
          {page.sections.pains.map((pain) => (
            <Card className="pain-card" key={pain.title}>
              <IconImg src={pain.icon} alt="" className="pain-card__icon" decorative />
              <h3 className="pain-card__title">{pain.title}</h3>
              <p className="pain-card__text">{pain.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="service-section">
        <SectionHeader
          eyebrow="Service"
          title="よく頼まれるお手伝い"
          lead="メール、日程、資料、予約、調査、請求まわりまで。普段のツールに合わせて進めます。"
        />
        <div className="service-grid">
          {shared.services.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </div>
      </section>

      <section className="flow-section">
        <SectionHeader eyebrow="Flow" title="相談から完了まで3ステップ" align="center" />
        <div className="step-grid">
          {page.sections.flow.map((item) => (
            <Card className="step-card" key={item.step}>
              <span className="step-card__number">{item.step}</span>
              <h3 className="step-card__title">{item.title}</h3>
              <p className="step-card__text">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-section__content">
          <SectionHeader eyebrow="Voice" title="親しみやすく、でも仕事はていねいに" />
          <ChipList items={shared.trustChips} className="trust-chip-list chip-list" itemClassName="trust-chip chip" />
        </div>
        <div className="testimonial-grid">
          {page.sections.testimonials.map((item) => (
            <Card className="testimonial-card" key={item.name}>
              <p className="testimonial-card__quote">「{item.quote}」</p>
              <p className="testimonial-card__name">{item.name}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="pricing-teaser">
        <Card className="pricing-teaser__card">
          <IconImg src={siteData.assets.icons.yen} alt="" className="pricing-teaser__icon" decorative />
          <div className="pricing-teaser__body">
            <p className="pricing-teaser__eyebrow">Price</p>
            <h2 className="pricing-teaser__title">1件からでも、月ごとでも選べます</h2>
            <p className="pricing-teaser__text">スポット依頼から月額プランまで、作業量に合わせて無理なく始められます。</p>
          </div>
          <a className="pricing-teaser__link" href="/pricing">
            料金を見る
          </a>
        </Card>
      </section>

      <FAQ items={shared.faqs} />
    </>
  );
}

export default HomePage;
