import { CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import { ValidationError, useForm } from '@formspree/react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import Button from '../ui/Button';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import TechIcon from '../ui/TechIcon';

/** ID público del formulario en Formspree (no es un secreto). */
const FORM_ID = 'mleqprnk';

type ContactFields = { name: string; email: string; message: string };

const INPUT =
  'w-full rounded-xl border border-sand-300 bg-sand-50/80 px-4 py-3 text-sm text-espresso-900 placeholder:text-mocha-700/60 transition focus:border-clay-500 focus:bg-white/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-clay-600';

export default function Contact() {
  const { lang, t } = useLanguage();
  const [state, handleSubmit, reset] = useForm<ContactFields>(FORM_ID);

  const contactLinks = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: profile.location[lang], href: null },
    {
      icon: null,
      social: 'linkedin' as const,
      label: 'LinkedIn',
      href: profile.linkedin,
    },
    { icon: null, social: 'github' as const, label: 'GitHub', href: profile.github },
  ];

  if (state.succeeded) {
    return (
      <Section id="contact">
        <div className="glass mx-auto flex max-w-xl flex-col items-center gap-4 p-10 text-center">
          <CheckCircle2 size={36} className="text-sage-600" aria-hidden="true" />
          <h2 className="font-display text-2xl text-espresso-900">{t.contact.successTitle}</h2>
          <p className="text-sm text-mocha-700">{t.contact.successBody}</p>
          <Button variant="ghost" onClick={() => reset()}>
            {t.contact.successAgain}
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <Section id="contact">
      <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} sub={t.contact.sub} />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-3">
          {contactLinks.map((link) => {
            const inner = (
              <>
                {link.icon ? (
                  <link.icon size={18} className="text-clay-600" aria-hidden="true" />
                ) : (
                  <TechIcon name={link.social!} size={18} className="text-clay-600" />
                )}
                <span className="text-sm font-medium text-espresso-900">{link.label}</span>
              </>
            );

            return link.href === null ? (
              <div key={link.label} className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                {inner}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="glass flex items-center gap-3 rounded-2xl px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-clay-400/70"
              >
                {inner}
              </a>
            );
          })}
        </div>

        <form className="glass flex flex-col gap-4 rounded-2xl p-6 sm:p-7" onSubmit={handleSubmit}>
          <h3 className="font-display text-lg text-espresso-900">{t.contact.formTitle}</h3>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-wide text-mocha-700"
            >
              {t.contact.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={INPUT}
              placeholder={t.contact.name}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide text-mocha-700"
            >
              {t.contact.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={INPUT}
              placeholder="you@example.com"
              aria-describedby="email-error"
            />
            <ValidationError<ContactFields>
              id="email-error"
              prefix={t.contact.email}
              field="email"
              errors={state.errors}
              className="text-xs font-medium text-clay-700"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-wide text-mocha-700"
            >
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${INPUT} min-h-32 resize-y`}
              placeholder={t.contact.message}
              aria-describedby="message-error"
            />
            <ValidationError<ContactFields>
              id="message-error"
              prefix={t.contact.message}
              field="message"
              errors={state.errors}
              className="text-xs font-medium text-clay-700"
            />
          </div>

          {/* Honeypot: invisible para humanos, atrapa bots. */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <ValidationError<ContactFields>
            errors={state.errors}
            className="text-xs font-medium text-clay-700"
          />

          <Button type="submit" disabled={state.submitting} className="mt-1 w-full py-3">
            <Send size={16} aria-hidden="true" />
            {state.submitting ? t.contact.submitting : t.contact.submit}
          </Button>
        </form>
      </div>
    </Section>
  );
}
