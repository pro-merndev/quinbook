import React from "react";

const PrimaryBadge = ({ children }: { children: React.ReactNode }) => {
  return <span className="font-poppins font-extrabold text-sm uppercase bg-primary py-3 px-4 rounded-full text-white">{children}</span>;
};

export default PrimaryBadge;
