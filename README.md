# Quinbook

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

Quinbook is a modern web application designed to provide users with an intuitive and seamless experience.

## Features

- Fast and responsive user interface
- Server-side rendering and static site generation
- Automatic font optimization
- Easy deployment on Vercel

## Key Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Radix UI
- React Hook Form
- Framer Motion

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Internationalization (i18n) Setup

This project uses `next-intl` for internationalization. Follow these steps to configure:

### Install dependencies:

```bash
npm install next-intl
# or
yarn add next-intl
# or
pnpm add next-intl
```

### Create locale files:

1. Create `/src/locales/` directory
2. Add language JSON files (e.g., `en.json`, `de.json`)
3. Structure translations in JSON format

### Configure i18n routing (`/src/i18n/routing.ts`):

```typescript
// Example configuration
import { NextIntlProvider } from 'next-intl';

export default function App({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
```

### Set up request handler (`/src/i18n/request.ts`):

```typescript
// Example request handler
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) notFound();

  return {
    messages: (await import(`@/locales/${locale}.json`)).default,
  };
});

```

### Usage in components:

```typescript
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('MyComponent');
  return <p>{t('welcomeMessage')}</p>;
}
```

For detailed implementation, refer to the project's i18n configuration files in `/src/i18n/`.
For more information, refer to the [next-intl documentation](https://next-intl-docs.vercel.app/).
