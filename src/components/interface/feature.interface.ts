export interface IFeature {
  title: string;
  description: string;
  icon: string;
  action?: {
    link: string;
    text: string;
  };
}
