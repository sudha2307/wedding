import { motion } from "framer-motion";
import { OrnamentalDivider } from "@/components/Effects/OrnamentalDivider";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Traditional Kolam / Lotus inspired SVG motif */
function KolamMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      className={`size-10 text-rose ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="30"
        cy="30"
        r="26"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="3 3"
        className="opacity-40"
      />
      <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="1" className="opacity-60" />
      <path
        d="M30 6 C35 18 42 25 54 30 C42 35 35 42 30 54 C25 42 18 35 6 30 C18 25 25 18 30 6 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="rgba(232, 93, 142, 0.05)"
      />
      <circle cx="30" cy="30" r="3" fill="currentColor" />
      <circle cx="30" cy="12" r="1.5" fill="currentColor" />
      <circle cx="30" cy="48" r="1.5" fill="currentColor" />
      <circle cx="12" cy="30" r="1.5" fill="currentColor" />
      <circle cx="48" cy="30" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function BlessingSection() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <section
      id="blessing-section"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-ivory px-4 py-10 sm:py-14 text-center sm:px-6 lg:px-8"
    >
      {/* Background soft ornamental flourish */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent"
      />

      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex max-w-3xl flex-col items-center gap-4"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose">
            {t.blessing.kicker}
          </span>
          <h2 className="font-serif text-2xl font-semibold tracking-wide text-wine sm:text-3xl md:text-4xl">
            {t.blessing.heading}
          </h2>
        </div>

        <KolamMotif />

        <p className="max-w-2xl font-serif text-base leading-relaxed text-charcoal/90 sm:text-lg md:text-xl">
          "{t.blessing.message}"
        </p>

        <OrnamentalDivider className="mt-2 scale-85" />
      </motion.div>
    </section>
  );
}
