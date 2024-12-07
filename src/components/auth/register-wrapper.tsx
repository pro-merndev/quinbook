"use client";

import { useState } from "react";
import { Separator } from "../ui/separator";
import Stepper from "../ui/stepper";
import { RegisterForm1 } from "./register-form1";
import { RegisterForm2 } from "./register-form2";
import { RegisterFormSummary } from "./register-form-summary";
import { RegisterForm3 } from "./register-form3";
// import { RegisterForm2 } from "./register-form2";
// import { RegisterFormSummary } from "./register-form-summary";

export type RegisterFormData = {
  // Step 1
  brandName: string;
  street: string;
  postcode: string;
  city: string;
  country: string;
  companyNumber: string;
  email: string;
  // Step 2
  gender: string;
  firstName: string;
  lastName: string;
  phone: string;
  adminEmail: string;
  // Step 3 (placeholder for now)
  rooms: string;
};

const RegisterWrapper = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RegisterFormData>({} as RegisterFormData);
  const totalSteps = 4;

  const handleNext = (stepData: Partial<RegisterFormData>) => {
    setFormData((prevData) => ({ ...prevData, ...stepData }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const isStepComplete = (stepNumber: number) => {
    return step > stepNumber;
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-primary-lighter rounded-[20px] p-4 lg:p-8 shadow-[0px_4px_9.2px_0px_#2719621A]">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Create a new account</h1>
          <p className="text-gray-600 leading-relaxed">
            You&apos;re an escape game or experience operator or want to open an experience? We&apos;d be more than happy to then welcome
            you in our QuinBook family. If you&apos;re an employee of a company already using QuinBook and want to gain access, than please
            contact to your QuinBook administrator and please do not use this registration wizard. Thank you.
          </p>
        </div>

        <Separator className="my-8" />

        <Stepper step={step} totalSteps={totalSteps} isStepComplete={isStepComplete} />

        <div className="mt-8">
          {step === 1 ? (
            <RegisterForm1 onNext={handleNext} initialData={formData} />
          ) : step === 2 ? (
            <RegisterForm2 onNext={handleNext} onBack={handleBack} initialData={formData} />
          ) : step === 3 ? (
            <RegisterForm3 onNext={handleNext} onBack={handleBack} initialData={formData} />
          ) : step === 4 ? (
            <RegisterFormSummary formData={formData} onBack={handleBack} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RegisterWrapper;
