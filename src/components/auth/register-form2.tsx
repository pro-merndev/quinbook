"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { RegisterFormData } from "./register-wrapper";
import RHFInputField from "../hook-form/rhf-input-field";
import { Separator } from "../ui/separator";

const schema = yup
  .object({
    gender: yup.string().required("Gender is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup.string().required("Phone number is required"),
    adminEmail: yup.string().email("Invalid email").required("Email is required"),
  })
  .required();

type Step2Data = Pick<RegisterFormData, "gender" | "firstName" | "lastName" | "phone" | "adminEmail">;

interface Step2FormProps {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
  initialData: Partial<RegisterFormData>;
}

export function RegisterForm2({ onNext, onBack, initialData }: Step2FormProps) {
  const form = useForm<Step2Data>({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  });

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Administration data</h2>
      <p className="text-grey-darker">Great - now we can continue with the administrator data.</p>
      <p className="text-grey-darker">
        The administrator has full access to the system. The e-mail can not be changed later. If you have several locations, each location
        should always have its own e-mail address for the administrator.
      </p>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RHFInputField label="First name" name="firstName" control={form.control} />
              <RHFInputField label="Last name" name="lastName" control={form.control} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RHFInputField
                label="Gender"
                name="gender"
                control={form.control}
                selectOptions={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
              />
              <RHFInputField label="Phone number" name="phone" control={form.control} />
            </div>

            <RHFInputField label="Email address" name="adminEmail" type="email" control={form.control} />
          </div>

          <Separator />
          <div className="flex gap-4">
            <Button type="submit" className="bg-primary">
              NEXT
            </Button>
            <Button type="button" variant="outline" onClick={onBack}>
              BACK
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
