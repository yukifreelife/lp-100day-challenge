import type { HTMLAttributes } from 'react';
import { cx } from './cx';

type CardVariant = 'surface' | 'muted' | 'lifted';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  surface: 'bg-lp-surface',
  muted: 'bg-lp-surface-alt',
  lifted: 'bg-lp-surface shadow-lp-card',
};

export function Card({ variant = 'surface', className, children, ...props }: CardProps) {
  return (
    <div
      className={cx(
        'rounded-lp-card border border-lp-border p-lp-card',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
