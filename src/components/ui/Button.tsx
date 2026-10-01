import type { ReactNode } from 'react';

type Variant = 'primary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  /** Si se pasa, se renderiza un <a>; si no, un <button>. Nunca anidados. */
  href?: string;
  external?: boolean;
  download?: boolean;
  variant?: Variant;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-clay-600 text-white shadow-lg shadow-clay-600/25 hover:bg-clay-700 hover:shadow-clay-600/40',
  ghost: 'glass-strong text-espresso-900 hover:text-clay-600 hover:border-clay-400/70',
};

export default function Button({
  children,
  href,
  external = false,
  download = false,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`.trim();

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        download={download || undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
