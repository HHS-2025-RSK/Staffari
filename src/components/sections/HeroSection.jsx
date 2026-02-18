import React, { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { PrimaryButton } from "../ui/Buttons";

export default function HeroSection() {
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 -> 1 while hero scrolls out
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  const scrollToDownload = () => {
    const section = document.getElementById("download");
    if (!section) return;

    const NAVBAR_HEIGHT = 140;

    const y =
      section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

    window.history.pushState(null, "", "#download");

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setIsInView(true);
    });
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "-15% 0px -25% 0px",
      threshold: 0.05,
    });

    observerRef.current.observe(sectionRef.current);

    return () => observerRef.current?.disconnect();
  }, [handleIntersection]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        rect.height || viewportHeight,
      );
      const total = rect.height || viewportHeight || 1;

      const progress = Math.min(Math.max(scrolled / total, 0), 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== Desktop behavior (unchanged) =====
  const imageOffsetX = -scrollProgress * 100; // left
  const contentOffsetX = scrollProgress * 100; // right
  const fadeOut = 1 - scrollProgress; // 1 -> 0

  // ===== Mobile behavior (overlap + fade out image after content comes up) =====
  const clamp01 = (v) => Math.min(Math.max(v, 0), 1);

  // Content reveal curve on mobile
  const mobileRevealStart = 0.12;
  const mobileRevealSpan = 0.45;
  const mobileReveal = clamp01(
    (scrollProgress - mobileRevealStart) / mobileRevealSpan,
  );

  // Content slides up & becomes visible
  const mobileContentTranslateY = (1 - mobileReveal) * 90; // px
  const mobileContentOpacity = clamp01(mobileReveal * 4);

  // Stop "sticky" after a point so it doesn't stay pinned too long
  const mobilePinEnd = 0.42; // tweak 0.35–0.55
  const mobilePinned = scrollProgress < mobilePinEnd;

  // Fade image out as content takes over
  const mobileFadeStart = 0.15;
  const mobileFadeEnd = 0.32;
  const mobileImageOpacity =
    1 -
    clamp01(
      (scrollProgress - mobileFadeStart) / (mobileFadeEnd - mobileFadeStart),
    );

  // Optional tiny parallax (kept subtle)
  const mobileImageParallaxX = -mobileReveal * 6; // %

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative bg-[#fdf9f0] min-h-[130vh] lg:min-h-screen overflow-visible lg:overflow-hidden font-body"
    >
      {/* MOBILE IMAGE: overlaps early, then fades out */}
      <div
        className="block lg:hidden w-full h-[85vh] overflow-hidden pointer-events-none z-0"
        style={{
          position: mobilePinned ? "sticky" : "relative",
          top: mobilePinned ? 0 : undefined,
          opacity: mobileImageOpacity,
          visibility: mobileImageOpacity < 0.02 ? "hidden" : "visible",
          transition: "opacity 0.1s linear",
        }}
      >
        <div
          className={`
            h-full
            transform transition-all duration-1000 ease-out
            ${isInView ? "translate-y-0 opacity-100" : "translate-y-[-50px] opacity-0"}
          `}
        >
          <img
            src="/images/herosection/pandaontree.png"
            alt="Jungle adventure frame"
            className="w-full h-full object-cover"
            style={{
              transform: `scale(1.2) translateX(${mobileImageParallaxX}%)`,
              transformOrigin: "center center",
              transition: "transform 0.1s linear",
            }}
          />
        </div>
      </div>

      {/* DESKTOP IMAGE (same effect as before) */}
      <div
        className="
          hidden lg:block absolute top-7 left-0 bottom-0 w-full lg:w-1/2
          pointer-events-none z-0
        "
        style={{
          transform: `translateX(${imageOffsetX}%)`,
          opacity: fadeOut,
          transition: "transform 0.1s linear, opacity 0.1s linear",
        }}
      >
        <div
          className={`
            transform transition-all duration-1000 ease-out delay-300
            ${isInView ? "translate-x-0 opacity-100" : "translate-x-[-60px] opacity-0"}
          `}
        >
          <img
            src="/images/herosection/pandaontree.png"
            alt="Jungle adventure frame"
            className="w-full h-auto object-contain object-left-bottom max-h-[85vh]"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto w-full px-4 relative z-10 w-full pt-12 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-end pt-12 lg:py-0">
          {/* MOBILE CONTENT: overlaps image and settles */}
          <div
            className="block lg:hidden w-full text-center relative z-10 -mt-[28vh]"
            style={{
              transform: `translateY(${mobileContentTranslateY}px)`,
              opacity: mobileContentOpacity,
              transition: "transform 0.1s linear, opacity 0.1s linear",
            }}
          >
            <div className="bg-[#fdf9f0] pt-10 rounded-t-[2.5rem]">
              <div
                className={`
                  space-y-6
                  transform transition-all duration-1000 ease-out
                  ${isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                `}
              >
                <h1 className="font-display text-7xl sm:text-8xl font-bold tracking-tight text-deepJungleGreen leading-[1.1]">
                  <span className="block">Find.</span>
                  <span className="block text-[#3b652b]">Connect.</span>
                  <span className="block text-[#7da855]">Thrive.</span>
                </h1>

                <p className="font-body font-bold text-xl text-black max-w-md mx-auto text-center">
                  A single ecosystem for hospitality hiring and jobs.
                  <span className="block mt-2">
                    Built to power smarter recruitment and meaningful
                    hospitality careers.
                  </span>
                </p>

                <div className="pt-4 flex justify-center">
                  <PrimaryButton
                    onClick={scrollToDownload}
                    className="text-lg py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    Start Your Hunt
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP CONTENT: slides right and fades with scroll */}
          <div
            className="hidden lg:block w-full lg:w-1/2 text-left lg:pl-12"
            style={{
              transform: `translateX(${contentOffsetX}%)`,
              opacity: fadeOut,
              transition: "transform 0.1s linear, opacity 0.1s linear",
            }}
          >
            <div
              className={`
                space-y-6
                transform transition-all duration-1000 ease-out
                ${isInView ? "translate-x-0 opacity-100" : "translate-x-[60px] opacity-0"}
              `}
            >
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-deepJungleGreen leading-[1.1]">
                <span className="block">Find.</span>
                <span className="block text-[#3b652b]">Connect.</span>
                <span className="block text-[#7da855]">Thrive.</span>
              </h1>

              <p className="text-center font-body font-bold text-xl md:text-2xl text-black max-w-lg mx-0">
                A single ecosystem for hospitality hiring and jobs.
                <span className="block mt-2">
                  Built to power smarter recruitment and meaningful hospitality
                  careers.
                </span>
              </p>

              <div className="pt-6 flex justify-start">
                <PrimaryButton
                  onClick={scrollToDownload}
                  className="text-xl py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  Start Your Hunt
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
