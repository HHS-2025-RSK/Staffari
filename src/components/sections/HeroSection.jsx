import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Container from "../ui/Container";
import { PrimaryButton } from "../ui/Buttons";
import FlippingCard from "../ui/FlippingCard";
import StoreButton from "../ui/StoreButton";

export default function HeroSection({ PLAYSTORE_URL, APPSTORE_URL }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pb-16 md:pb-20 bg-beige border-l border-r border-b border-mutedOlive/25 rounded-bl-[4rem] rounded-br-[4rem] mx-20 -mt-16 py-20 shadow-so">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-deepJungleGreen md:text-6xl">
              Find. Connect. Thrive.
            </h1>
            <p className="mt-4 max-w-xl font-body text-[16px] leading-7 text-charcoalBlack/75">
              A single ecosystem for hospitality hiring, jobs, and careers.
              Built to power smarter recruitment and meaningful hospitality
              careers.
            </p>

            <div className="mt-8">
              <p className="mb-4 font-display font-semibold text-deepJungleGreen">
                Hire faster. Get hired smarter.
              </p>
              <PrimaryButton onClick={() => setIsOpen(true)}>
                Start Your Hunt <ArrowRight className="ml-2 h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>

          <div className="relative">
            <FlippingCard />
          </div>
        </div>
      </Container>

      {/* Jungle Theme Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepJungleGreen/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-emerald-900 border-4 border-emerald-700 shadow-2xl">
            {/* Jungle Decorative Elements (CSS-based) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-lime-500/20 rounded-full -ml-16 -mb-16 blur-2xl" />

            <div className="relative p-8 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-emerald-200 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="font-display text-2xl font-bold text-white mb-2">
                Welcome to the Jungle
              </h2>
              <p className="text-emerald-100/80 mb-8 font-body">
                The hunt starts here. Download the app to begin.
              </p>

              <div className="flex flex-col gap-4 items-center">
                <StoreButton
                  variant="light"
                  href={PLAYSTORE_URL}
                  subtitle="Get it on"
                  title="Google Play"
                  className="w-full max-w-[200px]"
                />
                <StoreButton
                  variant="light"
                  href={APPSTORE_URL}
                  subtitle="Download on the"
                  title="App Store"
                  className="w-full max-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
