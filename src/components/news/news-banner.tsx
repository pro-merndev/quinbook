import Banner from "@/components/shared/banner";
import PrimaryButton from "@/components/shared/primary-button";
import { useTranslations } from "next-intl";

const NewsBanner = () => {
  const t = useTranslations("News.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container">
      <Banner title={t("title")} description={t("description")} button={<PrimaryButton>{commonT("contact")}</PrimaryButton>} />
    </div>
  );
};

export default NewsBanner;
