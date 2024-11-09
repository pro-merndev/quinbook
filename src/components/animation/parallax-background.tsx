"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type ParallaxBackgroundProps = {
  children: ReactNode;
};

const ParallaxBackground = ({ children }: ParallaxBackgroundProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative">
      {isInView && (
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: isInView ? 1 : 1.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ y }}
          className="absolute inset-0 bg-[url('/images/home/Group_12.png')] bg-no-repeat bg-right bg-contain"
        ></motion.div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
};

export default ParallaxBackground;
