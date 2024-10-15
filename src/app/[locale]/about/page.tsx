import AboutBanner from "@/components/about/about-banner";
import AboutTeam from "@/components/about/about-team";
import Contact from "@/components/shared/contact";
import CustomersMarque from "@/components/shared/customers-marque";
import Testimonials from "@/components/shared/testimonials";

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
