"use client";
import Image from "next/image";
import { Icons } from "../ui/icons";

const methodsItems = [
  "Direkter Zahlungsverkehr mit externen Zahlungsanbietern",
  "Verschlüsselte Kommunikation",
  "Server-Hosting in Deutschland",
  "Tägliche Backups",
  "Viele Exportfunktionen",
];

const PricingPaymentMethods = () => {
  return (
    <div className="container overflow-hidden">
      <div className="sm:p-12 p-5 bg-white rounded-3xl border border-grey-main">
        <div className="md:grid grid-cols-12  gap-12">
          <div className="col-span-7 flex  justify-center items-center">
            <div>
              <h5 className="font-poppins font-extrabold sm:text-[42px] text-3xl">Unsere Zahlungsarten</h5>
              <div className="mt-6 flex flex-col gap-3">
                {methodsItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="width-6">
                      <div className="grid place-items-center bg-primary rounded-full p-1 size-6">
                        <Icons.arrowRight2 className="size-3 text-white" />
                      </div>
                    </div>
                    <div className="text-[20px] leading-7 ">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-5 bg-grey-main rounded-3xl p-12 flex justify-center items-center max-md:mt-10">
            <Image src="/images/pricing/payment-methos-group.png" alt="payment methods" width={70} height={308} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPaymentMethods;
