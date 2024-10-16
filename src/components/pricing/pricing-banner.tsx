import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";
import { BannerPages } from "@/interface/common.interface";
import PrimaryButton from "../ui/primary-button";

const PricingBanner = () => {
  const t = useTranslations("Pricing.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner
        title={t("title")}
        description={t("description")}
        page={BannerPages.PRICING}
        button={<PrimaryButton>{commonT("learn_more")}</PrimaryButton>}
      />
    </div>
  );
};

export default PricingBanner;
