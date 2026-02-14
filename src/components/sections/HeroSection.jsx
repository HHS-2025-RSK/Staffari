import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Container from "../ui/Container";
import { PrimaryButton } from "../ui/Buttons";
import StoreButton from "../ui/StoreButton";

export default function HeroSection({ PLAYSTORE_URL, APPSTORE_URL }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative bg-[#fdf9f0] min-h-screen overflow-hidden"
    >
      {/* ───────────────────────────────────────────── */}
      {/* MOBILE TOP IMAGE (FULL WIDTH, HERO STYLE) */}
      {/* ───────────────────────────────────────────── */}
      <div className="block lg:hidden w-full h-[85vh]">
        <img
          src="/images/herosection/pandaontree.png"
          alt="Jungle adventure frame"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ───────────────────────────────────────────── */}
      {/* DESKTOP IMAGE (UNCHANGED) */}
      {/* ───────────────────────────────────────────── */}
      <div className="hidden lg:block absolute top-7 left-0 bottom-0 w-full lg:w-1/2 pointer-events-none z-0">
        <img
          src="/images/herosection/pandaontree.png"
          alt="Jungle adventure frame"
          className="w-full h-auto object-contain object-left-bottom max-h-[85vh]"
        />
      </div>

      {/* ───────────────────────────────────────────── */}
      {/* CONTENT */}
      {/* ───────────────────────────────────────────── */}
      <Container className="relative z-10 w-full py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-end py-12 lg:py-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:pl-12">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-deepJungleGreen leading-[1.1]">
              <span className="block">Find.</span>
              <span className="block text-[#3b652b]">Connect.</span>
              <span className="block text-[#7da855]">Thrive.</span>
            </h1>

            <p className="font-body text-lg md:text-2xl text-black max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A single ecosystem for hospitality hiring, jobs, and careers.
              Built to power smarter recruitment and meaningful hospitality
              careers.
            </p>

            <div className="pt-6 flex justify-center lg:justify-start">
              <PrimaryButton
                onClick={() => setIsOpen(true)}
                className="text-xl py-4 px-10 rounded-full shadow-lg transition hover:scale-105"
              >
                Start Your Hunt <ArrowRight className="ml-3 h-6 w-6" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>

      {/* ───────────────────────────────────────────── */}
      {/* MODAL */}
      {/* ───────────────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepJungleGreen/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-emerald-900 border-4 border-emerald-700 shadow-2xl">
            <div className="relative p-8 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-emerald-200 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Welcome to the Jungle
              </h2>
              <p className="text-emerald-100/80 mb-8 font-body">
                The hunt starts here. Download the app to begin.
              </p>

              <div className="flex flex-col gap-4 items-center">
                <StoreButton
                  variant="light"
                  href={PLAYSTORE_URL}
                  subtitle="Get it on"
                  title="Google Play"
                  className="w-full max-w-[200px]"
                />
                <StoreButton
                  variant="light"
                  href={APPSTORE_URL}
                  subtitle="Download on the"
                  title="App Store"
                  className="w-full max-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// import React, { useState } from "react";
// import { ArrowRight, X } from "lucide-react";
// import Container from "../ui/Container";
// import { PrimaryButton } from "../ui/Buttons";
// import StoreButton from "../ui/StoreButton";
// import GLBModel from "../ui/GLBModel";

// export default function HeroSection({ PLAYSTORE_URL, APPSTORE_URL }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section
//       id="hero-section"
//       className="relative bg-[#fdf9f0] min-h-screen flex items-center overflow-hidden"
//     >
//       <Container className="relative z-10 w-full">
//         <div className="flex flex-col lg:flex-row items-center lg:items-end">
//           {/* LEFT: GLB column - bottom aligned, full height */}
//           {/* LEFT: GLB column */}
//           <div className="w-full lg:w-1/2 pointer-events-none flex items-end">
//             <div className="w-full h-[95vh] lg:h-[95vh]">
//               {" "}
//               {/* 95vh guarantees full fit */}
//               <GLBModel url="/models/hero-panda.glb" />
//             </div>
//           </div>

//           {/* RIGHT: Content column - vertically centered */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12 flex flex-col items-center lg:items-start justify-center">
//             <div className="space-y-6 max-w-lg">
//               <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-deepJungleGreen leading-[1.1]">
//                 <span className="block">Find.</span>
//                 <span className="block text-[#3b652b]">Connect.</span>
//                 <span className="block text-[#7da855]">Thrive.</span>
//               </h1>

//               <p className="font-body text-lg md:text-2xl text-black leading-relaxed">
//                 A single ecosystem for hospitality hiring, jobs, and careers.
//                 Built to power smarter recruitment and meaningful hospitality
//                 careers.
//               </p>

//               <div className="pt-6">
//                 <PrimaryButton
//                   onClick={() => setIsOpen(true)}
//                   className="text-xl py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105"
//                 >
//                   Start Your Hunt <ArrowRight className="ml-3 h-6 w-6" />
//                 </PrimaryButton>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepJungleGreen/60 backdrop-blur-sm">
//           <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-emerald-900 border-4 border-emerald-700 shadow-2xl">
//             <div className="relative p-8 text-center">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="absolute top-4 right-4 text-emerald-200 hover:text-white"
//               >
//                 <X className="h-6 w-6" />
//               </button>

//               <h2 className="font-display text-2xl font-bold text-white mb-2">
//                 Welcome to the Jungle
//               </h2>
//               <p className="text-emerald-100/80 mb-8 font-body">
//                 The hunt starts here. Download the app to begin.
//               </p>

//               <div className="flex flex-col gap-4 items-center">
//                 <StoreButton
//                   variant="light"
//                   href={PLAYSTORE_URL}
//                   subtitle="Get it on"
//                   title="Google Play"
//                   className="w-full max-w-[200px]"
//                 />
//                 <StoreButton
//                   variant="light"
//                   href={APPSTORE_URL}
//                   subtitle="Download on the"
//                   title="App Store"
//                   className="w-full max-w-[200px]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
