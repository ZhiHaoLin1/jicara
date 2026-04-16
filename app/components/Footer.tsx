export default function Footer() {
  return (
    <footer className="bg-ink relative overflow-hidden px-8 md:px-12 pt-16 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
      {/* Zapotec stripe */}
      <div className="zapotec-stripe absolute top-0 left-0 right-0" />

      {/* Watermark */}
      <div
        className="absolute bottom-[-20px] left-[-10px] font-fraunces font-black text-white/[0.03] leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(80px, 14vw, 160px)", letterSpacing: "0.02em" }}
        aria-hidden
      >
        JÍCARA
      </div>

      {/* Logo */}
      <div className="relative z-10 font-fraunces font-black text-paper/90 tracking-wide" style={{ fontSize: "40px" }}>
        J<em className="text-clay font-light not-italic italic">í</em>cara
      </div>

      {/* Right */}
      <div className="relative z-10 flex flex-col gap-4 md:items-end">
        <ul className="flex flex-wrap gap-6 list-none">
          {[
            ["Instagram", "https://instagram.com"],
            ["Gift Cards", "#"],
            ["Press", "#"],
            ["Jobs", "#"],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="font-dm text-[11px] tracking-[0.18em] uppercase text-paper/40 hover:text-clay transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-dm text-[11px] text-paper/20 tracking-wide">
          Site by{" "}
          <a
            href="https://munchmedia.design"
            className="text-clay/55 hover:text-clay transition-colors"
          >
            Munch Media
          </a>{" "}
          &nbsp;·&nbsp; &copy; 2026 Jícara Taquería, Orlando FL
        </p>
      </div>
    </footer>
  );
}
