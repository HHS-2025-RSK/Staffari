import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import { PrimaryButton } from "./ui/Buttons";

export default function Navbar() {
  return (
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
          {/* <a
            className="font-body text-[14px] font-semibold text-mutedOlive hover:text-deepJungleGreen"
            href="#faq"
          >
            FAQ
          </a> */}
        </nav>

        <div className="flex items-center gap-3">
          <PrimaryButton as="a" href="#download">
            Start Your Hunt <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </Container>
    </header>
  );
}
