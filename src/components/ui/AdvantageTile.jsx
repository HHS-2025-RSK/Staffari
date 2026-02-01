import React from "react";
import { BadgeCheck } from "lucide-react";

export default function AdvantageTile({ title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-mutedOlive/20 bg-white px-4 py-3 shadow-soft">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
        <BadgeCheck className="h-5 w-5" />
      </span>
      <span className="font-body text-[15px] font-semibold text-deepJungleGreen">
        {title}
      </span>
    </div>
  );
}
