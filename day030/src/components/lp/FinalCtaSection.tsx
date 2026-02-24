import { lpContent } from '../../data/lpContent';
import { lpLinks } from '../../data/lpLinks';
import { Button } from '../ui/lp/Button';
import { LpIcon } from '../ui/lp/LpIcon';

export function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-r from-lp-pink to-lp-sage py-lp-section">
      <div className="lp-shell">
        <div className="mx-auto max-w-lp-content text-center">
          <h2 className="text-lp-h2 font-lp-black text-lp-white">{lpContent.finalCta.title}</h2>
          <p className="mt-lp-lg text-lp-lead text-lp-ivory">{lpContent.finalCta.description}</p>

          <div className="mt-lp-2xl flex flex-col gap-lp-md">
            <Button
              href={lpLinks.cta.finalPrimary}
              variant="light"
              fullWidth
              iconLeft={<LpIcon name="bag" className="h-lp-md w-lp-md" />}
              iconRight={<LpIcon name="arrow-right" className="h-lp-md w-lp-md" />}
            >
              {lpContent.finalCta.primaryLabel}
            </Button>

            <Button
              href={lpLinks.cta.finalSecondary}
              variant="outline"
              fullWidth
              iconLeft={<LpIcon name="gift" className="h-lp-md w-lp-md" />}
            >
              {lpContent.finalCta.secondaryLabel}
            </Button>
          </div>

          <ul className="mt-lp-xl flex flex-wrap items-center justify-center gap-x-lp-lg gap-y-lp-sm text-lp-lead text-lp-white">
            {lpContent.finalCta.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-lp-xs">
                <span className="h-lp-dot w-lp-dot rounded-full bg-lp-white" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
