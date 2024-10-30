import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "../ui/icons";

type MobileNavItemProps = {
  link: {
    label: string;
    path: string;
    items?: {
      label: string;
      path: string;
    }[];
  };
};

const MobileNavItem: FC<MobileNavItemProps> = ({ link }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (link.items && link.items.length) {
      link.items.forEach((item) => {
        if (pathname === item.path) {
          setSubMenuOpen(true);
        }
      });
    }
  }, [link.items, pathname]);

  return (
    <>
      {link.items && link.items.length ? (
        <div className={cn(subMenuOpen ? "bg-primary/10" : "")}>
          <button
            className={cn(
              "py-4 px-6 duration-200 transition-all w-full flex items-center justify-between hover:font-extrabold hover:bg-primary/10"
            )}
          >
            <Link href={link.path} className={cn(subMenuOpen ? "text-primary font-bold" : "")}>{link.label}</Link>
            <Icons.arrowDown   onClick={() => setSubMenuOpen(!subMenuOpen)} className={cn("size-6 text-primary duration-200 transition-all", subMenuOpen ? "rotate-180" : "")} />
          </button>
          <AnimatePresence initial={false}>
            {subMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden w-full"
              >
                {link.items.map((subItem) => (
                  <Link
                    key={subItem.path}
                    href={subItem.path}
                    className={cn(
                      "block py-4 px-10 duration-200 transition-all w-full border-t border-primary/20",
                      pathname === subItem.path ? "bg-primary/10 font-extrabold text-primary" : "hover:font-extrabold hover:bg-primary/10"
                    )}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          href={link.path}
          className={cn(
            "py-4 px-6 duration-200 transition-all w-full",
            pathname === link.path ? "bg-primary/10 font-extrabold text-primary" : "hover:font-extrabold hover:bg-primary/10"
          )}
        >
          {link.label}
        </Link>
      )}
    </>
  );
};

export default MobileNavItem;
