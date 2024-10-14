import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const VideoBanner = ({ src, className }: { src: string; className?: ClassValue }) => {
  return (
    <div className="container py-12 lg:py-20">
      <video id="videoMoving" playsInline className={cn("rounded-3xl w-full", className)} src={src} loop autoPlay muted />
    </div>
  );
};

export default VideoBanner;
