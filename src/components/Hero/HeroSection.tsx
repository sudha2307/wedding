import { useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, Clock, Sparkles, Heart } from "lucide-react";
import { OrnamentalDivider } from "@/components/Effects/OrnamentalDivider";
import { StaggeredText } from "@/components/Effects/StaggeredText";
import { wedding } from "@/config/wedding";
import { useCountdown } from "@/hooks/useCountdown";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Spreading particle shower that bursts outward across the hero upon entering */
function HeroEntranceParticles() {
  const reduced = useReducedMotion();
  const particles = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => {
      const angle = (i / 36) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const distance = 100 + Math.random() * 420;
      const type = i % 3 === 0 ? "heart" : i % 3 === 1 ? "petal" : "sparkle";
      return {
        id: i,
        type,
        targetX: Math.cos(angle) * distance,
        targetY: Math.sin(angle) * distance * 0.8,
        scale: 0.6 + Math.random() * 1,
        duration: 2.8 + Math.random() * 1.6,
        delay: Math.random() * 0.35,
      };
    });
  }, []);

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0.9, 0],
            scale: [0, p.scale, p.scale * 1.15, 0.4],
            x: p.targetX,
            y: p.targetY + 50,
            rotate: [0, 200 + Math.random() * 160],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`absolute ${
            p.type === "heart"
              ? "text-rose"
              : p.type === "petal"
                ? "text-pink-border"
                : "text-gold"
          }`}
        >
          {p.type === "heart" ? (
            <Heart className="size-4 fill-current drop-shadow" />
          ) : p.type === "petal" ? (
            <div className="size-3.5 rounded-full bg-blush/90 border border-pink-border rotate-45 shadow-sm" />
          ) : (
            <Sparkles className="size-4 fill-current drop-shadow-sm" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

/** Floating ambient background heart */
function FloatingHeroHeart({
  className,
  delay = 0,
  size = 18,
}: {
  className: string;
  delay?: number;
  size?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 text-rose/30 ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: [0.25, 0.65, 0.25],
        y: [0, -16, 0],
        x: [0, 6, 0],
        rotate: [-6, 6, -6],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Heart style={{ width: size, height: size }} className="fill-current" />
    </motion.div>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-border/90 bg-white/95 shadow-rose-soft backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:h-18 sm:w-18 md:h-20 md:w-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-2 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <span className="font-serif text-xl font-bold tracking-tight text-wine sm:text-2xl md:text-3xl">
          {formatted}
        </span>
      </div>
      <span className="mt-1.5 text-[10px] font-bold tracking-widest uppercase text-muted-foreground sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function HeroSection() {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();
  const countdown = useCountdown(wedding.datetimeIso);

  // In the hero section, display couple names in English even when Tamil is selected
  const groomName = wedding.groom.name;
  const brideName = wedding.bride.name;
  const dateLabel = lang === "ta" ? wedding.dateLabelTa : wedding.dateLabel;
  const timeLabel = lang === "ta" ? wedding.muhurthamTa : wedding.muhurtham;

  const scrollToNext = () => {
    const el = document.getElementById("blessing-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative flex min-h-[92vh] sm:min-h-screen w-full flex-col items-center justify-between overflow-hidden px-4 py-8 sm:py-12 text-center sm:px-6 lg:px-8">
      {/* Dynamic spreading entrance particles */}
      <HeroEntranceParticles />

      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-blush/60 to-rose/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-6 -z-10 h-72 w-72 rounded-full bg-gold-soft/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-6 -z-10 h-72 w-72 rounded-full bg-blush/40 blur-3xl"
      />

      {/* Floating ambient hearts */}
      <FloatingHeroHeart className="top-16 left-[10%]" delay={0.2} size={16} />
      <FloatingHeroHeart className="top-24 right-[12%]" delay={1.4} size={20} />
      <FloatingHeroHeart className="bottom-32 left-[8%]" delay={2.1} size={18} />
      <FloatingHeroHeart className="bottom-24 right-[10%]" delay={0.8} size={22} />
      <FloatingHeroHeart className="top-1/2 left-[5%]" delay={2.8} size={14} />
      <FloatingHeroHeart className="top-1/2 right-[6%]" delay={1.9} size={15} />

      {/* Top Blessing */}
      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex max-w-2xl flex-col items-center gap-1.5 pt-2 sm:pt-4 z-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft/70 bg-white/85 px-4 py-1.5 shadow-sm backdrop-blur-sm">
          <Sparkles className="size-3 text-gold animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-gold sm:text-xs">
            {t.hero.blessing}
          </span>
          <Sparkles className="size-3 text-gold animate-pulse" />
        </div>
      </motion.div>

      {/* Central Hero Composition */}
      <div className="relative my-auto flex w-full max-w-3xl flex-col items-center py-4 sm:py-6 z-10">
        {/* Subtitle clearly visible with delicate divider */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center gap-2 mb-3 px-4"
        >
          <p className="font-serif text-base sm:text-lg italic font-medium text-wine/90 max-w-xl">
            "{t.hero.subtitle}"
          </p>
          <OrnamentalDivider className="scale-75 my-0.5 opacity-80" />
        </motion.div>

        {/* Couple Names */}
        <div className="flex flex-col items-center gap-1 my-1">
          <h1 className="sr-only">
            {groomName} {t.hero.weds} {brideName}
          </h1>

          <StaggeredText
            text={groomName}
            className="font-serif-en text-3xl font-bold tracking-[0.14em] text-wine sm:text-5xl md:text-6xl drop-shadow-sm"
            delay={0.4}
          />

          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="my-1 flex items-center gap-3 sm:gap-4"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-soft to-pink-border sm:w-20" />
            <div className="flex items-center gap-1.5">
              <Heart className="size-3.5 fill-rose text-rose animate-pulse" />
              <span className="font-script text-2xl font-normal text-rose sm:text-3xl md:text-4xl">
                {t.hero.weds}
              </span>
              <Heart className="size-3.5 fill-rose text-rose animate-pulse" />
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-gold-soft to-pink-border sm:w-20" />
          </motion.div>

          <StaggeredText
            text={brideName}
            className="font-serif-en text-3xl font-bold tracking-[0.14em] text-wine sm:text-5xl md:text-6xl drop-shadow-sm"
            delay={0.9}
          />
        </div>

        {/* Date and Muhurtham Badges */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-border bg-white/90 px-4 py-1.5 shadow-rose-soft backdrop-blur-sm sm:px-5 sm:py-2">
            <Calendar className="size-4 text-rose" />
            <span className="text-xs font-bold tracking-wider text-wine sm:text-sm">
              {dateLabel}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-sm sm:px-5 sm:py-2">
            <Clock className="size-4 text-gold" />
            <span className="text-xs font-semibold tracking-wide text-charcoal sm:text-sm">
              {timeLabel}
            </span>
          </div>
        </motion.div>

        {/* Live Countdown */}
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-5 sm:mt-6 flex flex-col items-center gap-2"
          aria-label={t.hero.countdownPrefix}
        >
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-rose/90">
            {countdown.isPast ? t.hero.countdownAfter : t.hero.countdownPrefix}
          </p>

          {!countdown.isPast ? (
            <div className="flex items-center gap-2 sm:gap-3.5">
              <CountdownUnit value={countdown.days} label={t.hero.days} />
              <span className="mb-5 font-serif text-lg font-bold text-rose/70 sm:text-xl">
                :
              </span>
              <CountdownUnit value={countdown.hours} label={t.hero.hours} />
              <span className="mb-5 font-serif text-lg font-bold text-rose/70 sm:text-xl">
                :
              </span>
              <CountdownUnit value={countdown.minutes} label={t.hero.minutes} />
              <span className="mb-5 font-serif text-lg font-bold text-rose/70 sm:text-xl">
                :
              </span>
              <CountdownUnit value={countdown.seconds} label={t.hero.seconds} />
            </div>
          ) : (
            <p className="font-serif text-base italic text-rose">
              {t.hero.countdownAfterSub}
            </p>
          )}
        </motion.div>

        {/* Short invitation quote */}
        <motion.p
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="mt-3 max-w-md px-4 font-serif text-xs italic text-charcoal/80 sm:text-sm"
        >
          "{t.hero.inviteMessage}"
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        type="button"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.7 }}
        aria-label={t.hero.scrollDown}
        className="group flex flex-col items-center gap-1 pb-1 text-[11px] font-bold tracking-widest uppercase text-muted-foreground transition hover:text-rose focus-visible:ring-2 z-10"
      >
        <span>{t.hero.scrollDown}</span>
        <motion.div
          animate={reduced ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4 text-rose transition group-hover:translate-y-0.5" />
        </motion.div>
      </motion.button>
    </header>
  );
}
