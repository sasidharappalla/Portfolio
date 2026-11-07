import { evalReadout, profile, spec } from "@/content/profile";

export function Hero({ resumeHref }: { resumeHref: string | null }) {
  return (
    <section id="top" className="relative mx-auto max-w-[1320px] px-5 pt-10 md:px-10 md:pt-14">
      {/* Spec-sheet meta line */}
      <div className="rise flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-4" style={{ ["--d" as string]: "0ms" }}>
        <p className="label flex items-center gap-2.5 text-ink-soft">
          <span className="live-dot inline-block size-2 rounded-full bg-signal" aria-hidden />
          {profile.status}
        </p>
        <p className="label text-ink-faint">Raleigh, NC · 35.78° N, 78.64° W</p>
      </div>

      <h1 className="mt-10 font-display text-[clamp(3.6rem,12.2vw,11.75rem)] leading-[0.84] tracking-[-0.025em] md:mt-14">
        <span className="rise block" style={{ ["--d" as string]: "120ms" }}>
          {profile.name.first}
        </span>
        <span className="rise block" style={{ ["--d" as string]: "240ms" }}>
          <em className="text-signal">{profile.name.accent}</em> {profile.name.last}
        </span>
      </h1>

      <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 pb-16 md:mt-16 md:pb-20">
        <div className="rise col-span-12 md:col-span-6 lg:col-span-5" style={{ ["--d" as string]: "420ms" }}>
          <p className="label text-signal-ink">
            {profile.role} / {profile.focus}
          </p>
          <p className="mt-5 font-display text-[1.9rem] leading-[1.12] tracking-[-0.005em] text-ink md:text-[2.15rem]">
            {profile.lede}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[0.95rem] font-medium text-paper transition-colors hover:bg-signal"
            >
              See selected work
              <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
            {resumeHref ? (
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-rule-strong px-6 py-3.5 text-[0.95rem] font-medium transition-colors hover:border-ink"
              >
                Download résumé
              </a>
            ) : null}
            <a href={`mailto:${profile.email}`} className="draw ml-1 pb-0.5 text-[0.95rem] text-ink-soft hover:text-ink">
              {profile.email}
            </a>
          </div>
        </div>

        <aside className="col-span-12 md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8" aria-label="At a glance">
          <dl className="rise divide-y divide-rule border-y border-rule" style={{ ["--d" as string]: "560ms" }}>
            {spec.map((s) => (
              <div key={s.label} className="grid grid-cols-[7.5rem_1fr] gap-4 py-3">
                <dt className="label pt-0.5 text-ink-faint">{s.label}</dt>
                <dd className="text-[0.95rem] text-ink">{s.value}</dd>
              </div>
            ))}
          </dl>
          <EvalReadout />
        </aside>
      </div>
    </section>
  );
}

function EvalReadout() {
  return (
    <figure
      className="rise relative mt-6 overflow-hidden rounded-[10px] bg-night p-5 text-paper shadow-[0_30px_60px_-30px_rgb(21_19_15/0.55)]"
      style={{ ["--d" as string]: "700ms" }}
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.75rem] text-night-soft">$ {evalReadout.title}</p>
        <p className="font-mono text-[0.7rem] text-[#8fd18b]">● passing</p>
      </div>
      <ul className="mt-5 space-y-3.5">
        {evalReadout.rows.map((r, i) => (
          <li key={r.metric} className="grid grid-cols-[6.75rem_1fr_4.25rem] items-center gap-3 font-mono text-[0.78rem]">
            <span className="text-night-soft">{r.metric}</span>
            <span className="relative h-[3px] rounded-full bg-night-rule">
              <span
                className="bar absolute inset-y-0 left-0 rounded-full bg-signal"
                style={{ width: `${r.value * 100}%`, ["--d" as string]: `${900 + i * 180}ms` }}
              />
            </span>
            <span className="text-right text-paper">{r.display}</span>
          </li>
        ))}
      </ul>
      <figcaption className="mt-5 border-t border-night-rule pt-3 font-mono text-[0.68rem] text-night-soft">
        {evalReadout.footer}
      </figcaption>
    </figure>
  );
}
