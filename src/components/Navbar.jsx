// import React, { useEffect, useState } from "react";
// import { ArrowRight } from "lucide-react";
// import Container from "./ui/Container";
// import { PrimaryButton } from "./ui/Buttons";

// export default function Navbar() {
//   const [showCta, setShowCta] = useState(false);

//   useEffect(() => {
//     const hero = document.querySelector("#hero-section");

//     if (!hero) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setShowCta(!entry.isIntersecting);
//       },
//       {
//         root: null,
//         threshold: 0.1,
//         rootMargin: "0px",
//       },
//     );

//     observer.observe(hero);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 border-b border-mutedOlive/15 bg-beige/80 backdrop-blur">
//       <Container className="flex h-16 items-center justify-between">
//         {" "}
//         {/* taller for logo breathing room */}
//         <a
//           href="#home"
//           className="relative flex flex-col items-center justify-center group"
//         >
//           {/* Jungle branch/vine image as base */}
//           <img
//             src="/images/button.png"
//             alt="Tropical jungle vine branch"
//             className="h-20 w-auto max-w-[200px] object-contain opacity-90 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
//           />

//           {/* Text overlaid exactly centered on the image */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <span className="mb-1 font-body text-3xl font-bold text-[#FDF9F0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)] transition-all duration-300">
//               STAFFARI
//             </span>
//           </div>
//         </a>
//         {/* <nav className="hidden items-center gap-6 md:flex"> ... </nav> (still commented) */}
//         <div className="flex items-center gap-3">
//           <div
//             className={`
//               transition-all duration-300 ease-in-out
//               ${showCta ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
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
        {/* <a
          href="#home"
          className="relative flex flex-col items-center justify-center group"
        >
          <img
            src="/images/button.png"
            alt="Tropical jungle vine branch"
            className="h-20 w-auto max-w-[200px] object-contain opacity-90 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="mb-1 font-body text-3xl font-bold text-[#FDF9F0] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)] transition-all duration-300">
              STAFFARI
            </span>
          </div>
        </a> */}
        <a href="#home" className="flex flex-col items-start leading-tight">
          <span className="font-display text-4xl font-bold text-deepJungleGreen">
            STAFFARI
          </span>
          <span className="text-sm font-medium text-deepJungleGreen/80 mt-0.5">
            Hunt Smart. Hire Right.
          </span>
        </a>
        {/* <a href="#home" className="flex flex-col items-start gap-0.5">
          <span className="font-display text-4xl font-bold text-deepJungleGreen tracking-tight">
            STAFFARI
          </span>
          <span className="font-body text-base font-semibold text-olive-700/90">
            Hunt Smart, Hire Right.
          </span>
        </a> */}
        {/* <a href="#home" className="flex flex-col items-start leading-none">
          <span className="font-display text-4xl font-bold text-deepJungleGreen">
            STAFFARI
          </span>
          <span className="mt-1 text-xs font-medium uppercase tracking-wider text-deepJungleGreen/70">
            Hunt Smart, Hire Right.
          </span>
        </a> */}
        {/* <a
          href="#home"
          className="flex flex-col items-center text-center leading-tight"
        >
          <span className="font-display text-4xl font-bold text-deepJungleGreen">
            STAFFARI
          </span>
          <span className="mt-1 text-sm font-medium text-deepJungleGreen/75">
            Hunt Smart, Hire Right.
          </span>
        </a> */}
        {/* CTA Button Section */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#problem"
          >
            The Problem
          </a>
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#what"
          >
            What is Staffari
          </a>
          {/* <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#helps"
          >
            How Staffari Helps
          </a> */}
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#advantage"
          >
            Advantage
          </a>
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#download"
          >
            Download
          </a>
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#newsletter"
          >
            Newsletter
          </a>
          {/* <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#faq"
          >
            FAQ
          </a> */}
        </nav>
        <div className="flex items-center gap-3">
          <div
            className={`
              transition-all duration-300 ease-in-out
              ${showCta ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
            `}
          >
            <PrimaryButton
              as="a"
              href="#download"
              // UPDATED CLASSNAME:
              // 1. whitespace-nowrap: Forces text to be one line.
              // 2. px-3 py-1.5 text-xs: Makes button smaller/shorter on mobile.
              // 3. sm:... : Restores normal size on tablets/desktops.
              className="font-display flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-medium sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            >
              Start Your Hunt
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
