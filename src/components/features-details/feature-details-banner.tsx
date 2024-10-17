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
  const handleContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      const offset = 100; // Adjust the offset value as needed
      const elementPosition = contact.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container pb-16 lg:pb-[100px]" ref={ref}>
      <Banner title={feature?.title} description={feature?.description} button={<PrimaryButton onClick={handleContact}>{commonT("learn_more")}</PrimaryButton>} />
      <BannerImage ref={ref} imagePath={feature?.bannerImage as string} />
    </div>
  );
};

export default FeatureDetailsBanner;
