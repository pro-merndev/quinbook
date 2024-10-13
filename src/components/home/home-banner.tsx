import { useTranslations } from "next-intl";
import Banner from "@/components/shared/banner";
import PrimaryButton from "../shared/primary-button";
import Image from "next/image";

const HomeBanner = () => {
  const t = useTranslations("Home.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner title={t("title")} description={t("description")} button={<PrimaryButton>{commonT("contact")}</PrimaryButton>} />
      <div className="pt-12 lg:pt-16 w-full h-auto aspect-[1080/636] relative">
        <Image src="/images/home/banner.png" alt="Banner Image" fill className="object-cover rounded-[24px]" priority />
      </div>
    </div>
  );
};

export default HomeBanner;