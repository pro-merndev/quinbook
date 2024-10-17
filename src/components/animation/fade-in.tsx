import { FC, ReactNode, useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

const getInitialFadeIn = (direction: "up" | "down" | "left" | "right") => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 100 };
    case "down":
      return { opacity: 0, y: -100 };
    case "left":
      return { opacity: 0, x: 100 };
    case "right":
      return { opacity: 0, x: -100 };
    default:
      return { opacity: 0 };
  }
};

const FadeIn: FC<FadeInProps> = ({ children, className, delay = 0, direction = "up", motionProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={getInitialFadeIn(direction)}
      animate={{ opacity: isInView ? 1 : 0, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn", delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
