import { featureItems } from "./features";

export const navigationFooterLinks = (t: any) => {
  return {
    label: t("Footer.navigation"),
    items: [
      {
        label: t("NavLink.home"),
        path: "/",
      },
      {
        label: t("NavLink.pricing"),
        path: "/pricing",
      },
      {
        label: t("NavLink.news"),
        path: "/news",
      },
      {
        label: t("NavLink.about"),
        path: "/about",
      },
      {
        label: t("NavLink.login"),
        path: "/login",
      },
    ],
  };
};

export const featuresFooterLinks = (t: any, featuresT: any) => {
  return {
    label: t("NavLink.features"),
    path: "/features",
    items: [
      ...featureItems(featuresT).map((feature) => ({
        label: feature.title,
        path: `/features/${feature.slug}`,
      })),
    ],
  };
};
