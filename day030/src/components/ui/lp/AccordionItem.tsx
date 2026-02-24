import { LpIcon } from './LpIcon';
import { cx } from './cx';

type AccordionItemProps = {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function AccordionItem({ id, question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <article className="rounded-lp-card border border-lp-border bg-lp-surface px-lp-card py-lp-lg shadow-lp-card">
      <h3>
        <button
          id={id}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-content`}
          className="lp-focus flex w-full items-center justify-between gap-lp-md text-left"
        >
          <span className="text-lp-h3 font-lp-bold text-lp-text">{question}</span>
          <span
            className={cx(
              'flex h-lp-icon-sm w-lp-icon-sm items-center justify-center rounded-full border border-lp-border',
              isOpen ? 'text-lp-pink' : 'text-lp-muted',
            )}
          >
            <LpIcon name={isOpen ? 'minus' : 'plus'} className="h-lp-md w-lp-md" />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={id}
        className={cx('overflow-hidden transition-all duration-lp', isOpen ? 'max-h-screen pt-lp-lg' : 'max-h-0')}
      >
        <p className="border-t border-lp-border pt-lp-lg text-lp-lead text-lp-muted">{answer}</p>
      </div>
    </article>
  );
}
