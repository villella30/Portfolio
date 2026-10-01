import { skillCategories, skills } from '../../data/skills';
import { useLanguage } from '../../i18n/useLanguage';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import TechIcon from '../ui/TechIcon';

export default function Skills() {
  const { lang, t } = useLanguage();

  return (
    <Section id="skills">
      <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} sub={t.skills.sub} />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => {
          const items = skills.filter((skill) => skill.category === category.id);
          if (items.length === 0) return null;

          return (
            <div key={category.id} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg text-espresso-900">{category.label[lang]}</h3>

              <ul className="mt-5 flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <li key={skill.id}>
                    <span
                      title={`${skill.name} · ${t.skills.level} ${skill.level}/5`}
                      className="flex cursor-default items-center gap-2 rounded-xl border border-sand-300/70 bg-sand-50/70 px-3 py-2 text-sm font-medium text-espresso-900 transition duration-200 hover:-translate-y-0.5 hover:border-clay-400 hover:bg-white/70"
                    >
                      <TechIcon name={skill.icon} size={18} className="text-clay-600" />
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
