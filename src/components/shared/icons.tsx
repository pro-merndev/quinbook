"use client";

import { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<SVGElement>;

export const Icons = {
  arrowRight: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowRight2: (props: IconProps) => (
    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.52954 16.0359C5.19854 15.4866 5.3229 14.765 5.84133 14.3609L11.6991 9.79917L5.55436 5.64316C4.96678 5.24565 4.81168 4.44736 5.20989 3.85937C5.60741 3.27179 6.40611 3.11738 6.99369 3.5149L16.0692 9.6529L7.42008 16.3876C6.86082 16.8239 6.05342 16.7234 5.61787 16.1638C5.58553 16.1226 5.55594 16.0797 5.52954 16.0359Z"
        fill="currentColor"
      />
    </svg>
  ),
};
