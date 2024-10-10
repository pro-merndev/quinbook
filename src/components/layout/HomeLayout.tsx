import { FC, PropsWithChildren } from "react";
import Navbar from "@/components/navbar/navbar";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-36 min-h-screen">{children}</main>
    </>
  );
};

export default HomeLayout;
