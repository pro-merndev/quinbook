import { featureItems } from "./features";

export const navLinks = (t: any, featuresT: any) => {
  return [
    {
      label: t("NavLink.features"),
      path: "/features",
      items: [
        ...featureItems(featuresT)
          .slice(0, 3)
          .map((feature) => ({
            label: feature.title,
            path: `/features/${feature.slug}`,
          })),
        { label: t("Common.for_whom"), path: "/for-whom-quinbook" },
      ],
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
  ];
};
