"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/content";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";

export function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="border-b border-border bg-surface-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <SectionHeading index="04" title={translations.sectionTitles.skills[lang]} />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category.de} delay={i * 0.1}>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="font-mono-accent text-sm text-accent">{group.category[lang]}</h3>
                <motion.div
                  className="mt-4 flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06, delayChildren: i * 0.1 } },
                  }}
                >
                  {group.items.map((item, idx) => (
                    <motion.span
                      key={item}
                      variants={{
                        hidden: { opacity: 0, y: 10, scale: 0.9 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      whileHover={{ y: -3, borderColor: "var(--accent)", color: "var(--accent)" }}
                      style={{
                        animation: `float-bubble ${3 + (idx % 3)}s ease-in-out infinite`,
                        animationDelay: `${idx * 0.15}s`,
                      }}
                      className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
