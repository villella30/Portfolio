import { useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang } from '../types';
import { LanguageContext, type LanguageValue } from './context';
import { strings } from './strings';

const STORAGE_KEY = 'lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') return stored;
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === 'es' ? 'en' : 'es')),
      t: strings[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
