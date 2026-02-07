import React from "react";

export default function AdvantageTile({ title, Icon, tone = "emerald" }) {
  const tones = {
    emerald: {
      surface:
        "from-emeraldGreen/10 via-beige/40 to-beige/20 border-emeraldGreen/20",
      icon: "bg-emeraldGreen/15 text-emeraldGreen",
      ring: "hover:ring-emeraldGreen/25 focus-visible:ring-emeraldGreen/30",
    },
    brown: {
      surface: "from-brown/15 via-beige/45 to-beige/25 border-brown/25",
      icon: "bg-brown/20 text-brown",
      ring: "hover:ring-brown/25 focus-visible:ring-brown/30",
    },
    beige: {
      surface: "from-beige/80 via-beige/60 to-beige/40 border-mutedOlive/20",
      icon: "bg-mutedOlive/15 text-deepJungleGreen",
      ring: "hover:ring-mutedOlive/25 focus-visible:ring-mutedOlive/30",
    },
  };

  const t = tones[tone] ?? tones.emerald;

  return (
    <div
      className={[
        "group relative overflow-hidden",
        "flex items-center gap-3 rounded-2xl border px-4 py-3",
        "bg-gradient-to-br", // gradient surface
        t.surface,
        // interaction
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,24,20,0.18)]",
        "focus-within:-translate-y-1 focus-within:shadow-[0_18px_40px_rgba(16,24,20,0.18)]",
        // ring for premium “glow”
        "ring-1 ring-transparent hover:ring-2 focus-visible:ring-2",
        "focus-visible:outline-none",
        t.ring,
      ].join(" ")}
      tabIndex={0}
    >
      {/* subtle sheen */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/20 blur-2xl transition-opacity duration-300 group-hover:opacity-80 opacity-40" />

      <span
        className={[
          "inline-flex h-10 w-10 items-center justify-center rounded-full",
          t.icon,
          "transition-transform duration-300",
          "group-hover:scale-110 group-hover:rotate-[-6deg]",
        ].join(" ")}
      >
        {Icon ? <Icon className="h-5 w-5" /> : null}
      </span>

      <span className="font-body text-[15px] font-semibold text-deepJungleGreen">
        {title}
      </span>
    </div>
  );
}
