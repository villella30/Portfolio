import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { projects } from '../../data/projects';
import { useLanguage } from '../../i18n/useLanguage';
import type { Project, ProjectTag } from '../../types';
import Badge from '../ui/Badge';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import TechBadges from '../ui/TechBadges';
import TechIcon from '../ui/TechIcon';

type Tab = 'all' | ProjectTag;

const TABS: Tab[] = ['all', 'academic', 'personal'];

function initials(title: string): string {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('');
}

function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLanguage();
  const isDone = project.status === 'completed';

  return (
    <article className="glass group flex h-full flex-col overflow-hidden">
      {project.image ? (
        <div className="relative aspect-video overflow-hidden bg-sand-200">
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/25 to-transparent" />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="relative flex aspect-video items-center justify-center overflow-hidden bg-[linear-gradient(135deg,var(--color-sand-200),var(--color-clay-400))]"
        >
          <span className="font-display text-5xl text-white/70 drop-shadow-sm">
            {initials(project.title[lang])}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug text-espresso-900">
            {project.title[lang]}
          </h3>
          <Badge tone={isDone ? 'success' : 'accent'} className="shrink-0">
            {isDone ? t.projects.status.completed : t.projects.status.progress}
          </Badge>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-mocha-700">{project.summary[lang]}</p>

        {project.highlights && (
          <details className="mt-3 group/details">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1 text-xs font-semibold text-clay-600 transition hover:text-clay-700 [&::-webkit-details-marker]:hidden">
              <ChevronDown
                size={14}
                className="transition group-open/details:rotate-180"
                aria-hidden="true"
              />
              {t.projects.highlights}
            </summary>
            <ul className="mt-2 flex flex-col gap-1.5">
              {project.highlights[lang].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs leading-relaxed text-mocha-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1 shrink-0 rounded-full bg-clay-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </details>
        )}

        <div className="mt-4">
          <TechBadges ids={project.tech} />
        </div>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-sand-300/70 pt-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clay-600 transition hover:text-clay-700"
            >
              <TechIcon name="github" size={15} />
              {t.projects.code}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clay-600 transition hover:text-clay-700"
            >
              {t.projects.live}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>('all');

  const counts: Record<Tab, number> = {
    all: projects.length,
    academic: projects.filter((p) => p.tag === 'academic').length,
    personal: projects.filter((p) => p.tag === 'personal').length,
  };

  const visible = tab === 'all' ? projects : projects.filter((p) => p.tag === tab);

  return (
    <Section id="projects">
      <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} sub={t.projects.sub} />

      <div className="mt-8 flex flex-col items-center gap-4">
        <div
          role="group"
          aria-label={t.projects.title}
          className="glass-strong flex flex-wrap justify-center gap-1 rounded-full p-1"
        >
          {TABS.map((code) => {
            const isActive = code === tab;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setTab(code)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition duration-200 ${
                  isActive
                    ? 'bg-clay-600 text-white shadow-sm'
                    : 'text-mocha-700 hover:text-clay-600'
                }`}
              >
                {t.projects.tabs[code]}
                <span
                  className={`ml-1.5 text-xs ${isActive ? 'text-white/70' : 'text-mocha-700/60'}`}
                >
                  {counts[code]}
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-xs uppercase tracking-wide text-mocha-700/80">
          {t.projects.count(visible.length)}
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
