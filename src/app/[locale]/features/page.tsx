import FeaturesItems from "@/components/features/features-items";
import FeaturesBanner from "@/components/features/features-banner";
import FeaturesServices from "@/components/features/features-services";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("Features.banner");

  return {
    title: t("title"),
    description: t("description"),
  };
};

const FunctionsPage = () => {
  return (
    <>
      <FeaturesBanner />
      <FeaturesServices />
      <FeaturesItems />
    </>
  );
};

export default FunctionsPage;
