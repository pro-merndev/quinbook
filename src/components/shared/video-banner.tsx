"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Hls from "hls.js";
import { useEffect, useRef } from "react";

const VideoBanner = ({ src, className }: { src: string; className?: ClassValue }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.error("Error attempting to play", e));
      });
    }
    // For browsers that natively support HLS (like Safari)
    else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((e) => console.error("Error attempting to play", e));
      });
    }

    return () => {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className="container py-12 lg:py-20">
      <video ref={videoRef} playsInline className={cn("rounded-3xl w-full", className)} loop muted />
    </div>
  );
};

export default VideoBanner;
