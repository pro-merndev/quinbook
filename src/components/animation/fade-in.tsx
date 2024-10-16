import { FC, ReactNode, useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  motionProps?: MotionProps;
};

const FadeIn: FC<FadeInProps> = ({ children, className, motionProps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
