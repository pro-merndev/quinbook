"use client";
import { featureDetailsItems } from "@/constants/features";
import { useTranslations } from "next-intl";
import FeatureDetailsMainItem from "./feature-details-main-item";

const FeatureDetailsMain = ({ slug }: { slug: string }) => {
  const t = useTranslations();
  const feature = featureDetailsItems(t).find((s) => s.slug === slug);
  return (
    <div className="container py-10 lg:py-20">
      <div className="flex flex-col gap-24">
        {feature?.functions.map((item, index) => (
          <FeatureDetailsMainItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeatureDetailsMain;
