import HomeAdvantages from "@/components/home/home-advantages";
import HomeApplicationExample from "@/components/home/home-application-example";
import HomeBanner from "@/components/home/home-banner";
import HomeFeatures from "@/components/home/home-features";
import HomeMarque from "@/components/home/home-marque";
import HomeQuote from "@/components/home/home-quote";
import HomeSolutions from "@/components/home/home-solutions";
import HomeTestimonial from "@/components/home/home-testimonial";
import HomeThisIsUs from "@/components/home/home-this-is-us";
import Contact from "@/components/shared/contact";
import VideoBanner from "@/components/shared/video-banner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeMarque />
      <HomeAdvantages />
      <HomeApplicationExample />
      <HomeQuote />
      <HomeFeatures />
      <HomeSolutions />
      <HomeTestimonial />
      <VideoBanner src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      <HomeThisIsUs />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
}
