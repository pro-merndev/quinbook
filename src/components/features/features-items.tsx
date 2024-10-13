"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import PrimaryBadge from "@/components/shared/primary-badge";
import { Icons } from "@/components/shared/icons";
import PrimaryButton from "@/components/shared/primary-button";
import { Link } from "@/i18n/routing";

const FeaturesItems = () => {
  const t = useTranslations("Features.items");
  const commonT = useTranslations("Common");

  const generateFeatureItems = (featureCount: number, itemNumber: number) => {
    const features = Array.from({ length: featureCount }).map((_, i) => t(`_${itemNumber}.f_${i + 1}` as any));
    return features;
  };

  const featureItems = [
    {
      title: t("_1.title"),
      description: t("_1.description"),
      description_2: t("_1.description_2"),
      features: generateFeatureItems(4, 1),
      image: "/images/features/feature_1.svg",
      path: "/1",
    },
    {
      title: t("_2.title"),
      features: generateFeatureItems(5, 2),
      image: "/images/features/feature_2.svg",
      path: "/2",
    },
    {
      title: t("_3.title"),
      description: t("_3.description"),
      features: generateFeatureItems(5, 3),
      image: "/images/features/feature_3.svg",
      path: "/3",
    },
    {
      title: t("_4.title"),
      description: t("_4.description"),
      features: generateFeatureItems(3, 4),
      image: "/images/features/feature_4.svg",
      path: "/4",
    },
    {
      title: t("_5.title"),
      features: generateFeatureItems(2, 5),
      image: "/images/features/feature_5.svg",
      path: "/5",
    },
  ];

  return (
    <section className="container pb-16 lg:pb-[100px]">
      <h5 className="flex justify-center items-center">
        <PrimaryBadge>{t("badge")}</PrimaryBadge>
      </h5>
      <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">{t("title")}</h3>

      <div className="flex flex-col gap-[50px]">
        {featureItems?.map((item, index) => (
          <div
            key={index}
            className="p-6 lg:p-12 bg-white rounded-3xl border border-grey-main flex items-center justify-between even:justify-end even:flex-row-reverse gap-[50px]"
          >
            <div className="max-w-lg">
              <h6 className="font-poppins text-[42px] font-extrabold capitalize">{item?.title}</h6>
              {item?.description && <p className="text-lg font-normal mt-3">{item?.description}</p>}
              <div className="mt-3 flex flex-col gap-2">
                {item?.features?.map((feature, index) => (
                  <div className="flex items-start gap-3" key={index}>
                    <div className="width-6">
                      <div className="grid place-items-center bg-primary rounded-full p-1 size-6">
                        <Icons.arrowRight2 className="size-3 text-white" />
                      </div>
                    </div>
                    <div>{feature}</div>
                  </div>
                ))}
              </div>
              {item?.description_2 && <p className="text-lg font-normal mt-3">{item?.description_2}</p>}
              <div className="mt-10">
                <Link href={`/features/${item?.path}`}>
                  <PrimaryButton>{commonT("learn_more")}</PrimaryButton>
                </Link>
              </div>
            </div>
            <div className="px-[50px] py-[100px] rounded-3xl bg-grey-main h-full grid place-items-center">
              <Image src={item?.image} alt={item?.title} width={300} height={300} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesItems;
