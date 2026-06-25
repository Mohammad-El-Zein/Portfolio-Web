"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personal, personalText } from "@/data/content";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";
import { BASE_PATH } from "@/lib/base-path";
import { TypingTitles } from "@/components/typing-titles";

export function Hero() {
  const { lang } = useLanguage();
  const t = translations.hero;

  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto flex min-h-[88vh] max-w-5xl flex-col-reverse items-center justify-center gap-12 px-6 py-24 md:flex-row md:justify-between">
        <div className="flex max-w-2xl flex-col md:flex-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono-accent mb-4 flex items-center gap-2 text-sm text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {personalText.availability[lang]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 h-7 text-lg font-medium sm:text-xl"
          >
            <TypingTitles />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
          >
            {t.introLead[lang]}{" "}
            {t.introItems[lang].map((item, i) => (
              <span key={item}>
                <span className="text-foreground">{item}</span>
                {i < t.introItems[lang].length - 2 && ", "}
                {i === t.introItems[lang].length - 2 && ` ${t.introJoiner[lang]} `}
              </span>
            ))}
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin size={14} />
            {personalText.location[lang]}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t.viewProjects[lang]}
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={14} />
              {t.contact[lang]}
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
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent md:flex"
          >
            <ArrowDown size={14} className="animate-bounce" />
            {t.moreInfo[lang]}
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="photo-frame"
        >
          <div className="photo-spin-ring" />
          <div className="photo-spin-ring-outer" />
          <Image
            src={`${BASE_PATH}/images/profile.jpg`}
            alt={personal.name}
            width={320}
            height={320}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
