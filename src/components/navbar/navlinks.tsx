"use client";

import { navLinks } from "@/constants/nav-links";
import { Link, usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";

const NavLinks = () => {
  const t = useTranslations();
  const featuresT = useTranslations("Features.items");
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-6">
      {navLinks(t, featuresT).map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={clsx(pathname === link.path ? "font-extrabold" : "hover:font-extrabold", "duration-200 transition-all")}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
