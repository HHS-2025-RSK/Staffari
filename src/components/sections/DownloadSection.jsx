// import React from "react";
// import Container from "../ui/Container";
// import Pill from "../ui/Pill";
// import StoreButton from "../ui/StoreButton";

// export default function DownloadSection({ PLAYSTORE_URL, APPSTORE_URL }) {
//   return (
//     <section id="download" className="py-16">
//       <Container>
//         <div className="rounded-3xl border border-mutedOlive/20 bg-deepJungleGreen p-8 text-white md:p-10">
//           <div className="grid gap-8 md:grid-cols-1 md:items-center">
//             <div>
//               {/* <Pill>Download</Pill> */}
//               <h2 className="mt-4 font-body text-3xl font-bold">
//                 Hire Faster. Get Hired Smarter.
//               </h2>
//               <p className="mt-3 font-body text-[15px] leading-7 text-white/80">
//                 Staffari connects the entire hospitality workforce. Download the
//                 app from the App Store or Play Store to begin your journey.
//               </p>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 <StoreButton
//                   variant="light"
//                   href={PLAYSTORE_URL}
//                   subtitle="Get it on"
//                   title="Google Play"
//                 />
//                 <StoreButton
//                   variant="dark"
//                   href={APPSTORE_URL}
//                   subtitle="Download on the"
//                   title="App Store"
//                 />
//               </div>
//             </div>

//             {/* <div className="grid gap-3">
//               <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
//                 <div className="font-body font-semibold">
//                   Cuts recruitment friction
//                 </div>
//                 <div className="mt-1 font-body text-[14px] text-white/75">
//                   Connect directly with ready-to-work hospitality talent.
//                 </div>
//               </div>
//               <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
//                 <div className="font-body font-semibold">
//                   Reduces time and cost
//                 </div>
//                 <div className="mt-1 font-body text-[14px] text-white/75">
//                   Less agency dependency and fewer irrelevant resumes.
//                 </div>
//               </div>
//               <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
//                 <div className="font-body font-semibold">
//                   Operationally aligned
//                 </div>
//                 <div className="mt-1 font-body text-[14px] text-white/75">
//                   Designed around practical hiring for hospitality operations.
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import StoreButton from "../ui/StoreButton";

export default function DownloadSection({ PLAYSTORE_URL, APPSTORE_URL }) {
  const images = [
    "/images/wireframe1.png",
    "/images/wireframe2.png",
    "/images/wireframe3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="download" className="py-20 lg:py-0">
      <Container>
        <div className="mx-auto rounded-[28px] bg-deepJungleGreen px-6 sm:px-12 py-12 sm:py-16">
          <div className="grid md:grid-cols-[1.3fr_0.7fr] items-center gap-10 md:gap-14">
            {/* TEXT SIDE */}
            <div className="text-white order-2 md:order-1">
              <div className="text-white/60 text-xs sm:text-sm tracking-widest uppercase">
                Download the App
              </div>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight max-w-lg">
                <span className="block max-[860px]:block md:inline">
                  Hire Faster.
                </span>{" "}
                <span className="block max-[860px]:block md:inline">
                  Get Hired Smarter.
                </span>
              </h2>

              <div className="mt-4 w-12 h-[2px] bg-white/30" />

              <p className="mt-5 text-white/75 leading-7 max-w-sm text-base sm:text-lg">
                Staffari connects the entire hospitality workforce. Download the
                app from the App Store or Play Store to begin your journey.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <StoreButton
                  variant="light"
                  href={PLAYSTORE_URL}
                  subtitle="Get it on"
                  title="Google Play"
                  bgImage="/images/download/play.png"
                />
                <StoreButton
                  variant="light"
                  href={APPSTORE_URL}
                  subtitle="Download on the"
                  title="App Store"
                  bgImage="/images/download/appstore.png"
                />
              </div>
            </div>

            {/* PHONE SIDE */}
            <div
              className="relative flex justify-center order-1 md:order-2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Soft radial glow behind phone */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-3xl -z-10" />

              <div className="relative w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px]">
                {/* Left arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl sm:text-4xl transition-colors"
                  aria-label="Previous slide"
                >
                  ‹
                </button>

                {/* Realistic CSS Phone */}
                <div
                  className="
                    relative mx-auto
                    aspect-[9/19.5] rounded-[2.8rem] sm:rounded-[3.2rem] md:rounded-[3.5rem]
                    bg-gradient-to-b from-gray-900 via-black to-gray-950
                    shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_2px_6px_rgba(255,255,255,0.1)]
                    ring-1 ring-white/5 overflow-hidden border-4 border-black
                  "
                >
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-[1.2%] left-1/2 -translate-x-1/2 w-10 sm:w-20 h-4 bg-black rounded-full z-20 shadow-inner flex items-center justify-center">
                    <div className="w-4 h-4 bg-neutral-950 rounded-full shadow"></div>
                  </div>

                  {/* Screen content area with inner bezel padding */}
                  <div className="relative w-full h-full pt-10 pb-12 px-3 sm:px-4">
                    <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-inner">
                      {images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`App preview ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                            index === currentIndex
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Subtle side details (power button + volume rocker) */}
                  {/* <div className="absolute right-[-2%] top-[28%] w-1.5 h-16 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-l shadow"></div>
                  <div className="absolute right-[-2%] top-[55%] w-1.5 h-10 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-l shadow"></div> */}
                </div>

                {/* Right arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl sm:text-4xl transition-colors"
                  aria-label="Next slide"
                >
                  ›
                </button>

                {/* Dots indicator */}
                <div className="mt-6 flex justify-center gap-2.5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-white scale-125 shadow-md"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
