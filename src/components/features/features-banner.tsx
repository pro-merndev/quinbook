import { useTranslations } from "next-intl";
import { BannerPages } from "../interface/common.interface";
import Banner from "../shared/banner";
import PrimaryButton from "../ui/primary-button";

const FeaturesBanner = () => {
  const t = useTranslations("Features.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner
        title={t("title")}
        description={t("description")}
        page={BannerPages.FEATURES}
        button={
          <PrimaryButton contactButton bigOffset>
            {commonT("contact")}
          </PrimaryButton>
        }
      />
    </div>
  );
};

export default FeaturesBanner;
