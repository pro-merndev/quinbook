"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import FadeIn from "../animation/fade-in";
import PrimaryBadge from "../ui/primary-badge";
import { useRef } from "react";

const HomeApplicationExample = () => {
  const t = useTranslations("Home.example");
  const items = [t("items._1"), t("items._2"), t("items._3"), t("items._4")];
  const ref = useRef(null);

  return (
    <div className="relative min-h-[720px] max-lg:mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row max-lg:gap-10">
          <div className="w-full lg:min-h-[720px] lg:w-1/2 flex items-center">
            {/* Left side content, constrained by container */}
            <div className="flex justify-center items-center gap-10">
              <FadeIn>
                <h5 className="text-center lg:text-left">
                  <PrimaryBadge>{t("badge")}</PrimaryBadge>
                </h5>
                <h3 className="text-center lg:text-left font-poppins font-extrabold md:leading-[100px] md:text-7xl text-4xl pt-5">
                  {t("title")}
                </h3>
              </FadeIn>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0" ref={ref}>
            {/* Right side content, extends to viewport edge */}
            <div className="h-full">
              <div className="bg-primary md:py-40 py-10 md:px-12 px-5 max-lg:rounded-2xl">
                {items.map((item, i) => (
                  <FadeIn key={i} sectionRef={ref} delay={i * 0.6}>
                    <div className="mb-9">
                      <div className="flex gap-3 items-center ">
                        <div className="bg-white rounded-xl p-5 w-full max-w-[600px] h-16">
                          <p className="xl:text-2xl sm:text-xl text-sm">{item}</p>
                        </div>
                        <div>
                          <span className="flex justify-center items-center p-3 bg-white rounded-full">
                            <Image src="/logo/logo_icon.svg" alt="example-1" width={40} height={40} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApplicationExample;
