import RegisterWrapper from "@/components/auth/register-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a new account",
  description: "Register page",
};

const RegisterPage = () => {
  return <RegisterWrapper />;
};

export default RegisterPage;
