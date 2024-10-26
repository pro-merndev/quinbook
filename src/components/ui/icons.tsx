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
  menu: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.28613 7.71423H22.7147" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.28613 16.2856H22.7147" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  close: (props: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 1L1 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 1L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrowDown: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.0707 13.314L17.0207 8.364C17.1129 8.26849 17.2232 8.19231 17.3453 8.1399C17.4673 8.08749 17.5985 8.05991 17.7313 8.05875C17.864 8.0576 17.9957 8.0829 18.1186 8.13318C18.2415 8.18346 18.3532 8.25772 18.4471 8.35161C18.5409 8.4455 18.6152 8.55715 18.6655 8.68005C18.7158 8.80295 18.7411 8.93463 18.7399 9.06741C18.7388 9.20018 18.7112 9.3314 18.6588 9.45341C18.6063 9.57541 18.5302 9.68576 18.4347 9.778L12.7777 15.435C12.5901 15.6225 12.3358 15.7278 12.0707 15.7278C11.8055 15.7278 11.5512 15.6225 11.3637 15.435L5.70666 9.778C5.61115 9.68576 5.53496 9.57541 5.48255 9.45341C5.43014 9.3314 5.40256 9.20018 5.4014 9.06741C5.40025 8.93463 5.42555 8.80295 5.47583 8.68005C5.52611 8.55715 5.60037 8.4455 5.69426 8.35161C5.78815 8.25772 5.89981 8.18346 6.0227 8.13318C6.1456 8.0829 6.27728 8.0576 6.41006 8.05875C6.54284 8.05991 6.67406 8.08749 6.79606 8.1399C6.91806 8.19231 7.02841 8.26849 7.12066 8.364L12.0707 13.314Z"
        fill="currentColor"
      />
    </svg>
  ),
};
