import { GraduationCap, MapPin } from 'lucide-react';
import { aboutHighlights, summary } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import GlassCard from '../ui/GlassCard';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

const FACTS = [
  { icon: MapPin, key: 'location' as const },
  { icon: GraduationCap, key: 'education' as const },
];

export default function About() {
  const { lang, t } = useLanguage();

  const factValue = (key: (typeof FACTS)[number]['key']) => {
    if (key === 'location') return { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' };
    return {
      es: 'Lic. en Sistemas · UNLa · 3er año',
      en: 'BSc in Information Systems · UNLa · 3rd year',
    };
  };

  return (
    <Section id="about">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} sub={t.about.sub} />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="font-display text-lg leading-relaxed text-espresso-900 sm:text-xl">
            {summary[lang]}
          </p>

          <dl className="flex flex-wrap gap-3">
            {FACTS.map(({ icon: Icon, key }) => (
              <div key={key} className="glass flex items-center gap-2 rounded-full px-4 py-2">
                <Icon size={16} className="text-clay-600" aria-hidden="true" />
                <dt className="sr-only">{key}</dt>
                <dd className="text-sm font-medium text-mocha-700">{factValue(key)[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <GlassCard className="p-6 sm:p-7">
          <ul className="flex flex-col gap-4">
            {aboutHighlights[lang].map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-relaxed text-mocha-700"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-clay-500"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </Section>
  );
}
