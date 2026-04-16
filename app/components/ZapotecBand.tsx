export default function ZapotecBand({
  text,
  bgColor = "bg-clay",
  textColor = "text-straw/70",
  speed = "animate-marquee",
  font = "font-dm tracking-[0.38em]",
  textSize = "text-[11px]",
}: {
  text: string;
  bgColor?: string;
  textColor?: string;
  speed?: string;
  font?: string;
  textSize?: string;
}) {
  const repeated = `${text} \u00A0\u00A0\u00A0 ${text} \u00A0\u00A0\u00A0`;

  return (
    <div
      className={`relative h-14 ${bgColor} overflow-hidden flex items-center`}
    >
      {/* Woven overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 4px, transparent 4px, transparent 16px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 4px, transparent 4px, transparent 16px)",
        }}
      />
      <span className={`${speed} ${font} uppercase ${textColor} ${textSize} relative z-10`}>
        {repeated}
        {repeated}
      </span>
    </div>
  );
}
