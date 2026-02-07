import { useEffect, useRef } from "react";

export default function ScrollTrigger({ onEnter }) {
  const ref = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          onEnter();
        }
      },
      { threshold: 0.6 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [onEnter]);

  return <div ref={ref} className="h-[1px]" />;
}
