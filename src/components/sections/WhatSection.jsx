// import React from "react";
// import SectionTitle from "../ui/SectionTitle";

// export default function WhatCard() {
//   return (
//     <div className="w-full max-w-5xl rounded-3xl border border-mutedOlive/20 bg-white shadow-soft p-6">
//       <SectionTitle
//         eyebrow="What is Staffari"
//         title="Hospitality hiring, simplified"
//         desc="Staffari is a hiring platform designed specifically for the hospitality industry. We help hotels, restaurants, and hospitality businesses connect with relevant, ready-to-work talent through a streamlined, tech-enabled process."
//       />
//     </div>
//   );
// }

// WhatCard.tsx

// import React from "react";
// import SectionTitle from "../ui/SectionTitle";
// import "./WhatCard.css"; // ← import your new CSS file

// export default function WhatCard() {
//   return (
//     <div className="what-card">
//       <div className="what-card-inner">
//         {/* Left: Image */}
//         <div className="what-card-image-container animate-fade-in-left">
//           <div className="what-card-image-overlay" />
//           <img
//             src="/images/what.png"
//             alt="Staffari bellhop in jungle setting"
//             className="what-card-image"
//             loading="lazy"
//           />
//         </div>

//         {/* Right: Text content */}
//         <div className="what-card-content animate-fade-in-right">
//           <SectionTitle
//             // eyebrow="What is Staffari"
//             title="Hospitality hiring, simplified"
//             desc="Staffari is a hiring platform designed specifically for the hospitality industry. We help hotels, restaurants, and hospitality businesses connect with relevant, ready-to-work talent through a streamlined, tech-enabled process."
//           />

//           {/* Uncomment if needed */}
//           {/* <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
//             <div style={{ padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(19, 78, 74, 0.1)', color: '#134E4A', fontSize: '0.875rem', fontWeight: 500 }}>
//               40% faster hiring
//             </div>
//             <div style={{ padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#92400E', fontSize: '0.875rem', fontWeight: 500 }}>
//               Trusted by 500+ venues
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import SectionTitle from "../ui/SectionTitle";
// import { ShieldCheck } from "lucide-react";
// import "./WhatCard.css";
// import BulletListPanel from "../ui/BulletListPanel";

// export default function WhatSection({ whatBullets }) {
//   return (
//     <div className="what-card border-4 border-[#402701]">
//       <div className="what-card-inner">
//         {/* FRONT */}
//         <div className="what-card-front">
//           <div className="what-card-image-container animate-fade-in-left">
//             <div className="what-card-image-overlay" />
//             <img
//               src="/images/what3.png"
//               alt="Staffari bellhop in jungle setting"
//               className="what-card-image"
//               loading="lazy"
//             />
//           </div>

//           <div className="what-card-content animate-fade-in-right">
//             <SectionTitle
//               title="Hospitality hiring, simplified"
//               desc="Staffari is a hiring platform designed specifically for the hospitality industry."
//             />

//             <div className="mt-6">
//               <div className="flex items-start gap-3 rounded-2xl border border-[#889560]/30 bg-[#f1f1e8] px-5 py-4">
//                 <div className="mt-1 text-deepJungleGreen">
//                   <ShieldCheck className="h-5 w-5" />
//                 </div>

//                 <div>
//                   <h2 className="font-body text-[18px] font-bold text-deepJungleGreen">
//                     Purpose-built for hospitality
//                   </h2>
//                   <p className="mt-2 font-body text-[15px] leading-7 font-semibold">
//                     We help hotels, restaurants, and hospitality businesses
//                     connect with relevant, ready-to-work talent through a
//                     streamlined, tech-enabled process.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <p className="what-tap-hint">Hover to flip • Tap to flip</p>
//           </div>
//         </div>

//         {/* BACK */}
//         <div className="what-card-back">
//           <h2 className="font-display mx-auto font-bold -mt-2 mb-2 text-[22px] text-[#0f3d34]">
//             Everything Staffari can do:
//           </h2>
//           <div className="what-bullet-wrapper">
//             <BulletListPanel items={whatBullets} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ProblemSection.jsx
import React from "react";
import { ShieldCheck } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import BulletListPanel from "../ui/BulletListPanel";
import SideNote from "../ui/SideNote";
import "./whatCard.css";

export default function ProblemSection({ whatBullets }) {
  return (
    <section id="what" className="what-section">
      <div className="what-wrapper">
        <div className="what-card border-4 border-[#402701]">
          {/* Flip container */}
          <div className="what-card-inner">
            {/* Front */}
            <div className="what-card-front">
              <div className="what-card-layout">
                <div className="what-card-image-container animate-fade-in-left">
                  <div className="what-card-image-overlay" />
                  <img
                    src="/images/what3.png"
                    alt="Staffari bellhop in jungle setting"
                    className="what-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="what-card-content animate-fade-in-right">
                  <div className="what-title-wrapper">
                    <SectionTitle
                      // eyebrow="The Problem"
                      title="Hospitality hiring, simplified"
                      desc="Staffari is a hiring platform designed specifically for the hospitality industry."
                    />
                  </div>

                  <div className="what-side-note-wrapper">
                    <SideNote
                      icon={<ShieldCheck className="what-side-note-icon" />}
                      title="Purpose-built for hospitality"
                      text="We help hotels, restaurants, and hospitality businesses
                      connect with relevant, ready-to-work talent through a
                      streamlined, tech-enabled process."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="what-card-back">
              <h2 className="font-display mx-auto font-bold -mt-2 mb-2 text-[22px] text-[#0f3d34]">
                Everything Staffari can do:
              </h2>
              <div className="what-bullet-wrapper">
                <BulletListPanel items={whatBullets} />
              </div>
              {/* <p className="what-tap-hint">Tap outside to go back</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
