import { capabilities, credentials, education } from "@/content/profile";
import { SectionHead } from "./SectionHead";

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-[1320px] scroll-mt-20 px-5 py-24 md:px-10 md:py-32">
      <SectionHead no="03" title="Capabilities" aside="What I reach for, grouped the way the work actually uses it." />

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <div key={c.group} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
            <p className="label border-b border-rule-strong pb-3 text-ink">{c.group}</p>
            <ul className="mt-4 space-y-2">
              {c.items.map((it) => (
                <li key={it} className="font-display text-[1.6rem] leading-tight">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-28 grid grid-cols-12 gap-x-6 gap-y-14">
        <div className="col-span-12 lg:col-span-7">
          <p data-reveal className="label border-b border-rule-strong pb-3">
            Education
          </p>
          <ul>
            {education.map((e) => (
              <li key={e.school} data-reveal className="border-b border-rule py-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-[2rem] leading-tight">{e.school}</h3>
                  <p className="label text-ink-faint">{e.dates}</p>
                </div>
                <p className="mt-1 text-[1.02rem] font-medium">
                  {e.degree} <span className="font-normal text-ink-faint">· {e.detail}</span>
                </p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">{e.courses}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <p data-reveal className="label border-b border-rule-strong pb-3">
            Credentials
          </p>
          <ul>
            {credentials.map((c) => (
              <li key={c.name} data-reveal className="border-b border-rule py-5">
                <p className="text-[1.05rem] font-medium leading-snug">{c.name}</p>
                <p className="label mt-1.5 text-ink-faint">{c.by}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
