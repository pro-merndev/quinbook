"use client";
import { featureDetailsItems } from "@/constants/features";
import { useTranslations } from "next-intl";
import PrimaryBadge from "../ui/primary-badge";

const FeatureDetailsMain = ({ slug }: { slug: string }) => {
  const t = useTranslations();
  const feature = featureDetailsItems(t).find((s) => s.slug === slug);
  return (
    <div className="container py-10 lg:py-20">
      <div className="flex flex-col gap-24">
        {feature?.functions.map((item, index) => (
          <div key={index} className="md:grid md:grid-cols-2 md:min-h-[750px]">
            <div className="flex justify-center items-center gap-10">
              <div>
                <div>
                  <PrimaryBadge>{item?.badge}</PrimaryBadge>
                </div>
                <h3 className="font-poppins font-extrabold md:leading-[90px] md:text-7xl text-5xl pt-5">{item?.title}</h3>
              </div>
            </div>

            <div className="bg-grey-main md:p-16 p-5 rounded-e-2xl max-md:mt-5">
              <div className="h-full flex flex-col justify-center items-center gap-10 text-xl text-primary font-medium ">
                <p className="leading-8">{item?.description_1}</p>
                {item?.description_2 && <p className="leading-8">{item?.description_2}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDetailsMain;
