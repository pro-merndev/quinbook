import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { useLocale } from "next-intl";
import { FC } from "react";

type IProps = {
  title: string;
  description: string;
  button?: React.ReactNode;
  className?: ClassValue;
};

const Banner: FC<IProps> = ({ title, description, button, className }) => {
  const locale = useLocale();
  return (
    <section className={cn(className)}>
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          className={cn(
            "text-4xl md:text-5xl lg:text-[72px] lg:leading-[90px] mb-4 font-poppins font-black uppercase",
            title?.length > 30 ? "max-w-4xl" : "max-w-3xl"
          )}
        >
          {title}
        </h1>
        <p className={cn("text-lg lg:text-2xl", description?.length > 100 ? "max-w-4xl" : "max-w-xl")}>{description}</p>
        {button && <div className="mt-10">{button}</div>}
      </div>
    </section>
  );
};

export default Banner;
