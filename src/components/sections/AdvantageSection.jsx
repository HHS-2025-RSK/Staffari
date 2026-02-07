import React, { useMemo } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AdvantageTile from "../ui/AdvantageTile";

import {
  Briefcase,
  Sparkles,
  BadgeCheck,
  Target,
  IndianRupee,
  Filter,
} from "lucide-react";

export default function AdvantageSection({ unfairAdvantageBullets }) {
  const tiles = useMemo(() => {
    const map = {
      "Hospitality-first platform": { Icon: Briefcase, tone: "brown" },
      "Reduced Hiring Friction": { Icon: Sparkles, tone: "beige" },
      "Verified hospitality talent": { Icon: BadgeCheck, tone: "emerald" },
      "Smarter job matching": { Icon: Target, tone: "emerald" },
      "Lower cost per hire": { Icon: IndianRupee, tone: "brown" },
      "Quality over quantity": { Icon: Filter, tone: "beige" },
    };

    return unfairAdvantageBullets.map((title) => ({
      title,
      ...(map[title] ?? { Icon: BadgeCheck, tone: "emerald" }),
    }));
  }, [unfairAdvantageBullets]);

  return (
    <section id="advantage" className="py-14 bg-beige">
      <Container>
        <SectionTitle
          title="Why is Staffari Your Unfair Advantage?"
          desc={null}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <AdvantageTile
              key={t.title}
              title={t.title}
              Icon={t.Icon}
              tone={t.tone}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
