import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import TechIcon from '../ui/TechIcon';

const SOCIALS = [
  { key: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
  { key: 'github', href: profile.github, label: 'GitHub' },
  { key: 'mail', href: `mailto:${profile.email}`, label: 'Email' },
] as const;

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-sand-200 bg-sand-100/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center">
        <div className="flex items-center gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.key}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              aria-label={social.label}
              className="glass flex size-11 items-center justify-center rounded-full text-mocha-700 transition duration-200 hover:-translate-y-0.5 hover:text-clay-600"
            >
              <TechIcon name={social.key} size={18} />
            </a>
          ))}
        </div>

        <div>
          <p className="font-display text-lg text-espresso-900">{profile.name}</p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 border-t border-sand-300/70 pt-5 sm:w-auto">
          <p className="text-xs text-mocha-700">
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-clay-600 transition hover:text-clay-700"
          >
            <ArrowUp size={14} />
            {t.a11y.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
