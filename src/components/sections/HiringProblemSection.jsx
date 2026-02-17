import React, { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";

// Simple hook to detect when an element is visible
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once it's visible, keep it visible (for the animation to finish)
        if (entry.isIntersecting) setIntersecting(true);
      },
      { threshold: 0.1 },
    ); // Trigger when 10% of the element is seen

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

export default function HiringProblemSection() {
  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <section id="problem" className="bg-beige" ref={sectionRef}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealText {
          from { opacity: 0; clip-path: inset(0 0 100% 0); }
          to { opacity: 1; clip-path: inset(0 0 0% 0); }
        }
      `}</style>

      <Container>
        <h2
          className="font-display mx-auto max-w-7xl text-[#402701] text-center text-5xl tracking-wide leading-relaxed sm:text-7xl leading-[1.1] uppercase"
          // style={{
          //   opacity: 0,
          //   animation: isVisible
          //     ? "revealText 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards"
          //     : "none",
          // }}
        >
          Why hospitality hiring is broken?
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <HiringCard
            title="Hotels & Restaurants"
            description="Slow hiring cycles and high agency costs"
            image="/images/hiring/hotel1.png"
            delay="0.1s"
            trigger={isVisible}
          />
          <HiringCard
            title="Students & Colleges"
            description="Limited access to real industry opportunities"
            image="/images/hiring/college1.png"
            delay="0.3s"
            trigger={isVisible}
          />
          <HiringCard
            title="Job Seekers"
            description="Delayed responses and unclear job visibility"
            image="/images/hiring/jobseeker1.png"
            delay="0.5s"
            trigger={isVisible}
          />
        </div>

        <p
          className="font-display mx-auto mt-10 max-w-7xl text-center text-[40px] leading-10 text-[#523101c2]"
          style={{
            opacity: 0,
            animation: isVisible
              ? "fadeInUp 1s ease-out 0.8s forwards"
              : "none",
          }}
        >
          Disconnected systems slow everyone down.{" "}
          <span className="text-[#0f3d34]">Staffari</span> brings it all
          together in one unified ecosystem.
        </p>
      </Container>
    </section>
  );
}

function HiringCard({ title, description, image, delay, trigger }) {
  return (
    <div
      className={`
        group mx-auto w-64
        rounded-3xl bg-white/70 backdrop-blur
        border border-[#402701]
        transition-all duration-500
        hover:-translate-y-4
        hover:shadow-[0_20px_50px_rgba(64,39,1,0.3)]
        border-4 border-[#402701]
      "
      style={{
        opacity: 0,
        animation: trigger
          ? `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay} forwards`
          : "none",
      }}
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="
            h-64 w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
            border-b-4 border-[#402701]
          "
        />
      </div>

      <div className="p-5 text-center">
        <h3 className="font-display text-[#0f3d34] tracking-wide text-2xl">
          {title}
        </h3>
        <p className="mt-2 font-body text-[18px] leading-6 text-[#402701]">
          {description}
        </p>
      </div>
    </div>
  );
}
