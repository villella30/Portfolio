import type { Skill, SkillCategory } from '../types';

export const skillCategories: { id: SkillCategory; label: Record<'es' | 'en', string> }[] = [
  { id: 'frontend', label: { es: 'Frontend', en: 'Frontend' } },
  { id: 'mobile', label: { es: 'Mobile', en: 'Mobile' } },
  { id: 'backend', label: { es: 'Backend, Datos & APIs', en: 'Backend, Data & APIs' } },
  { id: 'devops', label: { es: 'DevOps & Herramientas', en: 'DevOps & Tools' } },
  { id: 'lang_ai', label: { es: 'Lenguajes & IA', en: 'Languages & AI' } },
];

/**
 * Categorías del CV (Oct 2026). Para sumar una skill alcanza con agregar
 * un objeto: el ícono se resuelve por clave en <TechIcon />.
 */
export const skills: Skill[] = [
  // ── Frontend ────────────────────────────────────────────────
  { id: 'html', name: 'HTML5', icon: 'html5', category: 'frontend', level: 5 },
  { id: 'css', name: 'CSS3', icon: 'css3', category: 'frontend', level: 5 },
  { id: 'js', name: 'JavaScript', icon: 'javascript', category: 'frontend', level: 4 },
  { id: 'ts', name: 'TypeScript', icon: 'typescript', category: 'frontend', level: 4 },
  { id: 'react', name: 'React', icon: 'react', category: 'frontend', level: 4 },

  // ── Mobile ──────────────────────────────────────────────────
  { id: 'reactnative', name: 'React Native', icon: 'react', category: 'mobile', level: 3 },
  { id: 'kotlin', name: 'Kotlin', icon: 'kotlin', category: 'mobile', level: 3 },
  { id: 'room', name: 'Room (SQLite)', icon: 'android', category: 'mobile', level: 3 },

  // ── Backend, Datos & APIs ───────────────────────────────────
  { id: 'node', name: 'Node.js', icon: 'nodedotjs', category: 'backend', level: 3 },
  { id: 'java', name: 'Java (POO)', icon: 'java', category: 'backend', level: 4 },
  { id: 'mysql', name: 'MySQL', icon: 'mysql', category: 'backend', level: 3 },
  { id: 'rest', name: 'APIs REST', icon: 'rest', category: 'backend', level: 4 },
  { id: 'docker', name: 'Docker', icon: 'docker', category: 'backend', level: 3 },

  // ── DevOps & Herramientas ───────────────────────────────────
  { id: 'git', name: 'Git', icon: 'git', category: 'devops', level: 4 },
  { id: 'github', name: 'GitHub', icon: 'github', category: 'devops', level: 4 },
  { id: 'vscode', name: 'VS Code', icon: 'vscode', category: 'devops', level: 5 },

  // ── Lenguajes & IA ──────────────────────────────────────────
  { id: 'cpp', name: 'C++ (Concurrencia)', icon: 'cplusplus', category: 'lang_ai', level: 3 },
  { id: 'opencode', name: 'OpenCode', icon: 'opencode', category: 'lang_ai', level: 4 },
  { id: 'prompting', name: 'Prompt Engineering', icon: 'prompting', category: 'lang_ai', level: 4 },
  { id: 'agents', name: 'Agentes & Skills', icon: 'agents', category: 'lang_ai', level: 4 },
  { id: 'llm', name: 'Integración de LLMs', icon: 'llm', category: 'lang_ai', level: 3 },
];

/** Lookup O(1) para resolver `Project['tech']` → skill. */
export const skillById = new Map(skills.map((s) => [s.id, s]));
