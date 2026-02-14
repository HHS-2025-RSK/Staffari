import React from "react";
import { CheckCircle2, Hotel, GraduationCap } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// ────────────────────────────────────────────────
// Premium Side-by-Side Card
// ────────────────────────────────────────────────
function PremiumCard({ content, icon }) {
  const Icon = icon;

  return (
    <div
      className="
        font-body
        group relative
        rounded-[2rem] overflow-hidden
        shadow-[0_20px_50px_rgba(0,0,0,0.1)]
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        transform hover:-translate-y-4
        flex flex-col h-full
      "
      style={{ backgroundColor: content.bg }}
    >
      {/* Decorative inner glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

      <div className="flex flex-col md:flex-row h-full">
        {/* LEFT: Image */}
        <div className="md:w-2/5 lg:w-5/12 relative overflow-hidden flex-shrink-0 min-h-[300px] md:min-h-full">
          <img
            src={content.imageUrl}
            alt={content.heading}
            className="
              w-full h-full object-cover
              transition-transform duration-[1.5s] ease-out
              group-hover:scale-110
            "
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent" />

          {/* Floating icon */}
          <div className="absolute top-6 left-6 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="md:w-3/5 lg:w-7/12 p-6 md:p-7 lg:p-8 flex flex-col relative">
          {/* Fixed heading region – same starting position & height on both cards */}
          <div className="mb-10 h-[50px] flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight line-clamp-2">
              {content.heading}
            </h3>
            <div className="h-1 w-16 bg-white/40 mt-4 rounded-full group-hover:w-24 transition-all duration-500" />
          </div>

          {/* Bullet points – start at consistent position */}
          <ul className="space-y-5 flex-grow">
            {content.points.map((point, idx) => (
              <li
                key={idx}
                className="group/item flex items-start gap-4 text-white/90"
              >
                <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0 text-white opacity-70 group-hover/item:opacity-100 transition-opacity duration-300" />
                <span className="text-base md:text-lg font-medium tracking-wide leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* Depth accent */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Main Section
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
    bg: "#0f3d34",
    imageUrl: "/images/hiring/hotel.png",
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
    bg: "#6b8e4e",
    imageUrl: "/images/hiring/jobseeker.png",
  };

  return (
    <section className="py-20 md:py-32 bg-[#FDFCF7] overflow-hidden relative">
      {/* Background decor */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-beige/30 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          title="Why Staffari is Your Competitive Advantage"
          desc="Built exclusively for hospitality — faster, smarter, better matching."
          className="mb-16 md:mb-24 text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-stretch">
          <PremiumCard content={hotelContent} icon={Hotel} />
          <PremiumCard content={jobseekerContent} icon={GraduationCap} />
        </div>
      </Container>
    </section>
  );
}
