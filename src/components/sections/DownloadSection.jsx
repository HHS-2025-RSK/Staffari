import React from "react";
import Container from "../ui/Container";
import Pill from "../ui/Pill";
import StoreButton from "../ui/StoreButton";

export default function DownloadSection({ PLAYSTORE_URL, APPSTORE_URL }) {
  return (
    <section id="download" className="py-16">
      <Container>
        <div className="rounded-3xl border border-mutedOlive/20 bg-deepJungleGreen p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              {/* <Pill>Download</Pill> */}
              <h2 className="mt-4 font-display text-3xl font-bold">
                One ecosystem for hospitality careers and hiring
              </h2>
              <p className="mt-3 font-body text-[15px] leading-7 text-white/80">
                Staffari connects the entire hospitality workforce. Download the
                app from the App Store or Play Store to begin your journey.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <StoreButton
                  variant="light"
                  href={PLAYSTORE_URL}
                  subtitle="Get it on"
                  title="Google Play"
                />
                <StoreButton
                  variant="dark"
                  href={APPSTORE_URL}
                  subtitle="Download on the"
                  title="App Store"
                />
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <div className="font-body font-semibold">
                  Cuts recruitment friction
                </div>
                <div className="mt-1 font-body text-[14px] text-white/75">
                  Connect directly with ready-to-work hospitality talent.
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <div className="font-body font-semibold">
                  Reduces time and cost
                </div>
                <div className="mt-1 font-body text-[14px] text-white/75">
                  Less agency dependency and fewer irrelevant resumes.
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <div className="font-body font-semibold">
                  Operationally aligned
                </div>
                <div className="mt-1 font-body text-[14px] text-white/75">
                  Designed around practical hiring for hospitality operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
