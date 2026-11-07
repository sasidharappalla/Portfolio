import { existsSync } from "node:fs";
import path from "node:path";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { RevealObserver } from "@/components/RevealObserver";
import { Work } from "@/components/Work";

// The résumé buttons only appear once public/resume.pdf exists, so the site never ships a dead link.
const resumeHref = existsSync(path.join(process.cwd(), "public", "resume.pdf")) ? "/resume.pdf" : null;

export default function Home() {
  return (
    <>
      <a href="#work" className="label sr-only z-[70] bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Skip to work
      </a>
      <Header resumeHref={resumeHref} />
      <main>
        <Hero resumeHref={resumeHref} />
        <Proof />
        <Experience />
        <Work />
        <Capabilities />
      </main>
      <Contact resumeHref={resumeHref} />
      <RevealObserver />
    </>
  );
}
