import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outline';
type ButtonSize = 'md' | 'lg';

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-lp-pink text-lp-white hover:bg-lp-pink-soft',
  secondary: 'bg-lp-sage text-lp-white hover:bg-lp-sage-soft',
  light: 'bg-lp-white text-lp-text hover:bg-lp-ivory',
  outline: 'border border-lp-white bg-transparent text-lp-white hover:bg-lp-white hover:text-lp-text',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'min-h-lp-icon-sm',
  lg: 'min-h-lp-icon',
};

const sharedClassName =
  'lp-focus inline-flex items-center justify-center gap-lp-sm rounded-lp-pill px-lp-btn-x py-lp-btn-y text-lp-button font-lp-bold transition duration-lp';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  fullWidth = false,
  iconLeft,
  iconRight,
  ...restProps
}: ButtonProps) {
  const classNames = cx(
    sharedClassName,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : 'w-auto',
    className,
  );

  if ('href' in restProps && restProps.href !== undefined) {
    return (
      <a {...restProps} className={classNames}>
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </a>
    );
  }

  return (
    <button type="button" {...restProps} className={classNames}>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
