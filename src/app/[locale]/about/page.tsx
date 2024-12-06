import AboutBanner from "@/components/about/about-banner";
import AboutTeam from "@/components/about/about-team";
import Contact from "@/components/shared/contact";
import CustomersMarque from "@/components/shared/customers-marque";
import Testimonials from "@/components/shared/testimonials";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("NavLink");

  return {
    title: t("about"),
  };
};

const AboutUsPage = () => {
  return (
    <>
      <AboutBanner />
      <AboutTeam />
      <CustomersMarque />
      <Testimonials />
      <Contact />
    </>
  );
};

export default AboutUsPage;
