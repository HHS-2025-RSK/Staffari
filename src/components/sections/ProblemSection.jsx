import React from "react";
import { ShieldCheck } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import BulletListPanel from "../ui/BulletListPanel";
import SideNote from "../ui/SideNote";

export default function ProblemSection({ problemBullets }) {
  return (
    <section id="problem" className="w-full">
      <div className="w-full max-w-5xl">
        <div
          className={`
            group relative
            w-full overflow-hidden
            rounded-3xl border border-mutedOlive/20 bg-white shadow-soft
            transition-shadow duration-300 hover:shadow-xl
            min-h-[350px] sm:min-h-[300px] md:min-h-[260px]
            lg-h-[300px]
            perspective-[1200px]
          `}
          style={{ perspective: "1200px" }}
        >
          {/* Flip container */}
          <div
            className={`
              relative h-full w-full
              transition-transform duration-700 ease-out
              [transform-style:preserve-3d]
              [@media(hover:hover)_and_(pointer:fine)]:group-hover:[transform:rotateY(180deg)]
            `}
          >
            {/* Front */}
            <div
              className={`
                absolute inset-0
                [backface-visibility:hidden]
                py-3 sm:py-4 md:py-16
                px-3 sm:px-4 md:px-8
                flex flex-col justify-center

                /* Responsive base typography for everything inside */
                text-sm sm:text-base md:text-[15px] lg:text-base
              `}
            >
              {/* Make the top spacing responsive instead of fixed pt-60 */}
              <div className="pt-[320px] sm:pt-[260px] md:pt-[80px] lg:pt-[130px]">
                <SectionTitle
                  eyebrow="The Problem"
                  title="Why hospitality hiring is broken"
                  desc="Hospitality businesses lose time and money dealing with:"
                />
              </div>

              <div>
                <SideNote
                  icon={<ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />}
                  title="Built for confidence"
                  text="Staffari is built to remove these friction points and help teams hire with confidence."
                />
              </div>
            </div>

            {/* Back */}
            <div
              className={`
                absolute inset-0
                [backface-visibility:hidden]
                [transform:rotateY(180deg)]
                pt-3 sm:pt-4 md:pt-4
                px-3 sm:px-4 md:px-8
                flex flex-col

                /* Same responsive base typography */
                text-sm sm:text-base md:text-[15px] lg:text-base
              `}
            >
              <div className="flex-1">
                <BulletListPanel items={problemBullets} />
              </div>

              <p className="mt-4 sm:mt-5 text-center text-xs sm:text-sm text-charcoalBlack/50 [@media(hover:hover)_and_(pointer:fine)]:hidden">
                Tap outside to go back
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
