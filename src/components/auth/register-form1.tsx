"use client";

import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import RHFInputField from "../hook-form/rhf-input-field";
import { RegisterFormData } from "./register-wrapper";
import { useRouter } from "@/i18n/routing";
import { Separator } from "../ui/separator";

const schema = yup
  .object({
    brandName: yup.string().required("Brand name is required"),
    street: yup.string().required("Street address is required"),
    postcode: yup.string().required("Postcode is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    companyNumber: yup.string().required("Company number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  })
  .required();

type Step1Data = Pick<RegisterFormData, "brandName" | "street" | "postcode" | "city" | "country" | "companyNumber" | "email">;

interface Form1Props {
  onNext: (data: Step1Data) => void;
  initialData: Partial<RegisterFormData>;
}

export function RegisterForm1({ onNext, initialData }: Form1Props) {
  const router = useRouter();

  const form = useForm<Step1Data>({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  });

  const onSubmit = (data: Step1Data) => {
    onNext(data);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Company details</h2>
      <p className="text-grey-darker">
        Please let us know which experience operator you represent. We&apos;ll check that information to ensure that only validated
        providers can utilize the QuinBook platform.
      </p>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            <RHFInputField name="brandName" label="Brand Name (Company)" placeholder="Enter your brand name" control={form.control} />

            <RHFInputField
              name="street"
              label="House Name/Number and Street"
              placeholder="Enter your street address"
              control={form.control}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <RHFInputField name="postcode" label="Postcode" placeholder="Enter your postcode" control={form.control} />

              <RHFInputField name="city" label="City" placeholder="Enter your city" control={form.control} />

              <RHFInputField
                name="country"
                label="Country"
                placeholder="Select your country"
                control={form.control}
                selectOptions={[
                  { value: "af", label: "Afghanistan" },
                  { value: "de", label: "Germany" },
                  { value: "us", label: "United States" },
                ]}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RHFInputField
                name="companyNumber"
                label="Company Number (Central)"
                placeholder="Enter your company number"
                control={form.control}
              />

              <RHFInputField
                name="email"
                label="Email Address for Clients"
                placeholder="Enter your email address"
                type="email"
                control={form.control}
              />
            </div>
          </div>

          <Separator />

          <div className="flex gap-4">
            <Button type="submit" className="bg-primary">
              NEXT
            </Button>
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
