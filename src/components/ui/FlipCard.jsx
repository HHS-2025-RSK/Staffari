// ui/FlipCard.jsx
import React from "react";

export default function FlipCard({ childrenFront, childrenBack }) {
  return (
    <div
      className="
        group relative w-full perspective-[1000px]
        h-[min-content] min-h-[280px] md:min-h-[320px]
      "
    >
      <div
        className="
        relative w-full h-full transition-transform duration-500
        transform-style-preserve-3d group-hover:rotate-y-180
      "
      >
        {/* Front face */}
        <div
          className="
          absolute inset-0 backface-hidden
          rounded-3xl border border-mutedOlive/20 bg-cardBg shadow-soft
          p-6 md:p-8
          flex flex-col justify-center items-center text-center
        "
        >
          {childrenFront}
        </div>

        {/* Back face */}
        <div
          className="
          absolute inset-0 backface-hidden rotate-y-180
          rounded-3xl border border-mutedOlive/20 bg-cardBg shadow-soft
          p-6 md:p-8
          overflow-hidden
        "
        >
          {childrenBack}
        </div>
      </div>
    </div>
  );
}
