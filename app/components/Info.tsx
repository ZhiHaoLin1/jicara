"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Info() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const cells = [
    {
      label: "Hours",
      content: (
        <>
          <strong className="block font-fraunces font-bold text-[18px] text-ink mb-1">Tue – Thu</strong>
          11:30am – 10:00pm
          <strong className="block font-fraunces font-bold text-[18px] text-ink mt-3 mb-1">Fri – Sat</strong>
          11:30am – Midnight
          <strong className="block font-fraunces font-bold text-[18px] text-ink mt-3 mb-1">Sunday</strong>
          10:00am – 9:00pm
          <strong className="block font-fraunces font-bold text-[18px] text-ink mt-3 mb-1">Monday</strong>
          Closed
        </>
      ),
    },
    {
      label: "Location",
      content: (
        <>
          <strong className="block font-fraunces font-bold text-[18px] text-ink mb-1">Jícara Taquería</strong>
          4280 Alafaya Trail, Suite 120<br />
          Orlando, FL 32826<br /><br />
          <a
            href="tel:4075550182"
            className="font-dm text-[13px] tracking-[0.1em] text-clay hover:text-sienna transition-colors"
          >
            (407) 555-0182
          </a>
        </>
      ),
    },
    {
      label: "Private Events",
      content: (
        <>
          <strong className="block font-fraunces font-bold text-[18px] text-ink mb-1">The Comal Room</strong>
          Semi-private dining for 10–40 guests. Full buyouts available.
          Mezcal tastings, cooking classes, and custom menus.<br /><br />
          <a
            href="#contactform"
            className="font-dm text-[11px] tracking-[0.2em] uppercase text-clay hover:text-sienna transition-colors"
          >
            Inquire About Events →
          </a>
        </>
      ),
    },
  ];

  return (
    <div id="contact" className="bg-plaster border-t border-b border-clay/20 relative overflow-hidden">
      {/* Zapotec stripe top */}
      <div className="zapotec-stripe absolute top-0 left-0 right-0" />

      <div ref={ref} className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-clay/15">
        {cells.map((cell, i) => (
          <motion.div
            key={cell.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 0.1,
            }}
            className="px-10 md:px-11 py-14"
          >
            <div className="font-dm text-[10px] tracking-[0.3em] uppercase text-clay mb-5">
              {cell.label}
            </div>
            <div className="font-lora text-[16px] text-sepia/80 leading-[1.85]">
              {cell.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
