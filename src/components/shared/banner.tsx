"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC, useRef } from "react";
import { BannerPages } from "@/interface/common.interface";
import { bannerImages } from "@/constants/banner";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import FadeIn from "../animation/fade-in";

type IProps = {
  title: string;
  description: string;
  button?: React.ReactNode;
  className?: ClassValue;
  page?: BannerPages;
  image?: string;
};

const Banner: FC<IProps> = ({ title, description, button, className, page, image }) => {
  const imagePath = image ?? bannerImages.find((item) => item.page === page)?.image ?? "";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref as any,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      {/* Text */}
      <div
        className={cn(className, "py-12 lg:py-20 min-h-[320px] sm:min-h-[328px] md:min-h-[344px] lg:min-h-[590px] grid place-items-center")}
      >
        <div>
          <div className="flex flex-col items-center justify-center text-center">
            <FadeIn>
              <h1
                className={cn(
                  "text-3xl sm:text-4xl md:text-5xl lg:text-[72px] lg:leading-[90px] mb-4 font-poppins font-black uppercase",
                  title?.length > 30 ? "max-w-[950px]" : "max-w-3xl"
                )}
              >
                {title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className={cn("text-2xl", description?.length > 80 ? "max-w-3xl" : description?.length > 50 ? "max-w-2xl" : "max-w-xl")}>
                {description}
              </p>
            </FadeIn>
            {button && (
              <FadeIn delay={0.6}>
                <div className="mt-10">{button}</div>
              </FadeIn>
            )}
          </div>
        </div>
      </div>

      {/* Banner Image */}
      {imagePath && (
        <div className="pt-12 lg:pt-16 w-full h-auto aspect-[345/250] md:aspect-[1080/636] relative rounded-[24px] overflow-hidden">
          <motion.div
            initial={{ scale: 1.5 }}
            animate={{ scale: isInView ? 1 : 1.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              y,
              backgroundImage: `url(${imagePath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "24px",
            }}
            className="absolute w-full h-full -top-[50px] md:-top-[100px]"
          ></motion.div>
        </div>
      )}
    </section>
  );
};

export default Banner;
