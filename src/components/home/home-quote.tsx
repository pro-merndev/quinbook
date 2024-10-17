import { Link } from "@/i18n/routing";
import Image from "next/image";

const HomeQuote = () => {
  return (
    <div className="bg-grey-main">
      <div className="bg-[url('/images/home/Group_11.png')] bg-no-repeat bg-right">
        <div className="container xl:py-14 lg:py-10 py-8  flex justify-center items-center gap-8">
          <Link href="/for-whom-quinbook" className="font-poppins font-bold xl:text-6xl sm:text-4xl text-2xl text-primary">...einfach für alle Freizeitanbieter</Link>
          <div>
            <span className="flex justify-center items-center p-3 bg-white rounded-full">
              <Image src="/logo/logo_icon.svg" alt="example-1" width={40} height={40} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeQuote;
