import { featureItems } from "@/constants/features";
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
  const item = featureItems(t)?.find((s) => s.slug === slug);

  return { title: item?.title, description: item?.description };
};

const FeaturesDetailsPage = ({ params }: Params) => {
  const slug = params.slug;
  return <>{slug}</>;
};

export default FeaturesDetailsPage;