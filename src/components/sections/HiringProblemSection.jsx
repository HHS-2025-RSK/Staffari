import React from "react";
import Container from "../ui/Container";

export default function HiringProblemSection() {
  return (
    <section id="problem" className="bg-beige">
      <Container>
        {/* Title */}
        <h2 className="font-display mx-auto max-w-7xl text-[#402701] text-center text-5xl tracking-wide leading-relaxed sm:text-7xl leading-[1.1] uppercase">
          Why hospitality hiring is broken?
        </h2>

        {/* Cards */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          <HiringCard
            title="Hotels & Restaurants"
            description="Slow hiring cycles and high agency costs"
            image="/images/hiring/hotel1.png"
          />

          <HiringCard
            title="Students & Colleges"
            description="Limited access to real industry opportunities"
            image="/images/hiring/college1.png"
          />

          <HiringCard
            title="Job Seekers"
            description="Delayed responses and unclear job visibility"
            image="/images/hiring/jobseeker1.png"
          />
        </div>

        {/* Bottom line */}
        <p className="font-display mx-auto mt-10 max-w-7xl text-center font-body text-[40px] leading-10 text-black">
          Disconnected systems slow everyone down. Staffari brings it all
          together in one unified ecosystem.
        </p>
      </Container>
    </section>
  );
}

/* ---------------------------------- */
/* Card Component */
/* ---------------------------------- */

function HiringCard({ title, description, image }) {
  return (
    <div
      className="
        group mx-auto w-64
        rounded-3xl bg-white/70 backdrop-blur
        border border-mutedOlive/20
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        border-4 border-[#402701]
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="
            h-64 w-full object-cover
            transition-all duration-300
            group-hover:scale-[1.04]
            group-hover:shadow-inner
          "
        />
      </div>

      {/* Content */}
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
