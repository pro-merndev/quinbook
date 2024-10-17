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
      <VideoBanner src="https://cdn.quinbook.com/media/quinbook_sneak_peek.m3u8" />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
};

export default PricingPage;
