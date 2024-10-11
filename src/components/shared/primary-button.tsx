"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Icons } from "./icons";

type PrimaryButtonProps = ButtonProps & {
  withArrow?: boolean;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, withArrow = true, className, ...rest }) => {
  return (
    <Button className={cn("bg-secondary hover:bg-secondary text-white py-4 px-6 rounded-[12px] font-poppins gap-4", className)} {...rest}>
      {children}
      {withArrow && <Icons.arrowRight className="size-5" />}
    </Button>
  );
};

export default PrimaryButton;
