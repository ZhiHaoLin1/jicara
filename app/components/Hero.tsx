"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 gap-10 items-center px-8 md:px-12 pt-28 pb-20 relative overflow-hidden">
      {/* Warm sunlight wash */}
      <div
        className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(196,154,40,0.16) 0%, transparent 65%)" }}
      />

      {/* Left: Text */}
      <div className="relative z-10">
        <motion.div {...anim(0.15)} className="flex items-center gap-4 mb-6">
          <span className="w-8 h-px bg-clay opacity-60" />
          <span className="font-dm text-[10px] tracking-[0.32em] uppercase text-clay">
            Taquería Oaxaqueña — Orlando, FL
          </span>
        </motion.div>

        <motion.h1
          {...anim(0.3)}
          className="font-fraunces font-black leading-[0.88] text-ink mb-8"
          style={{ fontSize: "clamp(80px, 14vw, 170px)" }}
        >
          J<span className="text-clay italic font-light">í</span>c<br />
          a<span className="text-clay italic font-light">r</span>a
        </motion.h1>

        <motion.p
          {...anim(0.5)}
          className="font-lora italic text-sepia text-lg leading-relaxed max-w-sm mb-9"
        >
          Hand-pressed tortillas. Wood-fired meats. Mezcal poured the way it was
          meant to be — from a gourd, slowly.
        </motion.p>

        <motion.div {...anim(0.7)} className="flex gap-4 flex-wrap">
          <a
            href="#menu"
            className="font-dm text-[11px] tracking-[0.2em] uppercase bg-clay text-straw px-7 py-3.5 border border-clay hover:bg-sienna hover:border-sienna transition-all"
          >
            View Menu
          </a>
          <a
            href="#reservations"
            className="font-dm text-[11px] tracking-[0.2em] uppercase text-ink px-7 py-3.5 border border-ink/30 hover:border-ink transition-all"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Right: Photo — desktop */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.45 }}
        className="hidden md:block relative"
      >
        <div className="relative w-full max-w-[480px] mx-auto">
          <div className="absolute bottom-[-14px] right-[-14px] left-[14px] top-[14px] border border-clay/30 z-0" />
          <div className="absolute top-[-8px] left-[-8px] w-8 h-8 border-t-2 border-l-2 border-clay opacity-60 z-10" />
          <div className="relative w-full aspect-[3/4] overflow-hidden z-10">
            <Image
              src="https://pub-a138722f99774b24bde1c2c94a389145.r2.dev/hero.jpeg"
              alt="Jícara taquería — wood-fired tacos Orlando FL"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Spinning badge */}
          <div className="absolute bottom-10 left-[-28px] w-24 h-24 bg-clay rounded-full flex items-center justify-center animate-spin-slow z-20">
            <div className="animate-counterspin flex flex-col items-center text-center gap-0.5">
              <span className="font-dm text-[8px] tracking-[0.18em] uppercase text-straw opacity-80">Est.</span>
              <span className="font-fraunces font-black text-xl text-straw leading-none">2024</span>
              <span className="font-dm text-[8px] tracking-[0.18em] uppercase text-straw opacity-80">Orlando</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile hero image */}
      <div className="md:hidden relative w-full aspect-[4/3] overflow-hidden mt-4">
        <Image
          src="https://pub-a138722f99774b24bde1c2c94a389145.r2.dev/hero.jpeg"
          alt="Jícara taquería — wood-fired tacos Orlando FL"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
