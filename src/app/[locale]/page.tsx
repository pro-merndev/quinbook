import HomeAdvantages from "@/components/home/home-advantages";
import HomeApplicationExample from "@/components/home/home-application-example";
import HomeBanner from "@/components/home/home-banner";
import HomeFeatures from "@/components/home/home-features";
import HomeMarque from "@/components/home/home-marque";
import HomeQuote from "@/components/home/home-quote";
import HomeSolutions from "@/components/home/home-solutions";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeMarque />
      <HomeAdvantages />
      {/* <HomeApplicationExample /> */}
      <HomeQuote />
      <HomeFeatures />
      <HomeSolutions />
    </>
  );
}
