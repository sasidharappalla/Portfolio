import { experience } from "@/content/profile";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        no="01"
        title="Experience"
        aside="A year and a half shipping a production platform at a biotech startup, after an internship at India's space agency."
      />
      <ol className="mt-4">
        {experience.map((job) => (
          <li key={job.company} data-reveal className="grid grid-cols-12 gap-x-6 gap-y-5 border-b border-rule py-12">
            <div className="col-span-12 md:col-span-3">
              <p className="label text-ink">
                {job.start} — {job.end}
              </p>
              <p className="label mt-2 text-ink-faint">{job.place}</p>
            </div>
            <div className="col-span-12 md:col-span-9 lg:col-span-8">
              <h3 className="font-display text-4xl leading-tight md:text-[2.75rem]">{job.company}</h3>
              <p className="mt-1 text-lg font-medium">{job.role}</p>
              <p className="mt-3 font-display text-xl italic text-ink-soft">{job.summary}</p>
              <ul className="mt-6 space-y-3">
                {job.points.map((pt) => (
                  <li key={pt} className="grid grid-cols-[1.6rem_1fr] text-[1.02rem] leading-relaxed text-ink-soft">
                    <span aria-hidden className="text-signal">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="label mt-7 text-ink-faint">{job.stack.join("  ·  ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
