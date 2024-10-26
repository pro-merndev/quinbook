import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToContact = () => {
  const contact = document.getElementById("contact");
  if (contact) {
    const offset = 150;
    const elementPosition = contact.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
