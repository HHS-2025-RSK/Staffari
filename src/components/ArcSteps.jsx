import React from "react";

export function ArcStep({ children }) {
  return children;
}

export default function ArcSteps({
  children,
  railHeight = 980,
  dotSize = 80,
  // kept for API compatibility; no longer used for desktop alignment
  // xOffsets = [0, 90, 40],
  yPositions = [0.22, 0.52, 0.82],
  outer = { left: -1270, top: -80, size: 1520, border: 58 },
  inner = { left: -1230, top: -40, size: 1440, border: 20 },
}) {
  const steps = React.Children.toArray(children)
    .filter(Boolean)
    .map((child, idx) => {
      if (!React.isValidElement(child)) return null;
      const { id, titleNode } = child.props;
      if (!id) console.warn("ArcStep is missing required prop: id");
      return {
        id,
        number: idx + 1,
        titleNode: titleNode ?? null,
        element: child,
      };
    })
    .filter(Boolean);

  const count = steps.length;

  const positions = (() => {
    if (count === 0) return [];
    if (count === 1) return [0.5];
    if (count === 2) return [0.32, 0.72];
    if (count === 3) return yPositions;
    const start = 0.2;
    const end = 0.85;
    const step = (end - start) / (count - 1);
    return Array.from({ length: count }, (_, i) => start + i * step);
  })();

  // IMPORTANT: this computes x on the circle in the SAME coordinate space as the rail container.
  const arcXForY = (y) => {
    const r = outer.size / 2; // circle radius in px (same as SVG viewBox size/2)
    const cx = outer.left + r; // circle center X relative to the rail container
    const cy = outer.top + r; // circle center Y relative to the rail container
    const dy = y - cy;
    const inside = r * r - dy * dy;
    return cx + Math.sqrt(Math.max(0, inside)); // Math.sqrt expects x >= 0 [web:22]
  };

  // Animate trigger when section enters viewport
  const sectionRef = React.useRef(null);
  const [drawArc, setDrawArc] = React.useState(false);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawArc(true);
            obs.disconnect(); // stop observing once triggered [web:18]
          }
        });
      },
      { threshold: 0.25 }, // callback when 25% visible [web:16]
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // SVG arc geometry
  const rOuterStrokeCenter = outer.size / 2 - outer.border / 2;
  const cxOuter = outer.size / 2;
  const cyOuter = outer.size / 2;
  const circumferenceOuter = 2 * Math.PI * rOuterStrokeCenter;

  // Visible portion of the circle via dasharray + dashoffset [web:24][web:30]
  const ARC_FRACTION = 0.62;
  const arcLen = circumferenceOuter * ARC_FRACTION;
  const gapLen = circumferenceOuter - arcLen;

  return (
    <section ref={sectionRef} className="relative pb-14 -mt-10">
      <div className="mx-auto w-full px-6">
        <div className="relative grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
          {/* Left arc + dots */}
          <div className="relative hidden md:block">
            {/* SVG circles (outer animated, inner static) */}
            <svg
              className="absolute"
              style={{
                left: outer.left,
                top: outer.top,
                width: outer.size,
                height: outer.size,
              }}
              viewBox={`0 0 ${outer.size} ${outer.size}`}
            >
              {/* Outer arc */}
              <circle
                cx={cxOuter}
                cy={cyOuter}
                r={rOuterStrokeCenter}
                fill="none"
                stroke="rgba(150, 160, 110, 0.15)"
                strokeWidth={outer.border}
                strokeLinecap="round"
                strokeDasharray={`${arcLen} ${gapLen}`} // dash + gap pattern [web:30]
                strokeDashoffset={drawArc ? 0 : arcLen} // animate reveal via offset [web:24]
                style={{
                  transition: "stroke-dashoffset 1100ms ease-out",
                  transformOrigin: "50% 50%",
                  transform: "rotate(200deg)",
                }}
              />

              {/* Inner circle */}
              <circle
                cx={inner.size / 2}
                cy={inner.size / 2}
                r={inner.size / 2 - inner.border / 2}
                fill="none"
                stroke="rgba(16, 90, 60, 0.10)"
                strokeWidth={inner.border}
                style={{
                  transformOrigin: "0 0",
                  transform: `translate(${inner.left - outer.left}px, ${inner.top - outer.top}px)`,
                }}
              />
            </svg>

            {/* Dots positioned on the arc */}
            <div className="relative" style={{ height: railHeight }}>
              {steps.map((s, i) => {
                const y = Math.round(positions[i] * railHeight);
                const xOnArc = arcXForY(y);
                const left = Math.round(xOnArc - dotSize / 2);

                return (
                  <div
                    key={s.id || i}
                    className="absolute"
                    style={{ top: y, left, transform: "translateY(-50%)" }}
                  >
                    <div className="relative">
                      <div className="absolute left-[88px] top-1/2 h-px w-[78px] -translate-y-1/2 bg-mutedOlive/20" />
                      <div
                        className="flex items-center justify-center rounded-full bg-deepJungleGreen text-white shadow-soft border-4 border-cardBg"
                        style={{ height: dotSize, width: dotSize }}
                      >
                        <span className="font-body text-[20px] font-bold">
                          {String(s.number).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Curved content: aligned to the same arc X as the dot numbers */}
          <div
            className="relative hidden md:block"
            style={{ height: railHeight }}
          >
            {steps.map((s, i) => {
              const topPx = Math.round(positions[i] * railHeight);
              const xOnArc = arcXForY(topPx);
              const CONTENT_NUDGE_LEFT = 100; // try 60..220
              const leftPx = Math.round(xOnArc - CONTENT_NUDGE_LEFT);

              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="absolute scroll-mt-24"
                  style={{
                    top: topPx,
                    left: leftPx,
                    transform: "translateY(-50%)",
                    width: `calc(100% - ${leftPx}px)`,
                  }}
                >
                  {s.titleNode ? (
                    <div className="mb-3">{s.titleNode}</div>
                  ) : null}
                  {s.element}
                </div>
              );
            })}
          </div>

          {/* Mobile fallback unchanged */}
          <div className="md:hidden mt-20">
            <div className="relative pl-10">
              <div className="absolute left-4 top-0 h-full w-px bg-mutedOlive/20" />
              <div className="grid gap-6">
                {steps.map((s) => (
                  <div key={s.id} className="relative" id={s.id}>
                    <div className="absolute -left-1 top-0.5 -left-10 flex h-9 w-9 items-center justify-center rounded-full bg-deepJungleGreen text-white shadow-soft">
                      <span className="font-body text-[12px] font-bold">
                        {String(s.number).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      {s.titleNode ? (
                        <div className="mb-3">{s.titleNode}</div>
                      ) : null}
                      {s.element}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
