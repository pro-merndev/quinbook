import type { Metadata } from "next";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
