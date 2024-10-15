import PricingBanner from "@/components/pricing/pricing-banner";
import PricingDescribe from "@/components/pricing/pricing-discribe";
import PricingMain from "@/components/pricing/pricing-main";
import PricingPaymentMethods from "@/components/pricing/pricing-payment-methods";
import PricingFeatures from "@/components/pricing/pricint-features";
import Contact from "@/components/shared/contact";
import VideoBanner from "@/components/shared/video-banner";

const PricingPage = () => {
  return (
    <>
      <PricingBanner />
      <PricingMain />
      <PricingDescribe />
      <PricingPaymentMethods />
      <PricingFeatures />
      <VideoBanner src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
};

export default PricingPage;
