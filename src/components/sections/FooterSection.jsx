import React from "react";
import Container from "../ui/Container";

export default function FooterSection() {
  return (
    <footer className="border-t border-mutedOlive/15 py-10">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-body text-lg font-bold text-deepJungleGreen">
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
  );
}
