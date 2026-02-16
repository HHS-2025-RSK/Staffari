// // HelpsSection.jsx
// import React from "react";
// import { Briefcase, ShieldCheck } from "lucide-react";
// import SectionTitle from "../ui/SectionTitle";
// import BulletListPanel from "../ui/BulletListPanel";
// import SideNote from "../ui/SideNote";
// import "./HelpsSection.css";

// export default function HelpsSection({ helpsBullets }) {
//   return (
//     <section id="helps" className="helpsBullets">
//       <div className="help-wrapper">
//         <div className="help-card">
//           {/* Flip container */}
//           <div className="help-card-inner">
//             {/* Front */}
//             <div className="help-card-front">
//               <div className="help-title-wrapper">
//                 <SectionTitle
//                   // eyebrow="How Staffari Helps"
//                   title="Hire hospitality talent without hassle"
//                   desc="With Staffari, businesses can:"
//                 />
//               </div>

//               <div className="help-side-note-wrapper">
//                 <SideNote
//                   icon={<Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />}
//                   title="Operationally aligned hiring"
//                   text="Everything is designed around practical hiring for hospitality operations."
//                 />
//               </div>
//             </div>

//             {/* Back */}
//             <div className="help-card-back">
//               <div className="help-bullet-wrapper">
//                 <BulletListPanel items={helpsBullets} />
//               </div>
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
              <div className="help-card-layout">
                <div className="help-card-image-container animate-fade-in-left">
                  <div className="help-card-image-overlay" />
                  <img
                    src="/images/helps1.png"
                    alt="Staffari bellhop in jungle setting"
                    className="help-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="help-card-content animate-fade-in-right">
                  <div className="help-title-wrapper">
                    <SectionTitle
                      // eyebrow="How Staffari Helps"
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
              </div>
            </div>

            {/* Back */}
            <div className="help-card-back">
              <div className="help-bullet-wrapper">
                <BulletListPanel items={helpsBullets} />
              </div>

              <p className="help-tap-hint">Tap outside to go back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
