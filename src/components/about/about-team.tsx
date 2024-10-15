import { TeamMembers } from "@/constants/team-members";
import PrimaryBadge from "../ui/primary-badge";
import TeamMemberCard from "../ui/team-member-card";

const AboutTeam = () => {
  return (
    <div className="container">
      <h5 className="flex justify-center items-center">
        <PrimaryBadge>Das team</PrimaryBadge>
      </h5>
      <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">Über Uns</h3>
      <div className="mt-10 flex max-md:flex-col items-center justify-center gap-6">
        {TeamMembers.map((team, index) => (
          <TeamMemberCard teamMember={team} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
