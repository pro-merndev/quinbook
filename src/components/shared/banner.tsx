import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC } from "react";

type IProps = {
  title: string;
  description: string;
  button?: React.ReactNode;
  className?: ClassValue;
};

const Banner: FC<IProps> = ({ title, description, button, className }) => {
  return (
    <section
      className={cn(className, "py-12 lg:py-20 min-h-[320px] sm:min-h-[328px] md:min-h-[344px] lg:min-h-[590px] grid place-items-center")}
    >
      <div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-[72px] lg:leading-[90px] mb-4 font-poppins font-black uppercase",
              title?.length > 30 ? "max-w-[950px]" : "max-w-3xl"
            )}
          >
            {title}
          </h1>
          <p className={cn("text-lg lg:text-2xl", description?.length > 100 ? "max-w-4xl" : "max-w-xl")}>{description}</p>
          {button && <div className="mt-10">{button}</div>}
        </div>
      </div>
    </section>
  );
};

export default Banner;
