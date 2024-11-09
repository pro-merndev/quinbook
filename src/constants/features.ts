import { IFeatureItem } from "@/interface/feature.interface";

export const generateFeatureItems = (t: any, featureCount: number, itemNumber: number) => {
  const features = Array.from({ length: featureCount }).map((_, i) => t(`_${itemNumber}.f_${i + 1}` as any));
  return features;
};

export const featureItems = (t: any): IFeatureItem[] => {
  return [
    {
      title: t("_1.title"),
      description: t("_1.description"),
      description_2: t("_1.description_2"),
      features: generateFeatureItems(t, 4, 1),
      image: "/images/features/feature_1.svg",
      bannerImage: "/images/features/feature_1_banner.jpeg",
      slug: "experience-management",
      subTitle: "Business Management einfach gemacht: Optimiere deinen Workflow",
      functions: [
        {
          badge: "CRM System",
          title: "Schnell & einfach einbuchen",
          description_1:
            "Nie wieder mühsame und endlose Formularfelder eingeben: Kundenprofile werden bei Quinbook ganz einfach automatisch bei der Einbuchung angelegt. ",
          description_2:
            "Mit einem Blick findest und siehst du alle Infos zu dem gewünschten Kunden und kannst alles Mögliche bei der Buchung oder zum Kunden ändern.",
        },
        {
          badge: "Bewertungen",
          title: "Bewertungs-Multiplikator",
          description_1:
            "Die Gruppe ist von deinem Erlebnis wegeblasen? Du oder dein Mitarbeiter quatschen noch 20 Minuten mit ihnen beim Debriefing? Mach dein Finisherfoto und ziehe es via Drag & Drop in das Quinbook Buchungsfeld des Kunden.",
          description_2:
            "Die Gruppe ist sehr ruhig und nicht sehr gesprächig? Du bist dir nicht sicher, wie gut es ihnen gefallen hat? Klicke auf „Ohne Bewertung versenden.“ und gehe auf Nummer sicher. Der Kunde erhält nun eine andere Email, bei der du nicht auf Bewertungen verweist.",
        },
        {
          badge: "Marketing",
          title: "Marketing-Boost",
          description_1:
            "Ob Google Analytics Verknüpfung, Rücksprung zu einer Dankesseite oder Kampagnengenerierung: Quinbook lässt dir freie Hand und hilft dir, deine Conversions zu optimieren! Follow-Up Bonus gefällig? Limitierte Rabattkampagnen?",
          description_2:
            "Der Marketingprofi in dir bekommt Herz-Rhythmus-Störungen vor lauter neuen Bestellungen, da dir das Tracking via Facebook Pixel, Google Tag Manager und Konsorten so einfach wie möglich gemacht wird.",
        },
        {
          badge: "Mailsystem",
          title: "Individualisiere, personalisiere & automatisiere!",
          description_1:
            "Ob Bestellungs-  Rechnungs-, Erinnerungs-, Foto-, oder Followup- Mail: Individualisiere und personalisiere deine Kundenmails: Links, Widgets, Bilder, und Videos lassen sich einfügen und kinderleicht adaptieren.",
          description_2:
            "Du entscheidest WANN der Kunde WAS von dir erhält. Achja, du kannst natürlich die Emails „white labeln“, falls du dich für uns schämst. Es ist OK, wir halten das aus. Und dein Kunde bekommt nur von dir die Emails, während wir für dich die Arbeit machen.",
        },
        {
          badge: "Buchhaltung",
          title: "Buchhaltung leicht gemacht",
          description_1:
            "Nie wieder Zettelwirtschaft! Buchhaltung muss nicht Tage oder Wochen dauern. Bei Quinbook kannst du alle benötigten Daten schnell und einfach exportieren und dem Steuerberater weiterleiten. ",
          description_2:
            "Wir wollen, dass du die gewonnene Zeit nutzt, um dein Business voran zu treiben. Oder bau einfach neue Erlebnisse, wir wollen sie nämlich selbst buchen!",
        },
      ],
    },
    {
      title: t("_2.title"),
      features: generateFeatureItems(t, 5, 2),
      image: "/images/features/feature_2.svg",
      slug: "digital-booking-system",
      bannerImage: "/images/features/feature_2_banner.jpeg",
      subTitle: "Business Management einfach gemacht: Optimiere deinen Workflow",
      functions: [
        {
          badge: "Terminkalender",
          title: "Einfache Terminplanung & Verwaltung",
          description_1:
            "Funktionsvielfalt mit wenigen Klicks! Ob Public-, Private-, Feiertags- oder Sonderslots. Lege deine Slots ganz einfach im Backend an und du hast einen Kalender, mit dem du nahezu alles gestalten kannst. Slotbemerkungen, Firmenbuchungen, Synchronisation, sofortiger Rabatt oder Adressänderungen…wir werden alt, wenn wir hier alles aufzählen. Am besten du machst dir selbst ein Bild.",
          description_2:
            "Oh! Fast hätten wir’s vergessen: Wir haben auch ein Reservierungssystem eingebaut. Damit du den Krieg gegen Doppelbuchungen ein für alle Mal beenden kannst!",
        },
        {
          badge: "Frontend",
          title: "Passe es individuell an",
          description_1:
            "Farben in deinem Corporate Design lassen den perfekt auf Freizeitunternehmen optimierten Kalender in wahrem Glanz erscheinen. Dein erstes Erlebnis ist voll? Der Kunde sieht auf einen Blick, dass bei einem anderen noch etwas frei ist und springt nicht von deiner Website ab, ohne zu buchen!",
          description_2:
            "Individuelle Gestaltungsmöglichkeiten gibt es Unzählige, deswegen hier nur ein paar Beispiele: Newsletter Opt-in, Pflichtfelder, Notifications, wie viele Tage im Voraus welche Zahlungsmöglichkeit genutzt werden darf, Kundenbemerkungen, Spalten-& Zeilenanzahl, uvm.",
        },
        {
          badge: "Gutscheine",
          title: "Gutschein-system",
          description_1:
            "Das Herzstück jedes Freizeitunternehmers. Nutze deine individuelle Grafik, die beim Gutscheinkauf automatisch dem Kunden zum Ausdrucken geschickt wird. Nicht edel genug? Biete zusätzlich für z.B. 3 Euro extra den Versand per Postweg an.",
          description_2:
            "Ohne Gutscheinsystem sollte kein Freizeitunternehmen öffnen: Im Schnitt machen Gutscheine 10 Prozent des Monatsumsatzes aus, der Dezember verdoppelt diesen Schnitt sogar für viele Betreiber. Das Beste: Nach drei Jahren wird gerade einmal die Hälfte aller Gutscheine eingelöst.",
        },
        {
          badge: "Warenkorb",
          title: "Warenkorb-system",
          description_1:
            "Geburtstags, Polterabende oder Firmenevents müssen nicht mühsam einzeln eingebucht werden. Sowohl im Frontend, als auch im Backend, lassen sich große Buchungen auf einmal tätigen und bezahlen.",
          description_2:
            "So können gleich mehrere Räume und Gutscheine gleichzeitig gebucht werden und die Absprungrate ist so gering wie nie.",
        },
        {
          badge: "Statistiken",
          title: "Statistiken",
          description_1:
            "Nie wieder Zettelwirtschaft! Buchhaltung muss nicht Tage oder Wochen dauern. Bei Quinbook kannst du alle benötigten Daten schnell und einfach exportieren und dem Steuerberater weiterleiten. ",
          description_2:
            "Wir wollen, dass du die gewonnene Zeit nutzt, um dein Business voran zu treiben. Oder bau einfach neue Erlebnisse, wir wollen sie nämlich selbst buchen!",
        },
      ],
    },
    {
      title: t("_3.title"),
      description: t("_3.description"),
      features: generateFeatureItems(t, 5, 3),
      image: "/images/features/feature_3.svg",
      slug: "personal-management",
      bannerImage: "/images/features/feature_3_banner.jpeg",
      subTitle: "Mitarbeiter Management kann so einfach sein.",
      functions: [
        {
          badge: "Schichtplanung",
          title: "Schicht-planung",
          description_1:
            "Schnell und effizient die monatliche Planung der Mitarbeiter beherrschen – mit der Quinbook Schichtplanung kein Problem. Slots oder auch ganze Tage können Mitarbeitern zugewiesen werden, diese können sich für bestimmte Slots auch bewerben und sich als Ersatz eintragen lassen. Sowohl du, als auch dein Mitarbeiter haben immer im Blick, wann wer Dienst hat. Zu spät erscheinen, oder Dienste vergessen gehört mit unserer Schichtplanung der Vergangenheit an. Selbstverständlich ist auch eine Tauschfunktion eingebaut, damit sich Mitarbeitern bei Ausfällen direkt um Ersatz kümmern können und es dir einfacher gemacht wird, dein Business zu managen.",
        },
        {
          badge: "Aufgabenverwaltung",
          title: "Aufgaben verwaltung",
          description_1:
            "Ein Kunde hat einen speziellen Wunsch, etwas ist kaputt oder jemand hat noch nicht gezahlt? Mit der Aufgabenverwaltung kannst du direkt einen Mitarbeiter oder dir selbst eine Aufgabe erstellen. ",
          description_2:
            "Deadline und Erinnerungsfunktionen, „offen“, „erledigt“, etc. Markierungen  helfen dir, den Überblick zu behalten.",
        },
        {
          badge: "Zeiterfassung",
          title: "Digitale Zeiterfassung",
          description_1: "Mit der digitalen Stempeluhr sind unnötige und langwierige Arbeitszeiten- und Stundenlisten passé.",
          description_2: "Du siehst auf einen Blick, wann der Mitarbeiter was gemacht hat. Außerdem: Pausen und Notizfunktion.",
        },
        {
          badge: "Mitarbeiter",
          title: "Mitarbeiter verwaltung",
          description_1:
            "Nicht nur gibt es unzählige Profileinstellungen und Informationen, die über Mitarbeiterpersonalakten angelegt werden können, auch detaillierte Berechtigungen können individuell zugewiesen werden. Die Verfügbarkeitsverwaltung ist in Kombination mit der Schichtplanung dann nur das Tüpfelchen auf dem I. Zudem: Interne Kommunikation wird über deinen internen Newsblog und unser Notizsystem, das mit Mitarbeitern und Kundenprofilen verknüpft ist, leicht gemacht. Es lässt dich immer genau nachverfolgen, wann bei wem was passiert ist. So kannst du bei Kundenfeedback sofort der Sache auf den Grund gehen.",
        },
      ],
    },
    {
      title: t("_4.title"),
      description: t("_4.description"),
      features: generateFeatureItems(t, 3, 4),
      image: "/images/features/feature_4.svg",
      slug: "quin-games",
      bannerImage: "/images/features/feature_4_banner.jpeg",
    },
    {
      title: t("_5.title"),
      features: generateFeatureItems(t, 2, 5),
      image: "/images/features/feature_5.svg",
      slug: "quin-tours",
      bannerImage: "/images/features/feature_4_banner.jpeg",
    },
  ];
};
