export const cx = (...classNames: Array<string | null | false | undefined>) =>
  classNames.filter(Boolean).join(' ');
