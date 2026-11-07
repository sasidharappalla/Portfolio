import { proof } from "@/content/profile";

// Full-bleed ink band: the numbers carry the argument.
export function Proof() {
  return (
    <section aria-label="Results in numbers" className="bg-night text-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
        <p data-reveal className="label text-night-soft">
          Measured, not claimed
        </p>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((p, i) => (
            <li
              key={p.caption}
              data-reveal
              style={{ ["--d" as string]: `${i * 110}ms` }}
              className="border-t border-night-rule py-8 sm:pr-8 lg:border-t-0 lg:border-l lg:px-8 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="font-display text-[clamp(4rem,7vw,6.5rem)] leading-none tracking-[-0.03em]">
                {p.figure}
                {p.unit ? <span className="text-signal">{p.unit}</span> : null}
              </p>
              <p className="mt-5 max-w-[15rem] text-[0.95rem] leading-snug text-paper/85">{p.caption}</p>
              <p className="label mt-4 text-night-soft">{p.source}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
