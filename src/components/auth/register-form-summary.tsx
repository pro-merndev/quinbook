"use client";

import { Button } from "@/components/ui/button";
import { RegisterFormData } from "./register-wrapper";
import { Separator } from "../ui/separator";

interface Step4SummaryProps {
  formData: RegisterFormData;
  onBack: () => void;
}

export function RegisterFormSummary({ formData, onBack }: Step4SummaryProps) {
  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Submitting form data:", formData);
    // Implement your submission logic here
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Summary</h2>
      <div>
        <p className="text-grey-darker">Please review your information before submitting. </p>
        <p className="text-grey-darker">Please note, that the registration is non-binding and no costs will occur.</p>
      </div>

      <div>
        <h3 className="text-lg font-medium">Company Data</h3>
        <table className="min-w-full text-sm">
          <tbody>
            <tr className="border-t border-b py-2">
              <td className="py-2 w-1/2">Brand name (Company):</td>
              <td className="py-2">{formData.brandName}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">House name/number and street:</td>
              <td className="py-2">{formData.street}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">Postcode:</td>
              <td className="py-2">{formData.postcode}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">City:</td>
              <td className="py-2">{formData.city}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">Country:</td>
              <td className="py-2">{formData.country}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">Phone Number:</td>
              <td className="py-2">{formData.companyNumber}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">Email Address:</td>
              <td className="py-2">{formData.email}</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-medium mt-6">Personal Information</h3>
        <table className="min-w-full text-sm">
          <tbody>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">First Name:</td>
              <td className="py-2">{formData.firstName}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">Last Name:</td>
              <td className="py-2">{formData.lastName}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">Gender:</td>
              <td className="py-2">{formData.gender}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">Phone:</td>
              <td className="py-2">{formData.phone}</td>
            </tr>
            <tr className="border-t border-b">
              <td className="py-2 w-1/2">Email Address:</td>
              <td className="py-2">{formData.adminEmail}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex pt-4">
        <input type="checkbox" id="agreement" name="agreement" className="block size-6" />
        <label htmlFor="agreement" className="ml-2 text-grey-darker cursor-pointer">
          I have read and agree with the General Terms and Conditions and the Privacy Statement (
          <a href="https://cdn.quinbook.com/agb.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
            AGB
          </a>{" "}
          and{" "}
          <a
            href="https://cdn.quinbook.com/privacy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            Datenschutzerklärung
          </a>{" "}
          in their German abbreviation) for QuinBook by the Woizzer AG.
        </label>
      </div>

      <Separator />
      <div className="flex gap-4">
        <Button onClick={handleSubmit} className="bg-[#00C389] hover:bg-[#00B37D] text-white">
          SUBMIT
        </Button>
        <Button variant="outline" onClick={onBack}>
          BACK
        </Button>
      </div>
    </div>
  );
}
