import { features } from "@/constants/home-features";
import FeaturesCard from "../ui/features-card";
import PrimaryBadge from "../ui/primary-badge";
import FadeIn from "../animation/fade-in";

const Features = () => {
  return (
    <div className="container py-12 lg:py-20 overflow-hidden">
      <FadeIn>
        <h5 className="flex justify-center items-center">
          <PrimaryBadge>Funktionen</PrimaryBadge>
        </h5>
      </FadeIn>
      <FadeIn>
        <h3 className="text-center font-poppins text-[42px] font-extrabold uppercase py-5">Die Quinboosts</h3>
      </FadeIn>
      <div className="pt-20 flex flex-col md:gap-36 gap-10">
        {features.map((feature, i) => (
          <FadeIn key={i} direction={i % 2 === 0 ? "left" : "right"}>
            <FeaturesCard index={i} feature={feature} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Features;
