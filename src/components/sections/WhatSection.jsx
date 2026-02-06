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
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import "./WhatCard.css"; // ← import your new CSS file

export default function WhatCard() {
  return (
    <div className="what-card">
      <div className="what-card-inner">
        {/* Left: Image */}
        <div className="what-card-image-container animate-fade-in-left">
          <div className="what-card-image-overlay" />
          <img
            src="/images/what.png"
            alt="Staffari bellhop in jungle setting"
            className="what-card-image"
            loading="lazy"
          />
        </div>

        {/* Right: Text content */}
        <div className="what-card-content animate-fade-in-right">
          <SectionTitle
            // eyebrow="What is Staffari"
            title="Hospitality hiring, simplified"
            desc="Staffari is a hiring platform designed specifically for the hospitality industry. We help hotels, restaurants, and hospitality businesses connect with relevant, ready-to-work talent through a streamlined, tech-enabled process."
          />

          {/* Uncomment if needed */}
          {/* <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(19, 78, 74, 0.1)', color: '#134E4A', fontSize: '0.875rem', fontWeight: 500 }}>
              40% faster hiring
            </div>
            <div style={{ padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#92400E', fontSize: '0.875rem', fontWeight: 500 }}>
              Trusted by 500+ venues
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
