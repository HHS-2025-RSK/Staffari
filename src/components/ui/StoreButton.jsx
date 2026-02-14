// import React from "react";
// import { ArrowRight, Download } from "lucide-react";
// import { cn } from "../../utils/cn";

// export default function StoreButton({
//   variant = "light",
//   href,
//   title,
//   subtitle,
// }) {
//   const base =
//     "inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition focus:outline-none focus-visible:ring-4";
//   const light =
//     // "bg-[white] text-deepJungleGreen shadow-soft hover:brightness-95 focus-visible:ring-white/30";
//     "bg-[#fdfcf7] text-[#0f3d34] shadow-soft hover:brightness-95 focus-visible:ring-beige/30";
//   const dark =
//     "border border-white/25 bg-white/10 text-white hover:bg-white/15 focus-visible:ring-white/10";

//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       className={cn(base, variant === "light" ? light : dark)}
//     >
//       <span
//         className={cn(
//           "inline-flex h-10 w-10 items-center justify-center rounded-full",
//           variant === "light"
//             ? "bg-#0f3d34/10 text-[#0f3d34]"
//             : "bg-white/15 text-white",
//         )}
//       >
//         <Download className="h-5 w-5" />
//       </span>

//       <span className="flex flex-col leading-tight">
//         <span className={cn("font-body text-[12px] opacity-80")}>
//           {subtitle}
//         </span>
//         <span className={cn("font-body text-[15px] font-semibold")}>
//           {title}
//         </span>
//       </span>

//       <ArrowRight
//         className={cn(
//           "ml-2 h-4 w-4",
//           variant === "light" ? "text-[#0f3d34]" : "text-white/70",
//         )}
//       />
//     </a>
//   );
// }

import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "../../utils/cn";

export default function StoreButton({
  variant = "light",
  href,
  // title,
  // subtitle,
  bgImage, // ✅ new prop
}) {
  const base =
    "relative inline-flex items-center gap-3 rounded-2xl px-5 py-3 overflow-hidden transition focus:outline-none focus-visible:ring-4";

  const light =
    "text-[#0f3d34] shadow-soft hover:brightness-95 focus-visible:ring-beige/30";

  const dark =
    "border border-white/25 text-white hover:bg-white/15 focus-visible:ring-white/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(base, variant === "light" ? light : dark)}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "200px",
        height: "60px",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        // backgroundColor: "#52110f",
      }}
    >
      {/* Overlay for readability */}
      {/* <span
        className={cn(
          "absolute inset-0",
          variant === "light" ? "bg-[#fdfcf7]/90" : "bg-black/40",
        )}
      /> */}

      {/* Content */}
      {/* <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f3d34]/10 text-[#0f3d34]">
        <Download className="h-5 w-5" />
      </span>

      <span className="relative z-10 flex flex-col leading-tight">
        <span className="font-body text-[12px] opacity-80">{subtitle}</span>
        <span className="font-body text-[15px] font-semibold">{title}</span>
      </span>

      <ArrowRight
        className={cn(
          "relative z-10 ml-2 h-4 w-4",
          variant === "light" ? "text-[#0f3d34]" : "text-white/70",
        )}
      /> */}
    </a>
  );
}
