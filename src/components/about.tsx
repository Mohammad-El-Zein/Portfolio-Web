"use client";

import { GraduationCap, Award } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certifications, education, languages } from "@/data/content";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { lang } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="01" title={translations.sectionTitles.about[lang]} />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-balance leading-relaxed text-muted-foreground">
              {t.paragraph1[lang]}
            </p>
            <p className="mt-4 text-balance leading-relaxed text-muted-foreground">
              {t.paragraph2[lang]}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 flex items-center gap-2 text-accent">
                <GraduationCap size={18} />
                <h3 className="font-semibold text-foreground">{t.educationHeading[lang]}</h3>
              </div>
              <p className="font-medium text-foreground">{education.degree[lang]}</p>
              <p className="text-sm text-muted-foreground">{education.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{education.detail[lang]}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">{t.bachelorThesisLabel[lang]} </span>
                {education.thesis[lang]}
              </p>

              <div className="mt-6 flex items-center gap-2 text-accent">
                <Award size={18} />
                <h3 className="font-semibold text-foreground">{t.certificationsHeading[lang]}</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-center justify-between gap-2">
                    <span>{cert.name}</span>
                    <span className="font-mono-accent text-xs text-accent">{cert.status[lang]}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {languages.map((langItem) => (
                  <span
                    key={langItem.name.de}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {langItem.name[lang]} · {langItem.level[lang]}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
