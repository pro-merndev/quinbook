"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC, useRef } from "react";
import { BannerPages } from "@/interface/common.interface";
import { bannerImages } from "@/constants/banner";
import { motion, useScroll, useTransform } from "framer-motion";

type IProps = {
  title: string;
  description: string;
  button?: React.ReactNode;
  className?: ClassValue;
  page?: BannerPages;
};

const Banner: FC<IProps> = ({ title, description, button, className, page }) => {
  const imagePath = bannerImages.find((item) => item.page === page)?.image;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref as any,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section ref={ref}>
      {/* Text */}
      <div
        className={cn(className, "py-12 lg:py-20 min-h-[320px] sm:min-h-[328px] md:min-h-[344px] lg:min-h-[590px] grid place-items-center")}
      >
        <div>
          <div className="flex flex-col items-center justify-center text-center">
            <h1
              className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-[72px] lg:leading-[90px] mb-4 font-poppins font-black uppercase",
                title?.length > 30 ? "max-w-[950px]" : "max-w-3xl"
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "text-lg lg:text-2xl",
                description?.length > 80 ? "max-w-3xl" : description?.length > 50 ? "max-w-2xl" : "max-w-xl"
              )}
            >
              {description}
            </p>
            {button && <div className="mt-10">{button}</div>}
          </div>
        </div>
      </div>

      {/* Banner Image */}
      {page && (
        <div className="pt-12 lg:pt-16 w-full h-auto aspect-[1080/636] relative rounded-[24px] overflow-hidden">
          <motion.div
            style={{
              y,
              backgroundImage: `url(${imagePath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "24px",
            }}
            className="absolute w-full h-full -top-[100px]"
          ></motion.div>
        </div>
      )}
    </section>
  );
};

export default Banner;
