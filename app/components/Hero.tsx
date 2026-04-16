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
    <section className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start px-8 md:px-12 pt-28 pb-16 relative overflow-hidden">
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
            href="/reservations"
            className="font-dm text-[11px] tracking-[0.2em] uppercase text-ink px-7 py-3.5 border border-ink/30 hover:border-ink transition-all"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Right: Framed photo — desktop */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.45 }}
        className="hidden md:flex items-start justify-center relative pt-4"
      >
        <div className="relative w-full">
          {/* Offset shadow frame */}
          <div className="absolute bottom-[-14px] right-[-14px] left-[14px] top-[14px] border border-clay/30 z-0" />
          {/* Corner bracket */}
          <div className="absolute top-[-8px] left-[-8px] w-8 h-8 border-t-2 border-l-2 border-clay opacity-60 z-10" />

          {/* Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden z-10">
            <Image
              src="https://pub-a138722f99774b24bde1c2c94a389145.r2.dev/hero.jpeg"
              alt="Jícara taquería — wood-fired tacos Orlando FL"
              fill
              priority
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 768px) 0px, (max-width: 1280px) 58vw, 900px"
            />
          </div>

          {/* Stamp label below image */}
          <div className="flex items-center gap-3 mt-4 justify-end pr-1">
            <span className="w-8 h-px bg-clay opacity-40" />
            <span className="font-dm text-[10px] tracking-[0.28em] uppercase text-sepia opacity-70">
              Est. 2024 · Orlando, FL
            </span>
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
          quality={85}
          className="object-cover object-center"
          sizes="calc(100vw - 64px)"
        />
      </div>
    </section>
  );
}
