import { TeamMember } from "../interface/team-member.interface";
import PrimaryBadge from "./primary-badge";

const TeamMemberCard = ({teamMember}: {teamMember: TeamMember}) => {
  return (
    <div>
      <div className="bg-white rounded-3xl border border-grey-main p-6 sm:w-[350px]">
        <img src={teamMember.profilePic} alt="team" className="w-full rounded-lg" />
        <div className="sm:h-[240px] flex flex-col justify-between">
          <div>
            <h6 className="mt-6 font-poppins font-extrabold text-[28px] text-primary">{teamMember.name}</h6>
            <p>{teamMember?.bio}</p>
          </div>
          <div className="mt-5 mb-3">
            <PrimaryBadge>{teamMember?.action?.text}</PrimaryBadge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
