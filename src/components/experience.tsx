"use client";

import { useRef } from "react";
import { Briefcase, Building2, GraduationCap, type LucideIcon } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience, type ExperienceType } from "@/data/content";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";
import { toolIcon } from "@/lib/tool-icons";

const typeIcon: Record<ExperienceType, LucideIcon> = {
  job: Briefcase,
  education: GraduationCap,
  internship: Building2,
};

export function Experience() {
  const { lang } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  // The accent line grows down the timeline as the section scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="border-b border-border bg-surface-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="02" title={translations.sectionTitles.experience[lang]} />
        </Reveal>

        <div ref={timelineRef} className="relative space-y-6 pl-8">
          <div className="absolute left-0 top-0 h-full w-px bg-border" aria-hidden />
          <motion.div
            className="absolute left-0 top-0 h-full w-px origin-top bg-accent shadow-[0_0_8px_var(--accent)]"
            style={{ scaleY: lineProgress }}
            aria-hidden
          />

          {experience.map((item, i) => {
            const Icon = typeIcon[item.type];

            return (
              <Reveal key={item.title.de + item.organization} delay={i * 0.06}>
                <article className="group relative rounded-xl border border-l-4 border-border bg-surface p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-l-accent hover:shadow-[0_16px_40px_-18px_var(--accent-soft)]">
                  <span className="absolute -left-[2.95rem] top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-background text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={12} />
                  </span>

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title[lang]}
                      <span className="text-muted-foreground"> · {item.organization}</span>
                    </h3>
                    <span className="font-mono-accent text-xs text-accent">{item.period[lang]}</span>
                  </div>

                  {item.location && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {translations.experience.location[lang]}: {item.location[lang]}
                    </p>
                  )}

                  <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.bullets[lang].map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  {item.tools && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tools[lang].map((tool) => {
                        const ToolIcon = toolIcon(tool);
                        return (
                          <span
                            key={tool}
                            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent"
                          >
                            <ToolIcon size={12} />
                            {tool}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
