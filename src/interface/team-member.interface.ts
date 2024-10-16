export interface TeamMember {
  profilePic : string ;
  name: string ;
  bio : string ;
  action?: {
    link: string;
    text: string;
  };
}