import { news } from "@/constants/news";
import NewsCard from "../ui/news-card";

const NewsMain = () => {
  return (
    <div className="container py-12 lg:py-20">
      <div className="grid grid-cols-3 gap-4">
        {news.map((news, i) => (
          <NewsCard key={i} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsMain;
