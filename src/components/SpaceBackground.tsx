"use client";

import { useEffect, useRef } from "react";
import { useMode } from "./mode";

type Star = { x: number; y: number; z: number; hue: number };

/** Warp-speed starfield + nebula + orbiting planets. Only mounted/animated in space mode. */
export default function SpaceBackground() {
  const mode = useMode();
  if (mode !== "space") return null;
  return <Scene />;
}

function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    const stars: Star[] = [];
    const COUNT = window.innerWidth < 640 ? 160 : 320;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const spawn = (s: Star, far = true) => {
      s.x = (Math.random() - 0.5) * w * 2;
      s.y = (Math.random() - 0.5) * h * 2;
      s.z = far ? w : Math.random() * w;
      s.hue = Math.random() < 0.15 ? 260 : Math.random() < 0.3 ? 210 : 0;
    };

    resize();
    for (let i = 0; i < COUNT; i++) {
      const s = { x: 0, y: 0, z: 0, hue: 0 };
      spawn(s, false);
      stars.push(s);
    }

    // Scroll gives a gentle warp boost
    let boost = 0;
    let lastY = window.scrollY;
    const onScroll = () => {
      boost = Math.min(boost + Math.abs(window.scrollY - lastY) * 0.04, 8);
      lastY = window.scrollY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const speed = reduced ? 0 : 1.2 + boost;
      boost *= 0.92;
      const cx = w / 2;
      const cy = h / 2;
      for (const s of stars) {
        const pz = s.z;
        s.z -= speed;
        if (s.z <= 1) {
          spawn(s);
          continue;
        }
        const k = 160 / s.z;
        const px = s.x * k + cx;
        const py = s.y * k + cy;
        if (px < 0 || px > w || py < 0 || py > h) {
          if (!reduced) spawn(s);
          continue;
        }
        const t = 1 - s.z / w;
        const size = Math.max(0.4, t * 2.4);
        const alpha = Math.min(1, t * 1.4);
        ctx.fillStyle = s.hue ? `hsla(${s.hue},90%,80%,${alpha})` : `rgba(255,255,255,${alpha})`;
        // streak when warping
        if (speed > 3) {
          const k0 = 160 / pz;
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = size;
          ctx.beginPath();
          ctx.moveTo(s.x * k0 + cx, s.y * k0 + cy);
          ctx.lineTo(px, py);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(px, py, size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="nebula" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="orbits">
        <div className="orbit orbit-1"><span className="planet planet-1" /></div>
        <div className="orbit orbit-2"><span className="planet planet-2" /></div>
        <div className="orbit orbit-3"><span className="planet planet-3" /></div>
      </div>
    </div>
  );
}
