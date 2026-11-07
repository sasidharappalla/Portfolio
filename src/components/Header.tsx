import { profile } from "@/content/profile";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export function Header({ resumeHref }: { resumeHref: string | null }) {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="group flex items-baseline gap-3" aria-label={`${profile.shortName}, back to top`}>
          <span className="font-display text-2xl leading-none">
            S<span className="italic text-signal">.</span>A
          </span>
          <span className="label hidden text-ink-faint sm:inline">{profile.shortName}</span>
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="label draw pb-0.5 text-ink-soft hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={resumeHref ?? `mailto:${profile.email}`}
          {...(resumeHref ? { target: "_blank", rel: "noopener" } : {})}
          className="label inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          {resumeHref ? "Résumé" : "Email me"}
          <span aria-hidden>↗</span>
        </a>
      </div>
    </header>
  );
}
