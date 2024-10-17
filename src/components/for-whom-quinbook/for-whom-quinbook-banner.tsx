import { useTranslations } from "next-intl";
import Banner from "../shared/banner";
import PrimaryButton from "../ui/primary-button";

const ForWhomQuinbookBanner = () => {
  const commonT = useTranslations("Common");
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
        image="/images/features/feature_4_banner.jpeg"
        button={<PrimaryButton onClick={handleScroll}>{commonT("learn_more")}</PrimaryButton>}
      />
    </div>
  );
};

export default ForWhomQuinbookBanner;
