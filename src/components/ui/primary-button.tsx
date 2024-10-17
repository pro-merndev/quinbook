"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Icons } from "./icons";

type PrimaryButtonProps = ButtonProps & {
  withArrow?: boolean;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, withArrow = true,   onClick, className, ...rest }) => {
  // const handleContact = () => {
  //   const contact = document.getElementById("contact");
  //   if (contact) {
  //     const offset = bigOffset ? 150 : 100; // Adjust the offset value as needed
  //     const elementPosition = contact.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition - offset;

  //     window.scrollBy({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  // const handlePricing = () => {
  //   const contact = document.getElementById("pricing");
  //   if (contact) {
  //     const offset = bigOffset ? 150 : 100; // Adjust the offset value as needed
  //     const elementPosition = contact.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition - offset;

  //     window.scrollBy({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <Button
      className={cn("bg-secondary hover:bg-secondary text-white py-4 px-6 rounded-[12px] font-poppins gap-4", className)}
      onClick={onClick}
      {...rest}
    >
      {children}
      {withArrow && <Icons.arrowRight className="size-5" />}
    </Button>
  );
};

export default PrimaryButton;
