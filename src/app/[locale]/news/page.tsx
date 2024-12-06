import NewsBanner from "@/components/news/news-banner";
import NewsMain from "@/components/news/news-main";
import Contact from "@/components/shared/contact";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("News");

  return {
    title: t("banner.title"),
    description: t("banner.description"),
  };
};

const NewsPage = () => {
  return (
    <>
      <NewsBanner />
      <NewsMain />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
};

export default NewsPage;
