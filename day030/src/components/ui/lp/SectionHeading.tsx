import { Badge } from './Badge';
import { cx } from './cx';

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'pink' | 'sage' | 'ivory';
};

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  tone = 'pink',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={cx('mx-auto flex max-w-lp-content flex-col gap-lp-md', alignClass)}>
      {label ? <Badge tone={tone}>{label}</Badge> : null}
      <h2 className="whitespace-pre-line text-lp-h2 font-lp-black text-lp-text">{title}</h2>
      {description ? <p className="text-lp-lead text-lp-muted">{description}</p> : null}
    </div>
  );
}
