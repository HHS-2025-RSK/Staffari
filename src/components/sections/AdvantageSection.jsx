import React from "react";
import { CheckCircle2, Hotel, GraduationCap } from "lucide-react";
import Container from "../ui/Container";

// ────────────────────────────────────────────────
// Premium Glass Card (Unified Color System)
// ────────────────────────────────────────────────
function PremiumCard({ content, icon }) {
  const Icon = icon;

  return (
    <div
      className="
        font-body group relative
        rounded-[2.25rem]
        overflow-hidden
        backdrop-blur-xl
        border-4
        shadow-[0_25px_60px_rgba(0,0,0,0.12)]
        hover:shadow-[0_40px_90px_rgba(0,0,0,0.18)]
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        hover:-translate-y-3
        flex flex-col h-full
      "
      style={{
        borderColor: "#402701",
        background: `
          linear-gradient(
            135deg,
            ${content.bg}22,
            ${content.bg}10,
            rgba(255,255,255,0.08)
          )
        `,
      }}
    >
      {/* glass sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-60 pointer-events-none" />

      {/* inner glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(circle at top right, ${content.bg}55, transparent 60%)`,
        }}
      />

      <div className="flex flex-col md:flex-row h-full relative z-10">
        {/* LEFT: IMAGE */}
        <div className="md:w-2/5 lg:w-5/12 relative overflow-hidden min-h-[280px]">
          <img
            src={content.imageUrl}
            alt={content.heading}
            className="
              w-full h-full object-cover
              transition-transform duration-[1.6s] ease-out
              group-hover:scale-110
            "
          />

          {/* image tint */}
          {/* <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${content.bg}88, transparent)`,
            }}
          /> */}

          {/* floating icon */}
          <div
            className="absolute top-6 left-6 p-3 rounded-2xl backdrop-blur-md border shadow-lg"
            style={{
              background: `${content.bg}44`,
              borderColor: `${content.bg}88`,
            }}
          >
            <Icon className="w-6 h-6" style={{ color: "#fdf9f0" }} />
          </div>
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
            <div
              className="mt-4 h-[2px] w-14 rounded-full transition-all duration-500 group-hover:w-24"
              style={{ backgroundColor: `${content.bg}aa` }}
            />
          </div>

          {/* points */}
          <ul className="space-y-5 flex-grow">
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
                <span className="text-[#0f3d34] text-base md:text-lg leading-relaxed font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* depth glow */}
          <div
            className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ backgroundColor: content.bg }}
          />
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// SECTION
// ────────────────────────────────────────────────
export default function AdvantageSection() {
  const hotelContent = {
    heading: "Hotels",
    points: [
      "Hospitality-only talent pool",
      "Pre-tested candidates with PIT",
      "Faster hiring, less HR workload",
      "Ready bench for peak seasons",
      "Better staff fit, guest reviews",
    ],
    bg: "#3b652b",
    imageUrl: "/images/advantage/image1.png",
  };

  const jobseekerContent = {
    heading: "Students & Job Seekers",
    points: [
      "Only hotel & hospitality jobs",
      "Shine with your PIT score profile",
      "Apply in few taps — no walk-ins needed",
      "Hotels actively look for you",
      "Faster entry into premium properties",
    ],
    // bg: "#7da855",
    bg: "#3b652b",
    imageUrl: "/images/advantage/image2.png",
  };

  return (
    <section
      id="advantage"
      className="relative py-16 md:py-28 bg-[#fdf9f0] overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="mb-14 text-center">
          <h2 className="font-display max-w-7xl text-[#402701] text-center text-5xl tracking-wide leading-relaxed sm:text-7xl leading-[1.1] uppercase">
            Why <span style={{ color: "#0f3d34" }}>Staffari</span> Is Your
            Competitive Advantage
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-charcoalBlack/70">
            Built exclusively for hospitality, faster, smarter, better matching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
          <PremiumCard content={hotelContent} icon={Hotel} />
          <PremiumCard content={jobseekerContent} icon={GraduationCap} />
        </div>
      </Container>
    </section>
  );
}
