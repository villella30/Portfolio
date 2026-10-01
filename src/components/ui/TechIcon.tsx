import {
  Bot,
  BrainCircuit,
  Code,
  Mail,
  Sparkles,
  SquareCode,
  Terminal,
  Waypoints,
  type LucideIcon,
} from 'lucide-react';
import {
  siAndroid,
  siCplusplus,
  siCss,
  siDocker,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siKotlin,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siReact,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';

/** Marcas sin icono en simple-icons (retirados por trademark): path propio. */
const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';

/** Logos de marca monocromos (simple-icons) — se tiñen con `currentColor`. */
const SIMPLE: Record<string, string> = {
  html5: siHtml5.path,
  css3: siCss.path,
  javascript: siJavascript.path,
  typescript: siTypescript.path,
  react: siReact.path,
  nextdotjs: siNextdotjs.path,
  tailwindcss: siTailwindcss.path,
  kotlin: siKotlin.path,
  android: siAndroid.path,
  nodedotjs: siNodedotjs.path,
  java: siOpenjdk.path,
  mysql: siMysql.path,
  firebase: siFirebase.path,
  docker: siDocker.path,
  git: siGit.path,
  github: siGithub.path,
  figma: siFigma.path,
  cplusplus: siCplusplus.path,
  linkedin: LINKEDIN_PATH,
};

/** Conceptos sin logo de marca → iconos de línea. */
const FALLBACK: Record<string, LucideIcon> = {
  mail: Mail,
  rest: Waypoints,
  vscode: SquareCode,
  opencode: Terminal,
  prompting: Sparkles,
  agents: Bot,
  llm: BrainCircuit,
  default: Code,
};

interface TechIconProps {
  /** Clave declarada en `Skill['icon']` o `Skill['id']`. */
  name: string;
  size?: number;
  className?: string;
}

/**
 * Resuelve una clave de icono a SVG. Todo en `currentColor` para que
 * respete la paleta tierra en vez de imponer los colores de marca.
 */
export default function TechIcon({ name, size = 20, className }: TechIconProps) {
  const path = SIMPLE[name];
  const Fallback = FALLBACK[name] ?? FALLBACK.default!;

  if (path === undefined) {
    return (
      <Fallback
        size={size}
        className={className}
        aria-hidden="true"
        focusable="false"
        strokeWidth={1.6}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  );
}
