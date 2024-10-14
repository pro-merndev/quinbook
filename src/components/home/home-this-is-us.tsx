import PrimaryButton from "../shared/primary-button";

const HomeThisIsUs = () => {
  return (
    <div>
      <div className="bg-primary">
        <div className="bg-[url('/images/home/Group_13.png')] bg-no-repeat bg-right bg-contain">
          <div className="container py-12 lg:py-32">
            <h5 className="font-poppins font-extrabold sm:text-8xl text-4xl mb-8 text-white text-center">Das ist quinbook</h5>
            <p className="leading-9 sm:text-2xl text-xl text-center text-white mb-8">
              Wir leben Escape Games und sind selbst nach wie vor Betreiber von Freizeitunternehmungen. Quinbook füllt für uns selbst gleich mehrere
              Lücken dringend benötigter Management Tools und ist aus der Not mangels alternativer Lösungen entstanden.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <PrimaryButton className="text-black bg-white" withArrow={false}>
                Zu den Funktionen
              </PrimaryButton>
              <PrimaryButton>Demo anfordern</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThisIsUs;
