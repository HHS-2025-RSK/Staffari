import React from "react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import Pill from "../ui/Pill";
import { GhostButton, PrimaryButton } from "../ui/Buttons";
import FlippingCard from "../ui/FlippingCard";

export default function HeroSection() {
  return (
    <section
      className="
  relative overflow-hidden
  py-16 md:py-20
  bg-white
  border-l border-r border-b border-mutedOlive/25
  rounded-bl-[4rem] rounded-br-[4rem]
  mx-10
"
    >
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Pill>Hiring shouldn’t slow hospitality down.</Pill>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-deepJungleGreen md:text-5xl">
              Hospitality doesn’t wait. Hiring shouldn’t either.
            </h1>
            <p className="mt-4 max-w-xl font-body text-[16px] leading-7 text-charcoalBlack/75">
              Hiring shouldn’t slow hospitality down. Staffari helps hotels and
              restaurants find the right people faster - without agency delays,
              irrelevant resumes, or complex hiring workflows.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton as="a" href="#download">
                Start Your Hunt <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <GhostButton href="#what">What is Staffari</GhostButton>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-mutedOlive">
              <span className="inline-flex items-center gap-2 font-body font-semibold">
                <ShieldCheck className="h-4 w-4 text-emeraldGreen" /> Reduced
                friction
              </span>
              <span className="inline-flex items-center gap-2 font-body font-semibold">
                <MessageCircle className="h-4 w-4 text-emeraldGreen" /> Direct
                connection
              </span>
            </div>
          </div>

          {/* <div className="rounded-3xl border border-mutedOlive/20 bg-cardBg p-6 shadow-soft">
            <div className="rounded-2xl bg-white p-6">
              <div className="font-display text-2xl font-bold text-deepJungleGreen">
                Hospitality hiring, simplified
              </div>
              <p className="mt-3 font-body text-[15px] leading-7 text-charcoalBlack/80">
                Staffari is a hiring platform designed specifically for the
                hospitality industry.
              </p>

              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-mutedOlive/20 bg-white p-4">
                  <div className="font-body font-semibold text-charcoalBlack">
                    Faster hiring
                  </div>
                  <div className="mt-1 font-body text-[14px] text-mutedOlive">
                    Hire without agency delays and irrelevant resumes.
                  </div>
                </div>

                <div className="rounded-2xl border border-mutedOlive/20 bg-white p-4">
                  <div className="font-body font-semibold text-charcoalBlack">
                    Confidence
                  </div>
                  <div className="mt-1 font-body text-[14px] text-mutedOlive">
                    Practical hiring for hospitality operations.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <FlippingCard />
        </div>
      </Container>
    </section>
  );
}
