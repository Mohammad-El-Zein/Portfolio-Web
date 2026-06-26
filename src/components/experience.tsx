"use client";

import { useEffect, useState } from "react";
import { Briefcase, Building2, ChevronDown, GraduationCap, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads a platform API unavailable during SSR
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <section id="experience" className="border-b border-border bg-surface-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="02" title={translations.sectionTitles.experience[lang]} />
        </Reveal>

        <div className="relative space-y-6 border-l border-border pl-8">
          {experience.map((item, i) => {
            const Icon = typeIcon[item.type];
            const isOpen = openIndex === i;

            return (
              <Reveal key={item.title.de + item.organization} delay={i * 0.08}>
                <button
                  type="button"
                  onClick={() => {
                    if (isTouch) setOpenIndex(isOpen ? null : i);
                  }}
                  onMouseEnter={() => {
                    if (!isTouch) setOpenIndex(i);
                  }}
                  onMouseLeave={() => {
                    if (!isTouch) setOpenIndex(null);
                  }}
                  aria-expanded={isOpen}
                  className="group relative block w-full rounded-xl border border-l-4 border-border bg-surface p-5 text-left transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-l-accent hover:shadow-[0_16px_40px_-18px_var(--accent-soft)]"
                >
                  <span className="absolute -left-[2.95rem] top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-background text-accent">
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

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                    {isTouch
                      ? translations.experience.expandHint[lang]
                      : translations.experience.hoverHint[lang]}
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
