import { useTranslations } from "next-intl";
import PrimaryBadge from "../shared/primary-badge";

const HomeAdvantages = () => {
  const t = useTranslations("Home.advantages");


  return (
    <div className="container py-12 lg:py-20">
      <h5 className="flex justify-center items-center">
        <PrimaryBadge>{t("badge")}</PrimaryBadge>
      </h5>
      <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">{t("title")}</h3>
    </div>
  );
};

export default HomeAdvantages;
