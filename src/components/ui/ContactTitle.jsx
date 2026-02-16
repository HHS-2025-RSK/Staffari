import React from "react";
import Pill from "./Pill";

export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-4">
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h2 className=" font-body text-5xl font-bold text-[#fdf9f0] lg:text-[#0f3d34] md:text-8xl text-center uppercase">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 max-w-2xl font-body text-[18px] leading-7 text-[#fdf9f0] lg:text-[#0f3d34]/80 text-center mx-auto">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
