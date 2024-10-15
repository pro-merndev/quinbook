import NewsBanner from "@/components/news/news-banner";
import NewsMain from "@/components/news/news-main";
import Contact from "@/components/shared/contact";

const NewsDetailsPage = () => {
  return (
    <>
      <NewsBanner />
      <NewsMain/>
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
};

export default NewsDetailsPage;
