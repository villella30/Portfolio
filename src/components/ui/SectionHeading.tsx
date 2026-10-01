interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <header className={`flex flex-col gap-3 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-600">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl leading-tight tracking-tight text-espresso-900 sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="max-w-2xl text-base leading-relaxed text-mocha-700">{sub}</p>}
    </header>
  );
}
