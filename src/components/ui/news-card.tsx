import { Link } from "@/i18n/routing";
import { INews } from "../interface/news.interface";

const NewsCard = ({ news }: { news: INews }) => {
  return (
    <div>
      <div className="bg-white rounded-3xl border border-grey-main p-6">
        <img src={news.image} alt={news.title} className="w-full rounded-lg" />
        <p className="mt-6 flex justify-between items-center">
          <span className="font-poppins uppercase font-extrabold text-primary text-xs">{news.type}</span>
          <span className="font-medium text-grey-dark text-xs">{news.date}</span>
        </p>
        <h6 className="mt-6 font-poppins font-extrabold text-[28px] text-primary">{news.title}</h6>
        <p className="mt-3">{news.shortDescription}</p>
        <div className="mt-5">
          <Link href={`/news/${news.id}`} className="text-secondary-main underline">
            Jetzt lesen...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
