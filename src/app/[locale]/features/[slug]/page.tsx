import FeatureDetailsBanner from "@/components/features-details/feature-details-banner";
import FeatureDetailsMain from "@/components/features-details/feature-details-main";
import Contact from "@/components/shared/contact";
import Features from "@/components/shared/features";
import VideoBanner from "@/components/shared/video-banner";
import { featureDetailsItems, featureItems } from "@/constants/features";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { slug } = params;
  const t = await getTranslations("Features.items");
  const item = featureDetailsItems(t)?.find((s) => s.slug === slug);

  return { title: item?.title, description: item?.subTitle };
};

const FeaturesDetailsPage = ({ params }: Params) => {
  const slug = params.slug;
  return (
    <>
      <FeatureDetailsBanner slug={slug} />
      <FeatureDetailsMain slug={slug} />
      <Features />
      <VideoBanner src="https://cdn.quinbook.com/media/quinbook_sneak_peek.m3u8" />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
};

export default FeaturesDetailsPage;
