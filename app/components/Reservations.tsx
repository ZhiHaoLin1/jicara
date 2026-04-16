"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Reservations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="reservations"
      ref={ref}
      className="relative px-8 md:px-12 py-28 md:py-36 text-center overflow-hidden"
    >
      {/* Warm sunburst */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(196,154,40,0.11) 0%, transparent 65%)",
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative font-fraunces font-black text-ink leading-[0.92] mb-5"
        style={{ fontSize: "clamp(64px, 10vw, 130px)" }}
      >
        Join us
        <br />
        <em className="text-clay font-light not-italic italic">tonight</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="relative font-lora italic text-sepia text-lg mb-11"
      >
        Walk-ins welcome. Reservations preferred on weekends.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.28 }}
        className="relative flex gap-4 justify-center flex-wrap"
      >
        <a
          href="https://resy.com"
          target="_blank"
          rel="noreferrer"
          className="font-dm text-[11px] tracking-[0.2em] uppercase bg-clay text-straw px-8 py-4 border border-clay hover:bg-sienna hover:border-sienna transition-all"
        >
          Reserve on Resy
        </a>
        <a
          href="https://toasttab.com"
          target="_blank"
          rel="noreferrer"
          className="font-dm text-[11px] tracking-[0.2em] uppercase text-ink px-8 py-4 border border-ink/30 hover:border-ink transition-all"
        >
          Order Online
        </a>
      </motion.div>
    </section>
  );
}
