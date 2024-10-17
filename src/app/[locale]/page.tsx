import HomeAdvantages from "@/components/home/home-advantages";
import HomeApplicationExample from "@/components/home/home-application-example";
import HomeBanner from "@/components/home/home-banner";
import HomeQuote from "@/components/home/home-quote";
import HomeSolutions from "@/components/home/home-solutions";
import HomeThisIsUs from "@/components/home/home-this-is-us";
import Contact from "@/components/shared/contact";
import CustomersMarque from "@/components/shared/customers-marque";
import Features from "@/components/shared/features";
import Testimonials from "@/components/shared/testimonials";
import VideoBanner from "@/components/shared/video-banner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <CustomersMarque />
      <HomeAdvantages />
      <HomeApplicationExample />
      <HomeQuote />
      <Features />
      <HomeSolutions />
      <Testimonials />
      <VideoBanner src="https://cdn.quinbook.com/media/quinbook_sneak_peek.m3u8" />
      <HomeThisIsUs />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
}
