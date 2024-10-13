const generateFeatureItems = (t: any, featureCount: number, itemNumber: number) => {
  const features = Array.from({ length: featureCount }).map((_, i) => t(`_${itemNumber}.f_${i + 1}` as any));
  return features;
};

export const featureItems = (t: any) => {
  return [
    {
      title: t("_1.title"),
      description: t("_1.description"),
      description_2: t("_1.description_2"),
      features: generateFeatureItems(t, 4, 1),
      image: "/images/features/feature_1.svg",
      slug: "experience-management",
    },
    {
      title: t("_2.title"),
      features: generateFeatureItems(t, 5, 2),
      image: "/images/features/feature_2.svg",
      slug: "digital-booking-system",
    },
    {
      title: t("_3.title"),
      description: t("_3.description"),
      features: generateFeatureItems(t, 5, 3),
      image: "/images/features/feature_3.svg",
      slug: "personal-management",
    },
    {
      title: t("_4.title"),
      description: t("_4.description"),
      features: generateFeatureItems(t, 3, 4),
      image: "/images/features/feature_4.svg",
      slug: "quin-games",
    },
    {
      title: t("_5.title"),
      features: generateFeatureItems(t, 2, 5),
      image: "/images/features/feature_5.svg",
      slug: "quin-tours",
    },
  ];
};
