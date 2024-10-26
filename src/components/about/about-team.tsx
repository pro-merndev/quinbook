import { TeamMembers } from "@/constants/team-members";
import PrimaryBadge from "../ui/primary-badge";
import TeamMemberCard from "../ui/team-member-card";
import FadeIn from "../animation/fade-in";

const AboutTeam = () => {
  return (
    <div id="team-member" className="container">
      <FadeIn>
        <h5 className="flex justify-center items-center">
          <PrimaryBadge>Das team</PrimaryBadge>
        </h5>
        <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">Über Uns</h3>
      </FadeIn>
      <div className="mt-10 flex max-md:flex-col items-center justify-center gap-6">
        {TeamMembers.map((team, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <TeamMemberCard teamMember={team} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
