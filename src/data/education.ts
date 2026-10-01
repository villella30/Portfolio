import type { EducationItem } from '../types';

export const education: EducationItem[] = [
  {
    id: 'lic-sistemas',
    institution: 'Universidad Nacional de Lanús (UNLa)',
    degree: {
      es: 'Licenciatura en Sistemas',
      en: 'BSc in Information Systems',
    },
    period: { es: 'En curso · 3er año', en: 'In progress · 3rd year' },
    note: {
      es: 'Enfoque en arquitectura de software, concurrencia, diseño de bases de datos relacionales y algoritmos.',
      en: 'Focus on software architecture, concurrency, relational database design and algorithms.',
    },
    url: 'https://www.unla.edu.ar/',
  },
  {
    id: 'tecnico-electronica',
    institution: 'Educación Secundaria Técnica',
    degree: {
      es: 'Técnico en Electrónica',
      en: 'Technical Diploma in Electronics',
    },
    period: { es: 'Graduado', en: 'Graduated' },
    note: {
      es: 'Bases de electrónica, programación y matemática aplicada.',
      en: 'Foundations of electronics, programming and applied mathematics.',
    },
  },
];
