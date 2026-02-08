import React from "react";

export function ArcStep({ children }) {
  return children;
}

function clamp01(x) {
  return Math.min(1, Math.max(0, x));
}

export default function ArcSteps({
  children,
  dotSize = 80,

  // slots relative to MID; these are distances in rail fraction
  slotDelta = 0.5,

  // dynamic sizing knobs
  arcScale = 1.05,
  outerBorder = 58,
  innerBorder = 20,

  // full rotation
  rotationTurns = 1,
  rotationStartDeg = 200,

  // horizontal placement of the arc (negative = off to the left)
  arcLeftOffsetPx = -0.7,
  arcTopOffsetPx = -0.1, // (unused in math currently)
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

  const sectionRef = React.useRef(null);
  const stageRef = React.useRef(null);

  const [progress, setProgress] = React.useState(0);

  // Tree animation state (tied to "stage is full screen")
  const [treeIn, setTreeIn] = React.useState(false);

  // dynamic geometry state
  const [geom, setGeom] = React.useState(() => ({
    railHeight: 700,
    outer: { left: -570, top: -80, size: 780, border: outerBorder },
    inner: { left: -530, top: -40, size: 700, border: innerBorder },
    topSlot: 0.22,
    midSlot: 0.5,
    botSlot: 0.82,
  }));

  React.useEffect(() => {
    const el = sectionRef.current;
    const stage = stageRef.current;
    if (!el || !stage) return;

    let raf = 0;

    const measureAndUpdate = () => {
      // 1) Measure stage (this is your 100vh pinned viewport)
      const stageRect = stage.getBoundingClientRect();
      const stageH = Math.max(1, stageRect.height);

      // 2) Rail height = stage height
      const railHeight = Math.round(stageH);

      // 3) Compute dynamic arc sizes from stage height
      const size = Math.round(stageH * arcScale);
      const outer = {
        size,
        border: outerBorder,
        left: Math.round(size * arcLeftOffsetPx),
        top: Math.round((railHeight - size) / 2),
      };
      const inner = {
        size: Math.round(size * 0.9),
        border: innerBorder,
        left: Math.round(outer.left + size * 0.05),
        top: Math.round(outer.top + size * 0.05),
      };

      // 4) Circle center in rail coords
      const cyRail = outer.top + outer.size / 2;

      const midSlot = clamp01(cyRail / railHeight);
      const topSlot = clamp01(midSlot - slotDelta);
      const botSlot = clamp01(midSlot + slotDelta);

      setGeom({ railHeight, outer, inner, topSlot, midSlot, botSlot });

      // 5) Progress
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const totalScrollable = rect.height - vh;
      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        Math.max(0, totalScrollable),
      );
      const p = totalScrollable > 0 ? scrolled / totalScrollable : 0;
      setProgress(clamp01(p));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measureAndUpdate);
    };

    measureAndUpdate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const t = setTimeout(measureAndUpdate, 0);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [
    arcScale,
    outerBorder,
    innerBorder,
    arcLeftOffsetPx,
    arcTopOffsetPx,
    slotDelta,
  ]);

  // Trigger tree ONLY when sticky stage is (almost) fully visible.
  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const FULL_SCREEN_RATIO = 0.98;

    const obs = new IntersectionObserver(
      ([entry]) => {
        const inNow =
          entry.isIntersecting && entry.intersectionRatio >= FULL_SCREEN_RATIO;
        setTreeIn(inNow);
      },
      { threshold: [0, FULL_SCREEN_RATIO, 1] },
    );

    obs.observe(stage);
    return () => obs.disconnect();
  }, []);

  const { railHeight, outer, inner, topSlot, midSlot, botSlot } = geom;

  // x on right side of the circle for a given y in rail coords
  const arcXForY = (y) => {
    const r = outer.size / 2;
    const cx = outer.left + r;
    const cy = outer.top + r;
    const dy = y - cy;
    const inside = r * r - dy * dy;
    return cx + Math.sqrt(Math.max(0, inside));
  };

  // phase
  const tStep = count <= 1 ? 0 : progress * (count - 1);
  const base = Math.floor(tStep);
  const frac = tStep - base;
  const i = Math.min(Math.max(base, 0), Math.max(0, count - 1));
  const next = Math.min(i + 1, count - 1);

  // Dot motion
  const curYNorm = midSlot + (topSlot - midSlot) * frac;
  const curOpacity = 1 - frac;

  const nextYNorm = botSlot + (midSlot - botSlot) * frac;
  const nextOpacity = frac === 0 ? 0 : frac;

  // rotation
  const rotateDeg = rotationStartDeg - progress * (360 * rotationTurns);

  // circle geometry
  const rOuterStrokeCenter = outer.size / 2 - outer.border / 2;
  const cxOuter = outer.size / 2;
  const cyOuter = outer.size / 2;

  // scroll length (pinned pages) - DISABLED ON MOBILE (natural height)
  const isClient = typeof window !== "undefined";
  const wrapperHeightVh =
    !isClient || window.innerWidth < 768 ? undefined : Math.max(1, count) * 100;

  const renderDot = (step, yNorm, opacity) => {
    const y = Math.round(yNorm * railHeight);
    const xOnArc = arcXForY(y);
    const left = Math.round(xOnArc - dotSize / 2);

    return (
      <div
        key={step.id}
        className="absolute"
        style={{
          top: y,
          left,
          transform: "translateY(-50%)",
          opacity,
          transition: "opacity 60ms linear",
          pointerEvents: "none",
        }}
      >
        <div className="relative">
          <div className="absolute left-[88px] top-1/2 h-px w-[78px] -translate-y-1/2 bg-mutedOlive/20" />
          <div
            className="flex items-center justify-center rounded-full bg-deepJungleGreen text-white shadow-soft border-4 border-cardBg"
            style={{ height: dotSize, width: dotSize }}
          >
            <span className="font-body text-[20px] font-bold">
              {String(step.number).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    );
  };
  const curStep = steps[i];
  const nextStep = steps[next];
  return (
    <section
      ref={sectionRef}
      className="relative font-body mt-2"
      style={{ height: wrapperHeightVh ? `${wrapperHeightVh}vh` : "auto" }}
    >
      <div
        ref={stageRef}
        className="md:sticky md:top-0 md:h-[100vh] md:pb-14 overflow-hidden h-auto"
      >
        {/* WEB helper strip (on TOP) */}
        <div className="hidden md:block absolute top-20 left-[58%] -translate-x-1/2 w-[92%] max-w-5xl">
          <div className="rounded-2xl bg-beige backdrop-blur-md shadow-soft px-5 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="text-lg font-bold uppercase text-deepJungleGreen">
                  How Staffari Helps
                </p>
                <p className="text-sm text-muted-foreground">
                  From posting to placement — all in one flow
                </p>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-1 text-md text-deepJungleGreen font-semibold">
                <span>• Post jobs / talent profile</span>
                <span>• Smart matching</span>
                <span>• Chat & shortlist</span>
                <span>• Close hires faster</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tree overlay */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden md:block"
          style={{
            width: 640,
            zIndex: 10,
            backgroundImage: "url(/images/arcsection/image.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "cover",
            opacity: treeIn ? 1 : 0,
            transform: treeIn
              ? "translateX(-250px) scale(1)"
              : "translateX(-160%) scale(0.92)",
            transition: treeIn
              ? "opacity 900ms cubic-bezier(0.23, 1, 0.32, 1) 120ms, transform 1100ms cubic-bezier(0.22, 1, 0.36, 1) 80ms"
              : "opacity 900ms ease-out, transform 900ms ease-out",
          }}
        />

        <div
          className="mx-auto w-full px-6 h-full relative"
          style={{ zIndex: 1 }}
        >
          <div className="relative grid gap-10 md:grid-cols-[220px_1fr] md:gap-12 h-full md:items-center">
            {/* Left: arc + dots */}
            <div className="relative hidden md:block">
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
                <circle
                  cx={cxOuter}
                  cy={cyOuter}
                  r={rOuterStrokeCenter}
                  fill="none"
                  stroke="rgba(148, 196, 51, 0.63)"
                  strokeWidth={outer.border}
                  strokeLinecap="round"
                  style={{
                    transformBox: "fill-box",
                    transformOrigin: "center",
                    transform: `rotate(${rotateDeg}deg)`,
                    transition: "transform 60ms linear",
                  }}
                />
                <circle
                  cx={inner.size / 2}
                  cy={inner.size / 2}
                  r={inner.size / 2 - inner.border / 2}
                  fill="none"
                  stroke="rgba(39, 100, 33, 0.42)"
                  strokeWidth={inner.border}
                  style={{
                    transformOrigin: "0 0",
                    transform: `translate(${inner.left - outer.left}px, ${
                      inner.top - outer.top
                    }px)`,
                  }}
                />
              </svg>

              <div className="relative" style={{ height: railHeight }}>
                {curStep ? renderDot(curStep, curYNorm, curOpacity) : null}
                {nextStep && next !== i
                  ? renderDot(nextStep, nextYNorm, nextOpacity)
                  : null}
              </div>
            </div>

            {/* Right: cards */}
            <div className="relative hidden md:block h-full">
              <div className="h-full flex items-center">
                <div className="w-full relative">
                  {curStep ? (
                    <div
                      style={{
                        opacity: 1 - frac,
                        position: "absolute",
                        inset: 0,
                      }}
                    >
                      {curStep.titleNode ? (
                        <div className="mb-3">{curStep.titleNode}</div>
                      ) : null}
                      {curStep.element}
                    </div>
                  ) : null}

                  {nextStep && next !== i ? (
                    <div
                      style={{ opacity: frac, position: "absolute", inset: 0 }}
                    >
                      {nextStep.titleNode ? (
                        <div className="mb-3">{nextStep.titleNode}</div>
                      ) : null}
                      {nextStep.element}
                    </div>
                  ) : null}

                  <div className="invisible">
                    {curStep ? (
                      <>
                        {curStep.titleNode ? (
                          <div className="mb-3">{curStep.titleNode}</div>
                        ) : null}
                        {curStep.element}
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: straight line */}
            <div className="md:hidden pt-20 pb-10 max-w-2xl mx-auto">
              <div className="relative pl-10">
                <div className="absolute left-4 top-0 h-full w-px bg-mutedOlive/20" />
                <div className="space-y-8 py-8">
                  {steps.map((s) => (
                    <div key={s.id} className="relative" id={s.id}>
                      <div className="absolute -left-10 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-deepJungleGreen text-white shadow-soft border-2 border-cardBg">
                        <span className="font-body text-xs font-bold">
                          {String(s.number).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="pl-2">
                        {s.titleNode ? (
                          <div className="mb-4 font-bold text-lg">
                            {s.titleNode}
                          </div>
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
      </div>

      {/* ✅ MOBILE helper strip as a NEW SECTION BELOW */}
      <div className="md:hidden px-6 pb-16">
        <div className="mx-auto w-full max-w-2xl lg:max-w-4xl">
          <div className="rounded-2xl bg-beige backdrop-blur-md shadow-soft px-4 sm:px-5 lg:px-7 py-5 sm:py-6">
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-lg font-bold uppercase tracking-wide text-deepJungleGreen">
                  How Staffari Helps
                </p>
                <p className="text-sm text-muted-foreground">
                  From posting to placement — all in one flow
                </p>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-1 text-md text-deepJungleGreen font-semibold">
                <span>• Post jobs / talent profile</span>
                <span>• Smart matching</span>
                <span>• Chat & shortlist</span>
                <span>• Close hires faster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
