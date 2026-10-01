import { useEffect, useRef, type RefObject } from 'react';

/**
 * Marca el elemento con `data-revealed="true"` cuando entra en pantalla.
 * El CSS decide cómo animar (y lo desactiva con prefers-reduced-motion).
 */
export function useReveal<T extends HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.revealed = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
