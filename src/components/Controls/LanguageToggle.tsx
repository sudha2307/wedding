import { Languages } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

/** Floating language pill, attached to the top-right edge. */
export function LanguageToggle() {
  const { lang, t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.switchLanguage}
      className="fixed right-3 top-3 z-40 flex items-center gap-2 rounded-full border border-pink-border bg-white/85 px-3.5 py-2 text-sm font-medium text-wine shadow-rose-soft backdrop-blur transition hover:bg-blush/70 sm:right-4 sm:top-4"
    >
      <Languages className="size-4 text-rose" aria-hidden="true" />
      <span>{lang === "en" ? t.otherLangLabel : t.otherLangLabel}</span>
      <span className="sr-only">({t.langLabel})</span>
    </button>
  );
}
