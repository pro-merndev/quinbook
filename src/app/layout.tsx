import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-inter bg-background text-foreground min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
