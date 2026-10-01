export type Lang = 'es' | 'en';

/** Texto localizado: siempre par es/en. */
export type L10n = Record<Lang, string>;
export type L10nList = Record<Lang, string[]>;

export type SkillCategory = 'frontend' | 'mobile' | 'backend' | 'devops' | 'lang_ai';

export interface Skill {
  /** Clave estable; los proyectos la referencian vía `Project['tech']`. */
  id: string;
  name: string;
  /** Clave de icono resuelta por <TechIcon /> (simple-icons o fallback lucide). */
  icon: string;
  category: SkillCategory;
  /** Nivel declarativo 1–5, usado solo como tooltip decorativo. */
  level: 1 | 2 | 3 | 4 | 5;
}

export type ProjectStatus = 'completed' | 'in-progress';
export type ProjectTag = 'academic' | 'personal';

export interface Project {
  id: string;
  title: L10n;
  summary: L10n;
  /** Bullets del CV / logros medibles. */
  highlights?: L10nList;
  status: ProjectStatus;
  tag: ProjectTag;
  /** Opcional: los proyectos académicos van sin screenshot. */
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
  /** Ids de `skills`. Se resuelven contra data/skills.ts en runtime. */
  tech: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: L10n;
  org: string;
  period: L10n;
  summary: L10n;
  tech: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: L10n;
  period: L10n;
  note?: L10n;
  url?: string;
}

export type NavKey = 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact';

export interface NavItem {
  href: `#${NavKey}`;
  key: NavKey;
}
