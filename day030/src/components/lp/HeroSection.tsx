import type { LpAccentTone } from '../../types/lp';
import { lpContent } from '../../data/lpContent';
import { lpLinks } from '../../data/lpLinks';
import { Badge } from '../ui/lp/Badge';
import { Button } from '../ui/lp/Button';
import { LpIcon } from '../ui/lp/LpIcon';
import { cx } from '../ui/lp/cx';

const toneClasses: Record<LpAccentTone, string> = {
  pink: 'text-lp-pink',
  sage: 'text-lp-sage',
  text: 'text-lp-text',
};

export function HeroSection() {
  return (
    <section className="border-b border-lp-border bg-lp-surface">
      <div className="lp-shell pb-lp-section pt-lp-section-tight">
        <div className="grid items-end gap-lp-2xl lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <Badge tone="ivory">
              <LpIcon name="sparkles" className="h-lp-md w-lp-md text-lp-pink" />
              {lpContent.hero.badge}
            </Badge>

            <h1 className="mt-lp-xl whitespace-pre-line text-lp-display font-lp-black text-lp-text">
              {lpContent.hero.title}
            </h1>

            <p className="mt-lp-lg text-lp-lead text-lp-muted">{lpContent.hero.description}</p>

            <div className="mt-lp-xl flex flex-col gap-lp-md sm:flex-row">
              <Button
                href={lpLinks.cta.heroPrimary}
                variant="primary"
                fullWidth
                className="sm:flex-1"
                iconLeft={<LpIcon name="gift" className="h-lp-md w-lp-md" />}
              >
                {lpContent.hero.primaryCtaLabel}
              </Button>
              <Button
                href={lpLinks.cta.heroSecondary}
                variant="light"
                fullWidth
                className="border border-lp-border sm:flex-1"
                iconLeft={<LpIcon name="heart" className="h-lp-md w-lp-md" />}
              >
                {lpContent.hero.secondaryCtaLabel}
              </Button>
            </div>

            <ul className="mt-lp-xl grid grid-cols-3 divide-x divide-lp-border rounded-lp-card border border-lp-border bg-lp-surface-alt">
              {lpContent.hero.stats.map((stat) => (
                <li key={stat.label} className="px-lp-sm py-lp-lg text-center">
                  <p className={cx('text-lp-h3 font-lp-black', toneClasses[stat.tone])}>{stat.value}</p>
                  <p className="text-lp-small text-lp-muted">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={lpContent.hero.image}
              alt={lpContent.hero.imageAlt}
              width={1440}
              height={960}
              decoding="async"
              fetchPriority="high"
              className="w-full rounded-lp-panel border border-lp-border object-cover"
            />
            <div className="absolute bottom-lp-lg right-lp-md rounded-lp-card border border-lp-border bg-lp-white px-lp-md py-lp-sm shadow-lp-lift">
              <div className="flex items-center gap-lp-sm">
                <span className="flex h-lp-icon-sm w-lp-icon-sm items-center justify-center rounded-full bg-lp-panel text-lp-muted">
                  <LpIcon name={lpContent.hero.floatingBadge.icon} className="h-lp-md w-lp-md" />
                </span>
                <div>
                  <p className="text-lp-lead font-lp-bold text-lp-text">{lpContent.hero.floatingBadge.title}</p>
                  <p className="text-lp-small text-lp-muted">{lpContent.hero.floatingBadge.caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
