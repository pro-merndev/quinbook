import { useTranslations } from "next-intl";
import { useRef } from "react";
import Banner from "../shared/banner";
import BannerImage from "../shared/banner-image";
import PrimaryButton from "../ui/primary-button";

const ForWhomQuinbookBanner = () => {
  const commonT = useTranslations("Common");
  const ref = useRef(null);
  const handleScroll = () => {
    const contact = document.getElementById("for-whom-quinbook");
    if (contact) {
      const offset = 150; // Adjust the offset value as needed
      const elementPosition = contact.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container pb-16 lg:pb-[100px]">
      <Banner
        title="FÜR WEN QUINBOOK?"
        description="Business Management einfach gemacht:  Optimiere deinen Workflow"
        button={<PrimaryButton onClick={handleScroll}>{commonT("learn_more")}</PrimaryButton>}
      />
      <BannerImage ref={ref} imagePath="/images/for-whom-quinbook/banner.jpeg" />
    </div>
  );
};

export default ForWhomQuinbookBanner;
