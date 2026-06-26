"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Home, X } from "lucide-react";
import { useEffect } from "react";
import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/language-context";

export function AboutStoryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const story = translations.about.story;

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-stretch justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex h-full w-full max-w-3xl flex-col bg-surface shadow-2xl md:my-6 md:h-[calc(100%-3rem)] md:rounded-2xl md:border md:border-border"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
              <h2 className="text-lg font-semibold text-foreground">{story.title[lang]}</h2>
              <button
                type="button"
                onClick={onClose}
                aria-label={translations.about.close[lang]}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="mx-auto max-w-2xl space-y-5 text-balance leading-relaxed text-muted-foreground">
                {story.intro[lang].map((paragraph, i) => (
                  <p key={`intro-${i}`}>{paragraph}</p>
                ))}

                {story.sections[lang].map((section) => (
                  <div key={section.heading}>
                    <h3 className="mb-2 mt-6 font-semibold text-foreground">{section.heading}</h3>
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}

                <p className="mt-6 font-medium text-foreground">{story.closing[lang]}</p>
              </div>
            </div>

            <div className="border-t border-border px-6 py-4">
              <a
                href="#top"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Home size={16} />
                {translations.about.backHome[lang]}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
