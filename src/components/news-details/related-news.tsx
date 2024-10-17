"use client";
import { news } from "@/constants/news";
import NewsCard from "../ui/news-card";
import PrimaryButton from "../ui/primary-button";
import { useRouter } from "@/i18n/routing";

const RelatedNews = () => {
  const router = useRouter();
  return (
    <div>
      <div className="container py-12 lg:py-20">
        <div className="flex justify-between items-center">
          <h5 className="font-poppins font-extrabold text-4xl">Weitere Beiträge</h5>
          <PrimaryButton onClick={()=>router.push('/news')}>Alle ansehen</PrimaryButton>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {news.slice(0, 3).map((news, i) => (
            <NewsCard key={i} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
