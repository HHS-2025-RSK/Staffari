import React from "react";
import { ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0f3d34] 
        text-gray-200
      "
      style={{
        // Replace 'your-image-path.jpg' with the actual path or URL of the generated image
        backgroundImage: "url('/images/footer/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to ensure the "STAFFARI" text and newsletter stand out against the busy jungle art */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Glassmorphism card - This will look amazing over the jungle background */}
        <div
          className="
            backdrop-blur-xs bg-white/10 
            border-t border-white/15 
            p-8 md:p-12 
            shadow-2xl shadow-black/40
          "
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-20">
            {/* Logo/Brand - Left */}
            <div className="flex flex-col">
              <div className="font-body text-4xl md:text-6xl font-extrabold text-[#fdf9f0] tracking-tight">
                STAFFARI
              </div>
              <div className="font-body text-md md:text-lg text-[#fdf9f0] opacity-80 mt-2 max-w-sm">
                Hunt Smart. Hire Right.
              </div>
            </div>

            {/* Newsletter + Socials */}
            <div className="w-full lg:w-auto lg:max-w-md">
              <div
                className="
    relative
    w-full
    max-w-lg mx-auto lg:mx-0           /* centers on mobile, left-align on lg+ */
    rounded-2xl sm:rounded-3xl
    p-5 sm:p-6 md:p-7 lg:p-8
    backdrop-blur-xl
    border border-white/20
    shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
    overflow-hidden
  "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))",
                  borderColor: "rgba(255,255,255,0.25)",
                }}
              >
                {/* subtle glass sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/10 opacity-60 pointer-events-none" />

                {/* soft inner glow – smaller on mobile */}
                <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                <p className="relative mb-4 sm:mb-5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#fdf9f0]/80 text-center sm:text-left">
                  Subscribe to our newsletter
                </p>

                <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
        w-full
        h-12 sm:h-14
        min-w-0                           /* prevents flex overflow */
        rounded-full
        px-5 sm:px-6
        text-sm sm:text-base
        outline-none
        backdrop-blur-md
        border border-white/30
        bg-white/10
        text-white
        placeholder:text-white/60
        shadow-inner
        transition-all duration-300
        focus:bg-white/15 focus:border-white/40
      "
                    style={{ borderColor: "rgba(255,255,255,0.35)" }}
                  />

                  <button
                    type="button"
                    className="
        h-12 sm:h-14
        w-12 sm:w-14
        shrink-0                          /* prevents button from shrinking */
        rounded-full
        flex items-center justify-center
        backdrop-blur-md
        border border-white/30
        bg-white/15
        hover:bg-white/25
        active:scale-95                   /* gives feedback on touch */
        transition-all duration-300
        shadow-lg
      "
                    style={{ borderColor: "rgba(255,255,255,0.35)" }}
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-10 flex items-center gap-8">
                <a
                  href="https://www.instagram.com/staffari_official/"
                  target="_blank"
                  className="text-[#fdf9f0] opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Instagram className="h-7 w-7" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61585470624376#/"
                  target="_blank"
                  className="text-[#fdf9f0] opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Facebook className="h-7 w-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/staffari-official-40aa8239a/"
                  target="_blank"
                  className="text-[#fdf9f0] opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="font-body text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Staffari. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
