import { navLinks } from "@/constants/nav-links";
import { Link, usePathname } from "@/i18n/routing";
import { cn, scrollToContact } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LocaleSwitch from "./locale-switch";
import PrimaryButton from "../ui/primary-button";
import MobileNavItem from "./mobile-nav-item";

type MobileNavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNavbar: FC<MobileNavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const t = useTranslations();
  const featuresT = useTranslations("Features.items");
  const commonT = useTranslations("Common");
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed px-4 pt-[132px] h-screen w-full z-[49] bg-white/50 backdrop-blur"
        >
          <motion.div
            initial={{ y: "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-50%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-primary-lighter rounded-[20px] flex items-center justify-between max-w-5xl mx-auto overflow-hidden"
            style={{
              boxShadow: "0px 4px 9.2px 0px #2719621A",
            }}
          >
            <div className="flex flex-col w-full">
              {navLinks(t, featuresT).map((link, i) => (
                <MobileNavItem key={i} link={link} />
              ))}

              <div className="px-4 pb-4 flex flex-col">
                <div className="py-4">
                  <LocaleSwitch />
                </div>
                <PrimaryButton className="py-4" onClick={scrollToContact}>
                  {commonT("demo_request")}
                </PrimaryButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
