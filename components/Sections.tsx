"use client";

import { useLang } from "./i18n";

const GAME_URL = "https://github.com/caioross";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:py-32">
        <span className="inline-block rounded-full border border-starling/40 bg-starling/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-starling">
          {t.heroBadge}
        </span>
        <h1 className="mt-6 bg-gradient-to-r from-starling via-ice to-ion bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-7xl">
          {t.heroTitle}
        </h1>
        <p className="mt-4 font-mono text-lg text-ion sm:text-xl">{t.heroTagline}</p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ice/75 sm:text-lg">
          {t.heroSub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#workflow"
            className="rounded-full bg-starling px-7 py-3 font-semibold text-space shadow-lg shadow-starling/25 transition hover:opacity-90"
          >
            {t.heroCtaPrimary}
          </a>
          <a
            href={GAME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ice/30 px-7 py-3 font-semibold text-ice transition hover:border-starling hover:text-starling"
          >
            {t.heroCtaSecondary}
          </a>
        </div>
        <div className="mx-auto mt-16 grid h-40 w-40 place-items-center">
          <div className="absolute h-40 w-40 animate-spinSlow rounded-2xl border border-starling/30" />
          <div className="absolute h-28 w-28 animate-floaty rounded-xl border border-ion/40 bg-hull/60" />
          <span className="relative text-4xl">🧊</span>
        </div>
      </div>
    </section>
  );
}

export function Workflow() {
  const { t } = useLang();
  return (
    <section id="workflow" className="border-t border-starling/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-ice sm:text-4xl">
          {t.workflowTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ice/70">{t.workflowLead}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-starling/20 bg-hull/60 p-6 transition hover:border-starling/60"
            >
              <span className="font-mono text-4xl font-black text-starling/30">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold text-ice">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ice/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="border-t border-starling/10 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-ice sm:text-4xl">
          {t.featuresTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-ice/70">{t.featuresLead}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-ion/20 bg-hull/40 p-6 text-center transition hover:border-ion/60"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ion/15 text-3xl">
                {f.icon}
              </div>
              <h3 className="mt-4 font-bold text-ice">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ice/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="border-t border-starling/10 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-ice sm:text-4xl">{t.stackTitle}</h2>
          <p className="mt-3 text-ice/70">{t.stackLead}</p>
          <ul className="mt-6 space-y-3">
            {t.stackItems.map((s) => (
              <li key={s} className="flex items-start gap-3 text-ice/85">
                <span className="mt-1 text-starling">▹</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-starling/20 bg-hull/60 p-6">
          <h3 className="text-lg font-bold text-ice">{t.contractTitle}</h3>
          <ul className="mt-4 space-y-3">
            {t.contractItems.map((q) => (
              <li key={q} className="flex items-start gap-3 text-ice/85">
                <span className="mt-0.5 text-ion">✦</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const { t } = useLang();
  return (
    <section id="cta" className="border-t border-starling/10 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-ice sm:text-4xl">{t.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-xl text-ice/75">{t.ctaLead}</p>
        <a
          href={GAME_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-starling to-ion px-8 py-3 font-semibold text-space transition hover:opacity-90"
        >
          {t.ctaButton}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-starling/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-ice/50">
        <p>{t.footerNote}</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Caio · {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
