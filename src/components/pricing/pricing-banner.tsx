import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PrimaryButton from "../ui/primary-button";

const PricingBanner = () => {
  const t = useTranslations("Pricing.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner title={t("title")} description={t("description")} button={<PrimaryButton>{commonT("learn_more")}</PrimaryButton>} />
      <div className="pt-12 lg:pt-16 w-full h-auto aspect-[1080/636] relative">
        <Image src="/images/pricing/banner.png" alt="Banner Image" fill className="object-cover rounded-[24px]" priority />
      </div>
    </div>
  );
};

export default PricingBanner;
