"use client";

import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import BannerImage from "../shared/banner-image";
import PrimaryButton from "../ui/primary-button";

const PricingBanner = () => {
  const t = useTranslations("Pricing.banner");
  const commonT = useTranslations("Common");
  const ref = useRef(null);

  return (
    <div className="container pb-16 lg:pb-[100px]" ref={ref}>
      <Banner title={t("title")} description={t("description")} button={<PrimaryButton>{commonT("learn_more")}</PrimaryButton>} />
      <BannerImage ref={ref} imagePath="/images/pricing/banner.png" />
    </div>
  );
};

export default PricingBanner;
