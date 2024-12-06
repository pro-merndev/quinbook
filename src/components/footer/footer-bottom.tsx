import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const FooterBottom = () => {
  const t = useTranslations("Footer");

  return (
    <div className="bg-primary text-white text-sm py-6">
      <div className="container">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-8">
          <p className="text-center sm:text-left">© 2024 — Copyright</p>
          <div className="flex items-center flex-col sm:flex-row gap-6">
            <Link href="/privacy">{t("privacy_policy")}</Link>
            <Link href="/imprint">{t("imprint")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
