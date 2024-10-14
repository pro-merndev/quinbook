"use client";

import { FC } from "react";

type ContactInputProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  [key: string]: any;
};

const ContactInput: FC<ContactInputProps> = ({ label, name, value, onChange, type, ...props }) => {
  return (
    <div className="w-full">
      <label htmlFor={name}>
        <span className="text-grey-darker focus:text-secondary">{label}</span>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full mt-2 outline-none border-b border-grey-darker bg-transparent text-xl focus:border-secondary"
          {...props}
        />
      </label>
    </div>
  );
};

export default ContactInput;
