import React from "react";
import { cn } from "../../utils/cn";

export function PrimaryButton({
  children,
  onClick,
  className,
  as = "button",
  href,
}) {
  const Comp = as;
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl bg-[#52110f] px-5 py-3 text-[#fdf9f0]",
        "font-body text-[15px] font-semibold shadow-soft transition",
        "hover:brightness-110 active:translate-y-[1px] active:brightness-95",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-emeraldGreen/20",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function GhostButton({ children, href }) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3",
        "font-body text-[15px] font-semibold text-deepJungleGreen",
        "border border-mutedOlive/30 bg-white",
        "hover:bg-cardBg transition",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-emeraldGreen/15",
      )}
    >
      {children}
    </a>
  );
}
