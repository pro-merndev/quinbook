import { TeamMember } from "@/components/interface/team-member.interface";

export const TeamMembers: TeamMember[] = [
  {
    profilePic: "/images/about/team-member.png",
    name: "Heiko Fuchs",
    bio: "„Quinbook wurde ursprünglich für unseren eigenen Escape Room Unternehmen entwickelt. Nun sollen es alle nutzen können.“",
    action: {
      text: "Vorstand",
      link: "#",
    },
  },
  {
    profilePic: "/images/about/team-member-2.png",
    name: "Albert Hollenbach",
    bio: "„Das Feedback unserer Kunden ist der Motor der uns antreibt. Ohne die Freizeit Betreiber wären wir anstatt einer maßgeschneiderten Lösung nur ein austauschbares Buchungssystem.“",
    action: {
      text: "Vorstand",
      link: "#",
    },
  },
];
