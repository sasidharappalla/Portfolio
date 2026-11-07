import { profile } from "@/content/profile";

export function Contact({ resumeHref }: { resumeHref: string | null }) {
  const links = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    ...(resumeHref ? [{ label: "Résumé (PDF)", href: resumeHref }] : []),
  ];
  return (
    <footer id="contact" className="scroll-mt-20 bg-night text-paper">
      <div className="mx-auto max-w-[1320px] px-5 pt-24 pb-10 md:px-10 md:pt-32">
        <p data-reveal className="label text-night-soft">
          § 04 · Contact
        </p>
        <h2 data-reveal className="mt-8 max-w-5xl font-display text-[clamp(2.9rem,7.4vw,7rem)] leading-[0.95] tracking-[-0.02em]">
          Let’s build something that <em className="text-signal">holds up</em> in production.
        </h2>

        <div data-reveal className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-night-rule pt-10">
          <div className="col-span-12 md:col-span-7">
            <p className="label text-night-soft">Write to</p>
            <a
              href={`mailto:${profile.email}`}
              className="draw mt-3 inline-block pb-1 font-display text-[clamp(1.7rem,3.6vw,3rem)] leading-tight"
            >
              {profile.email}
            </a>
          </div>
          <ul className="col-span-12 space-y-3 md:col-span-4 md:col-start-9">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between border-b border-night-rule pb-3 text-lg transition-colors hover:text-signal"
                >
                  {l.label}
                  <span aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-night-rule pt-6">
          <p className="label text-night-soft">© {new Date().getFullYear()} {profile.name.first} {profile.name.accent} {profile.name.last}</p>
          <p className="label text-night-soft">Set in Instrument Serif, Schibsted Grotesk &amp; IBM Plex Mono</p>
          <a href="#top" className="label draw pb-0.5 text-paper">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
