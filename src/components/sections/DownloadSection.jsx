// import React, { useEffect, useState, useRef, useCallback } from "react";
// import Container from "../ui/Container";
// import StoreButton from "../ui/StoreButton";

// export default function DownloadSection({
//   PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.jacstaffari.hhs&pcampaignid=web_share",
//   APPSTORE_URL = "https://play.google.com/store/apps/details?id=com.jacstaffari.hhs&pcampaignid=web_share",
// }) {
//   const images = [
//     "/images/wireframe4.png",
//     "/images/wireframe5.png",
//     "/images/wireframe3.png",
//     "/images/wireframe1.png",
//     "/images/wireframe2.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isInView, setIsInView] = useState(false);

//   const sectionRef = useRef(null);
//   const observerRef = useRef(null);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   // Intersection Observer callback - NO setState in effect!
//   const handleIntersection = useCallback((entries) => {
//     entries.forEach((entry) => {
//       setIsInView(entry.isIntersecting);
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isPaused) {
//         nextSlide();
//       }
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   // Intersection Observer setup
//   useEffect(() => {
//     if (!sectionRef.current) return;

//     observerRef.current = new IntersectionObserver(handleIntersection, {
//       rootMargin: "-10% 0px -20% 0px", // Trigger early entry, late exit
//       threshold: 0.1,
//     });

//     observerRef.current.observe(sectionRef.current);

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, [handleIntersection]);

//   return (
//     <section id="download" ref={sectionRef} className="pt-20 lg:py-0">
//       <Container>
//         <div className="text-center">
//           <h2 className="font-display text-[#402701] text-center text-5xl lg:tracking-wide lg:leading-relaxed sm:text-7xl leading-[1.1] uppercase">
//             Start Your Hunt
//           </h2>
//         </div>
//         <div className="mx-auto py-12 sm:py-0">
//           <div className="grid md:grid-cols-[1.3fr_0.7fr] items-center gap-10 md:gap-14">
//             {/* TEXT SIDE - Slides from LEFT */}
//             <div
//               className={`
//                 rounded-[28px] bg-deepJungleGreen px-6 sm:px-12 py-12 sm:py-16 text-white order-2 md:order-1
//                 transform transition-all duration-1000 ease-out
//                 ${
//                   isInView
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-[-120px] opacity-0"
//                 }
//               `}
//             >
//               <h2 className="font-display lg:tracking-wide lg:leading-relaxed mt-3 text-3xl sm:text-4xl font-bold leading-tight">
//                 <span className="block max-[860px]:block md:inline">
//                   Hire Faster.
//                 </span>
//                 {"       "}
//                 <span className="block max-[860px]:block md:inline">
//                   Get Hired Smarter.
//                 </span>
//               </h2>

//               <div className="mt-4 w-12 h-[2px] bg-white/30" />

//               <p className="mt-5 text-white/75 max-w-sm text-base sm:text-lg">
//                 Staffari connects the entire hospitality workforce. Download the
//                 app from the App Store or Play Store to begin your journey.
//               </p>

//               <div className="mt-10 text-white/60 text-xs sm:text-sm tracking-widest uppercase">
//                 Download the App
//               </div>

//               <div className="mx-auto mt-8 flex gap-3 flex-wrap align-middle justify-center">
//                 <StoreButton
//                   variant="light"
//                   href={PLAYSTORE_URL}
//                   subtitle="Get it on"
//                   title="Google Play"
//                   bgImage="/images/download/play.png"
//                 />
//                 <StoreButton
//                   variant="light"
//                   href={APPSTORE_URL}
//                   subtitle="Download on the"
//                   title="App Store"
//                   bgImage="/images/download/appstore.png"
//                 />
//               </div>
//             </div>

//             {/* PHONE SIDE - Slides from RIGHT */}
//             <div
//               className={`
//                 relative flex justify-center order-1 md:order-2
//                 transform transition-all duration-1200 ease-out
//                 ${
//                   isInView
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-[120px] opacity-0"
//                 }
//               `}
//               onMouseEnter={() => setIsPaused(true)}
//               onMouseLeave={() => setIsPaused(false)}
//             >
//               {/* Soft radial glow behind phone */}
//               <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-3xl -z-10" />

//               <div className="relative w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px]">
//                 {/* Left arrow */}
//                 <button
//                   onClick={prevSlide}
//                   className="absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 text-[#0f3d34]/60 hover:text-[#0f3d34] text-3xl sm:text-4xl transition-colors"
//                   aria-label="Previous slide"
//                 >
//                   ‹
//                 </button>

//                 {/* Realistic CSS Phone */}
//                 <div className="relative mx-auto aspect-[9/19.5] ring-1 ring-white/5 overflow-hidden">
//                   <div className="relative w-full h-full pt-10 pb-12 px-3 sm:px-4">
//                     <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-inner">
//                       {images.map((img, index) => (
//                         <img
//                           key={index}
//                           src={img}
//                           alt={`App preview ${index + 1}`}
//                           className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
//                             index === currentIndex
//                               ? "opacity-100 scale-100"
//                               : "opacity-0 scale-95"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right arrow */}
//                 <button
//                   onClick={nextSlide}
//                   className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 text-[#0f3d34]/60 hover:text-[#0f3d34] text-3xl sm:text-4xl transition-colors"
//                   aria-label="Next slide"
//                 >
//                   ›
//                 </button>

//                 {/* Dots indicator */}
//                 <div className="mt-6 flex justify-center gap-2.5">
//                   {images.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentIndex(index)}
//                       className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
//                         index === currentIndex
//                           ? "bg-[#0f3d34] scale-125 shadow-md"
//                           : "bg-[#0f3d34]/40 hover:bg-white/70"
//                       }`}
//                       aria-label={`Go to slide ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import StoreButton from "../ui/StoreButton";

export default function DownloadSection({
  PLAYSTORE_URL = "https://play.google.com/store/apps/details?id=com.jacstaffari.hhs&pcampaignid=web_share",
  APPSTORE_URL = "https://play.google.com/store/apps/details?id=com.jacstaffari.hhs&pcampaignid=web_share",
}) {
  const images = [
    "/images/wireframe4.png",
    "/images/wireframe5.png",
    "/images/wireframe3.png",
    "/images/wireframe1.png",
    "/images/wireframe2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Section entrance animation
  useEffect(() => {
    const section = document.getElementById("download");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="download" className="py-20 lg:py-0">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-[#402701] text-center text-5xl lg:tracking-wide lg:leading-relaxed sm:text-7xl leading-[1.1] uppercase">
            Start Your Hunt
          </h2>
        </div>

        <div className="mx-auto px-6 sm:px-12 py-12 sm:py-0">
          <div className="grid md:grid-cols-[1.3fr_0.7fr] items-center gap-10 md:gap-14">
            {/* TEXT SIDE */}
            <div
              className={`rounded-[28px] bg-deepJungleGreen px-6 sm:px-12 py-12 sm:py-16 text-white order-2 md:order-1
              transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h2 className="font-display lg:tracking-wide lg:leading-relaxed mt-3 text-3xl sm:text-4xl font-bold leading-tight max-w-lg">
                <span className="block max-[860px]:block md:inline">
                  Hire Faster.
                </span>{" "}
                <span className="block max-[860px]:block md:inline">
                  Get Hired Smarter.
                </span>
              </h2>

              <div className="mt-4 w-12 h-[2px] bg-white/30" />

              <p className="mt-5 text-white/75 max-w-sm text-base sm:text-lg">
                Staffari connects the entire hospitality workforce. Download the
                app from the App Store or Play Store to begin your journey.
              </p>

              <div className="mt-10 text-white/60 text-xs sm:text-sm tracking-widest uppercase">
                Download the App
              </div>

              <div className="mt-8 flex gap-3 flex-wrap align-center justify-center">
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
              className={`relative flex justify-center order-1 md:order-2
              transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
              ${
                isVisible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-12"
              }`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-3xl -z-10" />

              <div className="relative w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px]">
                {/* Left Arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute -left-8 sm:-left-10 top-1/2 -translate-y-1/2 text-[#0f3d34]/60 hover:text-[#0f3d34] text-3xl sm:text-4xl transition-colors"
                  aria-label="Previous slide"
                >
                  ‹
                </button>

                {/* IMAGE ONLY (No phone frame edits) */}
                <div className="relative mx-auto aspect-[9/19.5] overflow-hidden">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`App preview ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                        index === currentIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 text-[#0f3d34]/60 hover:text-[#0f3d34] text-3xl sm:text-4xl transition-colors"
                  aria-label="Next slide"
                >
                  ›
                </button>

                {/* Dots */}
                <div className="mt-6 flex justify-center gap-2.5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-[#0f3d34] scale-125 shadow-md"
                          : "bg-[#0f3d34]/40 hover:bg-white/70"
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
