import type { Project } from '../types';

import segurosImg from '../assets/projects/Seguros.webp';
import AppMusicaImg from '../assets/projects/AppMusica.webp';
import sportwearImg from '../assets/projects/sportwear.webp';
import futbolImg from '../assets/projects/futbol.webp';
import juicewrldImg from '../assets/projects/juicewrld.webp';
import areamovilImg from '../assets/projects/areamovil.webp';
import portfolioImg from '../assets/projects/portfolio.webp';

/**
 * Única fuente de verdad de los proyectos.
 * Para agregar uno: copiá un objeto, cambiá los datos y listo —
 * el grid, los contadores de las pestañas y los badges se actualizan solos.
 */
export const projects: Project[] = [
  // ── Académicos (CV Oct 2026) ────────────────────────────────
  {
    id: 'seguros-ia',
    title: { es: 'Atención al Cliente con IA · Seguros', en: 'AI Customer Service · Insurance' },
    summary: {
      es: 'Sistema integral de atención al cliente con bot de WhatsApp impulsado por IA, infraestructura contenerizada en Docker y desarrollo asistido por OpenCode.',
      en: 'End-to-end customer service system with an AI-powered WhatsApp bot, Docker containerised infrastructure and AI-assisted development with OpenCode.',
    },
    highlights: {
      es: [
        'Contenerización en Docker para portabilidad y despliegue sencillo.',
        'Bot de WhatsApp autónomo que resuelve consultas en tiempo real.',
        'Prompt Engineering, agentes y skills para acelerar el desarrollo.',
      ],
      en: [
        'Docker containerisation for portability and simple deployment.',
        'Autonomous WhatsApp bot resolving enquiries in real time.',
        'Prompt engineering, agents and skills to speed up development.',
      ],
    },
    status: 'in-progress',
    tag: 'academic',
    image: segurosImg,
    tech: ['react', 'ts', 'node', 'mysql', 'docker', 'opencode'],
    featured: true,
  },
  {
    id: 'music-android',
    title: { es: 'Descubrimiento Musical · Android', en: 'Music Discovery · Android' },
    summary: {
      es: 'App nativa en Kotlin para descubrir el top de canciones globales, con persistencia local en Room y consumo asíncrono de APIs REST.',
      en: 'Native Kotlin app to discover global chart-topping songs, with Room local persistence and async REST API consumption.',
    },
    highlights: {
      es: [
        'Persistencia local con Room y configuración con SharedPreferences.',
        'Consumo asíncrono de APIs externas.',
        'Catálogo musical en tiempo real con experiencia fluida.',
      ],
      en: [
        'Local persistence with Room and settings via SharedPreferences.',
        'Asynchronous consumption of external APIs.',
        'Real-time music catalogue with a smooth experience.',
      ],
    },
    status: 'completed',
    tag: 'academic',
    image: AppMusicaImg,
    tech: ['kotlin', 'room', 'rest'],
    featured: true,
  },
  {
    id: 'epicentro-gourmet',
    title: { es: 'Epicentro Gourmet', en: '"Epicentro Gourmet" Backend' },
    summary: {
      es: 'Arquitectura backend de un sistema de gestión construida estrictamente sobre los pilares de la POO, con módulos de liquidación de haberes y control de canon.',
      en: 'Backend architecture for a management system strictly built on OOP pillars, with payroll and sales-canon modules.',
    },
    highlights: {
      es: [
        'Diseño orientado a objetos de extremo a extremo.',
        'Lógica de negocio crítica: liquidación de haberes y canon de unidades de venta.',
        'Código modular preparado para escalar.',
      ],
      en: [
        'End-to-end object-oriented design.',
        'Critical business logic: payroll and sales-canon control.',
        'Modular code prepared to scale.',
      ],
    },
    status: 'completed',
    tag: 'academic',
    tech: ['java'],
    featured: true,
  },

  // ── Personales ──────────────────────────────────────────────
  {
    id: 'sportwear',
    title: { es: 'Sportwear', en: 'Sportwear' },
    summary: {
      es: 'E-commerce de ropa deportiva con pasarela de pago, buscador y filtros avanzados.',
      en: 'Sportswear e-commerce with payment gateway, search bar and advanced filters.',
    },
    status: 'in-progress',
    tag: 'personal',
    image: sportwearImg,
    repoUrl: 'https://github.com/villella30/Sport-Clothes',
    tech: ['react', 'next', 'node', 'ts'],
  },
  {
    id: 'futbol-match',
    title: { es: 'Futbol Match', en: 'Futbol Match' },
    summary: {
      es: 'App móvil para organizar partidos de fútbol mediante publicaciones de los usuarios.',
      en: 'Mobile app to organise football matches through user-generated posts.',
    },
    status: 'completed',
    tag: 'personal',
    image: futbolImg,
    repoUrl: 'https://github.com/villella30/Futbol-Match1',
    tech: ['reactnative', 'js', 'firebase'],
  },
    {
    id: 'portfolio',
    title: { es: 'Portfolio Personal', en: 'Personal Portfolio' },
    summary: {
      es: 'Este sitio: Vite + React 19 + TypeScript + Tailwind CSS v4, bilingüe ES/EN.',
      en: 'This site: Vite + React 19 + TypeScript + Tailwind CSS v4, ES/EN bilingual.',
    },
    status: 'completed',
    tag: 'personal',
    image: portfolioImg,
    repoUrl: 'https://github.com/villella30/Portfolio',
    demoUrl: 'https://valentino-villella.netlify.app/',
    tech: ['react', 'ts', 'tailwind'],
  },
  {
    id: 'juice-wrld-tribute',
    title: { es: 'Juice WRLD Tribute', en: 'Juice WRLD Tribute' },
    summary: {
      es: 'Sitio tributo con animaciones, audio y diseño responsivo.',
      en: 'Tribute site with animations, audio and responsive design.',
    },
    status: 'completed',
    tag: 'personal',
    image: juicewrldImg,
    repoUrl: 'https://github.com/villella30/JuiceWrldTribute',
    demoUrl: 'https://juicewrldtribute.netlify.app/',
    tech: ['react', 'css'],
  },
  {
    id: 'area-movil',
    title: { es: 'AreaMovil', en: 'AreaMovil' },
    summary: {
      es: 'Sitio informativo de venta y reparación de motores automáticos.',
      en: 'Informational site for automatic transmission sales and repair.',
    },
    status: 'completed',
    tag: 'personal',
    image: areamovilImg,
    repoUrl: 'https://github.com/villella30/Areamovil.github.io',
    demoUrl: 'https://villella30.github.io/Areamovil.github.io/',
    tech: ['html', 'css', 'js'],
  },

];
