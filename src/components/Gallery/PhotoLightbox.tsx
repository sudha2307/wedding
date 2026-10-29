import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryPhoto } from "@/config/assets";
import { useLanguage } from "@/hooks/useLanguage";

export function PhotoLightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  const currentPhoto = photos[currentIndex];
  if (!currentPhoto) return null;

  const caption = lang === "ta" ? currentPhoto.altTa : currentPhoto.alt;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.gallery.lightboxLabel}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
          />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label={t.gallery.close}
            className="absolute top-4 right-4 z-50 rounded-full bg-white/20 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="size-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label={t.gallery.prev}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label={t.gallery.next}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Image & Caption Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative z-40 flex max-h-[85vh] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-black/40 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={caption}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain drop-shadow-2xl"
            />
            <div className="mt-3 flex w-full flex-col items-center px-4 text-center">
              <p className="text-xs text-white/90 sm:text-sm font-medium">
                {caption}
              </p>
              <span className="mt-1 text-[11px] text-white/60">
                {currentIndex + 1} / {photos.length}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
