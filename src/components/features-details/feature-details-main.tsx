"use client";
import { IFeatureItem } from "@/interface/feature.interface";
import FeatureDetailsMainItem from "./feature-details-main-item";

const FeatureDetailsMain = ({ featureItem }: { featureItem: IFeatureItem | undefined }) => {
  return (
    <div className="container py-10 lg:py-20">
      <div className="flex flex-col gap-24">
        {featureItem?.functions?.length && featureItem?.functions.map((item, index) => <FeatureDetailsMainItem key={index} item={item} />)}
      </div>
    </div>
  );
};

export default FeatureDetailsMain;
