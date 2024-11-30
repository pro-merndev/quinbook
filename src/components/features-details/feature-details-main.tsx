"use client";
import { IFeatureItem } from "@/interface/feature.interface";
import PrimaryBadge from "../ui/primary-badge";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import FeatureDetailsFunctionContent from "./feature-details-function-content";

const FeatureDetailsMain = ({ featureItem }: { featureItem: IFeatureItem | undefined }) => {
  const [visibleFeatureIndex, setVisibleFeatureIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            setVisibleFeatureIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="container py-10 lg:py-20 relative flex gap-5">
      <div className="flex flex-col max-lg:gap-12 w-full lg:w-[50%]">
        {featureItem?.functions?.length &&
          featureItem?.functions.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="lg:min-h-screen"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="flex flex-col justify-center items-start lg:items-center gap-4 h-full">
                <div>
                  <div>
                    <PrimaryBadge>{item.badge}</PrimaryBadge>
                  </div>
                  <h3 className="font-poppins font-extrabold md:leading-[90px] md:text-7xl text-4xl pt-5">{item.title}</h3>
                </div>
                <div className="lg:hidden bg-grey-main p-3 rounded-lg flex flex-col justify-center items-center gap-10 text-xl text-primary font-medium">
                  <p className="leading-8">{item?.description_1}</p>
                  {item?.description_2 && <p className="leading-8">{item?.description_2}</p>}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="hidden lg:block sticky top-[5vh] right-0 h-[90vh] bg-grey-main w-[50%] md:p-16 p-5 rounded-e-2xl">
        <AnimatePresence>
          {visibleFeatureIndex !== null && featureItem?.functions && (
            <FeatureDetailsFunctionContent key={visibleFeatureIndex} item={featureItem.functions[visibleFeatureIndex]} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeatureDetailsMain;
