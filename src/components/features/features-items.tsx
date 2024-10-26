"use client";
import { Icons } from "@/components/ui/icons";
import PrimaryBadge from "@/components/ui/primary-badge";
import { featureItems } from "@/constants/features";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PrimaryButton from "../ui/primary-button";
import FadeIn from "../animation/fade-in";
import { cn } from "@/lib/utils";

const FeaturesItems = () => {
  const t = useTranslations("Features.items");
  const commonT = useTranslations("Common");

  return (
    <section className="container pb-16 lg:pb-[100px]">
      <FadeIn>
        <h5 className="flex justify-center items-center">
          <PrimaryBadge>{t("badge")}</PrimaryBadge>
        </h5>
        <h3 className="text-center font-poppins text-4xl lg:text-[42px] font-extrabold uppercase py-5">{t("title")}</h3>
      </FadeIn>

      <div className="flex flex-col gap-[50px]">
        {featureItems(t)?.map((item, i) => (
          <FadeIn key={i}>
            <div
              className={cn(
                "p-6 lg:p-12 bg-white rounded-3xl border border-grey-main flex items-center justify-between flex-col-reverse gap-[50px]",
                i % 2 === 0 ? "lg:flex-row-reverse lg:justify-end" : "lg:flex-row"
              )}
            >
              <div className="max-w-lg">
                <FadeIn>
                  <h6 className="font-poppins text-3xl lg:text-[42px] font-extrabold capitalize">{item?.title}</h6>
                </FadeIn>
                {item?.description && <p className="text-lg font-normal mt-3">{item?.description}</p>}
                <div className="mt-3 flex flex-col gap-2">
                  {item?.features?.map((feature, index) => (
                    <FadeIn delay={index * 0.2} key={index}>
                      <div className="flex items-start gap-3">
                        <div className="width-6">
                          <div className="grid place-items-center bg-primary rounded-full p-1 size-6">
                            <Icons.arrowRight2 className="size-3 text-white" />
                          </div>
                        </div>
                        <div>{feature}</div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                {item?.description_2 && <p className="text-lg font-normal mt-3">{item?.description_2}</p>}
                <div className="mt-10">
                  {item.slug === "quin-games" || item.slug === "quin-tours" ? (
                    <PrimaryButton>{commonT("learn_more")}</PrimaryButton>
                  ) : (
                    <Link href={`/features/${item?.slug}`}>
                      <PrimaryButton>{commonT("learn_more")}</PrimaryButton>
                    </Link>
                  )}
                </div>
              </div>
              <div className="px-[50px] py-[50px] lg:py-[100px] rounded-3xl bg-grey-main h-full grid place-items-center">
                <div className="size-[150px] lg:size-[300px] relative">
                  <Image src={item?.image} alt={item?.title} fill />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default FeaturesItems;
