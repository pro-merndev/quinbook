"use client";

import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import BannerImage from "@/components/shared/banner-image";
import PrimaryButton from "@/components/ui/primary-button";

const HomeBanner = () => {
  const t = useTranslations("Home.banner");
  const commonT = useTranslations("Common");
  const ref = useRef(null);

  return (
    <div className="container pb-16 lg:pb-[100px]" ref={ref}>
      <Banner
        title={t("title")}
        description={t("description")}
        button={<PrimaryButton contactButton>{commonT("contact")}</PrimaryButton>}
      />
      <BannerImage wrapperRef={ref} imagePath="/images/home/banner.png" />
    </div>
  );
};

export default HomeBanner;
