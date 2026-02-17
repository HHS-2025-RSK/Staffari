import React from "react";
import { ArrowRight, X } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { PrimaryButton } from "../ui/Buttons";
import ContactTitle from "../ui/ContactTitle";
import NewsletterSection from "./NewsletterSection";

const BG_URL = "/images/contactus/image.png";
const CARD_BG_URL = "/images/common/woodplate1.png";
const M_CARD_BG_URL = "/images/common/woodplate.png";
const SECTION_BG = "/images/common/bg.png";

const ROLES = [
  { key: "hotel", label: "Hotel", emoji: "🏨" },
  { key: "college", label: "College / Institute", emoji: "🎓" },
  { key: "student", label: "Student", emoji: "👩‍🎓" },
  { key: "jobseeker", label: "Job Seeker", emoji: "🧑‍💼" },
];

function roleLabel(role) {
  return ROLES.find((r) => r.key === role)?.label ?? "";
}

function trapFocus(e, containerEl) {
  if (e.key !== "Tab" || !containerEl) return;

  const focusable = containerEl.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
  );
  const list = Array.from(focusable);
  if (list.length === 0) return;

  const first = list[0];
  const last = list[list.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function Modal({ open, title, onClose, children }) {
  const panelRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;

    const prevActive = document.activeElement;

    const t = setTimeout(() => {
      const btn = panelRef.current?.querySelector("[data-autofocus]");
      btn?.focus();
    }, 0);

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      trapFocus(e, panelRef.current);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown);
      if (prevActive && prevActive.focus) prevActive.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div
        ref={panelRef}
        className="relative w-full max-w-xl rounded-3xl border border-mutedOlive/20 bg-cardBg p-6 shadow-soft md:p-8"
        style={{ maxHeight: "90vh", overflow: "auto" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="font-display text-xl font-bold text-charcoalBlack">
            {title}
          </div>
          <button
            type="button"
            data-autofocus
            onClick={onClose}
            className="rounded-xl border border-mutedOlive/25 bg-white px-3 py-2 text-charcoalBlack hover:bg-beige"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [role, setRole] = React.useState("");
  const [roleOpen, setRoleOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const orgLabel = role === "hotel" ? "Hotel name" : "College name";

  const showOrgField =
    role === "hotel" ||
    role === "college" ||
    role === "student" ||
    role === "jobseeker";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
      />

      <div className="relative z-[1]">
        <div>
          <div className="relative overflow-hidden">
            {/* Desktop Wood Image - only visible on LG screens */}
            <img
              src={CARD_BG_URL}
              alt=""
              aria-hidden="true"
              className="hidden lg:block pointer-events-none h-full w-full object-contain"
            />

            {/* Content Wrapper */}
            <div className="mx-auto w-full max-w-6xl flex items-center justify-center lg:pointer-events-none lg:absolute lg:-top-18 lg:inset-0 px-6 pb-10 lg:px-0 lg:pb-0">
              <div
                className="pointer-events-auto w-full rounded-3xl px-8 lg:px-28 py-8 shadow-xl backdrop-blur-sm lg:w-[90%] lg:bg-transparent lg:shadow-none lg:backdrop-blur-none lg:rounded-none bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{
                  // Applied M_CARD_BG_URL for mobile.
                  // We use a CSS variable or conditional logic if you want to disable it on desktop,
                  // but typically keeping it as the base and letting desktop styles override works best.
                  backgroundImage: `url(${M_CARD_BG_URL})`,
                }}
              >
                {/* Desktop override: If on large screen, remove the background image since we use the <img> tag above */}
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                  @media (min-width: 1024px) {
                    .lg\\:bg-transparent { background-image: none !important; }
                  }
                `,
                  }}
                />

                <ContactTitle
                  title="Contact Us"
                  desc="Reach out here, our team will get back to you"
                />

                <form
                  className="mt-6 grid gap-3 md:grid-cols-2 lg:mx-8"
                  onSubmit={async (e) => {
                    e.preventDefault();

                    if (!role) {
                      setRoleOpen(true);
                      return;
                    }

                    setSubmitting(true);

                    const data = new FormData(e.currentTarget);
                    const payload = {
                      fullName: data.get("fullName") || "",
                      email: data.get("email") || "",
                      phone: data.get("phone") || "",
                      city: data.get("city") || "",
                      role,
                      orgName: data.get("orgName") || "",
                      comments: data.get("comments") || "",
                    };

                    console.log("Contact:", payload);

                    await new Promise((r) => setTimeout(r, 500));
                    setSubmitting(false);

                    e.currentTarget.reset();
                    setRole("");
                    setSuccessOpen(true);
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
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                  />

                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                  />

                  <input
                    name="city"
                    placeholder="City / Location"
                    className="w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                  />

                  <button
                    type="button"
                    onClick={() => setRoleOpen(true)}
                    className="md:col-span-2 w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 text-left font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                    aria-haspopup="dialog"
                    aria-expanded={roleOpen}
                  >
                    <span className="text-mutedOlive">I am here as:</span>{" "}
                    {role ? roleLabel(role) : "Select"}
                  </button>

                  {showOrgField ? (
                    <input
                      name="orgName"
                      required
                      placeholder={orgLabel}
                      className="md:col-span-2 w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                    />
                  ) : null}

                  <textarea
                    name="comments"
                    rows={4}
                    placeholder="Comments / Message (optional but recommended)"
                    className="md:col-span-2 w-full rounded-2xl border border-mutedOlive/25 bg-white px-4 py-3 font-body text-[14px] text-charcoalBlack outline-none focus:ring-4 focus:ring-emeraldGreen/15"
                  />

                  <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-end">
                    {/* <p className="font-body text-[13px] text-white lg:text-charcoalBlack lg:ml-20">
                      We’ll only use your details to respond to your message.
                    </p> */}
                    <PrimaryButton
                      className="md:w-[220px]"
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Submit"}{" "}
                      <ArrowRight className="h-4 w-4" />
                    </PrimaryButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selection Modal */}
      <Modal
        open={roleOpen}
        title="I am here as:"
        onClose={() => setRoleOpen(false)}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {ROLES.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => {
                setRole(r.key);
                setRoleOpen(false);
              }}
              className="group rounded-2xl border border-mutedOlive/25 bg-white p-4 text-left hover:bg-beige focus:outline-none focus:ring-4 focus:ring-emeraldGreen/15"
            >
              <div className="font-body text-[14px] text-mutedOlive">
                {r.emoji}
              </div>
              <div className="mt-2 font-body font-semibold text-charcoalBlack">
                {r.label}
              </div>
            </button>
          ))}
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal
        open={successOpen}
        title="Thank you!"
        onClose={() => setSuccessOpen(false)}
      >
        <p className="font-body text-[14px] leading-7 text-mutedOlive">
          Your response was submitted successfully. We’ll get back to you soon.
        </p>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setSuccessOpen(false)}
            className="rounded-2xl bg-deepJungleGreen px-5 py-3 font-body text-[14px] font-semibold text-white shadow-soft"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
}
