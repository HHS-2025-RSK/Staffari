import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Container from "../ui/Container";
import { PrimaryButton } from "../ui/Buttons";
import StoreButton from "../ui/StoreButton";

export default function HeroSection({ PLAYSTORE_URL, APPSTORE_URL }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero-section"
      className="relative bg-[#fdf9f0] min-h-screen flex items-center overflow-hidden"
    >
      {/* Desktop/Web Illustration (UNCHANGED) */}
      <div className="hidden lg:block absolute left-0 bottom-0 w-full lg:w-1/2 pointer-events-none z-0">
        <img
          src="/images/herosection/newtree.png"
          alt="Jungle adventure frame"
          className="w-full h-auto object-contain object-left-bottom max-h-[85vh]"
        />
      </div>

      <Container className="relative z-10 w-full">
        {/* Mobile Illustration (NEW) - shows first on mobile only */}
        <div className="block lg:hidden w-full pointer-events-none mb-8">
          <img
            src="/images/herosection/newtree.png"
            alt="Jungle adventure frame"
            className="w-full h-auto object-contain max-h-[45vh]"
          />
        </div>

        {/* Content (UNCHANGED for web) */}
        <div className="flex flex-col lg:flex-row items-center justify-end">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:pl-12">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-deepJungleGreen leading-[1.1]">
              <span className="block">Find. </span>
              <span className="block text-[#7da855]">Connect. </span>
              <span className="block text-[#bad878]">Thrive.</span>
            </h1>

            <p className="font-body text-lg md:text-2xl text-black max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A single ecosystem for hospitality hiring, jobs, and careers.
              Built to power smarter recruitment and meaningful hospitality
              careers.
            </p>

            <div className="pt-4 flex flex-col items-center lg:items-start">
              {/* <p className="font-display font-semibold text-[#5A3E2B] text-xl md:text-2xl tracking-[0.1em] leading-relaxed mb-8">
                Hire Faster. Get Hired Smarter.
              </p> */}

              <PrimaryButton
                onClick={() => setIsOpen(true)}
                className="text-xl py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105"
              >
                Start Your Hunt <ArrowRight className="ml-3 h-6 w-6" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deepJungleGreen/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-emerald-900 border-4 border-emerald-700 shadow-2xl">
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
