import { Link } from "@/i18n/routing";
import Image from "next/image";
import NavLinks from "./navlinks";
import LocaleSwitch from "./locale-switch";
import PrimaryButton from "../shared/primary-button";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Common");
  return (
    <nav className="fixed top-12 left-0 right-0 z-50 px-2">
      <div
        className="bg-primary-lighter rounded-[20px] px-3 py-1.5 flex items-center justify-between max-w-5xl mx-auto"
        style={{
          boxShadow: "0px 4px 9.2px 0px #2719621A",
        }}
      >
        {/* Logo */}
        <Link href="/">
          <Image src="/logo/logo.svg" alt="QuinBook Logo" width={200} height={60} priority className="hidden sm:block" />
          <Image src="/logo/logo_icon.svg" alt="QuinBook Logo" width={46} height={46} priority className="block sm:hidden" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <NavLinks />
          <LocaleSwitch />
          <PrimaryButton>{t("demo_request")}</PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
