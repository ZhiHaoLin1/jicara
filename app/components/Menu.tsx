"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    num: "01",
    tag: "Wood-fired",
    featured: false,
    name: "Al Pastor",
    desc: "Guajillo-achiote marinated pork, slow-roasted on a vertical trompo. Pineapple, cilantro, white onion on blue corn tortillas.",
    price: "$18 · Three tacos",
  },
  {
    num: "02",
    tag: "Chef's choice",
    featured: true,
    name: "Mole Negro",
    desc: "A 36-ingredient black mole from the Etla Valley, served over braised duck leg with sesame and a warm tlayuda.",
    price: "$32 · Entree",
  },
  {
    num: "03",
    tag: "Vegetarian",
    featured: false,
    name: "Rajas con Crema",
    desc: "Roasted poblano strips, sweet corn, Mexican crema, and Oaxacan cheese on white corn tortillas. Simple and perfect.",
    price: "$15 · Three tacos",
  },
  {
    num: "04",
    tag: "Signature",
    featured: false,
    name: "Birria de Res",
    desc: "12-hour Wagyu short rib consomme with queso fundido tacos for dipping. Napkins provided, no judgment.",
    price: "$24 · Four tacos + broth",
  },
  {
    num: "05",
    tag: "Bar",
    featured: false,
    name: "Mezcal Selección",
    desc: "Rotating list of 40+ mezcals served neat with orange and sal de gusano. Ask your server for the story behind each bottle.",
    price: "$14 – $38 · Per pour",
  },
  {
    num: "06",
    tag: "Dessert",
    featured: true,
    name: "Tejate",
    desc: "Ancient Oaxacan cacao and mamey sapote seed drink, served chilled or warm over house-made corn ice cream.",
    price: "$11 · Dessert",
  },
];

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="menu" className="linen-bg py-24 md:py-32 relative">
      <div className="max-w-[1380px] mx-auto px-8 md:px-12" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-clay/20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-dm text-[10px] tracking-[0.32em] uppercase text-clay">
                The Food
              </span>
              <span className="w-7 h-px bg-clay opacity-50" />
            </div>
            <h2
              className="font-fraunces font-black text-ink leading-[0.95]"
              style={{ fontSize: "clamp(48px, 6vw, 76px)" }}
            >
              Lo que{" "}
              <em className="text-clay font-light not-italic italic">
                cocinamos
              </em>
            </h2>
          </div>
          <a
            href="#menu"
            className="self-start font-dm text-[11px] tracking-[0.2em] uppercase bg-clay text-straw px-7 py-3.5 border border-clay hover:bg-sienna hover:border-sienna transition-all"
          >
            Full Menu
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.07,
              }}
              className={`bg-paper p-8 relative border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(39,21,6,0.1)] group ${
                item.featured ? "border-sage/30" : "border-clay/12"
              }`}
            >
              {/* Bottom reveal line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-clay scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-start justify-between mb-5">
                <span
                  className={`font-dm text-[9px] tracking-[0.22em] uppercase text-straw px-2.5 py-1 ${
                    item.featured ? "bg-sage" : "bg-clay"
                  }`}
                >
                  {item.tag}
                </span>
                <span className="font-fraunces font-black text-4xl text-plaster leading-none">
                  {item.num}
                </span>
              </div>

              <h3 className="font-fraunces font-bold text-[28px] text-ink leading-tight mb-3">
                {item.name}
              </h3>
              <p className="font-lora italic text-sepia text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="font-dm text-[12px] tracking-[0.12em] text-mustard border-t border-dashed border-clay/20 pt-4">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
