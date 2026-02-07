// import React, { useMemo, useState } from "react";
import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import WhatSection from "../components/sections/WhatSection";
import ProblemSection from "../components/sections/ProblemSection";
import HelpsSection from "../components/sections/HelpsSection";
import AdvantageSection from "../components/sections/AdvantageSection";
import NewsletterSection from "../components/sections/NewsletterSection";
import FAQSection from "../components/sections/FAQSection";
import DownloadSection from "../components/sections/DownloadSection";
import FooterSection from "../components/sections/FooterSection";
import ArcSteps, { ArcStep } from "../components/ArcSteps";
import { Helmet } from "react-helmet-async";
import MetaHeroBlock from "../components/MetaHeroBlock";
import ContactSection from "../components/sections/ContactSection";
import HiringProblemSection from "../components/sections/HiringProblemSection";

export default function Home() {
  // const [faqOpen, setFaqOpen] = useState(0);

  const PLAYSTORE_URL = "YOUR_PLAYSTORE_LINK";
  const APPSTORE_URL = "YOUR_APPSTORE_LINK";

  // const metaTitle = "Staffari | Hospitality Jobs & Hiring Platform";
  // const metaDescription =
  //   "Hiring shouldn’t slow hospitality down. Staffari cuts recruitment friction and costs by connecting you directly with ready-to-work hospitality talent.";

  const problemBullets = useMemo(
    () => [
      "Slow recruitment agencies",
      "High hiring costs",
      "Unqualified applicants",
      "Operational downtime",
    ],
    [],
  );

  const helpsBullets = useMemo(
    () => [
      "Access hospitality-focused talent pools",
      "Reduce time spent screening candidates",
      "Hire faster without agency dependency",
    ],
    [],
  );

  const unfairAdvantageBullets = useMemo(
    () => [
      "Hospitality-first platform",
      "Reduced Hiring Friction",
      "Verified hospitality talent",
      "Smarter job matching",
      "Lower cost per hire",
      "Quality over quantity",
    ],
    [],
  );

  // const faqs = useMemo(
  //   () => [
  //     {
  //       q: "What is Staffari?",
  //       a: "Staffari is a hospitality hiring platform that connects businesses directly with ready-to-work hospitality talent.",
  //     },
  //     {
  //       q: "Who is Staffari for?",
  //       a: "Staffari is built for hotels, restaurants, and hospitality businesses that want to hire faster with less friction and better relevance.",
  //     },
  //     {
  //       q: "How is Staffari different from agencies?",
  //       a: "Staffari reduces dependency on agencies by helping you reach relevant candidates directly and cut down screening time.",
  //     },
  //     {
  //       q: "Can I use Staffari for urgent hiring?",
  //       a: "Yes. The platform is designed to reduce delays and help teams hire with confidence when operations can’t wait.",
  //     },
  //     {
  //       q: "How do I get started?",
  //       a: "Download the app from Google Play or the App Store and begin your journey.",
  //     },
  //   ],
  //   [],
  // );

  return (
    <div className="min-h-screen bg-cardBg" id="home">
      <Navbar />

      <main className="bg-cardBg">
        {/* <MetaHeroBlock title={metaTitle} description={metaDescription} /> */}
        <HeroSection
          PLAYSTORE_URL={PLAYSTORE_URL}
          APPSTORE_URL={APPSTORE_URL}
        />

        <HiringProblemSection />
        <ArcSteps>
          <ArcStep id="what">
            <WhatSection />
          </ArcStep>

          <ArcStep id="problem">
            <ProblemSection problemBullets={problemBullets} />
          </ArcStep>

          <ArcStep id="helps">
            <HelpsSection helpsBullets={helpsBullets} />
          </ArcStep>
        </ArcSteps>

        {/* <WhatSection />
        <ProblemSection problemBullets={problemBullets} />
        <HelpsSection helpsBullets={helpsBullets} /> */}
        <AdvantageSection unfairAdvantageBullets={unfairAdvantageBullets} />
        {/* <FAQSection faqs={faqs} faqOpen={faqOpen} setFaqOpen={setFaqOpen} /> */}
        <DownloadSection
          PLAYSTORE_URL={PLAYSTORE_URL}
          APPSTORE_URL={APPSTORE_URL}
        />

        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
