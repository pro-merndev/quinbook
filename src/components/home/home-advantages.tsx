import { useTranslations } from "next-intl";
import PrimaryBadge from "../shared/primary-badge";
import PrimaryButton from "../shared/primary-button";

const HomeAdvantages = () => {
  const t = useTranslations("Home.advantages");
  return (
    <div className="container py-12 lg:py-20">
      <h5 className="flex justify-center items-center">
        <PrimaryBadge>{t("badge")}</PrimaryBadge>
      </h5>
      <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">{t("title")}</h3>
      <div className="grid grid-cols-12 gap-6 mt-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="col-span-4 p-12 bg-white even:bg-grey-main rounded-3xl border border-grey-main hover:bg-grey-main transition-all duration-500 ">
            <h6 className="font-poppins text-2xl font-extrabold">{t(`items._${i}.title` as any)}f</h6>
            <p className="text-xl pt-5 leading-8">{t(`items._${i}.description` as any)}f</p>
          </div>
        ))}
        {/* <div className="col-span-4 p-12 bg-white rounded-3xl border border-grey-main hover:bg-grey-main transition-all duration-500 ">
          <h6 className="font-poppins text-2xl font-extrabold">{t()}</h6>
          <p className="text-xl pt-5 leading-8">10 Jahre Know-How im Escape Game Business & 25 Jahre IT-Knowledge</p>
        </div>
        <div className="col-span-4 p-12  rounded-3xl border border-grey-dark bg-grey-main">
          <h6 className="font-poppins text-2xl font-extrabold ">ein komplexes System, kinderleicht zu nutzen</h6>
          <p className="text-xl pt-5 leading-8">Zig Funktionen, maßgeschneidert auf Freizeit Betreiber. Lass Quinbook dir die Arbeit abnehmen</p>
        </div>
        <div className=" col-span-4 p-12 bg-white rounded-3xl border border-grey-main hover:bg-grey-main transition-all duration-500">
          <h6 className="font-poppins text-2xl font-extrabold ">geballte (Wo)manpower</h6>
          <p className="text-xl pt-5 leading-8">
            Ein starkes Team von Escape Game Betreibern, Software Entwicklern und Marketingspezialisten erzeugt den einzigartigen Mix, der Quinbook
            zum mächtigsten Buchungssystem für Freizeitanbieter macht
          </p>
        </div> */}
        <div className="col-span-12 p-12 rounded-3xl border border-grey-dark bg-grey-main">
          <h4 className="font-poppins font-extrabold text-7xl pb-6">fair!</h4>
          <p className="text-2xl">Flatrate! Keine versteckten Kosten oder prozentualen Anteile.</p>
          <p className="text-2xl">ECHTE Preisplanung, keine zusätzlichen Gebühren!</p>
          <PrimaryButton className="mt-8">Demo anfordern</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeAdvantages;
