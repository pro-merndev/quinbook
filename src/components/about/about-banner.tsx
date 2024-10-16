import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";
import PrimaryButton from "../ui/primary-button";
import { BannerPages } from "@/interface/common.interface";

const AboutBanner = () => {
  const t = useTranslations("About.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner
        title={t("title")}
        description={t("description")}
        page={BannerPages.ABOUT}
        button={<PrimaryButton>{commonT("learn_more")}</PrimaryButton>}
      />
    </div>
  );
};

export default AboutBanner;
