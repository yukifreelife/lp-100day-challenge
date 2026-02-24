import { lpContent } from '../../data/lpContent';
import { lpLinks } from '../../data/lpLinks';
import { LpIcon } from '../ui/lp/LpIcon';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-lp-border bg-lp-surface">
      <div className="lp-shell flex items-center justify-between py-lp-header-y">
        <a href={lpLinks.home} className="lp-focus inline-flex items-center gap-lp-sm rounded-lp-pill">
          <span className="flex h-lp-logo w-lp-logo items-center justify-center rounded-full bg-lp-sage-soft text-lp-small font-lp-bold text-lp-white">
            {lpContent.brand.short}
          </span>
          <span className="text-lp-nav font-lp-bold text-lp-text">{lpContent.brand.name}</span>
        </a>

        <nav aria-label="ヘッダーメニュー" className="flex items-center gap-lp-sm">
          <a
            href={lpLinks.cart}
            aria-label="カートを見る"
            className="lp-focus inline-flex h-lp-icon-sm w-lp-icon-sm items-center justify-center rounded-lp-pill text-lp-text"
          >
            <LpIcon name="bag" className="h-lp-md w-lp-md" />
          </a>
          <a
            href={lpLinks.menu}
            aria-label="メニューを開く"
            className="lp-focus inline-flex h-lp-icon-sm w-lp-icon-sm items-center justify-center rounded-lp-pill text-lp-text"
          >
            <LpIcon name="menu" className="h-lp-md w-lp-md" />
          </a>
        </nav>
      </div>
    </header>
  );
}
