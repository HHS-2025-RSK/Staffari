import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "../../utils/cn";

export default function StoreButton({
  variant = "light",
  href,
  title,
  subtitle,
}) {
  const base =
    "inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition focus:outline-none focus-visible:ring-4";
  const light =
    "bg-white text-deepJungleGreen shadow-soft hover:brightness-95 focus-visible:ring-white/30";
  const dark =
    "border border-white/25 bg-white/10 text-white hover:bg-white/15 focus-visible:ring-white/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(base, variant === "light" ? light : dark)}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full",
          variant === "light"
            ? "bg-emeraldGreen/10 text-emeraldGreen"
            : "bg-white/15 text-white",
        )}
      >
        <Download className="h-5 w-5" />
      </span>

      <span className="flex flex-col leading-tight">
        <span className={cn("font-body text-[12px] opacity-80")}>
          {subtitle}
        </span>
        <span className={cn("font-body text-[15px] font-semibold")}>
          {title}
        </span>
      </span>

      <ArrowRight
        className={cn(
          "ml-2 h-4 w-4",
          variant === "light" ? "text-mutedOlive" : "text-white/70",
        )}
      />
    </a>
  );
}
