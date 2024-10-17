"use client";
import Banner from "@/components/shared/banner";
import PrimaryButton from "@/components/ui/primary-button";
import { useTranslations } from "next-intl";
import { BannerPages } from "@/interface/common.interface";

const HomeBanner = () => {
  const t = useTranslations("Home.banner");
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
        title={t("title")}
        description={t("description")}
        page={BannerPages.HOME}
        button={<PrimaryButton onClick={handleContact}>{commonT("contact")}</PrimaryButton>}
      />
    </div>
  );
};

export default HomeBanner;
