import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "../../utils/cn";

export default function Pill({ children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-mutedOlive/25 bg-cardBg px-3 py-1",
        "text-[13px] font-body font-medium text-mutedOlive",
      )}
    >
      <Sparkles className="h-4 w-4 text-terracotta" />
      {children}
    </span>
  );
}
