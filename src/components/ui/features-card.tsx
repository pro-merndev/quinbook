"use client";
import { useRouter } from "@/i18n/routing";
import Image from "next/image";
import { IFeature } from "../../interface/feature.interface";
import PrimaryButton from "./primary-button";
import { cn } from "@/lib/utils";

type FeaturesCardProps = {
  index: number;
  feature: IFeature;
};

const FeaturesCard = ({ feature, index }: FeaturesCardProps) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "max-w-[900px] mx-auto flex max-md:flex-col justify-between items-center md:gap-28 gap-10",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div>
        <div>
          <div className="flex justify-center items-center size-[150px] md:size-52 bg-grey-main rounded-full">
            <div className="size-[90px] md:size-30 relative">
              <Image src={feature.icon} alt="example-1" fill />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="font-poppins font-extrabold md:text-4xl text-2xl md:leading-[54px] leading-10 pb-4 max-md:text-center">
          {feature.title}
        </h5>
        <p className="text-xl md:text-2xl leading-7 max-md:text-center">{feature.description}</p>
        {feature?.action && (
          <div className="mt-8 max-md:flex max-md:justify-center max-md:items-center">
            <PrimaryButton onClick={feature?.action ? () => router.push(feature?.action?.link as string) : undefined}>
              {feature.action.text}
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesCard;
