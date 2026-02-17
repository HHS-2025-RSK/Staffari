// AdvantageSection.tsx
import React from "react";
import { Hotel, GraduationCap } from "lucide-react";
import Container from "../ui/Container";
import PremiumCard from "../ui/PremiumCard";

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
          <h2 className="
  font-display 
  max-w-7xl 
  text-[#402701] 
  text-center 
  text-5xl 
  sm:text-7xl 
  uppercase
  tracking-wide
  leading-[0.95]
">
            Why <span style={{ color: "#0f3d34" }}>Staffari</span> Is Your
            <br />
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
