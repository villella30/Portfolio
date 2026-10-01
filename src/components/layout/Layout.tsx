import type { ReactNode } from 'react';
import GradientBackdrop from '../effects/GradientBackdrop';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../../i18n/useLanguage';

export default function Layout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-svh">
      <GradientBackdrop />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-clay-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        {t.a11y.skip}
      </a>

      <Navbar />

      <main id="main" className="mx-auto max-w-6xl px-5">
        {children}
      </main>

      <Footer />
    </div>
  );
}
