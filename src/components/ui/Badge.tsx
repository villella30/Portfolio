import type { ReactNode } from 'react';

type Tone = 'neutral' | 'success' | 'accent';

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const TONES: Record<Tone, string> = {
  neutral: 'bg-sand-200/80 text-mocha-700',
  success: 'bg-sage-500 text-white',
  accent: 'bg-clay-600 text-white',
};

export default function Badge({ children, tone = 'neutral', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${TONES[tone]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
