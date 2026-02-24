import { lpContent } from '../../data/lpContent';
import { lpLinks } from '../../data/lpLinks';
import { Button } from '../ui/lp/Button';
import { LpIcon } from '../ui/lp/LpIcon';
import { SectionHeading } from '../ui/lp/SectionHeading';
import { cx } from '../ui/lp/cx';

const toneClasses = {
  pink: 'border-lp-pink bg-lp-ivory text-lp-pink',
  sage: 'border-lp-sage bg-lp-surface text-lp-sage',
};

export function ProcessSection() {
  return (
    <section className="bg-lp-bg py-lp-section">
      <div className="lp-shell">
        <SectionHeading
          label={lpContent.process.label}
          title={lpContent.process.title}
          description={lpContent.process.description}
          tone="sage"
        />

        <div className="mt-lp-2xl grid gap-lp-xl lg:grid-cols-5 lg:gap-lp-lg">
          {lpContent.process.steps.map((step, index) => (
            <article key={step.title} className="text-center">
              <div
                className={cx(
                  'relative mx-auto flex h-lp-step-icon w-lp-step-icon items-center justify-center rounded-lp-soft border-2',
                  toneClasses[step.tone],
                )}
              >
                <span className="absolute -top-lp-sm left-1/2 flex h-lp-icon-sm w-lp-icon-sm -translate-x-1/2 items-center justify-center rounded-full bg-lp-panel text-lp-small font-lp-bold text-lp-muted">
                  {index + 1}
                </span>
                <LpIcon name={step.icon} />
              </div>
              <h3 className="mt-lp-lg text-lp-h3 font-lp-bold text-lp-text">{step.title}</h3>
              <p className="mt-lp-sm text-lp-lead text-lp-muted">{step.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-lp-2xl text-center text-lp-lead text-lp-muted">{lpContent.process.note}</p>

        <div className="mt-lp-xl flex justify-center">
          <Button href={lpLinks.cta.process} variant="primary">
            {lpContent.process.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
