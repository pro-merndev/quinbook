import React from "react";

const PrimaryBadge = ({ children }: { children: React.ReactNode }) => {
  return <div className="inline-block font-poppins font-extrabold text-sm uppercase bg-primary py-3 px-4 rounded-full text-white">{children}</div>;
};

export default PrimaryBadge;
