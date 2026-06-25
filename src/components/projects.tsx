"use client";

import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { projects } from "@/data/content";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";

export function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="03" title={translations.sectionTitles.projects[lang]} />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title.de} delay={i * 0.08} className="h-full">
              <TiltCard className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-300 ease-out hover:border-accent hover:shadow-[0_20px_50px_-15px_var(--accent-soft)]">
                <h3 className="text-lg font-semibold text-foreground">{project.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description[lang]}
                </p>

                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {project.highlights[lang].map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-accent rounded-full bg-accent-soft px-3 py-1 text-xs text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
                    >
                      <ExternalLink size={14} />
                      {translations.common.liveDemo[lang]}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
                    >
                      <Github size={14} />
                      {translations.common.code[lang]}
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
