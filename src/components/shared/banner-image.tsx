import React, { forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BannerImage = forwardRef<HTMLDivElement, { imagePath: string }>(
  ({ imagePath }, wrapperRef) => {
    const { scrollYProgress } = useScroll({
      target: wrapperRef as any,
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
  }
);

BannerImage.displayName = "BannerImage";

export default BannerImage;
