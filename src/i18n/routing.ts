import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import config from "@/config";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: config.localLanguages.map((l) => l.value),

  // Used when no locale matches
  defaultLocale: config.defaultLanguage,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);
