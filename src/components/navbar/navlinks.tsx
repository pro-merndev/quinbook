"use client";

import { Link, usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";

const NavLinks = () => {
  const t = useTranslations("NavLink");
  const pathname = usePathname();

  const links = [
    {
      label: t("functions"),
      path: "/functions",
    },
    {
      label: t("pricing"),
      path: "/pricing",
    },
    {
      label: t("news"),
      path: "/news",
    },
    {
      label: t("about"),
      path: "/about",
    },
    {
      label: t("login"),
      path: "/login",
    },
  ];

  return (
    <div className="flex items-center gap-6">
      {links.map((link) => (
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
