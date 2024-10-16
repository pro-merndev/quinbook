import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";
import PrimaryButton from "../ui/primary-button";

const NewsBanner = () => {
  const t = useTranslations("News.banner");
  const commonT = useTranslations("Common");

  return (
    <div className="container">
      <Banner title={t("title")} description={t("description")} button={<PrimaryButton>{commonT("learn_more")}</PrimaryButton>} />
    </div>
  );
};

export default NewsBanner;
