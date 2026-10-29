import { useEffect, useState } from "react";
import { ChevronUp, Volume2, VolumeX } from "lucide-react";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { useLanguage } from "@/hooks/useLanguage";

/** Floating music toggle (bottom-right) and scroll-to-top above it. */
export function MusicToggle() {
  const { playing, muted, available, togglePlay, toggleMute } = useBackgroundMusic();
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const musicLabel = playing ? t.controls.pauseMusic : t.controls.playMusic;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-2 sm:bottom-5 sm:right-5">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.controls.scrollTop}
          className="grid size-11 place-items-center rounded-full border border-pink-border bg-white/85 text-wine shadow-rose-soft backdrop-blur transition hover:bg-blush/70"
        >
          <ChevronUp className="size-5" aria-hidden="true" />
        </button>
      )}

      <div
        className={playing ? "relative rounded-full ring-2 ring-rose/40 ring-offset-2 ring-offset-white transition" : "relative rounded-full transition"}
      >
        <button
          type="button"
          onClick={togglePlay}
          onDoubleClick={toggleMute}
          disabled={!available}
          aria-label={musicLabel}
          title={available ? undefined : t.controls.musicUnavailable}
          className={`grid size-12 place-items-center rounded-full border border-pink-border bg-white/85 text-rose shadow-rose-soft backdrop-blur transition hover:bg-blush/70 ${
            available ? "" : "opacity-50"
          }`}
        >
          {muted || !available ? (
            <VolumeX className="size-5" aria-hidden="true" />
          ) : (
            <Volume2 className="size-5" aria-hidden="true" />
          )}
        </button>
        {playing && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 animate-ping rounded-full border border-rose/30"
          />
        )}
      </div>
    </div>
  );
}
