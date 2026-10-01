import { ArrowUpRight, Download } from 'lucide-react';
import photo from '../../assets/photo/MyPhoto.webp';
import { profile, tagline } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import Button from '../ui/Button';
import TechIcon from '../ui/TechIcon';

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="hero"
      className="flex min-h-svh scroll-mt-24 flex-col justify-center gap-12 pb-16 pt-32 md:flex-row md:items-center md:gap-16 md:pt-28"
    >
      <div className="flex-1">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-mocha-700">
          <span className="size-2 rounded-full bg-sage-500" aria-hidden="true" />
          {profile.available[lang]}
        </span>

        <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-espresso-900 sm:text-5xl lg:text-6xl">
          {t.hero.greeting} <span className="text-clay-600">{profile.name}</span>
        </h1>

        <p className="mt-4 font-display text-xl text-espresso-900 sm:text-2xl">
          {profile.role[lang]}
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-mocha-700 sm:text-lg">
          {tagline[lang]}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#contact">
            {t.hero.ctaContact}
            <ArrowUpRight size={16} />
          </Button>
          <Button href={profile.cv} download variant="ghost">
            <Download size={16} />
            {t.hero.ctaCv}
          </Button>
          <Button href={profile.linkedin} external variant="ghost">
            <TechIcon name="linkedin" size={16} />
            LinkedIn
          </Button>
          <Button href={profile.github} external variant="ghost">
            <TechIcon name="github" size={16} />
            GitHub
          </Button>
        </div>
      </div>

      <div className="relative mx-auto shrink-0 md:mx-0">
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-full bg-[conic-gradient(from_140deg,rgba(192,133,82,0.6),rgba(124,132,113,0.5),rgba(212,165,116,0.62),rgba(192,133,82,0.6))] blur-xl"
        />
        <img
          src={photo}
          alt={profile.name}
          width={340}
          height={340}
          decoding="async"
          className="relative size-56 rounded-full object-cover ring-1 ring-white/70 shadow-2xl shadow-espresso-900/20 sm:size-72 lg:size-80"
        />
      </div>
    </section>
  );
}
