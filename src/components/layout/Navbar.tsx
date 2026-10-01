import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/nav';
import { useLanguage } from '../../i18n/useLanguage';
import { useSectionSpy } from '../../hooks/useSectionSpy';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const active = useSectionSpy(navItems.map((item) => item.href.slice(1)));

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Principal"
        className="glass-strong mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-4 sm:h-16 sm:px-5"
      >
        <a
          href="#hero"
          onClick={close}
          className="font-display text-base font-semibold tracking-tight text-espresso-900 transition-colors hover:text-clay-600 sm:text-lg"
        >
          Valentino Villella
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition duration-200 ${
                    isActive
                      ? 'text-clay-600'
                      : 'text-mocha-700 hover:bg-sand-200/70 hover:text-espresso-900'
                  }`}
                >
                  {t.nav[item.key]}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            className="rounded-xl p-2 text-espresso-900 transition hover:bg-sand-200/70 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="glass-strong mx-auto mt-2 max-w-6xl rounded-2xl p-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active === item.href.slice(1)
                      ? 'bg-sand-200/70 text-clay-600'
                      : 'text-mocha-700 hover:bg-sand-200/70 hover:text-espresso-900'
                  }`}
                >
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
