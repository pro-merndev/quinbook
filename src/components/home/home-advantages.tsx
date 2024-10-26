"use client";
import { useTranslations } from "next-intl";
import FadeIn from "../animation/fade-in";
import PrimaryBadge from "../ui/primary-badge";
import PrimaryButton from "../ui/primary-button";

const HomeAdvantages = () => {
  const t = useTranslations("Home.advantages");
  const handleContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      const offset = 100; // Adjust the offset value as needed
      const elementPosition = contact.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container py-12 lg:py-20">
      <FadeIn>
        <h5 className="flex justify-center items-center">
          <PrimaryBadge>{t("badge")}</PrimaryBadge>
        </h5>
      </FadeIn>
      <FadeIn>
        <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">{t("title")}</h3>
      </FadeIn>
      <div className="grid grid-cols-12 gap-6 mt-10">
        {[1, 2, 3].map((i) => (
          <FadeIn key={i} delay={i * 0.2} distance={(i + 1) * 50} className="lg:col-span-4 col-span-12" direction="up">
            <div
              key={i}
              className="h-full p-8 lg:p-12 bg-white even:bg-grey-main rounded-3xl border border-grey-main hover:bg-grey-main transition-all duration-500 "
            >
              <h6 className="font-poppins text-2xl font-extrabold">{t(`items._${i}.title` as any)}f</h6>
              <p className="text-xl pt-5 leading-8">{t(`items._${i}.description` as any)}f</p>
            </div>
          </FadeIn>
        ))}
        <FadeIn className="col-span-12" delay={2 * 0.2}>
          <div className="p-8 lg:p-12 rounded-3xl border border-grey-dark bg-grey-main">
            <h4 className="font-poppins font-extrabold text-4xl lg:text-7xl pb-6">{t("cta.title")}</h4>
            <p className="text-xl lg:text-2xl">{t("cta.descriptionLine1")}</p>
            <p className="text-xl lg:text-2xl">{t("cta.descriptionLine2")}</p>
            <PrimaryButton onClick={handleContact} className="mt-8">
              {t("cta.actionText")}
            </PrimaryButton>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default HomeAdvantages;
