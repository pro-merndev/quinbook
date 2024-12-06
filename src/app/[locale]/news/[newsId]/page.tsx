import NewsDetailsMain from "@/components/news-details/news-details-main";
import RelatedNews from "@/components/news-details/related-news";
import Contact from "@/components/shared/contact";
import { news } from "@/constants/news";
import { Metadata } from "next";

interface Params {
  params: {
    newsId: string;
  };
}

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const thisNews = news.find((news) => news.id === Number(params.newsId));

  return {
    title: thisNews?.title,
    description: thisNews?.shortDescription,
  };
};

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
