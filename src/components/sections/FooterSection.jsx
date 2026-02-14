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
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

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
              <div className="font-body text-3xl md:text-4xl font-bold text-[#fdf9f0] tracking-tight">
                STAFFARI
              </div>
              <div className="font-body text-sm md:text-base text-[#fdf9f0] opacity-80 mt-2 max-w-sm">
                Hunt Smart. Hire Right.
              </div>
            </div>

            {/* Newsletter + Socials */}
            <div className="w-full lg:w-auto lg:max-w-md">
              <p className="mb-5 text-sm font-semibold tracking-widest uppercase text-[#fdf9f0]">
                Subscribe to our newsletter
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="
                    flex-1
                    h-14 min-w-[280px] lg:min-w-[340px]
                    rounded-full
                    px-6 py-3
                    text-sm
                    outline-none
                    border border-[#fdf9f0]/30
                    bg-[#fdf9f0]/10
                    text-white placeholder:text-[#fdf9f0]/60
                    shadow-inner
                    hover:border-[#fdf9f0]/50
                    focus:border-indigo-400 focus:bg-white/15
                    focus:ring-2 focus:ring-indigo-500/30
                    transition-all duration-300
                  "
                />
                <button
                  type="button"
                  className="
                    h-14 w-14
                    rounded-full
                    flex items-center justify-center
                    border-2 border-[#0f3d34]-500
                    bg-[#0f3d34]
                    hover:bg-[#0f3d34]/50 hover:border-[#0f3d34]-400
                    text-white
                    transition-all duration-300
                    shadow-lg hover:shadow-xl hover:shadow-[#0f3d34]-500/80
                  "
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Social Media Icons */}
              <div className="mt-10 flex items-center gap-8">
                <a
                  href="#"
                  className="text-[#fdf9f0] opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Instagram className="h-7 w-7" />
                </a>
                <a
                  href="#"
                  className="text-[#fdf9f0] opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Facebook className="h-7 w-7" />
                </a>
                <a
                  href="#"
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
