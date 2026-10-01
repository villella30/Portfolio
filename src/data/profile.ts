import type { L10n } from '../types';

/**
 * Datos personales. Única fuente de verdad para links, email y CV.
 */
export const profile = {
  name: 'Valentino Villella',
  role: { es: 'Full Stack Developer Jr', en: 'Full Stack Developer Jr' },
  location: { es: 'Buenos Aires, Argentina', en: 'Buenos Aires, Argentina' },
  email: 'villellavalentino11@gmail.com',
  github: 'https://github.com/villella30',
  linkedin: 'https://www.linkedin.com/in/villella30/',
  site: 'https://valentino-villella.netlify.app/',
  /** Ruta del PDF dentro de /public */
  cv: '/valentino-villella-cv.pdf',
  available: {
    es: 'Disponible para oportunidades',
    en: 'Open to opportunities',
  } satisfies L10n,
} as const;

/** Tagline corto bajo el nombre. */
export const tagline: L10n = {
  es: 'Estudiante de Licenciatura en Sistemas (UNLa) · React, TypeScript, Node.js e IA',
  en: 'BSc in Information Systems student (UNLa) · React, TypeScript, Node.js & AI',
};

/** Resumen profesional — sacado del CV (Oct 2026). */
export const summary: L10n = {
  es: 'Estudiante avanzado de Licenciatura en Sistemas especializado en desarrollo de software moderno. Combino sólidas bases de ingeniería (POO, concurrencia) con la integración estratégica de Inteligencia Artificial para automatizar procesos y potenciar el ciclo de desarrollo. Busco aportar valor en equipos tecnológicos creando soluciones escalables que unan arquitectura backend, interfaces dinámicas y automatización inteligente.',
  en: 'Advanced student of the BSc in Information Systems specialised in modern software development. I combine solid engineering foundations (OOP, concurrency) with the strategic use of Artificial Intelligence to automate processes and boost the development cycle. I am looking to add value to technology teams by building scalable solutions that bring together backend architecture, dynamic interfaces and intelligent automation.',
};

/** Párrafos cortos del bloque About. */
export const aboutHighlights: Record<'es' | 'en', string[]> = {
  es: [
    'Terminando el 3er año de la Licenciatura en Sistemas en la Universidad Nacional de Lanús.',
    'Base sólida en Programación Orientada a Objetos y concurrencia (Java y C++).',
    'Integro IA al flujo de trabajo: Prompt Engineering, agentes y skills para acelerar el desarrollo.',
    'Me interesa el cruce entre arquitectura backend, interfaces dinámicas y automatización.',
  ],
  en: [
    'Finishing the 3rd year of the BSc in Information Systems at Universidad Nacional de Lanús.',
    'Solid grounding in Object-Oriented Programming and concurrency (Java and C++).',
    'I embed AI into my workflow: prompt engineering, agents and skills to speed up delivery.',
    'I care about where backend architecture, dynamic interfaces and automation meet.',
  ],
};
