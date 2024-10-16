"use client";

import Banner from "@/components/shared/banner";
import BannerImage from "@/components/shared/banner-image";
import PrimaryButton from "@/components/ui/primary-button";
import { featureItems } from "@/constants/features";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const FeatureDetailsBanner = ({slug}:{slug:string}) => {
  const t = useTranslations("Features.items");
  const feature = featureItems(t).find((s) => s.slug === slug);
  const commonT = useTranslations("Common");
  const ref = useRef(null);
  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner title={feature?.title} description={feature?.description} button={<PrimaryButton contactButton>{commonT("learn_more")}</PrimaryButton>} />
      <BannerImage wrapperRef={ref} imagePath={feature?.bannerImage as string} />
    </div>
  );
};

export default FeatureDetailsBanner;
