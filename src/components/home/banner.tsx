import { useTranslations } from "next-intl";
import Banner from "@/components/shared/banner";
import PrimaryButton from "../shared/primary-button";
import Image from "next/image";

const HomeBanner = () => {
  const t = useTranslations("Home.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container mx-auto pb-20">
      <Banner title={t("title")} description={t("description")} button={<PrimaryButton>{commonT("contact")}</PrimaryButton>} />
      <div className="w-full h-auto aspect-[1080/636] relative">
        <Image src="/images/home/banner.png" alt="Banner Image" layout="fill" objectFit="cover" className="rounded-[24px]" priority />
      </div>
    </div>
  );
};

export default HomeBanner;
