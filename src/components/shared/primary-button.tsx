"use client";

import { FC } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Icons } from "./icons";

type PrimaryButtonProps = ButtonProps & {
  withArrow?: boolean;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, withArrow = true }) => {
  return (
    <Button className="bg-secondary hover:bg-secondary text-white py-4 px-6 rounded-[12px] font-poppins gap-4">
      {children}
      {withArrow && <Icons.arrowRight className="size-5" />}
    </Button>
  );
};

export default PrimaryButton;
