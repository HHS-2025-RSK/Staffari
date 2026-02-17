import React from "react";
import Pill from "./Pill";

export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-4">
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h2 className="font-display max-w-7xl text-[#402701] text-center text-5xl tracking-wide leading-relaxed sm:text-7xl leading-[1.1] uppercase">
        {title}
      </h2>
      {desc ? (
        <p className="mt-1 max-w-2xl font-body text-[18px] leading-7 text-[#402701] lg:text-[#402701]/80 text-center mx-auto font-semibold">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
