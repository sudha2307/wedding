import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Sparkles } from "lucide-react";
import { assets } from "@/config/wedding";
import { useLanguage } from "@/hooks/useLanguage";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { InvitationModal } from "./InvitationModal";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CoupleScrollScene() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const groomRef = useRef<HTMLDivElement>(null);
  const brideRef = useRef<HTMLDivElement>(null);
  const heartCenterRef = useRef<HTMLDivElement>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [hasReachedCenter, setHasReachedCenter] = useState(false);

  useEffect(() => {
    if (reduced || !containerRef.current || !groomRef.current || !brideRef.current) {
      setHasReachedCenter(true);
      return;
    }

    const container = containerRef.current;
    const groom = groomRef.current;
    const bride = brideRef.current;
    const heart = heartCenterRef.current;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 640;
      // On mobile, keep characters already visible on screen edges so it never looks empty
      const startGroomX = isMobile ? -36 : -70;
      const startBrideX = isMobile ? 36 : 70;

      gsap.set(groom, { xPercent: startGroomX, opacity: 1 });
      gsap.set(bride, { xPercent: startBrideX, opacity: 1 });
      if (heart) gsap.set(heart, { scale: 0, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: isMobile ? "+=65%" : "+=80%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.68) {
              setHasReachedCenter(true);
            } else {
              setHasReachedCenter(false);
            }
          },
        },
      });

      // Characters walk smoothly towards each other right from the start of the scroll
      tl.to(
        groom,
        {
          xPercent: isMobile ? -5 : -7,
          ease: "power1.inOut",
        },
        0
      )
        .to(
          bride,
          {
            xPercent: isMobile ? 5 : 7,
            ease: "power1.inOut",
          },
          0
        )
        // Background color shifts softly
        .to(
          container,
          {
            backgroundColor: "#FFF2F6",
            ease: "none",
          },
          0
        );

      // Heart center burst and characters meeting at center
      if (heart) {
        tl.to(
          heart,
          {
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "back.out(2)",
          },
          0.6
        );
      }

      tl.to(
        [groom, bride],
        {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.out",
        },
        0.65
      );
    }, container);

    return () => ctx.revert();
  }, [reduced]);

  const handleViewDetails = () => {
    const el = document.getElementById("wedding-details");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="scroll-story"
      className="relative flex min-h-[90vh] sm:min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-white px-4 py-8 sm:py-10 transition-colors duration-500 select-none"
    >
      {/* Ambient background decorative blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial from-rose/10 via-transparent to-transparent opacity-60"
      />

      {/* Header Info */}
      <div className="flex flex-col items-center gap-1 text-center px-4 z-20 pt-2">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose">
          {t.story.kicker}
        </span>
        <h2 className="font-serif text-2xl font-semibold tracking-wide text-wine sm:text-3xl md:text-4xl">
          {t.story.heading}
        </h2>
        <p className="text-xs tracking-wider text-muted-foreground">
          {t.story.subheading}
        </p>
      </div>

      {/* Walking Characters Stage */}
      <div className="relative flex h-[52vh] sm:h-[58vh] w-full max-w-4xl items-end justify-center pb-4">
        {/* Meeting Heart Burst / Golden Sparkles */}
        <div
          ref={heartCenterRef}
          aria-hidden="true"
          className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center pointer-events-none"
        >
          <div className="relative flex size-16 sm:size-18 items-center justify-center rounded-full bg-white/90 shadow-rose-soft border border-pink-border">
            <Heart className="size-8 fill-rose text-rose animate-pulse" />
            <Sparkles className="absolute -top-2.5 -right-2.5 size-5 text-gold animate-bounce" />
            <Sparkles className="absolute -bottom-2 -left-2.5 size-4 text-gold animate-pulse" />
          </div>
        </div>

        {/* Groom Character Illustration */}
        <div
          ref={groomRef}
          className="relative z-10 flex h-full max-h-[420px] w-auto items-end justify-center drop-shadow-md sm:max-h-[480px]"
        >
          <img
            src={assets.groomCharacter}
            alt={t.story.altGroom}
            className="h-full w-auto max-w-[240px] sm:max-w-[300px] object-contain object-top"
          />
        </div>

        {/* Bride Character Illustration */}
        <div
          ref={brideRef}
          className="relative z-10 flex h-full max-h-[420px] w-auto items-end justify-center drop-shadow-md sm:max-h-[480px]"
        >
          <img
            src={assets.brideCharacter}
            alt={t.story.altBride}
            className="h-full w-auto max-w-[240px] sm:max-w-[300px] object-contain object-top"
          />
        </div>
      </div>

      {/* Button to view invitation modal once characters meet */}
      <div className="z-30 flex flex-col items-center pb-2">
        {hasReachedCenter && (
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="animate-bounce rounded-full px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-white shadow-rose-soft transition hover:scale-105 active:scale-95"
            style={{ background: "var(--gradient-rose)" }}
          >
            {t.story.viewDetails}
          </button>
        )}
      </div>

      {/* Popup Invitation Modal */}
      <InvitationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onViewDetails={handleViewDetails}
      />
    </section>
  );
}
