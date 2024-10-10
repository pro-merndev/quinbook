"use client";

import { HTMLAttributes } from "react";

type IconProps = HTMLAttributes<SVGElement>;

export const Icons = {
  arrowRight: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 12L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
      <path
        d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
