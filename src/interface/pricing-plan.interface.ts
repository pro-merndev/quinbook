export enum PricingPlanType {
  FIXED_PRICE = "fixedPrice",
  FREE = "free",
  CUSTOM = "custom",
}

export interface IPricingPlan {
  title: string;
  features: string[];
  type: PricingPlanType;
  price ?: string ;
  duration ?: string;
}
