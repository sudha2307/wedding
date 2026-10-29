import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export type ParticleMode =
  | "preloader" // hearts + petals + gold sparkles
  | "hero" // petals + sparkles, gentle
  | "closing" // hearts + sparkles
  | "sparkles";

type Particle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  alpha: number;
  kind: "heart" | "petal" | "sparkle";
  phase: number;
};

const HEART = "rgba(232, 93, 142, ";
const PETAL = "rgba(240, 197, 212, ";
const GOLD = "rgba(201, 164, 106, ";

/**
 * One lightweight canvas for all decorative particles. Counts scale with
 * viewport size, the loop pauses when the page is hidden, and reduced-motion
 * users get a static (or empty) canvas.
 */
export function ParticleCanvas({
  mode,
  className,
}: {
  mode: ParticleMode;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let t = 0;
    const particles: Particle[] = [];

    const kinds: Particle["kind"][] =
      mode === "preloader"
        ? ["heart", "petal", "sparkle"]
        : mode === "hero"
          ? ["petal", "sparkle"]
          : mode === "closing"
            ? ["heart", "sparkle"]
            : ["sparkle"];

    const baseCounts: Record<Particle["kind"], number> = {
      heart: 10,
      petal: 14,
      sparkle: 16,
    };
    const areaScale = Math.min(1, Math.max(0.45, (window.innerWidth * window.innerHeight) / (1440 * 900)));
    const mobileScale = window.innerWidth < 640 ? 0.6 : 1;
    const perKind = mode === "preloader" ? 1 : 0.7;

    function spawn(p: Particle, initial: boolean) {
      p.x = Math.random() * width;
      p.y = initial ? Math.random() * height : -20 - Math.random() * 40;
      p.size =
        p.kind === "sparkle"
          ? 1.5 + Math.random() * 2.5
          : 6 + Math.random() * 10;
      p.vy =
        p.kind === "sparkle"
          ? 0.08 + Math.random() * 0.15
          : 0.25 + Math.random() * 0.5;
      p.vx = (Math.random() - 0.5) * 0.35;
      p.rot = Math.random() * Math.PI * 2;
      p.vr = (Math.random() - 0.5) * 0.02;
      p.alpha = 0.25 + Math.random() * 0.5;
      p.phase = Math.random() * Math.PI * 2;
      return p;
    }

    kinds.forEach((kind) => {
      const n = Math.round(baseCounts[kind] * perKind * areaScale * mobileScale);
      for (let i = 0; i < n; i++) {
        particles.push(spawn({ kind } as Particle, true));
      }
    });

    function resize() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function drawHeart(x: number, y: number, s: number, rot: number, color: string, alpha: number) {
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.rotate(rot);
      ctx!.scale(s / 16, s / 16);
      ctx!.beginPath();
      ctx!.moveTo(0, 5);
      ctx!.bezierCurveTo(0, 1, -3, -4, -8, -4);
      ctx!.bezierCurveTo(-14, -4, -14, 4, -14, 4);
      ctx!.bezierCurveTo(-14, 9, -8, 13, 0, 18);
      ctx!.bezierCurveTo(8, 13, 14, 9, 14, 4);
      ctx!.bezierCurveTo(14, 4, 14, -4, 8, -4);
      ctx!.bezierCurveTo(3, -4, 0, 1, 0, 5);
      ctx!.fillStyle = `${color}${alpha})`;
      ctx!.fill();
      ctx!.restore();
    }

    function drawPetal(x: number, y: number, s: number, rot: number, alpha: number) {
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.rotate(rot);
      ctx!.beginPath();
      ctx!.ellipse(0, 0, s / 2, s / 4.4, 0, 0, Math.PI * 2);
      ctx!.fillStyle = `${PETAL}${alpha})`;
      ctx!.fill();
      ctx!.restore();
    }

    function drawSparkle(x: number, y: number, s: number, alpha: number, phase: number) {
      const twinkle = 0.6 + 0.4 * Math.sin(t * 0.05 + phase);
      ctx!.save();
      ctx!.beginPath();
      ctx!.arc(x, y, s, 0, Math.PI * 2);
      ctx!.fillStyle = `${GOLD}${alpha * twinkle})`;
      ctx!.shadowColor = `${GOLD}${0.8 * twinkle})`;
      ctx!.shadowBlur = 8;
      ctx!.fill();
      ctx!.restore();
    }

    function frame() {
      if (!running) return;
      t += 1;
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(t * 0.01 + p.phase) * 0.3;
        p.rot += p.vr;
        if (p.y > height + 30) spawn(p, false);
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        if (p.kind === "heart") drawHeart(p.x, p.y, p.size, p.rot, HEART, p.alpha);
        else if (p.kind === "petal") drawPetal(p.x, p.y, p.size, p.rot, p.alpha);
        else drawSparkle(p.x, p.y, p.size, p.alpha, p.phase);
      }
      raf = window.requestAnimationFrame(frame);
    }
    frame();

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        window.cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        frame();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mode, reduced]);

  if (reduced) return null;
  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
