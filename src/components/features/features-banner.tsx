"use client";
import { useTranslations } from "next-intl";

import Banner from "../shared/banner";
import PrimaryButton from "../ui/primary-button";
import { BannerPages } from "@/interface/common.interface";

const FeaturesBanner = () => {
  const t = useTranslations("Features.banner");
  const commonT = useTranslations("Common");
  const handleContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      const offset = 150; // Adjust the offset value as needed
      const elementPosition = contact.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner
        title={t("title")}
        description={t("description")}
        page={BannerPages.FEATURES}
        button={
          <PrimaryButton onClick={handleContact}>
            {commonT("contact")}
          </PrimaryButton>
        }
      />
    </div>
  );
};

export default FeaturesBanner;
