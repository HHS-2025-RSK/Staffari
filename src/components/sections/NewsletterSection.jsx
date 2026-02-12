import React from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="w-full py-10 border-t border-mutedOlive/20 bg-deepJungleGreen">
      {/* Center the whole block */}
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-[#fdf9f0]">
          Subscribe to our newsletter
        </p>

        <div className="flex items-center gap-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="
              flex-1
              h-14
              rounded-full
              px-6
              text-sm
              outline-none
              border
              bg-[#fdf9f0]   /* beige */
            "
          />

          {/* Arrow Button */}
          <button
            type="button"
            className="
              h-14
              w-14
              rounded-full
              flex
              items-center
              justify-center
              border
            "
          >
            <ArrowRight className="h-5 w-5 text-[#fdf9f0]" />
          </button>
        </div>
      </div>
    </section>
  );
}
