import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import { PrimaryButton } from "./ui/Buttons";

export default function Navbar() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero-section"); // ← we'll add this id

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show CTA when Hero is NOT intersecting (i.e. scrolled past)
        setShowCta(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.1, // trigger when even 10% is hidden
        rootMargin: "0px",
      },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-mutedOlive/15 bg-beige/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl font-bold text-deepJungleGreen"
        >
          STAFFARI
        </a>

        {/* <nav className="hidden items-center gap-6 md:flex">
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#what"
          >
            What is Staffari
          </a>
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#problem"
          >
            The Problem
          </a>
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#helps"
          >
            How Staffari Helps
          </a>
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#advantage"
          >
            Advantage
          </a>
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#newsletter"
          >
            Newsletter
          </a>
          <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#faq"
          >
            FAQ
          </a> 
        </nav> */}

        <div className="flex items-center gap-3">
          <div
            className={`
              transition-all duration-300 ease-in-out
              ${
                showCta
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }
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
