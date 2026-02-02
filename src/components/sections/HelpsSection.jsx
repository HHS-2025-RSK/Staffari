// import React from "react";
// import { Briefcase } from "lucide-react";
// import SectionTitle from "../ui/SectionTitle";
// import BulletListPanel from "../ui/BulletListPanel";
// import SideNote from "../ui/SideNote";

// export default function HelpsSection({ helpsBullets }) {
//   return (
//     <section id="helps" className="w-full">
//       <div className="w-full max-w-5xl">
//         <div
//           className={`
//             group relative
//             w-full overflow-hidden
//             rounded-3xl border border-mutedOlive/20 bg-white shadow-soft
//             transition-shadow duration-300 hover:shadow-xl
//             min-h-[300px] sm:min-h-[300px] md:min-h-[260px]
//             lg-h-[300px]
//             perspective-[1200px]
//           `}
//         >
//           {/* Flip container */}
//           <div
//             className={`
//               relative h-full w-full
//               transition-transform duration-700 ease-out
//               [transform-style:preserve-3d]

//               /* flip only when hover is actually supported */
//               [@media(hover:hover)_and_(pointer:fine)]:group-hover:[transform:rotateY(180deg)]
//             `}
//           >
//             {/* Front */}
//             <div
//               className={`
//                 absolute inset-0
//                 [backface-visibility:hidden]
//                 py-3 sm:py-4 md:py-16
//                 px-3 sm:px-4 md:px-8
//                 flex flex-col justify-center

//                 /* Responsive base font sizing for content inside */
//                 text-sm sm:text-base md:text-[15px] lg:text-base
//               `}
//             >
//               {/* Replace mt-60 with responsive top spacing */}
//               <div className="pt-[260px] sm:pt-[260px] md:pt-[80px] lg:pt-[130px]">
//                 <SectionTitle
//                   eyebrow="How Staffari Helps"
//                   title="Hire hospitality talent without hassle"
//                   desc="With Staffari, businesses can:"
//                 />
//               </div>

//               <div>
//                 <SideNote
//                   icon={<Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />}
//                   title="Operationally aligned hiring"
//                   text="Everything is designed around practical hiring for hospitality operations."
//                 />
//               </div>
//             </div>

//             {/* Back */}
//             <div
//               className={`
//                 absolute inset-0
//                 [backface-visibility:hidden]
//                 [transform:rotateY(180deg)]
//                 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8
//                 flex flex-col

//                 /* Same responsive base font sizing */
//                 text-sm sm:text-base md:text-[15px] lg:text-base
//               `}
//             >
//               <div className="flex-1 pt-2 sm:pt-3">
//                 <BulletListPanel items={helpsBullets} />
//               </div>

//               {/* Touch-only hint */}
//               <p className="mt-4 sm:mt-5 text-center text-xs sm:text-sm text-charcoalBlack/50 [@media(hover:hover)_and_(pointer:fine)]:hidden">
//                 Tap outside to go back
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ProblemSection.jsx
import React from "react";
import { Briefcase, ShieldCheck } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import BulletListPanel from "../ui/BulletListPanel";
import SideNote from "../ui/SideNote";
import "./HelpsSection.css";

export default function HelpsSection({ helpsBullets }) {
  return (
    <section id="helps" className="helpsBullets">
      <div className="help-wrapper">
        <div className="help-card">
          {/* Flip container */}
          <div className="help-card-inner">
            {/* Front */}
            <div className="help-card-front">
              <div className="help-title-wrapper">
                <SectionTitle
                  eyebrow="How Staffari Helps"
                  title="Hire hospitality talent without hassle"
                  desc="With Staffari, businesses can:"
                />
              </div>

              <div className="help-side-note-wrapper">
                <SideNote
                  icon={<Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />}
                  title="Operationally aligned hiring"
                  text="Everything is designed around practical hiring for hospitality operations."
                />
              </div>
            </div>

            {/* Back */}
            <div className="help-card-back">
              <div className="help-bullet-wrapper">
                <BulletListPanel items={helpsBullets} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
