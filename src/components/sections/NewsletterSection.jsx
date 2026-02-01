import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { PrimaryButton } from "../ui/Buttons";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-16 bg-white">
      <Container>
        <div className="rounded-3xl border border-mutedOlive/20 bg-cardBg p-8 shadow-soft md:p-10">
          <SectionTitle
            eyebrow="Newsletter"
            title="Subscribe to Our Newsletter"
            desc="Get product updates and hiring insights tailored for hospitality teams."
          />

          <form
            className="mt-6 grid gap-3 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
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
            <input
              name="fullName"
              required
              placeholder="Full Name"
              className="w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number (optional)"
              className="w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15 md:col-span-2"
            />

            <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="font-body text-[13px] text-mutedOlive">
                We’ll only use your details to share Staffari updates.
              </p>
              <PrimaryButton className="md:w-[220px]">
                Subscribe <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
