// AdvantageSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Hotel, GraduationCap } from "lucide-react";
import Container from "../ui/Container";
import PremiumCard from "../ui/PremiumCard";

/**
 * Visibility Hook
 */
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntersecting(true);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

export default function AdvantageSection() {
  const titleRef = useRef(null);
  const isTitleVisible = useIsVisible(titleRef);

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
      className="relative pt-16 pb-24 md:py-30 bg-[#fdf9f0] overflow-hidden"
    >
      {/* Animation Keyframes */}
      <style>{`
        @keyframes superReveal {
          0% { 
            opacity: 0; 
            transform: translateY(40px) scale(0.92); 
            filter: blur(8px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            filter: blur(0); 
          }
        }
      `}</style>

      <Container className="relative z-10">
        <div className="mb-14 text-center">
          <h2
            ref={titleRef}
            className="
    font-display 
    max-w-7xl 
    text-[#402701] 
    text-center 
    text-5xl 
    sm:text-7xl 
    uppercase
    tracking-wide
    leading-[0.95]
  "
            style={{
              opacity: 0,
              animation: isTitleVisible
                ? "superReveal 1s ease-out 0.2s forwards"
                : "none",
            }}
          >
            <span className="block sm:inline">
              Why <span className="text-[#0f3d34]">Staffari </span>
            </span>
            {/* <span className="block sm:inline text-[#0f3d34]">Staffari </span> */}
            <span className="block sm:inline">Is Your </span>
            <span className="block sm:inline">Competitive </span>
            <span className="block sm:inline">Advantage? </span>

            {/* Desktop / Tablet line break */}
            <span className="hidden sm:inline">
              <br />
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-charcoalBlack/70">
            Built exclusively for hospitality - faster, smarter & better
            matching
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
