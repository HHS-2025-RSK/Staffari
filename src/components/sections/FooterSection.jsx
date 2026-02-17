import React from "react";
import { ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer
      id="newsletter"
      className="relative overflow-hidden border-t-4 border-[#402701] bg-[#fdf9f0] rounded-t-3xl"
    >
      <div className="bg-[#fdf9f0] relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-8 md:pt-10">
        {/* MOBILE FIRST LAYOUT — REDUCED GAPS */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 text-center lg:text-left"
          >
            <h1 className="font-display text-4xl md:text-8xl font-extrabold tracking-tight text-[#0f3d34]">
              STAFFARI
            </h1>
            <p className="font-body font-semibold text-base md:text-xl text-[#0f3d34]/80">
              Hunt Smart. Hire Right.
            </p>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 lg:order-none w-full bg-[#fdf9f0] rounded-2xl p-4 md:p-8 border border-[#402701]/20 shadow-lg text-center lg:text-left"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#402701]/80 mb-3">
              Subscribe to our newsletter
            </p>

            <div className="flex flex-col lg:flex-row gap-3 w-full items-center justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full lg:flex-1 h-12 rounded-full px-4 text-sm bg-[#fdf9f0] border border-[#402701]/30 focus:border-[#402701] focus:outline-none text-[#402701] placeholder-[#402701]/50"
              />

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="h-12 w-12 rounded-full flex items-center justify-center bg-[#52110f] text-white shadow-md mx-auto lg:mx-0"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          <div></div>

          {/* Social Icons — BELOW NEWSLETTER ON MOBILE */}
          <div className="order-3 lg:order-none w-full text-center lg:text-left">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#402701]/80 mb-3">
              Social Media
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/staffari_official/",
                },
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/profile.php?id=61585470624376#/",
                },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/staffari-official-40aa8239a/",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#52110f] text-white shadow"
                >
                  <item.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Added: Built by line – centered on all screens */}
            <p className="mt-6 mb-3 text-sm text-[#402701]/80">
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

      {/* Bottom Bar — REDUCED SPACING */}
      <div className="mb-6 pt-4 border-t border-[#402701]/20 text-center text-xs text-[#402701]">
        © {new Date().getFullYear()} Staffari. All rights reserved.
      </div>
    </footer>
  );
}
