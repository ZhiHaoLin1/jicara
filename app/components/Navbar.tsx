"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-clay/20"
          : "bg-paper/80 backdrop-blur-sm"
      }`}
    >
      <Link href="/" className="font-fraunces font-black text-2xl tracking-wide text-ink">
        J<span className="text-clay italic font-light">í</span>cara
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {[
          ["Nuestra Historia", "/#story"],
          ["Menú", "/#menu"],
          ["Events", "/#events"],
          ["Contact", "/contact"],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              className="font-dm text-[11px] tracking-[0.22em] uppercase text-sepia hover:text-clay transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/reservations"
        className="hidden md:inline-block font-dm text-[11px] tracking-[0.18em] uppercase bg-clay text-straw px-5 py-2.5 hover:bg-sienna transition-colors"
      >
        Reserve
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center gap-[6px] p-2 -mr-2 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#271506", borderRadius: "2px" }} />
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#271506", borderRadius: "2px" }} />
        <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#271506", borderRadius: "2px" }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 border-b border-clay/20 px-8 py-6 flex flex-col gap-5 md:hidden"
          style={{ backgroundColor: "#EFE3CC" }}
        >
          {[
            ["Nuestra Historia", "/#story"],
            ["Menú", "/#menu"],
            ["Events", "/#events"],
            ["Contact", "/contact"],
            ["Reserve", "/reservations"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-dm text-[11px] tracking-[0.22em] uppercase text-sepia hover:text-clay transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
