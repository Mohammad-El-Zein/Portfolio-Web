"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { projects, type Project } from "@/data/content";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function Projects() {
  const { lang } = useLanguage();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="03" title={translations.sectionTitles.projects[lang]} />
        </Reveal>

        <div className="space-y-8">
          {featured.map((project, i) => (
            <Reveal key={project.title.de} delay={i * 0.08}>
              {/* Alternate the screenshot side so stacked featured cards don't look repetitive. */}
              <FeaturedCard project={project} reversed={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <Reveal key={project.title.de} delay={i * 0.08} className="h-full">
              <TiltCard className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-300 ease-out hover:border-accent hover:shadow-[0_20px_50px_-15px_var(--accent-soft)]">
                <ProjectImage project={project} />
                <ProjectBody project={project} />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  const { lang } = useLanguage();

  return (
    <div className="featured-border group relative h-full rounded-2xl p-px">
      <div
        className={cn(
          "relative flex h-full flex-col gap-6 rounded-2xl bg-surface p-6 sm:p-8",
          project.image && "lg:grid lg:items-center lg:gap-10",
          project.image &&
            (reversed
              ? "lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]"
              : "lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"),
        )}
      >
        <div className={cn("flex flex-col", reversed && "lg:order-2")}>
          <span className="font-mono-accent mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs text-accent">
            <Star size={12} className="fill-current" />
            {translations.projects.featured[lang]}
          </span>
          <ProjectBody project={project} large />
        </div>
        {project.image && <ProjectImage project={project} className="mb-0" />}
      </div>
    </div>
  );
}

function ProjectImage({ project, className }: { project: Project; className?: string }) {
  const { lang } = useLanguage();
  if (!project.image) return null;

  return (
    <div className={cn("mb-5 overflow-hidden rounded-lg border border-border shadow-lg", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are unoptimized anyway */}
      <img
        src={project.image}
        alt={project.title[lang]}
        loading="lazy"
        className="aspect-video w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
}

function ProjectBody({ project, large = false }: { project: Project; large?: boolean }) {
  const { lang } = useLanguage();

  return (
    <>
      <h3 className={cn("font-semibold text-foreground", large ? "text-2xl" : "text-lg")}>
        {project.title[lang]}
      </h3>
      <p className={cn("mt-2 leading-relaxed text-muted-foreground", large ? "text-base" : "text-sm")}>
        {project.description[lang]}
      </p>

      <ul
        className={cn(
          "mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground",
          large && !project.image && "md:grid md:grid-cols-2 md:gap-x-8",
        )}
      >
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

      <div className="mt-6 flex flex-1 items-end gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex items-center gap-1.5 transition-colors",
              large
                ? "rounded-lg bg-accent px-4 py-2 font-medium text-background hover:opacity-90"
                : "text-foreground hover:text-accent",
            )}
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
            className={cn(
              "flex items-center gap-1.5 transition-colors",
              large
                ? "rounded-lg border border-border px-4 py-2 font-medium text-foreground hover:border-accent hover:text-accent"
                : "text-foreground hover:text-accent",
            )}
          >
            <Github size={14} />
            {translations.common.code[lang]}
          </a>
        )}
      </div>
    </>
  );
}
