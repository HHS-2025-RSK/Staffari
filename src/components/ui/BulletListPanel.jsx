// import React from "react";
// import { BadgeCheck } from "lucide-react";

// export default function BulletListPanel({ items }) {
//   return (
//     <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
//       {items.map((it) => (
//         <div
//           key={it}
//           className="flex items-start gap-3 rounded-2xl border-2 border-[#402701] bg-beige p-2 md:p-4 lg:p-3 shadow-xl
//                      transition hover:shadow-sm hover:border-[#52110f]"
//         >
//           <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
//             <BadgeCheck className="h-4 w-4" />
//           </span>

//           <div className="font-body font-semibold text-[18px] mt-1">{it}</div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";
import { BadgeCheck } from "lucide-react";

export default function BulletListPanel({ items }) {
  return (
    <div
      className="
    grid w-full h-full gap-4 items-stretch
    grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]
    justify-center
  "
    >
      {items.map((it) => (
        <div
          key={it}
          className="h-full flex flex-col items-center justify-center rounded-2xl border-2 border-[#402701] bg-beige p-3 md:p-4 shadow-xl transition hover:shadow-sm hover:border-[#52110f] text-center"
        >
          <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
            <BadgeCheck className="h-8 w-8" />
          </span>
          <div className="font-body font-semibold text-[24px] leading-snug">
            {it}
          </div>
        </div>
      ))}
    </div>
  );
}
