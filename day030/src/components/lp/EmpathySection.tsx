import { lpContent } from '../../data/lpContent';
import { Card } from '../ui/lp/Card';
import { LpIcon } from '../ui/lp/LpIcon';
import { SectionHeading } from '../ui/lp/SectionHeading';

export function EmpathySection() {
  return (
    <section className="bg-lp-bg py-lp-section">
      <div className="lp-shell">
        <SectionHeading
          title={lpContent.empathy.title}
          description={lpContent.empathy.description}
          tone="ivory"
        />

        <div className="mt-lp-2xl grid gap-lp-lg md:grid-cols-3">
          {lpContent.empathy.cards.map((card) => (
            <Card key={card.title} variant="surface" className="flex h-full flex-col gap-lp-lg">
              <span className="flex h-lp-icon w-lp-icon items-center justify-center rounded-full border border-lp-border bg-lp-white text-lp-pink">
                <LpIcon name={card.icon} />
              </span>
              <h3 className="text-lp-h3 font-lp-bold text-lp-text">{card.title}</h3>
              <p className="text-lp-lead text-lp-muted">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
