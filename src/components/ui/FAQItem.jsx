import React from "react";

export default function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-mutedOlive/20 bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-body text-[15px] font-semibold text-deepJungleGreen">
          {q}
        </span>
        <span className="font-body text-mutedOlive">{open ? "—" : "+"}</span>
      </button>

      {open ? (
        <div className="px-5 pb-5">
          <p className="font-body text-[15px] leading-7 text-charcoalBlack/75">
            {a}
          </p>
        </div>
      ) : null}
    </div>
  );
}
