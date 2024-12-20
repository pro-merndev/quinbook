import ForWhomQuinbookApplications from "@/components/for-whom-quinbook/for-whom-quinbook-applications";
import ForWhomQuinbookBanner from "@/components/for-whom-quinbook/for-whom-quinbook-banner";
import ForWhomQuinbookMain from "@/components/for-whom-quinbook/for-whom-quinbook-main";
import Contact from "@/components/shared/contact";
import Features from "@/components/shared/features";
import VideoBanner from "@/components/shared/video-banner";

const ForWhomQuinbookPage = () => {
  return (
    <>
      <ForWhomQuinbookBanner />
      <ForWhomQuinbookMain />
      <ForWhomQuinbookApplications />
      <Features />
      <VideoBanner src="https://cdn.quinbook.com/media/quinbook_sneak_peek.m3u8" />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
};

export default ForWhomQuinbookPage;
