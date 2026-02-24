import { lpContent } from '../../data/lpContent';
import { lpLinks } from '../../data/lpLinks';
import { Badge } from '../ui/lp/Badge';
import { Button } from '../ui/lp/Button';
import { LpIcon } from '../ui/lp/LpIcon';

export function SolutionSection() {
  return (
    <section className="bg-lp-panel py-lp-section">
      <div className="lp-shell">
        <div className="grid gap-lp-2xl lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
          <div>
            <Badge tone="pink">{lpContent.solution.label}</Badge>
            <h2 className="mt-lp-lg whitespace-pre-line text-lp-h2 font-lp-black text-lp-text">
              {lpContent.solution.title}
            </h2>
            <p className="mt-lp-lg text-lp-lead text-lp-muted">{lpContent.solution.description}</p>

            <ul className="mt-lp-xl flex flex-col gap-lp-md">
              {lpContent.solution.points.map((point) => (
                <li key={point} className="flex items-start gap-lp-sm text-lp-h3 text-lp-text">
                  <span className="mt-lp-2xs flex h-lp-icon-sm w-lp-icon-sm items-center justify-center rounded-full bg-lp-sage text-lp-white">
                    <LpIcon name="check" className="h-lp-md w-lp-md" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-lp-xl">
              <Button href={lpLinks.cta.solution} variant="secondary" iconRight={<LpIcon name="arrow-right" />}>
                {lpContent.solution.ctaLabel}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-lp-md">
            {lpContent.solution.images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={960}
                height={1440}
                loading="lazy"
                decoding="async"
                className="h-full rounded-lp-card border border-lp-border object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
