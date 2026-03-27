 "use client";

import { useEffect, useRef, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  size: number;
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateParticles = () => setShowParticles(mediaQuery.matches);

    updateParticles();

    const handleChange = (event: MediaQueryListEvent) => {
      setShowParticles(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (!showParticles) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };
    const particleCount = 80;
    let width = 0;
    let height = 0;
    let frameId = 0;

    const createParticle = (): Particle => {
      const direction = Math.random() * Math.PI * 2;
      const speed = 0.2 + Math.random() * 0.2;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(direction) * speed,
        vy: Math.sin(direction) * speed,
        baseVx: Math.cos(direction) * speed,
        baseVy: Math.sin(direction) * speed,
        size: 1.2 + Math.random() * 1.6,
      };
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      for (let index = 0; index < particleCount; index += 1) {
        particles.push(createParticle());
      }
    };

    const drawFrame = () => {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 150) {
          const force = ((150 - distance) / 150) * 0.045;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
        }

        particle.vx += (particle.baseVx - particle.vx) * 0.02;
        particle.vy += (particle.baseVy - particle.vy) * 0.02;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -24) particle.x = width + 24;
        if (particle.x > width + 24) particle.x = -24;
        if (particle.y < -24) particle.y = height + 24;
        if (particle.y > height + 24) particle.y = -24;

        context.beginPath();
        context.fillStyle = "rgba(232, 75, 26, 0.6)";
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }

      for (let source = 0; source < particles.length; source += 1) {
        for (let target = source + 1; target < particles.length; target += 1) {
          const particleA = particles[source];
          const particleB = particles[target];
          const distance = Math.hypot(
            particleA.x - particleB.x,
            particleA.y - particleB.y
          );

          if (distance > 135) {
            continue;
          }

          context.beginPath();
          context.strokeStyle = `rgba(232, 75, 26, ${
            ((135 - distance) / 135) * 0.08
          })`;
          context.lineWidth = 1;
          context.moveTo(particleA.x, particleA.y);
          context.lineTo(particleB.x, particleB.y);
          context.stroke();
        }
      }

      frameId = window.requestAnimationFrame(drawFrame);
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handlePointerLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frameId);
        return;
      }

      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(drawFrame);
    };

    resizeCanvas();
    frameId = window.requestAnimationFrame(drawFrame);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [showParticles]);

  return (
    <div className="relative isolate flex min-h-screen flex-col">
      {showParticles && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 hidden h-full w-full md:block"
        />
      )}

      <div className="pointer-events-none fixed inset-0 -z-10 md:hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 74% 22%, rgba(232, 75, 26, 0.16), transparent 0%), linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 42%)",
          }}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 right-[-8%] -z-10 hidden w-[44rem] md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle 400px at center, rgba(232, 75, 26, 0.06), transparent 72%)",
        }}
      />

      <main className="relative z-10 flex w-full flex-1 flex-col overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
