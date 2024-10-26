import { useTranslations } from "next-intl";
import Image from "next/image";
import PrimaryButton from "../ui/primary-button";
import FadeIn from "../animation/fade-in";

const FeaturesServices = () => {
  const t = useTranslations("Features.services");

  return (
    <section className="container pb-16 lg:pb-[100px]">
      <div className="grid grid-cols-12 gap-6 mt-10">
        {[1, 2, 3].map((i) => (
          <FadeIn key={i} className="lg:col-span-4 col-span-12">
            <div className="p-6 lg:p-12 bg-white rounded-3xl border border-grey-main hover:bg-grey-main transition-all duration-300 cursor-default">
              <Image src={`/images/features/service_${i}.svg`} alt={t(`_${i}.title` as any)} width={80} height={80} />
              <h6 className="font-poppins text-2xl font-extrabold mt-8">{t(`_${i}.title` as any)}</h6>
              <p className="text-xl mt-6 leading-8">{t(`_${i}.description` as any)}f</p>
            </div>
          </FadeIn>
        ))}
        <FadeIn className="col-span-12">
          <div className="p-6 lg:p-12 rounded-3xl border border-grey-main bg-white flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h6 className="font-poppins text-2xl font-extrabold">{t(`_4.title`)}</h6>
              <p className="text-xl mt-6 max-w-2xl">{t(`_4.description`)}</p>
              <PrimaryButton className="mt-8">{t(`_4.btn`)}</PrimaryButton>
            </div>
            <div className="relative w-[80px] h-[80px] lg:w-[311px] lg:h-[301px]">
              <Image src={`/images/features/service_4.svg`} alt={t(`_4.title`)} fill />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturesServices;
