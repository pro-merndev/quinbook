import { IPricingPlan, PricingPlanType } from "@/interface/pricing-plan.interface";

export const pricingPlans: IPricingPlan[] = [
  {
    title: "Plan A",
    features: ["Bis zu 9 Nutzer", "Bis zu 3 Erlebnissen"],
    type: PricingPlanType.FIXED_PRICE,
    price: "159€",
    duration: "Monat",
  },
  {
    title: "Plan B",
    features: ["Bis zu 24 Nutzer", "Bis zu 5 Erlebnissen"],
    type: PricingPlanType.FIXED_PRICE,
    price: "159€",
    duration: "Monat",
  },
  {
    title: "Plan C",
    features: ["Bis zu 49 Nutzer", "Bis zu 10 Erlebnissen"],
    type: PricingPlanType.FIXED_PRICE,
    price: "159€",
    duration: "Monat",
  },
  {
    title: "Plan D",
    features: ["50+ Nutzer", "> 10 Erlebnisse"],
    type: PricingPlanType.CUSTOM,
  },
];
