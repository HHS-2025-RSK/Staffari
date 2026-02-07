import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { PrimaryButton } from "../ui/Buttons";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="-mt-20">
      {/* Patch */}
      <div className="border-t border-mutedOlive/20 bg-deepJungleGreen">
        <div className="px-40">
          <div className="py-6 md:py-8">
            <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:items-center">
              {/* Left copy */}
              <div>
                <div className="inline-flex items-center rounded-full border border-mutedOlive/25 bg-white px-3 py-1 font-body text-[12px] font-semibold text-mutedOlive">
                  Newsletter
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-[#fdf9f0] md:text-3xl">
                  Subscribe for hiring insights
                </h3>

                <p className="mt-2 font-body text-[15px] leading-7 text-[#fdf9f0]">
                  Product updates, hiring tips, and hospitality insights—no
                  spam.
                </p>
              </div>

              {/* Right form */}
              <form
                className="grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault(); // prevent page refresh on submit [web:91]
                  const data = new FormData(e.currentTarget);

                  const payload = {
                    fullName: data.get("fullName"),
                    email: data.get("email"),
                    phone: data.get("phone") || "",
                  };

                  console.log("Newsletter:", payload);
                  alert("Thanks! You’re subscribed. (Hook this to your API)");
                  e.currentTarget.reset();
                }}
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    name="fullName"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-mutedOlive/25 bg-[#fdf9f0] px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-2xl border border-mutedOlive/25 bg-[#fdf9f0] px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                  />
                </div>

                <div className="grid gap-3 md:grid-cols-[1fr_220px] md:items-center">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone (optional)"
                    className="w-full rounded-2xl border border-mutedOlive/25 bg-[#fdf9f0] px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                  />

                  <PrimaryButton className="w-full md:w-[220px] text-[#fdf9f0]">
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </PrimaryButton>
                </div>

                <p className="font-body text-[13px] text-[#fdf9f0]">
                  We’ll only use your details to share Staffari updates.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
