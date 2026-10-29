import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { en, type Dictionary } from "@/i18n/en";
import { ta } from "@/i18n/ta";

export type Lang = "en" | "ta";

const dictionaries: Record<Lang, Dictionary> = { en, ta };

type LanguageContextValue = {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.classList.toggle("lang-ta", lang === "ta");
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState((current) => {
      if (current === next) return current;
      const root = document.documentElement;
      root.classList.add("lang-fading");
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => root.classList.remove("lang-fading"), 450);
      return next;
    });
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((current) => {
      const next: Lang = current === "en" ? "ta" : "en";
      const root = document.documentElement;
      root.classList.add("lang-fading");
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => root.classList.remove("lang-fading"), 450);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, t: dictionaries[lang], setLang, toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

/** Picks the right name/date string for the current language. */
export function useLocalized() {
  const { lang } = useLanguage();
  return lang === "en"
    ? { isTa: false }
    : { isTa: true };
}
