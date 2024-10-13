import PrimaryButton from "../shared/primary-button";

const HomeSolutions = () => {
  return (
    <div className="bg-grey-main">
      <div className="bg-[url('/images/home/Group_12.png')] bg-no-repeat bg-right bg-contain">
        <div className="container py-12 lg:py-24">
          <p className="font-poppins md:text-[42px] text-xl md:leading-[72px]">
            Ob digitales <span className="font-extrabold">Buchungs- Personal-, CRM, Marketing-oder</span>{" "}
            <span className="font-extrabold">Buchhaltungsmanagement</span> – Quinbook ist dank des Escape Game Ursprungs die weltweit erste All-in-One
            Lösung für Freizeit Betreiber und vereint das Beste aus allen Welten, um DIR Zeit für DEIN Business frei zu schaufeln!
          </p>
          <div className="mt-6">
            <PrimaryButton>Zur All-in-One Lösung</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolutions;
