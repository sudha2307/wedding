import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, Sparkles, Heart } from "lucide-react";
import { wedding } from "@/config/wedding";
import { useLanguage } from "@/hooks/useLanguage";

export function InvitationModal({
  isOpen,
  onClose,
  onViewDetails,
}: {
  isOpen: boolean;
  onClose: () => void;
  onViewDetails: () => void;
}) {
  const { t, lang } = useLanguage();

  const groomName = lang === "ta" ? wedding.groom.nameTa : wedding.groom.name;
  const brideName = lang === "ta" ? wedding.bride.nameTa : wedding.bride.name;
  const dateLabel = lang === "ta" ? wedding.dateLabelTa : wedding.dateLabel;
  const timeLabel = lang === "ta" ? wedding.muhurthamTa : wedding.muhurtham;
  const venueName = lang === "ta" ? wedding.venue.nameTa : wedding.venue.name;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="invitation-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-wine/30 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border-2 border-pink-border bg-white p-6 shadow-2xl sm:p-8 text-center"
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label={t.story.close}
              className="absolute top-4 right-4 rounded-full p-2 text-charcoal/60 hover:bg-blush/40 hover:text-wine transition focus-visible:ring-2 focus-visible:ring-rose"
            >
              <X className="size-5" />
            </button>

            {/* Decorative background glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -left-16 h-36 w-36 rounded-full bg-blush/60 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-gold-soft/30 blur-2xl"
            />

            {/* Traditional blessing note */}
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              <Sparkles className="size-3 text-gold" />
              <span>{t.story.popupBlessing}</span>
              <Sparkles className="size-3 text-gold" />
            </div>

            {/* Names */}
            <div className="mt-4 mb-2">
              <h3
                id="invitation-modal-title"
                className="font-serif text-3xl font-semibold tracking-wide text-wine sm:text-4xl"
              >
                {groomName}
              </h3>
              <div className="my-1 flex items-center justify-center gap-2">
                <Heart className="size-4 fill-rose text-rose" />
                <span className="font-script text-2xl text-rose">{t.hero.weds}</span>
                <Heart className="size-4 fill-rose text-rose" />
              </div>
              <h3 className="font-serif text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
                {brideName}
              </h3>
            </div>

            {/* Info Badges */}
            <div className="mt-6 flex flex-col gap-2.5 rounded-2xl border border-pink-border/60 bg-ivory/60 p-4 text-left sm:text-center">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-charcoal">
                <Calendar className="size-4 shrink-0 text-rose" />
                <span>{dateLabel}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-charcoal">
                <Clock className="size-4 shrink-0 text-gold" />
                <span>{timeLabel}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-charcoal">
                <MapPin className="size-4 shrink-0 text-rose" />
                <span className="truncate">{venueName}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onViewDetails();
                }}
                className="w-full sm:w-auto rounded-full px-6 py-3 text-xs font-bold tracking-widest uppercase text-white shadow-rose-soft transition hover:scale-105 active:scale-95"
                style={{ background: "var(--gradient-rose)" }}
              >
                {t.story.viewDetails}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto rounded-full border border-pink-border px-6 py-3 text-xs font-semibold tracking-wider text-charcoal hover:bg-blush/30 transition"
              >
                {t.story.close}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
