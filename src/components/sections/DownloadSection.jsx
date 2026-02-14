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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="download" className="py-20">
      <Container>
        <div className="mx-auto rounded-[28px] bg-deepJungleGreen px-12 py-16">
          <div className="grid md:grid-cols-[1.3fr_0.7fr] items-center gap-14">
            {/* TEXT SIDE */}
            <div className="text-white">
              <div className="text-white/60 text-xs tracking-widest uppercase">
                Download the App
              </div>

              <h2 className="mt-3 text-3xl font-bold leading-tight max-w-lg">
                <span className="block max-[860px]:block md:inline">
                  Hire Faster.
                </span>{" "}
                <span className="block max-[860px]:block md:inline">
                  Get Hired Smarter.
                </span>
              </h2>

              <div className="mt-4 w-12 h-[2px] bg-white/30" />

              <p className="mt-5 text-white/75 leading-7 max-w-sm">
                Staffari connects the entire hospitality workforce. Download the
                app from the App Store or Play Store to begin your journey.
              </p>

              {/* <div className="mt-6 flex gap-4 text-sm text-white/70">
                <span>✓ Faster hiring</span>
                <span>✓ Real-time updates</span>
              </div> */}

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
            <div className="relative flex justify-center">
              {/* soft radial glow */}
              <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative w-[210px]">
                <button
                  onClick={prevSlide}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xl"
                >
                  ‹
                </button>

                {/* PHONE MASK */}
                <div
                  className="aspect-[9/16] rounded-[40px] overflow-hidden 
                    shadow-[0_25px_50px_rgba(0,0,0,0.4)]
                    ring-1 ring-white/10
                    bg-black/5"
                >
                  <div className="relative w-full h-full scale-[0.98]">
                    {images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="App preview"
                        className={`absolute inset-0 w-full h-full object-contain 
                        transition-opacity duration-500 ${
                          index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={nextSlide}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xl"
                >
                  ›
                </button>

                <div className="mt-4 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-white scale-125"
                          : "bg-white/40"
                      }`}
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
