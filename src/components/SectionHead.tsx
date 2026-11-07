export function SectionHead({ no, title, aside }: { no: string; title: string; aside?: string }) {
  return (
    <header data-reveal className="grid grid-cols-12 items-end gap-x-6 gap-y-4 border-b border-rule-strong pb-6">
      <p className="label col-span-12 text-signal-ink md:col-span-3">§ {no}</p>
      <h2 className="col-span-12 font-display text-5xl leading-[0.95] tracking-[-0.01em] md:col-span-5 md:text-6xl">
        {title}
      </h2>
      {aside ? (
        <p className="col-span-12 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft md:col-span-4 md:justify-self-end">
          {aside}
        </p>
      ) : null}
    </header>
  );
}
