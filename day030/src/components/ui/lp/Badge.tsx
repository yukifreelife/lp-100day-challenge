import type { HTMLAttributes } from 'react';
import { cx } from './cx';

type BadgeTone = 'pink' | 'sage' | 'ivory';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  pink: 'bg-lp-pink-soft text-lp-text',
  sage: 'bg-lp-sage-soft text-lp-text',
  ivory: 'bg-lp-ivory text-lp-text',
};

export function Badge({ tone = 'pink', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-lp-2xs rounded-lp-pill px-lp-lg py-lp-xs text-lp-small font-lp-bold',
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
