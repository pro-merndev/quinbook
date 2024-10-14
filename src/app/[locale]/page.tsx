import HomeAdvantages from "@/components/home/home-advantages";
import HomeApplicationExample from "@/components/home/home-application-example";
import HomeBanner from "@/components/home/home-banner";
import HomeDemoVideo from "@/components/home/home-demo-video";
import HomeFeatures from "@/components/home/home-features";
import HomeMarque from "@/components/home/home-marque";
import HomeQuote from "@/components/home/home-quote";
import HomeSolutions from "@/components/home/home-solutions";
import HomeTestimonial from "@/components/home/home-testimonial";
import HomeThisIsUs from "@/components/home/home-this-is-us";
import Contact from "@/components/shared/contact";

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
      <HomeDemoVideo />
      <HomeThisIsUs />
      <Contact className="pt-16 lg:pt-[100px]" />
    </>
  );
}
