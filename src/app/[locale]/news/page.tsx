import NewsBanner from "@/components/news/news-banner";
import Contact from "@/components/shared/contact";

const NewsPage = () => {
  return (
    <>
      <NewsBanner />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
};

export default NewsPage;
