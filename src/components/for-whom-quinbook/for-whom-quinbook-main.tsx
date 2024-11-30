"use client";

/* eslint-disable @next/next/no-img-element */
import { forWhomItems } from "@/constants/for-whom-items";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PrimaryBadge from "../ui/primary-badge";

const ForWhomQuinbookMain = () => {
  const [visibleItemIndex, setVisibleItemIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            setVisibleItemIndex(index);
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
    <div id="for-whom-quinbook" className="container py-10 lg:py-20 flex gap-5">
      <div className="flex flex-col max-lg:gap-12 w-full lg:w-[50%]">
        {forWhomItems.map((item, index) => (
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
                <h3 className="font-poppins font-extrabold md:leading-[90px] md:text-7xl text-4xl pt-5">{item?.title}</h3>
                <p className="text-xl leading-7 text-grey-darker mt-4">{item?.description_1}</p>
                {item?.description_2 && <p className="text-xl leading-7 text-grey-darker mt-4">{item?.description_2}</p>}
              </div>
              <div className="lg:hidden p-3 rounded-lg flex flex-col justify-center items-center gap-10 text-xl text-primary font-medium">
                <img
                  src={item?.image}
                  alt="for whom quinbook"
                  className="rounded-e-2xl h-full object-cover"
                  style={{ aspectRatio: "16 / 9" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block sticky top-[7vh] right-0 h-[90vh] w-[50%] md:p-16 p-5 rounded-e-2xl">
        <AnimatePresence>
          {visibleItemIndex !== null && forWhomItems && (
            <motion.div
              key={visibleItemIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <img
                src={forWhomItems[visibleItemIndex]?.image}
                alt="for whom quinbook"
                className="rounded-e-2xl h-full object-cover"
                style={{ aspectRatio: "16 / 9" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ForWhomQuinbookMain;
