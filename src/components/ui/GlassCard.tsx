import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/** Superficie de vidrio base: cualquier componente puede componerse sobre ella. */
export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return <div className={`glass rounded-2xl ${className}`}>{children}</div>;
}
