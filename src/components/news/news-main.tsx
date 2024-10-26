import { news } from "@/constants/news";
import NewsCard from "../ui/news-card";
import FadeIn from "../animation/fade-in";

const NewsMain = () => {
  return (
    <div id="news" className="container py-12 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((news, i) => (
          <FadeIn key={i}>
            <NewsCard news={news} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default NewsMain;
