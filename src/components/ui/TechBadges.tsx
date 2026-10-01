import { skillById } from '../../data/skills';
import TechIcon from './TechIcon';

interface TechBadgesProps {
  /** Ids de `skills`; los desconocidos se ignoran en vez de romper. */
  ids: string[];
  className?: string;
}

/** Chips de tecnologías compartidos por Projects, Experience y Education. */
export default function TechBadges({ ids, className = '' }: TechBadgesProps) {
  if (ids.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`.trim()}>
      {ids.map((id) => {
        const skill = skillById.get(id);
        if (!skill) return null;
        return (
          <li
            key={id}
            className="flex items-center gap-1.5 rounded-md bg-sand-200/70 px-2 py-1 text-[11px] font-medium text-mocha-700"
          >
            <TechIcon name={skill.icon} size={13} className="text-clay-600" />
            {skill.name}
          </li>
        );
      })}
    </ul>
  );
}
