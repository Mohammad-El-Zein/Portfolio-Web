"use client";

import { useLanguage } from "@/lib/language-context";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border p-1 text-xs font-medium">
      {(["de", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className="rounded-md px-2 py-1 transition-colors"
          style={{
            color: lang === code ? "var(--background)" : "var(--muted-foreground)",
            background: lang === code ? "var(--accent)" : "transparent",
          }}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
