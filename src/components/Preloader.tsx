import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { ParticleCanvas } from "@/components/Effects/ParticleCanvas";
import { StaggeredText } from "@/components/Effects/StaggeredText";
import { wedding } from "@/config/wedding";
import { startBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Random burst of hearts fired when the invitation opens. */
function HeartBurst() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => {
        const angle = (i / 24) * Math.PI * 2 + Math.random() * 0.4;
        const dist = 140 + Math.random() * 260;
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          scale: 0.6 + Math.random() * 1.3,
          delay: Math.random() * 0.15,
        };
      }),
    []
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center z-50">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          initial={{ opacity: 0.95, scale: h.scale, x: 0, y: 0 }}
          animate={{ opacity: 0, x: h.x, y: h.y, scale: h.scale * 1.4 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: h.delay }}
          className="absolute text-rose drop-shadow"
        >
          <Heart className="size-4 fill-current" />
        </motion.span>
      ))}
    </div>
  );
}

function CoupleName({ text }: { text: string }) {
  return (
    <StaggeredText
      text={text}
      className="font-serif-en text-2xl font-semibold tracking-[0.16em] text-wine sm:text-3xl"
      delay={0.7}
    />
  );
}

/**
 * Cinematic preloader: white→blush gradient, floating particles, circular
 * couple portrait featuring photo-11 with a rotating ornamental ring, staggered names,
 * pulsing heart loading animation and the Open Invitation button.
 */
export function Preloader({ onOpen }: { onOpen: () => void }) {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(6);
  const [ready, setReady] = useState(false);
  const [burst, setBurst] = useState(false);

  const preloaderPhoto = "/gallery/preloader-couple.jpg";

  // Track real essential-asset readiness (portrait image + web fonts).
  useEffect(() => {
    let cancelled = false;
    let pending = 2;
    const settle = () => {
      if (--pending === 0 && !cancelled) setReady(true);
    };
    const img = new Image();
    img.onload = settle;
    img.onerror = settle;
    img.src = preloaderPhoto;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(settle).catch(settle);
    } else {
      settle();
    }
    return () => {
      cancelled = true;
    };
  }, [preloaderPhoto]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => {
        const target = ready ? 100 : 88;
        const next = p + (target - p) * (ready ? 0.22 : 0.045) + 0.35;
        return Math.min(target, next);
      });
    }, 60);
    return () => window.clearInterval(id);
  }, [ready]);

  const handleOpen = async () => {
    if (burst) return;
    setBurst(true);
    await startBackgroundMusic(); // user gesture — reliable autoplay window
    setTimeout(() => {
      onOpen();
    }, 450);
  };

  const groomName = wedding.groom.name;
  const brideName = wedding.bride.name;
  const readyToShow = progress >= 100;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(175deg, #ffffff 0%, #FFF9F7 55%, #F8D7E3 140%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={
        reduced
          ? { opacity: 0, transition: { duration: 0.3 } }
          : { opacity: 0, scale: 1.07, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
      }
      role="dialog"
      aria-label={t.preloader.loading}
    >
      <ParticleCanvas mode="preloader" className="absolute inset-0 h-full w-full" />
      {burst && <HeartBurst />}

      <div className="relative flex flex-col items-center gap-4 px-6 text-center z-10">
        {/* Circular Couple Photo Frame (photo-11) */}
        <motion.div
          className="relative size-56 sm:size-64"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          {/* Rotating ornamental ring */}
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute -inset-2.5 text-gold"
            animate={{ rotate: reduced ? 0 : 360 }}
            transition={{ duration: 32, ease: "linear", repeat: Infinity }}
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="2 5"
              strokeLinecap="round"
            />
            <circle cx="50" cy="2" r="2" fill="currentColor" className="text-rose" />
            <circle cx="50" cy="98" r="2" fill="currentColor" className="text-rose" />
            <circle cx="2" cy="50" r="1.5" fill="currentColor" className="text-gold" />
            <circle cx="98" cy="50" r="1.5" fill="currentColor" className="text-gold" />
          </motion.svg>

          {/* Photo Circle Container */}
          <div className="absolute inset-0 rounded-full border-2 border-pink-border bg-white p-1.5 shadow-rose-soft overflow-hidden">
            <img
              src={preloaderPhoto}
              alt="Praveen & Malini"
              className="h-full w-full rounded-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Couple Names */}
        <div className="flex flex-col items-center gap-1">
          <CoupleName text={groomName} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <Heart className="size-3 fill-rose text-rose animate-pulse" />
            <span className="font-script-en text-2xl text-rose">
              {t.hero.weds}
            </span>
            <Heart className="size-3 fill-rose text-rose animate-pulse" />
          </motion.div>
          <CoupleName text={brideName} />
        </div>

        {/* Animated Loading Progress with Heart Animation */}
        <div className="mt-2 flex w-60 flex-col items-center gap-2 sm:w-72" aria-live="polite">
          {/* Beating Heart Loading Indicator */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={
                reduced
                  ? {}
                  : {
                      scale: [1, 1.3, 1, 1.25, 1],
                    }
              }
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-rose"
            >
              <Heart className="size-4 fill-current drop-shadow-sm" />
            </motion.div>
            <span className="text-xs font-bold tracking-widest text-wine/90">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress Track */}
          <div
            className="relative h-2 w-full overflow-hidden rounded-full bg-blush/80 p-0.5 shadow-inner"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <motion.div
              className="relative h-full rounded-full"
              style={{ background: "var(--gradient-rose)" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              {/* Little floating heart particle at the leading edge */}
              <motion.div
                animate={reduced ? {} : { scale: [1, 1.25, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="absolute -right-1 -top-0.5 size-3 rounded-full bg-white text-rose flex items-center justify-center shadow-sm"
              >
                <Heart className="size-2 fill-current" />
              </motion.div>
            </motion.div>
          </div>

          <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground">
            {t.preloader.loading}
          </span>
        </div>

        {/* Open Invitation CTA */}
        {readyToShow && (
          <motion.button
            type="button"
            onClick={handleOpen}
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: reduced ? 1 : 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-bold tracking-[0.16em] uppercase text-white shadow-rose-soft transition hover:shadow-lg"
            style={{ background: "var(--gradient-rose)" }}
          >
            <Sparkles className="size-3.5 text-white animate-pulse" />
            <span>{t.preloader.openInvitation}</span>
            <Sparkles className="size-3.5 text-white animate-pulse" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
