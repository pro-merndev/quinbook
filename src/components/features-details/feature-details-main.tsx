"use client";
import { useParams } from "next/navigation";
import PrimaryBadge from "../ui/primary-badge";

const FeatureDetailsMain = () => {
  const params = useParams();
  console.log(params.slug);
  return (
    <div className="container py-10 lg:py-20">
      <div className="flex flex-col gap-24">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className="md:grid md:grid-cols-2 md:min-h-[750px]">
            <div className="flex justify-center items-center gap-10">
              <div>
                <div>
                  <PrimaryBadge>CRM System</PrimaryBadge>
                </div>
                <h3 className="font-poppins font-extrabold md:leading-[90px] md:text-7xl text-5xl pt-5">Schnell & einfach einbuchen</h3>
              </div>
            </div>

            <div className="bg-grey-main md:p-16 p-5 rounded-e-2xl max-md:mt-5">
              <div className="h-full flex flex-col justify-center items-center gap-10 text-xl text-primary font-medium ">
                <p className="leading-8">
                  Nie wieder mühsame und endlose Formularfelder eingeben: Kundenprofile werden bei Quinbook ganz einfach automatisch bei der
                  Einbuchung angelegt.{" "}
                </p>
                <p className="leading-8">
                  Mit einem Blick findest und siehst du alle Infos zu dem gewünschten Kunden und kannst alles Mögliche bei der Buchung oder zum Kunden
                  ändern.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDetailsMain;
