"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Story() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="story"
      ref={ref}
      className="max-w-[1380px] mx-auto px-8 md:px-12 py-24 md:py-32 grid md:grid-cols-2 gap-16 md:gap-24 items-center"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative"
      >
        {/* Main image */}
        <div className="relative w-full aspect-[4/5] overflow-hidden z-10">
          <Image
            src="https://pub-a138722f99774b24bde1c2c94a389145.r2.dev/tortilla%20press1.jpeg"
            alt="Hand-pressing tortillas on a traditional comal — Jícara Orlando"
            fill
            className="object-cover object-[center_60%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Sage block accent */}
        <div className="absolute bottom-[-16px] right-[-16px] w-24 h-24 bg-sage opacity-20 z-0" />
        {/* Corner bracket */}
        <div className="absolute top-[-8px] left-[-8px] w-12 h-12 border-t-2 border-l-2 border-clay opacity-50 z-20" />
        {/* Year watermark */}
        <div className="absolute bottom-6 left-[-8px] font-fraunces font-black text-7xl text-clay opacity-[0.13] leading-none pointer-events-none select-none z-0">
          2024
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="font-dm text-[10px] tracking-[0.32em] uppercase text-clay">
            Our Story
          </span>
          <span className="w-7 h-px bg-clay opacity-50" />
        </div>

        <h2
          className="font-fraunces font-black text-ink leading-[0.95] mb-7"
          style={{ fontSize: "clamp(48px, 6vw, 76px)" }}
        >
          Rooted in{" "}
          <em className="text-clay font-light not-italic italic">Oaxaca</em>
        </h2>

        <p className="font-lora text-sepia/80 text-[17px] leading-[1.78] mb-5">
          Jícara began with a single obsession: the tortilla. Not the
          mass-produced kind, but the kind made by hand every morning from
          nixtamalized heirloom corn, pressed warm before it hits the comal.
        </p>

        <blockquote className="border-l-[3px] border-clay pl-6 my-8 font-lora italic text-[21px] text-sepia leading-[1.55]">
          "The jícara is how Oaxacans have served tejate for five centuries. We
          named the restaurant after the vessel because the vessel is the
          point."
        </blockquote>

        <p className="font-lora text-sepia/80 text-[17px] leading-[1.78]">
          Chef Elena Reyes spent three years cooking alongside the women of the
          Etla Valley before bringing those traditions to Orlando. Every dish
          traces back to a specific place, a specific person, a specific
          afternoon.
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 font-dm text-[11px] tracking-[0.2em] uppercase text-ink px-7 py-3.5 border border-ink/30 hover:border-ink transition-all"
        >
          Meet the Team
        </a>
      </motion.div>
    </section>
  );
}
