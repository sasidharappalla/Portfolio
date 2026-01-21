"use client";

import { motion } from "framer-motion";
import { PROFILE, PROJECTS, SKILLS, EXPERIENCE } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      {/* Top bar */}
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-foreground/80 to-foreground/20" />
          <div>
            <p className="font-medium leading-none">{PROFILE.name}</p>
            <p className="text-sm text-muted-foreground">{PROFILE.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
            <Button variant="outline" size="icon" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Button>
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
            <Button variant="outline" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="mt-10 space-y-16">
        {/* Hero */}
        <section className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {PROFILE.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            I build clean, scalable software — modern web apps, system design
            solutions, security tooling, and XR prototypes. I’m actively seeking
            Software Engineering roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            <a href={`mailto:${PROFILE.email}`}>
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Me <ArrowRight className="h-4 w-4" />
              </Button>
            </a>

            <a href={PROFILE.links.resume}>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </a>
          </motion.div>
        </section>

        <Separator />

        {/* Skills */}
        <section className="space-y-6">
          <SectionTitle
            title="Skills"
            subtitle="Tools and technologies I use in real projects and interviews."
          />
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Projects */}
        <section className="space-y-6">
          <SectionTitle
            title="Projects"
            subtitle="Resume-ready projects with real engineering depth."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <Card key={p.title} className="rounded-2xl p-5">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>

                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  {p.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <a href={p.links.github} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </a>

                  {p.links.live ? (
                    <a href={p.links.live} target="_blank" rel="noreferrer">
                      <Button className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </Button>
                    </a>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Experience */}
        <section className="space-y-6">
          <SectionTitle
            title="Experience"
            subtitle="Proof of execution, leadership, and reliability."
          />

          <div className="space-y-4">
            {EXPERIENCE.map((e) => (
              <Card key={e.role} className="rounded-2xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{e.role}</h3>
                    <p className="text-sm text-muted-foreground">{e.org}</p>
                  </div>
                  <Badge variant="secondary">{e.time}</Badge>
                </div>

                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  {e.points.map((pt) => (
                    <li key={pt}>• {pt}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Contact */}
        <section className="space-y-6 pb-10">
          <SectionTitle
            title="Contact"
            subtitle="If you want to hire me or collaborate, let’s talk."
          />

          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${PROFILE.email}`}>
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                {PROFILE.email}
              </Button>
            </a>

            <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js +
            Tailwind.
          </p>
        </section>
      </main>
    </div>
  );
}
