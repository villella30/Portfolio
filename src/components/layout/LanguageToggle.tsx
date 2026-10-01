import { useLanguage } from '../../i18n/useLanguage';
import type { Lang } from '../../types';

const LANGS: Lang[] = ['es', 'en'];

/** Selector ES/EN. Persistencia y `<html lang>` los maneja el provider. */
export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="glass-strong flex items-center rounded-full p-0.5"
    >
      {LANGS.map((code) => {
        const isActive = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            aria-label={code === 'es' ? 'Cambiar a español' : 'Switch to English'}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition duration-200 ${
              isActive ? 'bg-clay-600 text-white shadow-sm' : 'text-mocha-700 hover:text-clay-600'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
