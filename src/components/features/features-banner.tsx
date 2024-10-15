"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import Banner from "../shared/banner";
import BannerImage from "../shared/banner-image";
import PrimaryButton from "../ui/primary-button";

const FeaturesBanner = () => {
  const t = useTranslations("Features.banner");
  const commonT = useTranslations("Common");
  const ref = useRef(null);

  return (
    <div className="container pb-16 lg:pb-[100px]" ref={ref}>
      <Banner
        title={t("title")}
        description={t("description")}
        button={
          <PrimaryButton contactButton bigOffset>
            {commonT("contact")}
          </PrimaryButton>
        }
      />
      <BannerImage wrapperRef={ref} imagePath="/images/features/banner.png" />
    </div>
  );
};

export default FeaturesBanner;
