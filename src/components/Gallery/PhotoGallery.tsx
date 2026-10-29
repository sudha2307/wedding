import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { OrnamentalDivider } from "@/components/Effects/OrnamentalDivider";
import { assets } from "@/config/wedding";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { PhotoLightbox } from "./PhotoLightbox";

export function PhotoGallery() {
  const { t, lang } = useLanguage();
  const reduced = useReducedMotion();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = assets.gallery;

  const openPhoto = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section
      id="photo-gallery"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Decorative ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-blush/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-0 -z-10 h-80 w-80 rounded-full bg-gold-soft/15 blur-3xl"
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
          {t.gallery.kicker}
        </span>
        <h2 className="font-serif text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          {t.gallery.heading}
        </h2>
        <OrnamentalDivider className="mt-1 scale-90" />
      </motion.div>

      {/* Uniform Rectangular Gallery Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-5 lg:gap-6">
          {photos.map((photo, index) => {
            const caption = lang === "ta" ? photo.altTa : photo.alt;

            return (
              <motion.div
                key={photo.src}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                onClick={() => openPhoto(index)}
                className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl border border-pink-border/80 bg-white shadow-sm transition-all duration-300 hover:border-rose/70 hover:shadow-rose-soft hover:scale-[1.02]"
              >
                <img
                  src={photo.src}
                  alt={caption}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106"
                />

                {/* Subtle vignette and caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-wine/75 via-wine/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-3.5 bottom-3.5 flex items-end justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="line-clamp-2 text-xs font-medium text-white drop-shadow">
                    {caption}
                  </p>
                  <div className="ml-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm">
                    <Maximize2 className="size-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-screen Lightbox Modal */}
      <PhotoLightbox
        photos={photos}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={prevPhoto}
        onNext={nextPhoto}
      />
    </section>
  );
}
