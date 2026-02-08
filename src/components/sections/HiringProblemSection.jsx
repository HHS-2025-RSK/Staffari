import React from "react";
import Container from "../ui/Container";

export default function HiringProblemSection() {
  return (
    <section id="problem" className="mt-10 bg-beige">
      <Container>
        {/* Title */}
        <h2 className="mx-auto max-w-4xl text-center font-body text-3xl font-bold leading-tight sm:text-5xl">
          Why hospitality hiring is broken?
        </h2>

        {/* Cards */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          <HiringCard
            title="Hotels & Restaurants"
            description="Slow hiring cycles and high agency costs"
            image="/images/hiring/hotel.png"
          />

          <HiringCard
            title="Students & Colleges"
            description="Limited access to real industry opportunities"
            image="/images/hiring/college.png"
          />

          <HiringCard
            title="Job Seekers"
            description="Delayed responses and unclear job visibility"
            image="/images/hiring/jobseeker.png"
          />
        </div>

        {/* Bottom line */}
        <p className="mx-auto mt-10 max-w-3xl text-center font-body text-[20px] leading-7 text-mutedOlive">
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
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-3xl">
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
        <h3 className="font-body text-lg font-semibold">{title}</h3>
        <p className="mt-2 font-body text-[14px] leading-6 text-mutedOlive">
          {description}
        </p>
      </div>
    </div>
  );
}
