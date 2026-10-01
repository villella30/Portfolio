import { useContext } from 'react';
import { LanguageContext, type LanguageValue } from './context';

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (ctx === null) throw new Error('useLanguage must be used within <LanguageProvider>');
  return ctx;
}
