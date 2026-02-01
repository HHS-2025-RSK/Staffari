import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AdvantageTile from "../ui/AdvantageTile";

export default function AdvantageSection({ unfairAdvantageBullets }) {
  return (
    <section id="advantage" className="py-14 bg-white">
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
  );
}
