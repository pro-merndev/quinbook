import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import HomeLayout from "@/components/layout/HomeLayout";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Quinbook",
    description: "Das All-In-One Buchungs- & Managementpaket",
    openGraph: {
      title: "Quinbook",
      description: "Das All-In-One Buchungs- & Managementpaket",
      type: "website",
      url: "https://quinbook.vercel.app",
      images: [
        {
          url: "https://quinbook.vercel.app/logo/logo_icon.svg",
          alt: "Quinbook",
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-inter bg-background text-foreground min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <HomeLayout>{children}</HomeLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
