import type { LpIconName } from '../../types/lp';
import { lpContent } from '../../data/lpContent';
import { lpLinks } from '../../data/lpLinks';
import { LpIcon } from '../ui/lp/LpIcon';

const socialLinks: { key: keyof typeof lpLinks.socials; icon: LpIconName; label: string }[] = [
  { key: 'instagram', icon: 'instagram', label: 'Instagram' },
  { key: 'x', icon: 'x', label: 'X' },
  { key: 'mail', icon: 'mail', label: 'Mail' },
];

export function Footer() {
  return (
    <footer className="bg-lp-brown py-lp-section-tight text-lp-white">
      <div className="lp-shell">
        <div className="grid gap-lp-2xl lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <a href={lpLinks.home} className="lp-focus inline-flex items-center gap-lp-sm rounded-lp-pill">
              <span className="flex h-lp-logo w-lp-logo items-center justify-center rounded-full bg-lp-sage-soft text-lp-small font-lp-bold text-lp-text">
                {lpContent.brand.short}
              </span>
              <span className="text-lp-h3 font-lp-bold">{lpContent.brand.name}</span>
            </a>

            <p className="mt-lp-lg whitespace-pre-line text-lp-lead text-lp-ivory">{lpContent.brand.footerDescription}</p>

            <ul className="mt-lp-lg flex items-center gap-lp-sm">
              {socialLinks.map((social) => (
                <li key={social.key}>
                  <a
                    href={lpLinks.socials[social.key]}
                    aria-label={social.label}
                    className="lp-focus inline-flex h-lp-icon-sm w-lp-icon-sm items-center justify-center rounded-full border border-lp-white text-lp-white"
                  >
                    <LpIcon name={social.icon} className="h-lp-md w-lp-md" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-lp-xl sm:grid-cols-2 lg:grid-cols-3">
            {lpContent.footer.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lp-h3 font-lp-bold">{section.title}</h2>
                <ul className="mt-lp-md flex flex-col gap-lp-sm">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={lpLinks.footer[item.id]}
                        className="lp-focus text-lp-lead text-lp-ivory hover:text-lp-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <p className="mt-lp-2xl border-t border-lp-muted pt-lp-lg text-center text-lp-small text-lp-ivory">
          {lpContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
