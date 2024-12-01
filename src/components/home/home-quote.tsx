import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ParallaxBackground from "../animation/parallax-background";

const HomeQuote = () => {
  const t = useTranslations("Home.quote");
  return (
    <div className="bg-grey-main overflow-hidden">
      <ParallaxBackground>
        <div className="container xl:py-14 lg:py-10 py-8  flex justify-center items-center gap-8">
          <Link href="/for-whom-quinbook" className="font-poppins font-bold xl:text-6xl sm:text-4xl text-2xl text-primary">
            {t("title")}
          </Link>
          <Link href="/for-whom-quinbook">
            <span className="flex justify-center items-center p-3 bg-white rounded-full">
              <Image src="/logo/logo_icon.svg" alt="example-1" width={40} height={40} />
            </span>
          </Link>
        </div>
      </ParallaxBackground>
    </div>
  );
};

export default HomeQuote;
