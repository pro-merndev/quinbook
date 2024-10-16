import PrimaryBadge from "../ui/primary-badge";

const ForWhomQuinbookApplications = () => {
  return (
    <div className="bg-grey-main">
      <div className="bg-[url('/images/home/Group_12.png')] bg-no-repeat bg-right bg-contain">
        <div className="container py-12 lg:py-24">
          <div className="flex justify-center">
            <PrimaryBadge>Anwendungen</PrimaryBadge>
          </div>
          <div>
            <h3 className="font-poppins font-bold xl:text-6xl sm:text-4xl text-2xl text-primary md:mt-8 md:mb-12 max-md:my-3 text-center">
              ...einfach für alle Freizeitanbieter
            </h3>
            <p className="text-xl leading-7 text-center">
              Von <span className="font-extrabold">Segwaytouren</span> über <span className="font-extrabold">Zoos</span> zu{" "}
              <span className="font-extrabold">Tramplinparks!</span> Noch nicht genug? Sei es{" "}
              <span className="font-extrabold">Stadtführungen, Adventmärkte</span> oder <span className="font-extrabold">Wasserparks</span>: Es gibt
              nahezu keine Anwendungslimitierungen für Freizeitunternehmen. Unsere Fülle an Funktionen und unser faires Preissystem als Flatlösung
              macht QuinBook einfach zum unschlagbaren Partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWhomQuinbookApplications;
