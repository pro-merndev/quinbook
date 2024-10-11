import { useTranslations } from "next-intl";
import Banner from "@/components/shared/banner";
import PrimaryButton from "@/components/shared/primary-button";
import Image from "next/image";

const AboutBanner = () => {
  const t = useTranslations("About.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container py-12 lg:py-20">
      <Banner title={t("title")} description={t("description")} button={<PrimaryButton>{commonT("learn_more")}</PrimaryButton>} />
      <div className="mt-12 lg:mt-16 w-full h-auto aspect-[1080/636] relative">
        <Image src="/images/about/banner.jpeg" alt="Banner Image" layout="fill" objectFit="cover" className="rounded-[24px]" priority />
      </div>
    </div>
  );
};

export default AboutBanner;
