export interface IFeature {
  title: string;
  description: string;
  icon: string;
  action?: {
    link: string;
    text: string;
  };
}

export interface IFeatureFunction {
  badge: string;
  title: string;
  description_1: string;
  description_2?: string;
}

export interface IFeatureItem {
  title: string;
  description?: string;
  description_2?: string;
  features: string[];
  image: string;
  bannerImage?: string;
  slug: string;
  subTitle?: string;
  functions?: IFeatureFunction[];
}
