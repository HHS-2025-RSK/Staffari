import React from "react";
import SectionTitle from "../ui/SectionTitle";

export default function WhatCard() {
  return (
    <div className="rounded-3xl border border-mutedOlive/20 bg-white shadow-soft p-6">
      <SectionTitle
        eyebrow="What is Staffari"
        title="Hospitality hiring, simplified"
        desc="Staffari is a hiring platform designed specifically for the hospitality industry. We help hotels, restaurants, and hospitality businesses connect with relevant, ready-to-work talent through a streamlined, tech-enabled process."
      />
    </div>
  );
}
