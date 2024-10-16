import NewsDetailsMain from "@/components/news-details/news-details-main";
import RelatedNews from "@/components/news-details/related-news";
import Contact from "@/components/shared/contact";

interface Params {
  params: {
    newsId: string;
  };
}

const NewsDetailsPage = ({ params }: Params) => {
  return (
    <>
      <NewsDetailsMain newsId={params.newsId} />
      <RelatedNews />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
};

export default NewsDetailsPage;
