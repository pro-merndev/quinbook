"use client";
import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";
import PrimaryButton from "../ui/primary-button";
import { BannerPages } from "@/interface/common.interface";

const AboutBanner = () => {
  const t = useTranslations("About.banner");
  const commonT = useTranslations("Common");

  const handleTeamMember = () => {
    const contact = document.getElementById("team-member");
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
        page={BannerPages.ABOUT}
        button={<PrimaryButton onClick={handleTeamMember}>{commonT("learn_more")}</PrimaryButton>}
      />
    </div>
  );
};

export default AboutBanner;
