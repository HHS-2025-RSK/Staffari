import React from "react";

export default function SideNote({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-emeraldGreen/25 bg-emeraldGreen/5 p-2">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-auto w-10 items-center justify-center rounded-full text-emeraldGreen">
          {icon}
        </span>
        <div>
          <div className="font-body text-[18px] font-bold text-deepJungleGreen">
            {title}
          </div>
          <p className="mt-2 font-body text-[15px] leading-7 font-semibold">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
