import type { ReactNode } from 'react';

interface TimelineItemProps {
  title: ReactNode;
  subtitle: ReactNode;
  period: string;
  body?: ReactNode;
  tech?: ReactNode;
  isLast?: boolean;
}

/** Item común de Experience y Education: línea vertical + punto de acento. */
export default function TimelineItem({
  title,
  subtitle,
  period,
  body,
  tech,
  isLast = false,
}: TimelineItemProps) {
  return (
    <li className="relative pl-8 sm:pl-10">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-6 bottom-[-1.5rem] w-px bg-sand-300 sm:left-[9px]"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 size-3.5 rounded-full border-[3px] border-sand-50 bg-clay-500 shadow-[0_0_0_1px_var(--color-clay-500)] sm:left-0.5"
      />

      <div className="glass rounded-2xl p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-lg leading-snug text-espresso-900">{title}</h3>
          <span className="text-xs font-medium uppercase tracking-wide text-clay-600">
            {period}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-mocha-700">{subtitle}</p>
        {body && <div className="mt-3 text-sm leading-relaxed text-mocha-700">{body}</div>}
        {tech && <div className="mt-4">{tech}</div>}
      </div>
    </li>
  );
}
