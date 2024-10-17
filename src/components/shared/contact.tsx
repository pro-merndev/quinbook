"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import ContactInput from "../ui/contact-input";
import PrimaryBadge from "../ui/primary-badge";
import PrimaryButton from "../ui/primary-button";
import FadeIn from "../animation/fade-in";
import ZoomIn from "../animation/zoom-in";

type ContactProps = {
  className?: string;
};

const Contact: FC<ContactProps> = ({ className }) => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className={cn(className, "bg-white pb-16 lg:pb-[100px]")}>
      <div className="container max-w-4xl flex flex-col items-center justify-center">
        <FadeIn>
          <PrimaryBadge>{t("badge")}</PrimaryBadge>
        </FadeIn>
        <FadeIn>
          <h2
            className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-[72px] lg:leading-[108px] my-4 font-poppins font-extrabold capitalize")}
          >
            {t("title")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-center">{t("description")}</p>
        </FadeIn>

        <form className="w-full" onSubmit={handleSubmit}>
          <FadeIn>
            <div className="my-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactInput label={t("first_name")} name="first_name" value={formData.first_name} onChange={handleChangeField} required />
              <ContactInput label={t("last_name")} name="last_name" value={formData.last_name} onChange={handleChangeField} required />
              <ContactInput label={t("email")} name="email" value={formData.email} onChange={handleChangeField} type="email" required />
              <ContactInput label={t("subject")} name="subject" value={formData.subject} onChange={handleChangeField} />
              <div className="md:col-span-2">
                <ContactInput label={t("message")} name="message" value={formData.message} onChange={handleChangeField} required />
              </div>
            </div>
          </FadeIn>

          <ZoomIn delay={0.4}>
            <PrimaryButton typeof="submit" className="w-full py-4 h-auto">
              {t("btn")}
            </PrimaryButton>
          </ZoomIn>
        </form>
      </div>
    </section>
  );
};

export default Contact;
