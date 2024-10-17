"use client";
import FadeIn from "../animation/fade-in";
import PrimaryButton from "../ui/primary-button";

const HomeThisIsUs = () => {
  const handleContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      const offset = 100; // Adjust the offset value as needed
      const elementPosition = contact.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="bg-primary">
        <div className="bg-[url('/images/home/Group_13.png')] bg-no-repeat bg-right bg-contain">
          <div className="container py-12 lg:py-32">
            <FadeIn>
              <h5 className="font-poppins font-extrabold sm:text-8xl text-4xl mb-8 text-white text-center">Das ist quinbook</h5>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="leading-9 sm:text-2xl text-xl text-center text-white mb-8">
                Wir leben Escape Games und sind selbst nach wie vor Betreiber von Freizeitunternehmungen. Quinbook füllt für uns selbst
                gleich mehrere Lücken dringend benötigter Management Tools und ist aus der Not mangels alternativer Lösungen entstanden.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <PrimaryButton className="text-black bg-white" withArrow={false}>
                  Zu den Funktionen
                </PrimaryButton>
                <PrimaryButton onClick={handleContact}>Demo anfordern</PrimaryButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThisIsUs;
