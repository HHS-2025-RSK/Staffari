import React from "react";

export function ArcStep({ children }) {
  return children;
}

export default function ArcSteps({
  children,
  railHeight = 980,
  dotSize = 80,

  // content curve offsets (cards)
  xOffsets = [0, 90, 40],

  // dot vertical placement (0..1)
  yPositions = [0.22, 0.52, 0.82],

  // MUST match your arc circles
  // Outer circle:
  outer = { left: -1370, top: -80, size: 1520, border: 58 },
  // Inner circle (optional, only for drawing)
  inner = { left: -1330, top: -40, size: 1440, border: 20 },
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

  const offsets = (() => {
    if (count === 0) return [];
    if (count === 1) return [0];
    if (count === 2) return [0, 70];
    if (count === 3) return xOffsets;
    return Array.from({ length: count }, (_, i) =>
      Math.round(50 + 40 * Math.sin(i * 0.9)),
    );
  })();

  // Convert a dot y (in rail space) -> x (in same container) that lies on the OUTER circle
  const arcXForY = (y) => {
    const r = outer.size / 2;
    const cx = outer.left + r;
    const cy = outer.top + r;

    const dy = y - cy;
    const inside = r * r - dy * dy;

    // if outside circle vertical range, clamp to edge
    const safe = inside <= 0 ? 0 : inside;

    // Choose the right-side intersection of the circle
    return cx + Math.sqrt(safe);
  };

  return (
    <section className="relative pb-14 -mt-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
          {/* Left arc + dots */}
          <div className="relative hidden md:block">
            {/* Arc circles (your values) */}
            <div
              className="absolute rounded-full border-mutedOlive/15"
              style={{
                left: outer.left,
                top: outer.top,
                height: outer.size,
                width: outer.size,
                borderWidth: outer.border,
                borderStyle: "solid",
              }}
            />
            <div
              className="absolute rounded-full border-emeraldGreen/10"
              style={{
                left: inner.left,
                top: inner.top,
                height: inner.size,
                width: inner.size,
                borderWidth: inner.border,
                borderStyle: "solid",
              }}
            />

            {/* Dots positioned ON the arc */}
            <div className="relative" style={{ height: railHeight }}>
              {steps.map((s, i) => {
                const y = Math.round(positions[i] * railHeight);
                const xOnArc = arcXForY(y);

                // Place dot center on the arc point:
                const left = Math.round(xOnArc - dotSize / 2);

                return (
                  <div
                    key={s.id || i}
                    className="absolute"
                    style={{ top: y, left, transform: "translateY(-50%)" }}
                  >
                    <div className="relative">
                      {/* connector line to content area */}
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

          {/* Curved content */}
          <div
            className="relative hidden md:block"
            style={{ height: railHeight }}
          >
            {steps.map((s, i) => {
              const topPx = Math.round(positions[i] * railHeight);
              const x = offsets[i] ?? 0;

              return (
                <div
                  key={s.id}
                  id={s.id}
                  className="absolute scroll-mt-24"
                  style={{
                    top: topPx,
                    left: x,
                    transform: "translateY(-50%)",
                    width: `calc(100%)`,
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

          {/* Mobile fallback */}
          <div className="md:hidden">
            <div className="relative pl-10">
              <div className="absolute left-4 top-0 h-full w-px bg-mutedOlive/20" />
              <div className="grid gap-6">
                {steps.map((s) => (
                  <div key={s.id} className="relative" id={s.id}>
                    <div className="absolute -left-1 top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-deepJungleGreen text-white shadow-soft">
                      <span className="font-body text-[12px] font-bold">
                        {String(s.number).padStart(2, "0")}
                      </span>
                    </div>
                    {s.titleNode ? (
                      <div className="mb-3">{s.titleNode}</div>
                    ) : null}
                    {s.element}
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
