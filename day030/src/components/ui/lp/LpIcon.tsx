import type { SVGProps } from 'react';
import type { LpIconName } from '../../../types/lp';
import { cx } from './cx';

type LpIconProps = SVGProps<SVGSVGElement> & {
  name: LpIconName;
};

export function LpIcon({ name, className, ...props }: LpIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx('h-lp-icon-sm w-lp-icon-sm stroke-current', className)}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {name === 'sparkles' && (
        <>
          <path d="M12 3L13.5 7.5L18 9L13.5 10.5L12 15L10.5 10.5L6 9L10.5 7.5L12 3Z" />
          <path d="M19 4V7" />
          <path d="M20.5 5.5H17.5" />
        </>
      )}
      {name === 'gift' && (
        <>
          <path d="M3.5 9.5H20.5V19.5H3.5V9.5Z" />
          <path d="M12 9.5V19.5" />
          <path d="M3.5 13.5H20.5" />
          <path d="M8.5 9.5C7.1 9.5 6 8.4 6 7C6 5.6 7.1 4.5 8.5 4.5C10.2 4.5 12 6.2 12 9.5" />
          <path d="M15.5 9.5C16.9 9.5 18 8.4 18 7C18 5.6 16.9 4.5 15.5 4.5C13.8 4.5 12 6.2 12 9.5" />
        </>
      )}
      {name === 'heart' && (
        <path d="M12 20C12 20 4.5 15.6 4.5 10.2C4.5 7.9 6.4 6 8.7 6C10.2 6 11.5 6.7 12 7.8C12.5 6.7 13.8 6 15.3 6C17.6 6 19.5 7.9 19.5 10.2C19.5 15.6 12 20 12 20Z" />
      )}
      {name === 'bag' && (
        <>
          <path d="M6 9H18L17 20H7L6 9Z" />
          <path d="M9 9V7.8C9 6.3 10.3 5 11.8 5H12.2C13.7 5 15 6.3 15 7.8V9" />
        </>
      )}
      {name === 'menu' && (
        <>
          <path d="M5 7H19" />
          <path d="M5 12H19" />
          <path d="M5 17H19" />
        </>
      )}
      {name === 'sad' && (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M9.3 15.5C10 14.6 10.9 14.1 12 14.1C13.1 14.1 14 14.6 14.7 15.5" />
          <path d="M9.5 10.2H9.6" />
          <path d="M14.4 10.2H14.5" />
        </>
      )}
      {name === 'search' && (
        <>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16L20 20" />
        </>
      )}
      {name === 'check' && <path d="M5 12.5L9.2 16.5L19 6.8" />}
      {name === 'type' && (
        <>
          <path d="M5 6H19" />
          <path d="M12 6V18" />
        </>
      )}
      {name === 'palette' && (
        <>
          <path d="M12 5C7.6 5 4 8.4 4 12.8C4 16 6.4 19 9.7 19C11.4 19 12 17.8 12 17C12 16.1 11.3 15.5 11.3 14.8C11.3 13.9 12 13.3 12.8 13.3H14C17.2 13.3 20 10.8 20 7.8C20 6.1 18.6 5 16.9 5H12Z" />
          <circle cx="8" cy="11" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="10.5" cy="8.8" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="14" cy="8.4" r="0.8" fill="currentColor" stroke="none" />
        </>
      )}
      {name === 'feather' && (
        <>
          <path d="M19 5C12 5 6 11 6 18" />
          <path d="M19 5L12 12" />
          <path d="M10 14L14 18" />
          <path d="M6 18H10" />
        </>
      )}
      {name === 'hand' && (
        <>
          <path d="M8 12V6.5C8 5.7 8.7 5 9.5 5C10.3 5 11 5.7 11 6.5V11" />
          <path d="M11 11V5.8C11 5 11.7 4.3 12.5 4.3C13.3 4.3 14 5 14 5.8V11" />
          <path d="M14 11V6.5C14 5.7 14.7 5 15.5 5C16.3 5 17 5.7 17 6.5V13" />
          <path d="M8 12L6.6 10.8C6 10.3 5.2 10.3 4.7 10.9C4.2 11.5 4.2 12.4 4.8 12.9L8.2 16.2C9.2 17.2 10.5 17.7 11.8 17.7H13.5C16 17.7 18 15.7 18 13.2V12" />
        </>
      )}
      {name === 'shield' && (
        <>
          <path d="M12 4L18 6V11.3C18 15.1 15.5 18.6 12 20C8.5 18.6 6 15.1 6 11.3V6L12 4Z" />
          <path d="M9.2 12.2L11 14L14.8 10.2" />
        </>
      )}
      {name === 'quote' && (
        <>
          <path d="M7 10.5H10V13.5H7V10.5Z" />
          <path d="M14 10.5H17V13.5H14V10.5Z" />
          <path d="M10 13.5C10 15.5 8.8 17 7 17" />
          <path d="M17 13.5C17 15.5 15.8 17 14 17" />
        </>
      )}
      {name === 'plus' && (
        <>
          <path d="M12 6V18" />
          <path d="M6 12H18" />
        </>
      )}
      {name === 'minus' && <path d="M6 12H18" />}
      {name === 'pen' && (
        <>
          <path d="M6.5 16.5L7.2 19.2L9.9 19.9L18.9 10.9C19.7 10.1 19.7 8.9 18.9 8.1L17.9 7.1C17.1 6.3 15.9 6.3 15.1 7.1L6.5 15.7V16.5Z" />
          <path d="M14 8.2L17.8 12" />
        </>
      )}
      {name === 'box' && (
        <>
          <path d="M12 3.8L19 7.5V16.5L12 20.2L5 16.5V7.5L12 3.8Z" />
          <path d="M12 12.2L19 8.5" />
          <path d="M12 12.2L5 8.5" />
          <path d="M12 12.2V20.2" />
        </>
      )}
      {name === 'pin' && (
        <>
          <path d="M12 20C12 20 18 14.2 18 10C18 6.7 15.3 4 12 4C8.7 4 6 6.7 6 10C6 14.2 12 20 12 20Z" />
          <circle cx="12" cy="10" r="2.2" />
        </>
      )}
      {name === 'truck' && (
        <>
          <path d="M4 7H13V15H4V7Z" />
          <path d="M13 10H17L20 13V15H13V10Z" />
          <circle cx="8" cy="17" r="1.5" />
          <circle cx="17" cy="17" r="1.5" />
        </>
      )}
      {name === 'instagram' && (
        <>
          <rect x="5" y="5" width="14" height="14" rx="4" />
          <circle cx="12" cy="12" r="3.2" />
          <circle cx="16.5" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
        </>
      )}
      {name === 'x' && (
        <>
          <path d="M6 6L18 18" />
          <path d="M18 6L6 18" />
        </>
      )}
      {name === 'mail' && (
        <>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M4.8 7L12 12.6L19.2 7" />
        </>
      )}
      {name === 'arrow-right' && <path d="M5 12H19M19 12L14 7M19 12L14 17" />}
    </svg>
  );
}
