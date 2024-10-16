import Banner from "@/components/shared/banner";
import PrimaryButton from "@/components/ui/primary-button";
import { useTranslations } from "next-intl";
import { BannerPages } from "@/interface/common.interface";

const HomeBanner = () => {
  const t = useTranslations("Home.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner
        title={t("title")}
        description={t("description")}
        page={BannerPages.HOME}
        button={<PrimaryButton contactButton>{commonT("contact")}</PrimaryButton>}
      />
    </div>
  );
};

export default HomeBanner;
