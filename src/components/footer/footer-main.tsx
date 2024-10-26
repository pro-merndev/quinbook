import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FooterMain = () => {
  const t = useTranslations("NavLink");
  return (
    <div className="bg-grey-main py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 justify-center text-center sm:justify-start sm:text-left">
          <div>
            <Link href="/">
              <Image src="/logo/logo.svg" alt="QuinBook Logo" width={200} height={60} priority className="" />
            </Link>
          </div>
          <div>
            <h6 className="text-sm pb-6 font-bold text-primary uppercase">Navigation</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">{t("home")}</Link>
              </li>
              <li>
                <Link href="/pricing">{t("pricing")}</Link>
              </li>
              <li>
                <Link href="/news">{t("news")}</Link>
              </li>
              <li>
                <Link href="/about">{t("about")}</Link>
              </li>
              <li>
                <Link href="/">{t("login")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm pb-6 font-bold text-primary uppercase">Funktionen</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Erlebnis Management</Link>
              </li>
              <li>
                <Link href="/">Buchungssystem</Link>
              </li>
              <li>
                <Link href="/">Mitarbeitermanagement</Link>
              </li>
              <li>
                <Link href="/">Anwendungen</Link>
              </li>
              <li>
                <Link href="/">QuinTours</Link>
              </li>
              <li>
                <Link href="/">QuinGames</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm pb-6 font-bold text-primary uppercase">Kontakt</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="tel:+4940228830">+49 (0)40 22883-0</a>
              </li>
              <li>
                <a href="mailto:info@quinbook.com">info@quinbook.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
