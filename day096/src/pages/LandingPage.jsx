import {
  brand,
  beforeAfter,
  cta,
  diagnosisItems,
  finalCta,
  hero,
  metrics,
  navigation,
  ownerEffort,
  pricing,
  scope,
  sampleNotice,
  targetOwners,
  trust,
} from '../data/siteData.js';

const diagnosisIcons = {
  写真: 'diagnosis-01-photo.png',
  タイトル: 'diagnosis-02-title.png',
  説明文: 'diagnosis-03-text.png',
  チェックイン案内: 'diagnosis-04-pin.png',
  レビュー返信: 'diagnosis-05-chat.png',
  多言語対応: 'diagnosis-06-globe.png',
  周辺案内: 'diagnosis-07-map.png',
};

const ownerIcons = ['owner-home.png', 'owner-camera.png', 'owner-question.png', 'owner-chart.png'];
const proofIcons = ['proof-key.png', 'proof-document.png', 'proof-chat.png'];
const metricIcons = ['owner-chart.png', 'proof-chat.png', 'rating-star.png', 'diagnosis-01-photo.png', 'diagnosis-07-map.png'];
const workflowIcons = ['workflow-link.png', 'workflow-doc.png', 'workflow-people.png', 'workflow-report.png', 'workflow-photo.png'];
const trustIcons = ['trust-user.png', 'trust-award.png', 'trust-globe.png', 'trust-key.png'];
const metricLevels = [82, 58, 74, 66, 88];

function MockupIcon({ name, alt = '', className = '', ...props }) {
  const decorativeProps = alt
    ? {}
    : {
        'aria-hidden': 'true',
      };

  return (
    <img
      className={`mockup-icon mockup-icon--${name.replace(/\.png$/, '')}${className ? ` ${className}` : ''}`}
      src={`/assets/mockup-icons/${name}`}
      alt={alt}
      {...decorativeProps}
      {...props}
    />
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function CtaLink({ href, variant = 'primary', children }) {
  const arrow = variant === 'secondary' ? 'arrow-ink.png' : 'arrow-white.png';

  return (
    <a className={`cta-link cta-link--${variant}`} href={href}>
      <span>{children}</span>
      <MockupIcon name={arrow} className="cta-link__icon" />
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="site-header__logo" href="#top" aria-label="YADO Review Lab トップへ">
        <MockupIcon name="logo-stamp.png" alt="" className="site-header__logo-mark" />
        <span>{brand.name}</span>
      </a>
      <nav className="site-header__nav" aria-label="主要ナビゲーション">
        {navigation.map(({ label, href }) => (
          <a key={href} href={href === '#results' ? '#before-after' : href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="site-header__cta" href="#final-cta">
        <MockupIcon name="cta-key.png" />
        <span>{cta.header}</span>
      </a>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="予約ページ改善のイメージ">
      <div className="hero-visual__room-card">
        <img src="/assets/kominka-room-hero.png" alt="古民家宿の落ち着いた室内" />
        <div className="hero-visual__rating-card">
          <MockupIcon name="rating-star.png" alt="レビュー評価" />
          <strong>4.78</strong>
          <span>guest review</span>
        </div>
      </div>
      <div className="hero-visual__listing-card">
        <img src="/assets/listing-collage.png" alt="予約ページ写真と説明文の改善コラージュ" />
        <div className="hero-visual__listing-summary">
          <MockupIcon name="diagnosis-02-title.png" />
          <div>
            <strong>Listing summary</strong>
            <span>写真・タイトル・導線を再編集</span>
          </div>
        </div>
      </div>
      <div className="hero-visual__dashboard-card">
        <div className="hero-visual__dashboard-head">
          <MockupIcon name="owner-chart.png" />
          <span>Sample dashboard</span>
        </div>
        <dl>
          <div>
            <dt>質問数</dt>
            <dd>-28%</dd>
          </div>
          <div>
            <dt>予約前不安</dt>
            <dd>Low</dd>
          </div>
        </dl>
      </div>
      <div className="hero-visual__guide-card">
        <MockupIcon name="proof-key.png" />
        <div>
          <strong>Check-in Guide</strong>
          <span>鍵・駐車場・目印を1枚に整理</span>
        </div>
      </div>
      <div className="hero-visual__checkin-card">
        <MockupIcon name="guide-number-1.png" />
        <MockupIcon name="guide-number-2.png" />
        <MockupIcon name="guide-number-3.png" />
        <span>到着前の案内を3ステップ化</span>
      </div>
      <div className="hero-visual__radar-card">
        <span className="radar-chart" aria-hidden="true">
          <span className="radar-chart__shape" />
        </span>
        <p>7-point diagnosis</p>
      </div>
      <div className="hero-visual__delta-card">
        <MockupIcon name="proof-chat.png" />
        <div>
          <strong>Review delta</strong>
          <span>返信テンプレを宿らしく調整</span>
        </div>
      </div>
      <img className="hero-visual__key" src="/assets/brass-key-transparent.png" alt="" aria-hidden="true" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-section__content">
        <p className="hero-section__eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-section__lead">{hero.lead}</p>
        <div className="hero-section__actions">
          <CtaLink href="#final-cta">{cta.primary}</CtaLink>
          <CtaLink href="#before-after" variant="secondary">
            {cta.secondary}
          </CtaLink>
        </div>
        <ul className="hero-section__proof-list" aria-label="サービスの特徴">
          {hero.proofChips.map((chip, index) => (
            <li key={chip}>
              <MockupIcon name={proofIcons[index] || 'proof-key.png'} />
              <span>{chip}</span>
            </li>
          ))}
        </ul>
      </div>
      <HeroVisual />
    </section>
  );
}

function OwnersSection() {
  return (
    <section className="owners-section section-band" id="owners">
      <SectionHeader
        eyebrow="Target Owners"
        title="こんな古民家民泊オーナーへ"
        description="大規模な改修ではなく、予約前後の伝え方を整えて宿の魅力を届きやすくします。"
      />
      <div className="owners-grid">
        {targetOwners.map((item, index) => (
          <article className="owner-card" key={item.title}>
            <span className="owner-card__number">{String(index + 1).padStart(2, '0')}</span>
            <MockupIcon name={ownerIcons[index] || 'owner-home.png'} className="owner-card__icon" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DiagnosisSection() {
  return (
    <section className="diagnosis-section" id="diagnosis">
      <SectionHeader
        eyebrow="7 Point Diagnosis"
        title="予約される前後の不安を7項目で診断"
        description="写真からレビュー返信まで、ゲストが判断する接点を一続きの体験として見直します。"
      />
      <div className="diagnosis-grid">
        {diagnosisItems.map((item) => {
          const icon = diagnosisIcons[item.title] || 'diagnosis-02-title.png';

          return (
            <article className="diagnosis-card" key={item.title}>
              <span className="diagnosis-card__icon">
                <MockupIcon name={icon} alt="" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="diagnosis-card__checks" aria-label={`${item.title}の確認項目`}>
                {item.checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="metrics-section section-band" id="metrics">
      <SectionHeader
        eyebrow="Improvement Signals"
        title="改善で追うべき指標を明確に"
        description="見た目の変更だけで終わらせず、問い合わせ・質問数・レビュー評価の変化を追える形にします。"
      />
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <article className="metric-card" key={metric.label}>
            <MockupIcon name={metricIcons[index] || 'owner-chart.png'} className="metric-card__icon" />
            <p className="metric-card__label">{metric.label}</p>
            <strong>{metric.value}</strong>
            <span>{metric.detail}</span>
            <div className="metric-card__bar" aria-hidden="true">
              <span style={{ '--metric-level': `${metricLevels[index] || 70}%` }} />
            </div>
          </article>
        ))}
      </div>
      <p className="metrics-note">{sampleNotice}</p>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="before-after-section" id="before-after">
      <SectionHeader
        eyebrow="Before / After"
        title="伝わりにくい予約ページを、選びやすい宿の体験へ"
        description="古民家の味わいを残しながら、ゲストが迷うポイントを減らします。"
      />
      <div className="before-after-layout">
        <article className="comparison-card comparison-card--before">
          <h3>{beforeAfter.before.title}</h3>
          <ul>
            {beforeAfter.before.items.map((item) => (
              <li key={item}>
                <MockupIcon name="comparison-x.png" className="comparison-card__icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <div className="comparison-center" aria-hidden="true">
          <img src="/assets/vermilion-stamp-transparent.png" alt="" />
          <MockupIcon name="comparison-arrow.png" className="comparison-center__arrow" />
        </div>
        <article className="comparison-card comparison-card--after">
          <h3>{beforeAfter.after.title}</h3>
          <ul>
            {beforeAfter.after.items.map((item) => (
              <li key={item}>
                <MockupIcon name="comparison-check.png" className="comparison-card__icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="workflow-section section-band" id="workflow">
      <SectionHeader
        eyebrow="Owner Effort"
        title="オーナーの作業負担は最小限"
        description="日々の運営を止めず、必要な情報共有と短いヒアリングで改善案まで進めます。"
      />
      <ol className="workflow-steps">
        {ownerEffort.steps.map((step, index) => (
          <li className="workflow-step" key={step.label}>
            <span>{index + 1}</span>
            <MockupIcon name={workflowIcons[index] || 'workflow-doc.png'} className="workflow-step__icon" />
            <strong>{step.label}</strong>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ScopeSection() {
  return (
    <section className="scope-section" id="scope">
      <SectionHeader
        eyebrow="Scope"
        title="対応範囲と対応外を明確に"
        description="LP改善・ゲスト体験改善に集中し、許認可や運営代行とは切り分けて支援します。"
      />
      <div className="scope-layout">
        <article className="scope-card scope-card--in">
          <h3>対応範囲</h3>
          <ul>
            {scope.included.map((item) => (
              <li key={item}>
                <MockupIcon name="scope-check.png" className="scope-card__icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="scope-card scope-card--out">
          <h3>対応外</h3>
          <ul>
            {scope.excluded.map((item) => (
              <li key={item}>
                <MockupIcon name="scope-x.png" className="scope-card__icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="trust-section section-band" id="trust">
      <SectionHeader
        eyebrow="Trust"
        title="古民家らしさとOTA運用の両方を見ます"
        description="予約ページの表現だけでなく、到着体験とレビュー返信まで一体で整えます。"
      />
      <div className="trust-layout">
        <article className="trust-card trust-card--profile">
          <MockupIcon name={trustIcons[0]} className="trust-card__icon" />
          <p className="trust-card__label">監修者</p>
          <h3>{trust.supervisor.name}</h3>
          <p>{trust.supervisor.bio}</p>
        </article>
        <article className="trust-card">
          <MockupIcon name={trustIcons[1]} className="trust-card__icon" />
          <p className="trust-card__label">支援実績</p>
          <strong>{trust.result}</strong>
          <p>個人運営の一棟貸し、古民家宿、農泊、町家ステイを中心に支援。</p>
        </article>
        <article className="trust-card">
          <MockupIcon name={trustIcons[2]} className="trust-card__icon" />
          <p className="trust-card__label">対応OTA</p>
          <p>{trust.ota.join(' / ')}</p>
        </article>
        <article className="trust-card">
          <MockupIcon name={trustIcons[3]} className="trust-card__icon" />
          <p className="trust-card__label">強み</p>
          <ul className="trust-card__strengths">
            {trust.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title="改善段階に合わせて選べる3プラン"
        description="まず診断だけ、レポートまで、実装伴走まで。今の運営状況に合わせて選べます。"
      />
      <div className="pricing-grid">
        {pricing.map((plan, index) => (
          <article className={`pricing-card${index === 1 ? ' pricing-card--featured' : ''}`} key={plan.name}>
            {index === 1 ? <span className="pricing-card__badge">おすすめ</span> : null}
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <strong>{plan.price}</strong>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <MockupIcon name="scope-check.png" className="pricing-card__icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a className="pricing-card__button" href="#final-cta">
              <MockupIcon name={index === 1 ? 'final-key.png' : 'cta-key.png'} />
              <span>相談する</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta-section" id="final-cta">
      <div className="final-cta-section__content">
        <MockupIcon name="final-key.png" className="final-cta-section__icon" />
        <p className="section-eyebrow">Free Review</p>
        <h2>{finalCta.title}</h2>
        <p>{finalCta.text}</p>
        <p className="final-cta-section__note">{finalCta.note}</p>
        <div className="final-cta-section__actions">
          <CtaLink href="mailto:review@yado-review-lab.jp?subject=YADO%20Review%20Lab%20%E7%84%A1%E6%96%99%E8%A8%BA%E6%96%AD%E7%9B%B8%E8%AB%87">
            {cta.final}
          </CtaLink>
          <CtaLink href="#diagnosis" variant="secondary">
            診断項目を確認する
          </CtaLink>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="yado-review-lab-page min-h-screen">
      <Header />
      <main>
        <Hero />
        <OwnersSection />
        <DiagnosisSection />
        <MetricsSection />
        <BeforeAfterSection />
        <WorkflowSection />
        <ScopeSection />
        <TrustSection />
        <PricingSection />
        <FinalCta />
      </main>
    </div>
  );
}
