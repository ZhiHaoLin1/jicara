"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    date: "Apr 14, 2026",
    caption:
      "The al pastor trompo spinning at 5am. This is what Sunday brunch prep looks like at Jícara.",
    bg: "from-[#e0c8a0] to-[#d4b880]",
  },
  {
    date: "Apr 12, 2026",
    caption:
      "Mole negro takes 3 days. 36 ingredients. And every batch is slightly different. That's the point.",
    bg: "from-[#d4c0a0] to-[#c8aa78]",
  },
  {
    date: "Apr 10, 2026",
    caption:
      "New addition to the mezcal list: a single-village tobaziche from San Luis del Rio. Only 18 bottles remain.",
    bg: "from-[#c8b890] to-[#bca870]",
  },
  {
    date: "Apr 8, 2026",
    caption:
      "Birria pop-up this Saturday, 11am until it's gone. No reservations. Just show up hungry.",
    bg: "from-[#d8c8a8] to-[#ccb888]",
  },
];

export default function Instagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="events" className="max-w-[1380px] mx-auto px-8 md:px-12 py-24 md:py-32">
      <div
        ref={ref}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-dm text-[10px] tracking-[0.32em] uppercase text-clay">
              From the Kitchen
            </span>
            <span className="w-7 h-px bg-clay opacity-50" />
          </div>
          <h2
            className="font-fraunces font-black text-ink leading-[0.95]"
            style={{ fontSize: "clamp(48px, 6vw, 76px)" }}
          >
            Últimas{" "}
            <em className="text-clay font-light not-italic italic">
              novedades
            </em>
          </h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="self-start font-dm text-[11px] tracking-[0.2em] uppercase text-ink px-7 py-3.5 border border-ink/30 hover:border-ink transition-all whitespace-nowrap"
        >
          Follow on Instagram
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 0.08,
            }}
            className="relative aspect-square overflow-hidden cursor-pointer group"
          >
            {/* Warm placeholder background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${post.bg} transition-transform duration-500 group-hover:scale-105`}
            />
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="text-2xl opacity-30">📸</span>
              <span className="font-dm text-[9px] tracking-[0.2em] uppercase text-sepia opacity-50">
                {post.date}
              </span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-ink/82 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <p className="font-lora italic text-[13px] text-straw/90 leading-[1.55]">
                {post.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <span className="w-5 h-px bg-sepia opacity-40" />
        <span className="font-dm text-[10px] tracking-[0.2em] uppercase text-sepia opacity-40">
          Auto-published via Munch Media Instagram integration
        </span>
      </div>
    </section>
  );
}
