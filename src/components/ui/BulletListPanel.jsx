import React from "react";
import { BadgeCheck } from "lucide-react";

export default function BulletListPanel({ items }) {
  return (
    <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {items.map((it) => (
        <div
          key={it}
          className="flex items-start gap-3 rounded-2xl border-2 border-[#402701] bg-beige p-2 md:p-4 lg:p-3 shadow-xl
                     transition hover:shadow-sm hover:border-[#52110f]"
        >
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
            <BadgeCheck className="h-4 w-4" />
          </span>

          <div className="font-body font-semibold text-[18px] mt-1">{it}</div>
        </div>
      ))}
    </div>
  );
}
