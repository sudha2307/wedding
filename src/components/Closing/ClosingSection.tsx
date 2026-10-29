import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, Check, Sparkles } from "lucide-react";
import { OrnamentalDivider } from "@/components/Effects/OrnamentalDivider";
import { wedding } from "@/config/wedding";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ClosingSection() {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const groomName = lang === "ta" ? wedding.groom.nameTa : wedding.groom.name;
  const brideName = lang === "ta" ? wedding.bride.nameTa : wedding.bride.name;
  const dateLabel = lang === "ta" ? wedding.dateLabelTa : wedding.dateLabel;

  const handleShare = async () => {
    const shareData = {
      title: wedding.share.title,
      text: wedding.share.text,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share dialog
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (e) {
        // Clipboard failed fallback
      }
    }
  };

  const scrollToDetails = () => {
    const el = document.getElementById("wedding-details");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-ivory px-4 py-14 sm:py-18 text-center sm:px-6 lg:px-8">
      {/* Decorative ambient glowing accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blush/50 blur-3xl"
      />

      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex max-w-3xl flex-col items-center gap-4"
      >
        <div className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-gold">
          <Sparkles className="size-3 text-gold animate-pulse" />
          <span>{wedding.dateLabel}</span>
          <Sparkles className="size-3 text-gold animate-pulse" />
        </div>

        <h2 className="font-serif text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          {t.closing.heading}
        </h2>

        <OrnamentalDivider className="scale-85" />

        <p className="max-w-xl font-serif text-base italic text-charcoal/80 sm:text-lg">
          "{t.closing.message}"
        </p>

        {/* Couple Signature Monogram */}
        <div className="my-2 flex flex-col items-center gap-1.5">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="font-serif text-2xl font-bold text-wine sm:text-3xl">
              {groomName}
            </span>
            <div className="flex size-6 items-center justify-center rounded-full bg-blush/70 text-rose">
              <Heart className="size-3.5 fill-current" />
            </div>
            <span className="font-serif text-2xl font-bold text-wine sm:text-3xl">
              {brideName}
            </span>
          </div>

          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-rose">
            {dateLabel}
          </span>
        </div>

        {/* Action Controls */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollToDetails}
            className="rounded-full border border-pink-border bg-white/80 px-6 py-2.5 text-xs font-semibold tracking-wider text-wine shadow-sm transition hover:bg-white hover:shadow-rose-soft active:scale-95"
          >
            {t.closing.viewDetails}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-xs font-bold tracking-widest uppercase text-white shadow-rose-soft transition hover:scale-105 active:scale-95"
            style={{ background: "var(--gradient-rose)" }}
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-white" />
                <span>{t.closing.copied}</span>
              </>
            ) : (
              <>
                <Share2 className="size-3.5 text-white" />
                <span>{t.closing.share}</span>
              </>
            )}
          </button>
        </div>

        {/* Tiny footer copyright note */}
        <div className="mt-8 text-[11px] tracking-widest text-muted-foreground/70 uppercase">
          Praveen &amp; Malini · Wedding Invitation · 2026
        </div>
      </motion.div>
    </footer>
  );
}
