"use client";

import { navLinks } from "@/constants/nav-links";
import { Link, usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useState } from "react";

const NavLinks = () => {
  const t = useTranslations();
  const featuresT = useTranslations("Features.items");

  return (
    <div className="flex items-center gap-6">
      {navLinks(t, featuresT).map((link) => (
        <NavLinkItem key={link.path} link={link} />
      ))}
    </div>
  );
};

const NavLinkItem = ({ link }: { link: any }) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div key={link.path} className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link
        key={link.path}
        href={link.path}
        className={clsx(pathname === link.path ? "font-extrabold" : "hover:font-extrabold", "duration-200 transition-all")}
      >
        {link.label}
      </Link>

      {link?.items && link?.items?.length && (
        <div
          className={clsx(
            "absolute top-3 left-1/2 -translate-x-1/2 transform w-[270px] pt-12 transition-all duration-200 scale-95",
            isHovered ? "scale-100 opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-primary-lighter rounded-[20px] overflow-hidden shadow-[0px_4px_9.2px_0px_#2719621A]">
            {link.items.map((subItem: any) => (
              <Link
                key={subItem.path}
                href={subItem.path}
                className={clsx(
                  "block py-4 px-6 duration-200 transition-all w-full",
                  pathname === subItem.path ? "bg-primary/10 font-extrabold text-primary" : "hover:font-extrabold hover:bg-primary/10 hover:text-primary"
                )}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
