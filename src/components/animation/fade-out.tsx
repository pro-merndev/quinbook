import { FC, ReactNode, useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";

type FadeOutProps = {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

const getInitialFadeOut = (direction: "up" | "down" | "left" | "right") => {
  switch (direction) {
    case "up":
      return { opacity: 1, y: 0 };
    case "down":
      return { opacity: 1, y: 0 };
    case "left":
      return { opacity: 1, x: 0 };
    case "right":
      return { opacity: 1, x: 0 };
    default:
      return { opacity: 1 };
  }
};

const FadeOut: FC<FadeOutProps> = ({ children, className, delay = 0, direction = "up", motionProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={getInitialFadeOut(direction)}
      animate={{ opacity: isInView ? 0 : 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn", delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeOut;
