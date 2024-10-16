"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FC } from "react";

type BannerImageProps = {
  wrapperRef: React.RefObject<HTMLDivElement>;
  imagePath: string;
};

const BannerImage: FC<BannerImageProps> = ({ wrapperRef, imagePath }) => {
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
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
  );
};

export default BannerImage;
