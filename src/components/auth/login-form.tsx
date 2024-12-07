"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import RHFInputField from "../hook-form/rhf-input-field";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const t = useTranslations("NavLink");
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <div className="min-w-md max-w-lg mx-auto px-4 py-12 min-h-[75vh] flex items-center justify-center">
      <div className="w-full bg-primary-lighter rounded-[20px] p-4 lg:p-8 shadow-[0px_4px_9.2px_0px_#2719621A]">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{t("login")}</h1>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
              <RHFInputField name="email" label="Emails" placeholder="Email Address" control={form.control} />

              <div className="relative">
                <RHFInputField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  control={form.control}
                  type={showPassword ? "text" : "password"}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-3 text-grey-darker">
                  {showPassword ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                </button>
              </div>

              <div className="text-right">
                <Link href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Button type="submit" className="w-full bg-primary">
                {t("login")}
              </Button>
            </form>
          </FormProvider>

          <div className="text-center">
            <span className="text-grey-darker">No Account?</span>{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
