import React from "react";
import { Briefcase, BadgeCheck } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import BulletListPanel from "../ui/BulletListPanel";
import SideNote from "../ui/SideNote";

export default function HelpsSection({ helpsBullets }) {
  return (
    <section id="helps" className="py-14">
      <div>
        <div
          className={`
            group relative
            perspective-[1200px]
            rounded-3xl border border-mutedOlive/20 bg-white shadow-soft
            min-h-[240px] sm:min-h-[280px] md:min-h-[320px]
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
            {/* ─── Front face ─── Default: Title + SideNote ─── */}
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
                  eyebrow="How Staffari Helps"
                  title="Hire hospitality talent without the hassle"
                  desc="With Staffari, businesses can:"
                />
              </div>

              <div className="mt-6">
                <SideNote
                  icon={<Briefcase className="h-6 w-6" />}
                  title="Operationally aligned hiring"
                  text="Everything is designed around practical hiring for hospitality operations."
                />
              </div>
            </div>

            {/* ─── Back face ─── On hover: Bullet points ─── */}
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
                <BulletListPanel items={helpsBullets} />
              </div>

              {/* Small mobile reminder */}
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
