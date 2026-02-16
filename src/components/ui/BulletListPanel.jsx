import React from "react";
import { BadgeCheck } from "lucide-react";

export default function BulletListPanel({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it) => (
        <div
          key={it}
          className="flex items-start gap-3 rounded-2xl border border-mutedOlive/15 bg-beige p-4
                     transition hover:shadow-sm hover:border-mutedOlive/25"
        >
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
            <BadgeCheck className="h-4 w-4" />
          </span>

          <div className="font-body text-[15px] leading-6 mt-1.5">{it}</div>
        </div>
      ))}
    </div>
  );
}
