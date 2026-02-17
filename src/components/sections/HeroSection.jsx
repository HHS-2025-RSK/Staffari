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
    const downloadSection = document.getElementById("download");
    if (downloadSection) {
      downloadSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Intersection Observer callback for initial entry animation
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });
  }, []);

  // Intersection Observer setup
  useEffect(() => {
    if (!sectionRef.current) return;

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "-15% 0px -25% 0px",
      threshold: 0.05,
    });

    observerRef.current.observe(sectionRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection]);

  // Scroll-based progress for sliding OUT image + content
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

      const progress = Math.min(Math.max(scrolled / total, 0), 1); // clamp 0–1
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // DESKTOP offsets
  const imageOffsetX = -scrollProgress * 100; // left
  const contentOffsetX = scrollProgress * 100; // right
  const fadeOut = 1 - scrollProgress; // 1 -> 0

  // MOBILE image offset (slide fully left and disappear)
  const mobileImageX = -scrollProgress * 100; // 0 -> -100

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative bg-[#fdf9f0] min-h-screen overflow-hidden font-body"
    >
      {/* MOBILE PANDA IMAGE (slides left and disappears) */}
      <div
        className="block lg:hidden w-full h-[85vh] overflow-hidden"
        style={{
          // optional: tie opacity to scroll if you want fade as well
          // opacity: fadeOut,
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
              // zoom a bit and slide left off-screen
              transform: `scale(1.2) translateX(${mobileImageX}%)`,
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

      {/* CONTENT - Text + Button */}
      <Container className="relative z-10 w-full py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-end py-12 lg:py-0">
          {/* MOBILE CONTENT: comes from below with normal scroll */}
          <div className="block lg:hidden w-full text-center">
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

              <p className="font-body font-bold text-xl text-black max-w-md mx-auto leading-tight text-center">
                A single ecosystem for hospitality hiring, jobs, and careers.
                <span className="block mt-2">
                  Built to power smarter recruitment and meaningful hospitality
                  careers.
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

              <p className="text-center font-body font-bold text-xl md:text-2xl text-black max-w-lg mx-0 leading-tight">
                A single ecosystem for hospitality hiring, jobs, and careers.
                <span className="block">
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
      </Container>
    </section>
  );
}
