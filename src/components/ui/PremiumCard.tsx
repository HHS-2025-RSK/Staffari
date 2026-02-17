// PremiumCard.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type PremiumCardProps = {
  content: {
    heading: string;
    points: string[];
    bg: string;
    imageUrl: string;
  };
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function PremiumCard({ content, icon: Icon }: PremiumCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        rotateX,
        transformOrigin: "center bottom",
        borderColor: "#402701",

        // ✨ NEW PREMIUM BACKGROUND (clean luxury glass)
        background: `
          radial-gradient(circle at 20% 20%, rgba(255,255,255,0.7), transparent 40%),
          linear-gradient(160deg, #ffffff, #f7f2e8)
        `,
      }}
      className="
        font-body group relative
        rounded-[2.25rem]
        overflow-hidden
        backdrop-blur-xl
        border-4
        shadow-[0_25px_60px_rgba(0,0,0,0.12)]
        hover:shadow-[0_40px_90px_rgba(0,0,0,0.18)]
        transition-shadow duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        flex flex-col h-full
        will-change-transform will-change-filter
      "
    >
      {/* glass sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-60 pointer-events-none" />

      {/* inner glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle at top right, ${content.bg}55, transparent 40%)`,
        }}
      />

      <div className="flex flex-col md:flex-row h-full relative z-10">
        {/* LEFT: IMAGE */}
        <div className="md:w-2/5 lg:w-5/12 relative overflow-hidden min-h-[280px]">
          <motion.img
            src={content.imageUrl}
            alt={content.heading}
            className="w-full h-full object-cover"
            style={{
              scale: useTransform(scrollYProgress, [0, 1], [1.15, 1]),
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          />

          {/* floating icon */}
          <motion.div
            className="absolute top-6 left-6 p-3 rounded-2xl backdrop-blur-md border shadow-lg"
            style={{
              background: `${content.bg}44`,
              borderColor: `${content.bg}88`,
              y: useTransform(scrollYProgress, [0, 1], [10, 0]),
              opacity,
            }}
          >
            <Icon className="w-6 h-6" style={{ color: "#fdf9f0" }} />
          </motion.div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="md:w-3/5 lg:w-7/12 p-7 md:p-8 lg:p-10 flex flex-col relative">
          {/* heading */}
          <div className="mb-8">
            <h3
              className="font-display text-2xl md:text-3xl"
              style={{ color: content.bg }}
            >
              {content.heading}
            </h3>

            <motion.div
              className="mt-4 h-[2px] w-14 rounded-full"
              style={{
                backgroundColor: `${content.bg}aa`,
                width: useTransform(scrollYProgress, [0, 1], [40, 96]),
              }}
            />
          </div>

          {/* points */}
          <motion.ul className="space-y-5 flex-grow" style={{ opacity }}>
            {content.points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4"
                style={{ color: `${content.bg}cc` }}
              >
                <CheckCircle2
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  style={{ color: content.bg }}
                />
                <span className="text-[#0f3d34] text-base md:text-lg leading-relaxed font-semibold">
                  {point}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* depth glow */}
          <div
            className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ backgroundColor: content.bg }}
          />
        </div>
      </div>
    </motion.div>
  );
}
