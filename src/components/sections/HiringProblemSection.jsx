import React, { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";

/**
 * Enhanced visibility hook
 * Uses a negative rootMargin to ensure the animation triggers
 * when the element is well within the mobile viewport.
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

export default function HiringProblemSection() {
  const titleRef = useRef(null);
  // const isTitleVisible = useIsVisible(titleRef);

  const footerTextRef = useRef(null);
  const isFooterVisible = useIsVisible(footerTextRef);

  return (
    <section
      id="problem"
      className="bg-beige overflow-hidden pb-20"
      ref={titleRef}
    >
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
        @keyframes revealText {
          from { 
            opacity: 0; 
            clip-path: inset(0 0 100% 0); 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            clip-path: inset(0 0 0% 0); 
            transform: translateY(0); 
          }
        }
      `}</style>

      <Container>
        <h2
          className="font-display mx-auto max-w-7xl text-[#402701] text-center text-5xl lg:tracking-wide lg:leading-relaxed sm:text-7xl leading-[1.1] uppercase"
          // style={{
          //   opacity: 0,
          //   animation: isTitleVisible
          //     ? "revealText 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards"
          //     : "none",
          // }}
        >
          Why hospitality hiring is broken?
        </h2>

        <div className="mt-5 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <HiringCard
            title="Hotels & Restaurants"
            description="Slow hiring cycles and high agency costs"
            image="/images/hiring/hotel1.png"
            delay="0.1s"
          />
          <HiringCard
            title="Students & Colleges"
            description="Limited access to real industry opportunities"
            image="/images/hiring/college1.png"
            delay="0.2s"
          />
          <HiringCard
            title="Job Seekers"
            description="Delayed responses and unclear job visibility"
            image="/images/hiring/jobseeker1.png"
            delay="0.3s"
          />
        </div>

        <p
          ref={footerTextRef}
          className="font-display mx-auto mt-16 max-w-7xl text-center text-[32px] md:text-[40px] leading-tight text-[#412802]"
          style={{
            opacity: 0,
            animation: isFooterVisible
              ? "superReveal 1s ease-out 0.2s forwards"
              : "none",
          }}
        >
          <span>Disconnected systems slow everyone down.</span>
          <br></br>
          <span className="text-[#0f3d34] font-bold">Staffari</span> brings it
          all together in one unified ecosystem.
        </p>
      </Container>
    </section>
  );
}

function HiringCard({ title, description, image, delay }) {
  const cardRef = useRef(null);
  const isCardVisible = useIsVisible(cardRef);

  return (
    <div
      ref={cardRef}
      className="
        group w-full max-w-[280px]
        rounded-3xl bg-white/70 backdrop-blur
        border-4 border-[#402701]
        transition-all duration-500
        hover:-translate-y-4
        hover:shadow-[0_20px_50px_rgba(64,39,1,0.2)]
        will-change-transform
      "
      style={{
        opacity: 0,
        animation: isCardVisible
          ? `superReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay} forwards`
          : "none",
      }}
    >
      <div className="overflow-hidden rounded-t-[1.25rem]">
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

      <div className="p-6 text-center">
        <h3 className="font-display text-[#0f3d34] tracking-wide text-2xl font-bold">
          {title}
        </h3>
        <p className="mt-3 font-body font-semibold text-[17px] leading-relaxed text-[#402701]">
          {description}
        </p>
      </div>
    </div>
  );
}
