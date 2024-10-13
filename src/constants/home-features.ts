import { IFeature } from "@/components/interface/feature.interface";

export const features: IFeature[] = [
  {
    title: "Kundenbeziehungs-management (CRM)",
    description: "Nie wieder Doppelbuchungen dank erstklassiger Kommunikationstools, um Kunden gezielt wieder abzuholen.",
    icon: "/images/home/features/messages-bubble-square-menu--Streamline-Ultimate.png",
  },
  {
    title: "Regelmanager",
    description: "Einfach und automatisch: Bewertungs-Boost, Fotoversand oder Reminder.",
    icon: "/images/home/features/human-resources-rating-woman--Streamline-Ultimate.png",
  },
  {
    title: "Mitarbeiter- & Ressourcen Management",
    description: "Arbeitsprozesse nachverfolgen, Schichtplanung & Stempeluhr.",
    icon: "/images/home/features/optimization-timer-1--Streamline-Ultimate.png",
  },
  {
    title: "Marketingboost",
    description: "Vollautomatisierbares Kampagnen- & Wertgutscheinsystem.",
    icon: "/images/home/features/advertising-megaphone--Streamline-Ultimate.png",
  },
  {
    title: "Buchhaltung",
    description: "Alles auf einen Blick. Keine Zettelwirtschaft mehr!",
    icon: "/images/home/features/saving-bag-increase--Streamline-Ultimate.png",
  },
  {
    title: "Automatische Zahlungsabwicklung",
    description: "Sichere Zahlungsabwicklungen mit flexiblen Preisgestaltungen, unterstützt durch detaillierte Finanzberichte und Analysen.",
    icon: "/images/home/features/analytics-net--Streamline-Ultimate.png",
  },
  {
    title: "Faire Preise",
    description: "FLAT! Keine versteckten Gebühren. Zero Umsatzbeteiligung.",
    icon: "/images/home/features/cash-payment-bills--Streamline-Ultimate.png",
    action: {
      text: "Unsere Preise",
      link: "#",
    },
  },
];

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
