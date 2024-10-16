import { pricingPlans } from "@/constants/pricing-plans";
import { Check } from "lucide-react";
import { PricingPlanType } from "../../interface/pricing-plan.interface";
import PrimaryBadge from "../ui/primary-badge";

const PricingMain = () => {
  return (
    <div>
      <div className="container">
        <h5 className="flex justify-center items-center">
          <PrimaryBadge>Preise</PrimaryBadge>
        </h5>
        <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">Flatrate pakete</h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mt-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="px-6 py-9 bg-white even:bg-grey-main rounded-3xl border border-grey-main hover:bg-grey-main transition-all duration-500 "
            >
              <div className="flex flex-col justify-between  h-64">
                <div>
                  <h6 className="font-poppins font-extrabold text-3xl mb-6">{plan.title}</h6>
                  <ul className="flex flex-col gap-5">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex gap-3 items-center">
                        <div>
                          <span className="p-1 bg-white rounded-full flex justify-center items-center">
                            <Check width={15} height={15} />
                          </span>
                        </div>
                        <p className="font-medium text-grey-darker">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {plan.type === PricingPlanType.FIXED_PRICE && (
                    <>
                      <span className="font-poppins font-bold text-primary text-[42px]">159€</span> /{" "}
                      <span className="font-medium text-grey-darker">Monat</span>
                    </>
                  )}
                  {plan.type === PricingPlanType.CUSTOM && (
                    <>
                      <span className="font-medium text-grey-darker">Auf Anfrage</span>
                    </>
                  )}
                  {plan.type === PricingPlanType.FREE && (
                    <>
                      <span className="font-medium text-grey-darker">Free</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingMain;
