"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import NavLinks from "./navlinks";
import LocaleSwitch from "./locale-switch";
import { useTranslations } from "next-intl";
import PrimaryButton from "../ui/primary-button";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { useState } from "react";
import MobileNavbar from "./mobile-navbar";
import { scrollToContact } from "@/lib/utils";

const Navbar = () => {
  const t = useTranslations("Common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-10 lg:top-12 left-0 right-0 z-50 px-4 lg:px-2">
        <div
          className="bg-primary-lighter rounded-[20px] px-3 py-1.5 flex items-center justify-between max-w-5xl mx-auto"
          style={{
            boxShadow: "0px 4px 9.2px 0px #2719621A",
          }}
        >
          {/* Logo */}
          <Link href="/">
            <Image src="/logo/logo.svg" alt="QuinBook Logo" width={200} height={60} priority />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLinks />
            <LocaleSwitch />
            <PrimaryButton onClick={scrollToContact}>{t("demo_request")}</PrimaryButton>
          </div>

          <Button size="icon" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full lg:hidden">
            {isMenuOpen ? <Icons.close className="size-6" /> : <Icons.menu className="size-6" />}
          </Button>
        </div>
      </nav>

      <MobileNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Navbar;
