import React from "react";
import { BadgeCheck } from "lucide-react";

export default function BulletListPanel({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((it) => (
        <div
          key={it}
          className="flex items-start gap-3 rounded-2xl border border-mutedOlive/15 bg-beige p-2"
        >
          <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
            <BadgeCheck className="h-4 w-4" />
          </span>
          <div className="font-body text-[15px] mt-1 leading-6 text-charcoalBlack/80">
            {it}
          </div>
        </div>
      ))}
    </div>
  );
}
