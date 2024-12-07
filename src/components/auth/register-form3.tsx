"use client";

import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import RHFInputField from "../hook-form/rhf-input-field";
import { RegisterFormData } from "./register-wrapper";
import { Separator } from "../ui/separator";

const schema = yup
  .object({
    rooms: yup.string().required("No of Rooms is required"),
  })
  .required();

type Step3Data = Pick<RegisterFormData, "rooms">;

interface Step3FormProps {
  onNext: (data: Step3Data) => void;
  onBack: () => void;
  initialData: Partial<RegisterFormData>;
}

export function RegisterForm3({ onNext, onBack, initialData }: Step3FormProps) {
  const form = useForm<Step3Data>({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  });

  const options = [
    { value: "0", label: "No rooms" },
    ...Array.from({ length: 30 }, (_, i) => ({ value: (i + 1).toString(), label: (i + 1).toString() })),
    { value: "more", label: "More than 30" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Additional disclosure</h2>
      <p className="text-grey-darker">Please select the number of escape games (rooms) or activities or events!</p>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
          <div className="space-y-2">
            <RHFInputField
              label="Number of escape games (rooms) / activities / events"
              name="rooms"
              control={form.control}
              selectOptions={options}
            />
          </div>

          <p className="text-grey-darker">You&apos;re just one step away from completing your registration...</p>
          <Separator />
          <div className="flex gap-4">
            <Button type="submit">NEXT</Button>
            <Button type="button" variant="outline" onClick={onBack}>
              BACK
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
