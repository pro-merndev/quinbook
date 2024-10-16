import Image from "next/image";
import { IFeature } from "../../interface/feature.interface";
import PrimaryButton from "./primary-button";

const FeaturesCard = ({ feature }: { feature: IFeature }) => {
  return (
    <div className="max-w-[900px] mx-auto flex md:even:flex-row-reverse max-md:flex-col justify-between items-center md:gap-28 gap-10">
      <div>
        <div>
          <span className="flex justify-center items-center w-52 h-52 bg-grey-main rounded-full">
            <Image src={feature.icon} alt="example-1" width={120} height={120} />
          </span>
        </div>
      </div>
      <div>
        <h5 className="font-poppins font-extrabold md:text-4xl text-3xl md:leading-[54px] leading-10 pb-4 max-md:text-center">{feature.title}</h5>
        <p className="text-2xl leading-7 max-md:text-center">{feature.description}</p>
        {feature?.action && (
          <div className="mt-8 max-md:flex max-md:justify-center max-md:items-center">
            <PrimaryButton>{feature.action.text}</PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesCard;
