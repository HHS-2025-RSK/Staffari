// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import NotFound from "./pages/NotFound.jsx";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// import React, { useMemo, useState } from "react";
import React, { useMemo } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Download,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
}

function PrimaryButton({ children, onClick, className, as = "button", href }) {
  const Comp = as;
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl bg-emeraldGreen px-5 py-3 text-white",
        "font-body text-[15px] font-semibold shadow-soft transition",
        "hover:brightness-110 active:translate-y-[1px] active:brightness-95",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-emeraldGreen/20",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

function GhostButton({ children, href }) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3",
        "font-body text-[15px] font-semibold text-deepJungleGreen",
        "border border-mutedOlive/30 bg-white",
        "hover:bg-cardBg transition",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-emeraldGreen/15",
      )}
    >
      {children}
    </a>
  );
}

function Pill({ children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-mutedOlive/25 bg-cardBg px-3 py-1",
        "text-[13px] font-body font-medium text-mutedOlive",
      )}
    >
      <Sparkles className="h-4 w-4 text-terracotta" />
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-10">
      {eyebrow ? <Pill>{eyebrow}</Pill> : null}
      <h2 className="mt-4 font-display text-3xl font-bold text-deepJungleGreen md:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 max-w-2xl font-body text-[15px] leading-7 text-charcoalBlack/75">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

/** Feature card that adapts padding when text is short/empty */
function FeatureCard({ icon, title, text }) {
  const hasText = Boolean(text);

  return (
    <div
      className={cn(
        "rounded-2xl border border-mutedOlive/20 bg-white shadow-soft",
        "p-5 md:p-6",
        hasText ? "h-full" : "p-4 md:p-5",
      )}
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
        {icon}
      </div>

      <h3 className="font-display text-[18px] font-bold leading-snug text-deepJungleGreen">
        {title}
      </h3>

      {hasText ? (
        <p className="mt-2 font-body text-[15px] leading-7 text-charcoalBlack/80">
          {text}
        </p>
      ) : null}
    </div>
  );
}

/** For short Advantage items -> compact tile UI */
function AdvantageTile({ title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-mutedOlive/20 bg-white px-4 py-3 shadow-soft">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
        <BadgeCheck className="h-5 w-5" />
      </span>
      <span className="font-body text-[15px] font-semibold text-deepJungleGreen">
        {title}
      </span>
    </div>
  );
}

/** Replaces the old 2-card look in Problem/Helps */
function BulletListPanel({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((it) => (
        <div
          key={it}
          className="flex items-start gap-3 rounded-2xl border border-mutedOlive/15 bg-white p-4"
        >
          <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
            <BadgeCheck className="h-4 w-4" />
          </span>
          <div className="font-body text-[15px] leading-6 text-charcoalBlack/80">
            {it}
          </div>
        </div>
      ))}
    </div>
  );
}

function SideNote({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-emeraldGreen/25 bg-emeraldGreen/5 p-5">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-auto w-10 items-center justify-center rounded-full text-emeraldGreen">
          {icon}
        </span>
        <div>
          <div className="font-display text-[18px] font-bold text-deepJungleGreen">
            {title}
          </div>
          <p className="mt-2 font-body text-[15px] leading-7 text-charcoalBlack/80">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-mutedOlive/20 bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-body text-[15px] font-semibold text-deepJungleGreen">
          {q}
        </span>
        <span className="font-body text-mutedOlive">{open ? "—" : "+"}</span>
      </button>
      {open ? (
        <div className="px-5 pb-5">
          <p className="font-body text-[15px] leading-7 text-charcoalBlack/75">
            {a}
          </p>
        </div>
      ) : null}
    </div>
  );
}

function StoreButton({ variant = "light", href, title, subtitle }) {
  const base =
    "inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition focus:outline-none focus-visible:ring-4";
  const light =
    "bg-white text-deepJungleGreen shadow-soft hover:brightness-95 focus-visible:ring-white/30";
  const dark =
    "border border-white/25 bg-white/10 text-white hover:bg-white/15 focus-visible:ring-white/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(base, variant === "light" ? light : dark)}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full",
          variant === "light"
            ? "bg-emeraldGreen/10 text-emeraldGreen"
            : "bg-white/15 text-white",
        )}
      >
        <Download className="h-5 w-5" />
      </span>

      <span className="flex flex-col leading-tight">
        <span className={cn("font-body text-[12px] opacity-80")}>
          {subtitle}
        </span>
        <span className={cn("font-body text-[15px] font-semibold")}>
          {title}
        </span>
      </span>

      <ArrowRight
        className={cn(
          "ml-2 h-4 w-4",
          variant === "light" ? "text-mutedOlive" : "text-white/70",
        )}
      />
    </a>
  );
}

export default function App() {
  // const [faqOpen, setFaqOpen] = useState(0);

  // Replace these with your real URLs
  const PLAYSTORE_URL = "YOUR_PLAYSTORE_LINK";
  const APPSTORE_URL = "YOUR_APPSTORE_LINK";

  // Content from your PDF (no change)
  const metaTitle = "Staffari | Hospitality Jobs & Hiring Platform";
  const metaDescription =
    "Hiring shouldn’t slow hospitality down. Staffari cuts recruitment friction and costs by connecting you directly with ready-to-work hospitality talent.";

  const problemBullets = useMemo(
    () => [
      "Slow recruitment agencies",
      "High hiring costs",
      "Unqualified applicants",
      "Operational downtime",
    ],
    [],
  );

  const helpsBullets = useMemo(
    () => [
      "Access hospitality-focused talent pools",
      "Reduce time spent screening candidates",
      "Hire faster without agency dependency",
    ],
    [],
  );

  const unfairAdvantageBullets = useMemo(
    () => [
      "Hospitality-Only Focus",
      "Reduced Hiring Friction",
      "More Relevant Talent",
      "Operationally Aligned Hiring",
      "Quality Over Volume",
    ],
    [],
  );

  // const faqs = useMemo(
  //   () => [
  //     {
  //       q: "What is Staffari?",
  //       a: "Staffari is a hospitality hiring platform that connects businesses directly with ready-to-work hospitality talent.",
  //     },
  //     {
  //       q: "Who is Staffari for?",
  //       a: "Staffari is built for hotels, restaurants, and hospitality businesses that want to hire faster with less friction and better relevance.",
  //     },
  //     {
  //       q: "How is Staffari different from agencies?",
  //       a: "Staffari reduces dependency on agencies by helping you reach relevant candidates directly and cut down screening time.",
  //     },
  //     {
  //       q: "Can I use Staffari for urgent hiring?",
  //       a: "Yes. The platform is designed to reduce delays and help teams hire with confidence when operations can’t wait.",
  //     },
  //     {
  //       q: "How do I get started?",
  //       a: "Download the app from Google Play or the App Store and begin your journey.",
  //     },
  //   ],
  //   [],
  // );

  return (
    <div className="min-h-screen bg-pageBg">
      <div className="sr-only" aria-hidden="true">
        <h1>{metaTitle}</h1>
        <p>{metaDescription}</p>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-mutedOlive/15 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="font-display text-xl font-bold text-deepJungleGreen"
          >
            STAFFARI
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#what"
            >
              What is Staffari
            </a>
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#problem"
            >
              The Problem
            </a>
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#helps"
            >
              How Staffari Helps
            </a>
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#advantage"
            >
              Advantage
            </a>
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#newsletter"
            >
              Newsletter
            </a>
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#faq"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <PrimaryButton as="a" href="#download">
              Start Your Hunt <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
        </Container>
      </header>

      <main id="home">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-20">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <Pill>Hiring shouldn’t slow hospitality down.</Pill>
                <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-deepJungleGreen md:text-5xl">
                  Hospitality doesn’t wait. Hiring shouldn’t either.
                </h1>
                <p className="mt-4 max-w-xl font-body text-[16px] leading-7 text-charcoalBlack/75">
                  Hiring shouldn’t slow hospitality down. Staffari helps hotels
                  and restaurants find the right people faster - without agency
                  delays, irrelevant resumes, or complex hiring workflows.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <PrimaryButton as="a" href="#download">
                    Start Your Hunt <ArrowRight className="h-4 w-4" />
                  </PrimaryButton>
                  <GhostButton href="#what">What is Staffari</GhostButton>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-mutedOlive">
                  <span className="inline-flex items-center gap-2 font-body font-semibold">
                    <ShieldCheck className="h-4 w-4 text-emeraldGreen" />{" "}
                    Reduced friction
                  </span>
                  <span className="inline-flex items-center gap-2 font-body font-semibold">
                    <MessageCircle className="h-4 w-4 text-emeraldGreen" />{" "}
                    Direct connection
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-mutedOlive/20 bg-cardBg p-6 shadow-soft">
                <div className="rounded-2xl bg-white p-6">
                  <div className="font-display text-2xl font-bold text-deepJungleGreen">
                    Hospitality hiring, simplified
                  </div>
                  <p className="mt-3 font-body text-[15px] leading-7 text-charcoalBlack/80">
                    Staffari is a hiring platform designed specifically for the
                    hospitality industry.
                  </p>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl border border-mutedOlive/20 bg-white p-4">
                      <div className="font-body font-semibold text-charcoalBlack">
                        Faster hiring
                      </div>
                      <div className="mt-1 font-body text-[14px] text-mutedOlive">
                        Hire without agency delays and irrelevant resumes.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-mutedOlive/20 bg-white p-4">
                      <div className="font-body font-semibold text-charcoalBlack">
                        Confidence
                      </div>
                      <div className="mt-1 font-body text-[14px] text-mutedOlive">
                        Practical hiring for hospitality operations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What is Staffari */}
        <section id="what" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="What is Staffari"
              title="Hospitality hiring, simplified"
              desc="Staffari is a hiring platform designed specifically for the hospitality industry. We help hotels, restaurants, and hospitality businesses connect with relevant, ready-to-work talent through a streamlined, tech-enabled process."
            />
          </Container>
        </section>

        {/* The Problem (new unified panel UI) */}
        <section id="problem" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="The Problem"
              title="Why hospitality hiring is broken"
              desc="Hospitality businesses lose time and money dealing with:"
            />

            <div className="rounded-3xl border border-mutedOlive/20 bg-cardBg p-6 shadow-soft md:p-8">
              <div className="grid gap-6 md:grid-cols-3 md:items-start">
                <div className="md:col-span-2">
                  <BulletListPanel items={problemBullets} />
                </div>

                <SideNote
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Built for confidence"
                  text="Staffari is built to remove these friction points and help teams hire with confidence."
                />
              </div>
            </div>
          </Container>
        </section>

        {/* How Staffari Helps (new unified panel UI) */}
        <section id="helps" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="How Staffari Helps"
              title="Hire hospitality talent without the hassle"
              desc="With Staffari, businesses can:"
            />

            <div className="rounded-3xl border border-mutedOlive/20 bg-cardBg p-6 shadow-soft md:p-8">
              <div className="grid gap-6 md:grid-cols-3 md:items-start">
                <div className="md:col-span-2">
                  <BulletListPanel items={helpsBullets} />
                </div>

                <SideNote
                  icon={<Briefcase className="h-5 w-5" />}
                  title="Operationally aligned hiring"
                  text="Everything is designed around practical hiring for hospitality operations."
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Unfair Advantage */}
        <section id="advantage" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="Advantage"
              title="Why is Staffari Your Unfair Advantage?"
              desc={null}
            />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {unfairAdvantageBullets.map((t) => (
                <AdvantageTile key={t} title={t} />
              ))}
            </div>
          </Container>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-16">
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

        {/* FAQ */}
        {/* <section id="faq" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="FAQ"
              title="Frequently asked questions"
              desc="Everything you need to know before you download Staffari."
            />

            <div className="grid gap-4">
              {faqs.map((f, idx) => (
                <FAQItem
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  open={faqOpen === idx}
                  onToggle={() => setFaqOpen((p) => (p === idx ? -1 : idx))}
                />
              ))}
            </div>
          </Container>
        </section> */}

        {/* Download CTA */}
        <section id="download" className="py-16">
          <Container>
            <div className="rounded-3xl border border-mutedOlive/20 bg-deepJungleGreen p-8 text-white md:p-10">
              {/* <div className="grid gap-8 md:grid-cols-2 md:items-center"> */}
              <div className="grid gap-8 md:grid-cols-1 md:items-center">
                <div>
                  <Pill>Download</Pill>
                  <h2 className="mt-4 font-display text-3xl font-bold">
                    One ecosystem for hospitality careers and hiring
                  </h2>
                  <p className="mt-3 font-body text-[15px] leading-7 text-white/80">
                    Staffari connects the entire hospitality workforce. Download
                    the app from the App Store or Play Store to begin your
                    journey.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <StoreButton
                      variant="light"
                      href={PLAYSTORE_URL}
                      subtitle="Get it on"
                      title="Google Play"
                    />
                    <StoreButton
                      variant="dark"
                      href={APPSTORE_URL}
                      subtitle="Download on the"
                      title="App Store"
                    />
                  </div>
                </div>

                {/* <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="font-body font-semibold">
                      Cuts recruitment friction
                    </div>
                    <div className="mt-1 font-body text-[14px] text-white/75">
                      Connect directly with ready-to-work hospitality talent.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="font-body font-semibold">
                      Reduces time and cost
                    </div>
                    <div className="mt-1 font-body text-[14px] text-white/75">
                      Less agency dependency and fewer irrelevant resumes.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="font-body font-semibold">
                      Operationally aligned
                    </div>
                    <div className="mt-1 font-body text-[14px] text-white/75">
                      Designed around practical hiring for hospitality
                      operations.
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="border-t border-mutedOlive/15 py-10">
          <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-display text-lg font-bold text-deepJungleGreen">
                STAFFARI
              </div>
              <div className="mt-1 font-body text-[13px] text-mutedOlive">
                Hiring shouldn’t slow hospitality down.
              </div>
            </div>
            <div className="font-body text-[13px] text-mutedOlive">
              © {new Date().getFullYear()} Staffari. All rights reserved.
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
