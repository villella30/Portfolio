import { education } from '../../data/education';
import { useLanguage } from '../../i18n/useLanguage';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import TimelineItem from '../ui/TimelineItem';

export default function Education() {
  const { lang, t } = useLanguage();

  if (education.length === 0) return null;

  return (
    <Section id="education">
      <SectionHeading
        eyebrow={t.education.eyebrow}
        title={t.education.title}
        sub={t.education.sub}
        align="left"
      />

      <ol className="mt-10 flex flex-col gap-6">
        {education.map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.degree[lang]}
            subtitle={item.institution}
            period={item.period[lang]}
            body={item.note?.[lang]}
            isLast={index === education.length - 1}
          />
        ))}
      </ol>
    </Section>
  );
}
