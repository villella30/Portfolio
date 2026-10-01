import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Contenedor de sección: id para el nav, espacio vertical y reveal al scroll. */
export default function Section({ id, children, className = '' }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      data-reveal
      className={`scroll-mt-24 py-16 md:py-24 ${className}`.trim()}
    >
      {children}
    </section>
  );
}
