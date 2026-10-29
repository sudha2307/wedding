import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { OrnamentalDivider } from "@/components/Effects/OrnamentalDivider";
import { assets, wedding } from "@/config/wedding";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CoupleSection() {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();

  const groomName = lang === "ta" ? wedding.groom.nameTa : wedding.groom.name;
  const brideName = lang === "ta" ? wedding.bride.nameTa : wedding.bride.name;

  return (
    <section
      id="couple-section"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-8 left-1/4 -z-10 h-72 w-72 rounded-full bg-blush/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-1/4 -z-10 h-72 w-72 rounded-full bg-gold-soft/20 blur-3xl"
      />

      {/* Heading */}
      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-8 flex flex-col items-center gap-1.5 text-center"
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose">
          {t.couple.kicker}
        </span>
        <h2 className="font-serif text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          {t.couple.heading}
        </h2>
        <OrnamentalDivider className="mt-1 scale-90" />
      </motion.div>

      {/* Portraits Grid */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 md:flex-row md:gap-10 lg:gap-14">
        {/* Groom Card */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group flex w-full max-w-xs sm:max-w-sm flex-col items-center text-center"
        >
          <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-pink-border/80 bg-white shadow-rose-soft transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <img
              src={assets.groomPortrait}
              alt={t.couple.altGroom}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Top decorative badge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/85 border border-gold-soft/50 shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="size-3.5 text-gold" />
            </div>
            {/* Subtle bottom gradient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-wine/30 to-transparent"
            />
          </div>

          <span className="font-serif text-2xl font-semibold tracking-wide text-wine sm:text-3xl">
            {groomName}
          </span>
          <span className="mt-0.5 text-xs font-semibold tracking-[0.2em] uppercase text-rose">
            {t.couple.groomCaption}
          </span>
        </motion.div>

        {/* Center Heart / Ampersand Flourish */}
        <div className="relative flex flex-col items-center justify-center my-1 md:my-0">
          <motion.div
            initial={reduced ? { scale: 1 } : { scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex size-12 items-center justify-center rounded-full border border-pink-border bg-white shadow-rose-soft backdrop-blur-sm sm:size-14"
          >
            <Heart className="size-5 fill-rose text-rose transition-transform hover:scale-110" />
          </motion.div>
          <span className="mt-1 font-script text-2xl text-gold sm:text-3xl">
            &amp;
          </span>
        </div>

        {/* Bride Card */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="group flex w-full max-w-xs sm:max-w-sm flex-col items-center text-center"
        >
          <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-pink-border/80 bg-white shadow-rose-soft transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <img
              src={assets.bridePortrait}
              alt={t.couple.altBride}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Top decorative badge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-3 left-3 flex size-7 items-center justify-center rounded-full bg-white/85 border border-gold-soft/50 shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="size-3.5 text-gold" />
            </div>
            {/* Subtle bottom gradient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-wine/30 to-transparent"
            />
          </div>

          <span className="font-serif text-2xl font-semibold tracking-wide text-wine sm:text-3xl">
            {brideName}
          </span>
          <span className="mt-0.5 text-xs font-semibold tracking-[0.2em] uppercase text-rose">
            {t.couple.brideCaption}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
