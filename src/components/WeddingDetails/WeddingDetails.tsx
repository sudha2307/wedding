import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink, Heart, Sparkles } from "lucide-react";
import { OrnamentalDivider } from "@/components/Effects/OrnamentalDivider";
import { wedding } from "@/config/wedding";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WeddingDetails() {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();

  const groomName = lang === "ta" ? wedding.groom.nameTa : wedding.groom.name;
  const brideName = lang === "ta" ? wedding.bride.nameTa : wedding.bride.name;
  const dateLabel = lang === "ta" ? wedding.dateLabelTa : wedding.dateLabel;
  const timeLabel = lang === "ta" ? wedding.muhurthamTa : wedding.muhurtham;
  const venueName = lang === "ta" ? wedding.venue.nameTa : wedding.venue.name;

  const handleGetDirections = () => {
    if (wedding.venue.mapsUrl) {
      window.open(wedding.venue.mapsUrl, "_blank", "noopener,noreferrer");
    } else {
      alert(t.details.directionsUnavailable);
    }
  };

  return (
    <section
      id="wedding-details"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-ivory px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Decorative ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blush/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 -z-10 h-64 w-64 rounded-full bg-gold-soft/15 blur-3xl"
      />

      {/* Header */}
      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-8 flex flex-col items-center gap-1.5 text-center"
      >
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose">
          {t.details.kicker}
        </span>
        <h2 className="font-serif text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          {t.details.heading}
        </h2>
        <OrnamentalDivider className="mt-1 scale-90" />
      </motion.div>

      {/* Editorial Content Card */}
      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border-2 border-pink-border bg-white/90 p-5 shadow-rose-soft backdrop-blur-md sm:p-8 md:p-10"
      >
        {/* Subtle decorative gold corner flourishes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full border border-gold-soft/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rounded-full border border-pink-border"
        />

        {/* Couple Title Banner */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            <Sparkles className="size-3 text-gold" />
            <span>{t.blessing.heading}</span>
            <Sparkles className="size-3 text-gold" />
          </div>

          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2.5">
            <span className="font-serif text-2xl font-bold text-wine sm:text-3xl">
              {groomName}
            </span>
            <div className="flex size-7 items-center justify-center rounded-full bg-blush/60 text-rose">
              <Heart className="size-3.5 fill-current" />
            </div>
            <span className="font-serif text-2xl font-bold text-wine sm:text-3xl">
              {brideName}
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {/* Date Card */}
          <div className="flex flex-col items-center rounded-2xl border border-pink-border/60 bg-gradient-to-b from-white to-blush/20 p-5 text-center transition-all duration-300 hover:border-rose/50 hover:shadow-md">
            <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-blush/70 text-rose">
              <Calendar className="size-5" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground">
              {t.details.date}
            </span>
            <span className="mt-1.5 font-serif text-lg font-bold text-wine sm:text-xl">
              {dateLabel}
            </span>
            <span className="mt-0.5 text-xs text-charcoal/70">Sunday / ஞாயிறு</span>
          </div>

          {/* Time & Muhurtham Card */}
          <div className="flex flex-col items-center rounded-2xl border border-gold-soft/60 bg-gradient-to-b from-white to-gold-soft/10 p-5 text-center transition-all duration-300 hover:border-gold hover:shadow-md">
            <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-gold-soft/30 text-gold">
              <Clock className="size-5" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground">
              {t.details.time}
            </span>
            <span className="mt-1.5 font-serif text-lg font-bold text-wine sm:text-xl">
              {timeLabel}
            </span>
            <span className="mt-0.5 text-[11px] italic text-charcoal/60">
              {t.details.timeNote}
            </span>
          </div>

          {/* Venue Card */}
          <div className="flex flex-col items-center rounded-2xl border border-pink-border/60 bg-gradient-to-b from-white to-blush/20 p-5 text-center transition-all duration-300 hover:border-rose/50 hover:shadow-md">
            <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-blush/70 text-rose">
              <MapPin className="size-5" />
            </div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground">
              {t.details.venue}
            </span>
            <span className="mt-1.5 font-serif text-lg font-bold text-wine sm:text-xl">
              {venueName}
            </span>
            <span className="mt-0.5 text-xs text-charcoal/70">
              {t.details.venueAddress}
            </span>
          </div>
        </div>

        {/* Directions CTA */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={handleGetDirections}
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold tracking-widest uppercase text-white shadow-rose-soft transition hover:scale-105 active:scale-95"
            style={{ background: "var(--gradient-rose)" }}
          >
            <span>{t.details.getDirections}</span>
            <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
