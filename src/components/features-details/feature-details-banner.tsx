"use client";
import Banner from "@/components/shared/banner";
import PrimaryButton from "@/components/ui/primary-button";
import { IFeatureItem } from "@/interface/feature.interface";
import { useTranslations } from "next-intl";

const FeatureDetailsBanner = ({ featureItem }: { featureItem: IFeatureItem | undefined }) => {
  const commonT = useTranslations("Common");
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
    <div className="container pb-16 lg:pb-[100px]">
      <Banner
        title={featureItem?.title as string}
        description={featureItem?.subTitle as string}
        image={featureItem?.bannerImage}
        button={<PrimaryButton onClick={handleContact}>{commonT("learn_more")}</PrimaryButton>}
      />
    </div>
  );
};

export default FeatureDetailsBanner;
