import React from "react";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import BulletListPanel from "../ui/BulletListPanel";
import SideNote from "../ui/SideNote";

export default function ProblemSection({ problemBullets }) {
  return (
    <section id="problem">
      <div>
        <div
          className={`
            group relative
            rounded-3xl border border-mutedOlive/20 bg-white shadow-soft
            min-h-[260px] sm:min-h-[300px] md:min-h-[340px]
            transition-shadow duration-300
            hover:shadow-xl
            overflow-hidden
          `}
        >
          {/* Flip container */}
          <div
            className={`
              relative w-full h-full
              transition-transform duration-700 ease-out
              [transform-style:preserve-3d]
              group-hover:[transform:rotateY(180deg)]
            `}
          >
            {/* ─── Front ─── Default view = SideNote only ─── */}
            <div
              className={`
                absolute inset-0
                [backface-visibility:hidden]
                p-6 md:p-8
                flex flex-col justify-center
              `}
            >
              <div className="mt-60">
                <SectionTitle
                  eyebrow="The Problem"
                  title="Why hospitality hiring is broken"
                  desc="Hospitality businesses lose time and money dealing with:"
                />
              </div>

              <div className="mt-6">
                <SideNote
                  icon={<ShieldCheck className="h-6 w-6" />}
                  title="Built for confidence"
                  text="Staffari is built to remove these friction points and help teams hire with confidence."
                />
              </div>
            </div>

            {/* ─── Back ─── Shown on hover = Bullet points ─── */}
            <div
              className={`
                absolute inset-0
                [backface-visibility:hidden]
                [transform:rotateY(180deg)]
                p-6 md:p-8
                flex flex-col
              `}
            >
              <div className="mt-5 flex-1">
                <BulletListPanel items={problemBullets} />
              </div>

              {/* Optional small reminder on back side */}
              <p className="mt-6 text-center text-sm text-charcoalBlack/50 md:hidden">
                Tap outside to go back
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
