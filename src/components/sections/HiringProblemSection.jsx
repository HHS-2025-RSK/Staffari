// import React from "react";
// import Container from "../ui/Container";

// export default function HiringProblemSection() {
//   return (
//     <section id="problem" className="bg-beige">
//       <Container>
//         {/* Title */}
//         <h2 className="font-display mx-auto max-w-7xl text-[#402701] text-center text-5xl tracking-wide leading-relaxed sm:text-7xl leading-[1.1] uppercase">
//           Why hospitality hiring is broken?
//         </h2>

//         {/* Cards */}
//         <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Card */}
//           <HiringCard
//             title="Hotels & Restaurants"
//             description="Slow hiring cycles and high agency costs"
//             image="/images/hiring/hotel1.png"
//           />

//           <HiringCard
//             title="Students & Colleges"
//             description="Limited access to real industry opportunities"
//             image="/images/hiring/college1.png"
//           />

//           <HiringCard
//             title="Job Seekers"
//             description="Delayed responses and unclear job visibility"
//             image="/images/hiring/jobseeker1.png"
//           />
//         </div>

//         {/* Bottom line */}
//         <p className="font-display mx-auto mt-10 max-w-7xl text-center text-[40px] leading-10 text-[#523101c2]">
//           Disconnected systems slow everyone down.{" "}
//           <span style={{ color: "#0f3d34" }}>Staffari</span> brings it all
//           together in one unified ecosystem.
//         </p>
//       </Container>
//     </section>
//   );
// }

// /* ---------------------------------- */
// /* Card Component */
// /* ---------------------------------- */

// function HiringCard({ title, description, image }) {
//   return (
//     <div
//       className="
//         group mx-auto w-64
//         rounded-3xl bg-white/70 backdrop-blur
//         border border-[#402701]
//         transition-all duration-300
//         hover:-translate-y-1
//         hover:shadow-xl
//         border-4 border-[#402701]
//       "
//     >
//       {/* Image */}
//       <div className="overflow-hidden rounded-t-2xl">
//         <img
//           src={image}
//           alt={title}
//           className="
//             h-64 w-full object-cover
//             transition-all duration-300
//             group-hover:scale-[1.04]
//             group-hover:shadow-inner
//           "
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5 text-center">
//         <h3 className="font-display text-[#0f3d34] tracking-wide text-2xl">
//           {title}
//         </h3>
//         <p className="mt-2 font-body text-[18px] leading-6 text-[#402701]">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Container from "../ui/Container";
import useScrollReveal from "../../utils/useScrollReveal";

export default function HiringProblemSection() {
  const titleReveal = useScrollReveal(0.2);
  const cardsReveal = useScrollReveal(0.25);
  const bottomReveal = useScrollReveal(0.35);

  return (
    <section id="problem" className="bg-beige py-20">
      <Container>
        {/* ================= TITLE ================= */}
        <h2
          ref={titleReveal.ref}
          className={`font-display mx-auto max-w-7xl text-[#402701] text-center text-5xl sm:text-7xl leading-[1.1] uppercase transition-all duration-[1000ms] ${
            titleReveal.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Why hospitality hiring is broken?
        </h2>

        {/* ================= CARDS ================= */}
        <div
          ref={cardsReveal.ref}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatedCard
            reveal={cardsReveal.isVisible}
            delay="delay-0"
            title="Hotels & Restaurants"
            description="Slow hiring cycles and high agency costs"
            image="/images/hiring/hotel1.png"
          />

          <AnimatedCard
            reveal={cardsReveal.isVisible}
            delay="delay-200"
            title="Students & Colleges"
            description="Limited access to real industry opportunities"
            image="/images/hiring/college1.png"
          />

          <AnimatedCard
            reveal={cardsReveal.isVisible}
            delay="delay-400"
            title="Job Seekers"
            description="Delayed responses and unclear job visibility"
            image="/images/hiring/jobseeker1.png"
          />
        </div>

        {/* ================= BOTTOM LINE ================= */}
        <p
          ref={bottomReveal.ref}
          className={`font-display mx-auto mt-14 max-w-7xl text-center text-[40px] leading-tight text-[#523101c2] transition-all duration-[1200ms] ${
            bottomReveal.isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          Disconnected systems slow everyone down.{" "}
          <span className="text-[#0f3d34]">Staffari</span> brings it all
          together in one unified ecosystem.
        </p>
      </Container>
    </section>
  );
}

/* ---------------------------------- */
/* Animated Card Component */
/* ---------------------------------- */

function AnimatedCard({ title, description, image, reveal, delay }) {
  return (
    <div
      className={`
        group mx-auto w-64
        rounded-3xl bg-white/70 backdrop-blur
        border-4 border-[#402701]
        transition-all duration-[900ms] ${delay}
        ${
          reveal
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }
      `}
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="
            h-64 w-full object-cover
            transition-all duration-500
            group-hover:scale-[1.05]
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
