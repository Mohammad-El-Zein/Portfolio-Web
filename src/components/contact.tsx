"use client";

import { Github, Mail, FileDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { personal, personalText } from "@/data/content";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { lang } = useLanguage();
  const t = translations.contact;

  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="05" title={translations.sectionTitles.contact[lang]} />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface p-8 text-center sm:p-12">
            <h3 className="text-balance text-2xl font-semibold sm:text-3xl">
              {t.heading[lang]}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-balance text-muted-foreground">
              {personalText.availability[lang]}. {t.body[lang]}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <Mail size={14} />
                {personal.email}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <FileDown size={14} />
                {t.resume[lang]}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
