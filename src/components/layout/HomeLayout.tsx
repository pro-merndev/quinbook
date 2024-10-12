import Navbar from "@/components/navbar/navbar";
import { FC, PropsWithChildren } from "react";
import Footer from "../footer/footer";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-36 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
