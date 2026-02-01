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

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Download,
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

function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-mutedOlive/20 bg-white p-6 shadow-soft">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-deepJungleGreen">
        {title}
      </h3>
      <p className="mt-2 font-body text-[15px] leading-7 text-charcoalBlack/80">
        {text}
      </p>
    </div>
  );
}

function RoleCard({ icon, title, subtitle }) {
  return (
    <a
      href="#download"
      className={cn(
        "group flex items-center gap-4 rounded-xl2 bg-cardBg p-6",
        "border border-mutedOlive/35 transition",
        "hover:-translate-y-[1px] hover:bg-white hover:shadow-soft",
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-emeraldGreen/15",
      )}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emeraldGreen/10 text-emeraldGreen">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-body text-[16px] font-bold text-charcoalBlack">
          {title}
        </div>
        <div className="mt-1 font-body text-[14px] text-mutedOlive">
          {subtitle}
        </div>
      </div>
      <div className="ml-auto text-mutedOlive transition group-hover:translate-x-1">
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
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
  const [faqOpen, setFaqOpen] = useState(0);

  // Replace these with your real URLs
  const PLAYSTORE_URL = "YOUR_PLAYSTORE_LINK";
  const APPSTORE_URL = "YOUR_APPSTORE_LINK";

  const features = useMemo(
    () => [
      {
        title: "Begin Your Talent Hunt!",
        text: "Discover the best talent or find your dream job in the hospitality jungle.",
        icon: <Briefcase className="h-5 w-5" />,
      },
      {
        title: "Connect Directly",
        text: "No middlemen. Chat directly with hotels or skilled professionals.",
        icon: <MessageCircle className="h-5 w-5" />,
      },
      {
        title: "Join the Expedition",
        text: "Your next big opportunity is just a click away. Let’s get started.",
        icon: <BadgeCheck className="h-5 w-5" />,
      },
    ],
    [],
  );

  const roles = useMemo(
    () => [
      {
        title: "Job Seeker",
        subtitle: "Find your next role in hotels, resorts, and restaurants.",
        icon: <Briefcase className="h-5 w-5" />,
      },
      {
        title: "Hotel Owner",
        subtitle: "Hire faster with verified profiles and direct outreach.",
        icon: <Building2 className="h-5 w-5" />,
      },
      {
        title: "Broker",
        subtitle: "Connect candidates and hotels, and earn with every closure.",
        icon: <Handshake className="h-5 w-5" />,
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        q: "What is Staffari?",
        a: "Staffari is a hospitality talent platform that helps hotels hire and helps professionals get hired through direct connections and simple workflows.",
      },
      {
        q: "Who is it for?",
        a: "Staffari is built for hotel owners (hiring), job seekers (jobs), and brokers (connections).",
      },
      {
        q: "Is there direct chat?",
        a: "Yes. The experience focuses on direct connection to reduce delays and speed up hiring.",
      },
      {
        q: "How do I try it?",
        a: "Download the app from Google Play or the App Store using the buttons below.",
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-pageBg">
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
              href="#features"
            >
              Features
            </a>
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#roles"
            >
              For whom
            </a>
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#how"
            >
              How it works
            </a>
            <a
              className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
              href="#faq"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="hidden rounded-2xl px-4 py-2 font-body text-[14px] font-semibold text-mutedOlive hover:bg-cardBg md:inline-flex"
            >
              Download
            </a>
            <PrimaryButton as="a" href="#download">
              Download App <ArrowRight className="h-4 w-4" />
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
                <Pill>Your hunt for the best talent starts here.</Pill>
                <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-deepJungleGreen md:text-5xl">
                  Hospitality hiring, simplified.
                </h1>
                <p className="mt-4 max-w-xl font-body text-[16px] leading-7 text-charcoalBlack/75">
                  Staffari helps hotels hire faster and helps professionals find
                  the right job—with direct connections, cleaner shortlists, and
                  less back-and-forth.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <PrimaryButton as="a" href="#download">
                    Download App <ArrowRight className="h-4 w-4" />
                  </PrimaryButton>
                  <GhostButton href="#features">See features</GhostButton>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-mutedOlive">
                  <span className="inline-flex items-center gap-2 font-body font-semibold">
                    <ShieldCheck className="h-4 w-4 text-emeraldGreen" />{" "}
                    Verified-first approach
                  </span>
                  <span className="inline-flex items-center gap-2 font-body font-semibold">
                    <MessageCircle className="h-4 w-4 text-emeraldGreen" />{" "}
                    Direct communication
                  </span>
                </div>
              </div>

              {/* Hero visual */}
              <div className="rounded-3xl border border-mutedOlive/20 bg-cardBg p-6 shadow-soft">
                <div className="rounded-2xl bg-white p-6">
                  <div className="font-display text-2xl font-bold text-deepJungleGreen">
                    What you can do on Staffari
                  </div>
                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl border border-mutedOlive/20 bg-white p-4">
                      <div className="font-body font-semibold text-charcoalBlack">
                        Hotels
                      </div>
                      <div className="mt-1 font-body text-[14px] text-mutedOlive">
                        Post roles, shortlist quickly, and reach candidates
                        directly.
                      </div>
                    </div>

                    <div className="rounded-2xl border border-mutedOlive/20 bg-white p-4">
                      <div className="font-body font-semibold text-charcoalBlack">
                        Job Seekers
                      </div>
                      <div className="mt-1 font-body text-[14px] text-mutedOlive">
                        Find matching jobs and talk to recruiters without
                        delays.
                      </div>
                    </div>

                    <div className="rounded-2xl border border-mutedOlive/20 bg-white p-4">
                      <div className="font-body font-semibold text-charcoalBlack">
                        Brokers
                      </div>
                      <div className="mt-1 font-body text-[14px] text-mutedOlive">
                        Connect both sides and earn through successful
                        placements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section id="features" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="Built for speed"
              title="A better way to hire in hospitality"
              desc="Clear profiles, direct communication, and simple flows—so you spend less time coordinating and more time closing."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((f) => (
                <FeatureCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  text={f.text}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Roles */}
        <section id="roles" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="Three audiences"
              title="Made for hotels, job seekers, and brokers"
              desc="Same platform, role-based experience—so each user sees what matters."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {roles.map((r) => (
                <RoleCard
                  key={r.title}
                  icon={r.icon}
                  title={r.title}
                  subtitle={r.subtitle}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section id="how" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="Simple steps"
              title="How it works"
              desc="A clean, minimal process that keeps everyone moving."
            />

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-mutedOlive/20 bg-white p-6">
                <div className="font-display text-lg font-bold text-deepJungleGreen">
                  1) Create
                </div>
                <p className="mt-2 font-body text-[15px] leading-7 text-charcoalBlack/75">
                  Set up your profile and preferences (hotel or professional).
                </p>
              </div>

              <div className="rounded-2xl border border-mutedOlive/20 bg-white p-6">
                <div className="font-display text-lg font-bold text-deepJungleGreen">
                  2) Connect
                </div>
                <p className="mt-2 font-body text-[15px] leading-7 text-charcoalBlack/75">
                  Discover matches, shortlist, and reach out directly.
                </p>
              </div>

              <div className="rounded-2xl border border-mutedOlive/20 bg-white p-6">
                <div className="font-display text-lg font-bold text-deepJungleGreen">
                  3) Close
                </div>
                <p className="mt-2 font-body text-[15px] leading-7 text-charcoalBlack/75">
                  Chat, schedule, and close faster—less waiting, more hiring.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-14">
          <Container>
            <SectionTitle
              eyebrow="Answers"
              title="Frequently asked questions"
              desc="Quick clarity for first-time users."
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
        </section>

        {/* Download */}
        <section id="download" className="py-16">
          <Container>
            <div className="rounded-3xl border border-mutedOlive/20 bg-deepJungleGreen p-8 text-white md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h3 className="font-display text-3xl font-bold">
                    Download Staffari
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-7 text-white/80">
                    Your hunt for the best talent starts here. Download the app
                    and start connecting today.
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

                  <p className="mt-4 font-body text-[13px] text-white/60">
                    Replace the store URLs in code once your app is live.
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="font-body font-semibold">
                      Direct connections
                    </div>
                    <div className="mt-1 font-body text-[14px] text-white/75">
                      No middlemen—connect faster and move quicker.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="font-body font-semibold">
                      Built for hospitality
                    </div>
                    <div className="mt-1 font-body text-[14px] text-white/75">
                      Hotels, job seekers, and brokers in one ecosystem.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <div className="font-body font-semibold">
                      Clean UI, fast actions
                    </div>
                    <div className="mt-1 font-body text-[14px] text-white/75">
                      Shortlist, chat, and close without clutter.
                    </div>
                  </div>
                </div>
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
                Your hunt for the best talent starts here.
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
