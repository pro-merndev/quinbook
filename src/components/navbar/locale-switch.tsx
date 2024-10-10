"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import config from "@/config";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTransition } from "react";

const LocaleSwitch = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const handleChangeLanguage = (newLang: string) => {
    startTransition(() => {
      const newPath = pathname;
      router.replace(newPath, { locale: newLang, scroll: true });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full p-1 size-8">
          <Image src={`/flags/${currentLocale}.svg`} alt={currentLocale} width={21} height={15} priority />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        {config.localLanguages.map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => handleChangeLanguage(value)}
            className={cn(
              value === currentLocale ? "bg-primary-lighter text-primary" : "text-foreground",
              "font-semibold gap-2 cursor-pointer py-2"
            )}
          >
            <Image src={`/flags/${value}.svg`} alt={currentLocale} width={21} height={15} priority />
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitch;
