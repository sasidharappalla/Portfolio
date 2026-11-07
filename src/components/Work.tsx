import { moreWork, projects } from "@/content/profile";
import { SectionHead } from "./SectionHead";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-paper-deep/60">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-32">
        <SectionHead
          no="02"
          title="Selected work"
          aside="Four systems, each with a number attached. AI work and the infrastructure underneath it."
        />

        <ol className="mt-4">
          {projects.map((p) => (
            <li
              key={p.name}
              data-reveal
              className="group grid grid-cols-12 gap-x-6 gap-y-6 border-b border-rule py-14 transition-colors"
            >
              <div className="col-span-12 flex items-start justify-between md:col-span-2 md:block">
                <p className="font-display text-6xl leading-none text-ink-faint/60 transition-colors group-hover:text-signal md:text-7xl">
                  {p.index}
                </p>
                <p className="label mt-1 text-ink-faint md:mt-5">{p.dates}</p>
              </div>

              <div className="col-span-12 md:col-span-7">
                <p className="label text-signal-ink">{p.kind}</p>
                <h3 className="mt-3 font-display text-5xl leading-[0.95] tracking-[-0.01em] md:text-6xl">{p.name}</h3>
                <p className="mt-4 max-w-xl font-display text-[1.45rem] italic leading-snug text-ink-soft">{p.thesis}</p>
                <ul className="mt-6 max-w-2xl space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="grid grid-cols-[1.6rem_1fr] text-[1rem] leading-relaxed text-ink-soft">
                      <span aria-hidden className="text-signal">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="label mt-7 text-ink-faint">{p.stack.join("  ·  ")}</p>
              </div>

              <div className="col-span-12 flex flex-row items-end justify-between gap-6 md:col-span-3 md:flex-col md:items-end md:justify-between">
                {p.metric ? (
                  <div className="md:text-right">
                    <p className="font-display text-6xl leading-none tracking-[-0.03em] md:text-7xl">{p.metric.figure}</p>
                    <p className="label mt-2 text-ink-faint">{p.metric.label}</p>
                  </div>
                ) : null}
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="label draw inline-flex items-center gap-2 pb-0.5 text-ink"
                    aria-label={`${p.name} source code on GitHub`}
                  >
                    Source <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <p className="label text-ink-faint">{p.note}</p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div data-reveal className="mt-16">
          <p className="label text-ink-faint">Also built</p>
          <ul className="mt-5 grid gap-px overflow-hidden rounded-[10px] border border-rule bg-rule md:grid-cols-3">
            {moreWork.map((m) => (
              <li key={m.name} className="bg-paper">
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col justify-between gap-8 p-6 transition-colors hover:bg-paper-deep"
                >
                  <div>
                    <p className="flex items-baseline justify-between font-display text-3xl">
                      {m.name}
                      <span aria-hidden className="font-sans text-base text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal">
                        ↗
                      </span>
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{m.line}</p>
                  </div>
                  <p className="label text-ink-faint">{m.tag}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
