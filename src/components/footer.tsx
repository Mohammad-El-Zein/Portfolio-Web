"use client";

import { personal } from "@/data/content";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="font-mono-accent">{translations.footer.builtWith[lang]}</p>
      </div>
    </footer>
  );
}
