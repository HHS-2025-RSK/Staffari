import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import { PrimaryButton } from "./ui/Buttons";

export default function Navbar() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero-section");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCta(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px",
      },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-mutedOlive/15 bg-beige/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {" "}
        {/* taller for logo breathing room */}
        <a
          href="#home"
          className="relative flex flex-col items-center justify-center group"
        >
          {/* Jungle branch/vine image as base */}
          <img
            src="/images/button.png"
            alt="Tropical jungle vine branch"
            className="h-20 w-auto max-w-[200px] object-contain opacity-90 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          />

          {/* Text overlaid exactly centered on the image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="mb-1 font-body text-3xl font-bold text-[#FDF9F0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)] transition-all duration-300">
              STAFFARI
            </span>
          </div>
        </a>
        {/* <nav className="hidden items-center gap-6 md:flex"> ... </nav> (still commented) */}
        <div className="flex items-center gap-3">
          <div
            className={`
              transition-all duration-300 ease-in-out
              ${showCta ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
            `}
          >
            <PrimaryButton as="a" href="#download">
              Start Your Hunt <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </header>
  );
}

// import React, { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import Container from "./ui/Container";
// import { PrimaryButton } from "./ui/Buttons";

// export default function Navbar() {
//   const [showCta, setShowCta] = useState(false);

//   useEffect(() => {
//     const hero = document.querySelector("#hero-section"); // ← we'll add this id

//     if (!hero) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Show CTA when Hero is NOT intersecting (i.e. scrolled past)
//         setShowCta(!entry.isIntersecting);
//       },
//       {
//         root: null, // viewport
//         threshold: 0.1, // trigger when even 10% is hidden
//         rootMargin: "0px",
//       },
//     );

//     observer.observe(hero);

//     return () => observer.disconnect();
//   }, []);
//   return (
//     <header className="sticky top-0 z-50 border-b border-mutedOlive/15 bg-beige/80 backdrop-blur">
//       <Container className="flex h-16 items-center justify-between">
//         <a
//           href="#home"
//           className="font-display text-xl font-bold text-deepJungleGreen"
//         >
//           STAFFARI
//         </a>

//         {/* <nav className="hidden items-center gap-6 md:flex">
//           <a
//             className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
//             href="#what"
//           >
//             What is Staffari
//           </a>
//           <a
//             className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
//             href="#problem"
//           >
//             The Problem
//           </a>
//           <a
//             className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
//             href="#helps"
//           >
//             How Staffari Helps
//           </a>
//           <a
//             className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
//             href="#advantage"
//           >
//             Advantage
//           </a>
//           <a
//             className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
//             href="#newsletter"
//           >
//             Newsletter
//           </a>
//           <a
//             className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
//             href="#faq"
//           >
//             FAQ
//           </a>
//         </nav> */}

//         <div className="flex items-center gap-3">
//           <div
//             className={`
//               transition-all duration-300 ease-in-out
//               ${
//                 showCta
//                   ? "opacity-100 translate-y-0 pointer-events-auto"
//                   : "opacity-0 -translate-y-4 pointer-events-none"
//               }
//             `}
//           >
//             <PrimaryButton as="a" href="#download">
//               Start Your Hunt <ArrowRight className="h-4 w-4" />
//             </PrimaryButton>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// }
