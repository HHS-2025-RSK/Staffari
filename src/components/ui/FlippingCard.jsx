// import { useEffect, useRef, useState } from "react";

// const images = [
//   "/images/onboarding1.png",
//   "/images/onboarding3.png",
//   "/images/onboarding2.png",
// ];

// export default function FlippingCard() {
//   const [mode, setMode] = useState("content"); // content | image
//   const [imageIndex, setImageIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const intervalRef = useRef(null);

//   const start = () => {
//     intervalRef.current = setInterval(() => {
//       setAnimating(true);

//       // switch content at HALF of flip
//       setTimeout(() => {
//         setMode((prev) => {
//           if (prev === "content") {
//             setImageIndex((i) => (i + 1) % images.length);
//             return "image";
//           }
//           return "content";
//         });
//       }, 350);

//       // reset animation
//       setTimeout(() => {
//         setAnimating(false);
//       }, 700);
//     }, 5000);
//   };

//   const stop = () => clearInterval(intervalRef.current);

//   useEffect(() => {
//     start();
//     return stop;
//   }, []);

//   return (
//     <div className="relative w-full" onMouseEnter={stop} onMouseLeave={start}>
//       <div
//         className={`transition-transform duration-700 ${
//           animating ? "rotate-y-180" : ""
//         }`}
//       >
//         {/* CARD */}
//         <div className="rounded-3xl p-6">
//           <div className="rounded-2xl h-[360px] flex items-center justify-center">
//             {mode === "content" ? (
//               <div className=" p-6">
//                 <div className="font-display text-2xl font-bold text-deepJungleGreen">
//                   Hospitality hiring, simplified
//                 </div>

//                 <p className="mt-3 font-body text-[15px] leading-7 text-charcoalBlack/80">
//                   Staffari is a hiring platform designed specifically for the
//                   hospitality industry.
//                 </p>

//                 <div className="mt-4 grid gap-3">
//                   <div className="rounded-2xl border border-mutedOlive/20 p-4">
//                     <div className="font-body font-semibold text-charcoalBlack">
//                       Faster hiring
//                     </div>
//                     <div className="mt-1 text-[14px] text-mutedOlive">
//                       Hire without agency delays and irrelevant resumes.
//                     </div>
//                   </div>

//                   <div className="rounded-2xl border border-mutedOlive/20 p-4">
//                     <div className="font-body font-semibold text-charcoalBlack">
//                       Confidence
//                     </div>
//                     <div className="mt-1 text-[14px] text-mutedOlive">
//                       Practical hiring for hospitality operations.
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="rounded-2xl h-[360px] flex items-center justify-center">
//                 {mode === "content" ? (
//                   <div>{/* content stays same */}</div>
//                 ) : (
//                   <img
//                     src={images[imageIndex]}
//                     alt="Onboarding"
//                     className="max-h-full max-w-full object-contain"
//                   />
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

const images = [
  "/images/onboarding1.png",
  "/images/onboarding3.png",
  "/images/onboarding2.png",
];

export default function FlippingCard() {
  return (
    <div className="w-full">
      <div className="rounded-3xl p-4 sm:p-6">
        <div className="rounded-2xl h-[260px] sm:h-[320px] md:h-[360px] flex items-center justify-center">
          <img
            src={images[0]}
            alt="Onboarding"
            className="w-full h-full max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
