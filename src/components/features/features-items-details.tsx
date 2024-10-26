import { generateFeatureItems } from "@/constants/features";
import { useTranslations } from "next-intl";
import FadeIn from "../animation/fade-in";

const FeaturesItemsDetails = () => {
  const t = useTranslations("Features.item_details");

  const data = [
    {
      title: t("_1.title"),
      description: t("_1.description"),
      features: generateFeatureItems(t, 11, 1),
    },
    {
      title: t("_2.title"),
      description: t("_2.description"),
      features: generateFeatureItems(t, 17, 2),
    },
    {
      title: t("_3.title"),
      description: t("_3.description"),
      features: generateFeatureItems(t, 11, 3),
    },
  ];

  return (
    <section>
      {data.map((item, index) => (
        <div key={index} className=" even:bg-grey-main">
          <div className="container py-16 lg:py-[100px]">
            <FadeIn>
              <h3 className="font-poppins text-4xl md:text-7xl lg:text-[100px] lg:leading-[90px] font-extrabold uppercase">{item.title}</h3>
              {item.description && <p className="text-lg font-extrabold text-[#333] mt-6">{item.description}</p>}
            </FadeIn>
            <div className="flex flex-col gap-3 mt-3">
              {item.features?.map((feature, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-center gap-3">
                    <div className="w-[14px]">
                      <div className="grid place-items-center bg-primary rounded-full size-[14px]"></div>
                    </div>
                    <p>{feature}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesItemsDetails;
