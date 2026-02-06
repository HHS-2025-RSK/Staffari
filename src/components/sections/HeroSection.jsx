import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Container from "../ui/Container";
import { PrimaryButton } from "../ui/Buttons";
import FlippingCard from "../ui/FlippingCard";
import StoreButton from "../ui/StoreButton";

export default function HeroSection({ PLAYSTORE_URL, APPSTORE_URL }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <section
    //   className="
    //     relative bg-beige overflow-hidden
    //     border-l border-r border-b border-mutedOlive/25
    //     rounded-bl-[4rem] rounded-br-[4rem]
    //     shadow-so
    //     min-h-[100vh] lg:min-h-[100vh]
    //     flex items-center justify-center
    //     py-12 md:py-16 lg:py-60
    //     -mt-14
    //   "
    // >
    <section
      id="hero-section"
      className="
        relative bg-[#fdf9f0] overflow-hidden
        shadow-so
        min-h-[100vh] lg:min-h-[100vh]
        flex items-center justify-center
        py-40 md:py-40 lg:py-80
        -mt-40
      "
    >
      {/* Large Jungle Frame – full visibility, dominant size */}
      {/* Large Jungle Frame – zooms evenly from center */}
      <div className="absolute inset-x-0 top-[4%] bottom-[8%] z-0 pointer-events-none flex items-center justify-center">
        <img
          src="/images/herosection/heroborder.svg"
          alt="Jungle adventure frame"
          className="
      max-w-none max-h-none
      w-auto h-auto
      object-contain
      transform scale-[1.25] sm:scale-[1.15] lg:scale-[1.1]
      origin-center
      drop-shadow-2xl
    "
        />
      </div>

      {/* Very subtle tint/overlay to help text pop against leaves (optional – adjust or remove) */}
      <div className="absolute inset-0 z-0 bg-beige/10 pointer-events-none" />

      {/* Content – forced to stay inside the frame's open area */}
      <div className="relative z-10 w-full max-w-5xl px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text – centered on mobile, left-aligned on desktop */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6 max-w-2xl mx-auto lg:mx-0">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-deepJungleGreen leading-tight">
              Find. Connect.
              <br className="hidden sm:block" /> Thrive.
            </h1>

            <p className="font-body text-sm sm:text-lg md:text-xl text-charcoalBlack/90 leading-relaxed">
              A single ecosystem for hospitality hiring, jobs, and careers.
              Built to power smarter recruitment and meaningful hospitality
              careers.
            </p>

            <div className="pt-2">
              <p className="font-display font-semibold text-deepJungleGreen text-lg md:text-xl mb-6">
                Hire faster. Get hired smarter.
              </p>

              <PrimaryButton
                onClick={() => setIsOpen(true)}
                size="lg" // assume your button supports larger size – otherwise use className="text-xl py-6 px-10"
                className="text-lg py-4 px-8"
              >
                Start Your Hunt <ArrowRight className="ml-3 h-6 w-6" />
              </PrimaryButton>
            </div>
          </div>

          {/* Right: FlippingCard or illustration – hidden on mobile or small screens */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl transform scale-105 lg:scale-110">
              <FlippingCard />
              {/* If you want to replace with static jungle scene later:
              <img src="/path/to/jungle-scene-illustration.png" alt="Talent hunt scene" className="w-full h-auto" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal – unchanged */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepJungleGreen/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-emerald-900 border-4 border-emerald-700 shadow-2xl">
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
