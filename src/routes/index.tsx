import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { HeroSection } from "@/components/Hero/HeroSection";
import { BlessingSection } from "@/components/Blessing/BlessingSection";
import { CoupleSection } from "@/components/Couple/CoupleSection";
import { CoupleScrollScene } from "@/components/ScrollStory/CoupleScrollScene";
import { WeddingDetails } from "@/components/WeddingDetails/WeddingDetails";
import { PhotoGallery } from "@/components/Gallery/PhotoGallery";
import { ClosingSection } from "@/components/Closing/ClosingSection";
import { LanguageToggle } from "@/components/Controls/LanguageToggle";
import { MusicToggle } from "@/components/Controls/MusicToggle";
import { ScrollProgress } from "@/components/Controls/ScrollProgress";
import { ParticleCanvas } from "@/components/Effects/ParticleCanvas";

export const Route = createFileRoute("/")({
  component: WeddingIndex,
});

function WeddingIndex() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-rose/20">
      {/* Cinematic Preloader */}
      <AnimatePresence mode="wait">
        {!opened && <Preloader key="preloader" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {/* Global Particle Canvas */}
      <ParticleCanvas
        mode={opened ? "hero" : "preloader"}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Controls */}
      <LanguageToggle />
      <MusicToggle />

      {/* Main Wedding Experience */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col"
      >
        <HeroSection />
        <BlessingSection />
        <CoupleSection />
        <CoupleScrollScene />
        <WeddingDetails />
        <PhotoGallery />
        <ClosingSection />
      </motion.main>
    </div>
  );
}
