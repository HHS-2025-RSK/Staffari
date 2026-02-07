import { useEffect, useRef } from "react";

export default function LeafTransition({ videoSrc, onComplete }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play();

    video.onended = () => {
      document.body.style.overflow = "";
      onComplete();
    };

    return () => {
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        ref={videoRef}
        src={videoSrc}
        className="h-full w-full object-cover"
        muted
        playsInline
        autoPlay
      />
    </div>
  );
}
