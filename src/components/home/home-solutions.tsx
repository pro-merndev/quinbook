import FadeIn from "../animation/fade-in";
import ParallaxBackground from "../animation/parallax-background";
import PrimaryButton from "../ui/primary-button";

const HomeSolutions = () => {
  return (
    <div className="bg-grey-main overflow-hidden">
      <ParallaxBackground>
        <div className="container py-12 lg:py-24">
          <FadeIn>
            <p className="font-poppins md:text-[42px] text-xl md:leading-[72px]">
              Ob digitales <span className="font-extrabold">Buchungs- Personal-, CRM, Marketing</span> oode{" "}
              <span className="font-extrabold">Buchhaltungsmanagement</span> – Quinbook ist dank des Escape Game Ursprungs die weltweit
              erste All-in-One Lösung für Freizeit Betreiber und vereint das Beste aus allen Welten, um DIR Zeit für DEIN Business frei zu
              schaufeln!
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6">
              <PrimaryButton>Zur All-in-One Lösung</PrimaryButton>
            </div>
          </FadeIn>
        </div>
      </ParallaxBackground>
    </div>
  );
};

export default HomeSolutions;
