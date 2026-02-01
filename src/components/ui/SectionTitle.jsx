import React from "react";
import Pill from "./Pill";

export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-4">
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h2 className="mt-4 font-display text-3xl font-bold text-deepJungleGreen md:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 max-w-2xl font-body text-[15px] leading-7 text-charcoalBlack/75">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
