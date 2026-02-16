// ProblemSection.jsx
import React from "react";
import { ShieldCheck } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import BulletListPanel from "../ui/BulletListPanel";
import SideNote from "../ui/SideNote";
import "./ProblemSection.css";

export default function ProblemSection({ problemBullets }) {
  return (
    <section id="problem" className="problem-section">
      <div className="problem-wrapper">
        <div className="problem-card">
          {/* Flip container */}
          <div className="problem-card-inner">
            {/* Front */}
            <div className="problem-card-front">
              <div className="problem-card-layout">
                <div className="problem-card-image-container animate-fade-in-left">
                  <div className="problem-card-image-overlay" />
                  <img
                    src="/images/problem2.png"
                    alt="Staffari bellhop in jungle setting"
                    className="problem-card-image"
                    loading="lazy"
                  />
                </div>
                <div className="problem-card-content animate-fade-in-right">
                  <div className="problem-title-wrapper">
                    <SectionTitle
                      // eyebrow="The Problem"
                      title="Why hospitality hiring is broken"
                      desc="Hospitality businesses lose time and money dealing with:"
                    />
                  </div>

                  <div className="problem-side-note-wrapper">
                    <SideNote
                      icon={<ShieldCheck className="problem-side-note-icon" />}
                      title="Built for confidence"
                      text="Staffari is built to remove these friction points and help teams hire with confidence."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="problem-card-back">
              <div className="problem-bullet-wrapper">
                <BulletListPanel items={problemBullets} />
              </div>

              <p className="problem-tap-hint">Tap outside to go back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
