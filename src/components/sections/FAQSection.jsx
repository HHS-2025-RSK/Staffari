import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FAQItem from "../ui/FAQItem";

export default function FAQSection({ faqs, faqOpen, setFaqOpen }) {
  return (
    <section id="faq" className="py-14">
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
    </section>
  );
}
