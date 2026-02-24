import { lpContent } from '../../data/lpContent';
import { Card } from '../ui/lp/Card';
import { LpIcon } from '../ui/lp/LpIcon';
import { SectionHeading } from '../ui/lp/SectionHeading';

const toneClasses = [
  'bg-lp-pink-soft text-lp-pink',
  'bg-lp-sage-soft text-lp-sage',
  'bg-lp-ivory text-lp-pink',
];

export function FeaturesSection() {
  return (
    <section className="bg-lp-bg py-lp-section">
      <div className="lp-shell">
        <SectionHeading
          label={lpContent.features.label}
          title={lpContent.features.title}
          description={lpContent.features.description}
        />

        <div className="mt-lp-2xl grid gap-lp-lg md:grid-cols-2 xl:grid-cols-3">
          {lpContent.features.cards.map((card, index) => (
            <Card key={card.title} variant="surface" className="flex h-full flex-col gap-lp-lg">
              <span
                className={`flex h-lp-icon w-lp-icon items-center justify-center rounded-lp-soft ${toneClasses[index % toneClasses.length]}`}
              >
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
