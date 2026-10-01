import { experience } from '../../data/experience';
import { useLanguage } from '../../i18n/useLanguage';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import TechBadges from '../ui/TechBadges';
import TimelineItem from '../ui/TimelineItem';

export default function Experience() {
  const { lang, t } = useLanguage();

  /* Sin datos reales no mostramos la sección (evita publicar placeholders). */
  if (experience.length === 0) return null;

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        sub={t.experience.sub}
        align="left"
      />

      <ol className="mt-10 flex flex-col gap-6">
        {experience.map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.role[lang]}
            subtitle={item.org}
            period={item.period[lang]}
            body={item.summary[lang]}
            tech={<TechBadges ids={item.tech} />}
            isLast={index === experience.length - 1}
          />
        ))}
      </ol>
    </Section>
  );
}
