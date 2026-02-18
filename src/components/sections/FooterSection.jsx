import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  X as XIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FooterSection() {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const emitVisibility = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const visibleHeight =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

      const ratio = Math.max(0, visibleHeight / rect.height);

      // 🔹 Navbar: hide early (10%)
      window.dispatchEvent(
        new CustomEvent("footerEnter", {
          detail: ratio >= 0.1,
        }),
      );

      // 🔹 Contact: hide late (80%)
      window.dispatchEvent(
        new CustomEvent("footerDominant", {
          detail: ratio >= 0.8,
        }),
      );
    };

    emitVisibility();

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        window.dispatchEvent(
          new CustomEvent("footerEnter", {
            detail: ratio >= 0.2,
          }),
        );

        window.dispatchEvent(
          new CustomEvent("footerDominant", {
            detail: ratio >= 0.8,
          }),
        );
      },
      { threshold: [0, 0.2, 0.8, 1] },
    );

    observer.observe(el);
    window.addEventListener("resize", emitVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", emitVisibility);
    };
  }, []);

  const SOCIAL_LINKS = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/staffari_official/",
    },
    {
      icon: Facebook,
      link: "https://www.facebook.com/profile.php?id=61585470624376",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/staffari-official-40aa8239a/",
    },
    {
      // icon: XIcon, // ← Changed to X
      link: "https://x.com/_Staffari",
    },
  ];

  return (
    <footer
      ref={footerRef}
      id="newsletter"
      className="
    relative
    overflow-hidden
    border-t-4 border-[#402701]
    bg-[#fdf9f0]
    rounded-t-3xl

    min-h-[90vh]     /* 📱 mobile = 90% screen height */
    sm:min-h-[40vh]    /* tablets+ = normal height */
  "
    >
      <div className="bg-[#fdf9f0] relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-10 pb-6 sm:pt-14 sm:pb-10 md:pt-10 md:pb-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center lg:text-left"
          >
            <h1 className="font-display text-5xl md:text-8xl font-extrabold tracking-tight text-[#0f3d34]">
              STAFFARI
            </h1>
            <p className="font-body font-semibold text-lg md:text-xl text-[#0f3d34]/80">
              Hunt Smart. Hire Right.
            </p>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 lg:order-none w-full bg-[#fdf9f0] rounded-2xl p-6 md:p-8 border border-[#402701]/20 shadow-lg text-center lg:text-left"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#402701]/80 mb-4">
              Subscribe to our newsletter
            </p>

            <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full lg:flex-1 h-14 rounded-full px-5 text-sm bg-[#fdf9f0] border border-[#402701]/30 focus:border-[#402701] focus:outline-none text-[#402701] placeholder-[#402701]/50"
              />

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="h-14 w-14 rounded-full flex items-center justify-center bg-[#52110f] text-white shadow-md mx-auto lg:mx-0"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          <div></div>

          {/* Social */}
          <div className="order-3 lg:order-none w-full text-center lg:text-left mt-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#402701]/80 mb-4">
              Social Media
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-5">
              {SOCIAL_LINKS.map((social, i) => {
                const isX = social.link.includes("x.com");

                return (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#52110f] text-white shadow cursor-pointer hover:bg-[#6a1a18] transition"
                    aria-label="Social media link"
                  >
                    {isX ? (
                      // Official-ish 𝕏 logo (black on your red bg will be white)
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L5.99 21.75H2.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      // For others use <Icon size={20} />
                      social.icon && <social.icon size={20} />
                    )}
                  </motion.a>
                );
              })}
            </div>

            <p className="mt-5 mb-3 sm:mt-8 sm:mb-4 text-sm text-[#402701]/80">
              Let’s connect at{" "}
              <a
                href="mailto:hello@shelfiebooks.in"
                className="text-[#412802] hover:underline font-medium"
              >
                connect@staffari.in
              </a>
            </p>

            <p className="mt-2 mb-3 sm:mt-4 sm:mb-4 text-sm text-[#402701]/80">
              A product built by{" "}
              <a
                href="https://www.jacmagnus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#986701] hover:underline font-medium"
              >
                JAC Magnus Private Limited
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mb-3 pt-3 sm:mb-6 sm:pt-4 border-t border-[#402701]/20 text-center text-xs text-[#402701]">
        © {new Date().getFullYear()} Staffari. All rights reserved.
      </div>
    </footer>
  );
}
