export default function MapSection() {
  return (
    <div className="relative h-72 bg-creamdk overflow-hidden flex flex-col items-center justify-center gap-3">
      {/* Topographic lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 120% 120% at 50% 50%, transparent 30%, rgba(192,88,40,0.05) 31%, transparent 32%),
            radial-gradient(ellipse 100% 100% at 50% 50%, transparent 45%, rgba(192,88,40,0.04) 46%, transparent 47%),
            radial-gradient(ellipse 80%  80%  at 50% 50%, transparent 55%, rgba(192,88,40,0.04) 56%, transparent 57%),
            radial-gradient(ellipse 60%  60%  at 50% 50%, transparent 62%, rgba(192,88,40,0.05) 63%, transparent 64%),
            repeating-linear-gradient(0deg,   transparent, transparent 30px, rgba(192,88,40,0.025) 30px, rgba(192,88,40,0.025) 31px),
            repeating-linear-gradient(90deg,  transparent, transparent 30px, rgba(192,88,40,0.025) 30px, rgba(192,88,40,0.025) 31px)
          `,
        }}
      />
      {/* Pin */}
      <div
        className="relative z-10 w-5 h-5 bg-clay rounded-full mb-2"
        style={{ borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)" }}
      />
      <p className="relative z-10 font-dm text-[10px] tracking-[0.28em] uppercase text-sepia opacity-50">
        Google Maps Embed
      </p>
      <p className="relative z-10 font-fraunces font-bold text-[22px] text-ink opacity-40 tracking-wide">
        4280 Alafaya Trail, Orlando FL
      </p>
    </div>
  );
}
