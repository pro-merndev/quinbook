import { cn } from "@/lib/utils";

interface IProps {
  step: number;
  totalSteps: number;
  isStepComplete: (step: number) => boolean;
}

const Stepper = ({ step, totalSteps, isStepComplete }: IProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center flex-1 last:flex-none">
          <div
            className={cn(
              "size-12 border-2 border-primary-lighter rounded-full flex items-center justify-center text-white",
              index + 1 === step ? "bg-primary" : index + 1 < step || isStepComplete(index + 1) ? "bg-green-500" : "bg-grey-darker"
            )}
          >
            {index + 1 < step || isStepComplete(index + 1) ? "✓" : index + 1}
          </div>
          {index < totalSteps - 1 && <div className={`h-[2px] flex-1 ${index + 1 < step ? "bg-green-500" : "bg-grey-darker"}`} />}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
