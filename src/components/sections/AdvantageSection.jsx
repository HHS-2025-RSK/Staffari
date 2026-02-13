import React from "react";
import { CheckCircle2, Hotel, GraduationCap } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// ────────────────────────────────────────────────
// Premium Side-by-Side Card (Responsive)
// ────────────────────────────────────────────────
function PremiumCard({ content, icon }) {
  const Icon = icon;

  return (
    <div
      className="
        font-body
        group relative
        rounded-[1.5rem] sm:rounded-[2rem]
        overflow-hidden
        shadow-[0_20px_50px_rgba(0,0,0,0.1)]
        lg:hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        lg:hover:-translate-y-4
        flex flex-col h-full
      "
      style={{ backgroundColor: content.bg }}
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

      <div className="flex flex-col md:flex-row h-full">
        {/* IMAGE */}
        <div className="md:w-2/5 lg:w-5/12 relative overflow-hidden flex-shrink-0 h-[220px] sm:h-[260px] md:h-full">
          <img
            src={content.imageUrl}
            alt={content.heading}
            className="
              w-full h-full object-cover
              transition-transform duration-[1.5s] ease-out
              lg:group-hover:scale-110
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent" />

          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="md:w-3/5 lg:w-7/12 p-5 sm:p-6 lg:p-8 flex flex-col justify-center relative">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
              {content.heading}
            </h3>
            <div className="h-1 w-10 sm:w-12 bg-white/30 mt-3 rounded-full lg:group-hover:w-20 transition-all duration-500" />
          </div>

          <ul className="space-y-3 sm:space-y-4">
            {content.points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 sm:gap-4 text-white/90"
              >
                <CheckCircle2 className="w-5 h-5 text-white opacity-70 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
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
    heading: "Students & Seekers",
    points: [
      "Only hotel & hospitality jobs",
      "Shine with PIT score profile",
      "Apply in a few taps, no walk-ins",
      "Hotels come looking for you",
      "Faster entry into top hotels",
    ],
    bg: "#6b8e4e",
    imageUrl: "/images/hiring/jobseeker.png",
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#FDFCF7] overflow-hidden relative">
      <Container>
        <SectionTitle
          title="Why is Staffari Your Competitive Advantage?"
          desc="Built exclusively for hospitality — faster, smarter, better."
          className="mb-12 sm:mb-16 md:mb-24 text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 xl:gap-14">
          <PremiumCard content={hotelContent} icon={Hotel} />
          <PremiumCard content={jobseekerContent} icon={GraduationCap} />
        </div>
      </Container>
    </section>
  );
}
