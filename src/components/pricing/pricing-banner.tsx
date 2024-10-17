"use client";
import Banner from "@/components/shared/banner";
import { BannerPages } from "@/interface/common.interface";
import { useTranslations } from "next-intl";
import PrimaryButton from "../ui/primary-button";

const PricingBanner = () => {
  const t = useTranslations("Pricing.banner");
  const commonT = useTranslations("Common");

  const handlePricing = () => {
    const contact = document.getElementById("pricing");
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
        page={BannerPages.PRICING}
        button={<PrimaryButton onClick={handlePricing}>{commonT("learn_more")}</PrimaryButton>}
      />
    </div>
  );
};

export default PricingBanner;
