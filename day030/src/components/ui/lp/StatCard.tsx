import type { LpAccentTone } from '../../../types/lp';
import { Card } from './Card';
import { cx } from './cx';

type StatCardProps = {
  value: string;
  label: string;
  tone?: LpAccentTone;
};

const toneClasses: Record<LpAccentTone, string> = {
  pink: 'text-lp-pink',
  sage: 'text-lp-sage',
  text: 'text-lp-text',
};

export function StatCard({ value, label, tone = 'pink' }: StatCardProps) {
  return (
    <Card variant="surface" className="flex h-full flex-col items-center justify-center gap-lp-xs p-lp-lg text-center">
      <p className={cx('text-lp-stat font-lp-black', toneClasses[tone])}>{value}</p>
      <p className="text-lp-lead font-lp-medium text-lp-muted">{label}</p>
    </Card>
  );
}
