import { features } from "@/constants/features";
import Image from "next/image";
import PrimaryBadge from "../shared/primary-badge";
import PrimaryButton from "../shared/primary-button";

const HomeFeatures = () => {
  return (
    <div className="container py-12 lg:py-20 overflow-hidden">
      <h5 className="flex justify-center items-center">
        <PrimaryBadge>Funktionen</PrimaryBadge>
      </h5>
      <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">Die Quinboosts</h3>
      <div className="pt-20 flex flex-col md:gap-36 gap-10">
        {features.map((feature, i) => (
          <div key={i} className="max-w-[900px] mx-auto flex md:even:flex-row-reverse max-md:flex-col justify-between items-center md:gap-28 gap-10">
            <div>
              <div>
                <span className="flex justify-center items-center w-52 h-52 bg-grey-main rounded-full">
                  <Image src={feature.icon} alt="example-1" width={120} height={120} />
                </span>
              </div>
            </div>
            <div>
              <h5 className="font-poppins font-extrabold md:text-4xl text-3xl md:leading-[54px] leading-10 pb-4">{feature.title}</h5>
              <p className="text-2xl leading-7">{feature.description}</p>
              {feature?.action && (
                <div className="mt-8">
                  <PrimaryButton>Unsere Preise</PrimaryButton>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
