"use client";

import { Icons } from "@/components/ui/icons";
import PrimaryBadge from "@/components/ui/primary-badge";
import { featureItems } from "@/constants/features";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PrimaryButton from "../ui/primary-button";

const FeaturesItems = () => {
  const t = useTranslations("Features.items");
  const commonT = useTranslations("Common");

  return (
    <section className="container pb-16 lg:pb-[100px]">
      <h5 className="flex justify-center items-center">
        <PrimaryBadge>{t("badge")}</PrimaryBadge>
      </h5>
      <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">{t("title")}</h3>

      <div className="flex flex-col gap-[50px]">
        {featureItems(t)?.map((item, index) => (
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
                <Link href={`/features/${item?.slug}`}>
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
