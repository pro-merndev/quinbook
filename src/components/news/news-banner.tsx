"use client";
import Banner from "@/components/shared/banner";
import { useTranslations } from "next-intl";
import PrimaryButton from "../ui/primary-button";

const NewsBanner = () => {
  const t = useTranslations("News.banner");
  const commonT = useTranslations("Common");

  const handleNews = () => {
    const contact = document.getElementById("news");
    if (contact) {
      const offset = 150; // Adjust the offset value as needed
      const elementPosition = contact.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      <Banner title={t("title")} description={t("description")} button={<PrimaryButton onClick={handleNews}>{commonT("learn_more")}</PrimaryButton>} />
    </div>
  );
};

export default NewsBanner;
