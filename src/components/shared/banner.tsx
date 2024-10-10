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
    <section className={cn("py-20", className)}>
      <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <h1 className="text-[72px] leading-[90px] mb-4 font-poppins font-black max-w-4xl">{title}</h1>
        <p className="max-w-xl text-2xl">{description}</p>
        {button && <div className="mt-10">{button}</div>}
      </div>
    </section>
  );
};

export default Banner;
