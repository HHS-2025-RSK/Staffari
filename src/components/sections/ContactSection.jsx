import React from "react";
import { ArrowRight, X } from "lucide-react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { PrimaryButton } from "../ui/Buttons";

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

    // focus first focusable (close button) when opened
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
      {/* backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close modal"
      />
      {/* panel */}
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
  const [role, setRole] = React.useState(""); // hotel | college | student | jobseeker
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
    <section id="contact" className="py-16">
      <Container>
        <div className="rounded-3xl border border-mutedOlive/20 bg-cardBg p-8 shadow-soft md:p-10">
          <SectionTitle
            title="Contact Us"
            desc="Tell us who you are and what you need—our team will get back to you."
          />

          <form
            className="mt-6 grid gap-3 md:grid-cols-2"
            onSubmit={async (e) => {
              e.preventDefault(); // prevent default submit refresh [web:91]
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

              // TODO: replace this with your API call
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

            {/* Role picker trigger */}
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

            {/* Conditional org field */}
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

            <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="font-body text-[13px] text-mutedOlive">
                We’ll only use your details to respond to your message.
              </p>
              <PrimaryButton className="md:w-[220px]" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit"}{" "}
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Container>

      {/* Role selection modal */}
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
              <div className="mt-1 font-body text-[13px] text-mutedOlive">
                Continue with this role
              </div>
            </button>
          ))}
        </div>
      </Modal>

      {/* Success modal */}
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
