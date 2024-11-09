import { useWindowWidth } from "@react-hook/window-size";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PrimaryBadge from "../ui/primary-badge";

interface FeatureDetailItemProps {
  item: {
    badge: string;
    title: string;
    description_1: string;
    description_2?: string;
  };
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const FeatureDetailsMainItem: React.FC<FeatureDetailItemProps> = ({ item }) => {
  const ref = useRef(null);
  const windowWidth = useWindowWidth();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  // Define breakpoint for mobile devices
  const isMobile = windowWidth < 768; // md breakpoint in Tailwind

  return (
    <div className="relative w-full md:min-h-screen">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6 h-full"
        style={{
          scrollSnapAlign: "center",
          perspective: 500,
        }}
      >
        {/* Left Side */}
        {isMobile ? (
          // Regular div for mobile - no animation
          <div className="flex items-center min-h-[750px]">
            <div className="w-full">
              <PrimaryBadge>{item?.badge}</PrimaryBadge>
              <h3 className="font-poppins font-extrabold text-4xl md:text-7xl pt-5 md:leading-[90px]">{item?.title}</h3>
            </div>
          </div>
        ) : (
          // Motion div for desktop - with animation
          <motion.div style={{ y }} className="flex items-center min-h-[750px]">
            <div className="w-full pr-[50px]">
              <PrimaryBadge>{item?.badge}</PrimaryBadge>
              <h3 className="font-poppins font-extrabold text-4xl md:text-7xl pt-5 md:leading-[90px]">{item?.title}</h3>
            </div>
          </motion.div>
        )}

        {/* Right Side */}
        <div ref={ref} className="relative h-full py-12 md:py-0">
          <div className="bg-grey-main rounded-2xl p-6 md:p-16 h-full md:min-h-[750px]">
            <div className="flex flex-col justify-center h-full gap-10 text-lg md:text-xl text-primary font-medium">
              <p className="leading-8">{item?.description_1}</p>
              {item?.description_2 && <p className="leading-8">{item?.description_2}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetailsMainItem;
