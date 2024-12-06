import { featuresFooterLinks, navigationFooterLinks } from "@/constants/footer-links";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FooterMain = () => {
  const t = useTranslations();
  const featuresT = useTranslations("Features.items");
  const navigationLinks = navigationFooterLinks(t);
  const featuresLinks = featuresFooterLinks(t, featuresT);

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
            <h6 className="text-sm pb-6 font-bold text-primary uppercase">{navigationLinks?.label}</h6>
            <ul className="flex flex-col gap-2">
              {navigationLinks?.items.map((item, index) => (
                <li key={index}>
                  <Link href={item?.path}>{item?.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-sm pb-6 font-bold text-primary uppercase">{featuresLinks?.label}</h6>
            <ul className="flex flex-col gap-2">
              {featuresLinks?.items.map((item, index) => (
                <li key={index}>
                  <Link href={item?.path}>{item?.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-sm pb-6 font-bold text-primary uppercase">{t("Contact.badge")}</h6>
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
