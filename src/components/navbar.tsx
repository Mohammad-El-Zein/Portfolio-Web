"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/data/translations";

const sectionIds = ["top", "about", "experience", "projects", "skills", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { lang } = useLanguage();

  const links = [
    { id: "about", label: translations.nav.about[lang] },
    { id: "experience", label: translations.nav.experience[lang] },
    { id: "projects", label: translations.nav.projects[lang] },
    { id: "skills", label: translations.nav.skills[lang] },
    { id: "contact", label: translations.nav.contact[lang] },
  ];

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id === "top" ? null : `#${visible.target.id}`);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-1.5 text-base transition-opacity hover:opacity-80">
          <span className="font-medium text-foreground">Mohammad</span>
          <span className="font-bold text-accent">El Zein</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === `#${link.id}`;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative py-1 text-sm transition-colors"
                style={{ color: isActive ? "var(--accent)" : "var(--muted-foreground)" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-px left-0 h-0.5 rounded-full bg-accent transition-all duration-300"
                  style={{ width: isActive ? "100%" : "0%" }}
                />
              </a>
            );
          })}
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const isActive = active === `#${link.id}`;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="text-sm transition-colors"
                  style={{ color: isActive ? "var(--accent)" : "var(--muted-foreground)" }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
