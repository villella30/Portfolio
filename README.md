# Valentino Villella — Portfolio v2

Portfolio personal bilingüe (ES/EN) de **Valentino Villella**, Full Stack Developer Jr y
estudiante de Licenciatura en Sistemas (UNLa).

🔗 **https://valentino-villella.netlify.app**

## Stack

| Capa       | Tecnología                                            |
| ---------- | ----------------------------------------------------- |
| Build      | [Vite 8](https://vite.dev)                            |
| UI         | React 19 + TypeScript 5.9 (estricto)                  |
| Estilos    | Tailwind CSS v4 (config CSS-first en `src/index.css`) |
| Iconos     | `simple-icons` (logos monocromos) + `lucide-react`    |
| Formulario | `@formspree/react`                                    |
| Deploy     | Netlify (`netlify.toml`)                              |

**Sin backend**: el contenido es estático y el contacto va por Formspree.

## Arrancar

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Comando            | Qué hace                                          |
| ------------------ | ------------------------------------------------- |
| `npm run dev`      | Servidor de desarrollo con HMR                    |
| `npm run build`    | `tsc -b` + build de producción en `dist/`         |
| `npm run preview`  | Sirve el build de producción en local             |
| `npm run lint`     | ESLint (flat config)                              |
| `npm run format`   | Prettier sobre todo el repo                       |
| `npm run optimize` | Convierte `src/assets` a WebP y borra el original |

## Arquitectura de datos

El contenido **no vive en los componentes**. Agregar un proyecto o una skill es un objeto
nuevo en el archivo correspondiente: el grid, los contadores de las pestañas, los badges y
los iconos se actualizan solos.

```
src/
├── types/index.ts        Tipos compartidos (Project, Skill, Education…)
├── data/
│   ├── profile.ts        Nombre, rol, links, email, CV, resumen
│   ├── projects.ts       ★ 8 proyectos (académicos + personales)
│   ├── skills.ts         ★ 25 skills en 5 categorías
│   ├── experience.ts     ⚠️  placeholders — completar con datos reales
│   ├── education.ts      Lic. Sistemas UNLa + Técnico en Electrónica
│   └── nav.ts            Orden del menú
├── i18n/
│   ├── strings.ts        Copy de UI (es/en) — tipado a prueba de cambios
│   ├── context.ts        Contexto de idioma
│   ├── LanguageProvider  Provider + <html lang> + localStorage
│   └── useLanguage.ts    Hook `useLanguage()`
├── hooks/                useSectionSpy, useReveal (IntersectionObserver)
├── components/
│   ├── layout/           Layout, Navbar, Footer, LanguageToggle
│   ├── effects/          GradientBackdrop (fondo animado)
│   ├── ui/               GlassCard, Button, Badge, TechIcon, TechBadges…
│   └── sections/         Hero, About, Skills, Projects, Experience, Education, Contact
└── assets/               Fotos y screenshots (WebP optimizado)
```

### Agregar un proyecto

```ts
// src/data/projects.ts
{
  id: 'mi-proyecto',
  title: { es: 'Título', en: 'Title' },
  summary: { es: '…', en: '…' },
  status: 'completed',            // 'completed' | 'in-progress'
  tag: 'personal',                // 'academic' | 'personal' → pestaña del grid
  image: miImagen,                // opcional: sin imagen usa el placeholder
  repoUrl: 'https://github.com/…',
  demoUrl: 'https://…',
  tech: ['react', 'ts'],          // ids de data/skills.ts
}
```

### Agregar una skill

```ts
// src/data/skills.ts
{ id: 'python', name: 'Python', icon: 'python', category: 'lang_ai', level: 3 }
```

El icono se resuelve en `components/ui/TechIcon.tsx`: si `simple-icons` no tiene la clave
cae en un icono de línea de lucide y, si tampoco, en `Code`.

## Diseño

- **Paleta cálida / tierra**: crema (`sand`), terracota (`clay`), oliva (`sage`),
  marrón (`mocha`) y texto oscuro (`espresso`) — tokens en `src/index.css` → `@theme`.
- **Tipografía**: Fraunces (display) + Inter (texto), vía Google Fonts con `display=swap`.
- **Fondo**: tres blobs radiales con `radial-gradient` + `blur-3xl` que derivan con
  keyframes desfasados (`GradientBackdrop`), más grano SVG al 4,5% de opacidad.
  Compuesto por la GPU, sin canvas ni librerías.
- **Glassmorphism**: utilidades `.glass` y `.glass-strong` con `backdrop-filter`.

## Accesibilidad

- Skip link, `:focus-visible` con contraste AA, `alt` en todas las imágenes.
- `prefers-reduced-motion` desactiva blobs, reveals y scroll suave.
- Formulario con `<label>` visibles, `required`, `aria-describedby` de errores y honeypot.
- Idioma: `<html lang>` sincronizado con el toggle.

## Deploy

El repo `villella30/Portfolio` está conectado a Netlify por integración GitHub:

1. `git push origin redesign`
2. Abrir PR `redesign → main` → Netlify genera un **Deploy Preview**
3. Merge a `main` → deploy a producción

> `netlify.toml` fija `publish = "dist"` (Vite) — no usar la config de CRA (`build`).

## Pendiente

- [ ] `src/data/experience.ts` tiene **placeholders**. Reemplazar por experiencia real o
      dejar el array vacío (la sección no se renderiza vacía).
- [ ] Sumar screenshots de los proyectos académicos si están disponibles.
