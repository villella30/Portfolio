import { createContext } from 'react';
import type { Lang } from '../types';
import type { Strings } from './strings';

export interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Copy localizado del idioma activo. */
  t: Strings;
}

export const LanguageContext = createContext<LanguageValue | null>(null);
