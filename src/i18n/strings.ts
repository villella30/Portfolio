import type { Lang } from '../types';

/**
 * Copy de interfaz. Tipado a prueba de cambios: si `en` le falta una clave
 * o el tipo no coincide con `es`, TypeScript no compila.
 */
const es = {
  a11y: {
    skip: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchToEn: 'Switch to English',
    switchToEs: 'Cambiar a español',
    backToTop: 'Volver arriba',
  },
  nav: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    projects: 'Proyectos',
    experience: 'Experiencia',
    education: 'Educación',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    ctaContact: 'Hablemos',
    ctaCv: 'Descargar CV',
    scroll: 'Seguir leyendo',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Bases de ingeniería + automatización con IA',
    sub: 'Perfil profesional',
  },
  skills: {
    eyebrow: 'Stack',
    title: 'Habilidades técnicas',
    sub: 'Tecnologías con las que trabajo día a día, organizadas por área.',
    level: 'Nivel',
  },
  projects: {
    eyebrow: 'Trabajo',
    title: 'Proyectos',
    sub: 'Una selección de proyectos académicos y personales.',
    tabs: { all: 'Todos', academic: 'Académicos', personal: 'Personales' },
    status: { completed: 'Completado', progress: 'En curso' },
    code: 'Código',
    live: 'Demo',
    highlights: 'Destacados',
    count: (n: number) => `${n} ${n === 1 ? 'proyecto' : 'proyectos'}`,
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia',
    sub: 'Roles, prácticas y trabajo en equipo.',
  },
  education: {
    eyebrow: 'Formación',
    title: 'Educación',
    sub: 'Formación académica y técnica.',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Trabajemos juntos',
    sub: 'Contame qué estás construyendo y te respondo a la brevedad.',
    formTitle: 'Envíame un email',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    submitting: 'Enviando…',
    successTitle: '¡Gracias por escribir!',
    successBody: 'Te respondo a la brevedad.',
    successAgain: 'Enviar otro mensaje',
    error: 'No se pudo enviar. Probá de nuevo o escribime directo a',
    required: 'Este campo es obligatorio.',
    invalidEmail: 'Ingresá un email válido.',
  },
  footer: {
    rights: 'Todos los derechos reservados.'
  },
};

const en = {
  a11y: {
    skip: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchToEn: 'Cambiar a español',
    switchToEs: 'Switch to English',
    backToTop: 'Back to top',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I’m',
    ctaContact: "Let's talk",
    ctaCv: 'Download CV',
    scroll: 'Keep reading',
  },
  about: {
    eyebrow: 'About me',
    title: 'Engineering foundations + AI automation',
    sub: 'Professional profile',
  },
  skills: {
    eyebrow: 'Stack',
    title: 'Technical skills',
    sub: 'Technologies I work with day to day, grouped by area.',
    level: 'Level',
  },
  projects: {
    eyebrow: 'Work',
    title: 'Projects',
    sub: 'A selection of academic and personal projects.',
    tabs: { all: 'All', academic: 'Academic', personal: 'Personal' },
    status: { completed: 'Completed', progress: 'In progress' },
    code: 'Code',
    live: 'Demo',
    highlights: 'Highlights',
    count: (n: number) => `${n} ${n === 1 ? 'project' : 'projects'}`,
  },
  experience: {
    eyebrow: 'Journey',
    title: 'Experience',
    sub: 'Roles, internships and teamwork.',
  },
  education: {
    eyebrow: 'Background',
    title: 'Education',
    sub: 'Academic and technical training.',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's work together",
    sub: "Tell me what you're building and I'll get back to you shortly.",
    formTitle: 'Send me an email',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    submitting: 'Sending…',
    successTitle: 'Thanks for reaching out!',
    successBody: 'I’ll get back to you shortly.',
    successAgain: 'Send another message',
    error: 'Could not send. Try again or email me directly at',
    required: 'This field is required.',
    invalidEmail: 'Enter a valid email address.',
  },
  footer: {
    rights: 'All rights reserved.'
  },
} satisfies typeof es;

export const strings: Record<Lang, typeof es> = { es, en };

export type Strings = typeof es;
